import React from 'react'

export const About = () => {
  return (
    <div className="hero min-h-screen bg-base-100 py-12">
      <div className="hero-content text-center max-w-3xl flex-col gap-8">
        
        {/* Header Section */}
        <div className="max-w-md">
          <div className="inline-flex p-4 bg-primary/10 text-primary rounded-full text-4xl mb-4">
            🌦️
          </div>
          <h1 className="text-4xl font-bold tracking-tight">About SkyFlow</h1>
          <p className="py-4 text-base-content/70">
            A modern, minimalist weather application built to deliver precise, real-time atmospheric data without the clutter of traditional weather platforms.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left mt-4">
          <div className="card bg-base-200 shadow-sm border border-base-300">
            <div className="card-body p-5">
              <h2 className="card-title text-base font-bold text-primary">⚡ Real-Time Accuracy</h2>
              <p className="text-sm text-base-content/80">
                Leverages high-resolution numerical weather prediction models to pull instantaneous updates on temperature, wind vectors, and moisture arrays.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-sm border border-base-300">
            <div className="card-body p-5">
              <h2 className="card-title text-base font-bold text-primary">🌍 Global Coverage</h2>
              <p className="text-sm text-base-content/80">
                Seamlessly maps localized data sets across coordinates worldwide, automatically selecting the optimal regional forecasting system for your area.
              </p>
            </div>
          </div>
        </div>

        {/* Data Source Attribution Badge */}
        <div className="alert bg-base-200 border-base-300 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 w-full">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <div className="text-left">
              <h3 className="font-bold text-sm">Data Architecture</h3>
              <p className="text-xs text-base-content/60">Powered by the Open-Meteo API</p>
            </div>
          </div>
          <a 
            href="https://open-meteo.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm normal-case"
          >
            Learn More
          </a>
        </div>

      </div>
    </div>
  );
}
