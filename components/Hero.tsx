export default function Hero() {
  return (
    <section id="hero" className="relative md:py-0 lg:py-2 xl:py-6 flex items-center justify-center overflow-hidden">
      <div className="max-w-[75rem] mx-auto px-4 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center relative">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:pr-8">
            {/* Top Badge */}
            {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[var(--primary-green)]/30 bg-[var(--primary-green)]/5">
              <svg className="w-4 h-4 text-[var(--primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-[var(--primary-green)] text-xs font-semibold">Conversational AI Readiness</span>
            </div> */}

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-[58px] font-bold leading-tight mb-4 mt-8 md:mt-0">
                <span className="text-white">Is your Business ready for</span>
                <br />
                <span className="gradient-text">Conversational AI?</span>
              </h1>
              <div className="space-y-2 text-lg md:text-xl text-gray-300 leading-relaxed text-left">
    
              <p>Search interfaces are fading.</p>
              <p>Traditional media models are becoming obsolete. </p>
              <p>eCommerce is giving way to conversational commerce.</p>
              <p>AI-driven interactions are rising.</p>
              <p>Those who adapt now will lead tomorrow’s markets.</p>
            
              </div>
            </div>

            {/* CTA Buttons - Inline Tailwind Styles */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {/* Primary Button - White Gradient */}
              <a 
                href="#framework"
                className="group inline-flex items-center justify-center space-x-2 px-6 py-3 text-black text-sm font-semibold rounded-[10px] backdrop-blur-[5px] border-0"
                style={{
                  background: 'linear-gradient(172deg, rgb(207, 207, 207) 0%, rgb(255, 255, 255) 50.556%, rgb(207, 207, 207) 100%)',
                  boxShadow: 'rgba(255, 255, 255, 0) 0px 0px 0px 0px',
                }}
              >
                <span>Explore the Framework</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Secondary Button - Dark with Subtle Border */}
              <a 
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 text-white text-sm font-semibold rounded-[10px] backdrop-blur-[5px] border border-white/10 transition-all duration-300 hover:border-white/20"
                style={{
                  background: 'linear-gradient(rgba(28, 28, 28, 0.1) 0%, rgba(18, 18, 18, 0.2) 100%)',
                  boxShadow: 'rgba(255, 255, 255, 0.9) 0px 0.602187px 0.602187px -1.58333px inset, rgba(255, 255, 255, 0.74) 0px 2.28853px 2.28853px -3.16667px inset, rgba(255, 255, 255, 0.05) 0px 10px 10px -4.75px inset',
                }}
              >
                <span>Let’s Talk</span>
              </a>
            </div>
          </div>

          {/* Right Side - 3D Voice Waveform Orb */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-[500px] mx-auto">
              
              {/* Central Glow Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary-green)] via-[var(--glow-green)] to-[var(--primary-green)] opacity-50 blur-3xl animate-pulse-slow"></div>
              </div>

              {/* 3D Rotating Rings */}
              <div className="absolute inset-0 flex items-center justify-center perspective-1000">
                <div className="absolute w-[400px] h-[400px] animate-rotate-3d-slow-anticlockwise">
                  <div className="w-full h-full rounded-full border-2 border-[var(--primary-green)]/25" 
                       style={{ transform: 'rotateX(60deg) rotateY(0deg)' }}></div>
                </div>
                
                <div className="absolute w-[340px] h-[340px] animate-rotate-3d-medium-anticlockwise">
                  <div className="w-full h-full rounded-full border-2 border-[var(--glow-green)]/30" 
                       style={{ transform: 'rotateX(60deg) rotateY(45deg)' }}></div>
                </div>
                
                <div className="absolute w-[260px] h-[260px] animate-rotate-3d-fast-anticlockwise delay-100">
                  <div className="w-full h-full rounded-full border-2 border-[var(--primary-green)]/45" 
                       style={{ transform: 'rotateX(60deg) rotateY(90deg)' }}></div>
                </div>

                <div className="absolute w-[180px] h-[180px] animate-rotate-3d-fastest-anticlockwise delay-200">
                  <div className="w-full h-full rounded-full border-[1.5px] border-[var(--glow-green)]/50" 
                       style={{ transform: 'rotateX(60deg) rotateY(135deg)' }}></div>
                </div>
              </div>

              {/* Siri-like Voice Waveform Bars */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="flex items-center space-x-1.5">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-gradient-to-t from-[var(--primary-green)] to-[var(--glow-green)] rounded-full animate-wave"
                      style={{
                        height: '20px',
                        animationDelay: `${i * 0.1}s`,
                        opacity: 0.8,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Conversation Bubbles */}
              <div className="absolute top-[15%] left-[10%] animate-float-bubble">
                <div className="bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/30 rounded-2xl rounded-tr-sm px-4 py-2 backdrop-blur-sm">
                  <p className="text-white text-xs font-medium">Context</p>
                </div>
              </div>

              <div className="absolute top-[30%] right-[8%] animate-float-bubble delay-200">
                <div className="bg-[var(--glow-green)]/10 border border-[var(--glow-green)]/30 rounded-2xl rounded-tl-sm px-4 py-2 backdrop-blur-sm">
                  <p className="text-white text-xs">Prompts</p>
                </div>
              </div>

              <div className="absolute bottom-[25%] left-[15%] animate-float-bubble delay-400">
                <div className="bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/30 rounded-2xl rounded-tr-sm px-4 py-2 backdrop-blur-sm">
                  <p className="text-white text-xs font-medium">Conversations</p>
                </div>
              </div>

              {/* Particles */}
              <div className="absolute inset-0 flex items-center justify-center">
                
                {/* Inner Orbit 1 - 12 particles */}
                {[...Array(12)].map((_, i) => (
                  <div key={`inner1-${i}`} className="absolute w-[200px] h-[200px] animate-orbit-fastest-anticlockwise" style={{ animationDelay: `-${(i / 12) * 16}s` }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-[#0ee5e6] rounded-full shadow-sm shadow-[#0ee5e6]/60 animate-merge-pulse"></div>
                  </div>
                ))}

                {/* Inner Orbit 2 - 10 particles */}
                {[...Array(10)].map((_, i) => (
                  <div key={`inner2-${i}`} className="absolute w-[260px] h-[260px] animate-orbit-fast-anticlockwise" style={{ animationDelay: `-${(i / 10) * 18}s` }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-[#87f3f4] rounded-full shadow-sm shadow-[#87f3f4]/60 animate-merge-pulse"></div>
                  </div>
                ))}

                {/* Middle Orbit 3 - 9 particles */}
                {[...Array(9)].map((_, i) => (
                  <div key={`middle1-${i}`} className="absolute w-[320px] h-[320px] animate-orbit-medium-anticlockwise" style={{ animationDelay: `-${(i / 9) * 22}s` }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-[var(--primary-green)] rounded-full shadow-sm shadow-[var(--primary-green)]/50"></div>
                  </div>
                ))}

                {/* Middle Orbit 4 - 7 particles */}
                {[...Array(7)].map((_, i) => (
                  <div key={`middle2-${i}`} className="absolute w-[380px] h-[380px] animate-orbit-medium-anticlockwise" style={{ animationDelay: `-${(i / 7) * 22}s` }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-[var(--glow-green)] rounded-full shadow-sm shadow-[var(--glow-green)]/50"></div>
                  </div>
                ))}

                {/* Outer Orbit 5 - 5 particles */}
                {[...Array(5)].map((_, i) => (
                  <div key={`outer1-${i}`} className="absolute w-[420px] h-[420px] animate-orbit-slow-anticlockwise" style={{ animationDelay: `-${(i / 5) * 30}s` }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-[#5ce8e9] rounded-full shadow-sm shadow-[#5ce8e9]/45"></div>
                  </div>
                ))}

                {/* Far Outer Orbit 6 - 3 particles */}
                {[...Array(3)].map((_, i) => (
                  <div key={`outer2-${i}`} className="absolute w-[460px] h-[460px] animate-orbit-slowest-anticlockwise" style={{ animationDelay: `-${(i / 3) * 40}s` }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-[#b8f7f8] rounded-full shadow-sm shadow-[#b8f7f8]/35"></div>
                  </div>
                ))}

              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary-green)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="var(--glow-green)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <circle cx="50%" cy="50%" r="100" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
                <circle cx="50%" cy="50%" r="130" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.28" />
                <circle cx="50%" cy="50%" r="160" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.25" />
                <circle cx="50%" cy="50%" r="190" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.22" />
                <circle cx="50%" cy="50%" r="210" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.18" />
                <circle cx="50%" cy="50%" r="230" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.15" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a080d] to-transparent pointer-events-none"></div>
    </section>
  );
}
