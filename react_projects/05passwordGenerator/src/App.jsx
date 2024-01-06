import { useState, useCallback,useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [inclNumber,setInclNumber] = useState(false);
  const [inclCharacter,setInclCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(inclNumber) str += "0123456789"
    if(inclCharacter) str += "!@#$%^&*()_+-={}[]~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
      
    }

    setPassword(pass)

  }, [length,inclNumber,inclCharacter, setPassword])
  

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => {
    passwordGenerator()
  },[length,inclNumber,inclCharacter,passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
          <h1 className='text-white text-center my-3 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref = {passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex test-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange = {(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="cursor-pointer">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked = {inclNumber}
              id='numberInput'
              onChange = {() => {
                  setInclNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked = {inclCharacter}
              id='characterInput'
              onChange = {() => {
                  setInclCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
