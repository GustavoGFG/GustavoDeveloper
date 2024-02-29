import { profileSkills } from '../Data/skills.js';

var skillsContainer = document.getElementById('skills-container');

function createSkills() {
  var skillsHTML = '';
  for (let skill of profileSkills) {
    skillsHTML += /*html*/ `
      <li>
        <img src="./Assets/Skills/${skill.file}" alt="Logo ${skill.name}" loading="lazy" />
        <p>${skill.name}</p>
      </li>
    `;
  }
  skillsContainer.innerHTML = skillsHTML;
}

createSkills();
