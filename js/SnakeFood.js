class SnakeFood {
    constructor(width, height, img, snakeMap){
        this.width = width;
        this.height = height;
        this.img = img;
        this.snakeMap = snakeMap;

        // 3.1获取地图的宽高
        let style = getComputedStyle(this.snakeMap.oMap);
        let mapWidth = parseInt(style.width);
        let mapHeight = parseInt(style.height);
        // console.log(mapWidth, mapHeight);
        // 3.2计算水平方向和垂直方向可以放下多少个食物
        this.colNum = mapWidth / this.width;
        this.rowNum = mapHeight / this.height;
        // console.log(colNum, rowNum);
    }
    render(){
        // 1.创建食物
        let oDiv = document.createElement("div");
        // 2.设置食物的样式
        oDiv.style.width = this.width + "px";
        oDiv.style.height = this.height + "px";
        oDiv.style.background = `url(${this.img})`;
        // 3.随机生成水平方向和垂直方向上的值
        let {x, y} = this.generateLoaction();
        this.x = x;
        this.y = y;
        oDiv.style.position = "absolute";
        oDiv.style.left = x * this.width + "px";
        oDiv.style.top = y * this.height + "px";
        // 4.将食物添加到地图中
        snakeMap.oMap.appendChild(oDiv);
        this.oFood = oDiv;
    }
    remove(){
        this.oFood.parentNode.removeChild(this.oFood);
    }
    generateLoaction(){
        let x = getRandomIntInclusive(0, this.colNum - 1); // 0, 9
        let y = getRandomIntInclusive(0, this.rowNum - 1); // 0, 7
        // console.log(x, y);
        return {x: x, y: y};
    }
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}