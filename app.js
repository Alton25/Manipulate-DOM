document.addEventListener('DOMContentLoaded', function () {

    let btnSubmit = document.createElement('button');
    let btnText = document.createTextNode("My button");
    btnSubmit.appendChild(btnText);
    document.body.appendChild(btnSubmit);
    btnSubmit.addEventListener("click", function () {
        alert("You are getting better at this code thing!");
    });
    let nonHover = document.getElementById("nonHover");
    nonHover.addEventListener("mouseleave", function () {
         nonHover.style.backgroundColor= "green";
        
    })
    nonHover.addEventListener("mouseover", function () {
        let colors = ['Red', 'Blue', 'Purple', 'Brown', 'yellowgreen', 'pink', 'Teal', 'babyblue'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        nonHover.style.backgroundColor= random_color;
        nonHover.style.visibility = "visible";
    })
    let para = document.createElement('p');
    let paraText = document.createTextNode('This is just getting more intense by the day');
    para.appendChild(paraText);
    document.body.appendChild(para);
    
    para.addEventListener("click", function(){
        let colors = ['Red', 'Blue', 'Purple', 'Brown', 'yellowgreen', 'pink', 'Teal', 'babyblue'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        para.style.color = random_color;
    })
    

    
})
function emptyButton(){
    let spanny = document.createElement('span');
let spannyText = document.createTextNode('<span>Brionna McElhaney</span>');
spanny.appendChild(spannyText);
    document.getElementById("humpty").appendChild(spanny);
     
 }
 function friendButton(){
    
    
     
     let li;
     let text;
    var friends = ['Rod', 'Courtney', 'Whitey', 'Sierra', 'Shannon', 'Sherlissa', 'Daniel', 'Shay', 'Riana', 'Angela'];
    for (let s = 0; s < friends.length; s++) {
        console.log(friends[s] + ':');
        li = document.createElement('li');
        let text = document.createTextNode(friends[s]);
        li.appendChild(text);
        document.getElementById("besties").appendChild(li);
    }
    
 }
function secondButton() {
    let bing = document.getElementById("myAlert").value;
    alert(bing);
}

