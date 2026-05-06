// nav.js — shared Firebase auth nav updater
// Include this script as type="module" on every page after the nav element

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDz4bj94WP9XBx2aBEgzb3cLYXMoMzO1gI",
  authDomain: "mental-health-39ec7.firebaseapp.com",
  projectId: "mental-health-39ec7",
  storageBucket: "mental-health-39ec7.firebasestorage.app",
  messagingSenderId: "933182152491",
  appId: "1:933182152491:web:5c061e000273ea2a2c2f6e",
  measurementId: "G-5K8PX7G3PS"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  const link = document.getElementById('navAuthLink');
  if (!link) return;
  if (user) {
    const initial = (user.displayName || user.email || '?')[0].toUpperCase();
    const avatarHtml = user.photoURL
      ? `<div class="nav-user-avatar"><img src="${user.photoURL}" alt=""></div>`
      : `<div class="nav-user-avatar">${initial}</div>`;
    link.outerHTML = `<a href="profile.html" class="nav-user">${avatarHtml}<span>${user.displayName || 'Profile'}</span></a>`;
  }
  // если не залогинен — ссылка "Sign In" остаётся как есть
});
