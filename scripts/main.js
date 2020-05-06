// Url of Instagram user
let url = window.location.href;

document.addEventListener('click', function(event) {
    // initial target
    target = event.target;

    // Loop through targets until we find the link of image page
    while (target) {
      if (target.parentNode instanceof HTMLAnchorElement) {
        window.open(url + target.parentNode.getAttribute('href').substring(1));
        break;
      }
      target = target.parentNode;
    }
}, true);