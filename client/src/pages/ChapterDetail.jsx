import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getChapter } from '../data/chapters';
import CellChapter from './chapters/CellChapter';
import BodySystemsChapter from './chapters/BodySystemsChapter';
import MicrobiologyChapter from './chapters/MicrobiologyChapter';
import InfectiousChapter from './chapters/InfectiousChapter';
import OrganSystemsChapter from './chapters/OrganSystemsChapter';
import SkinBasicsChapter from './chapters/SkinBasicsChapter';
import SkinProblemsChapter from './chapters/SkinProblemsChapter';
import SkinRoutineChapter from './chapters/SkinRoutineChapter';
import LifestyleChapter from './chapters/LifestyleChapter';
import GlowUpChapter from './chapters/GlowUpChapter';

const chapterComponents = {
  'ch1-cells-tissues': CellChapter,
  'ch2-body-systems': BodySystemsChapter,
  'ch3-microbiology': MicrobiologyChapter,
  'ch4-infectious-diseases': InfectiousChapter,
  'ch5-organ-systems': OrganSystemsChapter,
  'sk1-skin-basics': SkinBasicsChapter,
  'sk2-skin-problems': SkinProblemsChapter,
  'sk3-skin-routine': SkinRoutineChapter,
  'sk4-lifestyle': LifestyleChapter,
  'sk5-glow-up': GlowUpChapter,
};

export default function ChapterDetail() {
  const { subject, id } = useParams();
  const chapter = getChapter(subject, id);

  if (!chapter) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 64 }}>🔬</div>
        <h2 style={{ fontFamily: 'var(--font-primary)', color: 'var(--text-primary)' }}>Chapter Not Found</h2>
        <Link to="/" className="btn-primary">← Back to Home</Link>
      </div>
    );
  }

  const ChapterContent = chapterComponents[id];
  const subjectPath = subject === 'human-biology' ? '/chapters/human-biology' : '/chapters/skin-biology';
  const subjectLabel = subject === 'human-biology' ? 'Human Biology' : 'Skin Biology';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      {/* Chapter Hero */}
      <section style={{
        padding: '130px 0 64px',
        background: `linear-gradient(135deg, ${chapter.color}12 0%, transparent 60%)`,
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: -100, right: -100,
          width: 400, height: 400, borderRadius: '50%',
          background: chapter.color, opacity: 0.08, filter: 'blur(100px)',
          pointerEvents: 'none',
        }} />

        <div className="container">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}
          >
            <Link to="/" style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
            <Link to={subjectPath} style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none' }}>{subjectLabel}</Link>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
            <span style={{ fontSize: 13, color: chapter.color, fontWeight: 600 }}>{chapter.title}</span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'flex-start' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{
                display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '1.5px',
                textTransform: 'uppercase', color: chapter.color, marginBottom: 16,
              }}>
                {chapter.badge}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 20,
                  background: chapter.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 36,
                  boxShadow: `0 12px 36px ${chapter.color}50`,
                  animation: 'float 4s ease-in-out infinite',
                  flexShrink: 0,
                }}>
                  {chapter.icon}
                </div>
                <div>
                  <h1 style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'clamp(28px, 4vw, 52px)',
                    fontWeight: 900,
                    letterSpacing: '-0.5px',
                    color: 'var(--text-primary)',
                    lineHeight: 1.1,
                  }}>
                    {chapter.title}
                  </h1>
                  <p style={{ fontSize: 16, color: chapter.color, fontWeight: 600, marginTop: 8 }}>{chapter.subtitle}</p>
                </div>
              </div>

              <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 640 }}>
                {chapter.description}
              </p>
            </motion.div>

            {/* Key Facts Summary Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: 'var(--bg-card)',
                border: `1px solid ${chapter.color}30`,
                borderRadius: 'var(--radius-lg)',
                padding: 24,
                minWidth: 280,
                boxShadow: `0 8px 32px ${chapter.color}15`,
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, color: chapter.color, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 16 }}>
                📊 Quick Facts
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {chapter.keyFacts.map((fact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '10px 14px',
                      background: chapter.colorLight,
                      borderRadius: 'var(--radius-sm)',
                      border: `1px solid ${chapter.color}20`,
                    }}
                  >
                    <span style={{ fontSize: 20 }}>{fact.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: chapter.color }}>{fact.value}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 1 }}>{fact.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter Content */}
      <div>
        {ChapterContent ? (
          <ChapterContent chapter={chapter} />
        ) : (
          <DefaultChapterContent chapter={chapter} />
        )}
      </div>

      {/* Navigation footer */}
      <section style={{ padding: '48px 0', borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 24 }}>Explore more chapters</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link to={subjectPath} className="btn-secondary" style={{ textDecoration: 'none' }}>
              ← All {subjectLabel} Chapters
            </Link>
            <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>
              🏠 Back to Home
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function DefaultChapterContent({ chapter }) {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {chapter.topics.map((topic, i) => (
            <motion.div
              key={i}
              className="bio-card"
              style={{ padding: 24 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: chapter.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginBottom: 16 }}>
                {chapter.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{topic.name}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{topic.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
