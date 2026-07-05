import { motion } from 'framer-motion';

export default function SkinRoutineChapter({ chapter }) {
  const steps = [
    { step: 1, name: 'Cleanser', time: '30 sec', icon: '🧴', color: '#0ea5e9', when: 'AM + PM', detail: 'Wash away dirt, oil, and pollution. Use a gentle, pH-balanced formula. Rinse with lukewarm — never hot — water.', tips: ['Massage 30 seconds minimum', 'Rinse with cool/lukewarm water', 'Pat dry — never rub'], oily: 'Gel/foam cleanser', dry: 'Cream/oil cleanser', combo: 'Gentle foaming cleanser' },
    { step: 2, name: 'Toner', time: '1 min', icon: '💦', color: '#38bdf8', when: 'AM + PM', detail: 'Balance skin pH and add quick hydration. Apply by patting (not wiping) onto skin. Hydrating toners work best.', tips: ['Pat on, don\'t rub', 'Skip alcohol-based toners', 'Let absorb fully before next step'], oily: 'Niacinamide toner', dry: 'Hydrating essence', combo: 'Balancing toner' },
    { step: 3, name: 'Serum', time: '1-2 min', icon: '⚗️', color: '#8b5cf6', when: 'Targeted', detail: 'Max 2 serums at a time. These are your problem-solvers: Vitamin C for glow, Retinol for aging, Tranexamic Acid for dark spots.', tips: ['Max 2 serums per routine', 'Apply from thinnest to thickest', 'Vitamin C in AM, Retinol in PM'], oily: 'Niacinamide + Salicylic', dry: 'Hyaluronic + Peptides', combo: 'Vitamin C AM / Retinol PM' },
    { step: 4, name: 'Eye Cream', time: '30 sec', icon: '👁️', color: '#f43f5e', when: 'AM + PM', detail: 'Gently pat a pea-sized amount around the orbital bone — never on the eyelid. Use your ring finger (lightest pressure).', tips: ['Use ring finger only', 'Pat — never rub', 'Apply around orbital bone'], oily: 'Caffeine eye gel', dry: 'Peptide eye cream', combo: 'Lightweight eye cream' },
    { step: 5, name: 'Moisturizer', time: '1 min', icon: '🧪', color: '#2ea464', when: 'AM + PM', detail: 'Lock in all previous layers. Gel textures for oily skin, cream for dry. Apply while skin is still slightly damp for better absorption.', tips: ['Apply while slightly damp', 'Gel = oily skin', 'Cream = dry skin'], oily: 'Lightweight gel moisturizer', dry: 'Rich cream with ceramides', combo: 'Lotion or gel-cream' },
    { step: 6, name: 'Facial Oil', time: '1 min', icon: '🫙', color: '#f97316', when: 'PM Only', detail: 'Night only, for extra nourishment. Apply after moisturizer to seal everything in. Only needed for dry skin types — oily skin usually doesn\'t need this.', tips: ['PM only — not AM', 'After moisturizer (last step PM)', 'Dry skin only'], oily: 'Skip or use 1 drop squalane', dry: 'Rosehip, Marula, Argan oil', combo: 'Skip usually' },
    { step: 7, name: 'Sunscreen', time: '5 min', icon: '☀️', color: '#f59e0b', when: 'AM Only', detail: 'ALWAYS the final step in your morning routine. SPF 50+ every single day. Reapply every 3 hours. This one step prevents 80% of visible aging.', tips: ['Always last in AM routine', 'SPF 50+ mandatory', 'Reapply every 3 hours outdoors'], oily: 'Matte/gel SPF 50', dry: 'Hydrating SPF with hyaluronic', combo: 'Lightweight SPF 50 PA+++' },
  ];

  const layeringRules = [
    { rule: 'Thinnest to Thickest', icon: '💧→🧴', desc: 'Water-based serums before oil-based. Lighter textures always go first to penetrate deeper.' },
    { rule: 'Wait Between Layers', icon: '⏱️', desc: 'Give each product 1-2 minutes to absorb before applying the next. Prevents product pilling.' },
    { rule: 'Acids First, Actives Second', icon: '🧪', desc: 'Apply acids (toner) before serums. Active ingredients work best on clean, balanced skin.' },
    { rule: 'Oil Seals Everything', icon: '🫙', desc: 'Oils go after water-based products. They act as occlusives, locking everything underneath in.' },
  ];

  const conflictMatrix = [
    { a: 'Vitamin C', b: 'Retinol', compatible: false, note: 'Use Vit C in AM, Retinol in PM' },
    { a: 'Niacinamide', b: 'Hyaluronic Acid', compatible: true, note: 'Perfect hydrating duo' },
    { a: 'AHA/BHA', b: 'Retinol', compatible: false, note: 'Avoid together — too irritating' },
    { a: 'Vitamin C', b: 'SPF', compatible: true, note: 'Together for max photoprotection' },
    { a: 'Ceramides', b: 'Peptides', compatible: true, note: 'Best barrier-repair combination' },
    { a: 'Benzoyl Peroxide', b: 'Retinol', compatible: false, note: 'Can deactivate each other' },
  ];

  return (
    <div>
      {/* Routine steps */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">✨ Step-by-Step</span>
            <h2 className="section-title">The Perfect Skincare Routine</h2>
            <p className="section-desc">Always apply from thinnest (watery) to thickest (creamy), waiting 1–2 mins between layers</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 56 }}>
            {steps.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6, boxShadow: `0 8px 32px ${s.color}20` }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 56px 1fr auto',
                  gap: 20,
                  alignItems: 'flex-start',
                  padding: '20px 28px',
                  background: 'var(--bg-card)',
                  border: `1px solid var(--border-color)`,
                  borderLeft: `4px solid ${s.color}`,
                  borderRadius: 'var(--radius-md)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Step number */}
                <div style={{
                  width: 48, height: 48,
                  borderRadius: '50%',
                  background: `${s.color}20`,
                  border: `2px solid ${s.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 800, fontSize: 18, color: s.color,
                  flexShrink: 0,
                }}>
                  {s.step}
                </div>

                {/* Icon */}
                <div style={{ fontSize: 40, textAlign: 'center', paddingTop: 4 }}>{s.icon}</div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 800, color: s.color }}>{s.name}</h4>
                    <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 'var(--radius-full)', background: `${s.color}15`, color: s.color, fontWeight: 700, border: `1px solid ${s.color}30` }}>
                      {s.when}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>⏱️ {s.time}</span>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 12 }}>{s.detail}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {s.tips.map((tip, j) => (
                      <span key={j} style={{ fontSize: 11, color: 'var(--text-secondary)', padding: '3px 10px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
                        ✓ {tip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skin type recommendations */}
                <div style={{ minWidth: 160, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[{ label: 'Oily', val: s.oily, color: '#0ea5e9' }, { label: 'Dry', val: s.dry, color: '#f97316' }, { label: 'Combo', val: s.combo, color: '#2ea464' }].map((st, j) => (
                    <div key={j} style={{ fontSize: 11 }}>
                      <span style={{ fontWeight: 700, color: st.color }}>{st.label}: </span>
                      <span style={{ color: 'var(--text-muted)' }}>{st.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* AM vs PM visual */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 56 }}>
            {[
              { time: '☀️ AM Routine', steps: ['Cleanser', 'Toner', 'Vitamin C Serum', 'Eye Cream', 'Moisturizer', 'SPF 50+'], color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b20, #f59e0b08)' },
              { time: '🌙 PM Routine', steps: ['Cleanser (double cleanse)', 'Toner', 'Treatment Serum (Retinol)', 'Eye Cream', 'Moisturizer', 'Facial Oil (dry skin)'], color: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf620, #8b5cf608)' },
            ].map((routine, i) => (
              <motion.div key={i}
                className="bio-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ padding: 28, background: routine.gradient, border: `1.5px solid ${routine.color}30` }}
              >
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 20, fontWeight: 800, color: routine.color, marginBottom: 20 }}>{routine.time}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {routine.steps.map((step, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', background: routine.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{j + 1}</div>
                      <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ingredient compatibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 24, fontWeight: 800, marginBottom: 8, color: 'var(--text-primary)' }}>
              🧪 Ingredient Compatibility Guide
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: 14 }}>
              Some ingredients work better together, others should be kept apart. Know the combinations before layering.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {conflictMatrix.map((pair, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    padding: '16px 20px',
                    background: pair.compatible ? 'rgba(46,164,100,0.08)' : 'rgba(239,68,68,0.08)',
                    border: `1.5px solid ${pair.compatible ? 'rgba(46,164,100,0.25)' : 'rgba(239,68,68,0.25)'}`,
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{pair.a}</span>
                    <span style={{ fontSize: 16, color: pair.compatible ? '#2ea464' : '#ef4444' }}>{pair.compatible ? '✅' : '❌'}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{pair.b}</span>
                  </div>
                  <p style={{ fontSize: 12, color: pair.compatible ? '#2ea464' : '#ef4444', fontWeight: 600 }}>{pair.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Layering rules */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 40 }}>
            {layeringRules.map((rule, i) => (
              <motion.div key={i} className="bio-card" style={{ padding: 20, textAlign: 'center' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{rule.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{rule.rule}</h4>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{rule.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
