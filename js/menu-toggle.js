$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled",100);


	setTimeout(function() {
		var $affixElement = $('div[class="affix"]');
		$affixElement.width($affixElement.parent().width());
	}, 500);

});

$("#sidebar-sport").click(function(){
    $(".sidebar-nav-inner").slideToggle("slow");
	$("#sidebar-sport").toggleClass("highlight");
});

