let outputEl = document.querySelector("#output")

outputEl.value = ""

function afficher(a) {
    outputEl.value += a
}

function reset() {
    outputEl.value = ""
}

function calcul() {
    outputEl.value = eval(outputEl.value)
}
