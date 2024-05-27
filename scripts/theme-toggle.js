window.onload = function() {
    const lightIcon = document.getElementById('light-icon');
    const darkIcon = document.getElementById('dark-icon');
    const body = document.body;

    // Check dark mode status and display icons accordingly
    if (body.classList.contains('dark-mode')) {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    } else {
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    }

    lightIcon.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    });

    darkIcon.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    });
};
