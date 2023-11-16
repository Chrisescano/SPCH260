const imageInfo = [
    {url: "images/TSMC-Logo-768x483.png", id: "company-logo-img", scale: 0.3},
    {url: "images/technology_logic-710x480.jpg", id: "logic-tech-img", scale: 0.5},
    {url: "images/technology_specialty-710x480.jpg", id: "specialty-tech-img", scale: 0.5},
    {url: "images/technology_3DIC-710x480.jpg", id: "three-d-fabric-img", scale: 0.5},
    {url: "images/technology_platform-710x480.jpg", id: "tech-platforms-img", scale: 0.5},
    {url: "images/TSMC_Organization-1500x1636.png", id: "org-chart", scale: 0.5},
    {url: "images/executives1.png", id: "executive1", scale: 0.6},
    {url: "images/executives2.png", id: "executive2", scale: 0.6},
    {url: "images/executives3.png", id: "executive3", scale: 0.6},
    {url: "images/executives4.png", id: "executive4", scale: 0.6},
    {url: "images/executives5.png", id: "executive5", scale: 0.6},
    {url: "images/executives6.png", id: "executive6", scale: 0.6},
    {url: "images/executives7.png", id: "executive7", scale: 0.6},
    {url: "images/executives8.png", id: "executive8", scale: 0.6},
    {url: "images/executives9.png", id: "executive9", scale: 0.6},
    {url: "images/executives10.png", id: "executive10", scale: 0.6}
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

/*-----Running Code-----*/
for(let i = 0; i < imageInfo.length; i++) {
    loadAndScaleImage(imageInfo[i].url, imageInfo[i].id, imageInfo[i].scale);
}