
import './App.css';
import MyLineChart from './components/MyLineCharts/MyLineChart';
import SpecialChaert from './components/SpecialChart/SpecialChaert';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';


function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
     to: { opacity: 1 }, 
     from: { opacity: 0 } ,
     reset: true,
     reverse: flip,
     delay: 200,
     onRest: () => set(!flip),
    })
  return (
    <div>
      <animated.div style={props}>I will fade in</animated.div>
      <MyLineChart></MyLineChart>
      <SpecialChaert></SpecialChaert>
    </div>
  );
}

export default App;
