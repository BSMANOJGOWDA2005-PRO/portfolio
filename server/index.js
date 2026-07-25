const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const DEFAULT_PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// File storage directory setup
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const contactsFile = path.join(dataDir, 'contacts.json');
const analyticsFile = path.join(dataDir, 'analytics.json');

// Initialize JSON storage files if they don't exist
if (!fs.existsSync(contactsFile)) {
  fs.writeFileSync(contactsFile, JSON.stringify([], null, 2));
}

if (!fs.existsSync(analyticsFile)) {
  fs.writeFileSync(analyticsFile, JSON.stringify([], null, 2));
}

// Helper methods
const readJSON = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err.message);
    return [];
  }
};

const writeJSON = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err.message);
    return false;
  }
};

// Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio API is running smoothly (SQLite/JSON persistence engine)',
    timestamp: new Date().toISOString()
  });
});

// Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  const contacts = readJSON(contactsFile);
  const newContact = {
    id: contacts.length ? contacts[contacts.length - 1].id + 1 : 1,
    name,
    email,
    subject: subject || 'General Inquiry',
    message,
    created_at: new Date().toISOString()
  };

  contacts.push(newContact);
  if (writeJSON(contactsFile, contacts)) {
    console.log(`[Contact Received] From: ${name} (${email}) - ${subject}`);
    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been saved successfully.',
      id: newContact.id
    });
  } else {
    res.status(500).json({ error: 'Failed to record contact submission.' });
  }
});

// Track page visits / analytics
app.post('/api/analytics', (req, res) => {
  const { page } = req.body;
  const userAgent = req.headers['user-agent'] || 'Unknown';
  const ipAddress = req.ip || req.connection.remoteAddress || 'Unknown';

  const analytics = readJSON(analyticsFile);
  const newLog = {
    id: analytics.length ? analytics[analytics.length - 1].id + 1 : 1,
    page: page || 'home',
    user_agent: userAgent,
    ip_address: ipAddress,
    created_at: new Date().toISOString()
  };

  analytics.push(newLog);
  writeJSON(analyticsFile, analytics);
  res.status(200).json({ success: true });
});

// Get contacts (for admin review)
app.get('/api/contacts', (req, res) => {
  const contacts = readJSON(contactsFile);
  res.json({ contacts: contacts.reverse() });
});

// Start Server with EADDRINUSE Fallback
function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`🚀 Portfolio backend server running on http://localhost:${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ Port ${port} is occupied. Trying fallback port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(DEFAULT_PORT);
