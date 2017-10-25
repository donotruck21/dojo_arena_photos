$(document).ready(function() {
	$('.map').hover(function() {
		//console.log("url('"+$(this).attr('id')+".jpg')");
		$('.container').css("background-image", "url('"+$(this).attr('id')+".jpg')");
		$('.container').css('background-size', '1644px 960px');
	})

	$('.map').on('click', function() {
	//	console.log("url('"+$(this).attr('id')+".jpg')");

		$('.container').css("background-image", "url('"+$(this).attr('id')+".jpg')");
		$('.container').css('background-size', '1644px 960px');
		$('.select1').html("<h1>Select Player</h1><select class='player1'><option value='' selected disabled hidden>Select Ninja</option><option id='donny'>Donny</option><option id='leo'>Leo</option><option id='mikey'>Mikey</option><option id='raphael'>Raphael</option></select><select class='player2'><option value='' selected disabled hidden>Select Ninja</option><option id='donny'>Donny</option><option id='leo'>Leo</option><option id='mikey'>Mikey</option><option id='raphael'>Raphael</option></select>");	
	})
	//when p1 is changed
	$(document.body).on('change', '.player1', function(){
		$('.player1img').html("<img src='"+$('.player1 option:selected').attr('id')+".png' alt='turtle1'></img>");
	})


	$(document.body).on('change', '.player2', function(){
		$('.player2img').html("<img src='"+$('.player2 option:selected').attr('id')+".png' alt='turtle2'></img>");
	})

});