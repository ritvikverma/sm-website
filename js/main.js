// Animations initialization
new WOW().init();
const navBarHeight = $('.navbar').innerHeight();

$("#navbar_india_rural_landscape").on('click', function () {
    const element = document.getElementById('centreCardRuralLandscape');
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset + navBarHeight;
    const middle = absoluteElementTop - (window.innerHeight / 2);
    $('#navbarSupportedContent').removeClass('show');
    window.scrollTo(0, middle);
});

$("#navbar_business_reality").on('click', function () {
    const element = document.getElementById('centre_business_reality');
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset + navBarHeight;
    const middle = absoluteElementTop - (window.innerHeight / 2);
    $('#navbarSupportedContent').removeClass('show');
    window.scrollTo(0, middle);
});

$("#navbar_workflow").on('click', function () {
    const element = document.getElementById('workflowImage');
    const elementRect = element.getBoundingClientRect();
    const imageHeight = $('#workflowImage').innerHeight() / 3;
    const absoluteElementTop = elementRect.top + window.pageYOffset + navBarHeight + imageHeight;
    const middle = absoluteElementTop - (window.innerHeight / 2);
    $('#navbarSupportedContent').removeClass('show');
    window.scrollTo(0, middle);
});


$("#navbar_products").on('click', function () {
    const element = document.getElementById('productsAndServicesLink');
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset + navBarHeight;
    const middle = absoluteElementTop - (window.innerHeight / 2);
    $('#navbarSupportedContent').removeClass('show');
    window.scrollTo(0, middle);
});

$('#contactButton').on('click', function () {
    console.log('Clicked submit');
});