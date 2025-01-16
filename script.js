import hydraSynth from "https://esm.sh/hydra-synth";
//FIRST
(function() {
const canvas = document.getElementById("myCanvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const hydra = new hydraSynth({
  canvas: document.getElementById("myCanvas"),
  detectAudio: true, 
})

// Edit from here:\:
a.hide()
a.setBins(6)

osc().modulate(noise(100),
()=>a.fft[1])
  .rotate(1.565)
  .out(o0)

src(o1).modulate(noise(1, ()=>a.fft[1]),()=>a.fft[1]).blend(shape(2),0.05)
  .scale(0.99)
  .out(o1)

src(o0).mult(o1).out(o2)

render(o2)
})();

//SECOND
(function() {
const canvas = document.getElementById("myCanvas1")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const hydra = new hydraSynth({
  canvas: document.getElementById("myCanvas1"),
  detectAudio: true,  
})

// Edit from here:\:
a.hide()
a.setBins(6)

osc().modulate(noise(100),
()=>a.fft[1])
  .rotate(1.565)
  .out(o0)

osc(10, 0.1, 0.8)
  .modulate(noise(1, ()=>a.fft[1]),()=>a.fft[1]).blend(shape(2, 0.1, 1),0.05)
  .rotate(0, 0.1)
  .kaleid(0.5, 0.5)
  .thresh(0.5,0.5)
  .rotate(5)
  .out(o1)

src(o0).mult(o1).out(o2)

render(o2)
})();

//THIRD
(function() {
const canvas = document.getElementById("myCanvas2")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const hydra = new hydraSynth({
  canvas: document.getElementById("myCanvas2"),
  detectAudio: true, 
})

// Edit from here:\:
a.hide()
a.setBins(6)

osc().modulate(noise(100),
()=>a.fft[1])
  .rotate(1.565)
  .out(o0)

osc(10, 0.1, 0.8)
  .modulate(noise(1, ()=>a.fft[2]),()=>a.fft[1]).blend(shape(2, 0.1, 1),0.05)
  .rotate(0, 0.1)
  .kaleid()
  .thresh(0.5,0.5)
  .rotate()
  .out(o1)

src(o0).mult(o1).out(o2)

render(o2)
})();

//FOURTH
(function() {
const canvas = document.getElementById("myCanvas3")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const hydra = new hydraSynth({
  canvas: document.getElementById("myCanvas3"),
  detectAudio: true, 
})

// Edit from here:\:
a.hide()
a.setBins(6)

osc().modulate(noise(80),
()=>a.fft[1])
 .modulatePixelate(noise(25,0.5),()=>a.fft[2]+1)
  .rotate(5,0.05)
  .out(o0)

osc(10, 0.1, 0.8)
  .modulate(noise(1, ()=>a.fft[2]),()=>a.fft[1]).blend(shape(2, 0.1, 1),0.05)
  .rotate(0, 0.1)
  .kaleid(2)
  .thresh(0.5,0.5)
  .out(o1)

src(o0).mult(o1).out(o2)

render(o2)
})();

//FIFTH
(function() {
const canvas = document.getElementById("myCanvas4")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const hydra = new hydraSynth({
  canvas: document.getElementById("myCanvas4"),
  detectAudio: true, 
})

// Edit from here:\:
a.hide()
a.setBins(6)

osc().modulate(noise(100),
()=>a.fft[1])
  .rotate(1.565)
  .out(o0)

osc(10, 0, 0.8)
  .modulate(noise(1,0.01),()=>a.fft[1])
  .blend(shape(2, 0.1, 1),0.05)
  .rotate(0, 0.5)
  .modulateKaleid(osc(5,0.025,0),()=>(a.fft[2]+5)*5)
  .thresh(0.5,0.05)
  .out(o1)

src(o0).mult(o1).out(o2)

render(o2)
})();

////////

document.getElementById('info-button').onclick = function() {
  document.getElementById('info-clicked').style.display = "block";
}

document.getElementById('close-info').onclick = function() {
  document.getElementById('info-clicked').style.display = 'none';
}