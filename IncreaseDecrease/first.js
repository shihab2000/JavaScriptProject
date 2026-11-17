const counterElement=document.getElementById('counter');
const plusBtn=document.getElementById('plusBtn');
const minusBtn=document.getElementById('minusBtn');

let counter=0;


const updateCounter=(value)=>{
    counter=counter+value
    counterElement.textContent=counter;
    if(counter>=10){
        plusBtn.disabled=true;
    }
    else{
        plusBtn.disabled=false;
    }

   
    counterElement.textContent=counter;
    if(counter<=0){
        minusBtn.disabled=true;
    }
    else{
        minusBtn.disabled=false;
    }

}

plusBtn.addEventListener('click',()=>{
    updateCounter(1);
})

minusBtn.addEventListener('click',()=>{
    updateCounter(-1);
})