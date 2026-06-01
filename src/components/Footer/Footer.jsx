import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Contact</p>
        <h2 className={styles.title}>Pour toute demande</h2>
        <p className={styles.subtitle}>
          Œuvres disponibles à la vente.
          <br />
          Contact par e-mail uniquement.
        </p>
        <a
          href="mailto:cyrielle.pigeau@gmail.com"
          className={styles.button}
        >
          Écrire à l'artiste
        </a>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} — Tous droits réservés
      </p>
    </footer>
  );
}
