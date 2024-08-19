const btns = document.querySelectorAll('.box');
const reset = document.querySelector('#reset');
const winner = document.querySelector('#winner');

//reset button 
reset.addEventListener('click', ()=>{
    btns.forEach(e=>{
        e.innerHTML="&nbsp;&nbsp;"
        if(e.disabled==true){
            e.disabled=false;
        }
        if(turnO==false){
            turnO=true;
        }
    })
})


let turnO =true;
count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
btns.forEach(e => {
    
    e.addEventListener('click',()=>{
        console.log(e);
        if(turnO){
            e.innerHTML="O";
            turnO=false;
        }else{
            e.innerHTML="X";
            turnO=true;
        }
        e.disabled=true;
        count++;
        isWinner=false;
        winPatterns.forEach(ptn=>{
            
            pos1 =btns[ptn[0]].innerText;
            pos2 =btns[ptn[1]].innerText;
            pos3 =btns[ptn[2]].innerText;

            
            if(pos1!="" || pos2!="" || pos3!=""){
                if(pos1==pos2 && pos2==pos3 && pos1==pos3){
                    winner.innerHTML=`Winner is ${pos1}`
                    isWinner=true;
                }
            }
        })
        
        if(count==9 && !isWinner){
            winner.innerHTML=`Match Draw !`

        }


    })

});
