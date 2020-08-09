/***
 * 'https://api.unsplash.com/photos/random?count=10&client_id=hb2kNPRL5fatx8AvGUmoT_vDutoytfUYX8loIV6BXLc'
 */
const getImgs = async () => {


  await fetch('https://api.unsplash.com/photos/random?count=10&client_id=hb2kNPRL5fatx8AvGUmoT_vDutoytfUYX8loIV6BXLc')
    .then(response => response.json())
    .then(data => {

      const array = [];
      const imgs = data;

      for (let i = 0; i < imgs.length; i++) {
        array.push(imgs[i]);


        //create a div
        let div = document.createElement('div');

        // set ID
        div.setAttribute("id", `${imgs[i].id}1`);
        document.getElementById("carousel1").appendChild(div);
      //  divsArray = ["carousel", "carousel1", "carousel2",]
     //   document.querySelectorAll("#carousel, #carousel1, #carousel2").appendChild(div);
      //console.log("a");
       /* divsArray.map(element => {
          
          console.log(element);
        });*/
        
     
      
        //create Link for fancybox
        let link = document.createElement('a');
        document.getElementById(`${imgs[i].id}1`).appendChild(link);

        link.setAttribute("href", `${imgs[i].urls.regular}`);
        link.setAttribute("data-fancybox", "gallery");
        link.setAttribute("id", `${imgs[i].id}`);



        //create image for fancybox that will appand to the link attribute
        let img = document.createElement("img");
        img.setAttribute("src", `${imgs[i].urls.thumb}`);

        img.setAttribute("alt", `${imgs[i].alt_description}`);
        document.getElementById(`${imgs[i].id}`).appendChild(img);

      }

      /**
       * alt_description
       * urls > regular   small
       * user > name
       */

/*
      let img = document.createElement("img");
      img.setAttribute("src", `${array.map(item => item.urls.small)}`);

      img.setAttribute("alt", "The Pulpit Rock");
      document.getElementById('app').appendChild(img);*/


      console.log(array)
      /*x.setAttribute("width", "304");
      x.setAttribute("height", "228");*/



    });
    const ids = ["#carousel","","#carousel2"]

    ids.forEach(i => {
      
    });

  $("#carousel1").slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: 'linear',
    infinite: true,
    focusOnSelect: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }]
  });


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

}


getImgs();















/*
.then(data => {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    
  //  console.log(element.urls.regular);
  }
  console.log();
})
.then(imgSrcRegular = element.urls.regular)*/

/**
 *    const array = [];
        const countires1 = res.data;

        for (let i = 0; i < countires1.length; i++) {
          array.push(countires1[i]);
        }

        const algeria = array.filter(word => word.country === this.props.country);

        console.log(array);


        const sortCases = (a, b) => (a.cases < b.cases) ? 1 : (b.cases < a.cases) ? -1 : 1;
        const sortTodayCases = (a, b) => (a.todayCases < b.todayCases) ? 1 : (b.todayCases < a.todayCases) ? -1 : 1;
        const sortTodayDeaths = (a, b) => (a.todayDeaths < b.todayDeaths) ? 1 : (b.todayDeaths < a.todayDeaths) ? -1 : 1
        const sortRecovered = (a, b) => (a.recovered < b.recovered) ? 1 : (b.recovered < a.recovered) ? -1 : 1
        const sortDeaths = (a, b) => (a.deaths < b.deaths) ? 1 : (b.deaths < a.deaths) ? -1 : 1

        const resultCases = array.sort(sortCases).slice(0, 10);
        const resultTodayCases = array.sort(sortTodayCases).slice(0, 10);
        const resultTodayDeaths = array.sort(sortTodayDeaths).slice(0, 10);
        const resultRecovered = array.sort(sortRecovered).slice(0, 10);
        const resultDeaths = array.sort(sortDeaths).slice(0, 10);


         {this.state.con0.map(country => <span key={country.country} className=''>{new Intl.NumberFormat().format(country.cases)}</span>)}


 */




















/**
 * fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
 */






/*

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
*/






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