# Portfolio Artiste Textile — V1 (Galerie minimaliste)

Site vitrine React + Vite + Framer Motion. Esthétique galerie d'art contemporain : fond blanc cassé, typo serif élégante, animations subtiles au survol.

---

## 1. Démarrage

```bash
npm install
npm run dev
```

Le site est dispo sur `http://localhost:5173`.

---

## 2. Structure

```
v1-portfolio-textile/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/images/        ← work1.jpg, work2.jpg, work3.jpg (déjà placées)
│   ├── components/
│   │   ├── Header/
│   │   ├── Gallery/
│   │   └── Footer/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 3. Personnalisation rapide

- **Nom de l'artiste** : remplace `"Nom de l'Artiste"` dans `Header.jsx`, `index.html` (`<title>`), et `Footer.jsx`.
- **E-mail de contact** : remplace `contact@artistetextile.fr` dans `Footer.jsx`.
- **Images** : remplace les fichiers dans `src/assets/images/` en gardant les noms `work1.jpg`, `work2.jpg`, `work3.jpg`.
- **Titres et années** : `Gallery.jsx`, tableau `works` en haut du fichier.

---

## 4. Déploiement sur GitHub Pages (étape par étape)

### A. Créer le repo sur GitHub

1. Va sur https://github.com/new
2. Donne un nom au repo, par exemple `portfolio-textile` (note ce nom, tu en as besoin à l'étape C)
3. **Repository visibility** → **Public** (obligatoire pour GitHub Pages gratuit)
4. **Ne coche RIEN** d'autre (pas de README, .gitignore ou licence, tu en as déjà)
5. Clique sur **Create repository**

### B. Lier ton dossier local au repo

Dans un terminal, place-toi dans ce dossier (`v1-portfolio-textile/`) et lance :

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/NOM-DU-REPO.git
git push -u origin main
```

Remplace :
- `TON-USERNAME` par ton nom d'utilisateur GitHub
- `NOM-DU-REPO` par le nom exact donné à l'étape A

> Si Git te demande une authentification, voir section "Problèmes courants" plus bas.

### C. Configurer le bon `base` dans Vite

Ouvre `vite.config.js` et remplace la ligne `base` par le nom EXACT de ton repo :

```js
base: '/NOM-DU-REPO/',
```

⚠️ Les slashs au début ET à la fin sont obligatoires.

Commit cette modif :

```bash
git add vite.config.js
git commit -m "Configure base for GitHub Pages"
git push
```

### D. Activer GitHub Pages

1. Sur GitHub, va dans **ton repo → Settings → Pages**
2. Sous **Build and deployment → Source**, sélectionne **GitHub Actions**
3. C'est tout. Le workflow `.github/workflows/deploy.yml` (déjà inclus) va se lancer automatiquement.

### E. Suivre le déploiement

1. Va dans l'onglet **Actions** de ton repo
2. Tu verras un workflow en cours (icône jaune qui tourne)
3. Attends ~1 minute, l'icône passe au vert ✓
4. **Ton site est en ligne à l'URL** :

```
https://TON-USERNAME.github.io/NOM-DU-REPO/
```

Exemple : si ton username GitHub est `marie-dupont` et ton repo `portfolio-textile`, l'URL sera :

```
https://marie-dupont.github.io/portfolio-textile/
```

### F. Mises à jour suivantes

Chaque fois que tu veux mettre à jour le site, depuis ton dossier local :

```bash
git add .
git commit -m "Description de ce qui a changé"
git push
```

GitHub Actions redéploie automatiquement. Recharge la page après ~1 minute.

---

## 5. Problèmes courants

### "Git me demande un mot de passe"

GitHub n'accepte plus les mots de passe depuis 2021. Deux solutions :

**Solution simple : utiliser GitHub Desktop**
- Télécharge https://desktop.github.com
- Ouvre l'app, connecte-toi
- File → Add Local Repository → choisis ton dossier
- Publish repository

**Solution terminal : Personal Access Token (PAT)**
1. https://github.com/settings/tokens/new
2. Note : "Token portfolio"
3. Expiration : 90 jours
4. Coche `repo` (toute la section)
5. Generate token → copie le token affiché (commence par `ghp_...`)
6. Quand `git push` te demande un mot de passe, colle le token

### "Page blanche sur le site déployé"

Vérifie dans la console du navigateur (F12). Si tu vois des `404` sur les fichiers CSS/JS :
- C'est presque toujours un problème de `base` dans `vite.config.js`
- Vérifie qu'il correspond EXACTEMENT au nom du repo, avec les slashs

### "Le push échoue avec 'rejected'"

Le repo distant contient quelque chose que tu n'as pas localement. Force le push initial :

```bash
git push -u origin main --force
```

(À ne faire QUE pour le tout premier push, jamais après.)

---

## 6. Commandes utiles

```bash
npm run dev       # Lance le serveur de développement (port 5173)
npm run build     # Génère le dossier dist/ pour la prod
npm run preview   # Teste le build de prod en local
npm run deploy    # Déploie manuellement (alternative à GitHub Actions)
```
