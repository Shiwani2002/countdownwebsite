const end="April 7 2023 2:00 AM"
document.getElementById("endDate").innerText=end;
const c=document.querySelectorAll("input");
function clock()
{
    const a=new Date(end)
    const b=new Date()
  const diff=(b-a)/1000;
 if(diff<0)
 return ;
  c[0].value=Math.floor(diff/3600/24);
  c[1].value=Math.floor((diff/3600)%24);
  c[2].value=Math.floor(diff/60)%60;
  c[3].value=Math.floor(diff)%60;


}
setInterval(
    ()=>{
        clock()
    },1000
)
// a=jo date yha pdi h
// b=jo date phale html me thi 
// basically hme pta chlega ki end date me abhi kitna time baki h.
