(function ($) {
    $(document).ready(function () {
        const marquee = $('.marquee');

        // Duplica el contenido para asegurar un efecto continuo
        marquee.append(marquee.html());

        // Calcular el ancho total del contenido
        const contentWidth = marquee[0].scrollWidth;

        // Ajustar duración de la animación según el ancho
        const duration = contentWidth / 50; // Ajusta la velocidad aquí
        marquee.css('animation-duration', `${duration}s`);
    });
})(jQuery);