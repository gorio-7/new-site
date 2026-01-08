function ChangeImage(subImage) {
  const main = document.getElementById("mainImage");
  main.src = subImage.src;
}

window.addEventListener("load", () => {
  document.querySelector(".subImage img").classList.add("active");
});

function ChangeImage(subImage) {
  const main = document.getElementById("mainImage");
  main.src = subImage.src;

  document.querySelectorAll(".subImage img").forEach(img => {
    img.classList.remove("active");
  });

  subImage.classList.add("active");
}



const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const countInput = document.querySelector(".count");

minusBtn.addEventListener("click", () => {
  let value = parseInt(countInput.value);
  if (value > 1) { // 最低1個
    countInput.value = value - 1;
  }
});

plusBtn.addEventListener("click", () => {
  let value = parseInt(countInput.value);
  countInput.value = value + 1;
});