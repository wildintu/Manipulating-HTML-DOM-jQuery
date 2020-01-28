$(document).ready(function() {
    //1. Make button and alert wit any nice msg when clicked
    let button = $('<button class = "btn"></button>').text('Click Me');
    $('body').append(button);
    $('.btn').text('Click Me');
    
    $('.btn').click(function(event) {
        //console.log('btn works');
        alert("This is a nice message!");
    });

    //2. html button and text box - when clicked, displays alert with text in text box
    let form = $('<form class ="formSubmit"></form>')
    $('body').append(form);

    $('form').submit(function(event) {
        let msg = $('#message').val();
        alert(msg);
    });

    //3. Without using CSS:hover, make div change to a diff background color when your mouse hovers over it. Should return to original color when mouse exits
    let div = $('<div class = "div"></div>');
    $('body').append(div);
    $('.div').css({"background-color": "transparent", "width": "200px", "height": "200px"});

    //3. change div to blue bg when hovered over
    $('.div').mouseover(function(event) {
        $('.div').css("background-color", "blue")
    });

    //3. remove blue bg color on mouse out
    $('.div').mouseout(function(event) {
        $('.div').css("background-color", "transparent")
    });

    //4. put some text in paragraph; make it where when you click paragraph, color of text switches to red. once working, rewrite code to switch to a random color each click)
    let paragraph = $('<paragraph class = "p"></paragraph>').text('I can do this! I can do this! I can do this! I can do this! I can do this! I can do this! I can do this! I can do this!');
    $('body').append(paragraph);

    $('.p').click(function() {
        $('.p').css({"color": getColor()});
    });

    let div1 = $('<div class = "div1"></div>');
    $('body').append(div1);

    //5. add a button and an empty div - when button clicked, add span that contains your name to empty div
    let button2 = $('<button class = "btn2"></button>').text('Add name span to empty div');
    $('body').append(button2);
    

    let div2 = ('<div class = "div2"></div>');
    $('body').append(div2);

    $('.btn2').click(function() {
        let name = $('<paragraph class = "Lexi"></paragraph>').text('Lexi ');
        $('body').append(name);
        $('.div2').append(name);

    });

    //6. Create a button and a ul in HTML; JS - creat an array containing names of 10 friends; when button clicked, add each friends name as an li on to the ul
    let button3 = $('<button class = "btn3"></button>').text('List Friends');
    $('body').append(button3);
    let div3 = $('<div class = "div3></div>');
    $('body').append(div3);

    $('.btn3').click(function() {
        let ul = $('<ul class = "ul"></ul>');
        $('body').append(ul);
        let friends = ['Abby', 'Betty', 'Carrie', 'Drake', 'Edward', 'Frank', 'Gary', 'Hunter', 'Ian', 'Jane']
        for(i = 0; i < friends.length; i++) {
            let li = ('<li class = "li"></li>');
            $('body').append(`<li>${friends[i]}</li>`);
        };
        // friends.forEach(function() {
        //     for (let i = 0; i < friends.length; i++) {
        //         //return friends[i];
        //         let li = ('<li class = "li"></li>').text('friends[i]');
        //         $('.ul').append(li);
        //     }
        // })

    });

});


//4. random color background function
function getColor() {
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return randomColor;
}