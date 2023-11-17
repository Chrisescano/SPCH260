const imageInfo = [
    {url: "images/TSMC-Logo-768x483.png", id: "company-logo-img", scale: 0.3},
    {url: "images/technology_logic-710x480.jpg", id: "logic-tech-img", scale: 0.5},
    {url: "images/technology_specialty-710x480.jpg", id: "specialty-tech-img", scale: 0.5},
    {url: "images/technology_3DIC-710x480.jpg", id: "three-d-fabric-img", scale: 0.5},
    {url: "images/technology_platform-710x480.jpg", id: "tech-platforms-img", scale: 0.5},
    {url: "images/TSMC_Organization-1500x1636.png", id: "org-chart", scale: 0.5},
    {url: "images/executives/1-dr-mark-liu.png", id: "exec1", scale: 0.5},
    {url: "images/executives/2-dr-cc-wei.png", id: "exec2", scale: 0.5},
    {url: "images/executives/3-lora-ho.png", id: "exec3", scale: 0.5},
    {url: "images/executives/4-dr-wei-jen-lo.png", id: "exec4", scale: 0.5},
    {url: "images/executives/5-rick-cassidy.png", id: "exec5", scale: 0.5},
    {url: "images/executives/6-yp-chin.png", id: "exec6", scale: 0.5},
    {url: "images/executives/7-dr-yj-mii.png", id: "exec7", scale: 0.5},
    {url: "images/executives/8-jk-lin.png", id: "exec8", scale: 0.5},
    {url: "images/executives/9-dr-cliff-hou.png", id: "exec9", scale: 0.5},
    {url: "images/executives/10-dr-kevin-zhang.png", id: "exec10", scale: 0.5},
    {url: "images/executives/11-sylvia-fang.png", id: "exec11", scale: 0.5},
    {url: "images/executives/12-dr-yl-wang.png", id: "exec12", scale: 0.5},
    {url: "images/executives/13-dr-douglas-yu.png", id: "exec13", scale: 0.5},
    {url: "images/executives/14-dr-ts-chang.png", id: "exec14", scale: 0.5},
    {url: "images/executives/15-dr-michael-wu.png", id: "exec15", scale: 0.5},
    {url: "images/executives/16-dr-min-cao.png", id: "exec16", scale: 0.5},
    {url: "images/executives/17-yh-liaw.png", id: "exec17", scale: 0.5},
    {url: "images/executives/18-dr-simon-jang.png", id: "exec18", scale: 0.5},
    {url: "images/executives/19-wendell-huang.png", id: "exec19", scale: 0.5},
    {url: "images/executives/20-dr-cs-yoo.png", id: "exec20", scale: 0.5},
    {url: "images/executives/21-dr-jun-he.png", id: "exec21", scale: 0.5},
    {url: "images/executives/22-dr-geoffrey-yeap.png", id: "exec22", scale: 0.5},
    {url: "images/executives/23-dr-chris-horng-dar-lin.png", id: "exec23", scale: 0.5},
    {url: "images/executives/24-jonathan-lee.png", id: "exec24", scale: 0.5},
    {url: "images/executives/25-dr-arthur-chuang.png", id: "exec25", scale: 0.5},
    {url: "images/executives/26-dr-lc-lu.png", id: "exec26", scale: 0.5},
    {url: "images/executives/27-kc-hsu.png", id: "exec27", scale: 0.5},
    {url: "images/executives/28-ray-chuang.png", id: "exec28", scale: 0.5},
    {url: "images/executives/29-david-keller.png", id: "exec29", scale: 0.5},
    {url: "images/executives/30-dr-maria-marced.png", id: "exec30", scale: 0.5},
    {url: "images/executives/31-paul-de-bot.png", id: "exec31", scale: 0.5},
    {url: "images/executives/32-makoto-onodera.png", id: "exec32", scale: 0.5},
    {url: "images/executives/33-roger-luo.png", id: "exec33", scale: 0.5}

    //{url: "images/executives/.png", id: "exec24", scale: 0.5}
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