import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import HomeGallery from '../../components/HomeGallery/HomeGallery';
import SiteFooter from '../../components/SiteFooter/SiteFooter';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Home.module.css';
import heroImage from '../../assets/hero.jpg';
// 👆 Image d'accueil. Pour la changer, remplace src/assets/hero.jpg

export default function Home() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // L'image recule pendant le 1er écran de scroll ; le contenu remonte par-dessus.
  const scale = useTransform(scrollY, [0, 700], [1, 1.12]);
  const y = useTransform(scrollY, [0, 700], [0, 90]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.35]);
  const hintOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <Layout variant="overlay">
      {/* 1. Image PLEINE LARGEUR, collée en haut */}
      <section className={styles.hero}>
        <motion.img
          src={heroImage}
          alt=""
          className={styles.heroImg}
          style={{ scale, y, opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <motion.span className={styles.scrollHint} style={{ opacity: hintOpacity }} aria-hidden="true">↓</motion.span>
      </section>

      {/* 2. Tout le contenu remonte (opaque) par-dessus l'image */}
      <div className={styles.below}>
        <section className={styles.bio}>
          <motion.div
            className={styles.bioInner}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className={styles.bioText}>{t.home.bio}</p>
            <Link to="/about" className={styles.toAbout}>{t.home.toAbout}</Link>
          </motion.div>
        </section>

        {/* 3. Dernières œuvres réalisées */}
        <HomeGallery />

        {/* 4. Contact à l'artiste */}
        <SiteFooter />
      </div>
    </Layout>
  );
}
