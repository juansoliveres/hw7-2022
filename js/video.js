var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
console.log("Pause Video");
video.pause();
});

video.playbackRate = 1;

document.querySelector("#faster").addEventListener("click", function() {
console.log("Speed up Video");
video.playbackRate = video.playbackRate * 1.1;
console.log(video.playbackRate);
});

document.querySelector("#slower").addEventListener("click", function() {
console.log("Slow down Video");
video.playbackRate = video.playbackRate * 0.9;
console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
console.log('Video current time is: ' + video.currentTime);
console.log("Skip ahead");
video.currentTime = video.currentTime + 10;
console.log('Video current time is: ' + video.currentTime);
if (video.currentTime + 10 > video.duration){
	video.currentTime = 0;
	video.pause();
	console.log('Video current time is 0')
}
});

document.querySelector("#mute").addEventListener("click", function() {	
if (video.muted == false) {    
    video.muted = true;
    console.log('Mute')
    document.querySelector('#mute').innerHTML = 'Unmute'
}
else {
    video.muted = false
    console.log('Unmute')
    document.querySelector('#mute').innerHTML = 'Mute'   
};
});

var slider = document.querySelector('#slider')

// PONER VIDEO ABAJO!!!
document.querySelector("#slider").addEventListener("click", function() {
video.volume = slider.value / 100
console.log('The current value is: ' + video.volume);
document.querySelector("#volume").innerHTML = video.volume * 100 +'%'
});


document.querySelector("#vintage").addEventListener("click", function() {
video.classList.add('oldSchool') 
console.log('Vintage')
});


document.querySelector("#orig").addEventListener("click", function() {
video.classList.remove('oldSchool') 
console.log('Original')
});





