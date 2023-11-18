const imageInfo = [
    {url: "images/TSMC-Logo-768x483.png", id: "logo", scale: 0.4}
]

/*-----Functions-----*/
function loadAndScaleImage(url, id, scale) {
    const element = document.getElementById(id);
    element.src = url;
    element.onload = function() {
        let width = element.width * scale;
        let height = element.height * scale;

        element.width = width;
        element.height = height;
    }
}

for(let i = 0; i < imageInfo.length; i++) {
    loadAndScaleImage(imageInfo[i].url, imageInfo[i].id, imageInfo[i].scale);
}