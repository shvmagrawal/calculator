let string = "";
let screen = document.querySelector('input')
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=> {
    button.addEventListener('click', (e)=> {
        if(e.target.innerHTML == '=') {
            string = eval(string)
            screen.value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            screen.value = string;
        }
    })
})

let clear = document.querySelector('.clear');
clear.addEventListener('click', (e) => {
    string = ""
    screen.value = string;
})

document.querySelector('.delete').addEventListener('click', (e)=> {
    string = string.substring(0, string.length - 1);
    screen.value = string;
})

