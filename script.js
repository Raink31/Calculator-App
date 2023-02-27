let count = 0;
let calculDisplayEl = document.querySelector("#calcul-display-el")
let selectedNumber = 0
const zeroBtn = document.querySelector("#zero-btn")
const oneBtn = document.querySelector("#one-btn")
const twoBtn = document.querySelector("#two-btn")
const treeBtn = document.querySelector("#tree-btn")
const fourBtn = document.querySelector("#four-btn")
const fiveBtn = document.querySelector("#five-btn")
const sixBtn = document.querySelector("#six-btn")
const sevenBtn = document.querySelector("#seven-btn")
const eightBtn = document.querySelector("#eight-btn")
const nineBtn = document.querySelector("#nine-btn")
const plusBtn = document.querySelector("#plus-btn")
const minusBtn = document.querySelector("#minus-btn")
const multiplyBtn = document.querySelector("#multiply-btn")
const divideBtn = document.querySelector("#divide-btn")
const resetBtn = document.querySelector("#reset-btn")
const equalBtn = document.querySelector("#equal-btn")

calculDisplayEl.textContent = calcul(addSelectedNumber)

function addSelectedNumber(a) {
    return a
}

function calcul(a) {
    return count + a
}