import styles from './PdfViewer.module.css';

// file = nom du fichier déposé dans /public (ex: "portfolio.pdf", "cv.pdf")
// import.meta.env.BASE_URL gère automatiquement le préfixe GitHub Pages.
export default function PdfViewer({ file, downloadLabel }) {
  const base = `${import.meta.env.BASE_URL}${file}`;
  // #toolbar=0... masque la barre grise du lecteur PDF du navigateur
  // (Chrome / Edge). L'aperçu est alors épuré, sans encadrement.
  const url = `${base}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

  return (
    <div className={styles.wrap}>
      {/* Aperçu intégré du PDF (l'iframe sert de repli si <object> échoue) */}
      <object data={url} type="application/pdf" className={styles.frame} aria-label={file}>
        <iframe src={url} className={styles.frame} title={file} />
      </object>

      <a className={styles.download} href={base} download>
        {downloadLabel} ↓
      </a>
    </div>
  );
}
