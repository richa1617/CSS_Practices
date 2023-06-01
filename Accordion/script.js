let icon =document.getElementsByTagName('i')
let content=document.getElementsByClassName("content")
console.log(content)

for(let i=0;i<icon.length;i++){
    icon[i].addEventListener(("click"),(e)=>{
        
        content[i].classList.toggle ("content-js")
           })
}