import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/Layout';
import PdfPages from '../../components/PdfPages/PdfPages';
import { useLanguage } from '../../i18n/LanguageContext';
import { cv, aboutPortrait } from '../../data/content';
import styles from './About.module.css';

const CV_AS_PDF = false;

export default function About() {
  const { t } = useLanguage();
  const [tab, setTab] = useState('infos');
  const a = t.about;

  return (
    <Layout>
      <div className={styles.page}>
        <nav className={styles.tabs}>
          {['infos', 'portfolio', 'cv'].map((key) => (
            <button
              key={key}
              className={tab === key ? styles.tabActive : ''}
              onClick={() => setTab(key)}
            >
              {a.tabs[key]}
            </button>
          ))}
        </nav>

        <motion.div
          key={tab}
          className={styles.content}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {tab === 'infos' && (
            <div className={styles.infos}>
              <div className={styles.contact}>
                <a href={`mailto:${a.email}`}><MailIcon /> {a.email}</a>
                <a href="https://instagram.com/_cyrielle_p" target="_blank" rel="noreferrer"><InstaIcon /> {a.instagram}</a>
                <span><PinIcon /> {a.location}</span>
              </div>
              <div className={styles.bio}>
                {a.bio.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                {aboutPortrait && (
                  <img src={aboutPortrait} alt="Cyrielle Pigeau" className={styles.portrait} />
                )}
              </div>
            </div>
          )}

          {/* DÉMARCHE : Rendu textuel épuré */}
          {tab === 'portfolio' && (
            <div className={styles.demarcheText}>
              {a.demarche.split('\n\n').map((paragraph, i) => (
                <p key={i} className={i === 0 ? styles.demarcheTitle : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* CV : Grille stricte et fidèle au PDF */}
          {tab === 'cv' && (
            CV_AS_PDF ? (
              <PdfPages doc="cv" downloadLabel={a.cvDownload} />
            ) : (
              <div className={styles.cvContainer}>
                <CvBlock title={a.cvSections.bourses} items={cv.bourses} />
                <CvBlock title={a.cvSections.expos} items={cv.expos} />
                <CvBlock title={a.cvSections.freelance} items={cv.freelance} />
                <CvBlock title={a.cvSections.workshop} items={cv.workshop} />
                <CvBlock title={a.cvSections.formations} items={cv.formations} />
                <CvBlock title={a.cvSections.evenements} items={cv.evenements} />
              </div>
            )
          )}
        </motion.div>
      </div>
    </Layout>
  );
}

// ── Composant CV modifié pour l'alignement exact ──
function CvBlock({ title, items }) {
  if (!items || items.length === 0) return null;
  return (
    <section className={styles.cvSection}>
      <h3 className={styles.cvSectionTitle}>{title}</h3>
      <ul className={styles.cvList}>
        {items.map((it, i) => (
          <li key={i} className={styles.cvItem}>
            <span className={styles.cvYear}>{it.year}</span>
            <div className={styles.cvItemContent}>
              <span className={styles.cvLead}>{it.lead}</span>
              {it.detail && <span className={styles.cvDetail}> – {it.detail}</span>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ── Icônes ── */
function MailIcon() {
  return (
    <svg className="ico" width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7L22 6" />
    </svg>
  );
}
function InstaIcon() {
  return (
    <svg className="ico" width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg className="ico" width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}