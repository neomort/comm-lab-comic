const [redSand, greenSand, blueSand] = [181, 137, 113];
const [redBlueSky, greenBlueSky, blueBlueSky] = [188, 225, 227];
const [redOrangeSky, greenOrangeSky, blueOrangeSky] = [196, 148, 116];
const [redPurpleSky, greenPurpleSky, bluePurpleSky] = [46, 26, 71];

let body = document.body;
let sand = document.getElementById('sand');
let splash = document.getElementById('splashscreen');

document.getElementById("first-slide").onscroll = function() {fadeSplash()};

function fadeSplash() {
  splash.fadeOut(500);
}

window.addEventListener('load', function () {

  //Set all element pages height
  var elementPages = document.getElementsByClassName("stickyPage");
  for (var i = 0; i < elementPages.length; i++) {
    elementPages[i].style.height=window.innerHeight + "px";
  }

})

window.addEventListener('scroll', () => {

  // Sand color shift
  let y = 1-((window.scrollY || window.pageYOffset) / body.offsetHeight);
  let [r, g, b] = [redSand*y, greenSand*y, blueSand*y].map(Math.round);
  sand.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  //Sky color shift
  //Blue to orange
  y = (window.scrollY || window.pageYOffset) / body.offsetHeight;
  if(y<0){
    y = 0;
  }
  if(y < 0.5){
    [r, g, b] = [redBlueSky + (redOrangeSky-redBlueSky)*y*2, greenBlueSky - (greenBlueSky-greenOrangeSky)*y*2, blueBlueSky - (blueBlueSky-blueOrangeSky)*y*2].map(Math.round);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
  //Orange to purple
  else{
    [r, g, b] = [redOrangeSky - (redOrangeSky-redPurpleSky)*((y-.5)*2), greenOrangeSky - (greenOrangeSky-greenPurpleSky)*((y-.5)*2), blueOrangeSky - (blueOrangeSky-bluePurpleSky)*((y-.5)*2)].map(Math.round);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  //Sand shrink past first slide
  let height = window.innerHeight;
  let scroll = (window.scrollY || window.pageYOffset);





  // text fade in/out 

  // console.log(scroll/height)

})

