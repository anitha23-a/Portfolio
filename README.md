# Personal Portfolio Website

A professional personal portfolio website built with React, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js installed on your machine

### 1. How to install
Run the following command to install all necessary dependencies:
```bash
npm install
```

### 2. How to run locally
To start the development server, run:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. How to build
To create a production build, run:
```bash
npm run build
```
This will generate a `dist` folder containing the static files.

### 4. How to deploy FREE to Vercel
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click "Add New..." -> "Project".
4. Import your GitHub repository.
5. Vercel will automatically detect that it's a Vite project. Click "Deploy".
6. Your website will be live in a few minutes!

### 5. How to deploy FREE to Netlify
1. Push your code to a GitHub repository.
2. Go to [Netlify](https://www.netlify.com/) and sign in.
3. Click "Add new site" -> "Import an existing project".
4. Connect to GitHub and select your repository.
5. Netlify will auto-detect the build command (`npm run build`) and publish directory (`dist`).
6. Click "Deploy site".

### 6. Where to add my CV
Place your CV in the `public` folder and name it `Anitha-Jeevanantham-CV.pdf`.
Path: `public/Anitha-Jeevanantham-CV.pdf`

### 7. Where to add project screenshots
Place your project screenshots in the `public/projects` folder.
- `public/projects/motorcycle-system.png`
- `public/projects/treatment-finder.png`
- `public/projects/bank-app.png`

### 8. Where to change contact information
All your personal information, contact details, experiences, and project descriptions are stored in one single file.
Path: `src/data/info.js`
Edit this file to update any text on the website without touching the React components.
