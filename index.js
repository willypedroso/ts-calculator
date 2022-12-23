"use strict";
const display = document.getElementById('display');
let value1 = [];
let value2 = [];
let switchValue = 0;
function btnAction(b) {
    switch (b) {
        case '7':
            switchValue === 0 ?
                value1.push(b) :
                value2.push(b);
            display.value = value1.join('') + value2.join('');
            break;
        case '8':
            switchValue === 0 ?
                value1.push(b) :
                value2.push(b);
            display.value = value1.join('') + value2.join('');
            break;
        case '9':
            switchValue === 0 ?
                value1.push(b) :
                value2.push(b);
            display.value = value1.join('') + value2.join('');
            break;
        case '4':
            switchValue === 0 ?
                value1.push(b) :
                value2.push(b);
            display.value = value1.join('') + value2.join('');
            break;
        case '5':
            switchValue === 0 ?
                value1.push(b) :
                value2.push(b);
            display.value = value1.join('') + value2.join('');
            break;
        case '6':
            switchValue === 0 ?
                value1.push(b) :
                value2.push(b);
            display.value = value1.join('') + value2.join('');
            break;
        case '1':
            switchValue === 0 ?
                value1.push(b) :
                value2.push(b);
            display.value = value1.join('') + value2.join('');
            break;
        case '2':
            switchValue === 0 ?
                value1.push(b) :
                value2.push(b);
            display.value = value1.join('') + value2.join('');
            break;
        case '3':
            switchValue === 0 ?
                value1.push(b) :
                value2.push(b);
            display.value = value1.join('') + value2.join('');
            break;
        case '/':
            display.value += '/';
            break;
        case '*':
            display.value += '*';
            break;
        case '-':
            display.value += '-';
            break;
        case '+':
            display.value += '+';
            break;
        case '.':
            switchValue === 0 ?
                value1.push(b) :
                value2.push(b);
            display.value = value1.join('') + value2.join('');
            break;
        case '=':
            display.value += '=';
            break;
        case 'E':
            switchValue === 0 ?
                value1.pop() :
                value2.pop();
            display.value = value1.join('') + value2.join('');
            break;
        case 'C':
            display.value = '';
            break;
    }
}
