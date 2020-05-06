// Regex for urls
let urlPattern = /https:\/\/www.instagram.com\/[^\/]*\//g;
let imgPattern = /https:\/\/www.instagram.com\/[^\/]+\/p\/[^\/]+\//g;
let imgPathPattern = /\/p\/[^\/]+\//g;

// Profile url
let url = window.location.href.match(urlPattern);

// Listen for click
document.addEventListener('click', function(event) {
    // initial target
    target = event.target;

    // Loop through targets until we find the link of image page
    while (target) {
      if (target.parentNode instanceof HTMLAnchorElement) {
        let imgPath = target.parentNode.getAttribute('href');
        let imgMatch = imgPath.match(imgPattern);
        let imgPathMatch = imgPath.match(imgPathPattern);

        if(imgMatch && imgMatch.length > 0){
          window.open(url[0] + imgMatch[0]);
        } else if(imgPathMatch && imgPathMatch.length > 0) {
          window.open(url[0] + imgPathMatch[0].substring(1));
        }
        removePopup();
        break;
      }
      
      target = target.parentNode;
    }
}, true);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* 
  Remove popup from profile page
*/
async function removePopup(){
  await sleep(1000);
  document
    .querySelectorAll('[role="presentation"]')
    .forEach(function (element) {
      element.remove()
    })
}