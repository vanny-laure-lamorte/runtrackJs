
document.addEventListener('DOMContentLoaded', function() {

const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'];

let konamiCodePosition = 0;

function handleKonamiCode(event) {

    if (event.key=== konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
            document.body.classList.add('platforme-color');
        }
    } else {
        konamiCodePosition = 0;
    }
}

    document.addEventListener('keydown', handleKonamiCode);
});
