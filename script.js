space.width = window.innerWidth
space.height = window.innerHeight

const ctx = space.getContext( '2d' )

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

let tool = "path"
let activePath, items = []
update()

space.addEventListener( 'pointermove', function(e) {
  pen.x = e.offsetX
  pen.y = e.offsetY
  
  if( activePath ) items[ activePath.i ].pts.push( { x: pen.x, y: pen.y } )

  update()
})

space.addEventListener( 'pointerdown', function(e) {
  activePath = { i: items.length } 
  items.push( { 
    pts: [ { x: pen.x, y: pen.y } ], 
    type: "path",
    color: pen.color,
    radius: pen.radius } )

  update()
})

space.addEventListener( 'pointerup', function(e) {
  activePath = false

  update()
})

function update() {
  ctx.clearRect( 0, 0, space.width, space.height )

  ctx.fillStyle = "#4c4c4c"
  ctx.fillRect( surface.pos[0]+3, surface.pos[1]+3, surface.width, surface.height )
  ctx.fillStyle = surface.color
  ctx.fillRect( surface.pos[0], surface.pos[1], surface.width, surface.height )

  for( let item of items ) {

    if( item.type == "path" ) {
      ctx.beginPath()
      ctx.fillStyle = "none"
      ctx.strokeStyle = item.color
      ctx.lineWidth = item.radius * 2

      ctx.moveTo( item.pts[0].x, item.pts[0].y )
      for( let i = 1; i < item.pts.length; i++ ) {
        ctx.lineTo( item.pts[i].x, item.pts[i].y )
      }

      ctx.stroke()
    }
  }

  if( pen.x ) {
    ctx.beginPath()
    ctx.arc( pen.x - pen.radius, pen.y - pen.radius, pen.radius, 0, 2 * Math.PI, false )
    ctx.fillStyle = pen.color
    ctx.fill()
    ctx.fillText( tool, pen.x + 3, pen.y )
  }
}