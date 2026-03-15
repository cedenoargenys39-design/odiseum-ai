'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
    if (res.ok) {
      alert('¡Gracias! Te avisamos cuando esté listo.');
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Barlow:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Barlow', sans-serif; background: #000; color: #fff; overflow-x: hidden; font-size: 16px; }
        body::after { content: ''; position: fixed; inset: 0; background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px); pointer-events: none; z-index: 999; }

        nav { display: flex; align-items: center; justify-content: space-between; padding: 1.2rem 4rem; border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.96); position: sticky; top: 0; z-index: 100; }
        .logo { display: flex; align-items: center; gap: .75rem; }
        .logo img { width: 36px; height: 36px; object-fit: contain; }
        .logo-text { font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 1.3rem; letter-spacing: .14em; text-transform: uppercase; }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a { color: rgba(255,255,255,.4); text-decoration: none; font-size: .8rem; letter-spacing: .12em; text-transform: uppercase; font-weight: 500; transition: color .2s; }
        .nav-links a:hover { color: #fff; }
        .nav-btn { background: #fff; color: #000; border: none; padding: .55rem 1.5rem; font-family: 'Barlow', sans-serif; font-size: .8rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; cursor: pointer; transition: opacity .2s; }
        .nav-btn:hover { opacity: .85; }

        .hero { display: grid; grid-template-columns: 55% 45%; min-height: 90vh; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .hero-left { display: flex; flex-direction: column; justify-content: center; padding: 5rem 4rem; border-right: 1px solid rgba(255,255,255,0.08); }
        .eyebrow { display: flex; align-items: center; gap: .75rem; margin-bottom: 2.5rem; }
        .eyebrow-line { width: 28px; height: 1px; background: rgba(255,255,255,.3); }
        .eyebrow-text { font-size: .72rem; letter-spacing: .2em; text-transform: uppercase; color: rgba(255,255,255,.35); font-weight: 500; }
        .hero h1 { font-family: 'Rajdhani', sans-serif; font-size: 5rem; font-weight: 700; line-height: .92; letter-spacing: -.01em; text-transform: uppercase; margin-bottom: 2rem; }
        .hero h1 .sub { font-weight: 300; color: rgba(255,255,255,.35); display: block; font-size: 4.2rem; }
        .hero-desc { font-size: 1.05rem; color: rgba(255,255,255,.45); line-height: 1.8; max-width: 460px; font-weight: 300; margin-bottom: 2.5rem; }
        .hero-btns { display: flex; gap: 1rem; }
        .btn-w { background: #fff; color: #000; border: none; padding: .9rem 2.4rem; font-family: 'Barlow', sans-serif; font-size: .85rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; cursor: pointer; transition: opacity .2s; }
        .btn-w:hover { opacity: .85; }
        .btn-o { background: transparent; color: rgba(255,255,255,.5); border: 1px solid rgba(255,255,255,.18); padding: .9rem 2.4rem; font-family: 'Barlow', sans-serif; font-size: .85rem; font-weight: 400; letter-spacing: .1em; text-transform: uppercase; cursor: pointer; transition: all .2s; }
        .btn-o:hover { color: #fff; border-color: rgba(255,255,255,.45); }

        .hero-right { display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; background: radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%); }
        .corner { position: absolute; width: 14px; height: 14px; }
        .tl { top: 1.5rem; left: 1.5rem; border-top: 1px solid rgba(255,255,255,.2); border-left: 1px solid rgba(255,255,255,.2); }
        .tr { top: 1.5rem; right: 1.5rem; border-top: 1px solid rgba(255,255,255,.2); border-right: 1px solid rgba(255,255,255,.2); }
        .bl { bottom: 1.5rem; left: 1.5rem; border-bottom: 1px solid rgba(255,255,255,.2); border-left: 1px solid rgba(255,255,255,.2); }
        .br { bottom: 1.5rem; right: 1.5rem; border-bottom: 1px solid rgba(255,255,255,.2); border-right: 1px solid rgba(255,255,255,.2); }
        .cube-scene { perspective: 600px; margin-bottom: 1.5rem; }
        .cube { width: 160px; height: 160px; position: relative; transform-style: preserve-3d; animation: spin 10s linear infinite; }
        @keyframes spin { from { transform: rotateX(20deg) rotateY(0); } to { transform: rotateX(20deg) rotateY(360deg); } }
        .face { position: absolute; width: 160px; height: 160px; border: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.02); }
        .face.front { transform: translateZ(80px); }
        .face.back { transform: rotateY(180deg) translateZ(80px); }
        .face.left { transform: rotateY(-90deg) translateZ(80px); }
        .face.right { transform: rotateY(90deg) translateZ(80px); }
        .face.top { transform: rotateX(90deg) translateZ(80px); background: rgba(255,255,255,.05); border-color: rgba(255,255,255,.45); }
        .face.bottom { transform: rotateX(-90deg) translateZ(80px); }
        .model-tag { font-size: .7rem; color: rgba(255,255,255,.25); letter-spacing: .14em; text-transform: uppercase; display: flex; align-items: center; gap: .5rem; }
        .model-tag::before, .model-tag::after { content: ''; width: 16px; height: 1px; background: rgba(255,255,255,.15); }
        .gen-dot-wrap { margin-top: 1rem; font-size: .7rem; color: rgba(255,255,255,.2); letter-spacing: .1em; text-transform: uppercase; display: flex; align-items: center; gap: .5rem; }
        .gen-dot { width: 5px; height: 5px; border-radius: 50%; background: rgba(255,255,255,.4); animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .15; } }

        .marquee-bar { border-top: 1px solid rgba(255,255,255,.08); border-bottom: 1px solid rgba(255,255,255,.08); padding: .85rem 0; overflow: hidden; }
        .marquee-inner { display: flex; gap: 2.5rem; animation: marquee 22s linear infinite; white-space: nowrap; }
        .marquee-inner span { font-size: .7rem; letter-spacing: .2em; text-transform: uppercase; color: rgba(255,255,255,.25); font-weight: 500; }
        .marquee-inner .sep { color: rgba(255,255,255,.1); }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .features-section { border-bottom: 1px solid rgba(255,255,255,.08); }
        .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .feat { padding: 3rem 2.5rem; border-right: 1px solid rgba(255,255,255,.08); transition: background .3s; }
        .feat:last-child { border-right: none; }
        .feat:hover { background: rgba(255,255,255,.02); }
        .feat-num { font-family: 'Rajdhani', sans-serif; font-size: .7rem; color: rgba(255,255,255,.12); letter-spacing: .2em; margin-bottom: 1.5rem; display: block; }
        .feat-icon { font-size: 1.3rem; margin-bottom: 1.2rem; display: block; }
        .feat h3 { font-family: 'Rajdhani', sans-serif; font-size: 1rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; margin-bottom: .7rem; line-height: 1.3; }
        .feat p { font-size: .83rem; color: rgba(255,255,255,.38); line-height: 1.75; font-weight: 300; }

        .how-section { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,.08); min-height: 520px; }
        .how-left { padding: 5rem 4rem; border-right: 1px solid rgba(255,255,255,.08); display: flex; flex-direction: column; justify-content: center; }
        .sec-label { font-size: .7rem; letter-spacing: .2em; text-transform: uppercase; color: rgba(255,255,255,.25); margin-bottom: .75rem; display: flex; align-items: center; gap: .75rem; }
        .sec-label::before { content: ''; width: 20px; height: 1px; background: rgba(255,255,255,.25); }
        .sec-title { font-family: 'Rajdhani', sans-serif; font-size: 2.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .02em; line-height: 1; }
        .how-steps { display: flex; flex-direction: column; margin-top: 2.5rem; }
        .step { display: flex; gap: 1.5rem; padding: 1.6rem 0; border-bottom: 1px solid rgba(255,255,255,.06); }
        .step:last-child { border-bottom: none; }
        .step-num { font-family: 'Rajdhani', sans-serif; font-size: 2rem; font-weight: 700; color: rgba(255,255,255,.08); flex-shrink: 0; width: 3rem; line-height: 1; padding-top: 2px; }
        .step h4 { font-family: 'Rajdhani', sans-serif; font-size: 1rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; margin-bottom: .4rem; }
        .step p { font-size: .83rem; color: rgba(255,255,255,.38); line-height: 1.65; font-weight: 300; }
        .how-right { background: #080808; display: flex; flex-direction: column; }
        .demo-topbar { display: flex; align-items: center; gap: .5rem; padding: .9rem 1.4rem; border-bottom: 1px solid rgba(255,255,255,.08); }
        .ddot { width: 9px; height: 9px; border-radius: 50%; }
        .r { background: #ff5f57; } .y { background: #febc2e; } .g { background: #28c840; }
        .demo-bar-title { font-size: .72rem; color: rgba(255,255,255,.25); margin-left: .5rem; letter-spacing: .08em; }
        .demo-chat { flex: 1; padding: 2.5rem; display: flex; flex-direction: column; gap: 1rem; justify-content: center; }
        .msg { padding: .85rem 1.1rem; font-size: .83rem; line-height: 1.55; max-width: 88%; }
        .msg-u { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.1); align-self: flex-end; color: #fff; }
        .msg-a { background: #111; border: 1px solid rgba(255,255,255,.06); align-self: flex-start; color: rgba(255,255,255,.45); }
        .typing { display: flex; gap: 3px; margin-top: 5px; }
        .typing span { width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,.3); animation: blink 1.2s infinite; }
        .typing span:nth-child(2) { animation-delay: .2s; }
        .typing span:nth-child(3) { animation-delay: .4s; }
        @keyframes blink { 0%, 80%, 100% { opacity: .1; } 40% { opacity: 1; } }
        .export-row { display: flex; gap: .4rem; flex-wrap: wrap; margin-top: .6rem; }
        .exp-tag { font-size: .68rem; padding: .22rem .6rem; border: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.3); letter-spacing: .06em; text-transform: uppercase; }

        .waitlist-section { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,.08); }
        .wl-left { padding: 5rem 4rem; border-right: 1px solid rgba(255,255,255,.08); display: flex; flex-direction: column; justify-content: center; }
        .wl-left h2 { font-family: 'Rajdhani', sans-serif; font-size: 2.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: .02em; line-height: 1; margin-bottom: 1.2rem; }
        .wl-left p { font-size: .95rem; color: rgba(255,255,255,.4); line-height: 1.8; font-weight: 300; max-width: 400px; }
        .wl-right { padding: 5rem 4rem; display: flex; flex-direction: column; justify-content: center; gap: 1rem; }
        .wl-input { width: 100%; background: transparent; border: 1px solid rgba(255,255,255,.15); color: #fff; padding: .9rem 1.2rem; font-family: 'Barlow', sans-serif; font-size: .9rem; font-weight: 300; outline: none; transition: border-color .2s; }
        .wl-input::placeholder { color: rgba(255,255,255,.2); }
        .wl-input:focus { border-color: rgba(255,255,255,.4); }
        .wl-btn { width: 100%; background: #fff; color: #000; border: none; padding: 1rem; font-family: 'Barlow', sans-serif; font-size: .85rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; cursor: pointer; transition: opacity .2s; margin-top: .5rem; }
        .wl-btn:hover { opacity: .85; }
        .wl-note { font-size: .72rem; color: rgba(255,255,255,.2); letter-spacing: .06em; text-align: center; }

        footer { padding: 2rem 4rem; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(255,255,255,.06); }
        .foot-logo { display: flex; align-items: center; gap: .7rem; }
        .foot-logo img { width: 26px; height: 26px; object-fit: contain; }
        .foot-logo-text { font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 1rem; letter-spacing: .14em; text-transform: uppercase; }
        .foot-links { display: flex; gap: 2rem; }
        .foot-links a { font-size: .72rem; color: rgba(255,255,255,.2); text-decoration: none; letter-spacing: .1em; text-transform: uppercase; transition: color .2s; }
        .foot-links a:hover { color: rgba(255,255,255,.5); }
        footer p { font-size: .72rem; color: rgba(255,255,255,.12); letter-spacing: .06em; }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="logo">
          <img src="/logo.png" alt="Odiseum AI" />
          <span className="logo-text">Odiseum AI</span>
        </div>
        <ul className="nav-links">
          <li><a href="#">Características</a></li>
          <li><a href="#">Cómo funciona</a></li>
          <li><a href="#">Lista de espera</a></li>
        </ul>
        <button className="nav-btn">Acceso anticipado</button>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <div className="eyebrow">
            <div className="eyebrow-line"></div>
            <span className="eyebrow-text">Generación 3D con inteligencia artificial</span>
          </div>
          <h1>Genera<br />Modelos 3D<br /><span className="sub">con solo pedirlo</span></h1>
          <p className="hero-desc">Describe lo que imaginas en lenguaje natural y Odiseum AI lo convierte en un modelo 3D listo para usar en Blender, Unity, Roblox Studio y más.</p>
          <div className="hero-btns">
            <button className="btn-w">Unirse a la lista de espera</button>
            <button className="btn-o">Ver cómo funciona</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="corner tl"></div><div className="corner tr"></div>
          <div className="corner bl"></div><div className="corner br"></div>
          <div className="cube-scene">
            <div className="cube">
              <div className="face front"></div><div className="face back"></div>
              <div className="face left"></div><div className="face right"></div>
              <div className="face top"></div><div className="face bottom"></div>
            </div>
          </div>
          <div className="model-tag">modelo generado</div>
          <div className="gen-dot-wrap"><div className="gen-dot"></div>generando en tiempo real</div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marquee-bar">
        <div className="marquee-inner">
          <span>Generación 3D</span><span className="sep">·</span><span>Blender</span><span className="sep">·</span><span>Unity</span><span className="sep">·</span><span>Roblox Studio</span><span className="sep">·</span><span>Unreal Engine</span><span className="sep">·</span><span>Exportar .glb</span><span className="sep">·</span><span>Exportar .fbx</span><span className="sep">·</span><span>Exportar .obj</span><span className="sep">·</span><span>Animaciones</span><span className="sep">·</span><span>Mapas para juegos</span><span className="sep">·</span><span>Texturas IA</span><span className="sep">·</span>
          <span>Generación 3D</span><span className="sep">·</span><span>Blender</span><span className="sep">·</span><span>Unity</span><span className="sep">·</span><span>Roblox Studio</span><span className="sep">·</span><span>Unreal Engine</span><span className="sep">·</span><span>Exportar .glb</span><span className="sep">·</span><span>Exportar .fbx</span><span className="sep">·</span><span>Exportar .obj</span><span className="sep">·</span><span>Animaciones</span><span className="sep">·</span><span>Mapas para juegos</span><span className="sep">·</span><span>Texturas IA</span><span className="sep">·</span>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features-section">
        <div className="features-grid">
          <div className="feat"><span className="feat-num">01</span><span className="feat-icon">🧠</span><h3>Prompts en lenguaje natural</h3><p>Describe cualquier objeto en español o inglés y la IA lo construye en segundos, sin que sepas modelar.</p></div>
          <div className="feat"><span className="feat-num">02</span><span className="feat-icon">🔗</span><h3>Multi-plataforma</h3><p>Exporta directamente a Blender, Unity, Roblox Studio y más. Compatible con cualquier pipeline 3D.</p></div>
          <div className="feat"><span className="feat-num">03</span><span className="feat-icon">✏️</span><h3>Edición por instrucciones</h3><p>Modifica el modelo con lenguaje simple: "hazlo más delgado", "agrega textura metálica".</p></div>
          <div className="feat"><span className="feat-num">04</span><span className="feat-icon">📦</span><h3>Formatos universales</h3><p>Exporta en .obj, .fbx, .glb, .stl y más. Sin restricciones de formato ni plataforma.</p></div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="how-section">
        <div className="how-left">
          <div className="sec-label">Cómo funciona</div>
          <div className="sec-title">De texto a modelo en 3 pasos</div>
          <div className="how-steps">
            <div className="step"><div className="step-num">01</div><div><h4>Describe tu modelo</h4><p>Escribe lo que quieres generar en lenguaje natural. Tan específico o general como quieras.</p></div></div>
            <div className="step"><div className="step-num">02</div><div><h4>La IA genera el modelo</h4><p>Odiseum AI procesa tu descripción y genera un modelo 3D en segundos con geometría optimizada.</p></div></div>
            <div className="step"><div className="step-num">03</div><div><h4>Exporta y úsalo</h4><p>Descarga en el formato que necesitas y úsalo directamente en tu plataforma favorita.</p></div></div>
          </div>
        </div>
        <div className="how-right">
          <div className="demo-topbar">
            <div className="ddot r"></div><div className="ddot y"></div><div className="ddot g"></div>
            <span className="demo-bar-title">Odiseum AI — Generador 3D</span>
          </div>
          <div className="demo-chat">
            <div className="msg msg-u">Crea una espada medieval con empuñadura de cuero y hoja grabada</div>
            <div className="msg msg-a">Analizando descripción...<div className="typing"><span></span><span></span><span></span></div></div>
            <div className="msg msg-a">✓ Modelo generado — 3,240 polígonos · geometría optimizada</div>
            <div className="msg msg-u">Hazla más larga y agrégale brillo metálico en la hoja</div>
            <div className="msg msg-a">Aplicando cambios...<div className="typing"><span></span><span></span><span></span></div></div>
            <div className="msg msg-a">✓ Listo — espada_medieval_v2 lista para exportar
              <div className="export-row"><span className="exp-tag">.glb</span><span className="exp-tag">.fbx</span><span className="exp-tag">.obj</span><span className="exp-tag">.stl</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* WAITLIST */}
      <div className="waitlist-section">
        <div className="wl-left">
          <h2>Sé el primero<br />en acceder</h2>
          <p>Odiseum AI está en desarrollo. Únete a la lista de espera y te avisamos cuando esté listo para que seas de los primeros en probarlo.</p>
        </div>
        <div className="wl-right">
          <input className="wl-input" type="text" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="wl-input" type="email" placeholder="Tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="button" className="wl-btn" onClick={handleSubmit}>Unirse a la lista de espera</button>
          <p className="wl-note">Sin spam. Solo te avisamos cuando esté listo.</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="foot-logo">
          <img src="/logo.png" alt="Odiseum AI" />
          <span className="foot-logo-text">Odiseum AI</span>
        </div>
        <div className="foot-links">
          <a href="#">Características</a>
          <a href="#">Cómo funciona</a>
          <a href="#">Contacto</a>
        </div>
        <p>© 2026 Odiseum AI</p>
      </footer>
    </>
  );
}