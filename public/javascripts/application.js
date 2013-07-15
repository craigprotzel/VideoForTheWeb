
//Responsive video function
var respondVideo = function(){
	$('iframe').width("100%");
	$('iframe').height( $('iframe').width() * 0.562);
};

//Random sort function
var randomSort = function(){return 0.5 - Math.random();};

$( document ).ready( function(){

	//Randomly select a video
	//var currentVid = loadVids[Math.floor(Math.random() * loadVids.length)];

	//Randomly sort the videos array
	loadVids.sort(randomSort);

	var videoValues = [];
	for (var i = 0; i < loadVids.length; i++){
		videoValues.push(i);
	}
	videoValues.sort(randomSort);
	videoValues.sort(randomSort);
	//console.log(videoValues);

	$('#embedVideoOne').html(loadVids[videoValues[0]]);
	$('#embedVideoTwo').html(loadVids[videoValues[1]]);
	$('#embedVideoThree').html(loadVids[videoValues[2]]);


	//Make video row responsive
	respondVideo();
	$(window).resize(function() {
		respondVideo();
	});

	//NEED SOME SORT OF CLOSURE
	//THE SCOPING IS NOT CORRECT, WILL ALSWAYS RETURN THE LAST J VALUE WHEN CLICKED
	// var courseButtons = 7;
	// for (var j = 0; j < courseButtons; j++){
	// 	var curButton = "#courseButton" + j;
	// 	var curInfo = "#courseInfo" + j;
	// 	$(curButton).bind('click', function(){
	// 		$(curInfo).toggle();
	// 	});
	// }

	$('#courseButton0').click(function(){
		$('#courseInfo0').toggle();
	});
	$('#courseButton1').click(function(){
		$('#courseInfo1').toggle();
	});
	$('#courseButton2').click(function(){
		$('#courseInfo2').toggle();
	});
	$('#courseButton3').click(function(){
		$('#courseInfo3').toggle();
	});
	$('#courseButton4').click(function(){
		$('#courseInfo4').toggle();
	});
	$('#courseButton5').click(function(){
		$('#courseInfo5').toggle();
	});
	$('#courseButton6').click(function(){
		$('#courseInfo6').toggle();
		$('#courseImage6').toggle();
	});


	$('#classButton0').click(function(){
		$('#classInfo0').toggle();
	});
	$('#classButton1').click(function(){
		$('#classInfo1').toggle();
	});
	$('#classButton2').click(function(){
		$('#classInfo2').toggle();
	});
	$('#classButton3').click(function(){
		$('#classInfo3').toggle();
	});
	$('#classButton4').click(function(){
		$('#classInfo4').toggle();
	});
	$('#classButton5').click(function(){
		$('#classInfo5').toggle();
	});
	$('#classButton6').click(function(){
		$('#classInfo6').toggle();
	});
	$('#classButton7').click(function(){
		$('#classInfo7').toggle();
	});
	$('#classButton8').click(function(){
		$('#classInfo8').toggle();
	});
	$('#classButton9').click(function(){
		$('#classInfo9').toggle();
	});
	$('#classButton10').click(function(){
		$('#classInfo10').toggle();
	});
	$('#classButton11').click(function(){
		$('#classInfo11').toggle();
	});

});