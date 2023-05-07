const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
document.querySelector('button').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  mainContent.classList.toggle('main-content_large')
}

function getPics() {} 
const imgs = document.querySelectorAll('.gallery img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});