space.width = window.innerWidth
space.height = window.innerHeight

const ctx = space.getContext('2d')

let surface = {
  width: 900,
  height: 600,
  color: "black"
}
surface.pos = [space.width/2-surface.width/2,space.height/2-surface.height/2]

let pen = { 
  radius: 3,
  color: "white"
}
update()

space.addEventListener('pointermove', function(e) {
  pen.x = e.offsetX
  pen.y = e.offsetY
  
  update()
})

function update() {
  ctx.clearRect(0, 0, space.width, space.height)

  ctx.fillStyle = "#4c4c4c"
  ctx.fillRect(surface.pos[0]+3, surface.pos[1]+3, surface.width, surface.height)
  ctx.fillStyle = surface.color
  ctx.fillRect(surface.pos[0], surface.pos[1], surface.width, surface.height)

  if( pen.x ) {
    ctx.beginPath()
    ctx.arc(pen.x, pen.y, pen.radius, 0, 2 * Math.PI, false)
    ctx.fillStyle = pen.color
    ctx.fill()
  }
}