const toggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
const storedTheme = localStorage.getItem('theme');
if (storedTheme) root.setAttribute('data-theme', storedTheme);

toggle.addEventListener('click', ()=> {
    const isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

const tabs = document.querySelectorAll('.tab-btn');
const content = document.getElementById('project-content');
const data = [
    {
        title: 'Portfolio',
        desc: 'A fully responsive and interactive personal portfolio with dark/light mode and dynamic project sections.'
    },
    {
        title: 'Minimal Blog',
        desc: 'A clean, SEO-optimized blog design with semantic HTML and card-based layout.'
    },
    {
        title: 'E-commerce UI',
        desc: 'Product listing and cart UI with responsive layout and subtle animations.'
    }
];

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        tabs.forEach(btn => btn.classList.remove('active'));
        tab.classList.add('active');
        content.innerHTML = `
      <h3>${data[i].title}</h3>
      <p>${data[i].desc}</p>
    `;
    });
});
