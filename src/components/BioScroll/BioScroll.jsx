import { motion } from 'framer-motion';
import styles from './BioScroll.module.css';

export default function BioScroll() {
  return (
    <section className={styles.bioSection}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }} /* L'animation se déclenche quand on arrive à 20% de la section */
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className={styles.text}>
          Cyrielle Pigeau vit et travaille à Paris. Sa pratique mêle photographie et savoir-faire textiles (tissage, tapisserie d'ameublement et de haute lice). Elle s'appuie sur l'apprentissage et la transmission pour interroger les dimensions techniques et symboliques de ces techniques en lien avec son propre héritage culturel.
        </p>
        <a href="#about" className={styles.link}>
          Vers About →
        </a>
      </motion.div>
    </section>
  );
}