import { technologies } from "./technologies.js";

const projects = [
  {
    hidden: false,
    project: "АГРЕГАТОР МУЗЫКАНТОВ",
    link: "fame.html",
    text: `Современные технологии достигли такого уровня, что базовый вектор развития, в своём классическом представлении, допускает внедрение приоритизации разума над эмоциями.`,
    image: "1.jpg",
    externalLink: "fame.mu",
    technologies: [
      technologies.django,
      technologies.fastapi,
      technologies.celery,
      technologies.redis,
      technologies.docker,
      technologies.vuejs,
    ],
  },
  {
    hidden: false,
    project: "Агрегатор цифровых компаний мира",
    link: "7be.html",
    text: `7% лучших диджитал компаний в мире на одном сайте. Аналог популярного ресурса clutch-co. Дает возможность пользователям публиковать задачи для и получать предложения от агентств.`,
    image: "2.jpg",
    externalLink: "7be.io",
    technologies: [
      technologies.nuxt,
      technologies.vuejs,
      technologies.elastic,
      technologies.django,
      technologies.fastapi,
      technologies.celery,
    ]
  }
];

export { projects };
