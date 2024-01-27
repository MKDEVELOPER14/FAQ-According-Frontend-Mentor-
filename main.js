document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("complete");
        initApp();
    }
})

function initApp(){
    const mainDiv = document.querySelectorAll(".Div");
    const downArrow = document.querySelectorAll(".questionBar");
    const img = document.querySelectorAll(".plusImg");
    for(let i =0;i<downArrow.length;i++){
        downArrow[i].addEventListener("click",()=>{
            const src = img[i].getAttribute("src");
            const src1 = "./assets/images/icon-minus.svg";
            if(src == "./assets/images/icon-plus.svg"){
                img[i].src=src1;              
                const createDivInsideDiv = document.createElement("div")
                createDivInsideDiv.setAttribute("class","answer")
                const paraTag = document.createElement("p");
                mainDiv[i].append(createDivInsideDiv);
                createDivInsideDiv.append(paraTag);
                const text = answersText(i);
                paraTag.textContent=text;
                console.log(createDivInsideDiv);
                console.log(i);

                

            }
            else{
                img[i].src="./assets/images/icon-plus.svg";
                if(i==0){
                    const answer = document.getElementsByClassName("answer");
                    mainDiv[i].removeChild(answer[i]);   
                    console.log("removed successfully");  
                }           
                else if(i==1){
                    const answer = document.getElementsByClassName("answer");
                    mainDiv[i].removeChild(answer[i-1]);   
                    console.log("removed successfully");  
                }           
                else if(i==2){
                    const answer = document.getElementsByClassName("answer");
                    mainDiv[i].removeChild(answer[i-2]);   
                    console.log("removed successfully");  
                }           
                else{
                    const answer = document.getElementsByClassName("answer");
                    mainDiv[i].removeChild(answer[0]);   
                    console.log("removed successfully");  
                }           
                
            }
        })

    }
}

function answersText(n){
    const textS = ["Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.","Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.","Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!","The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members"]

    return textS[n];
}
