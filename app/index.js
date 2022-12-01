//selecting the video element
let play = document.querySelector('.viewer');

//listen for every video click
document.querySelectorAll('.video-container video').forEach((vid) => {
	vid.onclick = () => {
		//When any video is clicked, unhide the popup-video
		document.querySelector('.popup-video').style.display = 'block';
		//play the video that was clicked and triggered the event
		document.querySelector('.popup-video video').src = vid.getAttribute('src');
		//take the poster of the video that triggered the event
		// document.querySelector('.popup-video video').poster =
		// 	vid.getAttribute('poster');
	};
});

// When the X span is clicked
document.querySelector('.popup-video span').onclick = () => {
	//When clicked hide the pop-up video
	document.querySelector('.popup-video').style.display = 'none';
	//Pause the video from playing
	play.pause();
};

//Prevent scrolling

function preventScroll(e) {
	e.preventDefault();
	e.stopPropagation();

	return false;
}

function disable() {
	document
		.querySelector('.video-container')
		.addEventListener('wheel', preventScroll);
}

function enable() {
	document
		.querySelector('.video-container')
		.removeEventListener('wheel', preventScroll);
}

// document.querySelector('#prevent').addEventListener('click', disable);
// document.querySelector('#allow').addEventListener('click', enable);

let scroll = document.querySelectorAll('.video-container');

scroll.forEach((cont) => {});
