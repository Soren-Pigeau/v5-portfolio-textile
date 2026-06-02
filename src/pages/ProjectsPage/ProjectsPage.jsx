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
  // Miniature : poster du MP4, sinon vignette officielle YouTube
  const videoPoster = video
    ? (video.poster || (video.youtube ? `https://img.youtube.com/vi/${video.youtube}/maxresdefault.jpg` : null))
    : null;

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
            {/* Cartel en petite typo : seul le titre d'oeuvre (entre *...*) est en italique */}
            <p className={styles.caption}>
              {caption.split('*').map((part, i) =>
                i % 2 === 1
                  ? <em key={i} className={styles.captionTitle}>{part}</em>
                  : part
              )}
            </p>

            <div className={styles.infoText}>
              {body.map((line, i) => <p key={i}>{line}</p>)}

              {f.orderable && (
                <a className={styles.order} href="mailto:cyrielle.pigeau@gmail.com">
                  {t.project.orderByMail}
                </a>
              )}
            </div>
          </motion.aside>
        </div>

        {/* Bouton vidéo réutilisable */}
        {/* eslint-disable-next-line no-unused-vars */}

        {/* SECTION BAS : Galerie + vidéo éventuellement intercalée */}
        {(() => {
          // Bouton vidéo (vignette cliquable)
          const renderVideo = (full) => (
            <motion.button
              className={`${styles.videoThumb} ${full ? styles.videoThumbFull : ''}`}
              onClick={() => setVideoOpen(true)}
              aria-label="Lire la vidéo"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={videoPoster}
                alt=""
                onError={(e) => {
                  if (video.youtube && !e.currentTarget.dataset.fallback) {
                    e.currentTarget.dataset.fallback = '1';
                    e.currentTarget.src = `https://img.youtube.com/vi/${video.youtube}/hqdefault.jpg`;
                  }
                }}
              />
              <span className={styles.playBtn} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </motion.button>
          );

          const Gallery = (photos, startIndex) => (
            photos.length > 0 && (
              <div className={styles.photoGallery}>
                {photos.map((src, i) => (
                  <motion.div
                    key={startIndex + i}
                    className={styles.galleryItem}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src={src} alt={`${f.title} ${startIndex + i + 2}`} />
                  </motion.div>
                ))}
              </div>
            )
          );

          // Position d'insertion de la vidéo DANS la galerie (sinon à la fin)
          const pos = video && f.videoInGallery ? f.videoInGallery : null;

          if (video && pos) {
            const before = otherPhotos.slice(0, pos);
            const after = otherPhotos.slice(pos);
            return (
              <>
                {Gallery(before, 0)}
                {renderVideo(true)}
                {Gallery(after, pos)}
              </>
            );
          }

          // Sinon : galerie complète puis vidéo à la fin (cas "les poseurs")
          return (
            <>
              {Gallery(otherPhotos, 0)}
              {video && renderVideo(false)}
            </>
          );
        })()}
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
            {video.youtube ? (
              <motion.div
                className={styles.lightboxYoutube}
                initial={{ scale: 0.96 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.96 }}
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtube}?autoplay=1&rel=0`}
                  title="Vidéo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            ) : (
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
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
