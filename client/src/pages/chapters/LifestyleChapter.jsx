import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts';

export default function LifestyleChapter({ chapter }) {
  const dietImpact = [
    { name: 'Dairy/Sugar', impact: -8, icon: '🥛', color: '#ef4444', label: 'Worsens acne for 70%', type: 'negative' },
    { name: 'Omega-3s', impact: 8, icon: '🐟', color: '#2ea464', label: 'Reduces inflammation', type: 'positive' },
    { name: 'Antioxidants', impact: 7, icon: '🫐', color: '#8b5cf6', label: 'Hydrates cells + glow', type: 'positive' },
    { name: 'Water (3L)', impact: 9, icon: '💧', color: '#0ea5e9', label: 'Essential hydration', type: 'positive' },
    { name: 'Leafy Greens', impact: 7, icon: '🥬', color: '#10b981', label: 'Fights breakouts', type: 'positive' },
    { name: 'Processed Food', impact: -7, icon: '🍟', color: '#f97316', label: 'Triggers inflammation', type: 'negative' },
  ];

  const sleepData = [
    { time: '10 PM', activity: 'Skin repair begins', color: '#8b5cf6', note: 'Blood flow to skin increases' },
    { time: '10 PM–2 AM', activity: 'PEAK REPAIR PHASE', color: '#2ea464', note: 'Collagen production spikes. Cell renewal fastest. Growth hormone released.' },
    { time: '2 AM–4 AM', activity: 'Hydration recovery', color: '#0ea5e9', note: 'Skin rebalances moisture and sebum levels' },
    { time: '4 AM–Wake', activity: 'Cortisol rises', color: '#f59e0b', note: 'Prepares skin for daily environment stress' },
  ];

  const seasonalData = [
    { season: 'Summer', icon: '☀️', color: '#f59e0b', adjustments: ['Lightweight gel moisturizer', 'Matte SPF 50', 'Antioxidant serum (Vit C)', 'Frequent cleanser (sweat)'], skip: ['Heavy occlusive creams', 'Too many layered oils', 'Thick foundations'] },
    { season: 'Monsoon', icon: '🌧️', color: '#0ea5e9', adjustments: ['Antifungal cleanser', 'Light product layers', 'Water-based moisturizer', 'Matte non-comedogenic SPF'], skip: ['Pore-clogging facial oils', 'Heavy cream foundations', 'Oil-based serums'] },
    { season: 'Winter', icon: '❄️', color: '#6366f1', adjustments: ['Thick ceramide-rich cream', 'Room humidifier (50% humidity)', 'Gentle non-foaming cleanser', 'Facial oil (dry skin)'], skip: ['Stripping foaming cleansers', 'Harsh exfoliants', 'Alcohol-based toners'] },
  ];

  const mythsData = [
    { myth: 'Chocolate causes acne', truth: 'Dark chocolate (70%+) is fine. It\'s the DAIRY in milk chocolate that causes breakouts.', icon: '🍫', color: '#92400e' },
    { myth: 'Oily skin should skip moisturizer', truth: 'NEVER! Skipping moisturizer causes the skin to rebound and produce even MORE oil to compensate.', icon: '✨', color: '#0ea5e9' },
    { myth: 'Expensive products work better', truth: 'Expensive luxury products do NOT inherently work better than well-formulated drugstore alternatives.', icon: '💰', color: '#f59e0b' },
    { myth: 'Natural = safe', truth: 'Many natural ingredients (lemon, essential oils) can damage the skin barrier. Always check evidence.', icon: '🌿', color: '#2ea464' },
    { myth: 'You outgrow acne at 25', truth: 'Adult acne is very common, especially hormonal acne in women. Age doesn\'t automatically fix skin.', icon: '📅', color: '#8b5cf6' },
    { myth: 'Pores open and close', truth: 'Pores don\'t actually open or close. Steam only softens debris making extraction easier.', icon: '🔬', color: '#f43f5e' },
  ];

  const stressData = [
    { factor: 'Breathing Ex.', score: 9, color: '#2ea464' },
    { factor: 'Walking', score: 8, color: '#0d9488' },
    { factor: 'Journaling', score: 7, color: '#8b5cf6' },
    { factor: 'Sleep 9hrs', score: 10, color: '#0ea5e9' },
    { factor: 'Screen time', score: 2, color: '#ef4444' },
    { factor: 'Meditation', score: 9, color: '#f59e0b' },
  ];

  return (
    <div>
      {/* Diet Section */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🥗 Nutrition & Skin</span>
            <h2 className="section-title">How Diet Affects Your Skin</h2>
            <p className="section-desc">You literally eat your way to better or worse skin. Food directly drives inflammation, oil production, and hydration.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', marginBottom: 56 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {dietImpact.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    padding: '14px 18px',
                    background: item.type === 'positive' ? 'rgba(46,164,100,0.06)' : 'rgba(239,68,68,0.06)',
                    border: `1px solid ${item.type === 'positive' ? 'rgba(46,164,100,0.2)' : 'rgba(239,68,68,0.2)'}`,
                    borderRadius: 'var(--radius-md)',
                    borderLeft: `4px solid ${item.color}`,
                    display: 'flex', alignItems: 'center', gap: 14,
                  }}
                >
                  <span style={{ fontSize: 28 }}>{item.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>{item.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{item.label}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 800, color: item.color }}>
                    {item.type === 'positive' ? '✅' : '⚠️'} {item.type === 'positive' ? 'Good' : 'Avoid'}
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="bio-card" style={{ padding: 28 }}>
                <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 700, marginBottom: 20, color: 'var(--text-primary)' }}>
                  📊 Skin Impact Score
                </h4>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={dietImpact} layout="vertical">
                    <XAxis type="number" domain={[-10, 10]} tick={{ fontSize: 10, fill: 'var(--text-muted)' }} />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} width={80} />
                    <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8, fontSize: 12 }} />
                    <Bar dataKey="impact" radius={[0, 6, 6, 0]}>
                      {dietImpact.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8, textAlign: 'center' }}>Positive = skin benefit, Negative = skin harm</p>
              </div>

              <div style={{ padding: '16px 20px', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontWeight: 700, color: '#0ea5e9', marginBottom: 8 }}>💧 Hydration Goal</div>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Aim for <strong>3 liters of water daily</strong>. Add cucumber or mint for an extra hydration boost. Dehydrated skin looks dull, feels tight, and fine lines become more visible.
                </p>
              </div>
            </div>
          </div>

          {/* Sleep Section */}
          <motion.div className="section-header" style={{ marginTop: 32 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">😴 Sleep & Repair</span>
            <h2 className="section-title">The Skin Repair Window</h2>
            <p className="section-desc">Your skin does its most important work while you sleep — especially between 10PM and 2AM</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 40 }}>
            {sleepData.map((s, i) => (
              <motion.div key={i}
                className="bio-card"
                style={{ padding: 24 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: `0 16px 40px ${s.color}20` }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, color: s.color, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 8 }}>{s.time}</div>
                <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 15, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 10 }}>{s.activity}</h4>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.note}</p>
                <div style={{ marginTop: 14, height: 4, background: 'var(--bg-secondary)', borderRadius: 2, overflow: 'hidden' }}>
                  <motion.div style={{ height: '100%', background: s.color, borderRadius: 2, width: `${[60, 100, 70, 40][i]}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${[60, 100, 70, 40][i]}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stress & Cortisol */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 56 }}>
            <motion.div className="bio-card" style={{ padding: 28 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 20, fontWeight: 800, color: '#ef4444', marginBottom: 12 }}>
                😤 Stress → Cortisol → Breakouts
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 20 }}>
                Cortisol (the stress hormone) directly stimulates sebaceous glands to produce more oil, triggers inflammation, and breaks down collagen — causing acne, puffiness, and premature aging.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Lower stress in just 10 min/day', '4-7-8 breathing exercises', '10-minute daily walks', 'Evening journaling before bed', 'Reduce screens 1hr before sleep'].map((tip, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2ea464', flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{tip}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="bio-card" style={{ padding: 28 }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 700, marginBottom: 20, color: 'var(--text-primary)' }}>
                📊 Lifestyle Impact on Skin
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <RadarChart data={stressData}>
                  <PolarGrid stroke="var(--border-color)" />
                  <PolarAngleAxis dataKey="factor" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} />
                  <Radar name="Score" dataKey="score" stroke="#84cc16" fill="#84cc16" fillOpacity={0.2} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Seasonal Care */}
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🌦️ Seasonal</span>
            <h2 className="section-title">Seasonal Skincare Adjustments</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 56 }}>
            {seasonalData.map((season, i) => (
              <motion.div key={i} className="bio-card" style={{ padding: 28, overflow: 'hidden', position: 'relative' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6, boxShadow: `0 20px 48px ${season.color}20` }}
              >
                <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: season.color, opacity: 0.06, filter: 'blur(30px)' }} />
                <div style={{ position: 'relative' }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>{season.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 20, fontWeight: 800, color: season.color, marginBottom: 20 }}>{season.season}</h3>

                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#2ea464', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 10 }}>✅ DO THIS</div>
                    {season.adjustments.map((adj, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#2ea464', flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{adj}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 10 }}>🚫 SKIP THIS</div>
                    {season.skip.map((s, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#ef4444', flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Myths Busted */}
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">💡 Myth Busting</span>
            <h2 className="section-title">Skincare Myths — Busted</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {mythsData.map((myth, i) => (
              <motion.div key={i} className="bio-card" style={{ padding: 24 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{myth.icon}</div>
                <div style={{ padding: '8px 12px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--radius-sm)', marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#ef4444', marginBottom: 4 }}>❌ MYTH</div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>"{myth.myth}"</p>
                </div>
                <div style={{ padding: '8px 12px', background: 'rgba(46,164,100,0.08)', border: '1px solid rgba(46,164,100,0.2)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#2ea464', marginBottom: 4 }}>✅ TRUTH</div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{myth.truth}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
