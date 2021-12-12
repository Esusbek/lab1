import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [calc, setCalc] = useState({ sign: "", num: 0, res: 0 });
  const GetSubString = (s) => {
    console.log("start of function S = " +s);
    let i = 0;
    let operation = "";
    while (s[i] !== ")" && i<=s.length) {
      let number1 = "";
      let number2 = "";
      if(s[i]=="("){s=GetSubString(s.slice(1));}
      console.log("start of loop S = "+s);
      while (i<=s.length && s[i]>="0" && s[i]<="9" ) {
        number1 += s[i];
        i++;
      }
      if(i>=s.length)
      {
        console.log("Exiting function");
        return s;
      }
      if(i<=s.length && s[i]===")")
      {
        return s;
      }
      if(i<=s.length && s[i]!==")")
      {
        operation=s[i];
        i++;
      }
      while (i<=s.length && s[i]>="0" && s[i]<="9") {
        number2 += s[i];
        i++;
      }
      let result = operation==="+"?Number(number1)+Number(number2):operation==="-"?Number(number1)-Number(number2):operation==="*"?Number(number1)*Number(number2):operation==="/"?Number(number1)/Number(number2):0;
      console.log(number1+"|"+operation+"|"+number2+"|"+"="+result);
      if(s[i]===")")
      {
      s = result+s.slice(i+1);
      }
      else{
        s = result;
      }
      console.log("Post-loop S = "+s);
      i=0;
    }
    return s;
  }
  const Calculate = (e) => {
    e.preventDefault();
    const value = document.getElementById("inputs").value;
    let i=0;
    let s ="("+value+")";
    console.log("Entry value = "+s);
    s=GetSubString(s);
    document.getElementById("result").value=s;
  }
  return (
    <div className="App">
      <input id="inputs" type="text" ></input>
      <button onClick={Calculate}>Calculate result</button>
      <label>Result: </label>
      <input id="result" type="text"></input>
    </div>
  );
}

export default App;
