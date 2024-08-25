/** @type {NodeListOf<HTMLElement>} */
const reviewStars = document.querySelectorAll(".review-stars");

reviewStars.forEach((stars) => {
  const { dataset } = stars;
  const { grade } = dataset;
  const isFloat = grade.includes(".");
  const reviewGrade = isFloat ? parseInt(grade) : parseInt(grade) - 1;
  const gradeFloat = isFloat ? parseInt(grade.split(".")[1].padEnd(2, "0")) : 100;
  /** @type {NodeListOf<HTMLElement>} */
  const starItems = stars.querySelectorAll(".review-stars__item");

  starItems[reviewGrade]?.style.setProperty("--star-grade", `${gradeFloat}%`);
});
