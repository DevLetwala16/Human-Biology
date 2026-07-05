import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { humanBiologyChapters } from '../data/chapters';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function HumanBiologyChapters() {
  const [hoveredChapter, setHoveredChapter] = useState(null);

  const statsData = [
    { name: 'Units', value: humanBiologyChapters.reduce((acc, c) => acc + c.units, 0) },
    { name: 'Topics', value: humanBiologyChapters.reduce((acc, c) => acc + c.topics.length, 0) },
    { name: 'Key Facts', value: humanBiologyChapters.reduce((acc, c) => acc + c.keyFacts.length, 0) },
    { name: 'Chapters', value: 5 },
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
        background: 'linear-gradient(135deg, rgba(46,164,100,0.08) 0%, transparent 60%)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background DNA pattern */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.04 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
            {[...Array(8)].map((_, col) =>
              [...Array(10)].map((_, row) => {
                const y = row * 40 + 20;
                const wave = Math.sin((row + col * 2) * 0.5) * 60;
                const x = col * 150 + 75;
                return (
                  <g key={`${col}-${row}`}>
                    <circle cx={x + wave} cy={y} r="6" fill="#2ea464" />
                    <circle cx={x - wave} cy={y} r="6" fill="#0d9488" />
                    {row < 9 && (
                      <line x1={x + wave} y1={y} x2={x + Math.sin((row + 1 + col * 2) * 0.5) * 60} y2={y + 40} stroke="#2ea464" strokeWidth="1" strokeDasharray="3 3" />
                    )}
                  </g>
                );
              })
            )}
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeInUp}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Link to="/" style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'var(--text-muted)' }}>›</span>
              <span style={{ fontSize: 13, color: 'var(--green-primary)', fontWeight: 600 }}>Human Biology</span>
            </div>
            <div className="badge badge-green" style={{ marginBottom: 20 }}>🫀 Human Biology</div>
            <h1 style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 900,
              letterSpacing: '-1px',
              marginBottom: 20,
            }}>
              Human Biology <span className="gradient-text">Chapters</span>
            </h1>
            <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 560 }}>
              From the microscopic cell to complex organ systems — an interactive journey through the science of being human.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: 24, marginTop: 48, flexWrap: 'wrap' }}
          >
            {statsData.map((s, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 24px',
                minWidth: 100,
              }}>
                <div style={{ fontFamily: 'var(--font-primary)', fontSize: 28, fontWeight: 800, color: 'var(--green-primary)' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, marginTop: 2 }}>{s.name}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {humanBiologyChapters.map((chapter, index) => (
              <ChapterRow
                key={chapter.id}
                chapter={chapter}
                index={index}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ChapterRow({ chapter, index, reversed }) {
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
        {/* Content panel (order depends on reversed) */}
        {!reversed && <ContentPanel chapter={chapter} />}

        {/* Visual panel */}
        <ChapterVisualPanel chapter={chapter} />

        {/* Content panel for reversed */}
        {reversed && <ContentPanel chapter={chapter} />}
      </div>
    </motion.div>
  );
}

function ContentPanel({ chapter }) {
  return (
    <div style={{ padding: '40px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{
            width: 60, height: 60,
            borderRadius: 'var(--radius-md)',
            background: chapter.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28,
            boxShadow: `0 8px 24px ${chapter.color}40`,
            flexShrink: 0,
          }}>
            {chapter.icon}
          </div>
          <div>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
              color: chapter.color,
            }}>{chapter.badge}</span>
            <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', marginTop: 4 }}>
              {chapter.title}
            </h2>
          </div>
        </div>

        <p style={{ fontSize: 14, color: chapter.color, fontWeight: 600, marginBottom: 12 }}>{chapter.subtitle}</p>
        <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24 }}>{chapter.description}</p>

        {/* Topics list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {chapter.topics.map((topic, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: chapter.color,
                marginTop: 6, flexShrink: 0,
              }} />
              <div>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{topic.name}</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 8 }}>{topic.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key facts */}
      <div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
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
                <div style={{ fontSize: 13, fontWeight: 700, color: chapter.color, lineHeight: 1 }}>{fact.value}</div>
                <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 1 }}>{fact.label}</div>
              </div>
            </div>
          ))}
        </div>

        <Link to={`/chapter/human-biology/${chapter.id}`} style={{
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
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 28px ${chapter.color}50`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `0 4px 20px ${chapter.color}40`; }}>
          Open Chapter →
        </Link>
      </div>
    </div>
  );
}

function ChapterVisualPanel({ chapter }) {
  const COLORS = chapter.chartData.map(d => d.color);

  return (
    <div style={{
      background: `linear-gradient(135deg, ${chapter.color}08 0%, ${chapter.color}04 100%)`,
      borderLeft: `1px solid ${chapter.color}20`,
      padding: '40px 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 8 }}>
          Content Distribution
        </div>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={chapter.chartData} layout="vertical" margin={{ left: 8, right: 8 }}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: 'var(--text-muted)', fontFamily: 'var(--font-body)' }} width={80} />
          <Tooltip
            contentStyle={{ background: 'var(--bg-card)', border: `1px solid ${chapter.color}40`, borderRadius: 8, fontSize: 12 }}
            labelStyle={{ color: 'var(--text-primary)', fontWeight: 600 }}
          />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} maxBarSize={20}>
            {chapter.chartData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
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
