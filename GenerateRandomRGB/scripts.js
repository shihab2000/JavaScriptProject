const generateRGBColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    
    return `rgb(${r},${g},${b})`
}

const updateColor=()=>{
    const color=generateRGBColor();
    const colorBox=document.getElementById('colorBox');
    const colorCode=document.getElementById('colorCode');

    colorBox.style.backgroundColor=color;
    colorCode.innerHTML=color;
}
const copyColorCode=()=>{
    const colorCode=document.getElementById('colorCode');
    const inputtag=document.createElement('input');
    document.body.appendChild(inputtag);
    inputtag.value=colorCode.innerText;

    inputtag.select();
    document.execCommand('copy');
    document.body.removeChild(inputtag);

    alert("Copy Done");
}

document.getElementById('CopyButton').addEventListener('click',()=>{
    copyColorCode();
})


function generateNewColorBtn(){
    updateColor();
}
