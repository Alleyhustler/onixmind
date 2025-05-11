window.addEventListener('load', function () {
  const images = [
    'corn.png'
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  const header = document.querySelector('header');
  if (header) {
    header.style.backgroundImage = `url('${randomImage}')`;
  }
});