const title = document.querySelector('h1');
// console.log(title);

if (document.location.href.includes('pet-project')) {
  const selectPetProject = document.querySelectorAll('.pet-web');
  console.log(selectPetProject);
  title.innerHTML = 'Project Charter - Pets Web';
  selectPetProject.forEach(el => {
    el.style.display = 'flex';
  });
} else if (document.location.href.includes('cv-project')) {
  const selectPetProject = document.querySelectorAll('.cv-web');
  console.log(selectPetProject);
  title.innerHTML = 'Project Charter - CV Web';
  selectPetProject.forEach(el => {
    el.style.display = 'flex';
  });
} else {
  const selectPetProject = document.querySelectorAll('.news-web');
  console.log(selectPetProject);
  title.innerHTML = 'Project Charter - News Web';
  selectPetProject.forEach(el => {
    el.style.display = 'flex';
  });
}
