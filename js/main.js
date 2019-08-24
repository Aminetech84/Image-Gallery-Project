$(document).ready(function () {
  $('[data-fancybox="gallery"]').fancybox({
    slideShow: {
      autoStart: true,

    },
    buttons: [
      "zoom",
      //"share",
      "slideShow",
      "fullScreen",
      //"download",
      "thumbs",
      "close"
    ],
    loop: true,
  });
});

for (let i = 0; i < 10; i++) {
  let collection = ["https://source.unsplash.com/random", "https://source.unsplash.com/collection/162213", "https://source.unsplash.com/collections/894", "https://source.unsplash.com/collections/2351409", "https://source.unsplash.com/494263", "https://source.unsplash.com/collections/362271", "https://source.unsplash.com/collections/3178572", "https://source.unsplash.com/collections/225", "https://source.unsplash.com/collections/540518", "https://source.unsplash.com/collections/2411320", "https://source.unsplash.com/collections/778914", "https://source.unsplash.com/collections/827743", "https://source.unsplash.com/collections/311028", "https://source.unsplash.com/collections/1538150", "https://source.unsplash.com/collections/2254180", "https://source.unsplash.com/collections/895539", "https://source.unsplash.com/collections/2437762"];
  let link = document.createElement('a');
  document.getElementById('gallery').appendChild(link);

  let att = document.createAttribute("href");
  let att1 = document.createAttribute("data-fancybox");  
  let att2 = document.createAttribute("data-caption");

  att.value = collection[i];
  att1.value = "gallery";  
  att2.value = `Caption ${i+2}`;
  
    
  link.setAttributeNode(att); 
  
  link.setAttributeNode(att1); 
  link.setAttributeNode(att2);

 
  
  
  //link.attributes("data-fancybox", "data-caption");
  //link.ap
  console.log(collection.length);
  console.log(gallery);
  console.log(window.Viewport);
  //el.addEventListener('click', slide);
  
  //console.log(el);
}
/*
function slide(i) {
  
  console.log(i);
}*/



/*

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}*/