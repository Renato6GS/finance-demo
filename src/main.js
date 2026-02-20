import './style.css';
import teamData from './data/team.json';

// --- Render Team Members ---
const teamGrid = document.getElementById('team-grid');
if (teamGrid) {
  teamGrid.innerHTML = teamData.members
    .map(
      (member) => `
    <li class="relative group">
      <img
        class="block w-full aspect-[539/315] object-cover"
        src="${member.image}"
        alt="${member.name}"
        loading="lazy"
      />
      <div class="flex items-center justify-between gap-2 mt-4 text-black">
        <h3 class="text-2xl">${member.name}</h3>
        <span class="text-sm">${member.role}</span>
      </div>
      <a href="${member.link}" class="absolute -top-[8px] right-[24px] w-[96px] h-[96px] flex justify-center items-center rounded-full bg-primary opacity-0 scale-75 -translate-x-5 pointer-events-none transition-all duration-[400ms] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:pointer-events-auto hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#fff" fill-rule="evenodd" d="M10.293 16.707a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 1.414L14.586 9H3a1 1 0 0 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 0 1.414Z" clip-rule="evenodd"/></svg>
      </a>
    </li>
  `,
    )
    .join('');
}

// --- Render Advisers ---
const advisersList = document.getElementById('advisers-list');
if (advisersList) {
  advisersList.innerHTML = teamData.advisers
    .map(
      (adviser) => `
    <li class="flex items-center flex-wrap justify-center sm:justify-between p-10 gap-5 bg-white text-black">
      <div class="flex flex-col sm:flex-row items-center gap-4">
        <img
          class="w-[64px] h-[64px] rounded-full object-cover"
          src="${adviser.image}"
          alt="${adviser.name}"
          loading="lazy"
        />
        <div>
          <h3 class="mb-2 text-[1.5rem] md:text-[1.75rem] text-center sm:text-left">${adviser.name}</h3>
          <p class="opacity-65 text-center sm:text-left">${adviser.role}</p>
        </div>
      </div>
      <p class="max-w-96 opacity-65">${adviser.description}</p>
      <a href="${adviser.link}" class="w-[42px] h-[42px] bg-primary rounded-full flex items-center justify-center shrink-0 ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6136 18.0485C11.8073 18.2422 12.07 18.3509 12.3439 18.3509C12.6178 18.3509 12.8805 18.2422 13.0743 18.0485L19.2723 11.8505C19.4659 11.6568 19.5747 11.3941 19.5747 11.1202C19.5747 10.8462 19.4659 10.5835 19.2723 10.3898L13.0743 4.19183C12.8794 4.00366 12.6185 3.89954 12.3476 3.90189C12.0768 3.90425 11.8177 4.01289 11.6262 4.20441C11.4347 4.39594 11.326 4.65503 11.3237 4.92588C11.3213 5.19673 11.4254 5.45767 11.6136 5.65249L16.0483 10.0872H4.07993C3.80596 10.0872 3.54321 10.196 3.34948 10.3897C3.15576 10.5834 3.04693 10.8462 3.04693 11.1202C3.04693 11.3941 3.15576 11.6569 3.34948 11.8506C3.54321 12.0443 3.80596 12.1532 4.07993 12.1532H16.0483L11.6136 16.5878C11.4199 16.7815 11.3111 17.0442 11.3111 17.3182C11.3111 17.5921 11.4199 17.8548 11.6136 18.0485Z" fill="white"/>
        </svg>
      </a>
    </li>
  `,
    )
    .join('');
}

// --- Hamburger Menu ---
const hamburger = document.getElementById('hamburger');
const header = document.getElementById('header');
if (hamburger && header) {
  hamburger.addEventListener('click', () => {
    header.classList.toggle('is-open');
  });
}
