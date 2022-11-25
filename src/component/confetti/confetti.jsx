import React, { useCallback, useEffect, useRef } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti'

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
}

const Realistic = ({ count, limit }) => {
  const refAnimationInstance = useRef(null)

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance
  }, [])

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.5,  },
        particleCount: Math.floor(200 * particleRatio),
      })
  }, [])

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    })

    makeShot(0.2, {
      spread: 60,
    })

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    })
  }, [makeShot])

  // console.log(count, limit)
  // console.log(limit.reduce(((acc, cur)=> console.log(acc, cur, "akak") || ({...acc, yeah: (cur === count ) ? true : false})), {}), "nre")
  // const newCheck = limit.reduce(((acc, cur,i, a)=>  ({...acc, yeah: (cur[i] === count ) ? true : false})), {})
  const newCheck = limit.filter((el) => el === count)


  console.log(
    limit.filter((el) => el === count),
    '???'
  )

  useEffect(() => {
    if (newCheck.length) {
      document.getElementById('fire').click()
    }
  }, [makeShot, limit])

  return (
    <>
      <button hidden id='fire' onClick={fire}>
        Fire
      </button>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  )
}

export default Realistic
