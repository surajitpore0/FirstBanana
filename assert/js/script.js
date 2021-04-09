$(document).ready(function() {
    $('#toggle-btn').click(function() {
            $('.nav-links').slideToggle(1000);
        })
        // accordion
    $("#accordion").accordion({
        animate: 1000
    });
    // progress bar

    $("#p-bar-1").progressbar({
        value: 37
    });
    $("#p-bar-2").progressbar({
        value: 37
    });
    $("#p-bar-3").progressbar({
        value: 37
    });
    $("#p-bar-4").progressbar({
        value: 37
    });
})