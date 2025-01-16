import hydraSynth from "https://esm.sh/hydra-synth";

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