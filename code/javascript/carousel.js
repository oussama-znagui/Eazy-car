let currentIndex = 0;
const Items = document.querySelectorAll('#item');


function showSlide(index) {
  Items.forEach((item, i) => {
    if (i === index) {
      item.style.display = 'block';
      item.style.display = 'flex'
    } else {
      item.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % Items.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + Items.length) % Items.length;
  showSlide(currentIndex);
}
document.querySelectorAll('#next').forEach(btn =>{
    btn.addEventListener('click',nextSlide)
})
document.querySelectorAll('#prev').forEach(btn =>{
    btn.addEventListener('click',prevSlide)
})
showSlide(currentIndex);
setInterval(nextSlide,5000);

