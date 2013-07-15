//Responsive video function
var respondVideo = function(){
	$('iframe').width("100%");
	$('iframe').height( $('iframe').width() * 0.562);
};

//Random sort function
var randomSort = function(){return 0.5 - Math.random();};

$( document ).ready( function(){

	//Randomly sort the videos array
	loadVids.sort(randomSort);

	var videoValues = [];
	for (var i = 0; i < loadVids.length; i++){
		videoValues.push(i);
	}
	videoValues.sort(randomSort);
	videoValues.sort(randomSort);

	$('#embedVideoOne').html(loadVids[videoValues[0]]);
	$('#embedVideoTwo').html(loadVids[videoValues[1]]);
	$('#embedVideoThree').html(loadVids[videoValues[2]]);


	//Make video row responsive
	respondVideo();
	$(window).resize(function() {
		respondVideo();
	});

	//Toggle text buttons
	$(".textButton").each(function(){
		$(this).bind('click', function(){
			target = $(this).data("target");
			$(target).toggle();
		});
	});

});