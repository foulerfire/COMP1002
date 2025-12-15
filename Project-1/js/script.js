// Star rating system (Atari 2600 micro-site)
// File: js/script.js

document.addEventListener("DOMContentLoaded", function ()
{
    // Find every game card (each one has its own rating section)
    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach(function (card)
    {
        const stars = card.querySelectorAll(".star");
        const ratingValue = card.querySelector(".rating-value");

        // Safety check (in case a card is missing parts)
        if (stars.length === 0 || !ratingValue)
        {
            return;
        }

        stars.forEach(function (star)
        {
            star.addEventListener("click", function ()
            {
                const selectedRating = Number(star.dataset.value);

                // Fill stars up to the selected rating
                stars.forEach(function (s)
                {
                    const starValue = Number(s.dataset.value);

                    if (starValue <= selectedRating)
                    {
                        s.classList.add("filled");
                    }
                    else
                    {
                        s.classList.remove("filled");
                    }
                });

                // Update the text for THIS game card only
                ratingValue.textContent = selectedRating + " / 5";
            });
        });
    });

    // Optional: prevent the feedback form from reloading the page
    // (Delete this block if you want the form to submit normally)
    const feedbackForm = document.querySelector(".feedback-form form");
    if (feedbackForm)
    {
        feedbackForm.addEventListener("submit", function (e)
        {
            e.preventDefault();
            alert("Thanks for your feedback!");
            feedbackForm.reset();
        });
    }
});
