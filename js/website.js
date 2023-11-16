const logoImgElement = document.getElementById("company-logo-img");
const logicTechnology = document.getElementById("logic-tech-img");
const specialtyTechnology = document.getElementById("specialty-tech-img");
const threeDFabric = document.getElementById("three-d-fabric-img");
const techPlatforms = document.getElementById("tech-platforms-img");

const companyLogoScale = 0.3;
const productListScale = 0.5;

/*-----Functions-----*/
function loadAndScaleImage(url, element, scale) {
    element.src = url;
    element.onload = function() {
        let width = element.width * scale;
        let height = element.height * scale;

        element.width = width;
        element.height = height;
    }
}

/*-----Running Code-----*/
loadAndScaleImage('images/TSMC-Logo-768x483.png', logoImgElement, companyLogoScale);
loadAndScaleImage('images/technology_logic-710x480.jpg', logicTechnology, productListScale);
loadAndScaleImage('images/technology_specialty-710x480.jpg', specialtyTechnology, productListScale);
loadAndScaleImage('images/technology_3DIC-710x480.jpg', threeDFabric, productListScale);
loadAndScaleImage('images/technology_platform-710x480.jpg', techPlatforms, productListScale);