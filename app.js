// Obtener el botón hamburguesa y los enlaces del menú
const menuHamburguesa = document.querySelector('.menu__hamburguer');
const menuLinks = document.querySelector('.menu__links');

// Cuando se haga clic en el botón hamburguesa, alternar la visibilidad del menú
menuHamburguesa.addEventListener('click', function() {
    menuLinks.classList.toggle('show');
});
