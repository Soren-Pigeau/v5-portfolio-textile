import { pdfPages } from '../../data/content';
import styles from './PdfPages.module.css';

// doc = 'portfolio' | 'cv'
// Affiche les pages du PDF comme des images, sur le fond du site :
// pas de lecteur navigateur, donc pas de barre, pas de scrollbar, pas de cadre noir.
export default function PdfPages({ doc, downloadLabel }) {
  const pages = pdfPages[doc] || [];
  const pdfUrl = `${import.meta.env.BASE_URL}${doc}.pdf`; // PDF d'origine (téléchargement)

  return (
    <div className={styles.wrap}>
      <div className={styles.pages}>
        {pages.map((src, i) => (
          <img key={i} src={src} alt={`${doc} page ${i + 1}`} className={styles.page} />
        ))}
      </div>
      <a className={styles.download} href={pdfUrl} download>
        {downloadLabel} ↓
      </a>
    </div>
  );
}
