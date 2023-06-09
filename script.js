let posterFront = document.querySelector(".poster-front")
let posterBack = document.querySelector(".poster-back")
let trailerLink = document.querySelector("#trailer")
let imdbScore = document.querySelector(".imdb")
let genre = document.querySelector(".genre")
let title = document.querySelector(".title")
let director = document.querySelector(".director")
let year = document.querySelector(".year")
let description = document.querySelector(".description")
let closeButton = document.getElementById("close")
let detailContainer = document.getElementsByClassName("detail_container")
let details = document.getElementsByClassName("details")
let data
///// getting data from json
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.error("Error:", error))

//////added Close btn functionality and behaviour
document.addEventListener("DOMContentLoaded", () => {
  const expandDetails = () => {
    for (let i = 0; i < detailContainer.length; i++) {
      detailContainer[i].style.width = "250%"
    }
  }
  ////close button
  const closeDetails = () => {
    for (let i = 0; i < details.length; i++) {
      details[i].style.display = "none"
      detailContainer[i].style.width = "130%"
    }
  }
  closeButton.addEventListener("click", closeDetails)
  detailContainer.addEventListener("hover", expandDetails)
})
