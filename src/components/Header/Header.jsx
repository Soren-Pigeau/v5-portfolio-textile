import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.name}>
        Cyrielle<br/>Pigeau
      </a>
      <nav className={styles.nav} aria-label="Navigation principale">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#print">Print</a>
        <a href="#book">Book</a>
      </nav>
    </header>
  );
}