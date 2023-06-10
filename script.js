import collection from "./collection.js"

let content = ""
document.addEventListener("DOMContentLoaded", () => {
  let order = 0 // Order counter
  collection.forEach((item) => {
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
                        <span class="genre">${item.Genres.join(", ")}</span>
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
    order++ // Increment the order counter
  })

  document.querySelector("#movie-container").innerHTML = content

  //////added Details/Close btn functionality and behaviour

  let detailContainer = document.getElementsByClassName("detail_container")
  let details = document.getElementsByClassName("details")
  let detailsBtn = document.getElementsByClassName("details-button")
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
  let article = document.querySelector("article")

  const toggleDetails = (event) => {
    let clickedIndex
    for (let i = 0; i < detailsBtn.length; i++) {
      if (detailsBtn[i] === event.target) {
        clickedIndex = i
        break
      }
    }
    if (detailContainer[clickedIndex].style.width !== "250%") {
      document.getElementById(`article-${clickedIndex}`).style.order = 1000
      detailContainer[clickedIndex].style.width = "250%"
      setTimeout(() => {
        details[clickedIndex].style.display = "flex"
      }, "1000")
      detailsBtn[clickedIndex].innerText = "Close"
    } else {
      document.getElementById(`article-${clickedIndex}`).style.order =
        clickedIndex // Reset the order of this article
      detailContainer[clickedIndex].style.width = "130%"
      details[clickedIndex].style.display = "none"
      detailsBtn[clickedIndex].innerText = "Details"
    }
  }

  for (let i = 0; i < detailsBtn.length; i++) {
    detailsBtn[i].addEventListener("click", toggleDetails)
  }

  for (let i = 0; i < detailContainer.length; i++) {
    detailContainer[i].style.backgroundColor = randomColor
  }
})
