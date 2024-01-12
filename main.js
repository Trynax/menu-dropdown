// main.js
function createNavDropdown() {
    const navDropdown = document.createElement('nav');
    navDropdown.id = 'nav-dropdown';
    navDropdown.innerHTML = `
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Gallery</a></li>
        </ul>
    `;
    return navDropdown;
}

const menuButtonElem = document.getElementById('menu-button');
let isMenuUpOrDown = false;

menuButtonElem.addEventListener('click', () => {
    const navDropdown = document.getElementById('nav-dropdown') || createNavDropdown();

    if (isMenuUpOrDown === false) {
        navDropdown.style.display = 'block';
        navDropdown.style.opacity = '1'; // Fade in
        menuButtonElem.innerHTML = "&#10005;";
        isMenuUpOrDown = true;
    } else if (isMenuUpOrDown === true) {
        navDropdown.style.opacity = '0'; // Fade out
        setTimeout(() => {
            navDropdown.style.display = 'none';
        }, 300); // Delay to match the transition duration
        menuButtonElem.innerHTML = "&#9776;";
        isMenuUpOrDown = false;
    }

    if (!document.getElementById('nav-dropdown')) {
        document.body.appendChild(navDropdown);
    }
});
