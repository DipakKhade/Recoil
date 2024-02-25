import './App.css'
import {  selector, useRecoilState, useRecoilValue} from 'recoil'
import {  counterAtom } from './atoms/count'

function App() {
  
  return (
    <>
   <ShowCount/>
    </>
  )
}

export default App

function ShowCount(){
  const [count , setCount]  = useRecoilState(counterAtom)
  // const mySlector=useRecoilValue(mySlector)

  return(
    <>

    {count}
    <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>


    </>
  )
}