
const openModalButton = document.getElementById('plus')
const closeModalButtons = document.getElementById('close-button')
const overlay = document.querySelector('.overlay')
const blah = document.querySelector('.blah')
const blahFoto = document.getElementById('blah')
let numImages = 0
let mrakObrazokSrc = ""
let b = 0

openModalButton.addEventListener('click', () =>{
    const modal = document.querySelector('.modal')
    openModal(modal)
})

closeModalButtons.addEventListener('click', () =>{
    const modal = document.querySelector('.modal')
    closeModal(modal)
})

function openModal (modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal (modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    createCloud(mrakObrazokSrc)
    blahFoto.removeAttribute('src')
    blah.classList.remove("active")
}

function createCloud (pic){
    var mrak = document.createElement('div')
    var mrakPozadie = document.createElement('img')
    var obrazok = document.createElement('div')
    var obr = document.createElement('img')

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
    /*obr.setAttribute('id', `#${numImages}`)*/
    obrazok.setAttribute('style', 'position: absolute; left: 50%;transform: translate(-50%,0); bottom:20%; width:30%; border: 3px solid yellow; border-radius:10px; padding: 10px')
    obrazok.appendChild(obr)
    mrak.appendChild(obrazok)

    plus = document.getElementById('plus')
    plus.remove()
    mraky.appendChild(mrak)
    mraky.appendChild(plus)

    /*localStorage.setItem(`${numImages}`, getBase64Image(document.getElementById(`${numImages}`)))*/
}

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

/*function getBase64Image(img) {
   var canvas = document.createElement("canvas");
   canvas.width = img.width;
   canvas.height = img.height;
   var ctx = canvas.getContext("2d");
   ctx.drawImage(img, 0, 0);
   var dataURL = canvas.toDataURL("image/png");

   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}*/