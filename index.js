// Your code here

function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`

function wrapAdjective(flair="*"){
  return function(adj="special"){
    return `You are ${flair}${adj}${flair}!`
  }
}

const Calculator = {add, subtract, multiply, divide}

function add(num1, num2){return num1+num2}
function subtract(num1, num2){return num1-num2}
function multiply(num1, num2){return num1*num2}
function divide(num1, num2){return num1/num2}

function actionApplyer(num, funcArray){
  let result = num
  for (let i=0;i<funcArray.length;i++){
    result = funcArray[i](result)
  }
  return result
}