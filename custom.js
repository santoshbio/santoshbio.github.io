document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('nav.navbar');
    const collapseElement = document.getElementById('mainNav');
  
    collapseElement.addEventListener('show.bs.collapse', () => {
      navbar.classList.add('bg-solid');
    });
  
    collapseElement.addEventListener('hide.bs.collapse', () => {
      navbar.classList.remove('bg-solid');
    });
  });