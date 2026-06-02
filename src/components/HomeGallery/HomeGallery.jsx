import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { recentWorks } from '../../data/content';
import styles from './HomeGallery.module.css';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } };

export default function HomeGallery() {
  const { t } = useLanguage();

  return (
    <section className={styles.gallery}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{t.home.recentEyebrow}</p>
        <h2 className={styles.title}>{t.home.recentTitle}</h2>
      </div>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {recentWorks.map((w, i) => (
          <motion.figure key={i} className={styles.item} variants={item} whileHover={{ y: -8 }}>
            <Link to={`/projects/${w.slug}`} className={styles.imageWrapper}>
              <motion.img
                src={w.img}
                alt={w.title}
                className={styles.image}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                loading="lazy"
              />
            </Link>
            <figcaption className={styles.caption}>
              <span>{w.title}</span>
              <span>{w.year}</span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>

      <Link to="/projects" className={styles.allLink}>{t.home.recentLink}</Link>
    </section>
  );
}
