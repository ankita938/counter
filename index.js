function inc(){
    let paraEle = document.getElementById("para")
    console.log(paraEle)
    console.log(paraEle.textContent);
    // let text =(paraG.textContent);
    // text=parseInt(paraG.textContent)+1
    // text=parseInt (paraG.textContent+1)
    let paraText= paraEle.textContent
    paraEle.textContent=parseInt(paraText)+1
    paraEle.style.color="green"

}                                                                     

function dec(){
    let paraEle = document.getElementById("para")
    let paraText =paraEle.textContent
    paraEle.textContent=parseInt(paraText)-1;
    paraEle.style.color="red";
}

function res(){
    let paraEle = document.getElementById("para")
    let paraText=paraEle.textContent
    paraEle.textContent="0"
    paraEle.style.color="black"
    
}
