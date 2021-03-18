import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Board(){
  return (<div>
    <div className='board-row'>
      <button className='square'></button>
      <button className='square'></button>
      <button className='square'></button>
    </div>
    <div className='board-row'>
      <button className='square'></button>
      <button className='square'></button>
      <button className='square'></button>
    </div>
    <div className='board-row'>
      <button className='square'></button>
      <button className='square'></button>
      <button className='square'></button>
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


