//(function(){
//    const nav = document.getElementById('mainNav');
//    const output = document.getElementById('output');
//    const items = nav.querySelectorAll('.nav-item');
//
//    items.forEach(it => {
//      it.addEventListener('click', () => {
//        const key = it.getAttribute('data-key');
//        output.textContent = 'Bạn chọn: ' + it.textContent + ' (id: ' + key + ')';
//      });
//    });
//
//    // Mobile toggle
//    const toggle = document.getElementById('menuToggle');
//    toggle.addEventListener('click', () => {
//      const open = nav.classList.toggle('open');
//      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
//    });
//
//    // Simple search that highlights first matching nav item
//    const search = document.getElementById('searchInput');
//    search.addEventListener('input', () => {
//      const q = search.value.trim().toLowerCase();
//      items.forEach(it => {
//        if(!q) { it.style.outline=''; return; }
//        const text = it.textContent.toLowerCase();
//        if(text.includes(q)) {
//          it.style.outline = '2px solid rgba(255,255,255,0.6)';
//          it.scrollIntoView({behavior:'smooth', block:'nearest'});
//        } else {
//          it.style.outline = '';
//        }
//      });
//    });
//  })();
const slides = document.querySelectorAll('.slideshow img');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 2000); // đổi hình mỗi 2 giây

