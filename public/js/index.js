

//fetch('http://localhost:8000/api/gallery')

fetch('https://travel-agency2020.herokuapp.com/api/gallery')
.then(function(response) {
  return response.json();
})
.then(function(images) {

const imgList = images;

let imgTemplate = '';    
// Flex container for images
const gallery = document.querySelector('.gallery'); 

console.log(gallery);

// Let's run the loop!

for (let i = 0; i < imgList.length; i++){
  
  // This loop will run for every image in the list.

  // imgTemplate gradually grows as each HTML img is added to the existing string
  
  imgTemplate += `<a href= ${imgList[i].id}><img src="images/${imgList[i].fileName}" alt= "${imgList[i].title}"><div class= "desc"> ${imgList[i].description}</div></a>`;
  
}
// Add's HTML img string to gallery container
gallery.innerHTML = imgTemplate;

})

