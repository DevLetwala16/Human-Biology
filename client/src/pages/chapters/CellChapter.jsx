import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';

const fadeInUp = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

export default function CellChapter({ chapter }) {
  const [activeOrganelle, setActiveOrganelle] = useState(null);

  const organelles = [
    { name: 'Nucleus', icon: '🧬', color: '#8b5cf6', desc: 'Control center of the cell. Contains DNA (genetic information). Surrounded by nuclear envelope with pores. Houses nucleolus for ribosome production.', x: 50, y: 50 },
    { name: 'Mitochondria', icon: '⚡', color: '#f59e0b', desc: 'Powerhouse of the cell. Produces ATP energy via cellular respiration. Has its own DNA. Double membrane structure. Called the "powerhouse" of the cell.', x: 72, y: 35 },
    { name: 'Cell Membrane', icon: '🔵', color: '#2ea464', desc: 'Phospholipid bilayer. Controls what enters/exits. Selectively permeable. Contains receptor proteins. Maintains cell homeostasis.', x: 15, y: 50 },
    { name: 'Endoplasmic Reticulum', icon: '🌊', color: '#0ea5e9', desc: 'Rough ER: Has ribosomes, makes proteins. Smooth ER: No ribosomes, makes lipids & detoxifies. Forms transport network within the cell.', x: 30, y: 30 },
    { name: 'Golgi Apparatus', icon: '📦', color: '#f43f5e', desc: 'Cell\'s post office. Processes and packages proteins. Ships proteins to correct destinations. Modifies proteins via glycosylation. Produces lysosomes.', x: 70, y: 70 },
    { name: 'Ribosome', icon: '⚫', color: '#10b981', desc: 'Protein factories. Found free in cytoplasm or on rough ER. Translate mRNA into proteins. Made of rRNA and proteins. Smallest organelle.', x: 25, y: 72 },
  ];

  const tissueData = [
    { name: 'Epithelial', value: 30, color: '#2ea464', sub: 'Covers surfaces, lines organs' },
    { name: 'Connective', value: 35, color: '#0d9488', sub: 'Bone, blood, cartilage, fat' },
    { name: 'Muscle', value: 20, color: '#0ea5e9', sub: 'Skeletal, smooth, cardiac' },
    { name: 'Nervous', value: 15, color: '#8b5cf6', sub: 'Neurons + Glial cells' },
  ];

  const cellFactsTimeline = [
    { label: 'Cell birth (mitosis)', time: '0 hrs', color: '#2ea464', icon: '🌱' },
    { label: 'Growth phase (G1)', time: '0–8 hrs', color: '#0d9488', icon: '📈' },
    { label: 'DNA replication (S)', time: '8–14 hrs', color: '#0ea5e9', icon: '🧬' },
    { label: 'Preparation (G2)', time: '14–20 hrs', color: '#8b5cf6', icon: '⚙️' },
    { label: 'Cell division (M)', time: '20–24 hrs', color: '#f59e0b', icon: '✂️' },
    { label: 'Apoptosis (if needed)', time: 'Variable', color: '#f43f5e', icon: '💀' },
  ];

  const organsData = [
    { organ: 'Brain', fact: '100 Billion neurons', icon: '🧠', color: '#8b5cf6' },
    { organ: 'Heart', fact: '100,000 beats/day', icon: '💓', color: '#f43f5e' },
    { organ: 'Lungs', fact: '70m² alveoli surface', icon: '🫁', color: '#0ea5e9' },
    { organ: 'Liver', fact: '500+ functions', icon: '🟤', color: '#f59e0b' },
    { organ: 'Kidneys', fact: '180L filtered/day', icon: '🫘', color: '#f43f5e' },
    { organ: 'Skin', fact: '2m² total area', icon: '🧴', color: '#2ea464' },
  ];

  const hierarchyData = [
    { level: 'Cell', icon: '🔬', count: '37.2 Trillion', color: '#2ea464', desc: 'Smallest living unit' },
    { level: 'Tissue', icon: '🧫', count: '4 Types', color: '#0d9488', desc: 'Groups of similar cells' },
    { level: 'Organ', icon: '🫀', count: '78 Organs', color: '#0ea5e9', desc: 'Tissues working together' },
    { level: 'Organ System', icon: '⚙️', count: '11 Systems', color: '#8b5cf6', desc: 'Organs with shared function' },
    { level: 'Human Body', icon: '🧬', count: '1 Person', color: '#f59e0b', desc: 'Complete living organism' },
  ];

  return (
    <div>
      {/* Cell Size Stats */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🔬 Scale & Numbers</span>
            <h2 className="section-title">Cells by the Numbers</h2>
            <p className="section-desc">Mind-blowing statistics about the cells that make up your body</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 60 }}>
            {[
              { icon: '🫧', value: '37.2T', label: 'Total Cells', sub: 'In your body right now', color: '#2ea464' },
              { icon: '⚗️', value: '1,000+', label: 'Reactions/sec', sub: 'Per individual cell', color: '#0d9488' },
              { icon: '📏', value: '10-30μm', label: 'Cell Diameter', sub: 'Average human cell size', color: '#0ea5e9' },
              { icon: '🧬', value: '3.2 Bn', label: 'DNA Base Pairs', sub: 'In every cell nucleus', color: '#8b5cf6' },
            ].map((s, i) => (
              <motion.div key={i} className="stat-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6, scale: 1.02 }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-primary)', fontSize: 32, fontWeight: 800, color: s.color, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Cell Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-xl)',
              padding: '40px',
              marginBottom: 40,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 24, fontWeight: 800, color: 'var(--text-primary)' }}>
                  🔬 Interactive Cell Map
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 6 }}>Click on any organelle to learn more about its function</p>
              </div>
              {activeOrganelle && (
                <button onClick={() => setActiveOrganelle(null)} style={{
                  padding: '8px 16px', borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-color)', background: 'transparent',
                  color: 'var(--text-muted)', cursor: 'pointer', fontSize: 13,
                }}>✕ Close</button>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: activeOrganelle ? '1fr 1fr' : '1fr', gap: 32, alignItems: 'center' }}>
              {/* Cell SVG */}
              <div style={{ position: 'relative', height: 340 }}>
                <svg width="100%" height="340" viewBox="0 0 400 340" style={{ position: 'absolute', inset: 0 }}>
                  {/* Cell body */}
                  <ellipse cx="200" cy="170" rx="180" ry="150" fill={`${chapter.color}08`} stroke={chapter.color} strokeWidth="2" strokeDasharray="8 4" />
                  {/* Cytoplasm fill */}
                  <ellipse cx="200" cy="170" rx="175" ry="145" fill="transparent" />
                  {/* Nucleus */}
                  <ellipse cx="200" cy="170" rx="55" ry="50" fill="#8b5cf620" stroke="#8b5cf6" strokeWidth="2" />
                  <text x="200" y="165" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="700">NUCLEUS</text>
                  <text x="200" y="180" textAnchor="middle" fill="#8b5cf680" fontSize="9">DNA</text>

                  {/* Organelle clickable spots */}
                  {organelles.map((org, i) => {
                    const cx = (org.x / 100) * 380 + 10;
                    const cy = (org.y / 100) * 320 + 10;
                    const isActive = activeOrganelle?.name === org.name;
                    return (
                      <g key={i} style={{ cursor: 'pointer' }} onClick={() => setActiveOrganelle(org)}>
                        <circle cx={cx} cy={cy} r={isActive ? 20 : 16} fill={`${org.color}30`} stroke={org.color} strokeWidth={isActive ? 3 : 2} />
                        <text x={cx} y={cy + 4} textAnchor="middle" fontSize="16">{org.icon}</text>
                        <text x={cx} y={cy + 30} textAnchor="middle" fill={org.color} fontSize="9" fontWeight="700">
                          {org.name.split(' ')[0]}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Info panel */}
              {activeOrganelle && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    background: `${activeOrganelle.color}10`,
                    border: `1.5px solid ${activeOrganelle.color}40`,
                    borderRadius: 'var(--radius-lg)',
                    padding: 28,
                  }}
                >
                  <div style={{ fontSize: 48, marginBottom: 12 }}>{activeOrganelle.icon}</div>
                  <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 22, fontWeight: 800, color: activeOrganelle.color, marginBottom: 12 }}>
                    {activeOrganelle.name}
                  </h4>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {activeOrganelle.desc}
                  </p>
                </motion.div>
              )}
            </div>

            <div style={{ marginTop: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {organelles.map((org, i) => (
                <button key={i} onClick={() => setActiveOrganelle(org)} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '6px 14px', borderRadius: 'var(--radius-full)',
                  border: `1px solid ${activeOrganelle?.name === org.name ? org.color : 'var(--border-color)'}`,
                  background: activeOrganelle?.name === org.name ? `${org.color}20` : 'transparent',
                  color: activeOrganelle?.name === org.name ? org.color : 'var(--text-muted)',
                  cursor: 'pointer', fontSize: 12, fontWeight: 600, transition: 'all 0.2s ease',
                }}>
                  {org.icon} {org.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cell Division Timeline */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🔄 Cell Division</span>
            <h2 className="section-title">The Cell Life Cycle</h2>
            <p className="section-desc">From birth to division — or apoptosis (programmed cell death)</p>
          </motion.div>

          <div style={{ display: 'flex', gap: 0, position: 'relative', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Timeline connector */}
            <div style={{ position: 'absolute', top: 36, left: '10%', right: '10%', height: 2, background: 'linear-gradient(90deg, #2ea464, #8b5cf6, #f43f5e)', opacity: 0.3, borderRadius: 1 }} />

            {cellFactsTimeline.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1', minWidth: 120, padding: '0 8px', zIndex: 1 }}
              >
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: `${step.color}20`, border: `3px solid ${step.color}`,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 12, boxShadow: `0 4px 16px ${step.color}30`,
                  fontSize: 28,
                }}>
                  {step.icon}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{step.label}</div>
                  <div style={{ fontSize: 11, color: step.color, fontWeight: 600 }}>{step.time}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mitosis vs Meiosis */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 48 }}>
            {[
              { title: 'Mitosis', icon: '🔀', color: '#2ea464', emoji: '→', points: ['Produces 2 daughter cells', '2n → 2n (diploid)', 'Used for growth & repair', 'Body (somatic) cells', 'Occurs in most tissues', 'Results in identical copies'] },
              { title: 'Meiosis', icon: '♻️', color: '#8b5cf6', emoji: '→', points: ['Produces 4 daughter cells', '2n → n (haploid)', 'Used for sexual reproduction', 'Sex cells (gametes) only', 'Occurs in gonads', 'Creates genetic diversity'] },
            ].map((item, i) => (
              <motion.div key={i} className="bio-card" style={{ padding: 28 }}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{ fontSize: 32 }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 22, fontWeight: 800, color: item.color }}>{item.title}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {item.points.map((pt, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Tissue Types */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🧫 Histology</span>
            <h2 className="section-title">The 4 Tissue Types</h2>
            <p className="section-desc">Groups of cells that work together — the foundation of all organs</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {tissueData.map((tissue, i) => (
                <motion.div key={i} className="bio-card" style={{ padding: 24 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, boxShadow: `0 16px 40px ${tissue.color}20` }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: `${tissue.color}20`, border: `2px solid ${tissue.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, marginBottom: 12,
                  }}>
                    {['🫧', '🦴', '💪', '⚡'][i]}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 16, fontWeight: 700, color: tissue.color, marginBottom: 6 }}>
                    {tissue.name}
                  </h4>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{tissue.sub}</p>
                  <div style={{ marginTop: 12, height: 4, background: 'var(--bg-secondary)', borderRadius: 2, overflow: 'hidden' }}>
                    <motion.div
                      style={{ height: '100%', background: tissue.color, borderRadius: 2 }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tissue.value * 3}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1 + 0.3 }}
                    />
                  </div>
                  <div style={{ fontSize: 11, color: tissue.color, fontWeight: 600, marginTop: 4 }}>{tissue.value}% of body</div>
                </motion.div>
              ))}
            </div>

            <div>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: 28 }}>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 700, marginBottom: 20, color: 'var(--text-primary)' }}>
                  📊 Tissue Composition
                </h3>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={tissueData} cx="50%" cy="50%" outerRadius={90} innerRadius={40} dataKey="value" paddingAngle={3}>
                      {tissueData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                    </Pie>
                    <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8, fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: 16 }}>
                  {tissueData.map((t, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: t.color }} />
                      <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life Hierarchy */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">📐 Organization</span>
            <h2 className="section-title">Hierarchy of Life</h2>
            <p className="section-desc">From microscopic to macroscopic — how life organizes itself</p>
          </motion.div>

          <div style={{ display: 'flex', gap: 0, position: 'relative', alignItems: 'stretch' }}>
            {hierarchyData.map((level, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                style={{ flex: 1, position: 'relative' }}
              >
                <div style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${level.color}40`,
                  borderLeft: i === 0 ? `4px solid ${level.color}` : '1px solid var(--border-color)',
                  borderRadius: i === 0 ? '16px 0 0 16px' : i === hierarchyData.length - 1 ? '0 16px 16px 0' : '0',
                  padding: '28px 20px',
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${level.color}08`; e.currentTarget.style.borderColor = level.color; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{level.icon}</div>
                  <div style={{ fontFamily: 'var(--font-primary)', fontSize: 16, fontWeight: 800, color: level.color, marginBottom: 6 }}>{level.level}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{level.count}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{level.desc}</div>

                  {i < hierarchyData.length - 1 && (
                    <div style={{
                      position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)',
                      width: 24, height: 24, borderRadius: '50%',
                      background: level.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, color: 'white', fontWeight: 700, zIndex: 2,
                      boxShadow: `0 2px 8px ${level.color}60`,
                    }}>→</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Organs */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🫀 Organs</span>
            <h2 className="section-title">Major Human Organs</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {organsData.map((org, i) => (
              <motion.div key={i} className="bio-card" style={{ padding: 28 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: `0 16px 40px ${org.color}25` }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>{org.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 20, fontWeight: 800, color: org.color, marginBottom: 8 }}>{org.organ}</h4>
                <div style={{
                  display: 'inline-block', padding: '6px 14px',
                  background: `${org.color}15`, border: `1px solid ${org.color}30`,
                  borderRadius: 'var(--radius-full)', fontSize: 13, fontWeight: 700, color: org.color,
                }}>
                  {org.fact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
