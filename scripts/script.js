
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
let b = 0
let numImages = 0
let mrakObrazokSrc = ""

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
    if (document.getElementById('uploadFotkyInput').files.length == 0){
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
    document.getElementById("uploadFotkyInput").value =''
    document.getElementById('textArea').value = ''
}

function createCloud (pic){
    numImages = numImages+1
    var mrak = document.createElement('div')
    var mrakPozadie = document.createElement('img')
    var obrazokDiv = document.createElement('div')
    var obrazokPic = document.createElement('img')
    var obrazokShadow = document.createElement('div')
    var mraky = document.getElementById("mraky")

    var previewWindow = document.createElement('div')
    var previewImageDiv = document.createElement('div')
    var previewImageImg = document.createElement('img')
    var previewText = document.createElement('div')
    var previewClose = document.createElement('div')


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
    
    obrazokPic.setAttribute('src', pic)
    obrazokPic.setAttribute('style', 'width: 100%; z-index:6')
    obrazokDiv.setAttribute("class", "obrazokDiv")
    obrazokDiv.id = "obrazok" + numImages
    obrazokDiv.appendChild(obrazokPic)
    obrazokShadow.classList.add('obrazokShadow')
    obrazokDiv.appendChild(obrazokShadow)
    mrak.appendChild(obrazokDiv)
 

 
    plus = document.getElementById('plus')
    plus.remove()
    mraky.appendChild(mrak)
    mraky.appendChild(plus)

    obrazokShadow.addEventListener('mouseover', function(e){
        this.classList.add('active')
    })
    obrazokShadow.addEventListener('mouseout', function(e){
        this.classList.remove('active')
    })

    


    previewWindow.classList.add('preview')
    previewWindow.id = 'preview' + numImages
    previewImageDiv.classList.add('previewImage')

    previewImageImg.setAttribute('src', pic)
    previewImageImg.setAttribute('style', 'width: 100%')
    previewImageDiv.appendChild(previewImageImg)
    previewWindow.appendChild(previewImageDiv)

    previewText.classList.add('previewText')
    previewText.textContent = document.getElementById('textArea').value
    previewWindow.appendChild(previewText)

    document.getElementById('textArea').value = ''

    previewClose.classList.add('previewClose')
    previewClose.id = 'previewClose' + numImages
    previewClose.textContent = 'Zatvoriť'
    previewWindow.appendChild(previewClose)


    document.body.appendChild(previewWindow)

 
    obrazokDiv.addEventListener('click', function(e){
        document.getElementById('preview' + this.id.slice(7)).classList.add('active')
        overlay.classList.add('active')
    })
    previewClose.addEventListener('click', function(e){
        document.getElementById('preview' + this.id.slice(12)).classList.remove('active')
        overlay.classList.remove('active')
    })


    closeModal(document.querySelector('.modal'))
    
}

