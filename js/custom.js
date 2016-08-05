jQuery(document).on('ready',function(){
banner();

var owl = $(" .dapper-shop .products");

owl.owlCarousel({	
items : 3, //3 items above 1000px browser width
margin : 5,
itemsDesktop : [1000,3], //5 items between 1000px and 901px
itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
itemsTablet: [600,2], //2 items between 600 and 0;
itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option

});
// Custom Navigation Events
$(".next").click(function(){
owl.trigger('owl.next');
})
$(".prev").click(function(){
owl.trigger('owl.prev');
})
});

jQuery(window).resize(function(){
	banner();
});


function banner(){
	var container_width = jQuery('.container').width();
	var logo_width = jQuery('.navbar-brand').width();
	console.log(logo_width);
	jQuery('.banner').css({'margin-left': logo_width});
}