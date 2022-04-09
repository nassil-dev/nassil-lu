var prev = document.querySelector('.toggle.xd.prev');
var next = document.querySelector('.toggle.xd.next');
var slides = document.querySelector('.modal.xd.slides');
var slide = document.querySelector('.xd.slide').clientWidth;

prev.addEventListener('click', loadPrev);
next.addEventListener('click', loadNext);

function loadPrev() {
  slides.scrollBy('-' + slide, 0);
}

function loadNext() {
  slides.scrollBy(slide, 0);
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
