const [red, green, blue] = [181, 137, 113]
const sand = document.querySelector('#sand')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / window.outerHeight;
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  sand.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})