import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts';

export default function MicrobiologyChapter({ chapter }) {
  const [activePathogen, setActivePathogen] = useState(null);

  const pathogens = [
    {
      type: 'Bacteria', icon: '🦠', color: '#8b5cf6', cell: 'Prokaryote', dna: 'Yes (no nucleus)',
      treatment: 'Antibiotics', examples: 'Pneumonia, TB, MRSA',
      desc: 'Single-celled prokaryotes without a true nucleus. Have a cell wall, flagella, and can form spores. Reproduce rapidly by binary fission. Treatments target cell wall synthesis or protein production.',
      features: ['Prokaryotic (no nucleus)', 'Has cell wall (peptidoglycan)', 'Circular DNA (nucleoid)', 'Plasmids carry resistance genes', 'Flagella for motility', 'Rapid binary fission'],
    },
    {
      type: 'Virus', icon: '🔴', color: '#ef4444', cell: 'Non-cellular', dna: 'Yes (RNA or DNA)',
      treatment: 'Antivirals, Vaccines', examples: 'COVID-19, HIV, Influenza',
      desc: 'NOT living organisms. Cannot replicate independently — must hijack a host cell. Zero effect from antibiotics. Consist of genetic material inside a protein coat (capsid). Treated with antivirals or prevented with vaccines.',
      features: ['Not considered living!', 'No metabolism of own', 'Must hijack host cells', 'DNA or RNA genome', 'Protein capsid coat', 'Antibiotics are USELESS'],
    },
    {
      type: 'Fungi', icon: '🍄', color: '#f59e0b', cell: 'Eukaryote', dna: 'Yes (true nucleus)',
      treatment: 'Antifungals', examples: 'Tinea, Candida, Aspergillus',
      desc: 'True eukaryotes with a nucleus. Have ergosterol instead of cholesterol in their cell membrane — this is the key target for antifungal drugs. Can cause superficial infections (skin/nails) or deep systemic infections.',
      features: ['True eukaryote (nucleus)', 'Ergosterol membrane', 'Chitin cell wall', 'Can be yeast or mold', 'Target: ergosterol synthesis', 'Antifungal drugs work'],
    },
    {
      type: 'Protozoa', icon: '🟡', color: '#f97316', cell: 'Eukaryote', dna: 'Yes (true nucleus)',
      treatment: 'Antiprotozoals', examples: 'Malaria, Dysentery, Giardia',
      desc: 'Unicellular eukaryotes — more complex than bacteria. Often transmitted by vectors (mosquitoes for malaria). Can form cysts for environmental survival. Treated with specific antiprotozoal drugs.',
      features: ['Unicellular eukaryote', 'Complex life cycles', 'Often vector-transmitted', 'Can form dormant cysts', 'Nucleus + organelles', 'Require specific drugs'],
    },
    {
      type: 'Algae', icon: '🌿', color: '#2ea464', cell: 'Eukaryote', dna: 'Yes (true nucleus)',
      treatment: 'Toxin management', examples: 'Cyanobacteria toxicity',
      desc: 'Mostly harmless but some (cyanobacteria) produce dangerous toxins. Rarely pathogenic directly but can contaminate water supplies. Treatment focuses on toxin management rather than killing the organism.',
      features: ['Usually non-pathogenic', 'Photosynthetic organisms', 'Some produce toxins', 'Cyanobacteria = toxic', 'Water contamination risk', 'Toxin-focused treatment'],
    },
  ];

  const gramData = [
    { category: 'Gram +', color: '#8b5cf6', wall: 'Thick peptidoglycan', membrane: 'No outer membrane', dye: 'Purple (Crystal violet)', examples: 'S. aureus, Streptococcus, Clostridium', drugs: 'Penicillin, Vancomycin', vulnerable: true },
    { category: 'Gram -', color: '#ef4444', wall: 'Thin peptidoglycan', membrane: 'Extra LPS outer membrane', dye: 'Red/Pink (Safranin)', examples: 'Shigella, Salmonella, Gonococci', drugs: 'Fluoroquinolones, Carbapenems', vulnerable: false },
  ];

  const sizeComparison = [
    { name: 'Virus', size: 0.02, unit: '0.02 μm', icon: '🔴', color: '#ef4444' },
    { name: 'Bacteria', size: 1, unit: '1-10 μm', icon: '🦠', color: '#8b5cf6' },
    { name: 'Fungi', size: 10, unit: '10-100 μm', icon: '🍄', color: '#f59e0b' },
    { name: 'Protozoa', size: 50, unit: '10-500 μm', icon: '🟡', color: '#f97316' },
    { name: 'Human Cell', size: 20, unit: '10-30 μm', icon: '🔵', color: '#0ea5e9' },
  ];

  return (
    <div>
      {/* Pathogen Table */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🦠 Classification</span>
            <h2 className="section-title">Pathogen Classification</h2>
            <p className="section-desc">The five types of microorganisms that cause disease — click each to learn more</p>
          </motion.div>

          {/* Pathogen Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 40 }}>
            {pathogens.map((p, i) => (
              <motion.div key={i}
                onClick={() => setActivePathogen(activePathogen?.type === p.type ? null : p)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                style={{
                  background: activePathogen?.type === p.type ? `${p.color}15` : 'var(--bg-card)',
                  border: `1.5px solid ${activePathogen?.type === p.type ? p.color : 'var(--border-color)'}`,
                  borderRadius: 'var(--radius-lg)',
                  padding: 20,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 10 }}>{p.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 15, fontWeight: 800, color: p.color, marginBottom: 6 }}>{p.type}</h4>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>{p.cell}</div>
                <div style={{ marginTop: 10, fontSize: 11, fontWeight: 600, color: p.color, background: `${p.color}15`, padding: '4px 8px', borderRadius: 'var(--radius-full)', border: `1px solid ${p.color}30` }}>
                  {p.treatment.split(',')[0]}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detail panel */}
          {activePathogen && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              style={{
                background: `linear-gradient(135deg, ${activePathogen.color}10, ${activePathogen.color}05)`,
                border: `1.5px solid ${activePathogen.color}40`,
                borderRadius: 'var(--radius-xl)',
                padding: 36,
                marginBottom: 32,
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                <div>
                  <div style={{ fontSize: 52, marginBottom: 12 }}>{activePathogen.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 26, fontWeight: 800, color: activePathogen.color, marginBottom: 8 }}>
                    {activePathogen.type}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{activePathogen.desc}</p>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12 }}>Key Features</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {activePathogen.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: activePathogen.color, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      { label: 'Cell Type', value: activePathogen.cell },
                      { label: 'DNA/RNA', value: activePathogen.dna },
                      { label: 'Treatment', value: activePathogen.treatment },
                      { label: 'Diseases', value: activePathogen.examples },
                    ].map((item, i) => (
                      <div key={i} style={{ padding: '12px 16px', background: `${activePathogen.color}10`, borderRadius: 'var(--radius-sm)', border: `1px solid ${activePathogen.color}20` }}>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 4 }}>{item.label}</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: activePathogen.color }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Full comparison table */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <table className="bio-table">
              <thead>
                <tr>
                  {['Pathogen', 'Cell Type', 'DNA/RNA', 'Treatment', 'Example Diseases'].map(h => <th key={h}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {pathogens.map((p, i) => (
                  <tr key={i}>
                    <td><span style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: p.color }}>{p.icon} {p.type}</span></td>
                    <td>{p.cell}</td>
                    <td>{p.dna}</td>
                    <td><span style={{ color: p.color, fontWeight: 600 }}>{p.treatment}</span></td>
                    <td style={{ color: 'var(--text-muted)' }}>{p.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Gram Staining */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🧪 Hans Christian Gram, 1884</span>
            <h2 className="section-title">Gram Staining Classification</h2>
            <p className="section-desc">A critical technique that determines bacterial structure and guides antibiotic selection</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {gramData.map((gram, i) => (
              <motion.div key={i} className="bio-card" style={{ padding: 32, overflow: 'hidden', position: 'relative' }}
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ boxShadow: `0 20px 48px ${gram.color}20` }}
              >
                <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: gram.color, opacity: 0.08, filter: 'blur(30px)' }} />
                <div style={{ position: 'relative' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '8px 20px', borderRadius: 'var(--radius-full)',
                    background: gram.color, color: 'white',
                    fontFamily: 'var(--font-primary)', fontWeight: 800, fontSize: 18,
                    marginBottom: 24, boxShadow: `0 4px 16px ${gram.color}40`,
                  }}>
                    {gram.category === 'Gram +' ? '🟣' : '🔴'} {gram.category}
                  </div>

                  {/* Visual bacteria representation */}
                  <div style={{
                    display: 'flex', gap: 6, marginBottom: 24, flexWrap: 'wrap',
                    padding: '16px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)',
                  }}>
                    {[...Array(6)].map((_, j) => (
                      <div key={j} style={{
                        width: 24, height: 40, borderRadius: 12,
                        background: gram.color,
                        opacity: 0.7 + j * 0.05,
                        transform: `rotate(${(j - 2.5) * 12}deg)`,
                        boxShadow: `0 2px 8px ${gram.color}40`,
                      }} />
                    ))}
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: 12, fontSize: 12, color: gram.color, fontWeight: 700 }}>
                      {gram.dye}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      { label: 'Cell Wall', value: gram.wall },
                      { label: 'Outer Membrane', value: gram.membrane },
                      { label: 'Stain Color', value: gram.dye },
                      { label: 'Examples', value: gram.examples },
                      { label: 'Antibiotics', value: gram.drugs },
                    ].map((item, j) => (
                      <div key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', minWidth: 100, paddingTop: 2 }}>{item.label}</div>
                        <div style={{ fontSize: 13, color: 'var(--text-secondary)', flex: 1 }}>{item.value}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    marginTop: 20, padding: '12px 16px',
                    background: gram.vulnerable ? 'rgba(46,164,100,0.1)' : 'rgba(239,68,68,0.1)',
                    border: `1px solid ${gram.vulnerable ? 'rgba(46,164,100,0.3)' : 'rgba(239,68,68,0.3)'}`,
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 13, fontWeight: 600,
                    color: gram.vulnerable ? '#2ea464' : '#ef4444',
                  }}>
                    {gram.vulnerable ? '✅ Generally easier to treat' : '⚠️ Harder to treat — outer membrane blocks many antibiotics'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bacteria Structure */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🔬 Anatomy</span>
            <h2 className="section-title">Bacterial Structure</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}>
            {/* SVG Bacteria */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <svg width="320" height="240" viewBox="0 0 320 240">
                {/* Capsule */}
                <ellipse cx="160" cy="120" rx="140" ry="100" fill="transparent" stroke="#8b5cf640" strokeWidth="3" strokeDasharray="8 4" />
                <text x="160" y="18" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="700">Capsule (Immune Shield)</text>

                {/* Cell wall */}
                <ellipse cx="160" cy="120" rx="120" ry="82" fill="#8b5cf610" stroke="#8b5cf6" strokeWidth="3" />

                {/* Cell membrane */}
                <ellipse cx="160" cy="120" rx="105" ry="68" fill="#0ea5e910" stroke="#0ea5e9" strokeWidth="2" />

                {/* Cytoplasm */}
                <ellipse cx="160" cy="120" rx="100" ry="63" fill="#2ea46408" />

                {/* Nucleoid */}
                <ellipse cx="150" cy="115" rx="45" ry="35" fill="#f59e0b15" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3" />
                <text x="150" y="120" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">Nucleoid</text>
                <text x="150" y="132" textAnchor="middle" fill="#f59e0b80" fontSize="8">(circular DNA)</text>

                {/* Plasmid */}
                <circle cx="85" cy="95" r="12" fill="#f43f5e15" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="85" y="99" textAnchor="middle" fill="#f43f5e" fontSize="7" fontWeight="700">Plasmid</text>

                {/* Ribosome dots */}
                {[[200, 90], [215, 110], [195, 130], [180, 95], [205, 140]].map(([x, y], j) => (
                  <circle key={j} cx={x} cy={y} r="5" fill="#2ea464" opacity="0.7" />
                ))}

                {/* Flagellum */}
                <path d="M 280 120 Q 310 90 300 60 Q 295 40 310 25" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
                <text x="308" y="60" textAnchor="middle" fill="#0d9488" fontSize="9" fontWeight="700">Flagellum</text>

                {/* Labels */}
                <text x="55" y="135" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontWeight="600">Cell Wall</text>
                <text x="55" y="148" textAnchor="middle" fill="#0ea5e9" fontSize="8" fontWeight="600">Membrane</text>
                <text x="200" y="175" textAnchor="middle" fill="#2ea464" fontSize="8" fontWeight="600">Ribosomes</text>
                <text x="85" y="82" textAnchor="middle" fill="#f43f5e" fontSize="8" fontWeight="600">Plasmid</text>
              </svg>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'Peptidoglycan Wall', color: '#8b5cf6', icon: '🔵', desc: 'Rigid outer wall providing shape and protection. Target of penicillins, cephalosporins.' },
                { name: 'Phospholipid Membrane', color: '#0ea5e9', icon: '🌊', desc: 'Selectively permeable inner barrier. Controls nutrient and waste exchange.' },
                { name: 'Nucleoid (Circular DNA)', color: '#f59e0b', icon: '🧬', desc: 'Bacterial DNA — not enclosed in a nucleus. Single circular chromosome.' },
                { name: 'Plasmids', color: '#f43f5e', icon: '💊', desc: 'Extra-chromosomal DNA rings. Carry antibiotic resistance genes like in MRSA.' },
                { name: 'Ribosomes (70S)', color: '#2ea464', icon: '⚫', desc: 'Protein synthesis factories. Different from human (80S) — target of many antibiotics.' },
                { name: 'Flagellum', color: '#0d9488', icon: '🌀', desc: 'Whip-like tail for motility. Helps bacteria move toward nutrients or away from toxins.' },
              ].map((part, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    padding: '12px 16px',
                    background: `${part.color}08`,
                    border: `1px solid ${part.color}20`,
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: `3px solid ${part.color}`,
                  }}
                >
                  <span style={{ fontSize: 18 }}>{part.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: part.color, marginBottom: 3 }}>{part.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{part.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
