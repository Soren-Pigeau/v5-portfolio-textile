// =============================================================
//  CONTENU "DONNÉES" — dossiers de projets + CV
//  Les images sont chargées automatiquement depuis
//  src/assets/photos/<section>/<dossier>/  via import.meta.glob.
//  → Pour AJOUTER / RETIRER une photo : dépose / supprime le
//    fichier dans le bon dossier, rien d'autre à modifier.
//  → L'ordre suit le nom de fichier (préfixe 01-, 02-, ...).
// =============================================================

// Charge un dossier d'images, trié par nom de fichier
function load(glob) {
  return Object.keys(glob).sort().map((k) => glob[k]);
}

// ---- WORK (6 projets) ----
const wPoseurs   = load(import.meta.glob('../assets/photos/work/1-les-poseurs/*.jpg', { eager: true, query: '?url', import: 'default' }));
// ---- COUVERTURES (Miniatures de premier plan) ----
import cover01 from '../assets/photos/covers/01.jpg';
import cover02 from '../assets/photos/covers/02.jpg';
import cover03 from '../assets/photos/covers/03.jpg';
import cover04 from '../assets/photos/covers/04.jpg';
import cover05 from '../assets/photos/covers/05.jpg';
import cover06 from '../assets/photos/covers/06.jpg';

// ---- VIDÉOS de projets (mp4 + image poster) ----
import interieurVideo from '../assets/video/interieur-video.mp4';
import interieurPoster from '../assets/video/interieur-video-poster.jpg';

export const projectVideos = {
  interieur: { src: interieurVideo, poster: interieurPoster },
  poseurs: { youtube: 'FobrDoSX2f8' }, // vidéo YouTube (cahier des charges)
};
const wInterieur = load(import.meta.glob('../assets/photos/work/2-interieur/*.jpg', { eager: true, query: '?url', import: 'default' }));
const wTissage   = load(import.meta.glob('../assets/photos/work/3-tissage/*.jpg', { eager: true, query: '?url', import: 'default' }));
const wWool      = load(import.meta.glob('../assets/photos/work/4-wool-production/*.jpg', { eager: true, query: '?url', import: 'default' }));
const wFleur     = load(import.meta.glob('../assets/photos/work/5-fleur-en-strass/*.jpg', { eager: true, query: '?url', import: 'default' }));
const wReflect   = load(import.meta.glob('../assets/photos/work/6-reflect-pattern/*.jpg', { eager: true, query: '?url', import: 'default' }));

// ---- BOOK (3 dossiers) ----
const bAnnees  = load(import.meta.glob('../assets/photos/book/1-1983-2024/*.jpg', { eager: true, query: '?url', import: 'default' }));
const b002     = load(import.meta.glob('../assets/photos/book/2-002/*.jpg', { eager: true, query: '?url', import: 'default' }));
const bArchive = load(import.meta.glob('../assets/photos/book/3-archives/*.jpg', { eager: true, query: '?url', import: 'default' }));

// ---- PRINT (placeholders issus de "Intérieur" — à confirmer / remplacer) ----
const pDos    = load(import.meta.glob('../assets/photos/print/1-interieur-dos/*.jpg', { eager: true, query: '?url', import: 'default' }));
const pFace   = load(import.meta.glob('../assets/photos/print/2-interieur-face/*.jpg', { eager: true, query: '?url', import: 'default' }));
const pTallud = load(import.meta.glob('../assets/photos/print/3-le-tallud/*.jpg', { eager: true, query: '?url', import: 'default' }));

// ---- ABOUT (portrait) ----
export const aboutPortrait =
  load(import.meta.glob('../assets/photos/about/*.jpg', { eager: true, query: '?url', import: 'default' }))[0] || null;

// ---- Pages PDF (portfolio + CV) affichées en images ----
export const pdfPages = {
  portfolio: load(import.meta.glob('../assets/pdf/portfolio/*.jpg', { eager: true, query: '?url', import: 'default' })),
  cv:        load(import.meta.glob('../assets/pdf/cv/*.jpg',        { eager: true, query: '?url', import: 'default' })),
};

// ---- "Dernières œuvres" affichées sur la page d'accueil ----
// (3 visuels au choix — modifie les images ou titres ici)
// ---- "Dernières œuvres" affichées sur la page d'accueil ----
export const recentWorks = [
  { img: cover01, title: 'Atelier de tapissier ou les poseurs', year: '2024', slug: 'les-poseurs' },
  { img: cover02, title: 'Intérieur tapissé', year: '2026', slug: 'interieur' },
  { img: cover05, title: 'Fleur en Strass', year: '2024', slug: 'fleur-en-strass' },
];

// =============================================================
//  TEXTES DES PROJETS
//  1re ligne = cartel (titre, technique, année) affiché en petit
//  lignes suivantes = paragraphes du texte
// =============================================================
const infoPoseurs = {
  fr: "*Atelier de tapissier ou « les poseurs »*, photographies, impressions textiles, sérigraphie, 2024.\nEn mars 2024, j'ai eu l'occasion d'entrer dans un lieu longtemps resté inaccessible, l'atelier de mon grand-père et de son amie Régine, tous deux menuisier et tapissière de profession. Dans leur atelier situé près de Parthenay dans les Deux Sèvres, ils retapissent des fauteuils et confectionnent des éléments de décors depuis plus de 60 ans. Cela a été l'occasion de m'initier à la technique de la tapisserie d'ameublement et de mener une enquête autour de la transmission, le rayonnement de ce savoir-faire et la découverte de leurs archives.",
  en: "*Atelier de tapissier ou « les poseurs »*, photographs, textile prints, screen printing, 2024.\nIn March 2024, I had the opportunity to enter a place that had long remained inaccessible: the workshop of my grandfather and his friend Régine, both a carpenter and an upholsterer by trade. In their workshop near Parthenay in the Deux-Sèvres, they have been reupholstering armchairs and crafting decorative elements for over 60 years. It was an opportunity to learn the technique of upholstery and to conduct an investigation into transmission, the influence of this craft, and the discovery of their archives.",
};
const infoInterieur = {
  fr: "*Intérieur tapissé*, sérigraphie sur velours, tapisserie d'ameublement, 2026.\nDeux ans après une première initiation à la tapisserie d'ameublement, j'ai pu retourner dans l'atelier de mon grand-père, menuisier tapissier, pour confectionner mes propres fauteuils. Lors de ma première venue, j'ai réalisé des photographies de son atelier et de sa maison, dans laquelle il a tout imaginé et fabriqué lui-même. J'ai sérigraphié ces images sur du velours pour tapisser mes fauteuils.\nJe m'intéresse à la transformation et à la circulation des images : du lieu à l'image, de l'image au textile puis du textile à l'objet, en mobilisant le savoir-faire de la tapisserie d'ameublement. Les fauteuils deviennent des objets de rencontre entre regard documentaire, apprentissage d'un savoir-faire et réappropriation d'un héritage familial.",
  en: "*Intérieur tapissé*, screen printing on velvet, upholstery, 2026.\nTwo years after a first introduction to upholstery, I was able to return to the workshop of my grandfather, a carpenter and upholsterer, to make my own armchairs. During my first visit, I photographed his workshop and his house, which he imagined and built entirely himself. I screen-printed these images onto velvet to upholster my armchairs.\nI am interested in the transformation and circulation of images: from place to image, from image to textile, then from textile to object, drawing on the craft of upholstery. The armchairs become objects of encounter between a documentary gaze, the learning of a craft, and the reappropriation of a family heritage.",
};
const infoTissage = {
  fr: "*Bribe de fauteuil*, tissage, 100 × 150 mm, 2026.",
  en: "*Bribe de fauteuil*, weaving, 100 × 150 mm, 2026.",
};
const infoWool = {
  fr: "*Lacaune*, photomontages réalisés directement à l'agrandisseur, papier argentique N&B, 180 × 240 mm, tissages, 2021.\nIssus d'une série de 8 photomontages réalisés dans le cadre d'un partenariat avec le Parc régional du Haut Languedoc autour du réemploi de la laine Lacaune. Le photomontage renforce le sentiment d'oppression, la cadence de l'industrie et de l'élevage intensif.\nTissages à poches autour du réemploi de la laine Lacaune.",
  en: "*Lacaune*, photomontages made directly with the enlarger, B&W silver gelatin paper, 180 × 240 mm, weavings, 2021.\nFrom a series of 8 photomontages made as part of a partnership with the Haut-Languedoc Regional Park around the reuse of Lacaune wool. The photomontage reinforces the feeling of oppression, the pace of industry and intensive farming.\nPocket weavings around the reuse of Lacaune wool.",
};
const infoFleur = {
  fr: "*Fleur en Strass*, performance et VJing, au Doc (Paris 19e), 2024.\nFleur en Strass est un duo d'artistes composé de Caroline Garnier et Cyrielle Pigeau, diplômées de la HEAR (2024) en design textile. Amies de longue date, nous avons construit notre pratique commune autour du plaisir de se retrouver pour des moments de fête. Nous créons des espaces mêlant textile, live vidéo et scénographie au sein desquels nous collaborons avec des artistes sonores afin de créer des évènements festifs. L'emploi de logiciels de VJing permet de manipuler en direct des dessins et images pour concevoir des visuels qui entrent en résonance avec des scénographies textiles.",
  en: "*Fleur en Strass*, performance and VJing, at Le Doc (Paris 19), 2024.\nFleur en Strass is an artist duo made up of Caroline Garnier and Cyrielle Pigeau, graduates of HEAR (2024) in textile design. Longtime friends, we built our shared practice around the pleasure of coming together for festive moments. We create spaces blending textile, live video and scenography, within which we collaborate with sound artists to create festive events. The use of VJing software allows us to manipulate drawings and images live to design visuals that resonate with textile scenographies.",
};
const infoReflect = {
  fr: "*Dispositif Reflect Pattern*, polyester, tulle et projection, 1500 × 2000 mm, 2022.\nL'usage de la technique d'incrustation Chroma Keys me permet de manipuler et re-projeter un motif sérigraphié. Un tulle positionné devant le tissu fait gage d'écran, tout en laissant la projection traverser pour que celle-ci se superpose au motif.\nLa captation et la manipulation en direct crée une interaction entre la projection et le support imprimé, que celui-ci soit tendu, plié ou en mouvement. La projection virtuelle devient un reflet de l'image imprimée et inversement.",
  en: "*Reflect Pattern installation*, polyester, tulle and projection, 1500 × 2000 mm, 2022.\nThe use of the Chroma Key compositing technique lets me manipulate and re-project a screen-printed pattern. A tulle placed in front of the fabric acts as a screen, while letting the projection pass through so it overlays the pattern.\nLive capture and manipulation create an interaction between the projection and the printed support, whether it is stretched, folded or in motion. The virtual projection becomes a reflection of the printed image and vice versa.",
};

const infoBook1983 = {
  fr: "*Édition 1983-2024*, 61 ans d'archives, 205 × 285 mm, 366 pages, 2024.\nÉdition en cours composée des archives de Régine et de mon grand-père. Depuis 1983, Régine photographie l'ensemble des fauteuils qu'iels ont retapissés et des éléments de décor qu'iels ont confectionnés. Ce projet tente de déplacer le regard sur leur production et la temporalité d'un atelier. Les photos quasiment toutes prises dans l'atelier, souvent au même endroit, placent le travail de menuisier tapissièr.e au centre du propos. Les fauteuils se situent au cœur de la démarche, mais ils sont surtout un pont pour pénétrer dans un espace confidentiel et valoriser une vie de production.",
  en: "*Édition 1983-2024*, 61 years of archives, 205 × 285 mm, 366 pages, 2024.\nAn ongoing edition made up of the archives of Régine and my grandfather. Since 1983, Régine has photographed every armchair they have reupholstered and every decorative element they have made. This project attempts to shift the way we look at their production and the temporality of a workshop. The photos, almost all taken in the workshop and often in the same spot, place the work of the carpenter-upholsterer at the centre. The armchairs are at the heart of the approach, but above all they are a bridge into a private space and a way to celebrate a life of production.",
};
const infoBookCollection = {
  fr: "*Édition Collection*, 297 × 420 mm, 68 pages, 2024.\nÉdition de motifs réalisés à partir d'une enquête photographique dans la maison de mes grands-parents.",
  en: "*Édition Collection*, 297 × 420 mm, 68 pages, 2024.\nAn edition of patterns made from a photographic investigation in my grandparents' house.",
};
const infoBookTallud = {
  fr: "*La maison du Tallud*, 210 × 240 mm, 2024.\nÉdition réalisée à partir d'une enquête photographique dans la maison de mes grands-parents.",
  en: "*La maison du Tallud*, 210 × 240 mm, 2024.\nAn edition made from a photographic investigation in my grandparents' house.",
};

export const sections = {
  // ── PROJECTS (anciennement "work") ──
  // Astuce : pour afficher l'année sous une vignette (comme sur l'accueil),
  // renseigne le champ year. Laisse-le vide ('') si tu ne veux rien afficher.
  projects: [
    { slug: 'les-poseurs',     title: 'Atelier de tapissier ou les poseurs', year: '2024', photos: wPoseurs,   cover: cover01, info: infoPoseurs, video: 'poseurs' },
    { slug: 'interieur',       title: 'Intérieur tapissé', year: '2026', photos: wInterieur, cover: cover02, info: infoInterieur, video: 'interieur', videoInGallery: 2 },
    { slug: 'tissage',         title: 'Tissage',         year: '2026', photos: wTissage,   cover: cover03, info: infoTissage },
    { slug: 'wool-production', title: 'Lacaune',         year: '2021', photos: wWool,      cover: cover06, info: infoWool },
    { slug: 'fleur-en-strass', title: 'Fleur en Strass', year: '2024', photos: wFleur,     cover: cover05, info: infoFleur },
    { slug: 'reflect-pattern', title: 'Reflect Pattern', year: '2022', photos: wReflect,   cover: cover04, info: infoReflect },
  ],

  print: [
    { slug: 'interieur-dos',  title: 'Intérieur dos',  photos: pDos,    cover: pDos[0],    info: { fr: 'Tirage unique.', en: 'Single print.' }, orderable: true },
    { slug: 'interieur-face', title: 'Intérieur face', photos: pFace,   cover: pFace[0],   info: { fr: 'Tirage unique.', en: 'Single print.' }, orderable: true },
    { slug: 'le-tallud',      title: 'Le Tallud',      photos: pTallud, cover: pTallud[0], info: { fr: 'Tirage unique.', en: 'Single print.' }, orderable: true },
  ],

  book: [
    { slug: '1983-2024', title: '1983-2024',          year: '2024', photos: bAnnees,  cover: bAnnees[1] ?? bAnnees[0], info: infoBook1983,      orderable: true },
    { slug: '002',       title: 'Collection',         year: '2024', photos: b002,     cover: b002[0],                  info: infoBookCollection, orderable: true },
    { slug: 'archives',  title: 'La maison du Tallud', year: '2024', photos: bArchive, cover: bArchive[0],              info: infoBookTallud,     orderable: true },
  ],
};

// --- CV transcrit depuis le nouveau PDF ---
// Chaque entrée = { year, lead, detail }
//   year   → l'année (affichée en gras)
//   lead   → l'intitulé principal (affiché en gras : rôle, école, lieu, projet…)
//   detail → le complément (affiché en gris clair : mention, institution, ville…)
export const cv = {
  bourses: [
    {
      year: "2026",
      lead: "Homo Faber Fellowship - Fondation Michelangelo",
      detail: "Avec l'atelier Mérigot Sanzay. Venise - Paris."
    }
  ],
  expos: [
    {
      year: "2024",
      lead: "Eurofabrique",
      detail: "Restitution à Cluj-Napoca et à la Gaité Lyrique. Paris."
    },
    {
      year: "2023",
      lead: "Lignes de Vie",
      detail: "cur. Mayfly Callery, Bastille Design Center, Paris."
    },
    {
      year: "2022",
      lead: "Désert Samples",
      detail: "Galerie Octave Cowbell, Metz."
    }
  ],
  freelance: [
    {
      year: "2026",
      lead: "Tisserande",
      detail: "Diane Collongues, atelier Mérigot Sanzay, Paris."
    },
    {
      year: "2026",
      lead: "Tisserande",
      detail: "Marie Hazard, project Ad Hoc, Paris."
    },
    {
      year: "2024-2025",
      lead: "Chargée de communication",
      detail: "Carel Paris, Paris."
    },
    {
      year: "2023",
      lead: "Assistante éditoriale",
      detail: "Revue Revive, studio Anémone Image, artistes Amir Tikriti et Célia Cotelle, Paris."
    },
    {
      year: "2022",
      lead: "Tirage argentique",
      detail: "Studio Pauléon, La Rochelle."
    }
  ],
  workshop: [
    {
      year: "2025",
      lead: "Technique modélisme",
      detail: "Patrice Dutartre et Catarina Knoch-mulot, Paris."
    },
    {
      year: "2023",
      lead: "Vidéo - Lou Fauroux",
      detail: "Mulhouse."
    },
    {
      year: "2022",
      lead: "Désert Samples - Marie Quéau",
      detail: "Mulhouse."
    }
  ],
  formations: [
    {
      year: "2026",
      lead: "Mastère Spécialisé Management de la Mode et du Luxe",
      detail: "avec mention - Institut Français de la Mode, Paris."
    },
    {
      year: "2024",
      lead: "DNSEP option Design Textile",
      detail: "avec mention - Haute École des Arts du Rhin, Mulhouse."
    },
    {
      year: "2022",
      lead: "DNA option Design Textile",
      detail: "avec les félicitations du jury - Haute École des Arts du Rhin, Mulhouse."
    },
    {
      year: "2020",
      lead: "CPGE Arts et Design",
      detail: "avec mention, Toulouse."
    }
  ],
  evenements: [
    {
      year: "2024",
      lead: "Performance Fleur en Strass",
      detail: "Vernissage de l'exposition Ministère de l'impression à la Filature Scène Nationale. Mulhouse."
    },
    {
      year: "2023",
      lead: "Performance Fleur en Strass",
      detail: "série de 3 soirées de performances au Doc (19ème), Paris."
    },
    {
      year: "2023",
      lead: "VJ pour le Festival Elektric Park",
      detail: "Chatou."
    }
  ]
};