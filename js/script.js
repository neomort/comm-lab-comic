const [redSand, greenSand, blueSand] = [181, 137, 113];
const [redBlueSky, greenBlueSky, blueBlueSky] = [188, 225, 227];
const [redOrangeSky, greenOrangeSky, blueOrangeSky] = [196, 148, 116];
const [redPurpleSky, greenPurpleSky, bluePurpleSky] = [46, 86, 130];

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
  let scroll = (window.scrollY || window.pageYOffset);
  let qasr = document.getElementById('qasr');
  let nomadOne = document.getElementById('nomadOne');
  let nomadTwo = document.getElementById('nomadTwo');
  let nomadThree = document.getElementById('nomadThree');
  let nomadFour = document.getElementById('nomadFour');
  let camel = document.getElementById('camel');
  let britishOne = document.getElementById('britishOne');
  let britishTwo = document.getElementById('britishTwo');
  let trucial = document.getElementById('trucial');
  let british = document.getElementById('uk');
  let uae = document.getElementById('uaeFlag');


  //Fade out camel, extra men 1000
  if(scroll > 1000 && !nomadThree.classList.contains('hidden')){
    nomadThree.classList.remove("visable");
    nomadThree.classList.add("hidden");
  }
  else if(scroll < 1000 && !nomadThree.classList.contains('visable')){
    nomadThree.classList.remove("hidden");
    nomadThree.classList.add("visable");
  }
  if(scroll > 1000 && !nomadFour.classList.contains('hidden')){
    nomadFour.classList.remove("visable");
    nomadFour.classList.add("hidden");
  }
  else if(scroll < 1000 && !nomadFour.classList.contains('visable')){
    nomadFour.classList.remove("hidden");
    nomadFour.classList.add("visable");
  }
  if(scroll > 1000 && !camel.classList.contains('hidden')){
    camel.classList.remove("visable");
    camel.classList.add("hidden");
  }
  else if(scroll < 1000 && !camel.classList.contains('visable')){
    camel.classList.remove("hidden");
    camel.classList.add("visable");
  }

  //Fade out british 3250
  if(scroll > 3250 && !britishOne.classList.contains('hidden')){
    britishOne.classList.remove("visable");
    britishOne.classList.add("hidden");
  }
  else if(scroll < 3250 && !britishOne.classList.contains('visable')){
    britishOne.classList.remove("hidden");
    britishOne.classList.add("visable");
  }
  if(scroll > 3250 && !britishTwo.classList.contains('hidden')){
    britishTwo.classList.remove("visable");
    britishTwo.classList.add("hidden");
  }
  else if(scroll < 3250 && !britishTwo.classList.contains('visable')){
    britishTwo.classList.remove("hidden");
    britishTwo.classList.add("visable");
  }
  if(scroll > 3250 && !british.classList.contains('hidden')){
    british.classList.remove("visable");
    british.classList.add("hidden");
  }
  else if(scroll < 3250 && !british.classList.contains('visable')){
    british.classList.remove("hidden");
    british.classList.add("visable");
  }

  //Fade out trucial states and qasr and men 3900
  if(scroll > 3900 && !nomadOne.classList.contains('hidden')){
    nomadOne.classList.remove("visable");
    nomadOne.classList.add("hidden");
  }
  else if(scroll < 3900 && !nomadOne.classList.contains('visable')){
    nomadOne.classList.remove("hidden");
    nomadOne.classList.add("visable");
  }
  if(scroll > 3900 && !nomadTwo.classList.contains('hidden')){
    nomadTwo.classList.remove("visable");
    nomadTwo.classList.add("hidden");
  }
  else if(scroll < 3900 && !nomadTwo.classList.contains('visable')){
    nomadTwo.classList.remove("hidden");
    nomadTwo.classList.add("visable");
  }
  if(scroll > 3900 && !trucial.classList.contains('hidden')){
    trucial.classList.remove("visable");
    trucial.classList.add("hidden");
  }
  else if(scroll < 3900 && !trucial.classList.contains('visable')){
    trucial.classList.remove("hidden");
    trucial.classList.add("visable");
  }
  if(scroll > 3900 && !qasr.classList.contains('hidden')){
    qasr.classList.remove("visable");
    qasr.classList.add("hidden");
  }
  else if(scroll < 3900 && !qasr.classList.contains('visable')){
    qasr.classList.remove("hidden");
    qasr.classList.add("visable");
  }

  //Fade out uae flag 4633
  if(scroll > 4633 && !uae.classList.contains('hidden')){
    uae.classList.remove("visable");
    uae.classList.add("hidden");
  }
  else if(scroll < 4633 && !uae.classList.contains('visable')){
    uae.classList.remove("hidden");
    uae.classList.add("visable");
  }



  // text fade in/out 

  // console.log(scroll/height)

})

