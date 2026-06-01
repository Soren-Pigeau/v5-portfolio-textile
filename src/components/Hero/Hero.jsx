import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import mainImage from '../../assets/images/work3.jpg'; // Utilise la photo florale de ton dossier

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div 
        className={styles.imageContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img src={mainImage} alt="Œuvre textile Cyrielle Pigeau" className={styles.image} />
      </motion.div>
    </section>
  );
}