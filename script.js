function toggleSeason() {
    const scene = document.getElementById('scene');
    scene.classList.toggle('winter');
    document.querySelectorAll('.person').forEach(person => {
        person.classList.toggle('cold');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const sun = document.getElementById('sun');
    sun.addEventListener('click', toggleSeason);
});
