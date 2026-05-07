const sections = [
  {
    key: "articles",
    eyebrow: "Категорія 01",
    title: "Статті",
    description:
      "Наукові статті, опубліковані або підготовлені до подання. Для кожного запису можна додати DOI, архів або сторінку журналу.",
    items: [
      {
        title:
          "ПІДГОТОВКА МАЙБУТНІХ УЧИТЕЛІВ ІНФОРМАТИКИ ДО ІНТЕГРАЦІЇ ШТУЧНОГО ІНТЕЛЕКТУ У НАВЧАЛЬНИЙ ПРОЦЕС НА ПРИКЛАДІ ЧАТ-БОТА",
        description:
          "Стаття у журналі Open Educational E-Environment of Modern University. ",
        status: "Опубліковано",
        href: "https://openedu.kubg.edu.ua/journal/index.php/openedu/article/view/608",
        extraLinks: [
          {
            label: "DOI: 10.28925/2414-0325.2025.1917",
            href: "https://doi.org/10.28925/2414-0325.2025.1917",
          },
          {
            label: "ResearchGate",
            href: "https://www.researchgate.net/publication/398148587_PREPARING_FUTURE_COMPUTER_SCIENCE_TEACHERS_FOR_THE_INTEGRATION_OF_ARTIFICIAL_INTELLIGENCE_INTO_THE_EDUCATIONAL_PROCESS_THE_CASE_OF_A_CHATBOT?_tp=eyJjb250ZXh0Ijp7InBhZ2UiOiJwcm9maWxlIiwicHJldmlvdXNQYWdlIjpudWxsLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19",
          },
        ],
        tags: ["AI в освіті"],
      },
      {
        title:
          "ПОЛІТИКА ВИКОРИСТАННЯ ШТУЧНОГО ІНТЕЛЕКТУ У ПРОЦЕСІ НАПИСАННЯ НАУКОВИХ РОБІТ ДЛЯ СТУДЕНТІВ ТА ОСВІТЯН-НАУКОВЦІВ",
        description:
          "Стаття у виданні Perspectives.",
        status: "Опубліковано",
        href: "https://perspectives.pp.ua/index.php/vno/article/view/31283",
        extraLinks: [
          {
            label: "DOI: 10.52058/2786-6165-2025-10(40)-2410-2424",
            href: "https://doi.org/10.52058/2786-6165-2025-10(40)-2410-2424",
          },
          {
            label: "ResearchGate",
            href: "https://www.researchgate.net/publication/397614878_POLITIKA_VIKORISTANNA_STUCNOGO_INTELEKTU_U_PROCESI_NAPISANNA_NAUKOVIH_ROBIT_DLA_STUDENTIV_TA_OSVITAN-NAUKOVCIV?_tp=eyJjb250ZXh0Ijp7InBhZ2UiOiJwcm9maWxlIiwicHJldmlvdXNQYWdlIjpudWxsLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19",
          },
        ],
        tags: ["AI policy"],
      },
      {
        title:
          "Retrieval-Augmented Generation: архітектура, класифікація та застосування в освітньому процесі при підготовці майбутніх вчителів інформатики",
        description:
          "Стаття в роботі.",
        status: "В роботі",
        href: "#",
        tags: ["RAG", "AI в освіті"],
      },
      {
        title:
          "Декларування використання штучного інтелекту в студентських наукових роботах",
        description:
          "Стаття в роботі.",
        status: "В роботі",
        href: "#",
        tags: ["AI policy"],
      },
    ],
  },
  {
    key: "abstracts",
    eyebrow: "Категорія 02",
    title: "Тези",
    description:
      "Матеріали конференцій, тези доповідей та збірники. Тут зручно тримати посилання на програму конференції або PDF збірника.",
    items: [
      {
        title:
          "ІНТЕГРАЦІЯ ШТУЧНОГО ІНТЕЛЕКТУ В ОСВІТНІЙ ПРОЦЕС ПІДГОТОВКИ МАЙБУТНІХ УЧИТЕЛІВ ІНФОРМАТИКИ НА ПРИКЛАДІ НАВЧАЛЬНОГО ЧАТ-БОТА",
        description:
          "Тези у збірнику I-TEACH 2025.",
        status: "Опубліковано",
        href: "https://teachers.karazin.ua/wp-content/uploads/2025/12/Zbirnyk_tez_I-TEACH_2025.pdf",
      },
      {
        title: "RAG підхід: архітектура та застосування в освітньому процесі",
        description:
          "Тези у збірнику 2026. Автори: Шемет Даніїл, Умрик Марія.",
        status: "Опубліковано",
        href: "ЗБІРНИК 2026.pdf",
      },
    ],
  },
  {
    key: "dissertation",
    eyebrow: "Категорія 03",
    title: "Робота над дисертацією",
    description:
      "Розділи, нотатки, чернетки, матеріали до захисту та супровідні документи.",
    items: [
      {
        title: "Курс «Проєктування систем RAG для освітніх потреб»",
        description:
          "Навчальний курс, релевантний до тематики дисертації та практичної роботи з RAG-системами для освітнього середовища.",
        status: "Навчальні матеріали",
        href: "https://dle.udu.edu.ua/course/view.php?id=1763",
      },
      {
        title: "Danylo Shemet certificate of participation and contribution as a speaker",
        description:
          "Сертифікат участі та внеску як спікера з теми проєктування RAG-систем і Ethical AI. Declaration Form.",
        status: "Сертифікат",
        href: "certificate-rag-ethical-ai-shemet.pdf",
      },
    ],
  },
  {
    key: "literature",
    eyebrow: "Категорія 04",
    title: "Література",
    description:
      "Ключові джерела, бібліографія, книги, статті та огляди, які використовуються в роботі.",
    items: [
      {
        title:
          "Y. Gao et al. “Retrieval-Augmented Generation for Large Language Models: A Survey”",
        description:
          "Оглядова праця з класифікацією підходів RAG для великих мовних моделей.",
        status: "Література",
        href: "https://arxiv.org/abs/2312.10997",
        tags: ["RAG"],
      },
      {
        title:
          "Lewis, P. et al. Retrieval-augmented generation for knowledge-intensive NLP tasks",
        description:
          "Одна з перших робіт, де запропоновано архітектуру RAG як поєднання інформаційного пошуку та генеративної моделі.",
        status: "Література",
        href: "https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html",
        tags: ["RAG"],
      },
      {
        title:
          "Міністерство освіти і науки України. Рекомендації щодо відповідального використання штучного інтелекту в закладах вищої освіти",
        description:
          "Нормативно-методичний документ щодо відповідального використання штучного інтелекту у вищій освіті.",
        status: "Література",
        href: "https://mon.gov.ua/static-objects/mon/sites/1/news/2025/04/24/shi-v-zakladakh-vyshchoi-osvity-24-04-2025.pdf",
        tags: ["Нормативні документи"],
      },
      {
        title:
          "О.В. Зайцев, О.В. Борисов, С.О. Румянцев. Застосування Retrieval-Augmented Generation у системах штучного інтелекту",
        description:
          "Публікація про застосування RAG у системах штучного інтелекту в контексті Computer-integrated technologies: education, science, production.",
        status: "Література",
        href: "https://cit.lntu.edu.ua/index.php/cit/article/view/872",
        tags: ["RAG"],
      },
      {
        title: "UNESCO. AI competency framework for teachers",
        description:
          "Рамка компетентностей учителів щодо використання штучного інтелекту.",
        status: "Література",
        href: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        tags: ["Політики"],
      },
      {
        title:
          "Ministerstvo osvity i nauky Ukrainy. Win-win: Ukraina zatverdyla Stratehiiu tsyfrovoho rozvytku, innovatsii i tekhnolohii do 2030 roku",
        description:
          "Матеріал МОН України про стратегію цифрового розвитку, інновацій і технологій до 2030 року.",
        status: "Література",
        href: "https://mon.gov.ua/news/winwin-ukraina-zatverdyla-stratehiiu-tsyfrovoho-rozvytku-innovatsii-do-2030-roku",
        tags: ["Нормативні документи"],
      },
      {
        title:
          "Spirin, O. M., & Oleksiuk, V. P. Dosvid ta perspektyvy vykorystannia tekhnolohii ShI u navchanni maibutnikh uchyteliv informatyky",
        description:
          "Досвід і перспективи використання технологій штучного інтелекту в навчанні майбутніх учителів інформатики.",
        status: "Література",
        href: "https://eprints.zu.edu.ua/38131/1/thesis_Spirin_Oleksiuk.pdf",
        tags: ["Компетентності & AI"],
      },
      {
        title:
          "Umryk, M. A., Morze, N. V., & Smyrnova-Trybulska, Ye. M. Rozvytok kompetentnostei osvitian u haluzi vykorystannia shtuchnoho intelektu v tsyfrovomu suspilstvi",
        description:
          "Дослідження розвитку компетентностей освітян у сфері використання штучного інтелекту в цифровому суспільстві.",
        status: "Література",
        href: "https://doi.org/10.28925/2414-0325.2025.1813",
        tags: ["Компетентності & AI"],
      },
    ],
  },
];

const sectionsRoot = document.querySelector("#sections");
const sectionFiltersRoot = document.querySelector("#section-filters");
const sectionTemplate = document.querySelector("#section-template");
const itemTemplate = document.querySelector("#item-template");
const state = {
  activeSection: "all",
  activeLiteratureTag: "all",
};

function createChip(label, isActive, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `filter-chip${isActive ? " is-active" : ""}`;
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function renderSectionFilters() {
  sectionFiltersRoot.innerHTML = "";
  sectionFiltersRoot.appendChild(
    createChip("Усе", state.activeSection === "all", () => {
      state.activeSection = "all";
      renderSectionFilters();
      renderSections();
    }),
  );

  for (const section of sections) {
    sectionFiltersRoot.appendChild(
      createChip(section.title, state.activeSection === section.key, () => {
        state.activeSection = section.key;
        renderSectionFilters();
        renderSections();
      }),
    );
  }
}

function renderItem(item, itemsRoot) {
  const itemNode = itemTemplate.content.cloneNode(true);
  itemNode.querySelector(".entry__title").textContent = item.title;
  itemNode.querySelector(".entry__description").textContent = item.description;

  const statusNode = itemNode.querySelector(".entry__status");
  statusNode.textContent = item.status;
  if (item.status === "В роботі") {
    statusNode.classList.add("entry__status--draft");
  }

  const linkNode = itemNode.querySelector(".entry__link");
  if (item.href && item.href !== "#") {
    linkNode.href = item.href;
  } else {
    linkNode.remove();
  }

  const metaLinksRoot = itemNode.querySelector(".entry__meta-links");
  for (const extraLink of item.extraLinks ?? []) {
    const extraLinkNode = document.createElement("a");
    extraLinkNode.className = "entry__link";
    extraLinkNode.href = extraLink.href;
    extraLinkNode.target = "_blank";
    extraLinkNode.rel = "noreferrer noopener";
    extraLinkNode.textContent = extraLink.label;
    metaLinksRoot.appendChild(extraLinkNode);
  }

  itemsRoot.appendChild(itemNode);
}

function renderLiteratureFilters(section, sectionElement) {
  const tags = [...new Set(section.items.flatMap((item) => item.tags ?? []))].sort(
    (a, b) => a.localeCompare(b, "uk"),
  );
  const filtersNode = document.createElement("div");
  filtersNode.className = "category__filters";
  filtersNode.appendChild(
    createChip("Усі теги", state.activeLiteratureTag === "all", () => {
      state.activeLiteratureTag = "all";
      renderSections();
    }),
  );

  for (const tag of tags) {
    filtersNode.appendChild(
      createChip(tag, state.activeLiteratureTag === tag, () => {
        state.activeLiteratureTag = tag;
        renderSections();
      }),
    );
  }

  sectionElement.insertBefore(
    filtersNode,
    sectionElement.querySelector(".category__items"),
  );
}

function renderSections() {
  sectionsRoot.innerHTML = "";
  const visibleSections =
    state.activeSection === "all"
      ? sections
      : sections.filter((section) => section.key === state.activeSection);

  for (const section of visibleSections) {
    const sectionNode = sectionTemplate.content.cloneNode(true);
    const sectionElement = sectionNode.querySelector(".category");
    sectionNode.querySelector(".category__eyebrow").textContent = section.eyebrow;
    sectionNode.querySelector(".category__title").textContent = section.title;
    sectionNode.querySelector(".category__description").textContent =
      section.description;

    let items = section.items;
    if (section.key === "literature") {
      renderLiteratureFilters(section, sectionElement);
      items =
        state.activeLiteratureTag === "all"
          ? section.items
          : section.items.filter((item) =>
              (item.tags ?? []).includes(state.activeLiteratureTag),
            );
    }

    sectionNode.querySelector(".category__count").textContent =
      `Записів: ${items.length}`;

    const itemsRoot = sectionNode.querySelector(".category__items");
    for (const item of items) {
      renderItem(item, itemsRoot);
    }

    sectionsRoot.appendChild(sectionNode);
  }
}

renderSectionFilters();
renderSections();
