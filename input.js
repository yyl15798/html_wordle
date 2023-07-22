window.letterClick = (event) => {
    if(got||times>chance||index==wordle) return;
    //是否退出
    const letter=event.target.innerText;
    console.log(letter)
    titles[times-1]=titles[times-1]||[];//初始化
    titles[times-1][index]=letter;
    document.getElementById(times.toString()+index.toString()).innerText=letter;
    //读取字母
    index++;
}

window.backClick = (event) => {
    if(got||times>chance||index==0) return;
    //是否退出
    index--;
    document.getElementById(times.toString()+index.toString()).innerText="";
}

document.onkeydown=function(event){//字母
  if(event.keyCode>=65&&event.keyCode<=90){
    const letter=event.key.toUpperCase();
    window.letterClick({
      target:{
        innerText:letter
      }
    });
  }
  else if(event.keyCode==13){//回车
    window.guessClick();
  }
  else if(event.keyCode==8){//退格
    window.backClick();
  }
}
