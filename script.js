// Runs when the mouse is over (or keyboard focus is on) a thumbnail.
function upDate(previewPic) {
  console.log("upDate triggered");
  console.log("alt: " + previewPic.alt);
  console.log("src: " + previewPic.src);

  var preview = document.getElementById("image");
  preview.innerHTML = previewPic.alt;
  preview.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Runs when the mouse leaves (or focus leaves) a thumbnail.
function undo() {
  console.log("undo triggered");

  var preview = document.getElementById("image");
  preview.style.backgroundImage = "url('')";
  preview.innerHTML = "Hover over an image below to display here.";
}
