import hydraSynth from "https://esm.sh/hydra-synth";

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