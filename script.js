space.width = window.innerWidth
space.height = window.innerHeight

const ctx = space.getContext('2d')

let surface = {
    width: 900,
    height: 600,
    color: "white"
}
surface.pos = [space.width/2-surface.width/2,space.height/2-surface.height/2]

ctx.fillStyle = surface.color
ctx.fillRect(surface.pos[0],surface.pos[1],surface.width,surface.height)

