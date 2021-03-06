'use strict';

let elUsersImage;
// Handle download image to the users device
function onDownloadImg(elLink) {
    const imgContent = canvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}


// Handle image upload by users and draw it on canvas
function onImgUpload(ev) {
    loadImage(ev, handleImage)
}

function loadImage(ev, onImageReady) {
    const reader = new FileReader();
    
    reader.onload = function (event) {
        let img = new Image();
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result;
        img.id = 1234567;
    }
    reader.readAsDataURL(ev.target.files[0]);
}

function handleImage(img) {
    gMeme.selectedImgId = img.id;
    elUsersImage = img;

    renderMeme()
    onTogglePages('editor-page');
}