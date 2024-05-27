function calculateAge(birthdate) {
    const birthTime = new Date(birthdate).getTime();
    const currentTime = new Date().getTime();
    const ageMilliseconds = currentTime - birthTime;
    const ageYears = ageMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return ageYears.toFixed(9); // Keep 6 decimal places
}

// Update the age in real-time
function updateAge() {
    const ageElement = document.getElementById("age");
    const birthdate = new Date("2004-07-03"); 
    const age = calculateAge(birthdate);
    ageElement.textContent = age;

    
}

// Update the age every 5 seconds
setInterval(updateAge, 1);

// Initial update
updateAge();