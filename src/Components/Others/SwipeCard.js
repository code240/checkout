import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from '@use-gesture/react'

export default function SwipeCard() {
  const [open, setOpen] = useState(false)

  // Initial top position: open => 30%, closed => 110%
  const [{ y }, api] = useSpring(() => ({ y: '110%' }))

  const openDrawer = () => {
    setOpen(true)
    api.start({ y: '30%', config: { duration: 1000 } }) // 1s ease like your button
  }

  const closeDrawer = () => {
    setOpen(false)
    api.start({ y: '110%', config: { duration: 300 } }) // close faster
  }

  const bind = useDrag(({ down, movement: [, my], velocity: [, vy], direction: [, dy] }) => {
    if (!open) return
    if (down) {
      // Drag drawer along finger if dragging down
      if (my > 0) api.start({ y: `calc(30% + ${my}px)`, immediate: true })
    } else {
      // On release: if dragged >100px or swiped fast downwards => close
      if (my > 100 || (vy > 1 && dy > 0)) closeDrawer()
      else api.start({ y: '30%', config: { duration: 300 } }) // snap back
    }
  })

  return (
    <>
      <animated.div
        {...bind()}
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: y,
          height: '70%',
          background: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          boxShadow: '0 -2px 10px rgba(0,0,0,0.2)',
          touchAction: 'none', // important for mobile touch
          transition: open ? 'top 1s ease' : undefined
        }}
      >
        {/* ---- Header (drag handle) ---- */}
        <div
          style={{
            height: 40,
            background: '#eee',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            cursor: 'grab'
          }}
        />
        {/* Drawer content */}
      </animated.div>
    </>
  )
}
