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
    div.style.width = '300px';
    div.style.height = '300px';

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

    btn2.onclick = function () {
        let name = document.createElement("Lexi");
        let lexi = document.createTextNode("Lexi ")
        name.appendChild(lexi);
        document.body.appendChild(name);
    };

    //6. Create a button and a ul in HTML; JS - creat an array containing names of 10 friends; when button clicked, add each friends name as an li on to the ul
    


});

//4. random color background function
function getColor() {
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return randomColor;
};