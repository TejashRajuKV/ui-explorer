/* ─────────────────────────────────────────────
   componentCode.js
   Copy-ready HTML + CSS + Tailwind for each
   component type × design style combination
───────────────────────────────────────────── */

const codes = {
  /* ══════ BUTTON ══════ */
  button: {
    glassmorphism: {
      html: `<div class="glass-bg">
  <button class="glass-btn">Primary</button>
  <button class="glass-btn ghost">Secondary</button>
</div>`,
      css: `.glass-bg {
  display: flex;
  gap: 12px;
  padding: 32px;
  background: linear-gradient(135deg, #6c63ff, #ff6584);
  border-radius: 16px;
}

.glass-btn {
  padding: 12px 28px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.glass-btn.ghost {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.8);
}`,
      tailwind: `<div class="flex gap-3 p-8 rounded-2xl" style="background: linear-gradient(135deg, #6c63ff, #ff6584)">
  <button class="px-7 py-3 backdrop-blur-md bg-white/15 border border-white/30 rounded-xl text-white font-bold hover:bg-white/25 transition-all hover:-translate-y-0.5">
    Primary
  </button>
  <button class="px-7 py-3 backdrop-blur-md bg-white/5 border border-white/15 rounded-xl text-white/80 font-semibold hover:bg-white/15 transition-all">
    Secondary
  </button>
</div>`,
    },
    neumorphism: {
      html: `<div class="neu-bg">
  <button class="neu-btn">Click Me</button>
  <button class="neu-btn pressed">Pressed</button>
</div>`,
      css: `.neu-bg {
  display: flex;
  gap: 16px;
  padding: 32px;
  background: #e0e5ec;
  border-radius: 16px;
}

.neu-btn {
  padding: 12px 28px;
  background: #e0e5ec;
  border: none;
  border-radius: 12px;
  color: #6c63ff;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 5px 5px 12px #b8bec7, -5px -5px 12px #ffffff;
  transition: box-shadow 0.2s ease;
}

.neu-btn:hover {
  box-shadow: 7px 7px 16px #b8bec7, -7px -7px 16px #ffffff;
}

.neu-btn.pressed,
.neu-btn:active {
  box-shadow: inset 3px 3px 8px #b8bec7, inset -3px -3px 8px #ffffff;
  color: #888;
}`,
      tailwind: `<!-- Neumorphism requires custom CSS for box-shadow effects -->
<div class="flex gap-4 p-8 rounded-2xl" style="background: #e0e5ec">
  <button
    class="px-7 py-3 rounded-xl font-bold text-indigo-500"
    style="background: #e0e5ec; box-shadow: 5px 5px 12px #b8bec7, -5px -5px 12px #ffffff; border: none">
    Click Me
  </button>
  <button
    class="px-7 py-3 rounded-xl font-semibold text-gray-400"
    style="background: #e0e5ec; box-shadow: inset 3px 3px 8px #b8bec7, inset -3px -3px 8px #ffffff; border: none">
    Pressed
  </button>
</div>`,
    },
    minimalism: {
      html: `<div class="min-wrap">
  <button class="min-btn primary">Primary</button>
  <button class="min-btn outline">Secondary</button>
  <button class="min-btn ghost">Ghost</button>
</div>`,
      css: `.min-wrap {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 28px;
  background: #fff;
}

.min-btn {
  padding: 11px 26px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;
  font-family: inherit;
  letter-spacing: -0.01em;
}

.min-btn.primary {
  background: #111;
  color: #fff;
  border: none;
  border-radius: 4px;
}

.min-btn.outline {
  background: transparent;
  color: #111;
  border: 1.5px solid #111;
  border-radius: 4px;
}

.min-btn.ghost {
  background: transparent;
  color: #111;
  border: none;
  text-decoration: underline;
  text-underline-offset: 4px;
  padding-left: 0;
  padding-right: 0;
}

.min-btn:hover { opacity: 0.75; }`,
      tailwind: `<div class="flex items-center gap-3 p-7 bg-white">
  <button class="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded hover:opacity-75 transition-opacity">
    Primary
  </button>
  <button class="px-6 py-2.5 bg-transparent text-gray-900 text-sm font-semibold border border-gray-900 rounded hover:opacity-75 transition-opacity">
    Secondary
  </button>
  <button class="py-2.5 bg-transparent text-gray-900 text-sm font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity">
    Ghost
  </button>
</div>`,
    },
    brutalism: {
      html: `<div class="brut-wrap">
  <button class="brut-btn primary">CLICK</button>
  <button class="brut-btn secondary">SUBMIT</button>
</div>`,
      css: `.brut-wrap {
  display: flex;
  gap: 12px;
  padding: 24px;
  background: #f5f500;
}

.brut-btn {
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 900;
  font-family: monospace;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.brut-btn.primary {
  background: #000;
  color: #f5f500;
  border: 3px solid #000;
  box-shadow: 4px 4px 0 #000;
}

.brut-btn.secondary {
  background: #fff;
  color: #000;
  border: 3px solid #000;
  box-shadow: 4px 4px 0 #000;
}

.brut-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #000;
}

.brut-btn:active {
  transform: translate(4px, 4px);
  box-shadow: 0 0 0 #000;
}`,
      tailwind: `<!-- Brutalism requires border-shadow effects not in default Tailwind -->
<div class="flex gap-3 p-6" style="background: #f5f500">
  <button class="px-6 py-3 bg-black text-yellow-300 font-black font-mono tracking-widest uppercase border-4 border-black" style="box-shadow: 4px 4px 0 #000">
    CLICK
  </button>
  <button class="px-6 py-3 bg-white text-black font-black font-mono tracking-widest uppercase border-4 border-black" style="box-shadow: 4px 4px 0 #000">
    SUBMIT
  </button>
</div>`,
    },
    cyberpunk: {
      html: `<div class="cyber-wrap">
  <button class="cyber-btn primary">ENGAGE</button>
  <button class="cyber-btn secondary">ABORT</button>
</div>`,
      css: `.cyber-wrap {
  display: flex;
  gap: 14px;
  padding: 24px;
  background: #050510;
}

.cyber-btn {
  padding: 11px 24px;
  font-size: 13px;
  font-weight: 700;
  font-family: monospace;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cyber-btn.primary {
  background: transparent;
  color: #00ffff;
  border: 1px solid #00ffff;
  box-shadow: 0 0 12px rgba(0,255,255,0.3), inset 0 0 12px rgba(0,255,255,0.05);
  text-shadow: 0 0 8px #00ffff;
}

.cyber-btn.primary:hover {
  background: rgba(0,255,255,0.1);
  box-shadow: 0 0 20px rgba(0,255,255,0.5), inset 0 0 20px rgba(0,255,255,0.1);
}

.cyber-btn.secondary {
  background: rgba(255,0,255,0.1);
  color: #ff00ff;
  border: 1px solid #ff00ff;
  box-shadow: 0 0 12px rgba(255,0,255,0.2);
}`,
      tailwind: `<!-- Cyberpunk needs custom glow effects -->
<div class="flex gap-3 p-6" style="background: #050510">
  <button class="px-6 py-2.5 bg-transparent text-cyan-400 font-bold font-mono tracking-[3px] uppercase text-sm border border-cyan-400"
    style="box-shadow: 0 0 12px rgba(0,255,255,0.3); text-shadow: 0 0 8px #00ffff">
    ENGAGE
  </button>
  <button class="px-6 py-2.5 font-bold font-mono tracking-[3px] uppercase text-sm border border-fuchsia-400 text-fuchsia-400"
    style="background: rgba(255,0,255,0.1); box-shadow: 0 0 12px rgba(255,0,255,0.2)">
    ABORT
  </button>
</div>`,
    },
    'dark-ui': {
      html: `<div class="dark-wrap">
  <button class="dark-btn primary">Explore</button>
  <button class="dark-btn secondary">Cancel</button>
</div>`,
      css: `.dark-wrap {
  display: flex;
  gap: 12px;
  padding: 28px;
  background: #0a0a0f;
  border-radius: 16px;
}

.dark-btn {
  padding: 11px 26px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.dark-btn.primary {
  background: linear-gradient(135deg, #6c63ff, #9b5de5);
  color: #fff;
  border: none;
  box-shadow: 0 0 20px rgba(108, 99, 255, 0.35);
}

.dark-btn.primary:hover {
  box-shadow: 0 0 30px rgba(108, 99, 255, 0.55);
  transform: translateY(-2px);
}

.dark-btn.secondary {
  background: #1a1a2e;
  color: rgba(255,255,255,0.7);
  border: 1px solid rgba(255,255,255,0.1);
}

.dark-btn.secondary:hover {
  border-color: rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.9);
}`,
      tailwind: `<div class="flex gap-3 p-7 rounded-2xl" style="background: #0a0a0f">
  <button class="px-6 py-2.5 text-white font-bold rounded-xl border-0 transition-all hover:-translate-y-0.5"
    style="background: linear-gradient(135deg, #6c63ff, #9b5de5); box-shadow: 0 0 20px rgba(108,99,255,0.35)">
    Explore
  </button>
  <button class="px-6 py-2.5 font-semibold rounded-xl border border-white/10 text-white/70 hover:border-white/20 hover:text-white/90 transition-all"
    style="background: #1a1a2e">
    Cancel
  </button>
</div>`,
    },
    'gradient-ui': {
      html: `<div class="grad-wrap">
  <button class="grad-btn primary">Discover →</button>
  <button class="grad-btn white">Sign Up</button>
</div>`,
      css: `.grad-wrap {
  display: flex;
  gap: 12px;
  padding: 28px;
  background: linear-gradient(135deg, #6c63ff, #ff6584, #43e97b);
  border-radius: 16px;
}

.grad-btn {
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 800;
  border-radius: 12px;
  cursor: pointer;
  letter-spacing: 0.02em;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-family: inherit;
}

.grad-btn.primary {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 2px solid rgba(255,255,255,0.4);
  color: #fff;
}

.grad-btn.primary:hover {
  background: rgba(255,255,255,0.25);
  transform: translateY(-2px);
}

.grad-btn.white {
  background: #fff;
  color: #6c63ff;
  border: none;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.grad-btn.white:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.2);
}`,
      tailwind: `<div class="flex gap-3 p-7 rounded-2xl" style="background: linear-gradient(135deg, #6c63ff, #ff6584, #43e97b)">
  <button class="px-7 py-3 backdrop-blur-md bg-white/15 border-2 border-white/40 rounded-xl text-white font-extrabold hover:bg-white/25 transition-all hover:-translate-y-0.5">
    Discover →
  </button>
  <button class="px-7 py-3 bg-white text-indigo-500 font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
    Sign Up
  </button>
</div>`,
    },
  },

  /* ══════ CARD ══════ */
  card: {
    glassmorphism: {
      html: `<div class="glass-scene">
  <div class="glass-card">
    <div class="card-img"></div>
    <div class="card-body">
      <h3>Card Title</h3>
      <p>A beautiful glassmorphic card with frosted glass effect.</p>
      <button class="card-btn">View Details</button>
    </div>
  </div>
</div>`,
      css: `.glass-scene {
  background: linear-gradient(135deg, #6c63ff, #ff6584);
  padding: 32px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
}

.glass-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  overflow: hidden;
  width: 280px;
  transition: transform 0.3s ease;
}

.glass-card:hover { transform: translateY(-6px); }

.card-img {
  height: 160px;
  background: rgba(255, 255, 255, 0.1);
}

.card-body { padding: 20px; }

.card-body h3 {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-body p {
  color: rgba(255,255,255,0.7);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.card-btn {
  width: 100%;
  padding: 10px;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.35);
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}`,
      tailwind: `<div class="p-8 rounded-2xl flex justify-center" style="background: linear-gradient(135deg, #6c63ff, #ff6584)">
  <div class="w-72 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/12 border border-white/25 hover:-translate-y-1.5 transition-transform">
    <div class="h-40 bg-white/10"></div>
    <div class="p-5">
      <h3 class="text-white text-lg font-bold mb-2">Card Title</h3>
      <p class="text-white/70 text-sm leading-relaxed mb-4">A beautiful glassmorphic card with frosted glass effect.</p>
      <button class="w-full py-2.5 bg-white/20 border border-white/35 rounded-xl text-white font-semibold">View Details</button>
    </div>
  </div>
</div>`,
    },
    'dark-ui': {
      html: `<div class="dark-scene">
  <div class="dark-card">
    <div class="card-img"></div>
    <div class="card-body">
      <h3>Card Title</h3>
      <p>A sleek dark UI card for modern applications.</p>
      <button class="card-btn">Explore</button>
    </div>
  </div>
</div>`,
      css: `.dark-scene {
  background: #0a0a0f;
  padding: 28px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
}

.dark-card {
  background: #1a1a2e;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  overflow: hidden;
  width: 280px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.dark-card:hover {
  border-color: rgba(108, 99, 255, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 0 24px rgba(108, 99, 255, 0.12);
}

.card-img {
  height: 150px;
  background: linear-gradient(135deg, rgba(108,99,255,0.25), rgba(255,101,132,0.15));
}

.card-body { padding: 18px; }

.card-body h3 {
  color: rgba(255,255,255,0.9);
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-body p {
  color: rgba(255,255,255,0.4);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.card-btn {
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #6c63ff, #9b5de5);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 16px rgba(108,99,255,0.3);
}`,
      tailwind: `<div class="p-7 rounded-2xl flex justify-center" style="background: #0a0a0f">
  <div class="w-72 rounded-2xl overflow-hidden border border-white/[0.07] hover:border-indigo-500/40 hover:-translate-y-1 transition-all group" style="background: #1a1a2e">
    <div class="h-36" style="background: linear-gradient(135deg, rgba(108,99,255,0.25), rgba(255,101,132,0.15))"></div>
    <div class="p-4.5">
      <h3 class="text-white/90 text-lg font-bold mb-2">Card Title</h3>
      <p class="text-white/40 text-sm leading-relaxed mb-4">A sleek dark UI card for modern applications.</p>
      <button class="w-full py-2.5 text-white font-bold rounded-lg border-0" style="background: linear-gradient(135deg, #6c63ff, #9b5de5)">Explore</button>
    </div>
  </div>
</div>`,
    },
  },

  /* ══════ MODAL ══════ */
  modal: {
    glassmorphism: {
      html: `<!-- Overlay -->
<div class="modal-overlay">
  <div class="glass-modal">
    <div class="modal-header">
      <h2>Confirm Action</h2>
      <button class="close-btn">×</button>
    </div>
    <p>Are you sure you want to proceed? This action cannot be undone.</p>
    <div class="modal-actions">
      <button class="btn-cancel">Cancel</button>
      <button class="btn-confirm">Confirm</button>
    </div>
  </div>
</div>`,
      css: `.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(108, 99, 255, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.glass-modal {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 32px;
  width: 380px;
  max-width: 90vw;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.modal-header h2 { color: #fff; font-size: 20px; font-weight: 700; }

.close-btn {
  width: 28px; height: 28px;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.4);
  background: transparent;
  color: rgba(255,255,255,0.6);
  font-size: 18px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}

.glass-modal p { color: rgba(255,255,255,0.7); font-size: 15px; line-height: 1.6; margin-bottom: 24px; }

.modal-actions { display: flex; gap: 12px; }

.btn-cancel, .btn-confirm {
  flex: 1; padding: 12px;
  border-radius: 12px;
  font-weight: 600; font-size: 14px; cursor: pointer;
}

.btn-cancel {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.8);
}

.btn-confirm {
  background: rgba(255,255,255,0.25);
  border: 1px solid rgba(255,255,255,0.4);
  color: #fff;
}`,
      tailwind: `<div class="fixed inset-0 flex items-center justify-center z-50" style="background: rgba(108,99,255,0.5); backdrop-filter: blur(4px)">
  <div class="w-96 max-w-[90vw] p-8 rounded-3xl backdrop-blur-2xl bg-white/15 border border-white/30">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-white text-xl font-bold">Confirm Action</h2>
      <button class="w-7 h-7 rounded-full border border-white/40 text-white/60 flex items-center justify-center">×</button>
    </div>
    <p class="text-white/70 text-sm leading-relaxed mb-6">Are you sure you want to proceed?</p>
    <div class="flex gap-3">
      <button class="flex-1 py-3 rounded-xl bg-white/10 border border-white/20 text-white/80 font-semibold">Cancel</button>
      <button class="flex-1 py-3 rounded-xl bg-white/25 border border-white/40 text-white font-bold">Confirm</button>
    </div>
  </div>
</div>`,
    },
    'dark-ui': {
      html: `<div class="modal-overlay">
  <div class="dark-modal">
    <div class="modal-header">
      <h2>Confirm Action</h2>
      <button class="close-btn">×</button>
    </div>
    <p>Are you sure you want to proceed?</p>
    <div class="modal-actions">
      <button class="btn-cancel">Cancel</button>
      <button class="btn-confirm">Confirm</button>
    </div>
  </div>
</div>`,
      css: `.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,10,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.dark-modal {
  background: #1a1a2e;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 32px;
  width: 380px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(108,99,255,0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.modal-header h2 { color: rgba(255,255,255,0.9); font-size: 20px; font-weight: 700; }

.close-btn {
  width: 28px; height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  background: transparent;
  color: rgba(255,255,255,0.4);
  cursor: pointer;
}

.dark-modal p { color: rgba(255,255,255,0.45); font-size: 15px; line-height: 1.6; margin-bottom: 24px; }

.modal-actions { display: flex; gap: 12px; }
.btn-cancel, .btn-confirm { flex: 1; padding: 12px; border-radius: 10px; font-weight: 700; cursor: pointer; }

.btn-cancel { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); }
.btn-confirm { background: linear-gradient(135deg, #6c63ff, #9b5de5); border: none; color: #fff; box-shadow: 0 0 16px rgba(108,99,255,0.3); }`,
      tailwind: `<div class="fixed inset-0 flex items-center justify-center z-50" style="background: rgba(0,0,10,0.8)">
  <div class="w-96 p-8 rounded-2xl border border-white/10" style="background: #1a1a2e; box-shadow: 0 24px 64px rgba(0,0,0,0.6)">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-white/90 text-xl font-bold">Confirm Action</h2>
      <button class="w-7 h-7 rounded-full border border-white/15 text-white/40">×</button>
    </div>
    <p class="text-white/45 text-sm leading-relaxed mb-6">Are you sure you want to proceed?</p>
    <div class="flex gap-3">
      <button class="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-white/50 font-bold">Cancel</button>
      <button class="flex-1 py-3 rounded-xl text-white font-bold border-0" style="background: linear-gradient(135deg, #6c63ff, #9b5de5)">Confirm</button>
    </div>
  </div>
</div>`,
    },
  },
}

/* Fallback for combinations not explicitly defined */
const fallback = {
  html: `<!-- HTML structure for this component -->
<div class="component-wrapper">
  <div class="component">
    <!-- Component content here -->
  </div>
</div>`,
  css: `/* CSS styles for this component */
.component-wrapper {
  /* Container styles */
}
.component {
  /* Component-specific styles */
}`,
  tailwind: `<!-- Tailwind CSS version -->
<div class="...">
  <!-- Component content -->
</div>`,
}

const badgeStyleMap = {
  glassmorphism: { bg: 'linear-gradient(135deg,#6c63ff,#ff6584)', pillBg: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', radius: 100, shadow: 'none', font: 'inherit' },
  neumorphism: { bg: '#e0e5ec', pillBg: '#e0e5ec', border: 'none', shadow: '3px 3px 6px #b8bec7,-3px -3px 6px #ffffff', color: '#6c63ff', radius: 12, font: 'inherit' },
  minimalism: { bg: '#fff', pillBg: '#111', border: '1px solid #111', color: '#fff', radius: 0, shadow: 'none', font: 'inherit' },
  brutalism: { bg: '#f5f500', pillBg: '#fff', border: '2px solid #000', color: '#000', shadow: '2px 2px 0 #000', radius: 0, font: 'monospace', textTransform: 'uppercase' },
  'material-design': { bg: '#f5f5f5', pillBg: '#6200ee', border: 'none', shadow: '0 2px 4px rgba(0,0,0,0.2)', color: '#fff', radius: 16, font: 'inherit' },
  'fluent-design': { bg: 'linear-gradient(135deg,#0078d4,#005a9e)', pillBg: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', shadow: '0 4px 12px rgba(0,0,0,0.1)', color: '#fff', radius: 4, font: 'inherit' },
  'bento-ui': { bg: '#0f0f1a', pillBg: 'linear-gradient(135deg,#6c63ff,#ff6584)', border: 'none', color: '#fff', radius: 8, shadow: 'none', font: 'inherit' },
  claymorphism: { bg: '#f0f4ff', pillBg: '#a8d8ea', border: 'none', shadow: '4px 4px 8px #d0d8ea,-4px -4px 8px #ffffff,inset 2px 2px 4px rgba(255,255,255,0.6)', color: '#1a5276', radius: 16, font: 'inherit' },
  skeuomorphism: { bg: '#8B6914', pillBg: 'linear-gradient(180deg,#d4a017,#b8860b)', border: '1px solid #8b4513', shadow: 'inset 0 1px 0 rgba(255,255,255,0.4),0 2px 4px rgba(0,0,0,0.4)', color: '#fff9e6', radius: 4, font: 'inherit' },
  cyberpunk: { bg: '#050510', pillBg: 'transparent', border: '1px solid #00ffff', shadow: '0 0 8px rgba(0,255,255,0.4),inset 0 0 8px rgba(0,255,255,0.2)', color: '#00ffff', radius: 0, font: 'monospace', textTransform: 'uppercase' },
  retro: { bg: '#1a0a00', pillBg: '#ff6b35', border: '2px solid #ff9d4d', shadow: '2px 2px 0 #ff9d4d', color: '#1a0a00', radius: 0, font: 'monospace', textTransform: 'uppercase' },
  'dark-ui': { bg: '#0a0a0f', pillBg: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', shadow: '0 4px 12px rgba(0,0,0,0.3)', color: '#fff', radius: 100, font: 'inherit' },
  'light-ui': { bg: '#f8f9ff', pillBg: '#3f51b5', border: 'none', shadow: '0 2px 8px rgba(63,81,181,0.25)', color: '#fff', radius: 100, font: 'inherit' },
  'gradient-ui': { bg: 'linear-gradient(135deg,#6c63ff,#ff6584)', pillBg: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', shadow: '0 4px 12px rgba(0,0,0,0.1)', color: '#fff', radius: 100, font: 'inherit' },
}

function generateBadgeCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  return {
    html: `<div class="badge-container">
  <div class="badge active">Active</div>
  <div class="badge pending">Pending</div>
</div>`,
    css: `.badge-container {
  display: flex;
  gap: 12px;
  padding: 24px;
  background: ${s.bg};
  border-radius: 12px;
}
.badge {
  padding: 4px 12px;
  background: ${s.pillBg};
  border: ${s.border};
  border-radius: ${s.radius}px;
  color: ${s.color};
  box-shadow: ${s.shadow};
  font-family: ${s.font};
  font-size: 12px;
  font-weight: 700;
${s.textTransform ? `  text-transform: ${s.textTransform};\n` : ''}${s.bg.includes('gradient') ? `  backdrop-filter: blur(8px);\n` : ''}}
.badge.pending {
  opacity: 0.6;
}`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Badge -->
<div class="flex gap-3 p-6 rounded-xl" style="background: ${s.bg}">
  <div class="px-3 py-1 text-xs font-bold" style="background: ${s.pillBg}; border: ${s.border}; border-radius: ${s.radius}px; color: ${s.color}; box-shadow: ${s.shadow}; font-family: ${s.font};">Active</div>
  <div class="px-3 py-1 text-xs font-bold opacity-60" style="background: ${s.pillBg}; border: ${s.border}; border-radius: ${s.radius}px; color: ${s.color}; box-shadow: ${s.shadow}; font-family: ${s.font};">Pending</div>
</div>`
  }
}

function generateToggleCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const trackBgActive = s.pillBg;
  const trackBgInactive = styleId==='minimalism'?'#fff':(styleId==='brutalism'?'#fff':'rgba(128,128,128,0.3)');
  const trackBorder = styleId==='minimalism'?'1px solid #111':(styleId==='brutalism'?'2px solid #000':s.border);
  const trackShadow = styleId==='brutalism'?'2px 2px 0 #000':(styleId==='retro'?'2px 2px 0 #ff9d4d':'none');
  const knobBgActive = styleId==='minimalism'?'#fff':(styleId==='brutalism'?'#000':s.color);
  const knobBgInactive = styleId==='minimalism'?'#111':(styleId==='brutalism'?'#000':'#fff');

  return {
    html: `<div class="toggle-container">
  <!-- Active Toggle -->
  <label class="toggle-switch">
    <input type="checkbox" checked />
    <span class="track">
      <span class="knob"></span>
    </span>
    <span class="label-text">On</span>
  </label>
</div>`,
    css: `.toggle-container {
  padding: 32px;
  background: ${s.bg};
  border-radius: 12px;
}
.toggle-switch {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}
.toggle-switch input {
  display: none;
}
.track {
  width: 44px;
  height: 24px;
  border-radius: ${s.radius===0?0:24}px;
  background: ${trackBgInactive};
  border: ${trackBorder};
  box-shadow: ${trackShadow};
  position: relative;
  display: flex;
  align-items: center;
  padding: 2px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}
.knob {
  width: 18px;
  height: 18px;
  border-radius: ${s.radius===0?0:18}px;
  background: ${knobBgInactive};
  transform: translateX(0px);
  transition: transform 0.3s ease;
}
.label-text {
  font-size: 14px;
  font-weight: 600;
  color: ${s.bg==='#fff'||s.bg==='#f5f5f5'||s.bg==='#e0e5ec'||s.bg==='#f5f500'||s.bg==='#f0f4ff'||s.bg==='#f8f9ff' ? '#111' : '#fff'};
  font-family: ${s.font};
}

/* Checked State */
.toggle-switch input:checked + .track {
  background: ${trackBgActive};
  border: ${s.border};
  box-shadow: ${s.shadow};
}
.toggle-switch input:checked + .track .knob {
  background: ${knobBgActive};
  transform: translateX(20px);
}`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Toggle -->
<div class="p-8 rounded-xl" style="background: ${s.bg}">
  <label class="flex items-center gap-3 cursor-pointer group">
    <input type="checkbox" class="hidden peer" checked />
    <div class="w-11 h-6 flex items-center p-0.5 box-border transition-all" 
         style="border-radius: ${s.radius===0?0:24}px; background: ${trackBgActive}; border: ${s.border};">
      <div class="w-[18px] h-[18px] transition-transform translate-x-[20px]" 
           style="border-radius: ${s.radius===0?0:18}px; background: ${knobBgActive};"></div>
    </div>
    <span class="text-sm font-semibold" style="color: ${s.bg==='#fff'||s.bg==='#f5f5f5'||s.bg==='#e0e5ec'||s.bg==='#f5f500'||s.bg==='#f0f4ff'||s.bg==='#f8f9ff' ? '#111' : '#fff'}">On</span>
  </label>
</div>`
  }
}

function generateAvatarCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism;
  const avatarBorder = styleId==='minimalism'?'2px solid #111':(styleId==='brutalism'?'3px solid #000':(s.border!=='none'?s.border:'2px solid '+s.pillBg));
  const avatarShadow = styleId==='brutalism'?'4px 4px 0 #000':(styleId==='retro'?'4px 4px 0 #ff9d4d':s.shadow);
  const statusBorder = `3px solid ${s.bg.includes('gradient')?'rgba(0,0,0,0.2)':(s.bg==='#1a0a00'?'#1a0a00':s.bg)}`;

  return {
    html: `<div class="avatar-container">
  <div class="avatar">
    JD
    <div class="status-indicator"></div>
  </div>
  
  <!-- Avatar Group -->
  <div class="avatar-group">
    <div class="avatar-item z-3">AB</div>
    <div class="avatar-item z-2">CD</div>
    <div class="avatar-item z-1">EF</div>
  </div>
</div>`,
    css: `.avatar-container {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 32px;
  background: ${s.bg};
  border-radius: 12px;
}
.avatar {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: ${s.radius===0?0:64}px;
  border: ${avatarBorder};
  box-shadow: ${avatarShadow};
  background: ${s.pillBg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${s.color};
  font-size: 20px;
  font-weight: 700;
  font-family: ${s.font};
}
.status-indicator {
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 18px;
  height: 18px;
  border-radius: ${s.radius===0?0:18}px;
  background: #10b981;
  border: ${statusBorder};
}
.avatar-group {
  display: flex;
}
.avatar-item {
  width: 48px;
  height: 48px;
  border-radius: ${s.radius===0?0:48}px;
  border: ${avatarBorder};
  box-shadow: ${s.shadow};
  background: ${s.pillBg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${s.color};
  font-size: 14px;
  font-weight: 700;
  font-family: ${s.font};
  position: relative;
}
.avatar-item + .avatar-item {
  margin-left: -16px;
}
.z-3 { z-index: 3; }
.z-2 { z-index: 2; }
.z-1 { z-index: 1; }`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Avatar -->
<div class="p-8 rounded-xl flex items-center gap-8" style="background: ${s.bg}">
  <div class="relative w-16 h-16 flex items-center justify-center font-bold text-xl"
       style="border-radius: ${s.radius===0?0:64}px; border: ${avatarBorder}; box-shadow: ${avatarShadow}; background: ${s.pillBg}; color: ${s.color}; font-family: ${s.font};">
    JD
    <div class="absolute -bottom-1 -right-1 w-[18px] h-[18px] bg-emerald-500"
         style="border-radius: ${s.radius===0?0:18}px; border: ${statusBorder};"></div>
  </div>
</div>`
  }
}

function generateProgressCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism;
  const trackHeight = styleId==='minimalism'||styleId==='brutalism'?16:8;
  const trackBg = styleId==='minimalism'?'#fff':(styleId==='brutalism'?'#fff':'rgba(128,128,128,0.2)');
  const trackBorder = styleId==='minimalism'?'1px solid #111':(styleId==='brutalism'?'2px solid #000':s.border);
  const trackShadow = styleId==='brutalism'?'2px 2px 0 #000':(styleId==='retro'?'2px 2px 0 #ff9d4d':'none');
  const barBg = styleId==='minimalism'?'#111':(styleId==='brutalism'?'#000':(s.color==='#fff'?s.pillBg:s.color));
  const textColor = s.bg==='#fff'||s.bg==='#f5f5f5'||s.bg==='#e0e5ec'||s.bg==='#f5f500'||s.bg==='#f0f4ff'||s.bg==='#f8f9ff' ? '#111' : '#fff';

  return {
    html: `<div class="progress-container">
  <div class="progress-wrapper">
    <div class="progress-header">
      <span>Loading...</span>
      <span>65%</span>
    </div>
    <div class="progress-track">
      <div class="progress-bar"></div>
    </div>
  </div>
</div>`,
    css: `.progress-container {
  display: flex;
  justify-content: center;
  padding: 40px;
  background: ${s.bg};
  border-radius: 12px;
}
.progress-wrapper {
  width: 100%;
  max-width: 300px;
}
.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: ${textColor};
  font-size: 14px;
  font-weight: 600;
  font-family: ${s.font};
}
.progress-track {
  width: 100%;
  height: ${trackHeight}px;
  border-radius: ${s.radius===0?0:8}px;
  background: ${trackBg};
  border: ${trackBorder};
  box-shadow: ${trackShadow};
  overflow: hidden;
}
.progress-bar {
  width: 65%;
  height: 100%;
  background: ${barBg};
  border-radius: ${s.radius===0?0:8}px;
  transition: width 1s ease-in-out;
}`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Progress -->
<div class="p-10 flex justify-center rounded-xl" style="background: ${s.bg}">
  <div class="w-full max-w-[300px]">
    <div class="flex justify-between mb-2 text-sm font-semibold" style="color: ${textColor}; font-family: ${s.font};">
      <span>Loading...</span>
      <span>65%</span>
    </div>
    <div class="w-full overflow-hidden" 
         style="height: ${trackHeight}px; border-radius: ${s.radius===0?0:8}px; background: ${trackBg}; border: ${trackBorder}; box-shadow: ${trackShadow};">
      <div class="h-full w-[65%] transition-all duration-1000 ease-in-out" 
           style="background: ${barBg}; border-radius: ${s.radius===0?0:8}px;"></div>
    </div>
  </div>
</div>`
  }
}

/* ══════════════════════════════════════════════════
   NEW COMPONENT GENERATORS
══════════════════════════════════════════════════ */

/* ── TOAST ── */
function generateToastCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const isDark = ['glassmorphism','bento-ui','dark-ui','cyberpunk','retro','gradient-ui','fluent-design','skeuomorphism'].includes(styleId)
  const textColor = isDark ? '#fff' : (styleId === 'minimalism' ? '#111' : styleId === 'brutalism' ? '#000' : '#111')
  const subColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)'
  const toastBg = styleId === 'glassmorphism' ? 'rgba(255,255,255,0.15)' :
    styleId === 'neumorphism' ? '#e0e5ec' :
    styleId === 'minimalism' ? '#fff' :
    styleId === 'brutalism' ? '#fff' :
    styleId === 'material-design' ? '#323232' :
    styleId === 'fluent-design' ? 'rgba(255,255,255,0.1)' :
    styleId === 'bento-ui' ? '#1a1a2e' :
    styleId === 'claymorphism' ? '#fff' :
    styleId === 'skeuomorphism' ? 'linear-gradient(180deg,#3a3a3a,#2a2a2a)' :
    styleId === 'cyberpunk' ? '#050510' :
    styleId === 'retro' ? '#1a0a00' :
    styleId === 'dark-ui' ? '#1a1a2e' :
    styleId === 'light-ui' ? '#fff' :
    'rgba(255,255,255,0.2)'
  const toastBorder = styleId === 'brutalism' ? '3px solid #000' :
    styleId === 'cyberpunk' ? '1px solid #00ffff' :
    styleId === 'retro' ? '2px solid #ff9d4d' :
    styleId === 'minimalism' ? '1px solid #111' :
    styleId === 'neumorphism' ? 'none' :
    s.border
  const toastShadow = styleId === 'neumorphism' ? '4px 4px 10px #b8bec7,-4px -4px 10px #ffffff' :
    styleId === 'brutalism' ? '4px 4px 0 #000' :
    styleId === 'cyberpunk' ? '0 0 16px rgba(0,255,255,0.3)' :
    styleId === 'retro' ? '4px 4px 0 #ff9d4d' :
    styleId === 'claymorphism' ? '6px 6px 12px #d0d8ea,-4px -4px 10px #fff,inset 2px 2px 6px rgba(255,255,255,0.6)' :
    '0 8px 32px rgba(0,0,0,0.2)'
  const radius = styleId === 'brutalism' || styleId === 'cyberpunk' || styleId === 'retro' ? 0 :
    styleId === 'minimalism' ? 4 :
    styleId === 'neumorphism' ? 12 : 12
  const iconColor = styleId === 'cyberpunk' ? '#00ffff' :
    styleId === 'retro' ? '#ff6b35' :
    styleId === 'brutalism' ? '#000' :
    styleId === 'material-design' ? '#4caf50' : '#4caf50'
  const fontFamily = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'monospace' : 'inherit'
  const textUp = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'uppercase' : 'none'

  return {
    html: `<div class="toast-scene">
  <!-- Success Toast -->
  <div class="toast toast-success">
    <span class="toast-icon">✓</span>
    <div class="toast-body">
      <p class="toast-title">Success!</p>
      <p class="toast-sub">Your changes have been saved.</p>
    </div>
    <button class="toast-close">×</button>
  </div>
  <!-- Info Toast -->
  <div class="toast toast-info">
    <span class="toast-icon" style="color:#3b82f6">ℹ</span>
    <div class="toast-body">
      <p class="toast-title">Update available</p>
      <p class="toast-sub">A new version is ready to install.</p>
    </div>
    <button class="toast-close">×</button>
  </div>
</div>`,
    css: `.toast-scene {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  background: ${s.bg};
  border-radius: 16px;
}
.toast {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  background: ${toastBg};
  border: ${toastBorder};
  border-radius: ${radius}px;
  box-shadow: ${toastShadow};
  font-family: ${fontFamily};
  min-width: 280px;
  ${styleId === 'glassmorphism' || styleId === 'fluent-design' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(16px);' : ''}
}
.toast-icon {
  font-size: 18px;
  font-weight: 900;
  color: ${iconColor};
  flex-shrink: 0;
}
.toast-body { flex: 1; }
.toast-title {
  color: ${textColor};
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 3px;
  text-transform: ${textUp};
}
.toast-sub {
  color: ${subColor};
  font-size: 12px;
  margin: 0;
}
.toast-close {
  color: ${subColor};
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  flex-shrink: 0;
}`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Toast -->
<div class="flex flex-col gap-3 p-7 rounded-2xl" style="background: ${s.bg}">
  <div class="flex items-start gap-3 p-4 min-w-[280px]" style="background: ${toastBg}; border: ${toastBorder}; border-radius: ${radius}px; box-shadow: ${toastShadow}; font-family: ${fontFamily}; ${styleId === 'glassmorphism' ? 'backdrop-filter: blur(16px);' : ''}">
    <span class="text-lg font-black flex-shrink-0" style="color: ${iconColor}">✓</span>
    <div class="flex-1">
      <p class="text-sm font-bold m-0 mb-0.5" style="color: ${textColor}; text-transform: ${textUp}">Success!</p>
      <p class="text-xs m-0" style="color: ${subColor}">Your changes have been saved.</p>
    </div>
    <button class="bg-transparent border-none text-lg cursor-pointer p-0 leading-none flex-shrink-0" style="color: ${subColor}">×</button>
  </div>
  <div class="flex items-start gap-3 p-4 min-w-[280px]" style="background: ${toastBg}; border: ${toastBorder}; border-radius: ${radius}px; box-shadow: ${toastShadow}; font-family: ${fontFamily};">
    <span class="text-lg font-black flex-shrink-0" style="color: #3b82f6">ℹ</span>
    <div class="flex-1">
      <p class="text-sm font-bold m-0 mb-0.5" style="color: ${textColor}; text-transform: ${textUp}">Update available</p>
      <p class="text-xs m-0" style="color: ${subColor}">A new version is ready to install.</p>
    </div>
    <button class="bg-transparent border-none text-lg cursor-pointer p-0 leading-none flex-shrink-0" style="color: ${subColor}">×</button>
  </div>
</div>`
  }
}

/* ── TOOLTIP ── */
function generateTooltipCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const isDark = ['glassmorphism','bento-ui','dark-ui','cyberpunk','retro','gradient-ui','fluent-design','skeuomorphism'].includes(styleId)
  const textColor = isDark ? '#fff' : (styleId === 'minimalism' || styleId === 'light-ui' ? '#111' : styleId === 'brutalism' ? '#000' : '#111')
  const tipBg = styleId === 'glassmorphism' ? 'rgba(0,0,0,0.75)' :
    styleId === 'neumorphism' ? '#e0e5ec' :
    styleId === 'minimalism' ? '#111' :
    styleId === 'brutalism' ? '#000' :
    styleId === 'material-design' ? '#323232' :
    styleId === 'fluent-design' ? 'rgba(0,0,0,0.8)' :
    styleId === 'bento-ui' ? '#0f0f1a' :
    styleId === 'claymorphism' ? '#a8d8ea' :
    styleId === 'skeuomorphism' ? 'linear-gradient(180deg,#3a3a3a,#2a2a2a)' :
    styleId === 'cyberpunk' ? '#050510' :
    styleId === 'retro' ? '#1a0a00' :
    styleId === 'dark-ui' ? '#0d0d1a' :
    styleId === 'light-ui' ? '#1a1a2e' :
    'rgba(0,0,0,0.8)'
  const tipText = ['neumorphism','claymorphism'].includes(styleId) ? '#1a5276' :
    ['minimalism'].includes(styleId) ? '#fff' : '#fff'
  const tipBorder = styleId === 'brutalism' ? '2px solid #f5f500' :
    styleId === 'cyberpunk' ? '1px solid #00ffff' :
    styleId === 'retro' ? '2px solid #ff9d4d' :
    styleId === 'neumorphism' ? 'none' : 'none'
  const tipShadow = styleId === 'neumorphism' ? '4px 4px 8px #b8bec7,-4px -4px 8px #fff' :
    styleId === 'cyberpunk' ? '0 0 12px rgba(0,255,255,0.5)' :
    styleId === 'brutalism' ? '3px 3px 0 #f5f500' :
    styleId === 'retro' ? '3px 3px 0 #ff9d4d' : '0 4px 12px rgba(0,0,0,0.3)'
  const radius = styleId === 'brutalism' || styleId === 'cyberpunk' || styleId === 'retro' ? 0 :
    styleId === 'minimalism' ? 2 : styleId === 'neumorphism' ? 10 : 8
  const btnBg = s.pillBg
  const btnColor = s.color
  const fontFamily = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'monospace' : 'inherit'

  return {
    html: `<div class="tooltip-scene">
  <!-- Tooltip Above -->
  <div class="tooltip-wrap">
    <button class="tooltip-trigger">Hover Me</button>
    <div class="tooltip-box top">
      Helpful info goes here
      <span class="tooltip-arrow top-arrow"></span>
    </div>
  </div>
  <!-- Tooltip Right -->
  <div class="tooltip-wrap">
    <button class="tooltip-trigger">More Info</button>
    <div class="tooltip-box right">
      Side tooltip example
      <span class="tooltip-arrow right-arrow"></span>
    </div>
  </div>
</div>`,
    css: `.tooltip-scene {
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
  background: ${s.bg};
  border-radius: 16px;
  flex-wrap: wrap;
}
.tooltip-wrap {
  position: relative;
  display: inline-flex;
}
.tooltip-trigger {
  padding: 10px 22px;
  background: ${btnBg};
  border: ${s.border};
  border-radius: ${radius}px;
  color: ${btnColor};
  font-weight: 700;
  font-family: ${fontFamily};
  font-size: 13px;
  cursor: pointer;
  box-shadow: ${s.shadow};
  ${['brutalism','cyberpunk','retro'].includes(styleId) ? 'text-transform: uppercase; letter-spacing: 1px;' : ''}
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(12px);' : ''}
}
.tooltip-box {
  position: absolute;
  background: ${tipBg};
  border: ${tipBorder};
  border-radius: ${radius}px;
  box-shadow: ${tipShadow};
  color: ${tipText};
  font-family: ${fontFamily};
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  padding: 8px 14px;
  pointer-events: none;
  z-index: 10;
  ${styleId === 'glassmorphism' ? 'backdrop-filter: blur(12px);' : ''}
}
.tooltip-box.top {
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
}
.tooltip-box.right {
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
}
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
}
.top-arrow {
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid ${tipBg.includes('gradient') ? '#2a2a2a' : tipBg};
}
.right-arrow {
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid ${tipBg.includes('gradient') ? '#2a2a2a' : tipBg};
}`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Tooltip -->
<div class="flex gap-12 items-center justify-center flex-wrap py-12 px-8 rounded-2xl" style="background: ${s.bg}">
  <div class="relative inline-flex">
    <button class="px-6 py-2.5 font-bold text-sm cursor-pointer" style="background: ${btnBg}; border: ${s.border}; border-radius: ${radius}px; color: ${btnColor}; box-shadow: ${s.shadow}; font-family: ${fontFamily};">
      Hover Me
    </button>
    <div class="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 px-3.5 py-2 text-xs font-semibold whitespace-nowrap z-10" style="background: ${tipBg}; border: ${tipBorder}; border-radius: ${radius}px; box-shadow: ${tipShadow}; color: ${tipText}; font-family: ${fontFamily};">
      Helpful info goes here
    </div>
  </div>
  <div class="relative inline-flex">
    <button class="px-6 py-2.5 font-bold text-sm cursor-pointer" style="background: ${btnBg}; border: ${s.border}; border-radius: ${radius}px; color: ${btnColor}; box-shadow: ${s.shadow}; font-family: ${fontFamily};">
      More Info
    </button>
    <div class="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 px-3.5 py-2 text-xs font-semibold whitespace-nowrap z-10" style="background: ${tipBg}; border: ${tipBorder}; border-radius: ${radius}px; box-shadow: ${tipShadow}; color: ${tipText}; font-family: ${fontFamily};">
      Side tooltip example
    </div>
  </div>
</div>`
  }
}

/* ── DROPDOWN ── */
function generateDropdownCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const isDark = ['glassmorphism','bento-ui','dark-ui','cyberpunk','retro','gradient-ui','fluent-design','skeuomorphism'].includes(styleId)
  const textColor = isDark ? 'rgba(255,255,255,0.9)' : (styleId === 'brutalism' ? '#000' : '#111')
  const subColor = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)'
  const menuBg = styleId === 'glassmorphism' ? 'rgba(255,255,255,0.12)' :
    styleId === 'neumorphism' ? '#e0e5ec' :
    styleId === 'minimalism' ? '#fff' :
    styleId === 'brutalism' ? '#fff' :
    styleId === 'material-design' ? '#fff' :
    styleId === 'fluent-design' ? 'rgba(255,255,255,0.1)' :
    styleId === 'bento-ui' ? '#1a1a2e' :
    styleId === 'claymorphism' ? '#f0f4ff' :
    styleId === 'skeuomorphism' ? 'linear-gradient(180deg,#d4a017,#b8860b)' :
    styleId === 'cyberpunk' ? '#050510' :
    styleId === 'retro' ? '#1a0a00' :
    styleId === 'dark-ui' ? '#1a1a2e' :
    styleId === 'light-ui' ? '#fff' :
    'rgba(255,255,255,0.2)'
  const menuBorder = styleId === 'brutalism' ? '3px solid #000' :
    styleId === 'cyberpunk' ? '1px solid #00ffff' :
    styleId === 'retro' ? '2px solid #ff9d4d' :
    styleId === 'minimalism' ? '1px solid #111' :
    styleId === 'neumorphism' ? 'none' : s.border
  const menuShadow = styleId === 'neumorphism' ? '6px 6px 12px #b8bec7,-6px -6px 12px #fff' :
    styleId === 'brutalism' ? '4px 4px 0 #000' :
    styleId === 'cyberpunk' ? '0 0 20px rgba(0,255,255,0.25)' :
    styleId === 'retro' ? '4px 4px 0 #ff9d4d' :
    styleId === 'claymorphism' ? '6px 6px 14px #d0d8ea,-4px -4px 10px #fff' : '0 12px 32px rgba(0,0,0,0.2)'
  const radius = styleId === 'brutalism' || styleId === 'cyberpunk' || styleId === 'retro' ? 0 :
    styleId === 'minimalism' ? 2 : styleId === 'neumorphism' ? 12 : 10
  const activeItemBg = styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'rgba(255,255,255,0.15)' :
    styleId === 'brutalism' ? '#f5f500' :
    styleId === 'cyberpunk' ? 'rgba(0,255,255,0.1)' :
    styleId === 'retro' ? 'rgba(255,107,53,0.15)' :
    styleId === 'neumorphism' ? 'rgba(108,99,255,0.08)' :
    styleId === 'dark-ui' || styleId === 'bento-ui' ? 'rgba(108,99,255,0.15)' : 'rgba(63,81,181,0.08)'
  const fontFamily = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'monospace' : 'inherit'

  return {
    html: `<div class="dd-scene">
  <div class="dd-wrapper">
    <!-- Trigger -->
    <button class="dd-trigger">
      <span>Select option...</span>
      <span class="dd-caret">▾</span>
    </button>
    <!-- Menu (shown open) -->
    <div class="dd-menu">
      <div class="dd-item active">🎨 Design Systems</div>
      <div class="dd-item">⚡ Interactions</div>
      <div class="dd-item">🧩 Components</div>
      <div class="dd-divider"></div>
      <div class="dd-item">📦 Resources</div>
    </div>
  </div>
</div>`,
    css: `.dd-scene {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 28px;
  min-height: 220px;
  background: ${s.bg};
  border-radius: 16px;
}
.dd-wrapper { position: relative; width: 220px; }
.dd-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 11px 16px;
  background: ${menuBg};
  border: ${menuBorder};
  border-radius: ${radius}px;
  color: ${textColor};
  font-weight: 600;
  font-family: ${fontFamily};
  font-size: 14px;
  cursor: pointer;
  box-shadow: ${menuShadow};
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' || styleId === 'fluent-design' ? 'backdrop-filter: blur(16px);' : ''}
}
.dd-caret { font-size: 12px; opacity: 0.6; }
.dd-menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  background: ${menuBg};
  border: ${menuBorder};
  border-radius: ${radius}px;
  box-shadow: ${menuShadow};
  overflow: hidden;
  z-index: 10;
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' || styleId === 'fluent-design' ? 'backdrop-filter: blur(16px);' : ''}
}
.dd-item {
  padding: 10px 16px;
  color: ${textColor};
  font-size: 14px;
  font-family: ${fontFamily};
  cursor: pointer;
  transition: background 0.15s;
}
.dd-item.active { background: ${activeItemBg}; font-weight: 700; }
.dd-item:hover { background: ${activeItemBg}; }
.dd-divider {
  height: 1px;
  background: ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'};
  margin: 4px 0;
}`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Dropdown -->
<div class="flex justify-center items-start p-7 min-h-[220px] rounded-2xl" style="background: ${s.bg}">
  <div class="relative w-56">
    <button class="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold cursor-pointer" style="background: ${menuBg}; border: ${menuBorder}; border-radius: ${radius}px; color: ${textColor}; box-shadow: ${menuShadow}; font-family: ${fontFamily}; ${styleId === 'glassmorphism' ? 'backdrop-filter: blur(16px);' : ''}">
      <span>Select option...</span>
      <span class="text-xs opacity-60">▾</span>
    </button>
    <div class="absolute top-[calc(100%+6px)] left-0 w-full overflow-hidden z-10" style="background: ${menuBg}; border: ${menuBorder}; border-radius: ${radius}px; box-shadow: ${menuShadow}; ${styleId === 'glassmorphism' ? 'backdrop-filter: blur(16px);' : ''}">
      <div class="px-4 py-2.5 text-sm cursor-pointer font-bold" style="background: ${activeItemBg}; color: ${textColor}; font-family: ${fontFamily};">🎨 Design Systems</div>
      <div class="px-4 py-2.5 text-sm cursor-pointer" style="color: ${textColor}; font-family: ${fontFamily};">⚡ Interactions</div>
      <div class="px-4 py-2.5 text-sm cursor-pointer" style="color: ${textColor}; font-family: ${fontFamily};">🧩 Components</div>
      <div class="h-px my-1" style="background: ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}"></div>
      <div class="px-4 py-2.5 text-sm cursor-pointer" style="color: ${textColor}; font-family: ${fontFamily};">📦 Resources</div>
    </div>
  </div>
</div>`
  }
}

/* ── TABS ── */
function generateTabsCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const isDark = ['glassmorphism','bento-ui','dark-ui','cyberpunk','retro','gradient-ui','fluent-design','skeuomorphism'].includes(styleId)
  const textColor = isDark ? 'rgba(255,255,255,0.9)' : (styleId === 'brutalism' ? '#000' : '#111')
  const subColor = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.4)'
  const contentBg = styleId === 'glassmorphism' ? 'rgba(255,255,255,0.08)' :
    styleId === 'neumorphism' ? '#e0e5ec' :
    styleId === 'minimalism' ? '#fafafa' :
    styleId === 'brutalism' ? '#fff' :
    styleId === 'material-design' ? '#fff' :
    styleId === 'fluent-design' ? 'rgba(255,255,255,0.05)' :
    styleId === 'bento-ui' ? '#0f0f1a' :
    styleId === 'claymorphism' ? '#f0f4ff' :
    styleId === 'skeuomorphism' ? 'rgba(0,0,0,0.2)' :
    styleId === 'cyberpunk' ? 'rgba(0,255,255,0.03)' :
    styleId === 'retro' ? 'rgba(255,107,53,0.05)' :
    styleId === 'dark-ui' ? '#0f0f1a' :
    styleId === 'light-ui' ? '#f8f9ff' :
    'rgba(255,255,255,0.1)'
  const activeTabBg = s.pillBg
  const activeTabColor = s.color
  const inactiveTabColor = subColor
  const tabBorder = styleId === 'brutalism' ? '3px solid #000' :
    styleId === 'cyberpunk' ? '1px solid #00ffff' :
    styleId === 'retro' ? '2px solid #ff9d4d' : 'none'
  const radius = styleId === 'brutalism' || styleId === 'cyberpunk' || styleId === 'retro' ? 0 :
    styleId === 'minimalism' ? 2 : 8
  const activeShadow = styleId === 'neumorphism' ? '3px 3px 6px #b8bec7,-3px -3px 6px #fff' :
    styleId === 'brutalism' ? '3px 3px 0 #000' : s.shadow
  const fontFamily = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'monospace' : 'inherit'

  return {
    html: `<div class="tabs-scene">
  <!-- Tab Bar -->
  <div class="tab-bar">
    <button class="tab active">Overview</button>
    <button class="tab">Features</button>
    <button class="tab">Pricing</button>
    <button class="tab">Docs</button>
  </div>
  <!-- Content Panel -->
  <div class="tab-content">
    <h3 class="tab-heading">Overview</h3>
    <p class="tab-text">This is the overview tab content. Switch between tabs to see different sections.</p>
  </div>
</div>`,
    css: `.tabs-scene {
  padding: 24px;
  background: ${s.bg};
  border-radius: 16px;
}
.tab-bar {
  display: flex;
  gap: ${styleId === 'brutalism' ? '0' : '4px'};
  margin-bottom: 16px;
  ${styleId === 'neumorphism' ? `background: #e0e5ec; border-radius: 10px; padding: 4px;` : ''}
}
.tab {
  padding: 9px 20px;
  background: transparent;
  border: ${tabBorder === 'none' ? 'none' : tabBorder};
  border-radius: ${radius}px;
  color: ${inactiveTabColor};
  font-size: 13px;
  font-weight: 600;
  font-family: ${fontFamily};
  cursor: pointer;
  transition: all 0.2s;
  ${['brutalism','cyberpunk','retro'].includes(styleId) ? 'text-transform: uppercase; letter-spacing: 1px;' : ''}
}
.tab.active {
  background: ${activeTabBg};
  color: ${activeTabColor};
  box-shadow: ${activeShadow};
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(12px);' : ''}
}
.tab:hover:not(.active) { color: ${textColor}; }
.tab-content {
  padding: 20px;
  background: ${contentBg};
  border-radius: ${radius}px;
  border: ${isDark ? '1px solid rgba(255,255,255,0.07)' : styleId === 'brutalism' ? '2px solid #000' : '1px solid rgba(0,0,0,0.06)'};
}
.tab-heading {
  color: ${textColor};
  font-size: 16px;
  font-weight: 700;
  font-family: ${fontFamily};
  margin: 0 0 8px;
}
.tab-text {
  color: ${subColor};
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  font-family: ${fontFamily};
}`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Tabs -->
<div class="p-6 rounded-2xl" style="background: ${s.bg}">
  <div class="flex gap-1 mb-4 ${styleId === 'neumorphism' ? 'p-1 rounded-xl' : ''}" style="${styleId === 'neumorphism' ? `background: #e0e5ec;` : ''}">
    <button class="px-5 py-2 text-sm font-semibold cursor-pointer rounded-lg" style="background: ${activeTabBg}; color: ${activeTabColor}; box-shadow: ${activeShadow}; font-family: ${fontFamily}; border: none;">Overview</button>
    <button class="px-5 py-2 text-sm font-semibold cursor-pointer rounded-lg border-none bg-transparent" style="color: ${inactiveTabColor}; font-family: ${fontFamily};">Features</button>
    <button class="px-5 py-2 text-sm font-semibold cursor-pointer rounded-lg border-none bg-transparent" style="color: ${inactiveTabColor}; font-family: ${fontFamily};">Pricing</button>
    <button class="px-5 py-2 text-sm font-semibold cursor-pointer rounded-lg border-none bg-transparent" style="color: ${inactiveTabColor}; font-family: ${fontFamily};">Docs</button>
  </div>
  <div class="p-5 rounded-lg" style="background: ${contentBg}; border: ${isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)'}">
    <h3 class="text-base font-bold m-0 mb-2" style="color: ${textColor}; font-family: ${fontFamily};">Overview</h3>
    <p class="text-sm leading-relaxed m-0" style="color: ${subColor}; font-family: ${fontFamily};">This is the overview tab content. Switch between tabs to see different sections.</p>
  </div>
</div>`
  }
}

/* ── BREADCRUMB ── */
function generateBreadcrumbCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const isDark = ['glassmorphism','bento-ui','dark-ui','cyberpunk','retro','gradient-ui','fluent-design','skeuomorphism'].includes(styleId)
  const textColor = isDark ? 'rgba(255,255,255,0.9)' : (styleId === 'brutalism' ? '#000' : '#111')
  const subColor = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
  const activeColor = styleId === 'cyberpunk' ? '#00ffff' :
    styleId === 'retro' ? '#ff6b35' :
    styleId === 'brutalism' ? '#000' :
    styleId === 'neumorphism' ? '#6c63ff' :
    styleId === 'material-design' || styleId === 'fluent-design' ? (isDark ? '#80baff' : '#1976d2') :
    styleId === 'dark-ui' || styleId === 'bento-ui' ? '#a78bfa' :
    styleId === 'light-ui' ? '#3f51b5' : isDark ? 'rgba(255,255,255,0.85)' : '#6c63ff'
  const separatorColor = subColor
  const crumbBg = styleId === 'glassmorphism' ? 'rgba(255,255,255,0.1)' :
    styleId === 'neumorphism' ? '#e0e5ec' :
    styleId === 'brutalism' ? '#f5f500' :
    styleId === 'cyberpunk' ? 'rgba(0,255,255,0.05)' :
    styleId === 'retro' ? 'rgba(255,107,53,0.08)' :
    styleId === 'dark-ui' ? '#0d0d1a' : 'transparent'
  const fontFamily = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'monospace' : 'inherit'
  const textUp = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'uppercase' : 'none'
  const containerBorder = styleId === 'brutalism' ? '3px solid #000' :
    styleId === 'cyberpunk' ? '1px solid rgba(0,255,255,0.2)' :
    styleId === 'neumorphism' ? 'none' :
    isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)'
  const containerShadow = styleId === 'neumorphism' ? '5px 5px 10px #b8bec7,-5px -5px 10px #fff' :
    styleId === 'brutalism' ? '4px 4px 0 #000' :
    styleId === 'cyberpunk' ? '0 0 12px rgba(0,255,255,0.1)' :
    styleId === 'retro' ? '4px 4px 0 #ff9d4d' : 'none'
  const radius = styleId === 'brutalism' || styleId === 'cyberpunk' || styleId === 'retro' ? 0 :
    styleId === 'minimalism' ? 2 : 8

  return {
    html: `<div class="bc-scene">
  <nav class="breadcrumb" aria-label="breadcrumb">
    <a class="bc-link" href="#">Home</a>
    <span class="bc-sep">›</span>
    <a class="bc-link" href="#">Components</a>
    <span class="bc-sep">›</span>
    <a class="bc-link" href="#">Navigation</a>
    <span class="bc-sep">›</span>
    <span class="bc-current">Breadcrumb</span>
  </nav>
  <!-- Second variant with icon separators -->
  <nav class="breadcrumb" aria-label="breadcrumb" style="margin-top: 12px;">
    <a class="bc-link" href="#">🏠 Home</a>
    <span class="bc-sep">/</span>
    <a class="bc-link" href="#">Library</a>
    <span class="bc-sep">/</span>
    <span class="bc-current">Button</span>
  </nav>
</div>`,
    css: `.bc-scene {
  padding: 28px;
  background: ${s.bg};
  border-radius: 16px;
}
.breadcrumb {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  padding: 10px 18px;
  background: ${crumbBg};
  border: ${containerBorder};
  border-radius: ${radius}px;
  box-shadow: ${containerShadow};
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(12px);' : ''}
}
.bc-link {
  color: ${activeColor};
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  font-family: ${fontFamily};
  text-transform: ${textUp};
  transition: opacity 0.2s;
}
.bc-link:hover { opacity: 0.75; text-decoration: underline; }
.bc-sep {
  color: ${separatorColor};
  font-size: 14px;
  margin: 0 2px;
  font-family: ${fontFamily};
}
.bc-current {
  color: ${subColor};
  font-size: 13px;
  font-weight: 500;
  font-family: ${fontFamily};
  text-transform: ${textUp};
}`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Breadcrumb -->
<div class="p-7 rounded-2xl" style="background: ${s.bg}">
  <nav class="inline-flex items-center flex-wrap gap-1 px-4 py-2.5 rounded-lg" style="background: ${crumbBg}; border: ${containerBorder}; box-shadow: ${containerShadow}; ${styleId === 'glassmorphism' ? 'backdrop-filter: blur(12px);' : ''}" aria-label="breadcrumb">
    <a class="text-xs font-semibold no-underline hover:underline hover:opacity-75 transition-opacity" href="#" style="color: ${activeColor}; font-family: ${fontFamily}; text-transform: ${textUp};">Home</a>
    <span class="text-sm mx-0.5" style="color: ${separatorColor}; font-family: ${fontFamily};">›</span>
    <a class="text-xs font-semibold no-underline hover:underline hover:opacity-75 transition-opacity" href="#" style="color: ${activeColor}; font-family: ${fontFamily}; text-transform: ${textUp};">Components</a>
    <span class="text-sm mx-0.5" style="color: ${separatorColor}; font-family: ${fontFamily};">›</span>
    <a class="text-xs font-semibold no-underline hover:underline hover:opacity-75 transition-opacity" href="#" style="color: ${activeColor}; font-family: ${fontFamily}; text-transform: ${textUp};">Navigation</a>
    <span class="text-sm mx-0.5" style="color: ${separatorColor}; font-family: ${fontFamily};">›</span>
    <span class="text-xs font-medium" style="color: ${subColor}; font-family: ${fontFamily}; text-transform: ${textUp};">Breadcrumb</span>
  </nav>
</div>`
  }
}

/* ── ACCORDION ── */
function generateAccordionCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const isDark = ['glassmorphism','bento-ui','dark-ui','cyberpunk','retro','gradient-ui','fluent-design','skeuomorphism'].includes(styleId)
  const textColor = isDark ? 'rgba(255,255,255,0.9)' : (styleId === 'brutalism' ? '#000' : '#111')
  const subColor = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)'
  const itemBg = styleId === 'glassmorphism' ? 'rgba(255,255,255,0.1)' :
    styleId === 'neumorphism' ? '#e0e5ec' :
    styleId === 'minimalism' ? '#fff' :
    styleId === 'brutalism' ? '#fff' :
    styleId === 'material-design' ? '#fff' :
    styleId === 'fluent-design' ? 'rgba(255,255,255,0.08)' :
    styleId === 'bento-ui' ? '#1a1a2e' :
    styleId === 'claymorphism' ? '#f0f4ff' :
    styleId === 'skeuomorphism' ? 'rgba(0,0,0,0.15)' :
    styleId === 'cyberpunk' ? 'rgba(0,255,255,0.03)' :
    styleId === 'retro' ? 'rgba(255,107,53,0.05)' :
    styleId === 'dark-ui' ? '#0d0d1a' :
    styleId === 'light-ui' ? '#fff' : 'rgba(255,255,255,0.12)'
  const itemBorder = styleId === 'brutalism' ? '3px solid #000' :
    styleId === 'cyberpunk' ? '1px solid rgba(0,255,255,0.3)' :
    styleId === 'retro' ? '2px solid #ff9d4d' :
    styleId === 'minimalism' ? '1px solid #111' :
    styleId === 'neumorphism' ? 'none' :
    isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.07)'
  const itemShadow = styleId === 'neumorphism' ? '4px 4px 10px #b8bec7,-4px -4px 10px #fff' :
    styleId === 'brutalism' ? '4px 4px 0 #000' :
    styleId === 'cyberpunk' ? '0 0 8px rgba(0,255,255,0.1)' :
    styleId === 'retro' ? '3px 3px 0 #ff9d4d' :
    styleId === 'claymorphism' ? '4px 4px 10px #d0d8ea,-3px -3px 8px #fff' : 'none'
  const accentColor = styleId === 'cyberpunk' ? '#00ffff' :
    styleId === 'retro' ? '#ff6b35' :
    styleId === 'brutalism' ? '#000' :
    styleId === 'neumorphism' ? '#6c63ff' :
    styleId === 'dark-ui' || styleId === 'bento-ui' ? '#a78bfa' : s.color
  const radius = styleId === 'brutalism' || styleId === 'cyberpunk' || styleId === 'retro' ? 0 :
    styleId === 'minimalism' ? 2 : styleId === 'neumorphism' ? 12 : 10
  const fontFamily = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'monospace' : 'inherit'

  return {
    html: `<div class="acc-scene">
  <!-- Open item -->
  <div class="acc-item open">
    <button class="acc-header">
      <span>What is glassmorphism?</span>
      <span class="acc-icon">▲</span>
    </button>
    <div class="acc-body">
      A design style using frosted glass effects with backdrop blur, semi-transparent backgrounds, and subtle borders to create depth.
    </div>
  </div>
  <!-- Closed items -->
  <div class="acc-item">
    <button class="acc-header">
      <span>When to use neumorphism?</span>
      <span class="acc-icon">▼</span>
    </button>
  </div>
  <div class="acc-item">
    <button class="acc-header">
      <span>What makes brutalism unique?</span>
      <span class="acc-icon">▼</span>
    </button>
  </div>
</div>`,
    css: `.acc-scene {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  background: ${s.bg};
  border-radius: 16px;
}
.acc-item {
  background: ${itemBg};
  border: ${itemBorder};
  border-radius: ${radius}px;
  box-shadow: ${itemShadow};
  overflow: hidden;
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(12px);' : ''}
}
.acc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 18px;
  background: transparent;
  border: none;
  color: ${textColor};
  font-size: 14px;
  font-weight: 600;
  font-family: ${fontFamily};
  text-align: left;
  cursor: pointer;
  ${['brutalism','cyberpunk','retro'].includes(styleId) ? 'text-transform: uppercase; letter-spacing: 0.5px;' : ''}
}
.acc-icon {
  color: ${accentColor};
  font-size: 12px;
  flex-shrink: 0;
}
.acc-body {
  padding: 0 18px 16px;
  color: ${subColor};
  font-size: 13px;
  line-height: 1.7;
  font-family: ${fontFamily};
  border-top: ${isDark ? '1px solid rgba(255,255,255,0.06)' : styleId === 'brutalism' ? '2px solid #000' : '1px solid rgba(0,0,0,0.05)'};
  padding-top: 14px;
}`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Accordion -->
<div class="flex flex-col gap-2 p-6 rounded-2xl" style="background: ${s.bg}">
  <!-- Open item -->
  <div class="overflow-hidden" style="background: ${itemBg}; border: ${itemBorder}; border-radius: ${radius}px; box-shadow: ${itemShadow}; ${styleId === 'glassmorphism' ? 'backdrop-filter: blur(12px);' : ''}">
    <button class="flex items-center justify-between w-full px-4 py-3.5 bg-transparent border-none text-sm font-semibold text-left cursor-pointer" style="color: ${textColor}; font-family: ${fontFamily};">
      <span>What is glassmorphism?</span>
      <span class="text-xs flex-shrink-0" style="color: ${accentColor};">▲</span>
    </button>
    <div class="px-4 pb-4 text-xs leading-relaxed border-t" style="color: ${subColor}; font-family: ${fontFamily}; border-color: ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}; padding-top: 14px;">
      A design style using frosted glass effects with backdrop blur, semi-transparent backgrounds, and subtle borders.
    </div>
  </div>
  <!-- Closed items -->
  <div class="overflow-hidden" style="background: ${itemBg}; border: ${itemBorder}; border-radius: ${radius}px; box-shadow: ${itemShadow};">
    <button class="flex items-center justify-between w-full px-4 py-3.5 bg-transparent border-none text-sm font-semibold text-left cursor-pointer" style="color: ${textColor}; font-family: ${fontFamily};">
      <span>When to use neumorphism?</span>
      <span class="text-xs flex-shrink-0" style="color: ${accentColor};">▼</span>
    </button>
  </div>
  <div class="overflow-hidden" style="background: ${itemBg}; border: ${itemBorder}; border-radius: ${radius}px; box-shadow: ${itemShadow};">
    <button class="flex items-center justify-between w-full px-4 py-3.5 bg-transparent border-none text-sm font-semibold text-left cursor-pointer" style="color: ${textColor}; font-family: ${fontFamily};">
      <span>What makes brutalism unique?</span>
      <span class="text-xs flex-shrink-0" style="color: ${accentColor};">▼</span>
    </button>
  </div>
</div>`
  }
}

/* ── STEPPER ── */
function generateStepperCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const isDark = ['glassmorphism','bento-ui','dark-ui','cyberpunk','retro','gradient-ui','fluent-design','skeuomorphism'].includes(styleId)
  const textColor = isDark ? 'rgba(255,255,255,0.9)' : (styleId === 'brutalism' ? '#000' : '#111')
  const subColor = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.4)'
  const activeBg = s.pillBg
  const activeColor = s.color
  const doneBg = styleId === 'cyberpunk' ? 'rgba(0,255,255,0.15)' :
    styleId === 'retro' ? 'rgba(255,107,53,0.15)' :
    styleId === 'dark-ui' || styleId === 'bento-ui' ? 'rgba(108,99,255,0.2)' :
    styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'rgba(255,255,255,0.2)' :
    styleId === 'neumorphism' ? '#e0e5ec' : 'rgba(108,99,255,0.1)'
  const doneColor = styleId === 'cyberpunk' ? '#00ffff' :
    styleId === 'retro' ? '#ff6b35' :
    styleId === 'neumorphism' ? '#6c63ff' :
    styleId === 'dark-ui' || styleId === 'bento-ui' ? '#a78bfa' : '#6c63ff'
  const upcomingBg = isDark ? 'rgba(255,255,255,0.08)' :
    styleId === 'neumorphism' ? '#e0e5ec' : 'rgba(0,0,0,0.06)'
  const lineColor = styleId === 'cyberpunk' ? 'rgba(0,255,255,0.3)' :
    styleId === 'retro' ? '#ff9d4d' :
    isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'
  const stepBorder = styleId === 'brutalism' ? '3px solid #000' :
    styleId === 'cyberpunk' ? '1px solid #00ffff' :
    styleId === 'retro' ? '2px solid #ff9d4d' :
    styleId === 'neumorphism' ? 'none' : 'none'
  const stepShadow = styleId === 'neumorphism' ? '3px 3px 6px #b8bec7,-3px -3px 6px #fff' :
    styleId === 'brutalism' ? '3px 3px 0 #000' :
    styleId === 'cyberpunk' ? '0 0 8px rgba(0,255,255,0.4)' : s.shadow
  const radius = styleId === 'brutalism' || styleId === 'retro' ? 0 : 50
  const fontFamily = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'monospace' : 'inherit'

  return {
    html: `<div class="stepper-scene">
  <div class="stepper">
    <!-- Done -->
    <div class="step-item">
      <div class="step-circle done">✓</div>
      <div class="step-label">
        <p class="step-title">Account</p>
        <p class="step-sub">Completed</p>
      </div>
    </div>
    <div class="step-line"></div>
    <!-- Active -->
    <div class="step-item">
      <div class="step-circle active">2</div>
      <div class="step-label">
        <p class="step-title">Profile</p>
        <p class="step-sub">In progress</p>
      </div>
    </div>
    <div class="step-line"></div>
    <!-- Upcoming -->
    <div class="step-item">
      <div class="step-circle upcoming">3</div>
      <div class="step-label">
        <p class="step-title">Review</p>
        <p class="step-sub">Pending</p>
      </div>
    </div>
    <div class="step-line"></div>
    <!-- Upcoming -->
    <div class="step-item">
      <div class="step-circle upcoming">4</div>
      <div class="step-label">
        <p class="step-title">Done</p>
        <p class="step-sub">Pending</p>
      </div>
    </div>
  </div>
</div>`,
    css: `.stepper-scene {
  padding: 28px;
  background: ${s.bg};
  border-radius: 16px;
}
.stepper {
  display: flex;
  align-items: flex-start;
  gap: 0;
}
.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
}
.step-line {
  flex: 1;
  height: 2px;
  background: ${lineColor};
  margin-top: 18px;
  min-width: 24px;
}
.step-circle {
  width: 36px;
  height: 36px;
  border-radius: ${radius}%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  font-family: ${fontFamily};
  border: ${stepBorder};
  flex-shrink: 0;
}
.step-circle.done {
  background: ${doneBg};
  color: ${doneColor};
  box-shadow: ${stepShadow};
}
.step-circle.active {
  background: ${activeBg};
  color: ${activeColor};
  box-shadow: ${stepShadow};
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(8px);' : ''}
}
.step-circle.upcoming {
  background: ${upcomingBg};
  color: ${subColor};
}
.step-label { text-align: center; }
.step-title {
  color: ${textColor};
  font-size: 12px;
  font-weight: 700;
  margin: 0;
  font-family: ${fontFamily};
}
.step-sub {
  color: ${subColor};
  font-size: 11px;
  margin: 2px 0 0;
  font-family: ${fontFamily};
}`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Stepper -->
<div class="p-7 rounded-2xl" style="background: ${s.bg}">
  <div class="flex items-start gap-0">
    <div class="flex flex-col items-center gap-2 flex-shrink-0">
      <div class="w-9 h-9 flex items-center justify-center text-sm font-extrabold" style="background: ${doneBg}; color: ${doneColor}; border-radius: ${radius}%; border: ${stepBorder}; box-shadow: ${stepShadow}; font-family: ${fontFamily};">✓</div>
      <div class="text-center"><p class="text-xs font-bold m-0" style="color: ${textColor}; font-family: ${fontFamily};">Account</p><p class="text-[11px] m-0 mt-0.5" style="color: ${subColor}; font-family: ${fontFamily};">Completed</p></div>
    </div>
    <div class="flex-1 h-0.5 mt-[18px] min-w-6" style="background: ${lineColor}"></div>
    <div class="flex flex-col items-center gap-2 flex-shrink-0">
      <div class="w-9 h-9 flex items-center justify-center text-sm font-extrabold" style="background: ${activeBg}; color: ${activeColor}; border-radius: ${radius}%; border: ${stepBorder}; box-shadow: ${stepShadow}; font-family: ${fontFamily};">2</div>
      <div class="text-center"><p class="text-xs font-bold m-0" style="color: ${textColor}; font-family: ${fontFamily};">Profile</p><p class="text-[11px] m-0 mt-0.5" style="color: ${subColor}; font-family: ${fontFamily};">In progress</p></div>
    </div>
    <div class="flex-1 h-0.5 mt-[18px] min-w-6" style="background: ${lineColor}"></div>
    <div class="flex flex-col items-center gap-2 flex-shrink-0">
      <div class="w-9 h-9 flex items-center justify-center text-sm font-extrabold" style="background: ${upcomingBg}; color: ${subColor}; border-radius: ${radius}%; font-family: ${fontFamily};">3</div>
      <div class="text-center"><p class="text-xs font-bold m-0" style="color: ${textColor}; font-family: ${fontFamily};">Review</p><p class="text-[11px] m-0 mt-0.5" style="color: ${subColor}; font-family: ${fontFamily};">Pending</p></div>
    </div>
    <div class="flex-1 h-0.5 mt-[18px] min-w-6" style="background: ${lineColor}"></div>
    <div class="flex flex-col items-center gap-2 flex-shrink-0">
      <div class="w-9 h-9 flex items-center justify-center text-sm font-extrabold" style="background: ${upcomingBg}; color: ${subColor}; border-radius: ${radius}%; font-family: ${fontFamily};">4</div>
      <div class="text-center"><p class="text-xs font-bold m-0" style="color: ${textColor}; font-family: ${fontFamily};">Done</p><p class="text-[11px] m-0 mt-0.5" style="color: ${subColor}; font-family: ${fontFamily};">Pending</p></div>
    </div>
  </div>
</div>`
  }
}

/* ── TIMELINE ── */
function generateTimelineCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const isDark = ['glassmorphism','bento-ui','dark-ui','cyberpunk','retro','gradient-ui','fluent-design','skeuomorphism'].includes(styleId)
  const textColor = isDark ? 'rgba(255,255,255,0.9)' : (styleId === 'brutalism' ? '#000' : '#111')
  const subColor = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.4)'
  const cardBg = styleId === 'glassmorphism' ? 'rgba(255,255,255,0.1)' :
    styleId === 'neumorphism' ? '#e0e5ec' :
    styleId === 'minimalism' ? '#fff' :
    styleId === 'brutalism' ? '#fff' :
    styleId === 'material-design' ? '#fff' :
    styleId === 'fluent-design' ? 'rgba(255,255,255,0.08)' :
    styleId === 'bento-ui' ? '#1a1a2e' :
    styleId === 'claymorphism' ? '#f0f4ff' :
    styleId === 'skeuomorphism' ? 'rgba(0,0,0,0.2)' :
    styleId === 'cyberpunk' ? 'rgba(0,255,255,0.03)' :
    styleId === 'retro' ? 'rgba(255,107,53,0.05)' :
    styleId === 'dark-ui' ? '#0d0d1a' :
    styleId === 'light-ui' ? '#fff' : 'rgba(255,255,255,0.1)'
  const cardBorder = styleId === 'brutalism' ? '3px solid #000' :
    styleId === 'cyberpunk' ? '1px solid rgba(0,255,255,0.25)' :
    styleId === 'retro' ? '2px solid #ff9d4d' :
    styleId === 'minimalism' ? '1px solid #111' :
    styleId === 'neumorphism' ? 'none' :
    isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)'
  const cardShadow = styleId === 'neumorphism' ? '4px 4px 8px #b8bec7,-4px -4px 8px #fff' :
    styleId === 'brutalism' ? '4px 4px 0 #000' :
    styleId === 'cyberpunk' ? '0 0 10px rgba(0,255,255,0.1)' :
    styleId === 'retro' ? '3px 3px 0 #ff9d4d' :
    styleId === 'claymorphism' ? '4px 4px 10px #d0d8ea,-3px -3px 8px #fff' : 'none'
  const dotColor = s.pillBg
  const lineColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
  const timeColor = styleId === 'cyberpunk' ? '#00ffff' :
    styleId === 'retro' ? '#ff6b35' : subColor
  const radius = styleId === 'brutalism' || styleId === 'cyberpunk' || styleId === 'retro' ? 0 :
    styleId === 'minimalism' ? 2 : styleId === 'neumorphism' ? 10 : 8
  const fontFamily = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'monospace' : 'inherit'

  return {
    html: `<div class="tl-scene">
  <div class="timeline">
    <div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-content">
        <span class="tl-time">Just now</span>
        <h4 class="tl-title">Component Created</h4>
        <p class="tl-desc">New timeline component added to the library.</p>
      </div>
    </div>
    <div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-content">
        <span class="tl-time">2 hours ago</span>
        <h4 class="tl-title">Design Updated</h4>
        <p class="tl-desc">Glassmorphism styles refreshed for better contrast.</p>
      </div>
    </div>
    <div class="tl-item last">
      <div class="tl-dot"></div>
      <div class="tl-content">
        <span class="tl-time">Yesterday</span>
        <h4 class="tl-title">Version Released</h4>
        <p class="tl-desc">v2.0 shipped with 12 new components.</p>
      </div>
    </div>
  </div>
</div>`,
    css: `.tl-scene {
  padding: 24px;
  background: ${s.bg};
  border-radius: 16px;
}
.timeline { position: relative; }
.tl-item {
  display: flex;
  gap: 16px;
  position: relative;
  padding-bottom: 20px;
}
.tl-item:not(.last)::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 20px;
  bottom: 0;
  width: 2px;
  background: ${lineColor};
}
.tl-dot {
  width: 16px;
  height: 16px;
  border-radius: ${radius === 0 ? 0 : 50}%;
  background: ${dotColor};
  flex-shrink: 0;
  margin-top: 4px;
  box-shadow: ${s.shadow};
  ${styleId === 'cyberpunk' ? 'box-shadow: 0 0 8px rgba(0,255,255,0.6);' : ''}
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(8px);' : ''}
}
.tl-content {
  flex: 1;
  padding: 14px 16px;
  background: ${cardBg};
  border: ${cardBorder};
  border-radius: ${radius}px;
  box-shadow: ${cardShadow};
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(12px);' : ''}
}
.tl-time {
  color: ${timeColor};
  font-size: 11px;
  font-weight: 600;
  font-family: ${fontFamily};
  ${['brutalism','cyberpunk','retro'].includes(styleId) ? 'text-transform: uppercase;' : ''}
}
.tl-title {
  color: ${textColor};
  font-size: 14px;
  font-weight: 700;
  margin: 4px 0 6px;
  font-family: ${fontFamily};
}
.tl-desc {
  color: ${subColor};
  font-size: 12px;
  line-height: 1.6;
  margin: 0;
  font-family: ${fontFamily};
}`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Timeline -->
<div class="p-6 rounded-2xl" style="background: ${s.bg}">
  <div class="relative">
    <div class="flex gap-4 relative pb-5">
      <div class="absolute left-2 top-5 bottom-0 w-0.5" style="background: ${lineColor}"></div>
      <div class="w-4 h-4 flex-shrink-0 mt-1" style="background: ${dotColor}; border-radius: ${radius === 0 ? 0 : 50}%; box-shadow: ${s.shadow};"></div>
      <div class="flex-1 p-3.5" style="background: ${cardBg}; border: ${cardBorder}; border-radius: ${radius}px; box-shadow: ${cardShadow}; ${styleId === 'glassmorphism' ? 'backdrop-filter: blur(12px);' : ''}">
        <span class="text-[11px] font-semibold" style="color: ${timeColor}; font-family: ${fontFamily};">Just now</span>
        <h4 class="text-sm font-bold mt-1 mb-1.5" style="color: ${textColor}; font-family: ${fontFamily};">Component Created</h4>
        <p class="text-xs leading-relaxed m-0" style="color: ${subColor}; font-family: ${fontFamily};">New timeline component added to the library.</p>
      </div>
    </div>
    <div class="flex gap-4 relative pb-5">
      <div class="absolute left-2 top-5 bottom-0 w-0.5" style="background: ${lineColor}"></div>
      <div class="w-4 h-4 flex-shrink-0 mt-1" style="background: ${dotColor}; border-radius: ${radius === 0 ? 0 : 50}%;"></div>
      <div class="flex-1 p-3.5" style="background: ${cardBg}; border: ${cardBorder}; border-radius: ${radius}px; box-shadow: ${cardShadow};">
        <span class="text-[11px] font-semibold" style="color: ${timeColor}; font-family: ${fontFamily};">2 hours ago</span>
        <h4 class="text-sm font-bold mt-1 mb-1.5" style="color: ${textColor}; font-family: ${fontFamily};">Design Updated</h4>
        <p class="text-xs leading-relaxed m-0" style="color: ${subColor}; font-family: ${fontFamily};">Glassmorphism styles refreshed for better contrast.</p>
      </div>
    </div>
    <div class="flex gap-4 relative">
      <div class="w-4 h-4 flex-shrink-0 mt-1" style="background: ${dotColor}; border-radius: ${radius === 0 ? 0 : 50}%;"></div>
      <div class="flex-1 p-3.5" style="background: ${cardBg}; border: ${cardBorder}; border-radius: ${radius}px; box-shadow: ${cardShadow};">
        <span class="text-[11px] font-semibold" style="color: ${timeColor}; font-family: ${fontFamily};">Yesterday</span>
        <h4 class="text-sm font-bold mt-1 mb-1.5" style="color: ${textColor}; font-family: ${fontFamily};">Version Released</h4>
        <p class="text-xs leading-relaxed m-0" style="color: ${subColor}; font-family: ${fontFamily};">v2.0 shipped with 12 new components.</p>
      </div>
    </div>
  </div>
</div>`
  }
}

/* ── SKELETON LOADER ── */
function generateSkeletonCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const isDark = ['glassmorphism','bento-ui','dark-ui','cyberpunk','retro','gradient-ui','fluent-design','skeuomorphism'].includes(styleId)
  const containerBg = styleId === 'glassmorphism' ? 'rgba(255,255,255,0.1)' :
    styleId === 'neumorphism' ? '#e0e5ec' :
    styleId === 'minimalism' ? '#fff' :
    styleId === 'brutalism' ? '#fff' :
    styleId === 'material-design' ? '#fff' :
    styleId === 'fluent-design' ? 'rgba(255,255,255,0.08)' :
    styleId === 'bento-ui' ? '#1a1a2e' :
    styleId === 'claymorphism' ? '#f0f4ff' :
    styleId === 'skeuomorphism' ? 'rgba(0,0,0,0.2)' :
    styleId === 'cyberpunk' ? 'rgba(0,255,255,0.03)' :
    styleId === 'retro' ? 'rgba(255,107,53,0.05)' :
    styleId === 'dark-ui' ? '#0d0d1a' :
    styleId === 'light-ui' ? '#fff' : 'rgba(255,255,255,0.12)'
  const baseSkel = isDark ? 'rgba(255,255,255,0.1)' :
    styleId === 'neumorphism' ? '#d0d5dc' : 'rgba(0,0,0,0.08)'
  const shimmerColor = isDark ? 'rgba(255,255,255,0.18)' :
    styleId === 'neumorphism' ? '#f0f4fa' : 'rgba(255,255,255,0.9)'
  const containerBorder = styleId === 'brutalism' ? '3px solid #000' :
    styleId === 'cyberpunk' ? '1px solid rgba(0,255,255,0.2)' :
    styleId === 'retro' ? '2px solid #ff9d4d' :
    styleId === 'minimalism' ? '1px solid #111' :
    styleId === 'neumorphism' ? 'none' :
    isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)'
  const containerShadow = styleId === 'neumorphism' ? '5px 5px 12px #b8bec7,-5px -5px 12px #fff' :
    styleId === 'brutalism' ? '4px 4px 0 #000' :
    styleId === 'cyberpunk' ? '0 0 12px rgba(0,255,255,0.12)' :
    styleId === 'retro' ? '4px 4px 0 #ff9d4d' :
    styleId === 'claymorphism' ? '6px 6px 14px #d0d8ea,-4px -4px 10px #fff' : '0 4px 16px rgba(0,0,0,0.12)'
  const radius = styleId === 'brutalism' || styleId === 'cyberpunk' || styleId === 'retro' ? 0 :
    styleId === 'minimalism' ? 2 : styleId === 'neumorphism' ? 12 : 10
  const avatarRadius = styleId === 'brutalism' || styleId === 'retro' ? 0 : 50

  return {
    html: `<div class="sk-scene">
  <!-- Card Skeleton -->
  <div class="sk-card">
    <div class="sk-header">
      <div class="sk-avatar shimmer"></div>
      <div class="sk-info">
        <div class="sk-line w70 shimmer"></div>
        <div class="sk-line w40 shimmer"></div>
      </div>
    </div>
    <div class="sk-img shimmer"></div>
    <div class="sk-body">
      <div class="sk-line shimmer"></div>
      <div class="sk-line w90 shimmer"></div>
      <div class="sk-line w60 shimmer"></div>
    </div>
  </div>
</div>`,
    css: `@keyframes shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
.sk-scene {
  padding: 28px;
  background: ${s.bg};
  border-radius: 16px;
  display: flex;
  justify-content: center;
}
.sk-card {
  width: 280px;
  background: ${containerBg};
  border: ${containerBorder};
  border-radius: ${radius}px;
  box-shadow: ${containerShadow};
  overflow: hidden;
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(12px);' : ''}
}
.shimmer {
  background: linear-gradient(90deg, ${baseSkel} 25%, ${shimmerColor} 50%, ${baseSkel} 75%);
  background-size: 800px 100%;
  animation: shimmer 1.6s infinite linear;
  border-radius: ${radius}px;
}
.sk-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
}
.sk-avatar {
  width: 40px;
  height: 40px;
  border-radius: ${avatarRadius}%;
  flex-shrink: 0;
}
.sk-info { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.sk-img { height: 150px; border-radius: 0; }
.sk-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sk-line {
  height: 12px;
  width: 100%;
}
.sk-line.w90 { width: 90%; }
.sk-line.w70 { width: 70%; height: 14px; }
.sk-line.w60 { width: 60%; }
.sk-line.w40 { width: 40%; height: 10px; }`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Skeleton Loader -->
<style>
@keyframes shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
.shimmer-anim {
  background: linear-gradient(90deg, ${baseSkel} 25%, ${shimmerColor} 50%, ${baseSkel} 75%);
  background-size: 800px 100%;
  animation: shimmer 1.6s infinite linear;
}
</style>
<div class="flex justify-center p-7 rounded-2xl" style="background: ${s.bg}">
  <div class="w-72 overflow-hidden" style="background: ${containerBg}; border: ${containerBorder}; border-radius: ${radius}px; box-shadow: ${containerShadow}; ${styleId === 'glassmorphism' ? 'backdrop-filter: blur(12px);' : ''}">
    <div class="flex items-center gap-3 p-4">
      <div class="shimmer-anim flex-shrink-0" style="width:40px;height:40px;border-radius:${avatarRadius}%"></div>
      <div class="flex-1 flex flex-col gap-2">
        <div class="shimmer-anim h-3.5 w-[70%] rounded"></div>
        <div class="shimmer-anim h-2.5 w-[40%] rounded"></div>
      </div>
    </div>
    <div class="shimmer-anim h-36 w-full"></div>
    <div class="p-4 flex flex-col gap-2.5">
      <div class="shimmer-anim h-3 w-full rounded"></div>
      <div class="shimmer-anim h-3 w-[90%] rounded"></div>
      <div class="shimmer-anim h-3 w-[60%] rounded"></div>
    </div>
  </div>
</div>`
  }
}

/* ── CHIP / TAG GROUP ── */
function generateChipCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const isDark = ['glassmorphism','bento-ui','dark-ui','cyberpunk','retro','gradient-ui','fluent-design','skeuomorphism'].includes(styleId)
  const textColor = isDark ? 'rgba(255,255,255,0.85)' : (styleId === 'brutalism' ? '#000' : '#111')
  const subColor = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.4)'
  const activeBg = s.pillBg
  const activeColor = s.color
  const inactiveBg = styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'rgba(255,255,255,0.08)' :
    styleId === 'neumorphism' ? '#e0e5ec' :
    styleId === 'minimalism' ? '#f5f5f5' :
    styleId === 'brutalism' ? 'transparent' :
    styleId === 'fluent-design' ? 'rgba(255,255,255,0.06)' :
    styleId === 'bento-ui' ? '#0f0f1a' :
    styleId === 'claymorphism' ? '#e0e8f8' :
    styleId === 'cyberpunk' ? 'transparent' :
    styleId === 'retro' ? 'transparent' :
    styleId === 'dark-ui' ? '#0f0f1a' :
    styleId === 'light-ui' ? '#f0f0ff' : 'rgba(255,255,255,0.08)'
  const inactiveBorder = styleId === 'brutalism' ? '2px solid #000' :
    styleId === 'cyberpunk' ? '1px solid rgba(0,255,255,0.4)' :
    styleId === 'retro' ? '2px solid #ff9d4d' :
    styleId === 'minimalism' ? '1px solid #ccc' :
    styleId === 'neumorphism' ? 'none' :
    isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'
  const activeBorder = styleId === 'brutalism' ? '2px solid #000' :
    styleId === 'cyberpunk' ? '1px solid #00ffff' :
    styleId === 'retro' ? '2px solid #ff6b35' :
    styleId === 'neumorphism' ? 'none' : s.border
  const inactiveShadow = styleId === 'neumorphism' ? '2px 2px 5px #b8bec7,-2px -2px 5px #fff' : 'none'
  const activeShadow = styleId === 'neumorphism' ? 'inset 2px 2px 4px #b8bec7,inset -2px -2px 4px #fff' :
    styleId === 'cyberpunk' ? '0 0 8px rgba(0,255,255,0.4)' :
    styleId === 'brutalism' ? '2px 2px 0 #000' :
    styleId === 'retro' ? '2px 2px 0 #ff9d4d' : s.shadow
  const radius = styleId === 'brutalism' || styleId === 'cyberpunk' || styleId === 'retro' ? 0 :
    styleId === 'minimalism' ? 2 : styleId === 'neumorphism' ? 8 : 100
  const fontFamily = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'monospace' : 'inherit'
  const textUp = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'uppercase' : 'none'

  return {
    html: `<div class="chip-scene">
  <p class="chip-label">Filter by:</p>
  <div class="chip-group">
    <div class="chip active">All</div>
    <div class="chip active">Design</div>
    <div class="chip">Development</div>
    <div class="chip">Motion</div>
    <div class="chip">Typography</div>
    <div class="chip active">Color</div>
    <div class="chip">Layout</div>
    <div class="chip">Icons</div>
  </div>
</div>`,
    css: `.chip-scene {
  padding: 24px;
  background: ${s.bg};
  border-radius: 16px;
}
.chip-label {
  color: ${subColor};
  font-size: 12px;
  font-weight: 600;
  font-family: ${fontFamily};
  text-transform: ${textUp};
  margin: 0 0 12px;
}
.chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip {
  padding: 6px 14px;
  background: ${inactiveBg};
  border: ${inactiveBorder};
  border-radius: ${radius}px;
  color: ${textColor};
  font-size: 13px;
  font-weight: 600;
  font-family: ${fontFamily};
  text-transform: ${textUp};
  cursor: pointer;
  box-shadow: ${inactiveShadow};
  transition: all 0.2s;
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(8px);' : ''}
}
.chip.active {
  background: ${activeBg};
  border: ${activeBorder};
  color: ${activeColor};
  box-shadow: ${activeShadow};
}
.chip:hover:not(.active) { opacity: 0.75; }`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Chip -->
<div class="p-6 rounded-2xl" style="background: ${s.bg}">
  <p class="text-xs font-semibold m-0 mb-3" style="color: ${subColor}; font-family: ${fontFamily}; text-transform: ${textUp};">Filter by:</p>
  <div class="flex flex-wrap gap-2">
    <div class="px-3.5 py-1.5 text-sm font-semibold cursor-pointer transition-all" style="background: ${activeBg}; border: ${activeBorder}; border-radius: ${radius}px; color: ${activeColor}; box-shadow: ${activeShadow}; font-family: ${fontFamily}; text-transform: ${textUp};">All</div>
    <div class="px-3.5 py-1.5 text-sm font-semibold cursor-pointer transition-all" style="background: ${activeBg}; border: ${activeBorder}; border-radius: ${radius}px; color: ${activeColor}; box-shadow: ${activeShadow}; font-family: ${fontFamily}; text-transform: ${textUp};">Design</div>
    <div class="px-3.5 py-1.5 text-sm font-semibold cursor-pointer transition-all" style="background: ${inactiveBg}; border: ${inactiveBorder}; border-radius: ${radius}px; color: ${textColor}; box-shadow: ${inactiveShadow}; font-family: ${fontFamily}; text-transform: ${textUp};">Development</div>
    <div class="px-3.5 py-1.5 text-sm font-semibold cursor-pointer transition-all" style="background: ${inactiveBg}; border: ${inactiveBorder}; border-radius: ${radius}px; color: ${textColor}; box-shadow: ${inactiveShadow}; font-family: ${fontFamily}; text-transform: ${textUp};">Motion</div>
    <div class="px-3.5 py-1.5 text-sm font-semibold cursor-pointer transition-all" style="background: ${inactiveBg}; border: ${inactiveBorder}; border-radius: ${radius}px; color: ${textColor}; box-shadow: ${inactiveShadow}; font-family: ${fontFamily}; text-transform: ${textUp};">Typography</div>
    <div class="px-3.5 py-1.5 text-sm font-semibold cursor-pointer transition-all" style="background: ${activeBg}; border: ${activeBorder}; border-radius: ${radius}px; color: ${activeColor}; box-shadow: ${activeShadow}; font-family: ${fontFamily}; text-transform: ${textUp};">Color</div>
    <div class="px-3.5 py-1.5 text-sm font-semibold cursor-pointer transition-all" style="background: ${inactiveBg}; border: ${inactiveBorder}; border-radius: ${radius}px; color: ${textColor}; box-shadow: ${inactiveShadow}; font-family: ${fontFamily}; text-transform: ${textUp};">Layout</div>
  </div>
</div>`
  }
}

/* ── DATA TABLE ── */
function generateTableCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const isDark = ['glassmorphism','bento-ui','dark-ui','cyberpunk','retro','gradient-ui','fluent-design','skeuomorphism'].includes(styleId)
  const textColor = isDark ? 'rgba(255,255,255,0.9)' : (styleId === 'brutalism' ? '#000' : '#111')
  const subColor = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.4)'
  const tableBg = styleId === 'glassmorphism' ? 'rgba(255,255,255,0.08)' :
    styleId === 'neumorphism' ? '#e0e5ec' :
    styleId === 'minimalism' ? '#fff' :
    styleId === 'brutalism' ? '#fff' :
    styleId === 'material-design' ? '#fff' :
    styleId === 'fluent-design' ? 'rgba(255,255,255,0.05)' :
    styleId === 'bento-ui' ? '#0f0f1a' :
    styleId === 'claymorphism' ? '#f0f4ff' :
    styleId === 'skeuomorphism' ? 'rgba(0,0,0,0.15)' :
    styleId === 'cyberpunk' ? 'rgba(0,255,255,0.02)' :
    styleId === 'retro' ? 'rgba(255,107,53,0.04)' :
    styleId === 'dark-ui' ? '#0d0d1a' :
    styleId === 'light-ui' ? '#fff' : 'rgba(255,255,255,0.1)'
  const headerBg = styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'rgba(255,255,255,0.12)' :
    styleId === 'neumorphism' ? 'rgba(0,0,0,0.04)' :
    styleId === 'brutalism' ? '#f5f500' :
    styleId === 'cyberpunk' ? 'rgba(0,255,255,0.08)' :
    styleId === 'retro' ? 'rgba(255,107,53,0.15)' :
    styleId === 'dark-ui' || styleId === 'bento-ui' ? 'rgba(108,99,255,0.12)' :
    styleId === 'claymorphism' ? '#d0e4f4' :
    styleId === 'material-design' ? '#6200ee' :
    styleId === 'fluent-design' ? 'rgba(255,255,255,0.1)' : 'rgba(108,99,255,0.08)'
  const headerText = styleId === 'material-design' ? '#fff' :
    styleId === 'brutalism' ? '#000' :
    styleId === 'cyberpunk' ? '#00ffff' :
    styleId === 'retro' ? '#ff6b35' :
    textColor
  const rowAltBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.025)'
  const borderColor = styleId === 'brutalism' ? '#000' :
    styleId === 'cyberpunk' ? 'rgba(0,255,255,0.15)' :
    styleId === 'retro' ? '#ff9d4d' :
    isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
  const tableBorder = styleId === 'brutalism' ? '3px solid #000' :
    styleId === 'cyberpunk' ? '1px solid rgba(0,255,255,0.2)' :
    styleId === 'retro' ? '2px solid #ff9d4d' :
    styleId === 'neumorphism' ? 'none' :
    isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.08)'
  const tableShadow = styleId === 'neumorphism' ? '6px 6px 14px #b8bec7,-6px -6px 14px #fff' :
    styleId === 'brutalism' ? '4px 4px 0 #000' :
    styleId === 'cyberpunk' ? '0 0 16px rgba(0,255,255,0.12)' :
    styleId === 'retro' ? '4px 4px 0 #ff9d4d' :
    styleId === 'claymorphism' ? '6px 6px 14px #d0d8ea,-4px -4px 10px #fff' : '0 4px 16px rgba(0,0,0,0.12)'
  const radius = styleId === 'brutalism' || styleId === 'cyberpunk' || styleId === 'retro' ? 0 :
    styleId === 'minimalism' ? 2 : styleId === 'neumorphism' ? 12 : 10
  const fontFamily = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'monospace' : 'inherit'
  const textUp = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'uppercase' : 'none'

  return {
    html: `<div class="tbl-scene">
  <table class="data-table">
    <thead>
      <tr>
        <th>Component</th>
        <th>Style</th>
        <th>Status</th>
        <th>Views</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Button</td>
        <td>Glassmorphism</td>
        <td><span class="status-badge active">Active</span></td>
        <td>12,847</td>
      </tr>
      <tr class="alt">
        <td>Card</td>
        <td>Neumorphism</td>
        <td><span class="status-badge active">Active</span></td>
        <td>9,312</td>
      </tr>
      <tr>
        <td>Modal</td>
        <td>Brutalism</td>
        <td><span class="status-badge pending">Draft</span></td>
        <td>4,201</td>
      </tr>
      <tr class="alt">
        <td>Navbar</td>
        <td>Dark UI</td>
        <td><span class="status-badge active">Active</span></td>
        <td>7,590</td>
      </tr>
    </tbody>
  </table>
</div>`,
    css: `.tbl-scene {
  padding: 24px;
  background: ${s.bg};
  border-radius: 16px;
  overflow-x: auto;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  background: ${tableBg};
  border: ${tableBorder};
  border-radius: ${radius}px;
  box-shadow: ${tableShadow};
  overflow: hidden;
  font-family: ${fontFamily};
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(12px);' : ''}
}
.data-table th {
  padding: 12px 16px;
  background: ${headerBg};
  color: ${headerText};
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  text-transform: ${textUp === 'none' ? 'uppercase' : textUp};
  letter-spacing: 0.5px;
  border-bottom: 1px solid ${borderColor};
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(8px);' : ''}
}
.data-table td {
  padding: 12px 16px;
  color: ${textColor};
  font-size: 13px;
  border-bottom: 1px solid ${borderColor};
}
.data-table tr.alt td { background: ${rowAltBg}; }
.data-table tr:last-child td { border-bottom: none; }
.status-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: ${radius === 0 ? 0 : 100}px;
  font-size: 11px;
  font-weight: 700;
}
.status-badge.active {
  background: rgba(34,197,94,0.15);
  color: #22c55e;
}
.status-badge.pending {
  background: rgba(234,179,8,0.15);
  color: #eab308;
}`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Data Table -->
<div class="p-6 rounded-2xl overflow-x-auto" style="background: ${s.bg}">
  <table class="w-full border-collapse overflow-hidden" style="background: ${tableBg}; border: ${tableBorder}; border-radius: ${radius}px; box-shadow: ${tableShadow}; font-family: ${fontFamily}; ${styleId === 'glassmorphism' ? 'backdrop-filter: blur(12px);' : ''}">
    <thead>
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold tracking-wide uppercase" style="background: ${headerBg}; color: ${headerText}; border-bottom: 1px solid ${borderColor};">Component</th>
        <th class="px-4 py-3 text-left text-xs font-bold tracking-wide uppercase" style="background: ${headerBg}; color: ${headerText}; border-bottom: 1px solid ${borderColor};">Style</th>
        <th class="px-4 py-3 text-left text-xs font-bold tracking-wide uppercase" style="background: ${headerBg}; color: ${headerText}; border-bottom: 1px solid ${borderColor};">Status</th>
        <th class="px-4 py-3 text-left text-xs font-bold tracking-wide uppercase" style="background: ${headerBg}; color: ${headerText}; border-bottom: 1px solid ${borderColor};">Views</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-4 py-3 text-sm" style="color: ${textColor}; border-bottom: 1px solid ${borderColor};">Button</td>
        <td class="px-4 py-3 text-sm" style="color: ${textColor}; border-bottom: 1px solid ${borderColor};">Glassmorphism</td>
        <td class="px-4 py-3" style="border-bottom: 1px solid ${borderColor};"><span class="inline-block px-2.5 py-0.5 text-xs font-bold rounded-full" style="background: rgba(34,197,94,0.15); color: #22c55e;">Active</span></td>
        <td class="px-4 py-3 text-sm" style="color: ${textColor}; border-bottom: 1px solid ${borderColor};">12,847</td>
      </tr>
      <tr style="background: ${rowAltBg}">
        <td class="px-4 py-3 text-sm" style="color: ${textColor}; border-bottom: 1px solid ${borderColor};">Card</td>
        <td class="px-4 py-3 text-sm" style="color: ${textColor}; border-bottom: 1px solid ${borderColor};">Neumorphism</td>
        <td class="px-4 py-3" style="border-bottom: 1px solid ${borderColor};"><span class="inline-block px-2.5 py-0.5 text-xs font-bold rounded-full" style="background: rgba(34,197,94,0.15); color: #22c55e;">Active</span></td>
        <td class="px-4 py-3 text-sm" style="color: ${textColor}; border-bottom: 1px solid ${borderColor};">9,312</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm" style="color: ${textColor}; border-bottom: 1px solid ${borderColor};">Modal</td>
        <td class="px-4 py-3 text-sm" style="color: ${textColor}; border-bottom: 1px solid ${borderColor};">Brutalism</td>
        <td class="px-4 py-3" style="border-bottom: 1px solid ${borderColor};"><span class="inline-block px-2.5 py-0.5 text-xs font-bold rounded-full" style="background: rgba(234,179,8,0.15); color: #eab308;">Draft</span></td>
        <td class="px-4 py-3 text-sm" style="color: ${textColor}; border-bottom: 1px solid ${borderColor};">4,201</td>
      </tr>
    </tbody>
  </table>
</div>`
  }
}

/* ── SIDEBAR ── */
function generateSidebarCode(styleId) {
  const s = badgeStyleMap[styleId] || badgeStyleMap.glassmorphism
  const isDark = ['glassmorphism','bento-ui','dark-ui','cyberpunk','retro','gradient-ui','fluent-design','skeuomorphism'].includes(styleId)
  const textColor = isDark ? 'rgba(255,255,255,0.9)' : (styleId === 'brutalism' ? '#000' : '#111')
  const subColor = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.38)'
  const sidebarBg = styleId === 'glassmorphism' ? 'rgba(255,255,255,0.1)' :
    styleId === 'neumorphism' ? '#e0e5ec' :
    styleId === 'minimalism' ? '#fff' :
    styleId === 'brutalism' ? '#fff' :
    styleId === 'material-design' ? '#fff' :
    styleId === 'fluent-design' ? 'rgba(255,255,255,0.06)' :
    styleId === 'bento-ui' ? '#0f0f1a' :
    styleId === 'claymorphism' ? '#f0f4ff' :
    styleId === 'skeuomorphism' ? 'linear-gradient(180deg,#3a3028,#2a2018)' :
    styleId === 'cyberpunk' ? '#050510' :
    styleId === 'retro' ? '#1a0a00' :
    styleId === 'dark-ui' ? '#0d0d1a' :
    styleId === 'light-ui' ? '#fff' : 'rgba(255,255,255,0.12)'
  const sidebarBorder = styleId === 'brutalism' ? '3px solid #000' :
    styleId === 'cyberpunk' ? '1px solid rgba(0,255,255,0.25)' :
    styleId === 'retro' ? '2px solid #ff9d4d' :
    styleId === 'minimalism' ? '1px solid #111' :
    styleId === 'neumorphism' ? 'none' :
    isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.07)'
  const sidebarShadow = styleId === 'neumorphism' ? '6px 6px 14px #b8bec7,-6px -6px 14px #fff' :
    styleId === 'brutalism' ? '4px 4px 0 #000' :
    styleId === 'cyberpunk' ? '0 0 20px rgba(0,255,255,0.12)' :
    styleId === 'retro' ? '4px 4px 0 #ff9d4d' :
    styleId === 'claymorphism' ? '6px 6px 14px #d0d8ea,-4px -4px 10px #fff,inset 2px 2px 4px rgba(255,255,255,0.5)' : '4px 0 24px rgba(0,0,0,0.15)'
  const activeItemBg = styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'rgba(255,255,255,0.15)' :
    styleId === 'brutalism' ? '#f5f500' :
    styleId === 'cyberpunk' ? 'rgba(0,255,255,0.1)' :
    styleId === 'retro' ? 'rgba(255,107,53,0.2)' :
    styleId === 'dark-ui' || styleId === 'bento-ui' ? 'rgba(108,99,255,0.2)' :
    styleId === 'neumorphism' ? 'rgba(108,99,255,0.08)' :
    styleId === 'light-ui' ? 'rgba(63,81,181,0.1)' : 'rgba(108,99,255,0.1)'
  const activeItemColor = styleId === 'cyberpunk' ? '#00ffff' :
    styleId === 'retro' ? '#ff6b35' :
    styleId === 'brutalism' ? '#000' :
    styleId === 'neumorphism' ? '#6c63ff' :
    styleId === 'dark-ui' || styleId === 'bento-ui' ? '#a78bfa' :
    styleId === 'light-ui' ? '#3f51b5' : s.color
  const logoBg = s.pillBg
  const logoColor = s.color
  const radius = styleId === 'brutalism' || styleId === 'cyberpunk' || styleId === 'retro' ? 0 :
    styleId === 'minimalism' ? 2 : styleId === 'neumorphism' ? 10 : 8
  const fontFamily = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'monospace' : 'inherit'
  const textUp = ['brutalism','cyberpunk','retro'].includes(styleId) ? 'uppercase' : 'none'

  return {
    html: `<div class="sb-scene">
  <aside class="sidebar">
    <!-- Logo -->
    <div class="sb-logo">
      <div class="sb-logo-icon">UI</div>
      <span class="sb-logo-text">Explorer</span>
    </div>
    <!-- Nav section -->
    <div class="sb-section">
      <p class="sb-section-label">Main</p>
      <nav class="sb-nav">
        <a class="sb-item active" href="#">
          <span class="sb-icon">🏠</span>
          <span>Dashboard</span>
        </a>
        <a class="sb-item" href="#">
          <span class="sb-icon">🧩</span>
          <span>Components</span>
        </a>
        <a class="sb-item" href="#">
          <span class="sb-icon">🎨</span>
          <span>Library</span>
        </a>
        <a class="sb-item" href="#">
          <span class="sb-icon">⚡</span>
          <span>Playground</span>
        </a>
      </nav>
    </div>
    <div class="sb-section">
      <p class="sb-section-label">More</p>
      <nav class="sb-nav">
        <a class="sb-item" href="#">
          <span class="sb-icon">⚙️</span>
          <span>Settings</span>
        </a>
        <a class="sb-item" href="#">
          <span class="sb-icon">👤</span>
          <span>Profile</span>
        </a>
      </nav>
    </div>
  </aside>
</div>`,
    css: `.sb-scene {
  padding: 24px;
  background: ${s.bg};
  border-radius: 16px;
  display: flex;
  justify-content: center;
}
.sidebar {
  width: 220px;
  background: ${sidebarBg};
  border: ${sidebarBorder};
  border-radius: ${radius}px;
  box-shadow: ${sidebarShadow};
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' || styleId === 'fluent-design' ? 'backdrop-filter: blur(16px);' : ''}
}
.sb-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 8px 16px;
  border-bottom: ${isDark ? '1px solid rgba(255,255,255,0.08)' : styleId === 'brutalism' ? '2px solid #000' : '1px solid rgba(0,0,0,0.07)'};
}
.sb-logo-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${logoBg};
  color: ${logoColor};
  font-weight: 900;
  font-size: 11px;
  font-family: ${fontFamily};
  border-radius: ${radius === 0 ? 0 : 8}px;
  box-shadow: ${s.shadow};
  ${styleId === 'glassmorphism' || styleId === 'gradient-ui' ? 'backdrop-filter: blur(8px);' : ''}
}
.sb-logo-text {
  color: ${textColor};
  font-weight: 800;
  font-size: 15px;
  font-family: ${fontFamily};
  text-transform: ${textUp};
}
.sb-section { display: flex; flex-direction: column; gap: 4px; }
.sb-section-label {
  color: ${subColor};
  font-size: 10px;
  font-weight: 700;
  font-family: ${fontFamily};
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 8px;
  margin: 0 0 4px;
}
.sb-nav { display: flex; flex-direction: column; gap: 2px; }
.sb-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: ${radius}px;
  color: ${subColor};
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  font-family: ${fontFamily};
  text-transform: ${textUp};
  transition: all 0.18s;
}
.sb-item.active {
  background: ${activeItemBg};
  color: ${activeItemColor};
}
.sb-item:hover:not(.active) {
  background: ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'};
  color: ${textColor};
}
.sb-icon { font-size: 16px; }`,
    tailwind: `<!-- Dynamic Tailwind structure for ${styleId} Sidebar -->
<div class="p-6 rounded-2xl flex justify-center" style="background: ${s.bg}">
  <aside class="w-56 flex flex-col gap-5 px-3 py-5 rounded-lg" style="background: ${sidebarBg}; border: ${sidebarBorder}; box-shadow: ${sidebarShadow}; ${styleId === 'glassmorphism' ? 'backdrop-filter: blur(16px);' : ''}">
    <!-- Logo -->
    <div class="flex items-center gap-2.5 px-2 pb-4" style="border-bottom: ${isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.07)'}">
      <div class="w-8 h-8 flex items-center justify-center text-[11px] font-black rounded-lg" style="background: ${logoBg}; color: ${logoColor}; font-family: ${fontFamily}; box-shadow: ${s.shadow};">UI</div>
      <span class="text-sm font-extrabold" style="color: ${textColor}; font-family: ${fontFamily}; text-transform: ${textUp};">Explorer</span>
    </div>
    <!-- Nav -->
    <div class="flex flex-col gap-1">
      <p class="text-[10px] font-bold uppercase tracking-widest px-2 m-0 mb-1" style="color: ${subColor}; font-family: ${fontFamily};">Main</p>
      <a class="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold no-underline rounded-md transition-all" href="#" style="background: ${activeItemBg}; color: ${activeItemColor}; font-family: ${fontFamily}; text-transform: ${textUp};"><span>🏠</span>Dashboard</a>
      <a class="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold no-underline rounded-md transition-all" href="#" style="color: ${subColor}; font-family: ${fontFamily}; text-transform: ${textUp};"><span>🧩</span>Components</a>
      <a class="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold no-underline rounded-md transition-all" href="#" style="color: ${subColor}; font-family: ${fontFamily}; text-transform: ${textUp};"><span>🎨</span>Library</a>
      <a class="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold no-underline rounded-md transition-all" href="#" style="color: ${subColor}; font-family: ${fontFamily}; text-transform: ${textUp};"><span>⚡</span>Playground</a>
    </div>
    <div class="flex flex-col gap-1">
      <p class="text-[10px] font-bold uppercase tracking-widest px-2 m-0 mb-1" style="color: ${subColor}; font-family: ${fontFamily};">More</p>
      <a class="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold no-underline rounded-md transition-all" href="#" style="color: ${subColor}; font-family: ${fontFamily}; text-transform: ${textUp};"><span>⚙️</span>Settings</a>
      <a class="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold no-underline rounded-md transition-all" href="#" style="color: ${subColor}; font-family: ${fontFamily}; text-transform: ${textUp};"><span>👤</span>Profile</a>
    </div>
  </aside>
</div>`
  }
}

export function getComponentCode(componentId, styleId) {
  if (componentId === 'badge') return generateBadgeCode(styleId)
  if (componentId === 'toggle') return generateToggleCode(styleId)
  if (componentId === 'avatar') return generateAvatarCode(styleId)
  if (componentId === 'progress') return generateProgressCode(styleId)
  if (componentId === 'toast') return generateToastCode(styleId)
  if (componentId === 'tooltip') return generateTooltipCode(styleId)
  if (componentId === 'dropdown') return generateDropdownCode(styleId)
  if (componentId === 'tabs') return generateTabsCode(styleId)
  if (componentId === 'breadcrumb') return generateBreadcrumbCode(styleId)
  if (componentId === 'accordion') return generateAccordionCode(styleId)
  if (componentId === 'stepper') return generateStepperCode(styleId)
  if (componentId === 'timeline') return generateTimelineCode(styleId)
  if (componentId === 'skeleton') return generateSkeletonCode(styleId)
  if (componentId === 'chip') return generateChipCode(styleId)
  if (componentId === 'table') return generateTableCode(styleId)
  if (componentId === 'sidebar') return generateSidebarCode(styleId)
  
  return codes[componentId]?.[styleId] || codes[componentId]?.glassmorphism || fallback
}
