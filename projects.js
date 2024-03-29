let projectsDiv = document.querySelector(".projects");
fetch("./data.json")
  .then((res) => res.json())
  .then((res) => {
    createProjects(res);
  });

function createProjects(data) {
  data.projectsData.forEach((project, i) => {
    const { demoLink, githubLink, img, alt, name, desc, tech } = project;

    let allIcons = "";
    tech.forEach(({ name, link, alt }) => {
      allIcons += `<div class="project__tech__icon">
            <img src="${link}" alt="${alt}">
            <p>${name}</p>
          </div>
        `;
    });

    let reverse = "";
    // if (i % 2 != 0) reverse = "reverse";
    let html = `<div class="project">
      <a href="${demoLink}" target="_blank">
        <img class="project__img" src="${img}" alt="${alt}">
        <div class="project__img-overlay"></div>
      </a>
      <div class="project__info">
        <div>
          <h2 class="project__title">${name}</h2>
          <p class="project__description">${desc}</p>
        </div>
        <div>
          <div class="project__tech__icons">
            ${allIcons}
          </div>

          <div class="project__btns">
            <a target="_blank" href="${githubLink}">Github</a>
            <a target="_blank" href="${demoLink}">Demo</a>
          </div>
        </div>
      </div>
    </div>`;
    projectsDiv.insertAdjacentHTML("beforeend", html);
  });
}
