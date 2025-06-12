document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.dark-mode-toggle');
  const body = document.body;
  const iconLight = toggleBtn.querySelector('.icon-light');
  const iconDark = toggleBtn.querySelector('.icon-dark');

  // Load saved mode from localStorage
  if(localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    iconLight.style.display = 'none';
    iconDark.style.display = 'inline';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    iconLight.style.display = isDark ? 'none' : 'inline';
    iconDark.style.display = isDark ? 'inline' : 'none';
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  });
});
