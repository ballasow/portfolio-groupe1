document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    if (textElement) {
        const text = textElement.innerText;
        textElement.innerText = '';
        let i = 0;

        function type() {
            if (i < text.length) {
                textElement.innerText += text.charAt(i);
                i++;
                setTimeout(type, 80);
            }
        }
        setTimeout(type, 500);
    }
});