import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { skinBiologyChapters } from '../data/chapters';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function SkinBiologyChapters() {
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
        background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, transparent 60%)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Skin layer visual background */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              right: -100,
              top: `${15 + i * 12}%`,
              height: 2,
              width: `${30 + i * 10}%`,
              background: `linear-gradient(90deg, transparent, ${ ['#f97316','#fb923c','#fbbf24','#f59e0b','#ef4444','#f43f5e'][i]}20)`,
              borderRadius: 1,
            }} />
          ))}
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeInUp}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Link to="/" style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'var(--text-muted)' }}>›</span>
              <span style={{ fontSize: 13, color: '#f97316', fontWeight: 600 }}>Skin Biology</span>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '6px 16px', borderRadius: 'var(--radius-full)',
              background: 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(249,115,22,0.3)',
              marginBottom: 20,
              fontSize: 12, fontWeight: 700, color: '#f97316', letterSpacing: '0.5px',
            }}>
              ✨ Skin Biology
            </div>
            <h1 style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 900,
              letterSpacing: '-1px',
              marginBottom: 20,
            }}>
              Skin Science{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Chapters</span>
            </h1>
            <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 560 }}>
              The most comprehensive no-nonsense guide to skin biology — from structure and types to fixes, routines, and the science behind glowing skin.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: 24, marginTop: 48, flexWrap: 'wrap' }}
          >
            {[
              { label: 'Chapters', value: 5 },
              { label: 'Problems Fixed', value: 12 },
              { label: 'Ingredients Covered', value: '20+' },
              { label: 'Skin Types', value: 5 },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 24px',
              }}>
                <div style={{ fontFamily: 'var(--font-primary)', fontSize: 28, fontWeight: 800, color: '#f97316' }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {skinBiologyChapters.map((chapter, index) => (
              <SkinChapterRow key={chapter.id} chapter={chapter} index={index} reversed={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function SkinChapterRow({ chapter, index, reversed }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reversed ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: reversed ? '1fr 1.2fr' : '1.2fr 1fr',
        transition: 'all 0.3s ease',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = chapter.color + '40'; e.currentTarget.style.boxShadow = `0 20px 60px ${chapter.color}15`; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        {!reversed && <SkinContentPanel chapter={chapter} />}
        <SkinVisualPanel chapter={chapter} />
        {reversed && <SkinContentPanel chapter={chapter} />}
      </div>
    </motion.div>
  );
}

function SkinContentPanel({ chapter }) {
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{
            width: 60, height: 60, borderRadius: 'var(--radius-md)',
            background: chapter.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, boxShadow: `0 8px 24px ${chapter.color}40`, flexShrink: 0,
          }}>
            {chapter.icon}
          </div>
          <div>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: chapter.color }}>
              {chapter.badge}
            </span>
            <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', marginTop: 4 }}>
              {chapter.title}
            </h2>
          </div>
        </div>

        <p style={{ fontSize: 14, color: chapter.color, fontWeight: 600, marginBottom: 12 }}>{chapter.subtitle}</p>
        <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24 }}>{chapter.description}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {chapter.topics.map((topic, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: chapter.color, marginTop: 6, flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{topic.name}</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 8 }}>{topic.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
          {chapter.keyFacts.map((fact, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 14px',
              background: chapter.colorLight,
              border: `1px solid ${chapter.color}25`,
              borderRadius: 'var(--radius-full)',
            }}>
              <span style={{ fontSize: 16 }}>{fact.icon}</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: chapter.color, lineHeight: 1 }}>{fact.value}</div>
                <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 1 }}>{fact.label}</div>
              </div>
            </div>
          ))}
        </div>

        <Link to={`/chapter/skin-biology/${chapter.id}`} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '12px 28px',
          background: chapter.gradient,
          color: 'white',
          borderRadius: 'var(--radius-full)',
          textDecoration: 'none',
          fontFamily: 'var(--font-secondary)',
          fontWeight: 600,
          fontSize: 14,
          boxShadow: `0 4px 20px ${chapter.color}40`,
          transition: 'all 0.3s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
          Open Chapter →
        </Link>
      </div>
    </div>
  );
}

function SkinVisualPanel({ chapter }) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${chapter.color}08 0%, ${chapter.color}03 100%)`,
      borderLeft: `1px solid ${chapter.color}20`,
      padding: '40px 32px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20,
    }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>
        Topic Breakdown
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie data={chapter.chartData} cx="50%" cy="50%" outerRadius={75} dataKey="value" paddingAngle={3}>
            {chapter.chartData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ background: 'var(--bg-card)', border: `1px solid ${chapter.color}40`, borderRadius: 8, fontSize: 12 }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
        {chapter.chartData.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
            <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
