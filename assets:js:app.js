// ===== Countdown =====
const countdown = document.getElementById('countdown');
const eventDate = new Date('2025-12-27T14:00:00-06:00').getTime(); // 2:00 PM CDMX
function updateCountdown(){
  const now = Date.now();
  const dist = eventDate - now;
  const d = Math.max(0, Math.floor(dist / 86400000));
  const h = Math.max(0, Math.floor((dist % 86400000) / 3600000));
  const m = Math.max(0, Math.floor((dist % 3600000) / 60000));
  const s = Math.max(0, Math.floor((dist % 60000) / 1000));
  countdown.innerHTML = `
    <div class='cd-box'><div class='num'>${d}</div><div class='lbl'>días</div></div>
    <div class='cd-box'><div class='num'>${h}</div><div class='lbl'>horas</div></div>
    <div class='cd-box'><div class='num'>${m}</div><div class='lbl'>min</div></div>
    <div class='cd-box'><div class='num'>${s}</div><div class='lbl'>seg</div></div>`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ===== Sparkles =====
const spark = document.getElementById('spark');
const N = 28; // cantidad de brillitos
for(let i=0;i<N;i++){
  const e = document.createElement('span');
  e.className='spark';
  const x = Math.random()*100; // vw
  const delay = -Math.random()*12; // desfasado
  const size = 3 + Math.random()*4;
  e.style.left = x + 'vw';
  e.style.top = (-10 - Math.random()*90) + 'vh';
  e.style.animationDelay = delay + 's';
  e.style.width = e.style.height = size + 'px';
  spark.appendChild(e);
}

// ===== Reveal on scroll =====
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(el=>{ if(el.isIntersecting){ el.target.classList.add('in'); obs.unobserve(el.target);} });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));

// ===== Smooth parallax for hero text =====
const hero = document.querySelector('.hero');
window.addEventListener('scroll',()=>{
  const y = window.scrollY * 0.2;
  hero.style.backgroundPosition = `center calc(50% + ${y}px)`;
});

// ===== Music toggle =====
const btn = document.getElementById('musicBtn');
const song = document.getElementById('song');
btn.addEventListener('click', ()=>{
  if(!song.src){ /* asigna tu pista aquí si se dejó vacío */ }
  if(song.paused){ song.play(); btn.textContent='⏸︎ Pausar'; }
  else { song.pause(); btn.textContent='♪ Música'; }
});

// ===== Lluvia de sobres (solo al entrar en la sección) =====
const lluvia = document.querySelector('#lluvia .stage');
let rainTimer = null;
function spawnEnvelope(){
  if(!lluvia) return;
  const w = lluvia.clientWidth;
  const env = document.createElement('div');
  env.className = 'envelope';
  env.style.left = Math.random() * (w - 50) + 'px';
  env.style.animationDuration = (4 + Math.random()*3) + 's';
  env.style.transform = `translateY(0) rotate(${8 + Math.random()*20}deg)`;
  lluvia.appendChild(env);
  setTimeout(()=> env.remove(), 8000);
}
const rainObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      if(!rainTimer){
        // ráfagas variables
        rainTimer = setInterval(()=>{
          for(let i=0;i<3;i++) spawnEnvelope();
        }, 600);
      }
    } else {
      if(rainTimer){ clearInterval(rainTimer); rainTimer=null; }
    }
  })
},{threshold:.3});
const lluviaCard = document.getElementById('lluvia');
if(lluviaCard) rainObs.observe(lluviaCard);
