$(document).ready(function(){
	// Footnote system (js and css) ripped off from the Django Advent (djangoadvent.com)
	$("#footnotes").hide();
	
	$(".footnote-reference").one('click', function(){
		var note_selector = "[id="+ $(this).attr("href").split("#")[1] + "]";
		var note = $(note_selector).parent().text().replace("↑", "");
		var aside = $("<aside>").text(note);
		$(this).parent().after(aside);
		aside.hide().slideDown();
		
		$(this).click(function(){
			aside.slideToggle(400);
		});
		
		return false;
	});
});