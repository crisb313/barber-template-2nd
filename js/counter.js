$(document).ready(function () {
    // Aseguramos que solo se ejecute la animación una vez
    var countersTriggered = false;

    // Función para ejecutar la animación del contador
    function animateCounters() {
        $('.counter .count').each(function () {
            var $this = $(this);
            var countTo = $this.data('count');  // Obtener el valor final desde data-count
            var currentCount = 0;  // Empezamos desde 0

            // Animamos el contador
            $({ countNum: currentCount }).animate(
                { countNum: countTo },
                {
                    duration: 3000, // Duración de la animación
                    easing: 'swing', // Efecto de suavizado
                    step: function () {
                        // Actualizamos el valor del contador en cada paso
                        $this.text(Math.floor(this.countNum) + '+');
                    },
                    complete: function () {
                        // Cuando termine la animación, mostramos el valor final
                        $this.text(this.countNum + '+');
                    }
                }
            );
        });
    }

    // Detectamos cuando la sección está visible en el viewport (pantalla)
    $(window).on('scroll', function () {
        var sectionOffset = $('.dinamic').offset().top;  // Obtenemos la posición de la sección
        var scrollPosition = $(window).scrollTop() + $(window).height();  // Posición del scroll

        // Comprobamos si hemos hecho scroll hasta la sección de los contadores
        if (scrollPosition > sectionOffset && !countersTriggered) {
            animateCounters();
            countersTriggered = true;  // Evitar que la animación se ejecute más de una vez
        }
    });
});
