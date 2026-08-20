const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');menu?.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(o))});document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();document.getElementById('feedbackForm')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget),v=k=>(f.get(k)||'').toString().trim();const msg=`Rating/Bewertung/Ocena: ${v('rating')}/5
Category/Kategorie/Kategoria: ${v('category')}
Team: ${v('staff')||'-'}
Name: ${v('name')||'-'}
Email: ${v('email')||'-'}

${v('message')}`;location.href=`mailto:info@sapvfl.de?subject=${encodeURIComponent('Website feedback')}&body=${encodeURIComponent(msg)}`;document.getElementById('formStatus').textContent='E-mail client opened / E-Mail-Programm geöffnet / Otwarto program pocztowy.'});