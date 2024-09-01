import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [addNums, setAddNums] = useState(false)
  const [addSplChars, setAddSplChars] = useState(false)
  const [password, setPassword] = useState("")
  const [color, setColor] = useState('blue')

  //useRef hook 
  const passwordRef = useRef(null)

  const copyPassword = useCallback( () => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
    
  }, [password])



  const passwordGenerator = useCallback(() => {  //memoization...optimization using cache
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(addNums) str += "0123456789"
    if(addSplChars) str += "!@#$%^&*()_+-=[]{}|;':,./<>?"

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
      
    }

    setPassword(pass)
  }, [length, addNums, addSplChars, setPassword])

  useEffect( () => {passwordGenerator()}, [length, addNums, addSplChars, passwordGenerator])
  useEffect( () => {setColor('blue')}, [password]);



  return(
    <>
      <div className='w-full max-w-3xl mx-auto shadow-md rounded-md px-4 my-12 py-3 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input 
          type="text"
          placeholder='password'
          value={password}
          readOnly
          className='outline-none w-full py-3 px-1 mb-3 rounded-md'
          ref={passwordRef}
          />
          <button
          onClick={() => {copyPassword();setColor('green');}} 
          className='outline-none h-12 
           text-white px-3 shrink-0 rounded-md'
           style={{backgroundColor: color}}
          >
          Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" value={length} min={6} max={50} className='cursor-pointer' 
             onChange={ (e) => {setLength(e.target.value)} }/>
            <label htmlFor="range">Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={addNums} className='cursor-pointer' 
             onChange={ () => {setAddNums( (prev) => !prev)} }/>
            <label htmlFor="checkbox">Add Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={addSplChars} className='cursor-pointer' 
             onChange={ () => {setAddSplChars( (prev) => !prev)} }/>
            <label htmlFor="checkbox">Add Special Characters</label>
          </div>

        </div>
      </div> 
    </>
  )
}

export default App


//Problem faced : How to revert the copy button back to blue, when a new password is generated after it changes to green after being clicked to copy.