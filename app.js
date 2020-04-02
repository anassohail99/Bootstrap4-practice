const mybtn = document.getElementById("mybtn");

mybtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybtn.style.display = "block";
  } else {
    mybtn.style.display = "none";
  }
};
