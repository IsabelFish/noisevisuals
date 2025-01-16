import hydraSynth from "https://esm.sh/hydra-synth";

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