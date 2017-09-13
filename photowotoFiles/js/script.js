$(document).ready(function(){
	$("a.has-sub").click(function(){
		$(this).siblings("ul").slideToggle();
		$(this).toggleClass("open");
		});
	});