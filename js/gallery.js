const fullImgBox = document.getElementById("fulimgbox"),
fullImg = document.getElementById("fulimg")

function openfulimg(reference){
    fullImgBox.style.display = "flex"
    fullImg.src = reference
}

function closeImg(){
    fullImgBox.style.display = "none"
}