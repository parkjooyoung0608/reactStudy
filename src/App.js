import React, {useState} from 'react';
import './Box.css';
// import Box from './Box'

function App(){
  let count = 0
  const [count2, setCount2] = useState(0);
  const increase = () => {
    count = count + 1
    setCount2(count2 + 1)
    console.log(count, count2)
  }
    return (
		<>
			{/* <Box name="리액트" num="1"/>
			<Box name="너무"  num="2"/>
			<Box name="어려워요"  num="3"/>
			<Box name="ㅠㅠ"  num="4"/> */}

      <div>{count}</div>
      <div>state:{count2}</div>
      <button onClick={increase}>증가</button>
		</>
	)
}

export default App;