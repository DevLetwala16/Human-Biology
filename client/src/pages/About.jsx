import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { humanBiologyChapters, skinBiologyChapters } from '../data/chapters';

const fadeInUp = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

export default function About() {
  const siteMap = [
    {
      section: '🏠 Home', path: '/', color: '#2ea464',
      desc: 'Landing page with interactive cell animation, chapter overview charts, biology facts, and quick navigation.',
      subsections: ['Hero with animated cell model', 'Biology overview charts (radar, pie, progress)', 'Chapter cards for both subjects', 'Mind-blowing biology stats'],
    },
    {
      section: '🫀 Human Biology', path: '/chapters/human-biology', color: '#f43f5e',
      desc: 'Five comprehensive chapters covering the entire human biology curriculum from cells to complex organ systems.',
      subsections: ['Ch.1: Cells & Tissues (interactive organelle diagram)', 'Ch.2: Body Systems (11 systems explorer)', 'Ch.3: Microbiology & Pathogens (Gram staining)', 'Ch.4: Infectious Diseases & Pharmacology', 'Ch.5: Respiratory & Digestive Systems'],
    },
    {
      section: '✨ Skin Biology', path: '/chapters/skin-biology', color: '#f97316',
      desc: 'Five chapters on skin science, from basic structure and skin types to fixing every common problem.',
      subsections: ['Ch.1: Skin Basics (3-layer SVG, skin types)', 'Ch.2: 12 Problems & Exact Fixes (interactive)', 'Ch.3: Perfect Routine Builder (AM/PM layering)', 'Ch.4: Lifestyle (diet, sleep, seasonal, myths)', 'Ch.5: Final Glow-Up Guide'],
    },
    {
      section: '👤 About', path: '/about', color: '#8b5cf6',
      desc: 'Site map, presenter information, contact details, and the DERMASIS Remedies connection.',
      subsections: ['Website map with all sections', 'Presenter contact details', 'DERMASIS Remedies Pvt. Ltd.', 'Educational resource credits'],
    },
  ];

  const contactDetails = [
    { label: 'Name', value: 'Anilkumar Letwala', icon: '👤', color: '#2ea464' },
    { label: 'Phone', value: '9974907955', icon: '📞', color: '#0ea5e9', link: 'tel:9974907955' },
    { label: 'Email', value: 'lethwala.anil@gmail.com', icon: '📧', color: '#8b5cf6', link: 'mailto:lethwala.anil@gmail.com' },
    { label: 'Organization', value: 'DERMASIS Remedies Pvt. Ltd.', icon: '🏢', color: '#f59e0b' },
    { label: 'Subject', value: 'Human Biology & Microbiology', icon: '🧬', color: '#f43f5e' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      {/* Hero */}
      <section style={{
        padding: '140px 0 80px',
        background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, transparent 60%)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: '#8b5cf6', opacity: 0.06, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeInUp}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Link to="/" style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'var(--text-muted)' }}>›</span>
              <span style={{ fontSize: 13, color: '#8b5cf6', fontWeight: 600 }}>About</span>
            </div>
            <div className="badge badge-purple" style={{ marginBottom: 20 }}>👤 About This Resource</div>
            <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 20 }}>
              About <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>BioLearn</span>
            </h1>
            <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 600 }}>
              A comprehensive interactive educational guide on Human Biology & Skin Science — designed for clear understanding through visualization, animation, and minimal text.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Presenter Card */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
              }}>
                {/* Card header */}
                <div style={{
                  padding: '32px 36px',
                  background: 'var(--grad-primary)',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', top: -30, right: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
                  <div style={{ position: 'absolute', bottom: -40, left: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{
                      width: 80, height: 80,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      border: '3px solid rgba(255,255,255,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 40,
                      flexShrink: 0,
                    }}>
                      🧬
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>
                        Presenter
                      </div>
                      <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 24, fontWeight: 800, color: 'white', marginBottom: 4 }}>
                        Anilkumar Letwala
                      </h2>
                      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                        DERMASIS Remedies Pvt. Ltd.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact details */}
                <div style={{ padding: '28px 36px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {contactDetails.map((c, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 14,
                        padding: '14px 16px',
                        background: `${c.color}08`,
                        border: `1px solid ${c.color}20`,
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icon}</span>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 3 }}>{c.label}</div>
                        {c.link ? (
                          <a href={c.link} style={{ fontSize: 14, fontWeight: 600, color: c.color, textDecoration: 'none' }}
                            onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                            onMouseLeave={e => e.target.style.textDecoration = 'none'}
                          >
                            {c.value}
                          </a>
                        ) : (
                          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{c.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div style={{ padding: '0 36px 28px', display: 'flex', gap: 12 }}>
                  <a href="tel:9974907955" className="btn-primary" style={{ flex: 1, justifyContent: 'center', textDecoration: 'none' }}>
                    📞 Call Now
                  </a>
                  <a href="mailto:lethwala.anil@gmail.com" className="btn-secondary" style={{ flex: 1, justifyContent: 'center', textDecoration: 'none' }}>
                    📧 Email
                  </a>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
            >
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: 28 }}>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>
                  🎯 About This Resource
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 16 }}>
                  BioLearn is a comprehensive, interactive educational guide covering the full curriculum of <strong style={{ color: 'var(--green-primary)' }}>Human Biology & Microbiology</strong> and <strong style={{ color: '#f97316' }}>Skin Science</strong>.
                </p>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8 }}>
                  Rather than heavy theory, this guide prioritizes <strong>visual learning</strong> — interactive diagrams, animated charts, and graphical representations that make complex biology concepts instantly clear and memorable.
                </p>
              </div>

              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: 28 }}>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>
                  📊 Content Coverage
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { label: 'Total Chapters', value: '10', color: '#2ea464' },
                    { label: 'Human Bio Topics', value: '25+', color: '#f43f5e' },
                    { label: 'Skin Problems Fixed', value: '12', color: '#f97316' },
                    { label: 'Drug Mechanisms', value: '8+', color: '#8b5cf6' },
                    { label: 'Interactive Diagrams', value: '15+', color: '#0ea5e9' },
                    { label: 'Visual Charts', value: '30+', color: '#f59e0b' },
                  ].map((s, i) => (
                    <div key={i} style={{ padding: '12px 16px', background: `${s.color}08`, border: `1px solid ${s.color}20`, borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ fontFamily: 'var(--font-primary)', fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, rgba(46,164,100,0.1), rgba(13,148,136,0.06))', border: '1.5px solid rgba(46,164,100,0.25)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: 16, fontWeight: 700, color: '#2ea464', marginBottom: 12 }}>
                  🏢 DERMASIS Remedies Pvt. Ltd.
                </h4>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  This educational resource is presented by Anilkumar Letwala from DERMASIS Remedies Pvt. Ltd. — a pharmaceutical and remedies company dedicated to evidence-based health education and skin science.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Site Map */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">🗺️ Navigation</span>
            <h2 className="section-title">Website Map</h2>
            <p className="section-desc">A complete overview of all sections and what you'll find in each</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {siteMap.map((section, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bio-card"
                style={{ padding: 28 }}
                whileHover={{ y: -4, boxShadow: `0 16px 40px ${section.color}15` }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 800, color: section.color, marginBottom: 8 }}>
                      {section.section}
                    </h3>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{section.desc}</p>
                  </div>
                  <Link to={section.path} style={{
                    padding: '6px 14px', borderRadius: 'var(--radius-full)',
                    background: `${section.color}15`, border: `1px solid ${section.color}30`,
                    color: section.color, textDecoration: 'none',
                    fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 16,
                    transition: 'all 0.2s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = section.color; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${section.color}15`; e.currentTarget.style.color = section.color; }}
                  >
                    Visit →
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 16, borderTop: '1px solid var(--border-color)' }}>
                  {section.subsections.map((sub, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: section.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{sub}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Biology chapters map */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">📚 Chapter Index</span>
            <h2 className="section-title">All 10 Chapters at a Glance</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {[
              { title: '🫀 Human Biology', chapters: humanBiologyChapters, subject: 'human-biology', accent: '#2ea464' },
              { title: '✨ Skin Biology', chapters: skinBiologyChapters, subject: 'skin-biology', accent: '#f97316' },
            ].map((group, gi) => (
              <motion.div key={gi}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.15 }}
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}
              >
                <div style={{ padding: '20px 28px', background: `${group.accent}12`, borderBottom: `1px solid ${group.accent}25` }}>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 800, color: group.accent }}>{group.title}</h3>
                </div>
                <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {group.chapters.map((ch, i) => (
                    <Link key={i} to={`/chapter/${group.subject}/${ch.id}`} style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '12px 16px', borderRadius: 'var(--radius-sm)',
                      textDecoration: 'none',
                      background: 'transparent',
                      border: '1px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${ch.color}10`; e.currentTarget.style.borderColor = `${ch.color}25`; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
                    >
                      <div style={{
                        width: 36, height: 36, borderRadius: 10,
                        background: ch.gradient,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 18, flexShrink: 0,
                      }}>
                        {ch.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{ch.title}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{ch.subtitle}</div>
                      </div>
                      <span style={{ fontSize: 12, color: ch.color, fontWeight: 600 }}>→</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
