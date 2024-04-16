document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('keylogger');

    document.addEventListener('keydown', function(event) {
        const keyPressed = event.key;

        if (/^[a-zA-Z]$/.test(keyPressed)) {
            const isTextareaFocused = document.activeElement === textarea;

            let repetitionCount = 1; 
            if (isTextareaFocused) {
                repetitionCount = 2;
            }

            textarea.value += keyPressed.repeat(repetitionCount);
            
            event.preventDefault();
        }
    });
});
