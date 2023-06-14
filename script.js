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
            <div class="useless"></div>
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
                        <span class="genre" style="background-color:${randomColor};">${genre}</span>
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
    // Check if the viewport width is less than or equal to 765 pixels
    if (window.innerWidth <= 1390) {
      // This block will be executed if the viewport width is less than or equal to 765 pixels

      // Check if the height of the detail container is not 230%
      if (detailContainer[i].style.height !== "180%") {
        // If the height is not 180%, then we want to open the details
            // Add the "open" class to the article
            document.getElementById(`article-${i}`).classList.add("open")

            // Set the height of the detail container to 230%
            detailContainer[i].style.height = "180%"

            // Display the details by setting the CSS display property to "flex"
            details[i].style.display = "flex"

            // Change the text of the details button to "Close"
            detailsBtn[i].innerText = "Close"
      } else {
        // If the height is already 230%, then we want to close the details
// Loop over all the detail containers
for (let j = 0; j < detailContainer.length; j++) {
  // Skip the current item
  if (j !== i) {
        // Remove the "open" class from the article
        document.getElementById(`article-${i}`).classList.remove("open")

        // Set the height of the detail container back to 85%
        detailContainer[i].style.height = "85%"

        // Hide the details by setting the CSS display property to "none"
        details[i].style.display = "none"

        // Change the text of the details button back to "Details"
        detailsBtn[i].innerText = "Details"
      }}}
    } else {
      // This block will be executed if the viewport width is greater 
      // Loop over all the detail containers
      for (let j = 0; j < detailContainer.length; j++) {
        // Skip the current item
        if (j !== i) {
          // Remove the "open" class from the article
          document.getElementById(`article-${j}`).classList.remove("open")

          // Set the width of the detail container to "120%"
          detailContainer[j].style.width = "120%"

          // Hide the details by setting the CSS display property to "none"
          details[j].style.display = "none"

          // Change the text of the details button to "Details"
          detailsBtn[j].innerText = "Details"
        }
      }

      // Check if the width of the detail container is not "230%"
      if (detailContainer[i].style.width !== "230%") {
        // If the width is not 230%, then we want to open the details

        // Add the "open" class to the article
        document.getElementById(`article-${i}`).classList.add("open")

        // Set the width of the detail container to "230%"
        detailContainer[i].style.width = "230%"

        // Display the details by setting the CSS display property to "flex"
        details[i].style.display = "flex"

        // Change the text of the details button to "Close"
        detailsBtn[i].innerText = "Close"
      } else {
        // If the width is already 230%, then we want to close the details

        // Remove the "open" class from the article
        document.getElementById(`article-${i}`).classList.remove("open")

        // Set the width of the detail container to "130%"
        detailContainer[i].style.width = "120%"

        // Hide the details by setting the CSS display property to "none"
        details[i].style.display = "none"

        // Change the text of the detailsbutton back to "Details"
        detailsBtn[i].innerText = "Details"
      }
    }
  }

  // Add an event listener to each details button that will run the toggleDetails function when clicked
  for (let i = 0; i < detailsBtn.length; i++) {
    detailsBtn[i].addEventListener("click", () => toggleDetails(i))
  }

  // Check the brightness level of the text
  const brightness = (color) => {
    const rgb = parseInt(color.substring(1), 16) // Convert hex color to RGB
    const r = (rgb >> 16) & 0xff // Extract red
    const g = (rgb >> 8) & 0xff // Extract green
    const b = rgb & 0xff // Extract blue

    // Calculate perceived brightness
    return Math.sqrt(
      0.299 * Math.pow(r, 2) + 0.587 * Math.pow(g, 2) + 0.114 * Math.pow(b, 2)
    )
  }
  // Give the color white or black to the text to ensure there is a nice contrast for visibility
  const contrastColor = (color) => {
    return brightness(color) > 127.5 ? "#000000" : "#ffffff"
  }

  // Iterate over each detail container and set its background color to the random color
  for (let i = 0; i < detailContainer.length; i++) {
    // Generate a new random color for each detail container
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)

    // Assign the new random color to the current detail container
    detailContainer[i].style.backgroundColor = randomColor
    detailContainer[i].style.color = contrastColor(randomColor)
  }
  //Add contrastColor to genre section
  let genre = document.getElementsByClassName("genre")
  genre.style.color = contrastColor(randomColor)
})
