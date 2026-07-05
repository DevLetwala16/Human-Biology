import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SkinProblemsChapter({ chapter }) {
  const [activeProblem, setActiveProblem] = useState(null);

  const problems = [
    {
      id: 1, name: 'Acne & Breakouts', icon: '🔴', color: '#ef4444',
      symptoms: 'Red bumps, painful cysts, excess oil, blocked pores',
      causes: 'Excess oil, dead skin, bacteria (C. acnes), hormones, dairy',
      ingredients: ['2% Salicylic Acid', '2.5–5% Benzoyl Peroxide', '10% Niacinamide'],
      avoid: 'Never pick pimples. No coconut oil on face.',
      special: { name: 'Fungal Acne', fix: '2% Ketoconazole mask or Sulfur wash. DO NOT use Benzoyl Peroxide — makes it WORSE.' },
    },
    {
      id: 2, name: 'Pigmentation & Dark Spots', icon: '🟤', color: '#92400e',
      symptoms: 'Brown patches, uneven tone, post-acne marks',
      causes: 'UV exposure, hormones, inflammation, picking skin',
      ingredients: ['15–20% Vitamin C', '2% Alpha Arbutin', '3–5% Tranexamic Acid'],
      avoid: 'Never skip sunscreen. No raw lemon on skin. No aggressive at-home peels.',
    },
    {
      id: 3, name: 'Dull & Tired-Looking Skin', icon: '😴', color: '#6366f1',
      symptoms: 'Flat complexion, no glow, rough texture',
      causes: 'Dead cell buildup, dehydration, lack of sleep',
      ingredients: ['5–10% Glycolic/Lactic Acid (AHAs)', 'Hyaluronic Acid', 'Vitamin C'],
      avoid: 'Do not exfoliate more than 2x per week. No hot water on face.',
    },
    {
      id: 4, name: 'Dryness & Dehydration', icon: '🏜️', color: '#d97706',
      symptoms: 'Tight/flaky (dry) or thirsty despite oily skin (dehydrated)',
      causes: 'Barrier damage, harsh cleansers, environment, dehydration',
      ingredients: ['Ceramides', 'Hyaluronic Acid', 'Petrolatum (occlusive)'],
      avoid: 'No foaming cleansers. Don\'t layer too many actives at once.',
    },
    {
      id: 5, name: 'Oily Skin & Large Pores', icon: '✨', color: '#0ea5e9',
      symptoms: 'High shine all day, visible large pores, blackheads',
      causes: 'Overactive sebaceous glands, humidity, genetics',
      ingredients: ['Niacinamide (reduces oil 20–30%)', 'Zinc PCA', 'Salicylic Acid'],
      avoid: 'NEVER skip moisturizer! Triggers rebound oil production.',
    },
    {
      id: 6, name: 'Anti-Aging', icon: '⏳', color: '#8b5cf6',
      symptoms: 'Visible lines, sagging skin, crow\'s feet, loss of firmness',
      causes: 'Sun damage (primary), collagen loss after age 25, oxidative stress',
      ingredients: ['Retinol', 'Peptides', '1% Bakuchiol (sensitive/pregnancy)'],
      avoid: 'No tanning. Consistent SPF 50 is non-negotiable.',
    },
    {
      id: 7, name: 'Dark Circles & Puffy Eyes', icon: '👁️', color: '#6366f1',
      symptoms: 'Dark shadows under eyes, puffiness/bags',
      causes: 'Genetics, allergies, thin skin, poor sleep, dehydration',
      ingredients: ['3–5% Caffeine (depuffs)', 'Gentle Retinol (thickens skin)'],
      avoid: 'Don\'t rub eyes. No high-strength face retinol near eye area.',
    },
    {
      id: 8, name: 'Sensitive & Rosacea', icon: '🌸', color: '#f43f5e',
      symptoms: 'Extreme redness, stinging, flushing from heat/spice/alcohol',
      causes: 'Compromised barrier, nerve hypersensitivity, genetics, triggers',
      ingredients: ['Centella Asiatica (instant calming)', 'Gentle Azelaic Acid'],
      avoid: 'No fragrance. No alcohol in products. Avoid saunas and spicy foods.',
    },
    {
      id: 9, name: 'Sun Damage & Tanning', icon: '🌞', color: '#f97316',
      symptoms: 'Dark tan, sun spots, leathery texture, premature aging',
      causes: 'Unprotected UV exposure, UVA (aging) + UVB (burning)',
      ingredients: ['Pigmentation serums', 'SPF 50 (mandatory)', 'Vitamin C + E'],
      avoid: 'Never tan on purpose (cancer risk). Reapply SPF every 3 hours.',
    },
    {
      id: 10, name: 'Blackheads & Texture', icon: '🔲', color: '#1e293b',
      symptoms: 'Clogged pores, bumpy uneven surface texture',
      causes: 'Dead skin + excess oil clogging pores (oxidized = black)',
      ingredients: ['Salicylic Acid (dissolves pore clogs)', 'Retinol', 'AHAs'],
      avoid: 'No rough metal extraction tools — they scar skin.',
    },
    {
      id: 11, name: 'Acne Scars & Marks', icon: '💥', color: '#dc2626',
      symptoms: 'Red/purple discoloration marks, physical pits in skin',
      causes: 'Severe inflammation, picking, not treating active acne quickly',
      ingredients: ['Tranexamic Acid (fades discoloration)', 'Tretinoin (pits)', 'Niacinamide'],
      avoid: 'NEVER self-microneedle at home.',
    },
    {
      id: 12, name: 'Pollution & Blue Light', icon: '🏙️', color: '#475569',
      symptoms: 'Extra dullness, premature aging from city pollution/screens',
      causes: 'PM2.5 particulates, exhaust, HEV blue light from screens',
      ingredients: ['Vitamin C + E + Ferulic Acid (antioxidant shield)', 'Double cleanse at night'],
      avoid: 'Single cleanse is not enough for city pollution.',
    },
  ];

  return (
    <div>
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🔍 Problem-Solving Guide</span>
            <h2 className="section-title">12 Skin Problems, Exact Fixes</h2>
            <p className="section-desc">Click on any problem to see exact ingredient solutions and what to avoid</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 40 }}>
            {problems.map((p, i) => (
              <motion.div key={i}
                onClick={() => setActiveProblem(activeProblem?.id === p.id ? null : p)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4, scale: 1.02 }}
                style={{
                  background: activeProblem?.id === p.id ? `${p.color}15` : 'var(--bg-card)',
                  border: `1.5px solid ${activeProblem?.id === p.id ? p.color : 'var(--border-color)'}`,
                  borderRadius: 'var(--radius-md)',
                  padding: '18px 16px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>{p.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: p.color, marginBottom: 4 }}>#{p.id}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>{p.name}</div>
              </motion.div>
            ))}
          </div>

          {/* Detail Panel */}
          {activeProblem && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: `linear-gradient(135deg, ${activeProblem.color}10, ${activeProblem.color}05)`,
                border: `1.5px solid ${activeProblem.color}40`,
                borderRadius: 'var(--radius-xl)',
                padding: 36,
                marginBottom: 32,
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 24 }}>
                {/* Problem info */}
                <div>
                  <div style={{ fontSize: 52, marginBottom: 12 }}>{activeProblem.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 20, fontWeight: 800, color: activeProblem.color, marginBottom: 12 }}>
                    {activeProblem.name}
                  </h3>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 6 }}>SYMPTOMS</div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{activeProblem.symptoms}</p>
                </div>

                {/* Causes */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>CAUSES</div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>{activeProblem.causes}</p>
                  {activeProblem.special && (
                    <div style={{ padding: '12px 14px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 'var(--radius-sm)', fontSize: 12, lineHeight: 1.6 }}>
                      <div style={{ fontWeight: 700, color: '#f59e0b', marginBottom: 4 }}>⚠️ {activeProblem.special.name}</div>
                      <div style={{ color: 'var(--text-secondary)' }}>{activeProblem.special.fix}</div>
                    </div>
                  )}
                </div>

                {/* Ingredients */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#2ea464', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>✅ WHAT TO USE</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {activeProblem.ingredients.map((ing, i) => (
                      <div key={i} style={{
                        padding: '10px 14px',
                        background: 'rgba(46,164,100,0.1)',
                        border: '1px solid rgba(46,164,100,0.25)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 12, fontWeight: 700, color: '#2ea464',
                      }}>
                        💊 {ing}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Avoid */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>🚫 WHAT TO AVOID</div>
                  <div style={{
                    padding: '16px', background: 'rgba(239,68,68,0.08)',
                    border: '1.5px solid rgba(239,68,68,0.2)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 13, color: '#ef4444', lineHeight: 1.7,
                  }}>
                    {activeProblem.avoid}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SPF importance highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
              marginTop: 40,
            }}
          >
            {[
              { icon: '☀️', value: '80%', label: 'of aging prevented by SPF', color: '#f59e0b', desc: 'Daily sunscreen alone prevents 80% of visible aging' },
              { icon: '⏱️', value: '6-8 Weeks', label: 'to see ingredient results', color: '#8b5cf6', desc: 'Skin takes 28 days to cycle, needs 2 cycles to show changes' },
              { icon: '🔬', value: '48 Hours', label: 'patch test wait time', color: '#0ea5e9', desc: 'Apply on inner arm or behind ear — check for redness' },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div style={{ fontSize: 40, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-primary)', fontSize: 36, fontWeight: 800, color: s.color, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
