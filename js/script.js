let toggle = () => {
  let blur = document.getElementById("blur");
  blur.classList.toggle("active");
};

let pop_up = document.querySelectorAll(".pop-up");

let body = document.body;
Array.from(pop_up).forEach((element, i) => {
  let detail = document.getElementById(`detail${i + 1}`);

  detail.addEventListener("click", () => {
    toggle();
    element.classList.add("open-popup");
    body.classList.add("stop-scroll");
  });

  let back = document.getElementById(`back${i + 1}`);

  back.addEventListener("click", () => {
    toggle();
    element.classList.remove("open-popup");
    body.classList.remove("stop-scroll");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});



let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}