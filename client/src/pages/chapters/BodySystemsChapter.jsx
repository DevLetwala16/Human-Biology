import { useState } from 'react';
import { motion } from 'framer-motion';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

export default function BodySystemsChapter({ chapter }) {
  const [activeSystem, setActiveSystem] = useState(null);

  const systems = [
    { name: 'Integumentary', icon: '🧴', color: '#f97316', parts: 'Skin, Hair, Nails', fn: 'Protection from environment, thermoregulation, sensation', fact: '2 m² total surface area', badge: 'System 1' },
    { name: 'Skeletal', icon: '🦴', color: '#94a3b8', parts: '206 Bones, Joints, Ligaments', fn: 'Structure, protection, movement, blood cell production', fact: '206 bones in adults', badge: 'System 2' },
    { name: 'Muscular', icon: '💪', color: '#f43f5e', parts: '650 Muscles, Tendons', fn: 'Movement, posture, heat generation, organ support', fact: 'Uses 20% of total energy', badge: 'System 3' },
    { name: 'Nervous', icon: '🧠', color: '#8b5cf6', parts: 'Brain, Spinal Cord, Nerves', fn: 'Master control center, sensory processing, coordination', fact: '100 billion neurons', badge: 'System 4' },
    { name: 'Endocrine', icon: '⚗️', color: '#f59e0b', parts: 'Glands, Hormones', fn: 'Chemical messaging, metabolism, reproduction, growth', fact: '50+ different hormones', badge: 'System 5' },
    { name: 'Cardiovascular', icon: '💓', color: '#ef4444', parts: 'Heart, Arteries, Veins', fn: 'Blood circulation, oxygen delivery, waste removal', fact: '100,000 beats per day', badge: 'System 6' },
    { name: 'Lymphatic', icon: '🛡️', color: '#06b6d4', parts: 'Lymph nodes, Spleen, Thymus', fn: 'Immune defense, fluid balance, fat absorption', fact: '600+ lymph nodes', badge: 'System 7' },
    { name: 'Respiratory', icon: '🫁', color: '#0ea5e9', parts: 'Lungs, Bronchi, Alveoli', fn: 'O₂ uptake, CO₂ removal, pH regulation', fact: '300M alveoli/lung', badge: 'System 8' },
    { name: 'Digestive', icon: '🍎', color: '#10b981', parts: 'GI tract, Liver, Pancreas', fn: 'Nutrient absorption, waste elimination, hormone secretion', fact: '9 meters long GI tract', badge: 'System 9' },
    { name: 'Urinary', icon: '🫘', color: '#6366f1', parts: 'Kidneys, Bladder, Urethra', fn: 'Waste filtration, water balance, blood pressure regulation', fact: '180L blood filtered/day', badge: 'System 10' },
    { name: 'Reproductive', icon: '🌱', color: '#ec4899', parts: 'Gonads, Ducts, Glands', fn: 'Species continuation, hormone production, development', fact: 'Unique genetic offspring', badge: 'System 11' },
  ];

  const radarData = systems.slice(0, 7).map(s => ({ system: s.name.substring(0, 6), complexity: Math.floor(Math.random() * 30 + 60) }));

  const functionalData = [
    { category: 'Protection', systems: 3, color: '#2ea464' },
    { category: 'Movement', systems: 2, color: '#f43f5e' },
    { category: 'Control', systems: 2, color: '#8b5cf6' },
    { category: 'Transport', systems: 2, color: '#0ea5e9' },
    { category: 'Exchange', systems: 2, color: '#f59e0b' },
  ];

  return (
    <div>
      {/* 11 Systems Grid */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">⚙️ All 11 Systems</span>
            <h2 className="section-title">The Body's 11 Systems</h2>
            <p className="section-desc">Each system is an orchestra of organs working in perfect harmony. Click any system to explore it.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 48 }}>
            {systems.map((sys, i) => (
              <motion.div key={i}
                onClick={() => setActiveSystem(activeSystem?.name === sys.name ? null : sys)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                style={{
                  background: activeSystem?.name === sys.name ? `${sys.color}15` : 'var(--bg-card)',
                  border: `1.5px solid ${activeSystem?.name === sys.name ? sys.color : 'var(--border-color)'}`,
                  borderRadius: 'var(--radius-lg)',
                  padding: 20,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeSystem?.name === sys.name ? `0 8px 24px ${sys.color}25` : 'var(--shadow-sm)',
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 10 }}>{sys.icon}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: sys.color, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4 }}>
                  {sys.badge}
                </div>
                <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
                  {sys.name}
                </h4>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{sys.parts}</div>
              </motion.div>
            ))}
          </div>

          {/* Detail panel */}
          {activeSystem && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: `linear-gradient(135deg, ${activeSystem.color}10, ${activeSystem.color}05)`,
                border: `1.5px solid ${activeSystem.color}40`,
                borderRadius: 'var(--radius-xl)',
                padding: 36,
                marginBottom: 32,
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                <div>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>{activeSystem.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 24, fontWeight: 800, color: activeSystem.color, marginBottom: 8 }}>
                    {activeSystem.name} System
                  </h3>
                  <span style={{ fontSize: 11, fontWeight: 700, background: `${activeSystem.color}20`, color: activeSystem.color, padding: '4px 12px', borderRadius: 'var(--radius-full)', border: `1px solid ${activeSystem.color}30` }}>
                    {activeSystem.badge}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 10 }}>Components</div>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{activeSystem.parts}</p>
                  <div style={{ marginTop: 16, fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 10 }}>Key Fact</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: activeSystem.color }}>📊 {activeSystem.fact}</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 10 }}>Function</div>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{activeSystem.fn}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Charts Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">📊 Analysis</span>
            <h2 className="section-title">Systems by Function</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <motion.div className="bio-card" style={{ padding: 28 }} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 700, marginBottom: 20, color: 'var(--text-primary)' }}>
                System Functional Groups
              </h3>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={functionalData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="category" tick={{ fontSize: 12, fill: 'var(--text-muted)' }} width={90} />
                  <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8 }} />
                  <Bar dataKey="systems" radius={[0, 8, 8, 0]}>
                    {functionalData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div className="bio-card" style={{ padding: 28 }} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 700, marginBottom: 20, color: 'var(--text-primary)' }}>
                ⚡ Key Stats
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { label: 'Bones in adult body', value: '206', icon: '🦴', color: '#94a3b8' },
                  { label: 'Muscles total', value: '650+', icon: '💪', color: '#f43f5e' },
                  { label: 'Heartbeats per day', value: '100,000', icon: '💓', color: '#ef4444' },
                  { label: 'Neurons in brain', value: '100 Billion', icon: '🧠', color: '#8b5cf6' },
                  { label: 'Different hormones', value: '50+', icon: '⚗️', color: '#f59e0b' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 22 }}>{item.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{item.label}</div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: item.color }}>{item.value}</div>
                    </div>
                    <div style={{ width: 60, height: 4, background: 'var(--bg-secondary)', borderRadius: 2, overflow: 'hidden' }}>
                      <motion.div
                        style={{ height: '100%', background: item.color, borderRadius: 2 }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
