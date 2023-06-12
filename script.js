// Importing collection from another JavaScript file
import collection from "./collection.js"

// Initializing an empty string to hold the HTML content
let content = ""

// Add an event listener to the document that will run the following function when the HTML document has been completely loaded and parsed
document.addEventListener("DOMContentLoaded", () => {
  // Initialize an order counter to keep track of the order of each item
  let order = 0

  // Iterate over each item in the collection
  collection.forEach((item) => {
    // Generate a new random color for each item
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)

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
            <div class ="detail_wrap">
            <div class="detail_container">
                <div class="details">
                    <div class="top">
                        <span class="imdb-note">
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
                    <div class="genres">
                    ${item.Genres.map(
                      (genre) => `
                        <span class="genre" style="background-color: ${randomColor}">${genre}</span>
                    `
                    ).join("")}
                </div>
                        <span class="socials">
                            <a href="${
                              item.Trailer
                            }" target='_blank' id="trailer">
                                <i class="fa-solid fa-play"></i>
                            </a>
                        </span>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </article>
    `
    // Increment the order counter
    order++
  })

  // Select the HTML element with the id of "movie-container" and replace its innerHTML with the content string
  document.querySelector("#movie-container").innerHTML = content

  // Get all HTML elements with the class name of "detail_container"
  let detailContainer = document.getElementsByClassName("detail_wrap")

  // Get all HTML elements with the class name of "details"
  let details = document.getElementsByClassName("details")

  // Get all HTML elements with the class name of "details-button"
  let detailsBtn = document.getElementsByClassName("details-button")

  // Select the first "article" HTML element
  let article = document.querySelector("article")

  // Declare a function that will toggle the details of each item
  const toggleDetails = (i) => {
    // First, close all detail containers
    for (let j = 0; j < detailContainer.length; j++) {
      if (j !== i) {
        // Skip the current item
        // Remove the "open" class from the article
        document.getElementById(`article-${j}`).classList.remove("open")

        // Set the width of the detail container to "130%"
        detailContainer[j].style.width = "130%"

        // Hide the details
        details[j].style.display = "none"

        // Change the text of the details button to "Details"
        detailsBtn[j].innerText = "Details"
      }
    }

    // Check if the width of the detail container is not "250%"
    if (detailContainer[i].style.width !== "230%") {
      // Add the "open" class to the article
      document.getElementById(`article-${i}`).classList.add("open")
      // Set the width of the detail container to "250%"
      detailContainer[i].style.width = "230%"
      // display the details
      details[i].style.display = "flex"

      // Change the text of the details button to "Close"
      detailsBtn[i].innerText = "Close"
    } else {
      // Remove the "open" class from the article
      document.getElementById(`article-${i}`).classList.remove("open")

      // Set the width of the detail container to "130%"
      detailContainer[i].style.width = "130%"

      // Hide the details
      details[i].style.display = "none"

      // Change the text of the details button to "Details"
      detailsBtn[i].innerText = "Details"
    }
  }

  

  // Add an event listener to each details button that will run the toggleDetails function when clicked
  for (let i = 0; i < detailsBtn.length; i++) {
    detailsBtn[i].addEventListener("click", () => toggleDetails(i))
  }

  // Iterate over each detail container and set its background color to the random color
  for (let i = 0; i < detailContainer.length; i++) {
    // Generate a new random color for each detail container
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)

    // Assign the new random color to the current detail container
    detailContainer[i].style.backgroundColor = randomColor
  }
})
