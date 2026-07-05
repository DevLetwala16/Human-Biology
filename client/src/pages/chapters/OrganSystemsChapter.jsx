import { useState } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function OrganSystemsChapter({ chapter }) {
  const [activeTab, setActiveTab] = useState('respiratory');

  const respiratoryParts = [
    { name: 'External Nose', tract: 'Upper', color: '#0ea5e9', fn: 'Filters, warms, and humidifies incoming air. Lined with hair (vibrissae) to trap large particles.', icon: '👃' },
    { name: 'Nasal Cavity', tract: 'Upper', color: '#0ea5e9', fn: 'Cilia and mucosa trap dust, bacteria, and pollutants. Warms air to body temperature.', icon: '🫁' },
    { name: 'Pharynx', tract: 'Upper', color: '#38bdf8', fn: 'Shared passage for air and food. Connects to both trachea (air) and esophagus (food).', icon: '🔵' },
    { name: 'Larynx (Voice Box)', tract: 'Lower', color: '#2ea464', fn: 'Contains vocal cords for speech. Epiglottis prevents food from entering airway during swallowing.', icon: '🎙️' },
    { name: 'Trachea (Windpipe)', tract: 'Lower', color: '#2ea464', fn: 'C-shaped cartilage rings keep it open. Cilia move mucus upward (mucociliary escalator).', icon: '🌀' },
    { name: 'Bronchi', tract: 'Lower', color: '#10b981', fn: 'Primary left and right branches enter each lung. Branch further into smaller bronchioles.', icon: '🌿' },
    { name: 'Lungs & Alveoli', tract: 'Lower', color: '#0d9488', fn: '~300 million alveoli per lung. 70m² total surface area. Gas exchange: O₂ in, CO₂ out via thin walls & capillaries.', icon: '🫁' },
  ];

  const infectionsData = [
    { name: 'Sinusitis', loc: 'Sinuses', color: '#0ea5e9' },
    { name: 'Tonsillitis', loc: 'Tonsils', color: '#38bdf8' },
    { name: 'Pharyngitis', loc: 'Pharynx', color: '#2ea464' },
    { name: 'Laryngitis', loc: 'Larynx', color: '#10b981' },
    { name: 'Tracheitis', loc: 'Trachea', color: '#0d9488' },
    { name: 'Bronchitis', loc: 'Bronchi', color: '#f59e0b' },
    { name: 'Bronchiolitis', loc: 'Bronchioles', color: '#f97316' },
    { name: 'Pleurisy', loc: 'Pleura', color: '#ef4444' },
    { name: 'Pneumonia', loc: 'Alveoli', color: '#f43f5e' },
  ];

  const digestiveStages = [
    { organ: 'Mouth', fn: 'Chewing + salivary amylase breaks down starch', time: '~30 sec', pH: '6.5-7.5', icon: '😮', color: '#f97316' },
    { organ: 'Esophagus', fn: 'Peristalsis moves food 25cm to stomach', time: '~8 sec', pH: '6-7', icon: '🌀', color: '#fb923c' },
    { organ: 'Stomach', fn: 'HCl (pH 1.5-3.5) + pepsin churns and digests proteins', time: '2-4 hrs', pH: '1.5-3.5', icon: '💪', color: '#f59e0b' },
    { organ: 'Small Intestine', fn: '6m long, villi absorb 95% of nutrients', time: '4-5 hrs', pH: '6-7.5', icon: '🌊', color: '#2ea464' },
    { organ: 'Large Intestine', fn: 'Reabsorbs water, houses 100T gut bacteria', time: '12-24 hrs', pH: '5.5-7', icon: '🦠', color: '#0d9488' },
    { organ: 'Rectum/Anus', fn: 'Stores and expels waste (feces)', time: 'Variable', pH: '6-7', icon: '✅', color: '#0ea5e9' },
  ];

  const pHData = [
    { organ: 'Mouth', pH: 7.0 },
    { organ: 'Esophagus', pH: 6.5 },
    { organ: 'Stomach', pH: 2.0 },
    { organ: 'Duodenum', pH: 5.0 },
    { organ: 'Jejunum', pH: 6.5 },
    { organ: 'Ileum', pH: 7.5 },
    { organ: 'Colon', pH: 6.5 },
  ];

  const gerdTreatments = [
    { name: 'Antacids', moa: 'Neutralize existing stomach acid', drugs: 'Tums, Maalox', color: '#2ea464', speed: 'Fastest (minutes)' },
    { name: 'H2 Blockers', moa: 'Block histamine → less acid production', drugs: 'Famotidine, Ranitidine', color: '#0ea5e9', speed: '1-3 hours' },
    { name: 'PPIs', moa: 'Block proton pump → dramatically reduce acid', drugs: 'Omeprazole, Pantoprazole', color: '#8b5cf6', speed: 'Days (best for chronic)' },
    { name: 'Fundoplication', moa: 'Surgical wrap of stomach around LES', drugs: 'Surgery (last resort)', color: '#f43f5e', speed: 'Permanent fix' },
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'flex', gap: 4, paddingTop: 24, paddingBottom: 0 }}>
          {[
            { key: 'respiratory', label: '🫁 Respiratory System', color: '#0ea5e9' },
            { key: 'digestive', label: '🍎 Digestive System', color: '#2ea464' },
            { key: 'gerd', label: '🔥 GERD & Treatments', color: '#f59e0b' },
          ].map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
              padding: '14px 24px',
              border: 'none',
              borderBottom: activeTab === tab.key ? `3px solid ${tab.color}` : '3px solid transparent',
              background: 'transparent',
              color: activeTab === tab.key ? tab.color : 'var(--text-muted)',
              fontFamily: 'var(--font-secondary)',
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* Respiratory */}
          {activeTab === 'respiratory' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 48 }}>
                {/* Anatomy list */}
                <div>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 22, fontWeight: 800, marginBottom: 24, color: 'var(--text-primary)' }}>
                    🫁 Respiratory Anatomy
                  </h3>
                  {['Upper', 'Lower'].map(tract => (
                    <div key={tract} style={{ marginBottom: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-muted)', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid var(--border-color)' }}>
                        {tract} Respiratory Tract
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {respiratoryParts.filter(p => p.tract === tract).map((part, i) => (
                          <motion.div key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            style={{
                              padding: '14px 18px',
                              background: `${part.color}08`,
                              border: `1px solid ${part.color}20`,
                              borderRadius: 'var(--radius-sm)',
                              borderLeft: `3px solid ${part.color}`,
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                              <span style={{ fontSize: 20 }}>{part.icon}</span>
                              <span style={{ fontSize: 14, fontWeight: 700, color: part.color }}>{part.name}</span>
                            </div>
                            <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{part.fn}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Respiratory SVG + Stats */}
                <div>
                  <div className="bio-card" style={{ padding: 28, marginBottom: 24 }}>
                    <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 16, fontWeight: 700, marginBottom: 20, color: 'var(--text-primary)' }}>
                      📊 Lung Statistics
                    </h4>
                    {[
                      { label: 'Alveoli per lung', value: '~300 Million', color: '#0ea5e9', icon: '🫧' },
                      { label: 'Total alveolar surface', value: '70 m²', color: '#2ea464', icon: '📐' },
                      { label: 'Breaths per day', value: '~23,000', color: '#8b5cf6', icon: '💨' },
                      { label: 'Air in one breath', value: '500 mL', color: '#f59e0b', icon: '🌬️' },
                      { label: 'O₂ in atmosphere', value: '21%', color: '#0d9488', icon: '🧪' },
                    ].map((s, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                        <span style={{ fontSize: 22 }}>{s.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.label}</div>
                          <div style={{ fontSize: 15, fontWeight: 700, color: s.color }}>{s.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Infections list */}
                  <div className="bio-card" style={{ padding: 24 }}>
                    <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 16, fontWeight: 700, marginBottom: 16, color: 'var(--text-primary)' }}>
                      🦠 Respiratory Infections
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {infectionsData.map((inf, i) => (
                        <div key={i} style={{
                          padding: '6px 14px',
                          background: `${inf.color}12`,
                          border: `1px solid ${inf.color}30`,
                          borderRadius: 'var(--radius-full)',
                          fontSize: 12, fontWeight: 600, color: inf.color,
                        }}>
                          {inf.name} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({inf.loc})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Digestive */}
          {activeTab === 'digestive' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 24, fontWeight: 800, marginBottom: 32, color: 'var(--text-primary)' }}>
                🍎 The 9-Meter Digestive Journey
              </h3>

              {/* Journey steps */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
                {digestiveStages.map((stage, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      display: 'grid', gridTemplateColumns: '48px 1fr auto auto',
                      gap: 16, alignItems: 'center',
                      padding: '18px 24px',
                      background: `${stage.color}08`,
                      border: `1px solid ${stage.color}20`,
                      borderRadius: 'var(--radius-md)',
                      borderLeft: `4px solid ${stage.color}`,
                    }}
                  >
                    <div style={{ fontSize: 32, textAlign: 'center' }}>{stage.icon}</div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: stage.color, marginBottom: 4 }}>{stage.organ}</h4>
                      <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{stage.fn}</p>
                    </div>
                    <div style={{ textAlign: 'center', minWidth: 80 }}>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 2 }}>Time</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: stage.color }}>{stage.time}</div>
                    </div>
                    <div style={{ textAlign: 'center', minWidth: 60 }}>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 2 }}>pH</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: stage.color }}>{stage.pH}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* pH Chart */}
              <div className="bio-card" style={{ padding: 28 }}>
                <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>
                  📊 pH Through the Digestive Tract
                </h4>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>
                  pH drops dramatically in the stomach (acid) then rises in the intestines (neutral/alkaline). This is critical for enzyme activity.
                </p>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={pHData}>
                    <CartesianGrid stroke="var(--border-color)" strokeDasharray="3 3" />
                    <XAxis dataKey="organ" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
                    <YAxis domain={[0, 8]} tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
                    <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8, fontSize: 12 }} />
                    <defs>
                      <linearGradient id="pHGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2ea464" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#2ea464" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="pH" stroke="#2ea464" fill="url(#pHGrad)" strokeWidth={2} dot={{ fill: '#2ea464', strokeWidth: 2 }} />
                  </AreaChart>
                </ResponsiveContainer>
                <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--radius-sm)', fontSize: 13, color: '#ef4444', fontWeight: 600 }}>
                  ⚠️ Stomach pH 1.5-3.5 — This extreme acidity kills most bacteria and activates pepsin for protein digestion
                </div>
              </div>
            </motion.div>
          )}

          {/* GERD */}
          {activeTab === 'gerd' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 40 }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 24, fontWeight: 800, marginBottom: 20, color: 'var(--text-primary)' }}>
                    🔥 GERD (Gastric Reflux Disease)
                  </h3>
                  <div style={{ padding: '20px 24px', background: 'rgba(239,68,68,0.08)', border: '1.5px solid rgba(239,68,68,0.25)', borderRadius: 'var(--radius-lg)', marginBottom: 24 }}>
                    <h4 style={{ color: '#ef4444', fontWeight: 700, marginBottom: 8 }}>🚨 The Problem</h4>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      The <strong>Lower Esophageal Sphincter (LES)</strong> fails to close properly, allowing stomach acid (pH 1.5-3.5) to flow upward into the esophagus.
                    </p>
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 16, fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)' }}>Symptoms</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                    {['Heartburn (burning chest sensation)', 'Regurgitation (acid rising to throat)', 'Dysphagia (difficulty swallowing)', 'Chronic cough & hoarseness', 'Bloating and belching'].map((s, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ color: '#ef4444', fontSize: 14 }}>🔥</span>
                        <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SVG diagram of GERD */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <svg width="260" height="280" viewBox="0 0 260 280">
                    {/* Esophagus */}
                    <rect x="100" y="10" width="60" height="120" rx="30" fill="#0ea5e920" stroke="#0ea5e9" strokeWidth="2" />
                    <text x="130" y="55" textAnchor="middle" fill="#0ea5e9" fontSize="11" fontWeight="700">Esophagus</text>

                    {/* LES (broken) */}
                    <line x1="100" y1="130" x2="160" y2="130" stroke="#ef4444" strokeWidth="3" strokeDasharray="8 4" />
                    <text x="130" y="148" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="700">⚠️ LES (weakened)</text>

                    {/* Stomach */}
                    <ellipse cx="130" cy="210" rx="80" ry="55" fill="#ef444415" stroke="#ef4444" strokeWidth="2" />
                    <text x="130" y="205" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="700">STOMACH</text>
                    <text x="130" y="222" textAnchor="middle" fill="#ef444480" fontSize="9">pH 1.5-3.5</text>

                    {/* Acid reflux arrows */}
                    <path d="M 118 130 Q 108 110 112 90" fill="none" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                    <path d="M 142 130 Q 152 110 148 90" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
                    <defs>
                      <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                        <path d="M 0 0 L 8 4 L 0 8 Z" fill="#f59e0b" />
                      </marker>
                    </defs>
                    <text x="68" y="100" fill="#f59e0b" fontSize="9" fontWeight="700">ACID</text>
                    <text x="68" y="112" fill="#f59e0b" fontSize="9" fontWeight="700">REFLUX</text>
                  </svg>
                </div>
              </div>

              {/* Treatment ladder */}
              <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 22, fontWeight: 800, marginBottom: 24, color: 'var(--text-primary)' }}>
                💊 GERD Treatment Ladder
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                {gerdTreatments.map((t, i) => (
                  <motion.div key={i} className="bio-card" style={{ padding: 24 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -6, boxShadow: `0 16px 40px ${t.color}20` }}
                  >
                    <div style={{ fontSize: 11, fontWeight: 700, color: t.color, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 8 }}>
                      Step {i + 1}
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 16, fontWeight: 800, color: t.color, marginBottom: 10 }}>{t.name}</h4>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12, lineHeight: 1.5 }}>{t.moa}</p>
                    <div style={{ fontSize: 12, fontWeight: 700, color: t.color, background: `${t.color}12`, padding: '6px 12px', borderRadius: 'var(--radius-full)', border: `1px solid ${t.color}25` }}>
                      💊 {t.drugs}
                    </div>
                    <div style={{ marginTop: 10, fontSize: 11, color: 'var(--text-muted)' }}>⏱️ {t.speed}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
