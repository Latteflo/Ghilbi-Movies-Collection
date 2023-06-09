let posterFront= document.querySelector('.poster-front')
let posterBack= document.querySelector('.poster-back')
let trailerLink=document.querySelector('#trailer')
let imdbScore=document.querySelector('.imdb')
let genre=document.querySelector('.genre')
let title=document.querySelector('.title')
let director=document.querySelector(".director")
let year=document.querySelector(".year")
let description= document.querySelector(".description")

let data;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
   

        console.log(data);
    })
    .catch(error => console.error('Error:', error));
