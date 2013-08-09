var loadVids = [
	//Symmetry
	'<iframe src="http://player.vimeo.com/video/22564317?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Ira Glass - Storytelling Part 2 of 4
	'<iframe width="960" height="720" src="//www.youtube-nocookie.com/embed/KW6x7lOIsPE?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Battle At Kruger Park
	'<iframe width="960" height="720" src="//www.youtube-nocookie.com/embed/LU8DDYz68kM?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Casey Neistat - Staten Island Hurrican Destruction
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/Wr9594oKZNQ?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Ikea - Lamp by Spike Jonze
	'<iframe width="960" height="720" src="//www.youtube-nocookie.com/embed/dBqhIVyfsRg?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Berg - Immaterials Light Painting WiFi
	'<iframe src="http://player.vimeo.com/video/20412632?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Audri's Rube Goldberg Monster Trap
	'<iframe width="960" height="720" src="//www.youtube-nocookie.com/embed/0uDDEEHDf1Y?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Science of Sleep Trailer
	'<iframe src="http://player.vimeo.com/video/27353491?title=0&amp;byline=0&amp;portrait=0&amp;color=c7c7c7" width="500" height="369" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Myspace - This Is UX
	'<iframe src="http://myspace.com/play/video/this-is-myspace-ux-109345729" width="500" height="281" frameborder="0" allowFullScreen></iframe>',
	//Instagram - Introducing Video
	'<iframe src="http://player.vimeo.com/video/68765934?byline=0&amp;portrait=0&amp;color=c7c7c7" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Marcel the Shell with Shoes On
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/VF9-sEbqDvU?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Simon Christen - Adrift
	'<iframe src="http://player.vimeo.com/video/69445362?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="500" height="270" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Yaslin Bey (Mos Def) - Guantanamo Force Feeding
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/4hQ5xz_5to4?rel=0" frameborder="0" allowfullscreen></iframe>',
	//DJI Phantom Video Contest - Drone Over Niagra Falls
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/cfoLYTKObiU?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Willie Witte - Screen Grab
	'<iframe src="http://player.vimeo.com/video/64686559?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Sarah Hallacher - M1X3D 51GN4L5
	'<iframe src="http://player.vimeo.com/video/60923856?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Leo Kang - I Want To
	'<iframe src="http://player.vimeo.com/video/23593862?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="275" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Ji Lee - Word As Image
	'<iframe src="http://player.vimeo.com/video/30168074?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Julia Pott - Belly
	'<iframe src="http://player.vimeo.com/video/46233381?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Jensen Studios - Magic Arms
	'<iframe src="http://player.vimeo.com/video/43254602?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//McLean Fahnestock - Grand Finale
	'<iframe src="http://player.vimeo.com/video/27505192?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Aram Bartholl - How To Avoid Facial Recognition
	'<iframe src="http://player.vimeo.com/video/41861212?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Nexus - Forms
	'<iframe src="http://player.vimeo.com/video/37955460?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Timo - Robot Readable World
	'<iframe src="http://player.vimeo.com/video/36239715?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Lia MArtinez - Cavendish Trebuchet
	'<iframe src="http://player.vimeo.com/video/34423744?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="283" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//ListServe - What Would You Say To 1 Million People?
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/S2uH9rr5FhY?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Peter Javidpour - Mrs. Doubtfire Trailer
	'<iframe src="http://player.vimeo.com/video/18189077?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//The Shining Recut
	'<iframe width="960" height="720" src="//www.youtube-nocookie.com/embed/KmkVWuP_sO0?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Hennessy Youngman - Call For Entries - It's A Small Small World
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/jj0uxwo-4MA" frameborder="0" allowfullscreen></iframe>',
	//Tyler Cullen - What Song Are You Listening To?
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/tvHRUY0tBcs?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Odd Future - Tour New York 2012
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/KrUBS9UNvnc" frameborder="0" allowfullscreen></iframe>',
	//Masakaa - Sour 
	'<iframe width="960" height="720" src="//www.youtube-nocookie.com/embed/WfBlUQguvyw?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Ze Frank - The Show - Life Advice From Twitter
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/8HSjsLVYMA4?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Pepsi Max - Uncle Drew
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/8DnKOc6FISU?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Handsome Donkey - Le Montage
	'<iframe src="http://player.vimeo.com/video/7869586?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
	//Melbourne Metro - Dumb Ways To Die
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/IJNR2EpS0jw?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Dove - Real Beauty Sketches
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/XpaOjMXyJGk?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Dollar Shave Club - Our Blades Are F****ng Great
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/ZUG9qYTJMsI?rel=0" frameborder="0" allowfullscreen></iframe>',
	//DC Shoes - Gymkhana
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/4TshFWSsrn8?rel=0" frameborder="0" allowfullscreen></iframe>',
	//BlendTec - Will It Blend?
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/lAl28d6tbko?rel=0" frameborder="0" allowfullscreen></iframe>',
	//P&G - Olympics Thank You Mom
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/2V-20Qe4M8Y?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Budweiser - Flash Fans
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/y0qZYqdsYAg?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Chipotle - Back to the Start
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/aMfSGt6rHos?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Sony Bravia - Bouncy Balls
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/0_bx8bnCoiU?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Tropicana - Arctic Sun
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/4Krky4i6Xk8?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Toyota - Swagger Wagon
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/ql-N3F1FhW4?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Puma - Hardchorus
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/uiskWM1hzL8?rel=0" frameborder="0" allowfullscreen></iframe>',
	//Lady Gaga - Google Chrome
	'<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/JVbXrubQpa0?rel=0" frameborder="0" allowfullscreen></iframe>',
	//UC Davis - Pepper Spray Four Perspectives
	'<iframe width="960" height="720" src="//www.youtube-nocookie.com/embed/WO4406KJQMc?rel=0" frameborder="0" allowfullscreen></iframe>'
];