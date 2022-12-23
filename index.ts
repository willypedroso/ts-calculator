const display = <HTMLInputElement>document.getElementById('display')

let value1: string[] = []
let value2: string[] = []
let switchValue = 0
let operator = ''
const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '*', '-', '+', 'Enter']

window.addEventListener('keydown', (e) => {
    if(keys.includes(e.key)){
        e.key === 'Enter' ? btnAction('=') :
        e.key === 'Delete' ? btnAction('C') :
        e.key === 'Backspace' ? btnAction('E') :
        btnAction(e.key)
    }
    console.log(e.key)
})

function btnAction(b: string){
    switch(b){
        case '7':
            if(value1.length === 0){
                clearDisplay()
            }
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '8':
            if(value1.length === 0){
                clearDisplay()
            }
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '9':
            if(value1.length === 0){
                clearDisplay()
            }
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '4':
            if(value1.length === 0){
                clearDisplay()
            }
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '5':
            if(value1.length === 0){
                clearDisplay()
            }
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '6':
            if(value1.length === 0){
                clearDisplay()
            }
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '1':
            if(value1.length === 0){
                clearDisplay()
            }
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '2':
            if(value1.length === 0){
                clearDisplay()
            }
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '3':
            if(value1.length === 0){
                clearDisplay()
            }
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '0':
            if(value1.length === 0){
                break
            }
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '.':
            if(value1.length === 0){
                clearDisplay()
            }
            if(switchValue === 0){
                if(value1.length === 0){
                    value1.push('0')
                }
                value1.push(b)
            } else {
                if(value2.length === 0){
                    value2.push('0')
                }
                value2.push(b)
            }
            display.value = value1.join('') + operator + value2.join('')
            break
        case '/':
            operator = b
            switchValue === 0 ?
            switchValue++ : switchValue = 0
            display.value = value1.join('') + operator + value2.join('')
            break
        case '*':
            operator = b
            switchValue === 0 ?
            switchValue++ : switchValue = 0
            display.value = value1.join('') + operator + value2.join('')
            break
        case '-':
            operator = b
            switchValue === 0 ?
            switchValue++ : switchValue = 0
            display.value = value1.join('') + operator + value2.join('')
            break
        case '+':
            operator = b
            switchValue === 0 ?
            switchValue++ : switchValue = 0
            display.value = value1.join('') + operator + value2.join('')
            break
        case '=':
            calculate(value1, value2, operator)
            break
        case 'E':
            if(operator !== '' && value2.length === 0){
                operator = ''
                switchValue = 0
            } else {
                switchValue === 0 ?
                value1.pop() :
                value2.pop()
            }
            display.value = value1.join('') + operator + value2.join('')
            break
        case 'C':
            clearDisplay()
            break
    }
}

function clearDisplay(){
    value1 = []
    value2 = []
    operator = ''
    switchValue = 0
    display.value = ''
}

function calculate(v1: string[], v2: string[], op: string){
    let result = ''
    switch(op){
        case '+':
            result = (parseFloat(v1.join('')) + parseFloat(v2.join(''))).toString()
            break
        case '-':
            result = (parseFloat(v1.join('')) - parseFloat(v2.join(''))).toString()
            break
        case '*':
            result = (parseFloat(v1.join('')) * parseFloat(v2.join(''))).toString()
            break
        case '/':
            result = (parseFloat(v1.join('')) / parseFloat(v2.join(''))).toString()
            break
    }
    display.value = result
    value1 = []
    value2 = []
    operator = ''
    switchValue = 0
}