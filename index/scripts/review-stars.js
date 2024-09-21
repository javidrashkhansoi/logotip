/** @type {NodeListOf<HTMLElement>} */
const reviewStars = document.querySelectorAll(".review-stars");

reviewStars.forEach((stars) => {
  const { dataset } = stars;
  const { grade } = dataset;
  /** @type {NodeListOf<HTMLElement>} */
  const starItems = stars.querySelectorAll(".review-stars__item");

  if (grade === "0") {
    starItems[0]?.style.setProperty("--star-grade", `0%`);
  } else {
    const isFloat = grade.includes(".");
    const reviewGrade = isFloat ? parseInt(grade) : parseInt(grade) - 1;
    const gradeFloat = isFloat ? parseInt(grade.split(".")[1].padEnd(2, "0")) : 100;

    starItems[reviewGrade]?.style.setProperty("--star-grade", `${gradeFloat}%`);
  }
});
