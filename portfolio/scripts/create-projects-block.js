const mode = import.meta.env.MODE;

if (mode === "ru") {
  import("./projects-ru.js").
    then(({ projects }) => {
      createProjectBlock(projects);
    });
}

if (mode === "en") {
  import("./projects-en.js").
    then(({ projects }) => {
      createProjectBlock(projects);
    });
}

function createProjectBlock(projects) {
  const portfolioContainer = document.querySelector(".portfolios__container");

  if (portfolioContainer) {
    const portfolioList = document.createElement("ul");

    portfolioList.classList.add("portfolios__list", "portfolios-list");

    projects.forEach((projectObject) => {
      const {
        hidden = false,
        project,
        link,
        text,
        image,
        externalLink,
        technologies,
      } = projectObject;

      if (!hidden) {
        const portfolioListItem = document.createElement("li");
        const portfolio = document.createElement("article");
        const portfolioContent = document.createElement("div");
        const portfolioImageBlock = document.createElement("a");
        const portfolioImage = document.createElement("img");
        const portfolioExternalLink = document.createElement("a");
        const portfolioTitle = document.createElement("h2");
        const portfolioLink = document.createElement("a")
        const portfolioText = document.createElement("p");
        const portfolioTechnologies = document.createElement("div");
        const portfolioTechnologiesTitle = document.createElement("h3");
        const portfolioTechnologiesList = document.createElement("ul");

        portfolioListItem.classList.add("portfolios-list__item");
        portfolio.classList.add("portfolio", "glass");
        portfolioContent.classList.add("portfolio__content");
        portfolioImageBlock.classList.add("portfolio__image");
        portfolioExternalLink.classList.add("portfolio__link");
        portfolioTitle.classList.add("portfolio__title");
        portfolioText.classList.add("portfolio__text");
        portfolioTechnologies.classList.add("portfolio__technologies", "portfolio-technologies");
        portfolioTechnologiesTitle.classList.add("portfolio-technologies__title");
        portfolioTechnologiesList.classList.add("portfolio-technologies__list");

        portfolioImageBlock.href = `../cases/${link}`;

        portfolioImage.src = `../images/images/portfolio/${image}`;
        portfolioImage.alt = project;
        portfolioImage.loading = "lazy";

        portfolioExternalLink.href = `https://${externalLink}`;
        portfolioExternalLink.target = "_blank";
        portfolioExternalLink.innerText = `https://${externalLink}`;

        portfolioLink.href = `../cases/${link}`;
        portfolioLink.innerText = project;

        portfolioText.innerText = text;

        portfolioTechnologiesTitle.innerText = "Технологии:";

        technologies.forEach((technologyObject) => {
          const { icon, width = 50, technology, } = technologyObject;

          const portfolioTechnologiesItem = document.createElement("li");
          const portfolioTechnologiesIcon = document.createElement("img");

          portfolioTechnologiesItem.classList.add("portfolio-technologies__icon");

          portfolioTechnologiesIcon.src = `../images/icons/technologies/${icon}`;
          portfolioTechnologiesIcon.alt = technology;
          portfolioTechnologiesIcon.loading = "lazy";
          portfolioTechnologiesIcon.style.setProperty("--portfolio-technology-icon-width", width);

          portfolioTechnologiesItem.append(portfolioTechnologiesIcon);
          portfolioTechnologiesList.append(portfolioTechnologiesItem);
        });

        portfolioTitle.append(portfolioLink);
        portfolioTechnologies.append(portfolioTechnologiesTitle, portfolioTechnologiesList);
        portfolioContent.append(portfolioExternalLink, portfolioTitle, portfolioText, portfolioTechnologies);
        portfolioImageBlock.append(portfolioImage);
        portfolio.append(portfolioContent, portfolioImageBlock);
        portfolioListItem.append(portfolio);
        portfolioList.append(portfolioListItem);
      }
    });

    portfolioContainer.append(portfolioList);
  }
}
