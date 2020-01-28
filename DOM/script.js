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
        paragraph.style.color = 'red';
    }



});

//random color background
// let color = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown']
// function getColor() {
//     let randomColor = [Math.floor(Math.random() * color.length)];
//     return randomColor;
// };