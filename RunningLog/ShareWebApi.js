// Share Web Api 
const share = document.getElementById('share')

share.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api 
    navigator.share({
      text: 'Running Log a easy and useful way of tracking running sessions: ',
      url: 'https://clerusync.com/RunningLog/'
    });
  } else {
    // Alert is function not supported on browser
    alert("This browser does not support the share function, please share QR code instead.")
  }
});
// Share Web Api
