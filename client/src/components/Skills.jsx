import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Sphere } from '@react-three/drei';
import { Code2, Server, Database, BarChart3, Wrench, Layers, Cpu } from 'lucide-react';
import * as THREE from 'three';

const skillList = [
  { name: 'Python', color: '#3776AB', pos: [-2.2, 1.2, 0] },
  { name: 'Flask', color: '#00f2fe', pos: [2.2, 1.4, 0] },
  { name: 'SQLite', color: '#003B57', pos: [-1.8, -1.2, 0.5] },
  { name: 'React', color: '#61DAFB', pos: [1.8, -1.3, 0.5] },
  { name: 'JavaScript', color: '#F7DF1E', pos: [0, 2, -0.5] },
  { name: 'Power BI', color: '#F2C811', pos: [0, -2, -0.5] },
  { name: 'LLM AI', color: '#b829ea', pos: [0, 0, 1] },
];

function SkillOrb({ skill }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5} position={skill.pos}>
      <group>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial
            color={skill.color}
            emissive={skill.color}
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </mesh>
        <Text
          position={[0, 0, 0.65]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
}

function Skill3DScene() {
  return (
    <div className="w-full h-80 relative rounded-3xl overflow-hidden glass-panel border border-cyan-500/20 mb-12 shadow-[0_0_30px_rgba(0,242,254,0.1)]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2fe" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#7928ca" />

        {skillList.map((skill) => (
          <SkillOrb key={skill.name} skill={skill} />
        ))}
      </Canvas>
      <div className="absolute bottom-3 left-4 text-[11px] font-mono text-cyan-400 bg-slate-950/80 px-3 py-1 rounded-full border border-white/10">
        ✨ Interactive 3D Tech Orbs
      </div>
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages & Core CS',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      skills: ['Python', 'OOPs in Python', 'C', 'Java', 'Data Structures & Algorithms', 'HTML5', 'CSS3', 'JavaScript', 'SQL'],
    },
    {
      title: 'Backend & Web Engineering',
      icon: <Server className="w-5 h-5 text-purple-400" />,
      skills: ['Flask', 'REST API Development', 'MVC Architecture', 'Authentication & Authorization', 'Web Applications'],
    },
    {
      title: 'Databases & Storage',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      skills: ['SQLite3', 'SQL Query Optimization', 'Relational Schema Design', 'Database Management'],
    },
    {
      title: 'Data Analytics & BI',
      icon: <BarChart3 className="w-5 h-5 text-yellow-400" />,
      skills: ['Power BI', 'Power Query', 'Data Modeling', 'KPI Analysis', 'Data Visualization'],
    },
    {
      title: 'AI & Tools',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      skills: ['Groq API', 'OpenAI GPT', 'GLM-4 API', 'NVIDIA DeepSeek API', 'Prompt Engineering', 'Git / GitHub', 'PyWebView', 'Linux'],
    },
  ];

  return (
    <section id="skills" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2 block">
            // TECHNICAL MATRIX
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* 3D Skill Orbs Scene */}
        <Skill3DScene />

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
