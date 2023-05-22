fetch("https://api.adviceslip.com/advice").then(resposta => {
    return resposta.json()
}).then(corpo => {
    document.getElementsByTagName("span")[0].innerHTML = corpo.slip.advice
})

fetch("https://api.funtranslations.com/translate/").then(x => {
    console.log(x.json)
})