import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../components/Layout/Layout';
import { useLanguage } from '../../i18n/LanguageContext';
import { sections, projectVideos } from '../../data/content';
import styles from './ProjectsPage.module.css';

export default function ProjectsPage({ section }) {
  const { t, lang } = useLanguage();

  // Ces deux hooks permettent de lire et changer l'URL
  const { slug } = useParams();
  const navigate = useNavigate();

  // État d'ouverture de la vidéo (lightbox)
  const [videoOpen, setVideoOpen] = useState(false);

  const folders = sections[section] || [];

  // On regarde si l'URL contient le nom d'un projet (le "slug")
  const openIndex = slug ? folders.findIndex(f => f.slug === slug) : -1;

  // Fonctions pour naviguer en changeant l'URL
  const open = (projectSlug) => navigate(`/${section}/${projectSlug}`);
  const close = () => navigate(`/${section}`);

  // ---------- VUE GRILLE : Accueil de la section ----------
  if (openIndex === -1) {
    return (
      <Layout>
        <div className={styles.grid}>
          {folders.map((f, i) => (
            <motion.button
              key={f.slug}
              className={styles.folder}
              onClick={() => open(f.slug)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className={styles.thumbWrap}>
                <img src={f.cover} alt={f.title} className={styles.thumb} />
              </span>
              <span className={styles.thumbMeta}>
                <span>{f.title}</span>
                {f.year && <span>{f.year}</span>}
              </span>
            </motion.button>
          ))}
        </div>
      </Layout>
    );
  }

  // ---------- VUE DÉTAIL : Image + Texte + Galerie ----------
  const f = folders[openIndex];

  const mainPhoto = f.photos[0];
  const otherPhotos = f.photos.slice(1);

  // Texte du projet : la 1re ligne est le "cartel" (titre + technique + année)
  // affiché en petite typo ; le reste forme les paragraphes du texte.
  const lines = f.info[lang].split('\n');
  const caption = lines[0];
  const body = lines.slice(1).filter((l) => l.trim() !== '');

  // Vidéo éventuelle liée au projet
  const video = f.video ? projectVideos[f.video] : null;

  return (
    <Layout>
      <div className={styles.detailWrapper}>

        <button className={styles.back} onClick={close}>← retour</button>

        {/* SECTION HAUT : Image Principale + Infos */}
        <div className={styles.heroSection}>
          <motion.div
            className={styles.mainImageWrap}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={mainPhoto} alt={f.title} className={styles.heroImg} />
          </motion.div>

          <motion.aside
            className={styles.sideInfo}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Cartel en petite typo */}
            <p className={styles.caption}>{caption}</p>

            <div className={styles.infoText}>
              {body.map((line, i) => <p key={i}>{line}</p>)}

              {f.orderable && (
                <a className={styles.order} href="mailto:cyrielle.pigeau@gmail.com">
                  {t.project.orderByMail}
                </a>
              )}
            </div>

            {/* Vignette vidéo cliquable */}
            {video && (
              <button className={styles.videoThumb} onClick={() => setVideoOpen(true)} aria-label="Lire la vidéo">
                <img src={video.poster} alt="" />
                <span className={styles.playBtn} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </span>
              </button>
            )}
          </motion.aside>
        </div>

        {/* SECTION BAS : Galerie Mixte (Verticale / Horizontale) */}
        {otherPhotos.length > 0 && (
          <div className={styles.photoGallery}>
            {otherPhotos.map((src, i) => (
              <motion.div
                key={i}
                className={styles.galleryItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6 }}
              >
                <img src={src} alt={`${f.title} ${i + 2}`} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* LIGHTBOX VIDÉO */}
      <AnimatePresence>
        {video && videoOpen && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setVideoOpen(false)}
          >
            <button className={styles.lightboxClose} onClick={() => setVideoOpen(false)} aria-label="Fermer">×</button>
            <motion.video
              className={styles.lightboxVideo}
              src={video.src}
              poster={video.poster}
              controls
              autoPlay
              playsInline
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
