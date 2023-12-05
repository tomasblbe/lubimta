

let b = 0

document.querySelector("#plus").addEventListener("click", function(){
    



    var mrakPlusText = document.createElement("div")
    var mrak = document.createElement("img");
    plus = document.getElementById("plus");

    mrak.setAttribute("src", "images/mrak.png");
    mrak.setAttribute("position", "relative");
    mrak.setAttribute("alt", "mrak");
    mrak.setAttribute("width", "700px");
    if (b===0){
        mrak.setAttribute("style", "margin-left: 750px;");
        plus.setAttribute("style", "margin-left: 350px;")
        b = 1;
    } else{
        mrak.setAttribute("style", "margin-left: 200px");
        plus.setAttribute("style", "margin-left: 900px")
        b = 0;
    }

    
    mrakPlusText.appendChild(mrak)

    plus.remove();

    document.getElementById("mraky").appendChild(mrakPlusText);
    document.getElementById("mraky").appendChild(plus);
})