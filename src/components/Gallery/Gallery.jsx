import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

import work1 from '../../assets/images/work1.jpg';
import work2 from '../../assets/images/work2.jpg';
import work3 from '../../assets/images/work3.jpg';

const works = [
  { id: 1, src: work1, title: 'Nature morte n°1', year: '2024' },
  { id: 2, src: work2, title: 'Installation textile', year: '2024' },
  { id: 3, src: work3, title: 'Composition florale', year: '2024' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Gallery() {
  return (
    <section className={styles.gallery} id="oeuvres">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Œuvres récentes</p>
        <h2 className={styles.title}>
          Tissus imprimés, installations
          <br />et compositions florales
        </h2>
      </div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {works.map((work) => (
          <motion.figure
            key={work.id}
            className={styles.item}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className={styles.imageWrapper}>
              <motion.img
                src={work.src}
                alt={work.title}
                className={styles.image}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                loading="lazy"
              />
            </div>
            <figcaption className={styles.caption}>
              <span>{work.title}</span>
              <span>{work.year}</span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
