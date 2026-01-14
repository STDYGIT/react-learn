import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";
function App() {
  // lenght
  // charachter
  const [len, setLen] = useState(8);
  const [number_Allowed, set_Number_Allowed] = useState(false);
  const [char_Allowed, set_Char_Allowed] = useState(false);
  const [pass, setPass] = useState("");


  // ref hook for copy 

  const passref =  useRef(null)


  // copy_pass_to_clipboard

  const copy_pass_to_clipboard = useCallback(() => {
    passref.current?.select() // to highlight the text selected to copy
    passref.current?.setSelectionRange(0,4) // to highlight the text selected to copy from range 0 to 4
    window.navigator.clipboard.writeText(pass) // copy to isse ho jaega but reference isliye use hua to highlight the text or to chakt he current status of the text/object
  },[pass])

  // password generator useCallback to memoize the whole program
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number_Allowed) {
      str += "0123456789";
      console.log(`number status ${number_Allowed}`);
    }

    if (char_Allowed) {
      str += "!@#$%^&*()?";
      console.log(`char status ${char_Allowed}`);
    }

    for (let i = 1; i <= len; i++) {
      let char = Math.random() * str.length + 1;
      pass += str.charAt(char);
    }

    setPass(pass);

    console.log(pass);

  }, [len, number_Allowed, char_Allowed, setPass]); // setPass is not necessary but used for the memoization inse kuch bhi change ho to u can update accordingly

  useEffect(() => {
    passwordGenerator();
  }, [len, number_Allowed, char_Allowed, passwordGenerator]); // to run it when the page is reloading

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-2xl px-4 py-1 border-2 border-black-100 m-8 text-orange-500 bg-gray-950">
        <h2 className="py-5 flex justify-center">Password Generator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-3 px-5 bg-amber-50"
            placeholder="password"
            ref={passref}
            readOnly
          />
          <button 
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copy_pass_to_clipboard}
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              min={6}
              max={100}
              value={len}
              type="range"
              onChange={(e) => {
                setLen(e.target.value);
              }}
            />
            <label>Length({len})</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              defaultChecked={char_Allowed}
              onChange={() => {
                set_Char_Allowed((prev) => !prev);
              }}
              id="Char"
            />
            <label htmlFor="Char">Character</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              value={len}
              type="checkbox"
              defaultChecked={number_Allowed}
              onChange={() => {
                set_Number_Allowed((prev) => !prev);
              }}
              id="Number"
            />
            <label htmlFor="Number">Number</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
