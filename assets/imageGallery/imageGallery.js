var currentImage = null;

function openimageviewer(img) {
    document.getElementById('image-title').innerHTML = img.getAttribute("data-title");
    document.getElementById('image-description').innerHTML = img.getAttribute("data-description");
    document.getElementById('viewing-image').src = img.src;
    document.getElementById('image-gallery-viewer').style.display = "block";
    document.getElementById('gallery-title').innerHTML = "<b>Collection:</b><br>" + img.parentElement.getAttribute("data-gallery-title");
    document.body.style.overflow = "hidden";
    currentImage = img;
    toggleArrows();
    document.getElementById('viewer-bg').style.display = "block";
}

function toggleArrows() {
    if (currentImage.nextElementSibling == null || typeof currentImage.nextElementSibling == 'undefined') {
        document.getElementById('next').style.display = "none";
        document.getElementById('overlay-next').style.pointerEvents = "none";
    }
    else {
        document.getElementById('next').style.display = "block";
        document.getElementById('overlay-previous').style.pointerEvents = "none";
    }

    if (currentImage.previousElementSibling == null || typeof currentImage.previousElementSibling == 'undefined') {
        document.getElementById('previous').style.display = "none";
        document.getElementById('overlay-next').style.pointerEvents = "auto";
    }
    else {
        document.getElementById('previous').style.display = "block";
        document.getElementById('overlay-previous').style.pointerEvents = "auto";
    }
}

function closeimageviewer() {
    document.getElementById('image-gallery-viewer').style.display = "none";
    document.getElementById('viewer-bg').style.display = "none";
    document.body.style.overflow = "auto";
    currentImage = null;
}

function loadNextImage() {
    openimageviewer(currentImage.nextElementSibling);
}
function loadPreviousImage() {
    openimageviewer(currentImage.previousElementSibling);
}
