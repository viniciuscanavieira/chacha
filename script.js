document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.rotating-image');
    const heading = document.querySelector('h1');

    // Adiciona um listener para o evento 'animationend' da imagem
    image.addEventListener('animationend', function() {
        // Quando a animação da imagem termina, muda a classe do h1 para 'visible'
        heading.classList.remove('hidden');
        heading.classList.add('visible');
    });
});
