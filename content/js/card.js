$( document ).ready(function() {
    $(function () { objectFitImages() });

	$(".favorite").click(function(){
  		$(this).toggleClass("favoriteClicked");

 	});

	//select delete button
	$(".delete").click(function(event){
		//set card variable to select each card
		var card = $(this).parent()
		//on click of delete button show modal
		$(".modal").show(function(){
			//select delete button in modal and on click  of delete modal button
			$(".deleteModal").click(function(){
				//delete card
				$(card).parent().remove();
				// and finally hide model
				$(".modal").modal("hide");	
		});


		});
	

});
});



// KEEP THIS!!!!!!!!!!!!!!!
// $(".delete").click(function(event){
// 		var card = $(this).parent()
// 		$(card).parent().remove();
// 	});
// 	});

