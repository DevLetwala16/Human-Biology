import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer, PieChart, Pie } from 'recharts';

export default function InfectiousChapter({ chapter }) {
  const [activeTab, setActiveTab] = useState('bacteria');

  const bacteriaInfections = [
    {
      organism: 'Staphylococcus aureus', icon: '🔴', color: '#ef4444',
      gram: 'Gram +', type: 'Cocci',
      diseases: ['Skin infections (boils, cellulitis)', 'Pneumonia', 'Osteomyelitis', 'Septicemia'],
      treatments: [
        { drug: 'Cephalexin', type: 'Oral', use: 'Mild skin infections' },
        { drug: 'Amoxycillin + Clavulanate', type: 'Oral', use: 'Moderate infections' },
        { drug: 'Mupirocin', type: 'Topical', use: 'Skin surface only' },
        { drug: 'Vancomycin', type: 'IV', use: 'MRSA (resistant strains)' },
      ],
    },
    {
      organism: 'Streptococcus pyogenes', icon: '🟣', color: '#8b5cf6',
      gram: 'Gram +', type: 'Cocci (chains)',
      diseases: ['Strep throat', 'Sinusitis', 'Bronchitis', 'Scarlet fever'],
      treatments: [
        { drug: 'Penicillin V', type: 'Oral', use: 'First-line for strep throat' },
        { drug: 'Azithromycin', type: 'Oral', use: 'Penicillin allergy' },
        { drug: 'Clarithromycin', type: 'Oral', use: 'Alternative macrolide' },
        { drug: 'Amoxycillin + Clavulanate', type: 'Oral', use: 'Sinusitis/bronchitis' },
      ],
    },
  ];

  const fungalInfections = [
    { name: 'Tinea capitis', location: 'Scalp', color: '#f59e0b' },
    { name: 'Tinea faciei', location: 'Face/Cheeks', color: '#f97316' },
    { name: 'Tinea barbae', location: 'Facial hair', color: '#ef4444' },
    { name: 'Tinea corporis', location: 'Torso/Ring', color: '#10b981' },
    { name: 'Tinea cruris', location: 'Groin', color: '#8b5cf6' },
    { name: 'Tinea manuum', location: 'Hands', color: '#0ea5e9' },
    { name: 'Tinea pedis', location: 'Feet/Athlete\'s foot', color: '#06b6d4' },
    { name: 'Tinea unguium', location: 'Nails/Onychomycosis', color: '#6366f1' },
  ];

  const antifungalDrugs = ['Terbinafine', 'Miconazole', 'Ketoconazole', 'Fluconazole', 'Clotrimazole', 'Itraconazole', 'Amorolfine', 'Luliconazole'];

  const antibioticMOA = [
    { mechanism: 'Cell Wall Inhibition', color: '#2ea464', drugs: 'Penicillins, Cephalosporins, Carbapenems, Glycopeptides, Monobactams, Cycloserine', icon: '🧱', count: 6 },
    { mechanism: 'Membrane Disruption', color: '#0ea5e9', drugs: 'Polymyxins', icon: '🌊', count: 1 },
    { mechanism: 'RNA/DNA Inhibition', color: '#8b5cf6', drugs: 'Rifamycins, Fluoroquinolones', icon: '🧬', count: 2 },
    { mechanism: 'Ribosome Inhibition', color: '#f59e0b', drugs: 'Tetracyclines, Macrolides, Aminoglycosides, Lincosamides, Chloramphenicol', icon: '⚫', count: 5 },
  ];

  const antifungalMOA = [
    { mechanism: 'Ergosterol Synthesis Block', color: '#f59e0b', drugs: 'Azoles (Fluconazole, Ketoconazole) — block CYP51 enzyme', icon: '🚫', class: 'Azoles' },
    { mechanism: 'Membrane Pore Formation', color: '#f43f5e', drugs: 'Polyenes (Amphotericin B, Nystatin) — bind ergosterol, form fatal pores', icon: '🕳️', class: 'Polyenes' },
    { mechanism: 'Cell Wall Synthesis Block', color: '#8b5cf6', drugs: 'Echinocandins (Caspofungin) — target β-glucan synthase, cause lysis', icon: '💥', class: 'Echinocandins' },
    { mechanism: 'Nucleic Acid Inhibition', color: '#0ea5e9', drugs: 'Flucytosine — disrupts RNA/DNA synthesis inside fungal cells', icon: '🧬', class: 'Antimetabolite' },
  ];

  const moaData = antibioticMOA.map(m => ({ name: m.mechanism.substring(0, 12), count: m.count, color: m.color }));

  return (
    <div>
      {/* Tabs */}
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'flex', gap: 4, paddingTop: 24, paddingBottom: 0, overflowX: 'auto' }}>
          {[
            { key: 'bacteria', label: '🦠 Bacterial Infections', color: '#8b5cf6' },
            { key: 'fungal', label: '🍄 Fungal Infections', color: '#f59e0b' },
            { key: 'antibiotic-moa', label: '💊 Antibiotic Mechanisms', color: '#2ea464' },
            { key: 'antifungal-moa', label: '🧪 Antifungal Mechanisms', color: '#f97316' },
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
              whiteSpace: 'nowrap',
            }}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* Bacterial Infections */}
          {activeTab === 'bacteria' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {bacteriaInfections.map((org, i) => (
                  <motion.div key={i} className="bio-card" style={{ padding: 0, overflow: 'hidden' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div style={{ padding: '24px 28px', background: `linear-gradient(135deg, ${org.color}12, ${org.color}05)`, borderBottom: `1px solid ${org.color}20` }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <div style={{ fontSize: 40 }}>{org.icon}</div>
                        <div>
                          <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 20, fontWeight: 800, color: org.color }}>{org.organism}</h3>
                          <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                            {[org.gram, org.type].map((tag, j) => (
                              <span key={j} style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-full)', background: `${org.color}20`, color: org.color, border: `1px solid ${org.color}30` }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                      <div style={{ padding: '24px 28px', borderRight: '1px solid var(--border-color)' }}>
                        <h4 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 16 }}>🦠 Diseases Caused</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {org.diseases.map((d, j) => (
                            <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <div style={{ width: 8, height: 8, borderRadius: '50%', background: org.color, flexShrink: 0 }} />
                              <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ padding: '24px 28px' }}>
                        <h4 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 16 }}>💊 Treatments</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {org.treatments.map((t, j) => (
                            <div key={j} style={{
                              padding: '10px 14px',
                              background: `${org.color}08`,
                              border: `1px solid ${org.color}20`,
                              borderRadius: 'var(--radius-sm)',
                              display: 'flex', alignItems: 'center', gap: 12,
                            }}>
                              <span style={{ fontSize: 12, fontWeight: 700, color: org.color, minWidth: 50, textAlign: 'center', background: `${org.color}20`, padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>{t.type}</span>
                              <div>
                                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{t.drug}</div>
                                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{t.use}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Fungal Infections */}
          {activeTab === 'fungal' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div style={{ marginBottom: 40 }}>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 24, fontWeight: 800, marginBottom: 24, color: 'var(--text-primary)' }}>
                  🍄 Tinea Infections — 8 Types by Body Location
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
                  {fungalInfections.map((f, i) => (
                    <motion.div key={i} className="bio-card" style={{ padding: 20, textAlign: 'center' }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      whileHover={{ y: -4, boxShadow: `0 12px 32px ${f.color}20` }}
                    >
                      <div style={{ fontSize: 28, marginBottom: 8 }}>🍄</div>
                      <h4 style={{ fontSize: 13, fontWeight: 700, color: f.color, marginBottom: 6 }}>{f.name}</h4>
                      <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{f.location}</p>
                    </motion.div>
                  ))}
                </div>

                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 20, fontWeight: 800, marginBottom: 20, color: 'var(--text-primary)' }}>
                  💊 Antifungal Medications
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  {antifungalDrugs.map((drug, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      style={{
                        padding: '10px 20px',
                        background: `${['#f59e0b','#f97316','#ef4444','#10b981','#0ea5e9','#8b5cf6','#06b6d4','#6366f1'][i]}15`,
                        border: `1.5px solid ${['#f59e0b','#f97316','#ef4444','#10b981','#0ea5e9','#8b5cf6','#06b6d4','#6366f1'][i]}40`,
                        borderRadius: 'var(--radius-full)',
                        fontSize: 14, fontWeight: 700,
                        color: ['#f59e0b','#f97316','#ef4444','#10b981','#0ea5e9','#8b5cf6','#06b6d4','#6366f1'][i],
                      }}
                    >
                      💊 {drug}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Antibiotic MOA */}
          {activeTab === 'antibiotic-moa' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 24, fontWeight: 800, marginBottom: 32, color: 'var(--text-primary)' }}>
                💊 How Antibiotics Work — Mechanisms of Action
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 40 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {antibioticMOA.map((moa, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      style={{
                        padding: '20px 24px',
                        background: `${moa.color}10`,
                        border: `1.5px solid ${moa.color}30`,
                        borderRadius: 'var(--radius-md)',
                        borderLeft: `4px solid ${moa.color}`,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <span style={{ fontSize: 28 }}>{moa.icon}</span>
                        <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 16, fontWeight: 800, color: moa.color }}>{moa.mechanism}</h4>
                      </div>
                      <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{moa.drugs}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="bio-card" style={{ padding: 28 }}>
                  <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 700, marginBottom: 20, color: 'var(--text-primary)' }}>Drug Classes by Mechanism</h4>
                  <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={moaData}>
                      <XAxis dataKey="name" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} />
                      <YAxis tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
                      <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8, fontSize: 12 }} />
                      <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                        {moaData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}

          {/* Antifungal MOA */}
          {activeTab === 'antifungal-moa' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 24, fontWeight: 800, marginBottom: 12, color: 'var(--text-primary)' }}>
                🧪 Antifungal Mechanisms of Action
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: 15, lineHeight: 1.6 }}>
                Antifungals target structures found in fungi but NOT in human cells — primarily <strong style={{ color: '#f59e0b' }}>ergosterol</strong> (vs. human cholesterol) and <strong style={{ color: '#8b5cf6' }}>chitin</strong> cell walls. This selectivity minimizes harm to the patient.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
                {antifungalMOA.map((moa, i) => (
                  <motion.div key={i} className="bio-card" style={{ padding: 28 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, boxShadow: `0 16px 40px ${moa.color}20` }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <div style={{ fontSize: 36 }}>{moa.icon}</div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: moa.color, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4 }}>{moa.class}</div>
                        <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 16, fontWeight: 800, color: 'var(--text-primary)' }}>{moa.mechanism}</h4>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, padding: '12px 16px', background: `${moa.color}08`, borderRadius: 'var(--radius-sm)', border: `1px solid ${moa.color}20` }}>
                      {moa.drugs}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginTop: 32, padding: '24px', background: 'rgba(46,164,100,0.08)', border: '1.5px solid rgba(46,164,100,0.25)', borderRadius: 'var(--radius-lg)' }}
              >
                <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 700, color: '#2ea464', marginBottom: 12 }}>
                  🎯 Why Ergosterol Is the Perfect Target
                </h4>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Human cell membranes contain <strong>cholesterol</strong>, while fungal membranes contain <strong>ergosterol</strong>. 
                  Antifungal drugs exploit this difference — they specifically attack ergosterol without harming human cholesterol. 
                  This is why antifungals can selectively kill fungi while leaving human cells largely unharmed.
                </p>
              </motion.div>
            </motion.div>
          )}

        </div>
      </section>
    </div>
  );
}
