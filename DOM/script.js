document.addEventListener('DOMContentLoaded', function () {
    //1. Make button and alert with any nice msg when clicked
    let btn = document.createElement('button');
    document.body.appendChild(btn);
    let btnText = document.createTextNode('Click Me');
    document.body.appendChild(btnText);
    btn.appendChild(btnText);

    btn.addEventListener('click', function () {
        alert("This is a nice message!");
    })

    //2. html button and text box - when clicked, displays alert wit text in text box
    let formSubmit = document.getElementById("form")

    formSubmit.onsubmit = function () {
        let msg = document.getElementById("message").value;
        alert(msg);
    };
    //in jquery version
    // $("form").submit(function() {
    //     let msg = $("#message").val();
    //     alert(msg);
    // });

    //3.Without using CSS:hover, make div change to a diff background color when your mouse hovers over it. Should return to original color when mouse exits
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.style.backgroundColor = 'transparent';
    div.style.width = '100px';
    div.style.height = '100px';

    //3. change div to blue bg when hovered over
    div.onmouseover = function () {
        div.style.backgroundColor = 'blue';
    };

    //3. remove blue bg color on mouseout
    div.onmouseout = function () {
        div.style.backgroundColor = 'transparent';
    }

    //4. put some text in paragraph; make it where when you click paragraph, color of text switches to red. once working, rewrite code to switch to a random color each click)
    let paragraph = document.createElement('p');
    document.body.appendChild(paragraph);
    let text = document.createTextNode('I can do this! I can do this! I can do this! I can do this! I can do this! I can do this! I can do this!');
    document.body.appendChild(text);
    paragraph.appendChild(text);

    paragraph.onclick = function () {
        //paragraph.style.color = 'red';
        paragraph.style.color = getColor();
    };

    //5. add a button and an empty div - when button clicked, add span that contains your name to empty div
    let btn2 = document.createElement('button');
    document.body.appendChild(btn2);
    let btn2Text = document.createTextNode('Add name span to empty div');
    btn2.appendChild(btn2Text);
    //div.appendChild(btn2);
    let div2 = document.createElement('div');
    document.body.appendChild(div2);

    btn2.onclick = function () {
        let name = document.createElement("Lexi");
        let lexi = document.createTextNode("Lexi ")
        name.appendChild(lexi);
        document.body.appendChild(name);
        div2.appendChild(name);
        div2.style.height = '';
        div2.style.width = '';
    };

    //6. Create a button and a ul in HTML; JS - creat an array containing names of 10 friends; when button clicked, add each friends name as an li on to the ul
    let btn3 = document.createElement('button');
    document.body.appendChild(btn3);
    let btn3Text = document.createTextNode('List Friends');
    btn3.appendChild(btn3Text);
    //div.appendChild(btn3);
    let div3 = document.createElement('div');
    document.body.appendChild(div3);




    btn3.onclick = function () {
        let ul = document.createElement('ul');
        document.body.appendChild(ul);
        // let li = document.createElement("li");
        //console.log(liFriends());
        //let liText = document.createTextNode(friends[i]);
        //let lilText = liFriends();
        //let liText = document.createTextNode('Abby','Betty','Carrie','Drake','Edward','Frank','Gary','Hunter','Ian','Jane');
        //ul.appendChild(li);
        //li.appendChild(liText);
        //div3.appendChild(li); 
        //let liText = document.createTextNode(friends[i]);
        let friends = ['Abby', 'Betty', 'Carrie', 'Drake', 'Edward', 'Frank', 'Gary', 'Hunter', 'Ian', 'Jane']
        //function liFriends(i) {
            for (i = 0; i < friends.length; i++) {
            let li = document.createElement("li");
            li.textContent = friends[i];
            ul.appendChild(li);
            }
        //}
        //document.body.appendChild(ul);
    }

    // let friends = ['Abby','Betty','Carrie','Drake','Edward','Frank','Gary','Hunter','Ian','Jane']
    // function liFriends(i) {
    // for(i = 0; i < friends.length; i++);
    // let li = document.createElement("li");
    // li.textContent = friends[i];
    // ul.appendChild(li);
    // }
    //li.appendChild(liText);
});

//4. random color background function
function getColor() {
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return randomColor;
};

// let friends = ['Abby','Betty','Carrie','Drake','Edward','Frank','Gary','Hunter','Ian','Jane']
// function liFriends() {
//     for(i = 0; i < friends.length; i++);
//     return friends[i];
// }