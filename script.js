let ru = document.querySelectorAll('.link_place_header')[0];
let eng = document.querySelectorAll('.link_place_header')[1];

ru.addEventListener('click', function () {
  ru.classList.toggle('link_active');
  eng.classList.toggle('link_active');
});

eng.addEventListener('click', function () {
  ru.classList.toggle('link_active');
  eng.classList.toggle('link_active');
});

