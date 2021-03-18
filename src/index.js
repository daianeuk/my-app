import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function exeCliq(){
  alert ('ClickedSquare');
}

function Square(){
  return(
    <button className='square' onClick={exeCliq}></button>
  )
}
function Board(){
  return (<div>
    <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div>
      Game Info
    </div>
  </div>)

}
function Game(){
  return (
  <div className='game'>
    <div className='game-board'>
      <Board/>
    </div>
    
    <div className='game-info'>
    </div>
  </div>)
}

ReactDOM.render(
  <Game/>
  ,
  document.getElementById('root')
);


