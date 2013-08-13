//Responsive video function
var respondVideo = function(){
	$('iframe').width("100%");
	$('iframe').height( $('iframe').width() * 0.562);
};

//Random sort function
var randomSort = function(){return 0.5 - Math.random();};

//Shuffle function
//http://stackoverflow.com/questions/962802/is-it-correct-to-use-javascript-array-sort-method-for-shuffling
var shuffle = function(array) {
	var tmp, current, top = array.length;

	if(top) while(--top) {
		current = Math.floor(Math.random() * (top + 1));
		tmp = array[current];
		array[current] = array[top];
		array[top] = tmp;
	}
	return array;
};


$( document ).ready( function(){

	//Randomly sort the videos array
	//loadVids.sort(randomSort);
	shuffle(loadVids);

	var videoValues = [];
	for (var i = 0; i < loadVids.length; i++){
		videoValues.push(i);
	}
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