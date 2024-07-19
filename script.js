let count=0;
document.addEventListener("DOMContentLoaded",()=>
{
    let inputs=document.querySelectorAll(".space");
    inputs.forEach(input=>{
        input.addEventListener("input",checkWinner);
     })
    function checkWinner()
    {
        let a=document.getElementById("inputone").value;
        let b=document.getElementById("inputtwo").value;
        let c=document.getElementById("inputthree").value;
        let d=document.getElementById("inputfour").value;
        let e=document.getElementById("inputfive").value;
        let f=document.getElementById("inputsix").value;
        let g=document.getElementById("inputseven").value;
        let h=document.getElementById("inputeight").value;
        let i=document.getElementById("inputnine").value;
        let l=[a,b,c,d,e,f,g,h,i]
    if(l[0]==l[1] && l[1]==l[2]  && l[0]!="")
        {
            winner(l[0])
        }
        else if(l[3]==l[4] && l[4]==l[5] && l[3]!="")
        {
             winner(l[3])
        }
        else if(l[6]==l[7] && l[7]==l[8]  && l[6]!="")
        {
             winner(l[6])
        }
        else if(l[0]==l[3] && l[3]==l[6] && l[0]!="")
        {
             winner(l[0])
        }
        else if(l[1]==l[4] && l[4]==l[7]  && l[1]!="")
        {
             winner(l[1])
        }
        else if(l[2]==l[5] && l[5]==l[8]  && l[2]!="")
        {
             winner(l[2])
        }
        else if(l[0]==l[4] && l[4]==l[8]  && l[0]!="")
        {
             winner(l[0])
        }
        else if(l[2]==l[4] && l[4]==l[6]  && l[2]!="")
        {
             winner(l[2])
        }
    }
    document.getElementById("btn").addEventListener("click",function()
{
    // let s=document.getElementsByClassName("space")
    // Array.from(s).forEach(x=>{
    //     x.innerText=""
         let spaces = document.getElementsByClassName("space");
        for (let space of spaces) {
            space.querySelector("input").value = ""; // Clear input field
        }
        
    }
        )
});

function  winner(a)
    {
         document.getElementById("w").innerText=`Winner ${a}` 
    }
