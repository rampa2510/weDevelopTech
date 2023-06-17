function toggleMenu() {
  let mobNavElemDisplay = document.getElementsByClassName("nav-list-mob")[0];
  if (mobNavElemDisplay.style.display === "flex")
    mobNavElemDisplay.style.display = "none";
  else mobNavElemDisplay.style.display = "flex";
}

// adding event listner to close toggle in case of menu click

const ul = document.getElementById("mob-list");
const lis = ul.getElementsByTagName("li");
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function () {
    document.getElementsByClassName("nav-list-mob")[0].style.display = "none";
  });
}
