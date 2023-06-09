const test = document.querySelector(".btn-booking-tour");
const tourpackage_body = document.querySelectorAll(".tourpackage-body");

let stemp;

Array.from(tourpackage_body).map((item, index) => {
  item.addEventListener("click", (e) => {
    const active = document.querySelector(".active");
    if (active !== null) {
      active.classList.remove("active");
    }
    // const element = findParrent(e);
    const element = e.target.closest(".tourpackage-body");
    element.classList.add("active");
  });
});
