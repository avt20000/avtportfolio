

const els = document.querySelectorAll(".mydiv");
els.forEach((name) => {
  dragElement(name);
});

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }
  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');

    }

  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('.video');


if ('ontouchstart' in window || navigator.maxTouchPoints) {
    video.addEventListener('touchstart', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
} else {

    video.addEventListener('mouseenter', function () {
        video.play();
    });

    video.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
    });
}

const video2 = document.querySelector('.video2');


if ('ontouchstart' in window || navigator.maxTouchPoints) {
    video2.addEventListener('touchstart', function () {
        if (video2.paused) {
            video2.play();
        } else {
            video2.pause();
        }
    });
} else {

    video2.addEventListener('mouseenter', function () {
        video2.play();
    });

    video2.addEventListener('mouseleave', function () {
        video2.pause();
        video2.currentTime = 0;
    });
}

const video3 = document.querySelector('.video3');


if ('ontouchstart' in window || navigator.maxTouchPoints) {
    video3.addEventListener('touchstart', function () {
        if (video3.paused) {
            video3.play();
        } else {
            video3.pause();
        }
    });
} else {

    video3.addEventListener('mouseenter', function () {
        video3.play();
    });

    video3.addEventListener('mouseleave', function () {
        video3.pause();
        video3.currentTime = 0;
    });
}