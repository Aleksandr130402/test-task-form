$(document).ready(function() {
    $("#tabs").tabs({
    beforeActivate: function(event, ui) {
        var index = ui.newTab.find('a').attr('href');
        var currentPage = $(index).index();
        //530 is the width of the frame or you can say the overall width including padding and margin for the content tabs.
        $('.inner').css('left', '-' + (currentPage) * 380 + 'px');
    },
    });
});