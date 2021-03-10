function scrollToSmoothly(pos, time) {
  if (isNaN(pos)) {
    throw "Position must be a number";
  }
  if (pos < 0) {
    throw "Position can not be negative";
  }
  var currentPos = window.scrollY || window.screenTop;
  if (currentPos < pos) {
    if (time) {
      var x;
      var i = currentPos;
      x = setInterval(function () {
        window.scrollTo(0, i);
        i += 10;
        if (i >= pos) {
          clearInterval(x);
        }
      }, time);
    } else {
      var t = 10;
      for (let i = currentPos; i <= pos; i += 10) {
        t += 10;
        setTimeout(function () {
          window.scrollTo(0, i);
        }, t / 2);
      }
    }
  } else {
    time = time || 2;
    var i = currentPos;
    var x;
    x = setInterval(function () {
      window.scrollTo(0, i);
      if (i <= pos) {
        clearInterval(x);
      }
      i -= 10;
    }, time);
  }
}

function move_slow(pos, isLeft) {
  if (isNaN(pos)) {
    throw "Position must be a number";
  }
  if (pos < 0) {
    throw "Position can not be negative";
  }

  let scroller = document.querySelector(".scroller");
  let arrowLeft = document.querySelector(".arrow-left");
  let arrowRight = document.querySelector(".arrow-right");

  let maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;

  let total = maxScrollLeft - pos;

  let newValue = total < 100 ? maxScrollLeft : pos;

  if (isLeft) {
    newValue = pos < 100 ? 0 : pos;
  }

  scroller.scrollLeft = newValue;

  if (isLeft) {
    if (newValue == 0) {
      arrowLeft.style.opacity = 0.3;
      arrowLeft.style.cursor = "not-allowed";
    }
    if (newValue > 0) {
      arrowRight.style.opacity = 1;
      arrowRight.style.cursor = "pointer";
    }
  } else {
    arrowLeft.style.opacity = 1;
    arrowLeft.style.cursor = "pointer";
    if (newValue >= maxScrollLeft) {
      arrowRight.style.opacity = 0.3;
      arrowRight.style.cursor = "not-allowed";
    }
  }
}

function move_left() {
  let scroller_actual = document.querySelector(".scroller").scrollLeft;
  if (scroller_actual !== 0) {
    let calc = scroller_actual - 300;
    move_slow(calc < 0 ? 0 : calc, true);
  }
}

function move_right() {
  let scroller_actual = document.querySelector(".scroller").scrollLeft;
  move_slow(scroller_actual + 300, false);
}

function partArray(arr, size) {
  let newArray = [];
  let i = 0;
  while (i < arr.length) {
    newArray.push(arr.slice(i, i + size));
    i += size;
  }
  return newArray;
}

function slice_item(selector, pos, total_opc) {
  let tbnames = document.querySelectorAll(selector);
  let arr_slice = partArray(Array.from(tbnames), total_opc);
  arr_slice.forEach((el) => {
    el.forEach((element, index) => {
      element.classList.remove("default");
      if (index == pos) {
        element.classList.add("default");
      }
    });
  });
}

function move_mobile(pos, total_opc) {
  slice_item(".table__header ul li", pos, total_opc);
  slice_item(".table__content ul li", pos, total_opc);
  scrollToSmoothly(Number(800));
}

function change_active_btn(element, index) {
  let btns = document.querySelectorAll(".btn-mobile div");
  btns.forEach((el) => el.classList.remove("active"));
  element.classList.add("active");
  move_mobile(index, btns.length);
}

//add listent btns
function load() {
  let btns = document.querySelectorAll(".btn-mobile div");

  btns.forEach((el, index) => {
    el.addEventListener(
      "click",
      function () {
        change_active_btn(el, index);
      },
      false
    );
  });
}

document.addEventListener("DOMContentLoaded", load, false);
