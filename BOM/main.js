let tit = document.querySelector('.title');
let turn = 'x';
let squ = [];
function end(num1 ,num2, num3)
{
    tit.innerHTML = `${squ[num1]} winner`;
    document.getElementById('item'+ num1).style.background = '#000';
    document.getElementById('item'+ num2).style.background = '#000';
    document.getElementById('item'+ num3).style.background = '#000';

    setInterval(function(){tit.innerHTML+='.'},1000);
    setTimeout(function(){location.reload()},3000);
    

}
function winner()
{
    for(let i = 1 ; i<10 ; i++)
    {
        squ[i] =  document.getElementById("item" +i).innerHTML;
    }
    if(squ[1] == squ[2] && squ[2] == squ[3] &&  squ[1]!='')
    {
        end(1,2,3);

    }
    else if(squ[4] == squ[5] && squ[5] == squ[6] &&  squ[4]!='')
    {
        end(4,5,6);
    }
    else if(squ[7] == squ[8] && squ[8] == squ[9] &&  squ[7]!='')
    {
        end(7,8,9);
    }
    else if(squ[1] == squ[4] && squ[4] == squ[7] &&  squ[1]!='')
    {
        end(1,4,7);
    }
    else if(squ[2] == squ[5] && squ[5] == squ[8] &&  squ[2]!='')
    {
        end(2,5,8);
    }
    else if(squ[3] == squ[6] && squ[6] == squ[9] &&  squ[3]!='')
    {
        end(3,6,9);
    }
    else if(squ[1] == squ[5] && squ[5] == squ[9] &&  squ[1]!='')
    {
        end(1,5,9);
    }
    else if(squ[3] == squ[5] && squ[5] == squ[7] &&  squ[3]!='')
    {
        end(3,5,7);
    }
}

function game(id){
    let ele = document.getElementById(id)
    if(turn === 'x' &&  ele.innerHTML == '')
    {
        ele.innerHTML = 'X';
        turn = 'o';
        tit.innerHTML = 'O';
    } 

    else if(turn === 'o' && ele.innerHTML == '')
    {
        ele.innerHTML = 'O';
        turn = 'x';
        tit.innerHTML = 'X';
    }
    winner()

}