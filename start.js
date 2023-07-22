const wordle =5;//单词长
const chance =6;//次数
let times =1;//第几次猜，对应行
let index =0;//对应格子
let titles = [];//填写的格
let got =false;//对没对

let random =Math.floor(Math.random()*(words.length-1));
let puzzle =words[random];
console.log(puzzle);
//生成题目

window.answerClick = (event) => {
    alert("answer is:"+puzzle)
}

window.restartClick = (event) => {
    random =Math.floor(Math.random()*(words.length-1));
    puzzle =words[random];
    console.log(puzzle);
    times=1;index=0;got=false;titles=[];

    for(let i=1;i<chance;i++){
        for(let j=0;j<wordle;j++){
            document.getElementById(i.toString()+j.toString()).style.backgroundColor="#fff";
            document.getElementById(i.toString()+j.toString()).style.color="#000";
            document.getElementById(i.toString()+j.toString()).innerText="";
        }
    }
    
    for(letter of "QWERTYUIOPASDFGHJKLZXCVBNM"){
        document.getElementById(letter).style.backgroundColor="#fff";
        document.getElementById(letter).style.color="#000";
    }
}