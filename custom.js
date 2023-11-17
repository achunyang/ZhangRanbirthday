// 霸都丶傲天 2019.10.10
$(function () {
    console.log("图片方法")
    let dom = document.createElement("span");
    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        console.log(config.imgs);
        console.log(config.imgs[item]);
        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs["送给你--张苒"];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
        dom.appendChild(p);
    });
    $("#texts-container").append(dom.innerHTML);
});

$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});
