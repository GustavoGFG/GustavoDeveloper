import { projects } from '../Data/projects.js';
var projectsContainer = document.getElementById('projects-container');
console.log(projectsContainer);
function createProjects() {
  for (let project of projects) {
    createSingleProject(project);
  }
}

function createSingleProject(project) {
  var projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');
  projectContainer.innerHTML = /*html*/ `
  <div class="img-container">
    <a
      href="${project.deployURL}"
      target="_blank"
    >
      <img
        src="${project.imageSRC}"
        alt="Imagem do Site ${project.name}"
        loading="lazy"
      />
    </a>
  </div>

  <div class="project-bottom-container">
    <div class="text-container">
      <div>
        <h3>${project.name}</h3>
        <h4>${project.type}</h4>
      </div>

      <p>
        ${project.description}
      </p>
    </div>

    <div class="techs-container">
      <h4>Technologies:</h4>
      <ul class="techs">
        ${createSkills(project.skillArray)}
      </ul>
    </div>

    <div class="project-btn-container">
      <a
        class="live-demo btn"
        href="${project.deployURL}"
        target="_blank"
        >Live Demo</a
      >
      <a
        class="source-code btn"
        href="${project.codeURL}"
        target="_blank"
        >Source Code</a
      >
    </div>
  </div>
  `;
  console.log(projectContainer);
  projectsContainer.appendChild(projectContainer);
}

function createSkills(skillArray) {
  var location = './Assets/Skills/';
  var skillsInnerHTML = '';
  for (var skill of skillArray) {
    skillsInnerHTML += /*html*/ `
      <li>
        <img
          src="${location + skill.file}"
          alt="Logo ${skill.name}"
          loading="lazy"
        />
        <p>${skill.name}</p>
      </li>
    `;
  }
  return skillsInnerHTML;
}

createProjects();
