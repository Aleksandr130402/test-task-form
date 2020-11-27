$(document).ready(function(){

    $("#tabs").tabs({
        beforeActivate: function(event, ui) {
          var index = ui.newTab.find('a').attr('href');
          var currentPage = $(index).index();
          //530 is the width of the frame or you can say the overall width including padding and margin for the content tabs.
          $('.inner').css('left', '-' + (currentPage) * 530 + 'px');
        },
    });

	// $('.user-icon[name="search"]').click(function(e){
    //     checkClass();
    //     $(".user-content").fadeOut(500, $("#search-slide").addClass("selected"));       
    // });
    // $('.user-icon[name="home"]').click(function(e){
    //     checkClass();
	// 	$(".user-content").fadeOut(500, $("#home-slide").addClass("selected"));
    // });
    // $('.user-icon[name="add-user"]').click(function(e){
    //     checkClass();
	// 	$(".user-content").fadeOut(500, $("#add-user-slide").addClass("selected"));
    // });
    
    // function checkClass() {
    //     if($('.slider-block').hasClass("selected")){
    //         $('.slider-block').removeClass('selected');
    //     } 
    // }	
})