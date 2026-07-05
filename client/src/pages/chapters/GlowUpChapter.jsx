import { motion } from 'framer-motion';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export default function GlowUpChapter({ chapter }) {
  const pillarsData = [
    { name: 'SPF Daily', score: 10, color: '#f59e0b' },
    { name: 'Consistency', score: 9, color: '#2ea464' },
    { name: 'Moisturize', score: 9, color: '#0ea5e9' },
    { name: 'Cleanse', score: 8, color: '#0d9488' },
    { name: 'Sleep', score: 9, color: '#8b5cf6' },
    { name: 'Diet', score: 8, color: '#84cc16' },
  ];

  const timelineData = [
    { period: 'Week 1–2', what: 'Skin may purge or adjust', icon: '⚡', color: '#f59e0b', detail: 'New actives can cause temporary purging. Stick with the routine.' },
    { period: 'Week 3–4', what: 'First skin cycle complete', icon: '🔄', color: '#0ea5e9', detail: 'Dead cells from the first 28-day cycle have shed. Texture improving.' },
    { period: 'Week 5–6', what: 'Visible changes emerge', icon: '✨', color: '#2ea464', detail: 'Pigmentation fading, acne reducing, hydration improving.' },
    { period: 'Week 7–8', what: 'Full results visible', icon: '🌟', color: '#f97316', detail: 'Two complete skin cycles. You can now accurately judge the product.' },
    { period: 'Month 3–6', what: 'Collagen rebuilding', icon: '💪', color: '#8b5cf6', detail: 'Retinol, peptides and actives start rebuilding deeper skin structures.' },
    { period: 'Month 6+', what: 'Long-term transformation', icon: '🏆', color: '#f43f5e', detail: 'Consistent skin health. Maintained with routine + lifestyle.' },
  ];

  const priorityList = [
    { rank: 1, title: 'Sunscreen (SPF 50)', desc: 'Prevents 80% of aging. The single most impactful skincare step you can take.', icon: '☀️', color: '#f59e0b' },
    { rank: 2, title: 'Gentle Cleanser', desc: 'Twice daily. The foundation of every routine. Sets the stage for everything else.', icon: '🧴', color: '#0d9488' },
    { rank: 3, title: 'Moisturizer', desc: 'Lock in hydration. Even oily skin. Non-negotiable for barrier health.', icon: '💧', color: '#0ea5e9' },
    { rank: 4, title: 'Targeted Serum', desc: '1 problem at a time. Vitamin C, Retinol, Niacinamide — pick based on your concern.', icon: '⚗️', color: '#8b5cf6' },
    { rank: 5, title: '7–9 Hours Sleep', desc: 'Free skin repair. No product replaces what your body does 10PM–2AM.', icon: '😴', color: '#6366f1' },
    { rank: 6, title: 'Reduce Dairy & Sugar', desc: 'Cuts inflammation for 70% of people. Food is medicine for your skin.', icon: '🥗', color: '#2ea464' },
  ];

  const glowPieData = [
    { name: 'Routine', value: 35, color: '#8b5cf6' },
    { name: 'Diet', value: 25, color: '#84cc16' },
    { name: 'Sleep', value: 20, color: '#0ea5e9' },
    { name: 'Stress Mgmt', value: 10, color: '#f59e0b' },
    { name: 'Genetics', value: 10, color: '#f43f5e' },
  ];

  const mantras = [
    { text: 'Great skin is a science, not a mystery', icon: '🔬', color: '#2ea464' },
    { text: 'Consistency beats perfection every time', icon: '📅', color: '#8b5cf6' },
    { text: 'Breakouts are your skin asking for help', icon: '❤️', color: '#f43f5e' },
    { text: 'Price ≠ Quality — ingredients matter', icon: '💰', color: '#f59e0b' },
  ];

  return (
    <div>
      {/* Hero mantra */}
      <section style={{ padding: '60px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}
          >
            <div style={{ fontSize: 64, marginBottom: 20 }}>💫</div>
            <h2 style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 900,
              letterSpacing: '-0.5px',
              marginBottom: 24,
              color: 'var(--text-primary)',
            }}>
              Great skin isn't about{' '}
              <span className="gradient-text">buying hype</span>
              {' '}— it's about science & consistency
            </h2>
            <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Skin issues like breakouts and dark circles aren't failures. They're simply your body's way of asking for proper care and attention. Learn the science, build the habit, and results follow.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 48 }}>
            {mantras.map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{
                  padding: '24px 20px',
                  background: 'var(--bg-card)',
                  border: `1.5px solid ${m.color}30`,
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{m.icon}</div>
                <p style={{ fontSize: 14, fontWeight: 700, color: m.color, lineHeight: 1.5 }}>"{m.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority ladder */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🏆 Prioritize This</span>
            <h2 className="section-title">The Glow-Up Priority List</h2>
            <p className="section-desc">If you can only do a few things, do these — in order of impact</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 56 }}>
            {priorityList.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 8 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '52px 52px 1fr',
                  gap: 20,
                  alignItems: 'center',
                  padding: '18px 24px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderLeft: `4px solid ${item.color}`,
                  borderRadius: 'var(--radius-md)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = item.color + '40'; e.currentTarget.style.boxShadow = `0 8px 24px ${item.color}15`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.borderLeftColor = item.color; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: 52, height: 52,
                  borderRadius: '50%',
                  background: `${item.color}20`,
                  border: `2px solid ${item.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 900, fontSize: 20, color: item.color,
                }}>
                  #{item.rank}
                </div>
                <span style={{ fontSize: 36 }}>{item.icon}</span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 17, fontWeight: 800, color: item.color, marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">📅 Realistic Timeline</span>
            <h2 className="section-title">What to Expect & When</h2>
            <p className="section-desc">Setting realistic expectations is the key to staying consistent with your routine</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 56 }}>
            {timelineData.map((t, i) => (
              <motion.div key={i} className="bio-card" style={{ padding: 24, position: 'relative', overflow: 'hidden' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: `0 20px 48px ${t.color}20` }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80, borderRadius: '0 0 0 100%', background: `${t.color}15` }} />
                <div style={{ fontSize: 32, marginBottom: 10 }}>{t.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: t.color, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 6 }}>{t.period}</div>
                <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 16, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 10 }}>{t.what}</h4>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>{t.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Final Charts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <motion.div className="bio-card" style={{ padding: 28 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 700, marginBottom: 20, color: 'var(--text-primary)' }}>
                📊 What Controls Your Glow?
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={glowPieData} cx="50%" cy="50%" outerRadius={80} innerRadius={35} dataKey="value" paddingAngle={3}>
                    {glowPieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12, justifyContent: 'center' }}>
                {glowPieData.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: d.color }} />
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{d.name} ({d.value}%)</span>
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
                📊 Skincare Pillars Radar
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <RadarChart data={pillarsData}>
                  <PolarGrid stroke="var(--border-color)" />
                  <PolarAngleAxis dataKey="name" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} />
                  <Radar name="Score" dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.25} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              marginTop: 48,
              padding: '40px',
              background: 'var(--grad-primary)',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(46,164,100,0.3)',
            }}
          >
            <div style={{ fontSize: 52, marginBottom: 16 }}>🌟</div>
            <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 28, fontWeight: 900, color: 'white', marginBottom: 16 }}>
              Your Glow-Up Starts Today
            </h3>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto' }}>
              Pick 3 basics: Cleanser + Moisturizer + SPF. Stick to it for 8 weeks. 
              Add one targeted ingredient. Drink water, sleep 8 hours. 
              That's literally it — the science of great skin is simple, the secret is consistency.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
