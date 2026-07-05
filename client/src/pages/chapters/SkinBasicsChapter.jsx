import { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';

export default function SkinBasicsChapter({ chapter }) {
  const [activeSkinType, setActiveSkinType] = useState(null);

  const skinLayers = [
    { name: 'Epidermis', sub: 'Top Layer', color: '#f97316', thickness: '0.05–1.5mm', icon: '🌟', desc: 'Outermost layer. Protects against dirt, germs, and pollution. Constantly shedding old cells for new ones. Contains keratinocytes, melanocytes, and Langerhans cells. Takes ~28 days to fully renew.' },
    { name: 'Dermis', sub: 'Middle Layer', color: '#fb923c', thickness: '1–4mm', icon: '💪', desc: 'Support layer containing collagen (firmness), elastin (stretch), and blood vessels (nourishment). Houses hair follicles, sweat glands, and nerve endings. Keeps skin firm, stretchy, and glowing.' },
    { name: 'Hypodermis', sub: 'Bottom Layer', color: '#fbbf24', thickness: '1–3cm', icon: '🛡️', desc: 'Innermost fat layer (subcutaneous fat). Keeps skin warm, protects organs from trauma, adds physical softness, and stores energy. Acts as shock absorber.' },
  ];

  const skinTypes = [
    { type: 'Dry', icon: '🏜️', color: '#f59e0b', cause: 'Lack of natural oil production weakens skin barrier', identify: 'Tight, rough, flaky, patchy makeup, visible fine lines', needs: 'Deep hydration using ceramides and hyaluronic acid', ingredients: ['Ceramides', 'Hyaluronic Acid', 'Shea Butter', 'Glycerin'], avoid: 'Foaming cleansers, alcohol-based products' },
    { type: 'Oily', icon: '✨', color: '#0ea5e9', cause: 'Overactive sebaceous glands produce excess sebum', identify: 'Shine hours after washing, large pores, frequent blackheads', needs: 'Oil control without stripping — light hydration', ingredients: ['Niacinamide', 'Clay', 'Salicylic Acid', 'Zinc PCA'], avoid: 'Heavy creams, skipping moisturizer' },
    { type: 'Combination', icon: '⚖️', color: '#2ea464', cause: 'Differing levels of oil gland activity across face', identify: 'Dry cheeks + shiny oily T-zone (forehead, nose, chin)', needs: 'Balanced approach, mild cleansers, zone-treat', ingredients: ['Lightweight Moisturizer', 'Spot treatments', 'Gel SPF'], avoid: 'Heavy all-over creams, harsh toners' },
    { type: 'Normal', icon: '😊', color: '#10b981', cause: 'Stable oil production, highly resilient barrier', identify: 'Smooth texture, small pores, minimal breakouts or redness', needs: 'Gentle maintenance — don\'t overload', ingredients: ['Basic SPF', 'Light Moisturizer', 'Vitamin C'], avoid: 'Over-treating, aggressive actives' },
    { type: 'Sensitive', icon: '🌸', color: '#f43f5e', cause: 'Compromised barrier + high nerve sensitivity', identify: 'Tingles, burns red, stings with active ingredients', needs: 'Barrier repair, fragrance-free, soothing ingredients', ingredients: ['Centella Asiatica', 'Ceramides', 'Azelaic Acid', 'Aloe Vera'], avoid: 'Fragrance, alcohol, aggressive actives, exfoliants' },
  ];

  const goldenRules = [
    { rule: 'Cleanse Gently Twice Daily', icon: '🧴', color: '#2ea464', why: 'Removes dirt, pollution, and excess oil without stripping the natural acid mantle. Morning + night.' },
    { rule: 'Moisturize After Every Wash', icon: '💧', color: '#0ea5e9', why: 'Seals water into the skin, even for oily types. Prevents rebound oil production and maintains barrier.' },
    { rule: 'Sunscreen Every Single Day', icon: '☀️', color: '#f59e0b', why: 'Prevents 80% of visible aging, wrinkles, and pigmentation. Apply 365 days a year, reapply every 3 hours.' },
    { rule: 'Give Actives 6–8 Weeks', icon: '⏱️', color: '#8b5cf6', why: 'The natural skin cycle takes ~28 days. You need 2 full cycles to judge if a product is working. Patience!' },
  ];

  const acidMantleData = [
    { name: 'Optimal pH 4.5-5.5', value: 60, color: '#2ea464' },
    { name: 'Too Alkaline (>7)', value: 20, color: '#ef4444' },
    { name: 'Too Acidic (<4)', value: 20, color: '#f59e0b' },
  ];

  return (
    <div>
      {/* Skin Layers */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🔬 Anatomy</span>
            <h2 className="section-title">The 3 Layers of Skin</h2>
            <p className="section-desc">Your skin is the largest organ — three distinct layers with unique functions</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
            {/* Skin layer visual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ width: 300, position: 'relative' }}>
                <svg width="300" height="300" viewBox="0 0 300 300">
                  {/* Hypodermis */}
                  <rect x="10" y="200" width="280" height="90" rx="0" fill="#fbbf2415" stroke="#fbbf24" strokeWidth="2" />
                  <text x="150" y="240" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="700">Hypodermis</text>
                  <text x="150" y="258" textAnchor="middle" fill="#fbbf2480" fontSize="10">Fat layer · Insulation</text>
                  {/* Fat cells representation */}
                  {[[50,225],[100,225],[150,225],[200,225],[250,225],[75,248],[125,248],[175,248],[225,248]].map(([cx,cy],i) => (
                    <circle key={i} cx={cx} cy={cy} r="12" fill="#fbbf2415" stroke="#fbbf2440" strokeWidth="1" />
                  ))}

                  {/* Dermis */}
                  <rect x="10" y="100" width="280" height="100" fill="#fb923c15" stroke="#fb923c" strokeWidth="2" />
                  <text x="150" y="135" textAnchor="middle" fill="#fb923c" fontSize="13" fontWeight="700">Dermis</text>
                  <text x="150" y="152" textAnchor="middle" fill="#fb923c80" fontSize="10">Collagen · Elastin · Blood vessels</text>
                  {/* Wavy collagen fibers */}
                  {[130,155,170,190].map((y, i) => (
                    <path key={i} d={`M 10 ${y} Q 75 ${y-12} 150 ${y} Q 225 ${y+12} 290 ${y}`} fill="none" stroke="#fb923c20" strokeWidth="1.5" />
                  ))}

                  {/* Epidermis */}
                  <rect x="10" y="10" width="280" height="90" rx="4" fill="#f9731615" stroke="#f97316" strokeWidth="2" />
                  <text x="150" y="45" textAnchor="middle" fill="#f97316" fontSize="13" fontWeight="700">Epidermis</text>
                  <text x="150" y="62" textAnchor="middle" fill="#f9731680" fontSize="10">Outer barrier · Renews every 28 days</text>
                  {/* Cell dots */}
                  {[...Array(14)].map((_, i) => (
                    <rect key={i} x={22 + (i % 7) * 40} y={i < 7 ? 20 : 68} width="32" height="16" rx="8" fill="#f9731610" stroke="#f9731640" strokeWidth="1" />
                  ))}

                  {/* Labels */}
                  <text x="8" y="60" textAnchor="end" fill="#f97316" fontSize="9" fontWeight="700" transform="rotate(-90, 8, 60)">EPIDERMIS</text>
                </svg>
              </div>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {skinLayers.map((layer, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  style={{
                    padding: '20px 24px',
                    background: `${layer.color}08`,
                    border: `1.5px solid ${layer.color}30`,
                    borderRadius: 'var(--radius-md)',
                    borderLeft: `4px solid ${layer.color}`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 28 }}>{layer.icon}</span>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 800, color: layer.color }}>{layer.name}</h4>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{layer.sub} · {layer.thickness} thick</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{layer.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 Skin Types */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🧬 Know Your Skin</span>
            <h2 className="section-title">The 5 Skin Types</h2>
            <p className="section-desc">Click on your skin type to see the exact ingredients and routine you need</p>
          </motion.div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 32 }}>
            {skinTypes.map((st, i) => (
              <motion.button key={i}
                onClick={() => setActiveSkinType(activeSkinType?.type === st.type ? null : st)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.05, y: -3 }}
                style={{
                  padding: '16px 28px',
                  background: activeSkinType?.type === st.type ? st.color : 'var(--bg-card)',
                  border: `2px solid ${activeSkinType?.type === st.type ? st.color : 'var(--border-color)'}`,
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}
              >
                <span style={{ fontSize: 22 }}>{st.icon}</span>
                <span style={{ fontFamily: 'var(--font-secondary)', fontWeight: 700, fontSize: 14, color: activeSkinType?.type === st.type ? 'white' : 'var(--text-primary)' }}>
                  {st.type}
                </span>
              </motion.button>
            ))}
          </div>

          {activeSkinType && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: `linear-gradient(135deg, ${activeSkinType.color}10, ${activeSkinType.color}05)`,
                border: `1.5px solid ${activeSkinType.color}40`,
                borderRadius: 'var(--radius-xl)',
                padding: 36,
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                <div>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>{activeSkinType.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 24, fontWeight: 800, color: activeSkinType.color, marginBottom: 12 }}>{activeSkinType.type} Skin</h3>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>CAUSE</div>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{activeSkinType.cause}</p>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8, marginTop: 16 }}>IDENTIFY</div>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{activeSkinType.identify}</p>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12 }}>NEEDS</div>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>{activeSkinType.needs}</p>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12 }}>KEY INGREDIENTS</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {activeSkinType.ingredients.map((ing, i) => (
                      <span key={i} style={{ padding: '6px 14px', background: `${activeSkinType.color}20`, border: `1px solid ${activeSkinType.color}40`, borderRadius: 'var(--radius-full)', fontSize: 12, fontWeight: 700, color: activeSkinType.color }}>
                        ✅ {ing}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12 }}>WHAT TO AVOID</div>
                  <div style={{ padding: '16px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--radius-md)', fontSize: 14, color: '#ef4444', lineHeight: 1.6 }}>
                    🚫 {activeSkinType.avoid}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* 4 Golden Rules */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🏆 Rules of Skincare</span>
            <h2 className="section-title">The 4 Golden Rules</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {goldenRules.map((rule, i) => (
              <motion.div key={i} className="bio-card" style={{ padding: 28 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: `0 24px 48px ${rule.color}20` }}
              >
                <div style={{
                  width: 64, height: 64, borderRadius: 16,
                  background: `linear-gradient(135deg, ${rule.color}30, ${rule.color}15)`,
                  border: `2px solid ${rule.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 30, marginBottom: 20,
                  boxShadow: `0 4px 16px ${rule.color}25`,
                }}>
                  {rule.icon}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: rule.color, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 8 }}>
                  Rule #{i + 1}
                </div>
                <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 16, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 12 }}>
                  {rule.rule}
                </h4>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{rule.why}</p>
              </motion.div>
            ))}
          </div>

          {/* Acid Mantle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginTop: 40, background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', padding: 36 }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}>
              <div>
                <div className="badge badge-green" style={{ marginBottom: 16 }}>🛡️ Skin Protection</div>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>
                  The Skin's Acid Mantle
                </h3>
                <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 16 }}>
                  The skin's protective shield — a thin film of natural oils, good bacteria, and slightly acidic pH of <strong style={{ color: '#2ea464' }}>4.5 to 5.5</strong>. 
                  When this barrier is damaged, it leads directly to irritation, acne, dryness, and early aging.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { label: 'Optimal skin pH', value: '4.5–5.5', color: '#2ea464' },
                    { label: 'Harsh soap pH', value: '8–10 (damage!)', color: '#ef4444' },
                    { label: 'Apple cider vinegar', value: '3 (too acidic)', color: '#f59e0b' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: 12, color: 'var(--text-muted)', minWidth: 150 }}>{item.label}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: item.color }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={acidMantleData} cx="50%" cy="50%" outerRadius={80} dataKey="value" paddingAngle={3}>
                    {acidMantleData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
