console.log("gallery.js loaded");

// Run this AFTER the HTML is parsed
document.addEventListener("DOMContentLoaded", function () {

  // STEP 2a: Grab the UL with id="blockGallery"
  var blockGallery = document.getElementById("blockGallery");
  if (!blockGallery) {
    console.log("blockGallery UL not found");
    return;
  }

  // STEP 2b: Get all <a> elements inside the UL using querySelectorAll
  var blockLinks = blockGallery.querySelectorAll("a");

  // STEP 2c: Loop through each link
  for (var i = 0; i < blockLinks.length; i++) {

    // STEP 3a: Add onclick event with anonymous function
    blockLinks[i].addEventListener("click", function (event) {

      // STEP 3c: Prevent default link navigation
      event.preventDefault();

      // STEP 4a: Get the href value of the clicked link
      var blockHref = this.getAttribute("href");

      // STEP 4b: Grab the main image by ID
      var blockImage = document.getElementById("blockImage");

      // STEP 4c: Update the image src
      if (blockImage) {
        blockImage.setAttribute("src", blockHref);
      }

      // STEP 5a: Get the title attribute of the clicked link
      var blockCaption = this.getAttribute("title");

      // STEP 5b: Grab the P element for block caption
      var blockCaptionParagraph = document.getElementById("blockCaption");

      // STEP 5c: Update the caption text
      if (blockCaptionParagraph) {
        blockCaptionParagraph.textContent = blockCaption;
      }

      // Extra safeguard to stop navigation
      return false;
    });
  }
});
