document.addEventListener("DOMContentLoaded", function ()
{
	// STEP 2a
	var blockGallery = document.getElementById("blockGallery");

	if (!blockGallery)
	{
		return;
	}

	// STEP 2b
	var blockLinks = blockGallery.querySelectorAll("a");

	// STEP 2c
	for (var i = 0; i < blockLinks.length; i++)
	{
		// STEP 3a
		blockLinks[i].addEventListener("click", function (event)
		{
			// STEP 3c
			event.preventDefault();

			// STEP 4a
			var blockHref = this.getAttribute("href");

			// STEP 4b
			var blockImage = document.getElementById("blockImage");

			// STEP 4c
			blockImage.setAttribute("src", blockHref);

			// STEP 5a
			var blockCaption = this.getAttribute("title");

			// STEP 5b
			var blockCaptionParagraph = document.getElementById("blockCaption");

			// STEP 5c
			blockCaptionParagraph.textContent = blockCaption;

			// STEP 3b
		});
	}

	// STEP 2d
});
