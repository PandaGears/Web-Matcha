function darkmode() {
    var elements = document.querySelectorAll('[id=darklight]');
    element.classList.toggle("dark-mode");
}

$(document).ready(function() {
    $('.animbutton').on('click', function() {

        $('.aniburger').toggleClass('open');
    });
});