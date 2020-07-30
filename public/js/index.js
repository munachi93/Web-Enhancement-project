

//fetch('https://localhost:8000/api/gallery')

fetch('https://gallery-heroku-atlas.herokuapp.com/api/gallery')
.then(function(response) {
  return response.json();
})
.then(function(photos) {

const imgList = photos;

let imgTemplate = ''; 

})
    
// Flex container for images
const gallery = document.querySelector('.gallery'); 

console.log(gallery);

// Let's run the loop!

for (let i = 0; i < imgList.length; i++){
  
  // This loop will run for every image in the list.

  // imgTemplate gradually grows as each HTML img is added to the existing string
  
  imgTemplate += `<a href= ${imgList[i].website}><img src="${imgList[i].fileName}" alt= "${imgList[i].title}"><div class= "desc"> ${imgList[i].description}</div></a>`;
  
}
// Add's HTML img string to gallery container
gallery.innerHTML = imgTemplate;