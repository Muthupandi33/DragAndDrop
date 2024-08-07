let lists=document.getElementsByClassName("list");
let left=document.getElementById("left");
let right=document.getElementById("right");
// console.log(lists)
[...lists].map(ele=>{
ele.addEventListener("dragstart",e=>{
// console.log(e.target)
let selectedEle = e.target;
right.addEventListener("dragover",event=>{
  event.preventDefault();
});
right.addEventListener("drop",e=>{
    // console.log(e.target)
    right.appendChild(selectedEle);
    selectedEle = null;
})
left.addEventListener("dragover",event=>{
  event.preventDefault();
});
left.addEventListener("drop",e=>{
    // console.log(e.target)
    left.appendChild(selectedEle);
    selectedEle=null;
})
})
})
