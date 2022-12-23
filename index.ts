const display = <HTMLInputElement>document.getElementById('display')

let value1: string[] = []
let value2: string[] = []
let switchValue = 0
let operator = ''

function btnAction(b: string){
    switch(b){
        case '7':
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '8':
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '9':
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '4':
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '5':
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '6':
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '1':
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '2':
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '3':
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '0':
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
            display.value = value1.join('') + operator + value2.join('')
            break
        case '.':
            switchValue === 0 ?
            value1.push(b) :
            value2.push(b)
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
            switchValue === 0 ?
            value1.pop() :
            value2.pop()
            display.value = value1.join('') + value2.join('')
            break
        case 'C':
            value1 = []
            value2 = []
            operator = ''
            switchValue = 0
            display.value = ''
            break
    }
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
    v1 = []
    v2 = []
    op = ''
    switchValue = 0
}