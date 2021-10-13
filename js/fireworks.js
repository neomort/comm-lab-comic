// js doc for using fireworkparticles


// generate particles that dissapear after a few moments, generate more on click
particlesJS("fireworks-js", {
  "particles": {
    "number": {
      "value": 1,
      "density": {
        "enable": true,
        "value_area": 10,
      }
    },
    "color": {
      "value": ["#ff0000","#00ff00","#ffffff"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.008017060304327615,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.16241544246026904,
        "opacity_min": 0,
        "sync": true
      }
    },
    "size": {
      "value": 8.017060304327615,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4.872463273808071,
        "size_min": 0,
        "sync": true
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 10.603412060865523,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 2324.947488255008,
        "rotateY": 2485.28869434156
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": ["repulse", "bubble"]
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 499.4274855653273,
        "size": 8.120772123013452,
        "duration": 0.7308694910712106,
        "opacity": 0.6171786813490223,
        "speed": 3
      },
      "repulse": {
        "distance": 113.69080972218832,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 10
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// // Copyright (c) 2021 by Johan (https://codepen.io/bob6664569/pen/rOzmve)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
