// Lessons Stats
const lsBars = document.querySelectorAll(".ls-after");
const lsPercents = document.querySelectorAll(".ls-percent");

const bwc = () => {
  lsBars.forEach((lsBar, a) => {
    lsPercents.forEach((lsPercent, b) => {
      if (a === b) {
        lsBar.style.width = `${lsPercent.innerHTML}`;
      }
    });
  });
};

bwc();

// View all courses

const coursesExpandBtn = document.querySelector(".lesson-btn");
const coursesList = document.querySelector(".lessons-w");
coursesExpandBtn.addEventListener("click", () => {
  coursesList.classList.toggle("active");
});

// Starter

const starterBtn = document.querySelector(".icon");

const generalStats = document.querySelector(".general-stats-container");

starterBtn.addEventListener("click", () => {
  starterBtn.parentElement.parentElement.style.display = "none";

  generalStats.style.display = "block";
  generalStats.firstElementChild.firstElementChild.style.display = "none";
  setTimeout(() => {
    generalStats.firstElementChild.style.width = "454px";
    setTimeout(() => {
      generalStats.firstElementChild.style.padding = "72px";
      setTimeout(() => {
        generalStats.firstElementChild.firstElementChild.style.display =
          "block";
      }, 425);
    }, 500);
  }, 150);
  console.log(generalStats.firstElementChild);
});

// Lessons Details Starter

const courseGoBtns = document.querySelectorAll(".course-go-btn");
const lessonsDetails = document.querySelector(".lessons-details-wrapper");

console.log(lessonsDetails.firstElementChild);

courseGoBtns.forEach((courseGoBtn) => {
  courseGoBtn.addEventListener("click", () => {
    generalStats.setAttribute("style", "display:none !important;");
    lessonsDetails.style.display = "block";
    setTimeout(() => {
      lessonsDetails.style.width = "576px";
      setTimeout(() => {
        lessonsDetails.style.padding = "72px";
        setTimeout(() => {
          lessonsDetails.firstElementChild.style.display = "block";
        }, 770);
      }, 900);
    }, 200);
  });
});
