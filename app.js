let labels=document.querySelectorAll(".contain label");


labels.forEach(label=>{label.innerHTML=label.innerText
    .split("")
    .map((item,index)=>`<span style="transition-delay: ${index*50}ms;"> ${item}</span> `
    ).join("");

})