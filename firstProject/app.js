const timeBefore = performance.now() ;
const createDiv = document.createElement('div');
createDiv.textContent = "Here i will create the navigation menu" ;
document.body.appendChild(createDiv);
createDiv.style.cssText = "text-align:center; font-size:30px; color:blue; padding-top:20px";
const allSection = document.querySelectorAll("section");
console.log(allSection)
const createMenu = document.createElement('ul') ;

// build css using js
createMenu.style.cssText = 'background-color:cornflowerblue; width:150px; text-align:center; font-size:20px; float:right; margin:20px; list-style-type: none;' ;
// add id to each item in list
allSection.forEach((item, i) => {
    item.id = i + 1;
  });
// create navigation at the end of page
for(let i = 0 ; i < allSection.length ; i++){
    const createList = document.createElement('li') ;
    createList.classList.add("active") ;
    const createAnchor = document.createElement('a') ;
    // style for items in list
    createList.style.cssText = "margin:10px; padding:2px;cursor:pointer";
    createAnchor.style.cssText = "color:white;";
    // event to change background when mouse on specific item
    createAnchor.addEventListener('mouseover', 
    e => e.target.style.cssText = "background-color:mediumorchid; color:black");
    // event to back the item in the same before 
    createAnchor.addEventListener('mouseout', 
    e => e.target.style.cssText = "background-color:cornflowerblue; color:white;");
    const link = document.createTextNode(`Section ${i+1}`);
    createAnchor.appendChild(link) ;
    createAnchor.setAttribute('data-link-type',i+1);
    // event to go to specific section
    createAnchor.addEventListener("click",(e)=>{
        e.preventDefault();
        let specificElement = document.getElementById(createAnchor.getAttribute("data-link-type"));
        specificElement.scrollIntoView({behaviour:"smooth",block:"start"});
        console.log(specificElement);
    }) ;
    createList.appendChild(createAnchor) ;
    createMenu.appendChild(createList) ;
    

}

document.body.appendChild(createMenu);
const timeAfter = performance.now() ;
// console the performance of code 
console.log(`this code takes ${timeAfter - timeBefore} millisecond`) ;