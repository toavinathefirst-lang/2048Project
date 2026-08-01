import './style.css'
document.addEventListener('DOMContentLoaded',()=>{
  const gridDiplay = document.querySelector('.grid');
  const scoreDisplay = document.getElementById('score');
  const resultDisplay = document.getElementById('result');

  const width=4;

  /**
   * @type {HTMLDivElement[]}
   */
const squares =[]

  let score = 0;
  //create the playing board
  function createBoard (){
    for (let i  = 0; i  < width*width; i++){
      const square = document.createElement("div");
      square.innerHTML=0;
      gridDiplay.appendChild(square);
      squares.push(square);
      
      
    } 
  }
  createBoard();
  generate()
  generate()

  //generate a new number
  function generate(){
    const randomNumber = Math.floor(Math.random() * squares.length);
    if(squares[randomNumber].innerHTML ==0){
      squares[randomNumber].innerHTML =2
      //check for gameOver()
    }else {
      generate()
    }
  }

  function moveRight(){
    for(let i=0;i<16;i++){
      if(i%4 === 0){
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i+1].innerHTML;
        let totalThree = squares[i+2].innerHTML;
        let totalfour = squares[i+3].innerHTML;

        let row = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalfour)]
        console.log(row);

        let filteredRow = row.filter(num=>num);
        let missing = 4 - filteredRow.length
        let zeros = Array(missing).fill(0);
        let newRow=zeros.concat(filteredRow)
        
        squares[i].innerHTML = newRow[0];
        squares[i+1].innerHTML = newRow[1];
        squares[i+2].innerHTML = newRow[2];
        squares[i+3].innerHTML = newRow[3];
      }
    }
  }
  function checkForWin(){

  }
   function combineRow(){
    for(let i=0;i<15;i++){
      if(squares[i].innerHTML === squares[i+1].innerHTML){
        let combinedTotal = parseInt(squares[i].innerHTML)*2;
        squares[i].innerHTML =combinedTotal;
        squares[i+1].innerHTML =0;
        score += combinedTotal;
        scoreDisplay.innerHTML=score
        
      }
    }
    checkForWin()
  }
  function keyRight(){
    moveRight()
    combineRow()
    moveRight()
    generate()
  }
  //assign functions to keys
  /**
   * 
   * @param {KeyboardEvent} e 
   */
  function control(e){
    if(e.key === "ArrowRight"){
       keyRight()
    }else if(e.key === 'Arrowleft'){
      //keyLeft()
    }
  }

  document.addEventListener('keydown',control)
  function moveLeft(){

  }
  // function keyLeft(){
  //   moveLeft()
  //   combineRow()
  //   moveLeft()
  //   generate()
  // }
  
 

})