const btns = document.querySelectorAll(".number");
const img = document.querySelector(".center-img");

const imgs = [
  "url(/src/images/odd.jpg)",
  "url(/src/images/even.jpg)",
  "url(/src/images/odd.jpg)",
  "url(/src/images/even.jpg)",
  "url(/src/images/odd.jpg)",
  "url(/src/images/even.jpg)",
  "url(/src/images/odd.jpg)",
  "url(/src/images/even.jpg)",
  "url(/src/images/odd.jpg)",
  "url(/src/images/even.jpg)",
];

const imgHandler = (index) => {
  const { style } = img;
  style.backgroundImage = imgs[index];
};

btns.forEach((btn, index) => {
  btn.addEventListener("mouseover", (e) => {
    imgHandler(index);
  });
});
