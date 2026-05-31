// ─── REVEAL ON SCROLL ───
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ─── ANIMAÇÃO BARRAS ───
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        document.getElementById('barPop').style.width = '72%';
        document.getElementById('barFood').style.width = '85%';
        document.getElementById('barForest').style.width = '58%';
        document.getElementById('popYear').textContent = '→ 2050';
        document.getElementById('foodYear').textContent = '→ 2050';
        document.getElementById('forestYear').textContent = 'sustentável';
      }, 400);
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
const animBars = document.getElementById('animBars');
if (animBars) barObserver.observe(animBars);

// ─── FAZENDA INTERATIVA ───
const tips = {
  trator: {
    icon: '🚜',
    title: 'Agricultura de Precisão',
    desc: 'Tratores equipados com GPS e sensores monitoram cada metro da lavoura, aplicando fertilizantes e defensivos apenas onde necessário — reduzindo custos e impacto ambiental.'
  },
  mata: {
    icon: '🌳',
    title: 'Preservação Ambiental',
    desc: 'As áreas de mata nativa funcionam como corredores ecológicos, protegendo espécies, regulando o clima local e mantendo o solo saudável.'
  },
  lago: {
    icon: '💧',
    title: 'Proteção Hídrica',
    desc: 'Lagos e nascentes são protegidos por faixas de vegetação (matas ciliares). Água limpa no campo significa mais qualidade de vida para todos.'
  },
  solar: {
    icon: '☀️',
    title: 'Energia Limpa',
    desc: 'Painéis solares e biomassa substituem combustíveis fósseis na propriedade rural, reduzindo emissões e gerando economia a longo prazo.'
  },
  abelha: {
    icon: '🐝',
    title: 'Polinização Natural',
    desc: 'As colmeias nas fazendas garantem a polinização das culturas, essencial para a produção de frutas, legumes e sementes. Proteger as abelhas é proteger nossa comida.'
  }
};

const tooltip = document.getElementById('farmTooltip');
document.querySelectorAll('.hotspot').forEach(hs => {
  hs.addEventListener('click', () => {
    const key = hs.dataset.tip;
    const t = tips[key];
    tooltip.innerHTML = `<strong>${t.icon} ${t.title}</strong>${t.desc}`;
    tooltip.classList.add('visible');
  });
  hs.addEventListener('mouseenter', () => {
    const key = hs.dataset.tip;
    const t = tips[key];
    tooltip.innerHTML = `<strong>${t.icon} ${t.title}</strong>${t.desc}`;
    tooltip.classList.add('visible');
  });
  hs.addEventListener('mouseleave', () => {
    tooltip.classList.remove('visible');
  });
});

// ─── NAV SHADOW ON SCROLL ───
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.boxShadow =
    window.scrollY > 40 ? '0 4px 24px rgba(0,0,0,0.2)' : 'none';
});
