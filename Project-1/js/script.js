// star rating system Atari 2600

document.addEventListener("DOMContentLoaded", function ()
{
    // find every game card with its own rating section
    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach(function (card)
    {
        const stars = card.querySelectorAll(".star");
        const ratingValue = card.querySelector(".rating-value");

        stars.forEach(function (star)
        {
            star.addEventListener("click", function ()
            {
                const selectedRating = Number(star.dataset.value);

                // fill stars up to the selected rating
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
    // confirms feedback form submit works 
    const feedbackForm = document.querySelector(".feedback-form form"); 
    if (feedbackForm) 
    { 
        feedbackForm.addEventListener("submit", function (e) 
        { 
            e.preventDefault(); alert("Thank you for your feedback!"); 
            feedbackForm.reset(); 
        }); 
    }
});
