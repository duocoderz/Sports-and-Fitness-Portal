window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky", window.scrollY > 50);
});
const togglebar = document.querySelector('.toggle');
const menu = document.querySelector('ol');
function navToggle() {
    togglebar.classList.toggle("active");
    menu.classList.toggle("active");
}



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }



function toggleTrainerInfo(exploreBtn) {
    const frame = exploreBtn.closest('.frame');
    const detailedInfo = frame.querySelector('.detailed-info');
    detailedInfo.style.display = detailedInfo.style.display === 'none' ? 'block' : 'none';
    exploreBtn.textContent = detailedInfo.style.display === 'none' ? 'Explore' : 'Show Less';
  }
