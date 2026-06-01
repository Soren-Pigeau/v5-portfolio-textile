import { useLanguage } from '../../i18n/LanguageContext';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{f.eyebrow}</p>
        <h2 className={styles.title}>{f.title}</h2>
        <p className={styles.subtitle}>
          {f.subtitle.split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
        <a href="mailto:cyrielle.pigeau@gmail.com" className={styles.button}>{f.button}</a>
      </div>
      <p className={styles.copyright}>© {new Date().getFullYear()} Cyrielle Pigeau — {f.rights}</p>
    </footer>
  );
}
