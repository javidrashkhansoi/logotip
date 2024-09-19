/** @type {HTMLElement} */
const stackArticles = document.querySelectorAll(".stacks-article");

stackArticles.forEach((article) => {
  const articleResizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      /** @type {{target: HTMLElement}} */
      const { target } = entry;

      const height = entry.target.scrollHeight;

      target.style.setProperty("--stacks-article-height", `${height}px`);
    });
  });

  articleResizeObserver.observe(article);

  article.addEventListener("click", () => {
    article.classList.toggle("stacks-article--show");
  });
});
