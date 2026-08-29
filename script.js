function changeLang(language) {
  document.getElementById("lang1").innerText = language;
}

document.getElementById("leftbtn").onclick = () => {
  document
    .getElementById("movieList")
    .scrollBy({ left: -1000, behavior: "smooth" });
  document.getElementById("rightbtn").style.display = "block";
  document.getElementById("leftbtn").style.display = "none";
};

document.getElementById("rightbtn").onclick = () => {
  document
    .getElementById("movieList")
    .scrollBy({ left: 1000, behavior: "smooth" });
  document.getElementById("leftbtn").style.display = "block";
  document.getElementById("rightbtn").style.display = "none";
};

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".que");

  question.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) otherItem.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});
