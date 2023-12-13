
const openModalButton = document.getElementById('plus')
const closeModalButtons = document.getElementById('close-button')
const closeAlert = document.getElementById('close')
const overlay = document.querySelector('.overlay')
const overlay2 = document.querySelector('.overlay2')
const blah = document.querySelector('.blah')
const blahFoto = document.getElementById('blah')
const send = document.getElementById("send-button")
const modal = document.querySelector('.modal')
const Alert = document.querySelector('.vyber-fotku')
let numImages = 0
let mrakObrazokSrc = ""
let b = 0

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      blah.classList.add("active")
      
  
      reader.onload = function (e) {
        blahFoto.setAttribute('src', e.target.result);
        mrakObrazokSrc = e.target.result

      };
      reader.readAsDataURL(input.files[0]);
    }
  }


openModalButton.addEventListener('click', () =>{
    openModal(modal)
})

closeModalButtons.addEventListener('click', () =>{
    closeModal(modal)
})

closeAlert.addEventListener('click', () =>{
    if (Alert==null) return
    Alert.classList.remove('active')
    overlay2.classList.remove('active')
})

send.addEventListener('click', () => {
    if (document.getElementById('uploadFotky').files.length == 0){
        Alert.classList.add('active')
        overlay2.classList.add('active')
    }else{
    createCloud(mrakObrazokSrc)}
})

function openModal (modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal () {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    blahFoto.removeAttribute('src')
    blah.classList.remove("active")
    document.getElementById("uploadFotky").value =''
}

function createCloud (pic){
    var mrak = document.createElement('div')
    var mrakPozadie = document.createElement('img')
    var obrazok = document.createElement('div')
    var obr = document.createElement('img')
    var mraky = document.getElementById("mraky")

    mrakPozadie.setAttribute('src', 'images/mrak.png')
    mrakPozadie.setAttribute('style', 'width: 700px')

    mrak.appendChild(mrakPozadie)
    

    if (b===0){
        mrak.setAttribute('style', 'position:relative; margin-left: 1020px; width:700px')
        b=1
    }else {
        mrak.setAttribute('style', 'position:relative; margin-left: 80px; width: 700px')
        b=0
    }
    
    obr.setAttribute('src', pic)
    obr.setAttribute('style', 'width: 100%')
    obrazok.setAttribute('style', 'position: absolute; left: 50%;transform: translate(-50%,0); bottom:20%; width:30%; border: 3px solid yellow; border-radius:10px; padding: 10px')
    obrazok.appendChild(obr)
    mrak.appendChild(obrazok)

    plus = document.getElementById('plus')
    plus.remove()
    mraky.appendChild(mrak)
    mraky.appendChild(plus)
    closeModal(document.querySelector('.modal'))
}

