import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center md:flex md:items-center md:justify-between bg-base-200 text-base-content p-6 mt-auto border-t border-base-300 gap-y-4">

      {/* Left Section: Branding & Copyright */}
      <aside className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
        <div className="flex items-center gap-1.5">
          <span className="text-xl">🌦️</span>
          <p className="font-semibold text-primary text-lg">SkyFlow</p>
        </div>
        <span className="hidden sm:inline text-base-content/40">|</span>
        <p className="text-sm opacity-80">© {currentYear} - All rights reserved</p>
      </aside>

      {/* Center Section: API Attribution */}
      <div className="text-sm text-center opacity-90">
        <span>Weather data provided by </span>
        <a
          href="https://open-meteo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-primary link-hover font-semibold transition-colors"
        >
          Open-Meteo
        </a>
      </div>

      {/* Right Section: Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover transition-colors"
        >
          GitHub
        </a>
        <a href="#privacy" className="link link-hover transition-colors">Privacy Policy</a>
        <a href="#terms" className="link link-hover transition-colors">Terms</a>
      </nav>

    </footer>
  );
}
