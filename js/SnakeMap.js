class SnakeMap {
    constructor(){
        // 1.创建div
        let oDiv = document.createElement("div");
        // 2.添加类名
        oDiv.className = "map";
        // 3.添加到body中
        document.body.appendChild(oDiv);
        this.oMap = oDiv;
    }
}