function initializeHeader() {
  const menuBtn = document.querySelector('.menu');
  const nav = document.querySelector('.nav-items ul');

  if (!menuBtn || !nav) {
    console.warn('Menu or nav not found!');
    return;
  }

  menuBtn.addEventListener('click', function () {
    console.log('button clicked!');
    nav.classList.toggle('active');
    menuBtn.innerHTML = nav.classList.contains('active')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });
}
