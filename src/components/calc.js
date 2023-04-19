import React from "react";
import './calc.css'
import { useState } from "react";
const Calc=()=>{
    const[calc,setCalc]=useState("")
    const[theme,setTheme]=useState(1)

    const changer=()=>{
        if (theme===1){
            setTheme(2)
            document.getElementById("bl").style.left='39px'
            document.querySelector("body").style.backgroundColor="hsl(0, 0%, 90%)"
            document.getElementById("1").style.color="black"
            document.getElementById("2").style.color="black"
            document.getElementById("3").style.color="black"
            document.querySelector("label").style.color="black"
            document.querySelector("h").style.color="black"
            document.getElementById("switch").style.backgroundColor="hsl(0, 5%, 81%)"
            document.getElementById("del").style.backgroundColor="hsl(224, 28%, 35%)"
            document.getElementById("re").style.backgroundColor="hsl(185, 42%, 37%)"
            document.getElementById("eq").style.backgroundColor="hsl(25, 98%, 40%)"
            document.getElementById("del").style.backgroundColor="hsl(185, 42%, 37%)"
            document.getElementById("bl").style.backgroundColor="hsl(25, 98%, 40%)"
            document.getElementById("input").style.backgroundColor="white"
            document.getElementById("input").style.color="black"
            document.getElementById("grid").style.backgroundColor="hsl(0, 5%, 81%) "

        }else if(theme===2){
            setTheme(3)
            document.getElementById("bl").style.left='73px'
            document.querySelector("body").style.backgroundColor=" hsl(268, 75%, 9%)"
            document.querySelector("label").style.color="hsl(52, 100%, 62%)"
            document.getElementById("1").style.color="hsl(52, 100%, 62%)"
            document.getElementById("2").style.color="hsl(52, 100%, 62%)"
            document.getElementById("3").style.color="hsl(52, 100%, 62%)"
            document.querySelector("h").style.color="hsl(52, 100%, 62%)"
            document.getElementById("switch").style.backgroundColor=" hsl(268, 71%, 12%)"
            document.getElementById("del").style.backgroundColor="hsl(224, 28%, 35%)"
            document.getElementById("re").style.backgroundColor="hsl(281, 89%, 26%)"
            document.getElementById("eq").style.backgroundColor=" hsl(176, 100%, 44%)"
            document.getElementById("del").style.backgroundColor="hsl(281, 89%, 26%)"
            document.getElementById("bl").style.backgroundColor=" hsl(176, 100%, 44%)"
            document.getElementById("input").style.backgroundColor=" hsl(268, 71%, 12%)"
            document.getElementById("input").style.color="hsl(52, 100%, 62%)"
            document.getElementById("grid").style.backgroundColor=" hsl(268, 71%, 12%)"
            
        }else{
            setTheme(1)
            document.getElementById("bl").style.left='5px'
            document.getElementById("re").style.backgroundColor="hsl(224, 28%, 35%)"
            document.getElementById("eq").style.backgroundColor="hsl(25, 98%, 40%)"
            document.getElementById("re").style.backgroundColor=" hsl(224, 28%, 35%)" 
            document.getElementById("eq").style.backgroundColor=" hsl(6, 63%, 50%)"
            document.querySelector("body").style.backgroundColor="hsl(222, 26%, 31%)"
            document.querySelector("label").style.color="white"
            document.getElementById("1").style.color="white"
            document.getElementById("2").style.color="white"
            document.getElementById("3").style.color="white"
            document.querySelector("h").style.color="white"
            document.getElementById("switch").style.backgroundColor="hsl(224, 36%, 15%)"
            document.getElementById("del").style.backgroundColor="hsl(224, 28%, 35%)"
            document.getElementById("del").style.color="white"
            document.getElementById("bl").style.backgroundColor="hsl(6, 63%, 50%)"
            document.getElementById("input").style.backgroundColor="hsl(224, 36%, 15%) "
            document.getElementById("input").style.borderColor="hsl(28, 16%, 65%)"
            document.getElementById("input").style.color="white"
            document.getElementById("grid").style.backgroundColor="hsl(224, 36%, 15%) "
        }
    }

    const ajout=(e)=>{
        setCalc(calc.concat(e.target.value));

    }

    const resultat=()=>{
        setCalc(eval(calc))
    
     }

    const del=()=>{
        setCalc(calc.slice(0, calc.length-1))
    }
    const clear=()=>{
        setCalc("")
    }
    return (
        <div className="All">

            <div className="switch" id="switch"><label >THEME</label><label1 style={{left: `8px`}} id="1">1</label1><label1 id="2" style={{left: `45px`}}>2</label1><label1 id="3" style={{left: `82px`}}>3</label1><div className=" circle1"  id="bl" onClick={changer}></div></div>
            <h>calc</h>
            
            <input id="input" type="text" value={calc}/>
           <div className="grid" id="grid">
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}   value="7" onClick={ajout}>7</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="8" onClick={ajout}>8</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="9" onClick={ajout}>9</button>
                <button  id="del" style={{ backgroundColor:`hsl(225, 21%, 49%)`}} onClick={del}>DEL</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="4" onClick={ajout}>4</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="5" onClick={ajout}>5</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="6" onClick={ajout}>6</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="+" onClick={ajout}>+</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="3" onClick={ajout}>3</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="2" onClick={ajout}>2</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="1" onClick={ajout}>1</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="-" onClick={ajout}>-</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="." onClick={ajout} >.</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="0" onClick={ajout}>0</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="/" onClick={ajout}>/</button>
                <button className={theme===1 ? "theme1" : theme===2 ? "theme2" : "theme3"}  value="*" onClick={ajout}> x</button>
                <button  className="box" id="re" style={{ backgroundColor:`hsl(225, 21%, 49%)`,color: `white`}} onClick={clear}>RESET</button>
                <button  className="box" id="eq" style={{backgroundColor: ` hsl(6, 63%, 50%)` , color: `white`}} onClick={resultat}> = </button>

            </div>
            
        </div>
    );
}



export default Calc