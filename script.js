const header=document.querySelector('.site-header');
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');

function syncHeader(){header.classList.toggle('is-stuck',window.scrollY>40)}
syncHeader();
window.addEventListener('scroll',syncHeader,{passive:true});

menuButton.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')==='true';
  menuButton.setAttribute('aria-expanded',String(!open));
  menuButton.setAttribute('aria-label',open?'Abrir menú':'Cerrar menú');
  nav.classList.toggle('is-open',!open);
});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Abrir menú');
}));

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduceMotion){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'))}
else{
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})
  },{threshold:.12,rootMargin:'0px 0px -40px'});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}

document.querySelectorAll('.faq details').forEach(item=>item.addEventListener('toggle',()=>{
  if(item.open){document.querySelectorAll('.faq details[open]').forEach(other=>{if(other!==item)other.open=false})}
}));

document.getElementById('quote-form').addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const nombre=data.get('nombre').trim();
  const comuna=data.get('comuna').trim();
  const servicio=data.get('servicio');
  const ancho=data.get('ancho').trim();
  const alto=data.get('alto').trim();
  const detalle=data.get('detalle').trim();
  const medidas=ancho||alto?`${ancho||'—'} × ${alto||'—'} cm`:'Por confirmar';
  const message=[
    'Hola Vidriería C&M, quiero solicitar una cotización.',
    '',
    `Nombre: ${nombre}`,
    `Comuna/sector: ${comuna}`,
    `Servicio: ${servicio}`,
    `Medidas aproximadas: ${medidas}`,
    detalle?`Detalle: ${detalle}`:''
  ].filter(Boolean).join('\n');
  window.open(`https://wa.me/56926037785?text=${encodeURIComponent(message)}`,'_blank','noopener');
});

document.getElementById('year').textContent=new Date().getFullYear();
