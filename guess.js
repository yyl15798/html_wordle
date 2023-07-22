window.guessClick = (event) => {
    if(got||times>chance||index!=wordle) return;
    //是否退出
  
    const word=titles[times-1].join("");
    console.log(word);

    if(words.indexOf(word.toLowerCase()) == -1){
        alert("not a word!");
        return;
    }

    if(puzzle==word.toLowerCase()){
        alert("you got it!");
        got=true;
    }
    
    let green=puzzle;
    titles[times-1].forEach((letter,i) => {
        if(puzzle[i]==letter.toLowerCase()){
            document.getElementById(times.toString()+i.toString()).style.backgroundColor="#6aaa64";
            document.getElementById(times.toString()+i.toString()).style.color="#fff";
            document.getElementById(letter).style.backgroundColor="#6aaa64";
            document.getElementById(letter).style.color="#fff";
            green=green.substring(0,i)+" "+green.substring(i+1);
        }
    });
    
    let yellow=green;
    titles[times-1].forEach((letter,i) => {
        if(green[i]!=" "){
            const j=yellow.indexOf(letter.toLowerCase());
            if(j==-1){
                document.getElementById(times.toString()+i.toString()).style.backgroundColor="#787c7e";
                document.getElementById(times.toString()+i.toString()).style.color="#fff";
                document.getElementById(letter).style.backgroundColor="#787c7e";
                document.getElementById(letter).style.color="#fff";
            }
            else{
                document.getElementById(times.toString()+i.toString()).style.backgroundColor="#c9b458";
                document.getElementById(times.toString()+i.toString()).style.color="#fff";
                document.getElementById(letter).style.backgroundColor="#c9b458";
                document.getElementById(letter).style.color="#fff";
            }
        }
       
    });

    if(times==chance){
        alert("the answer is"+puzzle);
        return;
    }

    times++;
    index=0;
}