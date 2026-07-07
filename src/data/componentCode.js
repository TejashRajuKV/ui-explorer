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

export function getComponentCode(componentId, styleId) {
  if (componentId === 'badge') return generateBadgeCode(styleId)
  if (componentId === 'toggle') return generateToggleCode(styleId)
  if (componentId === 'avatar') return generateAvatarCode(styleId)
  if (componentId === 'progress') return generateProgressCode(styleId)
  
  return codes[componentId]?.[styleId] || codes[componentId]?.glassmorphism || fallback
}
