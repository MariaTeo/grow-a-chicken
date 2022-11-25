import { useState } from 'react'
import { ChickEgg, Realistic, Image } from './component'

function App() {
  const [count, setCount] = useState(0)

  const click = () => {
    setCount(count + 1)
  }

  const limit = [10, 20, 30, 40]

  return (
    <div>
      { count < 10 && (
        <Image count={count} url='/image/egg.png' id='egg'></Image>
      )}
      {count > 9 && <ChickEgg/>}

      <button id='button' onClick={click}>
        {count}
      </button>

      <Realistic count={count} limit={limit} />
    </div>
  )
}

export default App
