import {useState} from 'react'
import './App.css'

function App() {
   const [weight, setWeight] = useState('');
   const [height, setHeight] = useState('');
   const [result, setResult] = useState('Enter values to calculate');
   
   function CalculateBMI(e){
    e.preventDefault()

    if(!weight || !height){
      setResult("Please enter both values")
      return
    }
    else{
      const heightInMeters = height/100;
      const bmi = weight / (Math.pow(heightInMeters,2))

      if(bmi < 18.5){
         setResult(`Your BMI is ${bmi.toFixed(2)} : 
         You are UNDERWEIGHT`);
      }
      else if(bmi >= 18.5 && bmi <= 24.9){
         setResult(`Your BMI is ${bmi.toFixed(2)} : 
         You are HEALTHY`);
      }
       else if(bmi >= 25 && bmi <= 29.9){
         setResult(`Your BMI is ${bmi.toFixed(2)} : 
         You are OVERWEIGHT`);
      }
      else{
        setResult(`Your BMI is ${bmi.toFixed(2)} : 
         You are OBESE`);
      }

      
    }
   }

  return (
   <div className='h-screen bg-sky-950 p-2 flex flex-col justify-center items-center '>
      <div className="container h-112 w-90 border-2 border-white rounded-xl p-3 text-white shadow-white shadow-sm">
        <h1 className='text-center text-4xl font-bold'>
          BMI Calculator
        </h1>

        <form action="" className='mt-5 flex flex-col' onSubmit={CalculateBMI}>
          <label htmlFor="height">Height (cm)</label> 
          <br />
          <input type="number" placeholder='e.g 170' className='bg-white w-full py-2 px-3 rounded-sm text-black' onChange={(e) => setHeight(e.target.value)} />
           <br />
          <label htmlFor="weight">Weight (kg)</label>
          <br />
          <input type="number" placeholder='e.g 65' className='bg-white w-full py-2 px-3  rounded-sm text-black' onChange={(e) => setWeight(e.target.value)}/>

          <button className='bg-orange-400 text-white py-2 px-7 font-bold rounded-full shadow-sm shadow-white my-4 cursor-pointer'   type='submit'>
            Calculate
          </button>
        </form>

        <div className="result w-full min-h-20 border flex items-center justify-center">
            <p className='text-xl font-semibold'>
              {result}
            </p>
        </div>
      </div>

      <p className='text-white my-4'>
        &copy; Mandla Dlamini
      </p>

   </div>
  )
}

export default App
