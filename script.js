// Importing collection from another JavaScript file
import collection from "./collection.js"

// Initializing an empty string to hold the HTML content
let content = ""

// Add an event listener to the document that will run the following function when the HTML document has been completely loaded and parsed
document.addEventListener("DOMContentLoaded", () => {
    // Initialize an order counter to keep track of the order of each item
    let order = 0;

    // Iterate over each item in the collection
    collection.forEach((item) => {
        // Append a HTML template to the content string for each item in the collection. This template creates a flip card with front and back sides for each item.
        content += `
    <article id="article-${order}">
    <div class="flip-card-container" style="--hue: 220">
            <div class="flip-card">
                <div class="card-front">
                    <figure>
                        <img class="poster-front" src="${item.Poster_Front}" />
                    </figure>
                </div>
                <div class="card-back">
                    <figure>
                        <div class="img-bg"></div>
                        <img class="poster-back" src="${item.Poster_Back}" />
                    </figure>
                    <button class="details-button">Details</button>
                    <div class="design-container">
                        <span class="design design--1"></span>
                        <span class="design design--2"></span>
                        <span class="design design--3"></span>
                        <span class="design design--4"></span>
                        <span class="design design--5"></span>
                        <span class="design design--6"></span>
                        <span class="design design--7"></span>
                        <span class="design design--8"></span>
                    </div>
                </div>
            </div>
            <div class="detail_container">
                <div class="details">
                    <div class="top">
                        <span class="imdb-note">
                            <i class="fa-brands fa-imdb"></i>
                            <i class="fa-solid fa-star"></i>
                            <span class="imdb">${item.IMDB_Score}</span>
                        </span>
                    </div>
                    <h2 class="title">${item.Title}</h2>
                    <p class="static">Director :<span class="director">${
                      item.Director
                    }</span></p>
                    <p class="static">Release year: <span class="year">${
                      item.Year
                    }</span></p>
                    <p class="description">${item.Description}</p>
                    <div class="bottom">
                        <span class="genre">${item.Genres.join(" , ")}</span>
                        <span class="socials">
                            <a href="${item.Trailer}" id="trailer">
                                <i class="fa-solid fa-play"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </article>
    `
       // Increment the order counter
       order++;
    })

    // Select the HTML element with the id of "movie-container" and replace its innerHTML with the content string
    document.querySelector("#movie-container").innerHTML = content

    // Get all HTML elements with the class name of "detail_container"
    let detailContainer = document.getElementsByClassName("detail_container")

    // Get all HTML elements with the class name of "details"
    let details = document.getElementsByClassName("details")

    // Get all HTML elements with the class name of "details-button"
    let detailsBtn = document.getElementsByClassName("details-button")

    // Generate a random hexadecimal color
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)

    // Select the first "article" HTML element
    let article = document.querySelector("article")

    // Declare a function that will toggle the details of each item
    const toggleDetails = () => {
        // Iterate over each detail container
        for (let i = 0; i < detailContainer.length; i++) {
            // Check if the width of the detail container is not "250%"
            if (detailContainer[i].style.width !== "250%") {
                // Set the order of this article to 1000
                document.getElementById(`article-${i}`).style.order = 1000

                // Add the "expanded" class to the article
                article.classList.add("expanded")

                // Set the width of the detail container to "250%"
                detailContainer[i].style.width = "250%"

                // After 1 second, display the details
                setTimeout(() => {
                    details[i].style.display = "flex"
                }, "1000")

                // Change the text of the details button to "Close"
                detailsBtn[i].innerText = "Close"
            } else {
                // Reset the order of this article
                document.getElementById(`article-${i}`).style.order = i

                // Set the width of the detail container to "130%"
                detailContainer[i].style.width = "130%"

                // Hide the details
                details[i].style.display = "none"

                // Change the text of the details button to "Details"
                detailsBtn[i].innerText = "Details"
            }
        }
    }

    // Iterate over each detail container and set its background color to the random color
    for (let i = 0; i < detailContainer.length; i++) {
        detailContainer[i].style.backgroundColor = randomColor
    }

    // Add an event listener to each details button that will run the toggleDetails function when clicked
    for (let i = 0; i < detailsBtn.length; i++) {
        detailsBtn[i].addEventListener("click", toggleDetails)
    }
})