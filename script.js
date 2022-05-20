let rock,paper,sessor;
rock=document.getElementById("btn1");
paper=document.getElementById("btn2");
sessor=document.getElementById("btn3");
//let userChoice; 1-->rock,1-->paper,3-->sessor

function randomNum()
{
    let num=Math.round((Math.random()*2+1));
    return num;
}
function loadImg(user,com)
{
    let link1=`/img/img${user}.jpg`;
    let link2=`/img/img${com}.jpg`;
    document.getElementsByTagName("img")[0].classList="animationin";
    document.getElementsByTagName("img")[1].classList="animationin";
    setTimeout(()=>{
        document.getElementsByTagName("img")[0].src=link1;
        document.getElementsByTagName("img")[1].src=link2;
    },500);
    setTimeout(()=>{
        document.getElementsByTagName("img")[0].classList="animationout";
        document.getElementsByTagName("img")[1].classList="animationout";
    },1000);
    
    
}
function resultAnimation(result)
{
    document.getElementById("result").classList="animationin";
    setTimeout(() => {
        document.getElementById("result").innerText=result;
    }, 500);
    setTimeout(()=>{
        document.getElementById("result").classList="animationout";
    },1000);
}
function result(user,comp)
{
    if(user==1&& comp==2)
    resultAnimation("Loss");
    else if (user==1 && comp==3)
    resultAnimation("Won");
    else if (user==2 && comp==1)
    resultAnimation("Won");
    else if (user==2 && comp==3)
    resultAnimation("Loss");
    else if(user==3 && comp==1)
    resultAnimation("Loss");
    else if (user==3 && comp==2)
    resultAnimation("Won");
    else
    resultAnimation("Draw");
}
console.log(randomNum());
rock.addEventListener("click",()=>{
    let userChoice=1;
    let comChoice=randomNum();
    loadImg(userChoice,comChoice);
    result(userChoice,comChoice);
});
paper.addEventListener("click",()=>{
    let userChoice=2;
    let comChoice=randomNum();
    loadImg(userChoice,comChoice);
    result(userChoice,comChoice);
});
sessor.addEventListener("click",()=>{
    let userChoice=3;
    let comChoice=randomNum();
    loadImg(userChoice,comChoice);
    result(userChoice,comChoice);
});