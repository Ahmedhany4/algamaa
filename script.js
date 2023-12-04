let total = 8 * 30;
let الجزء = 1;
let الربع = 1;
let index = 0;
let المره = 2 ;
let names2 = ["اسلام صاوي", "معاذ فكري", "بلال اسامه", "احمد ياسر",
              "احمد فرج", "عمار الشيخ", "احمد هاني", "باور", "حسام", "بيدو"];

let outputContainer = document.getElementById("outputContainer");

for (let i = 1; i <= total; i++) {
  let output = `${names2[index++]} : الجزء => ${الجزء} , الربع => ${الربع++}<br>`;
  outputContainer.innerHTML += `<li class="output">${output}</li>`;
  
  if (i % 8 === 0) {
    الجزء++;
    الربع = 1;
  }
  
  if (i % 10 === 0) {
    outputContainer.innerHTML += `<div class="separator"><span id="item${المره}">${' المرة ' + المره}</span></div>`;
    المره++;
    index = 0;
  }
}
function toggleDropdown(menuId) {
  const dropdownMenu = document.getElementById(menuId);
  dropdownMenu.style.display = (dropdownMenu.style.display === 'grid') ? 'none' : 'grid';
}
function toggleDropdown2(element) {
  element.classList.toggle('active');
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
  toggleScrollToTopButton();
};

function toggleScrollToTopButton() {
  const btn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}