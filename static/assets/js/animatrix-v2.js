var toggles = document.querySelectorAll('.toggle');
var modals = document.querySelectorAll('.modal');
var revealers = document.querySelectorAll('.revealer');

// reveal point from bottom and top of the window

listenAnimatrix();

function listenAnimatrix() {
  for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', loadAnimatrix);
  }
  window.addEventListener('scroll', reveal);
  reveal();
}

function reveal() {
  for (var i = 0; i < revealers.length; i++) {
    var revealerpoint = 150;
    var windowheight = window.innerHeight;
    var revealertop = revealers[i].getBoundingClientRect().top;
    var revealerbottom = revealers[i].getBoundingClientRect().bottom;

    if (revealertop < windowheight - revealerpoint) {
      revealers[i].classList.add('active');
    } else {
      revealers[i].classList.remove('active');
    }
    if (revealerbottom < 0 + revealerpoint) {
      revealers[i].classList.remove('active');
    }
  }
}

function loadAnimatrix(e) {
  var currentList = [];
  for (var i = 0; i < modals.length; i++) {
    if (
      (modals[i].classList.contains(e.target.classList.item(1)) &&
        modals[i].classList.contains(e.target.classList.item(2))) ||
      (modals[i].classList.contains(e.target.classList.item(1)) &&
        !modals[i].classList.contains(e.target.classList.item(2)) &&
        (modals[i].classList.contains('visible') ||
          modals[i].classList.contains('slide')))
    ) {
      currentList.push(modals[i]);
    }
  }
  enterAnimatrix(currentList);
}

function enterAnimatrix(list) {
  for (var i = 0; i < list.length; i++) {
    if (
      list[i].classList.contains(event.target.classList.item(2)) ||
      list[i].classList.contains('visible')
    ) {
      toggleAnimatrix(list[i]);
    }
  }
  resetAnimatrix(list);
}

function toggleAnimatrix(element) {
  element.classList.add('animation');
  element.addEventListener('transitionend', removeAnimatrix);
  element.classList.toggle('visible');
}

function removeAnimatrix(e) {
  e.target.classList.remove('animation');
  e.target.removeEventListener('transitionend', removeAnimatrix);
}

function resetAnimatrix(list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].classList.contains('slide')) {
      list[i].classList.remove('prev');
      list[i].classList.remove('next');
    }
  }
  reloadAnimatrix(list);
}

function reloadAnimatrix(list) {
  for (var i = 0; i < list.length; i++) {
    if (
      list[i].classList.contains('visible') &&
      list[i].classList.contains('slide')
    ) {
      if (
        list[i].previousElementSibling.classList.contains('slide') &&
        list[i].nextElementSibling
      ) {
        list[i].previousElementSibling.classList.add('prev');
        list[i].nextElementSibling.classList.add('next');
        return;
      }
      if (!list[i].nextElementSibling) {
        list[i].previousElementSibling.classList.add('prev');
        list[0].classList.add('next');
        return;
      }
      list[i].nextElementSibling.classList.add('next');
      list[list.length - 1].classList.add('prev');
    }
  }
}
