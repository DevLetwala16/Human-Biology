import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { humanBiologyChapters, skinBiologyChapters } from '../data/chapters';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('human');

  const chapters = activeTab === 'human' ? humanBiologyChapters : skinBiologyChapters;
  const subject = activeTab === 'human' ? 'human-biology' : 'skin-biology';

  // Body system data for radar chart
  const radarData = [
    { system: 'Skeletal', value: 85 },
    { system: 'Muscular', value: 78 },
    { system: 'Cardiovascular', value: 92 },
    { system: 'Nervous', value: 88 },
    { system: 'Digestive', value: 75 },
    { system: 'Respiratory', value: 80 },
    { system: 'Endocrine', value: 70 },
  ];

  // Growth / learning progress data
  const progressData = [
    { name: 'Cells', progress: 95 },
    { name: 'Systems', progress: 88 },
    { name: 'Micro', progress: 72 },
    { name: 'Pharma', progress: 65 },
    { name: 'Organs', progress: 80 },
  ];

  const skinData = [
    { name: 'Epidermis', value: 30 },
    { name: 'Dermis', value: 45 },
    { name: 'Hypodermis', value: 25 },
  ];
  const skinColors = ['#f97316', '#fb923c', '#fbbf24'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      {/* HERO SECTION */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Animated biology background */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {/* Floating molecules */}
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: 6 + (i % 4) * 4,
              height: 6 + (i % 4) * 4,
              borderRadius: '50%',
              background: ['#2ea464', '#0d9488', '#8b5cf6', '#f59e0b', '#0ea5e9'][i % 5],
              opacity: 0.15 + (i % 5) * 0.05,
              top: `${10 + (i * 7) % 80}%`,
              left: `${5 + (i * 9) % 90}%`,
              animation: `float ${4 + i % 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }} />
          ))}

          {/* DNA-like helix lines */}
          <svg style={{ position: 'absolute', right: 0, top: 0, height: '100%', opacity: 0.06, pointerEvents: 'none' }} width="400" viewBox="0 0 400 800">
            {[...Array(20)].map((_, i) => {
              const y = i * 40;
              const wave = Math.sin(i * 0.5) * 80;
              return (
                <g key={i}>
                  <circle cx={200 + wave} cy={y + 20} r="8" fill="#2ea464" />
                  <circle cx={200 - wave} cy={y + 20} r="8" fill="#0d9488" />
                  <line x1={200 + wave} y1={y + 20} x2={200 - wave} y2={y + 20} stroke="#2ea464" strokeWidth="2" strokeDasharray="4 4" />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            {/* Left content */}
            <motion.div {...fadeInUp}>
              <div className="badge badge-green" style={{ marginBottom: 24, fontSize: 11 }}>
                🧬 Science of Life
              </div>
              <h1 style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'clamp(42px, 6vw, 72px)',
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: 24,
                letterSpacing: '-1px',
              }}>
                Explore{' '}
                <span className="gradient-text">Human Biology</span>
                {' '}& Skin Science
              </h1>
              <p style={{
                fontSize: 18,
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginBottom: 40,
                maxWidth: 480,
              }}>
                Interactive visualizations, animated diagrams, and clear explanations — 
                from cells to organ systems, from pathogens to skin science.
                <br /><br />
                <em style={{ color: 'var(--green-primary)', fontStyle: 'normal', fontWeight: 600 }}>
                  By Anil N. Letwala · DERMASIS Remedies Pvt. Ltd.
                </em>
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/chapters/human-biology" className="btn-primary">
                  🫀 Human Biology
                </Link>
                <Link to="/chapters/skin-biology" className="btn-secondary">
                  ✨ Skin Science
                </Link>
              </div>

              {/* Stats row */}
              <div style={{ display: 'flex', gap: 32, marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border-color)' }}>
                {[
                  { value: '10', label: 'Chapters', icon: '📖' },
                  { value: '37T', label: 'Cells Covered', icon: '🔬' },
                  { value: '12', label: 'Skin Problems Fixed', icon: '✨' },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 28, fontFamily: 'var(--font-primary)', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {s.icon} {s.value}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4, fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Animated Cell Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <CellVisualization />
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW CHARTS SECTION */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">📊 Visual Overview</span>
            <h2 className="section-title">Biology at a Glance</h2>
            <p className="section-desc">Interactive charts that summarize the key concepts across all chapters</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {/* Radar chart - Body Systems */}
            <motion.div
              className="bio-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              style={{ padding: 28 }}
            >
              <div style={{ marginBottom: 20 }}>
                <div className="badge badge-green" style={{ marginBottom: 12, fontSize: 10 }}>🫀 Body Systems</div>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>
                  System Complexity Map
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>
                  Relative complexity score of each body system
                </p>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="var(--border-color)" />
                  <PolarAngleAxis dataKey="system" tick={{ fontSize: 11, fill: 'var(--text-muted)', fontFamily: 'var(--font-body)' }} />
                  <Radar name="Complexity" dataKey="value" stroke="#2ea464" fill="#2ea464" fillOpacity={0.2} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Skin Layer Pie */}
            <motion.div
              className="bio-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ padding: 28 }}
            >
              <div style={{ marginBottom: 20 }}>
                <div className="badge badge-teal" style={{ marginBottom: 12, fontSize: 10 }}>✨ Skin Biology</div>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>
                  Skin Layer Composition
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>
                  Relative depth proportion of each skin layer
                </p>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie data={skinData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                    {skinData.map((entry, index) => (
                      <Cell key={index} fill={skinColors[index]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8, fontSize: 12 }}
                    labelStyle={{ color: 'var(--text-primary)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                {skinData.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: skinColors[i], flexShrink: 0 }} />
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{d.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Learning Progress */}
            <motion.div
              className="bio-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ padding: 28 }}
            >
              <div style={{ marginBottom: 20 }}>
                <div className="badge badge-purple" style={{ marginBottom: 12, fontSize: 10 }}>📚 Content Depth</div>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>
                  Chapter Coverage Score
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>
                  How thoroughly each human biology topic is covered
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {progressData.map((item, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>{item.name}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--green-primary)' }}>{item.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        style={{ background: ['#2ea464', '#0d9488', '#8b5cf6', '#f59e0b', '#0ea5e9'][i] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHAPTERS PREVIEW SECTION */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">📖 Chapters</span>
            <h2 className="section-title">Explore All Chapters</h2>
            <p className="section-desc">Click any chapter to dive deep with visualizations, animations & detailed explanations</p>

            {/* Tab Toggle */}
            <div style={{
              display: 'inline-flex',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-full)',
              padding: 4,
              marginTop: 24,
              gap: 4,
            }}>
              {[
                { key: 'human', label: '🫀 Human Biology', color: '#2ea464' },
                { key: 'skin', label: '✨ Skin Biology', color: '#f97316' },
              ].map(tab => (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
                  padding: '10px 24px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  background: activeTab === tab.key ? tab.color : 'transparent',
                  color: activeTab === tab.key ? 'white' : 'var(--text-muted)',
                  fontFamily: 'var(--font-secondary)',
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}>
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}
          >
            {chapters.map((chapter, i) => (
              <ChapterCard key={chapter.id} chapter={chapter} subject={subject} index={i} />
            ))}
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link
              to={activeTab === 'human' ? '/chapters/human-biology' : '/chapters/skin-biology'}
              className="btn-primary"
              style={{ fontSize: 16, padding: '14px 36px' }}
            >
              View All {activeTab === 'human' ? 'Human Biology' : 'Skin Biology'} Chapters →
            </Link>
          </div>
        </div>
      </section>

      {/* KEY FACTS SECTION */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">🤯 Mind-Blowing Facts</span>
            <h2 className="section-title">Biology by the Numbers</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { icon: '🫧', value: '37.2T', label: 'Cells in your body', color: '#2ea464', sub: 'Each doing 1,000+ reactions/sec' },
              { icon: '🧠', value: '100B', label: 'Neurons in brain', color: '#8b5cf6', sub: 'Connected by 100 trillion synapses' },
              { icon: '💓', value: '3 Billion', label: 'Heartbeats in lifetime', color: '#f43f5e', sub: '100,000 beats every single day' },
              { icon: '🦠', value: '38T', label: 'Gut bacteria cells', color: '#f59e0b', sub: 'More bacteria than human cells' },
              { icon: '🫁', value: '70 m²', label: 'Lung alveoli surface', color: '#0ea5e9', sub: 'Size of a tennis court' },
              { icon: '🩸', value: '180L', label: 'Blood filtered daily', color: '#f43f5e', sub: 'By just two kidneys' },
              { icon: '🔄', value: '28 Days', label: 'Skin renewal cycle', color: '#f97316', sub: 'Full skin replacement every month' },
              { icon: '⚡', value: '120 m/s', label: 'Nerve signal speed', color: '#84cc16', sub: 'Faster than a racing car' },
            ].map((fact, i) => (
              <motion.div
                key={i}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{fact.icon}</div>
                <div style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 28,
                  fontWeight: 800,
                  color: fact.color,
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  {fact.value}
                </div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', marginBottom: 6 }}>{fact.label}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{fact.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid var(--border-color)',
        padding: '48px 0 32px',
        background: 'var(--bg-secondary)',
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: 'var(--grad-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20,
              }}>🧬</div>
              <div>
                <div style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 16 }}>BioLearn</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>DERMASIS Remedies Pvt. Ltd.</div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>
              Created by <strong style={{ color: 'var(--green-primary)' }}>Anil N. Letwala</strong> · 
              Interactive Human Biology & Skin Science Guide
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {[['/', 'Home'], ['/chapters/human-biology', 'Human Bio'], ['/chapters/skin-biology', 'Skin Bio'], ['/about', 'About']].map(([to, label]) => (
                <Link key={to} to={to} style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'var(--green-primary)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                >{label}</Link>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 32, textAlign: 'center', fontSize: 12, color: 'var(--text-light)' }}>
            © 2026 BioLearn · Educational Biology Resource · All rights reserved <br/> Powrerd By Softcapphyjas Pvt. Ltd.
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

function ChapterCard({ chapter, subject, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? chapter.color + '50' : 'var(--border-color)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: 28,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 48px ${chapter.color}20` : 'var(--shadow-sm)',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        display: 'block',
      }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Gradient orb background */}
      <div style={{
        position: 'absolute',
        top: -40,
        right: -40,
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: chapter.color,
        opacity: hovered ? 0.12 : 0.06,
        filter: 'blur(40px)',
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Badge + Icon row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
            color: chapter.color, background: chapter.colorLight,
            padding: '4px 12px', borderRadius: 'var(--radius-full)', border: `1px solid ${chapter.color}30`,
          }}>
            {chapter.badge}
          </span>
          <div style={{
            width: 52, height: 52,
            borderRadius: 'var(--radius-md)',
            background: chapter.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 26,
            boxShadow: `0 8px 20px ${chapter.color}40`,
            animation: hovered ? 'float 2s ease-in-out infinite' : 'none',
          }}>
            {chapter.icon}
          </div>
        </div>

        <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
          {chapter.title}
        </h3>
        <p style={{ fontSize: 13, fontWeight: 600, color: chapter.color, marginBottom: 12 }}>{chapter.subtitle}</p>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 20 }}>
          {chapter.description}
        </p>

        {/* Key facts pills */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {chapter.keyFacts.slice(0, 2).map((fact, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '6px 12px',
              background: chapter.colorLight,
              borderRadius: 'var(--radius-full)',
              border: `1px solid ${chapter.color}20`,
            }}>
              <span style={{ fontSize: 14 }}>{fact.icon}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: chapter.color }}>{fact.value}</span>
              <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{fact.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link to={`/chapter/${subject}/${chapter.id}`} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '10px 20px',
          borderRadius: 'var(--radius-full)',
          background: hovered ? chapter.gradient : 'transparent',
          color: hovered ? 'white' : chapter.color,
          border: `1.5px solid ${chapter.color}`,
          fontFamily: 'var(--font-secondary)',
          fontWeight: 600,
          fontSize: 13,
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow: hovered ? `0 4px 16px ${chapter.color}40` : 'none',
        }}>
          Explore Chapter
          <span style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
        </Link>
      </div>
    </motion.div>
  );
}

function CellVisualization() {
  return (
    <div style={{
      width: 380,
      height: 380,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Outer glow ring */}
      <div style={{
        position: 'absolute',
        width: 360,
        height: 360,
        borderRadius: '50%',
        border: '2px dashed rgba(46,164,100,0.2)',
        animation: 'spin-slow 20s linear infinite',
      }} />

      {/* Cell membrane */}
      <div style={{
        width: 300,
        height: 300,
        borderRadius: '42% 58% 47% 53% / 55% 45% 55% 45%',
        background: 'radial-gradient(circle at 35% 35%, rgba(46,164,100,0.15) 0%, rgba(13,148,136,0.08) 50%, transparent 70%)',
        border: '2px solid rgba(46,164,100,0.3)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'float 5s ease-in-out infinite',
        boxShadow: '0 0 60px rgba(46,164,100,0.15), inset 0 0 40px rgba(46,164,100,0.05)',
      }}>
        {/* Nucleus */}
        <div style={{
          width: 90,
          height: 90,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0.2) 100%)',
          border: '2px solid rgba(139,92,246,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(139,92,246,0.3)',
          animation: 'pulse-glow 3s ease-in-out infinite',
          position: 'relative',
          zIndex: 2,
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#c4b5fd', textAlign: 'center', lineHeight: 1.3 }}>
            🧬<br />Nucleus<br /><span style={{ fontSize: 9, opacity: 0.8 }}>DNA</span>
          </span>
        </div>

        {/* Organelles */}
        {[
          { label: 'Mito', icon: '⚡', x: -90, y: -60, color: '#f59e0b', size: 44 },
          { label: 'ER', icon: '🌊', x: 70, y: -70, color: '#0ea5e9', size: 40 },
          { label: 'Golgi', icon: '📦', x: 85, y: 40, color: '#f43f5e', size: 40 },
          { label: 'Ribosome', icon: '•', x: -70, y: 65, color: '#2ea464', size: 28 },
        ].map((org, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: `translate(calc(-50% + ${org.x}px), calc(-50% + ${org.y}px))`,
            width: org.size,
            height: org.size,
            borderRadius: '50%',
            background: `${org.color}25`,
            border: `1.5px solid ${org.color}60`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: org.icon === '•' ? 20 : 14,
            color: org.color,
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}>
            <span>{org.icon}</span>
            <span style={{ fontSize: 7, fontWeight: 600, color: org.color, opacity: 0.8 }}>{org.label}</span>
          </div>
        ))}
      </div>

      {/* Orbiting electrons/molecules */}
      {[
        { angle: 0, color: '#2ea464', label: 'O₂' },
        { angle: 120, color: '#0d9488', label: 'H₂O' },
        { angle: 240, color: '#8b5cf6', label: 'ATP' },
      ].map((mol, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: `${mol.color}20`,
          border: `1.5px solid ${mol.color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 9,
          fontWeight: 700,
          color: mol.color,
          animation: `orbit ${6 + i * 2}s linear infinite`,
          animationDelay: `${i * (-2)}s`,
          transformOrigin: '0 0',
        }}>
          {mol.label}
        </div>
      ))}

      {/* Labels */}
      <div style={{
        position: 'absolute',
        bottom: -20,
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>
          🔬 Animated Cell Model
        </span>
      </div>
    </div>
  );
}
