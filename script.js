var input = document.querySelector("#input-text");
var translateButton = document.querySelector("#translateButton");
var output = document.querySelector("#output-text");


var url = "https://api.funtranslations.com/translate/minion.json";


function urlConstructor(text) {
    return url + "?text=" + text;
}

function errorHandler(error) {
    console.log("error occured "+error);
    alert("api limit exceeded, try after 60 mins");
}


function clickHandler() {

    var inputText = input.value;

    // console.log(inputText);

    var reqUrl = urlConstructor(inputText);

    fetch(reqUrl)
    .then(response => response.json())
    .then(data => {
        var changedText = data.contents.translated;
        output.innerText = changedText;
    })
    .catch(errorHandler);



    // output.innerHTML = ;
}


translateButton.addEventListener("click", clickHandler)