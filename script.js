const textElement = document.querySelector('.greetings');

const textContent = textElement.textContent;

const characters = textContent.split('');

const coloredText = characters.map(char => {
    const span = document.createElement('span');
    span.textContent = char;
    return span;
});

textElement.textContent = '';

coloredText.forEach(span => {
    textElement.appendChild(span);
});

coloredText.forEach(span => {
    span.addEventListener('mouseover', () => {
        span.style.color = '#ffee10';
        span.style.textShadow = "0 0 15px #d69d27";
        span.style.transition = "color 0.1s, text-shadow 0.1s";
        span.style.cursor = "pointer";
    });

    span.addEventListener('mouseout', () => {
        span.style.color = '#666';
        span.style.textShadow = "none";
        span.style.transition = "color 1.5s, text-shadow 1.5s";
    });
});