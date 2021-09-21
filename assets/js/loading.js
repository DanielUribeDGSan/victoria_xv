$(window).on('load', function () {
    $(".status").fadeOut(1800);
    $(".preloader").delay(900).fadeOut("slow");
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    setTimeout(function () {
        $(".preloader2").show();
        $(".status2").fadeOut(4500);
        $(".preloader2").delay(4500).fadeOut("slow");
    }, 3500);
})