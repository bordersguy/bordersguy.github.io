
$(document).on("click", "#zerglingrush", function() {
	 
		if ($("#rush").attr("visible")) {
		   $("#rush").removeAttr("visible");

		   $( "#rush" ).animate ({
			    width: "1%"
			  }, 2000, function() {	
		  	});
		} else {
			$("#rush").attr("visible", "visible");

			$( "#rush" ).animate ({
			    width: "100%"
			  }, 2000, function() {	
		  	});
		}

		$("#rush").toggleClass("collapse");
});