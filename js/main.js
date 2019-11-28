// JavaScript Document
$(document).ready(function () {
    $(document).click(
        function (event) {
            var target = $(event.target);
            var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
            if (_mobileMenuOpen === true && !target.hasClass("navbar-toggler")) {
                $("button.navbar-toggler").click();
            }
        }
    );
});

//SMOOTH SCROLL
$(".smooth-scroll").on('click', 'a', function (event) {
    event.preventDefault();
    var elAttr = $(this).attr('href'),
    offset = ($(this).data('offset') ? $(this).data('offset') : 0);
    $('body,html').animate({
        scrollTop: $(elAttr).offset().top + offset
    }, 700);
});