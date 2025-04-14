import React, { useEffect,useState } from "react";
import Square from "./square";
import sound from '../assets/sound.mp3';
function Board(){
    const [state, setState] = useState(Array(9).fill(null));
    const [isXturn,setisXturn]=useState(true);
    const [winner, setWinner] = useState(null);
    const [Combo,setCombo]=useState([]);
    const playAgain=()=>{
        setState(Array(9).fill(null));
        setCombo([]);
        setisXturn(true);
        setWinner(null);

    }

    const isWinner=()=>{
        const winner=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i=0;i<winner.length;i++){
            const[a,b,c]=winner[i];
            if( state[a]!=null && state[a]===state[b]&&state[a]===state[c]){
                setCombo([a, b, c]); 

                return state[a];
            }
        }
        return false;
    }

    useEffect(() => {
        const winner = isWinner();
        if (winner) {
            playSound();
            setTimeout(() => {
                setWinner(winner);
            }, 3000); 
        }
    }, [state]);
    
    const playSound=()=>{
        const audio = new Audio(sound);
        audio.play();
    }
    const handleClick=(index)=>{
        if (state[index] !== null || winner) return; 
        const copyState=[...state];
        
        copyState[index]=!isXturn?'X':'O';
        setState(copyState);
        setisXturn(!isXturn);
        // console.log(index);
    }
    return(
        <div>
        {winner ? <h1>{winner} is the winner <button className="btn" onClick={playAgain}>play again</button></h1> :
    <>
   
    <div className="board-row">
    <Square key={0} className={`square ${Combo.includes(0) ? 'winner' : ''}`} onClick={()=>{handleClick(0)}} value={state[0]}/>
    <Square key={1} className={`square ${Combo.includes(1) ? 'winner' : ''}`} onClick={()=>{handleClick(1)}}value={state[1]}/>       
    <Square key={2} className={`square ${Combo.includes(2) ? 'winner' : ''}`} onClick={()=>{handleClick(2)}}value={state[2]}/>
    </div>
    <div className="board-row">
    <Square key={3} className={`square ${Combo.includes(3) ? 'winner' : ''}`} onClick={()=>{handleClick(3)}} value={state[3]}/>
    <Square key={4} className={`square ${Combo.includes(4) ? 'winner' : ''}`} onClick={()=>{handleClick(4)}}value={state[4]}/>
    <Square key={5} className={`square ${Combo.includes(5) ? 'winner' : ''}`} onClick={()=>{handleClick(5)}}value={state[5]}/>
    </div>
    <div className="board-row">
    <Square key={6} className={`square ${Combo.includes(6) ? 'winner' : ''}`} onClick={()=>{handleClick(6)}}value={state[6]}/>
    <Square key={7} className={`square ${Combo.includes(7) ? 'winner' : ''}`} onClick={()=>{handleClick(7)}}value={state[7]}/>
    <Square key={8} className={`square ${Combo.includes(8) ? 'winner' : ''}`} onClick={()=>{handleClick(8)}}value={state[8]}/>
    </div>
    </>}
    </div>)
}
export default Board;