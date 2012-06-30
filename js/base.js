$(document).ready(function(){
	// Footnote system (js and css) ripped off from the Django Advent (djangoadvent.com)
	$("#footnotes").hide();

	// Move the copy from the <ol> at the bottom to an <aside> element
	// directly beneath the relevant <p>, then hide.  Assign a click handler
	// to each footnote's reference link.
	$(".footnote-reference").each(function(index){
		var $this = $(this);
		var note_selector = "[id=" + (index + 1)+ "]";
		var note = $(note_selector).parent().html().replace("↑", "");
		var p = $this.parent().parent();

		var aside = $("<aside>").html(note).attr("name", $(this).attr("href") );
		p.after(aside);
		aside.hide();
		
		// Assign a click handler for toggling the footnotes.
		$this.click(function(){
			aside.slideToggle(400);
			return false;
		});
		
	});

	// Display and jump to the footnote if someone arrives at a page via a # url
	if(window.location.hash){
		var hash = window.location.hash;
		var aside_selector = "aside[name=" + hash + "]";
		var aside = $(aside_selector);
		aside.show();

		$('html, body').animate({
			scrollTop: aside.offset().top - 20
		}, 1000);
	}
	
});
