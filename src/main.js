import './style.css'
document.addEventListener('DOMContentLoaded',()=>{
  const gridDiplay = document.querySelector('.grid');
  const scoreDisplay = document.getElementById('score');
  const resultDisplay = document.getElementById('result');

  const width=4;

  /**
   * @type {HTMLDivElement[]}
   */
  let squares =[]
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
        
      }
    }
  }
  moveRight()
  
})