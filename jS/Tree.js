class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get X() {
        return this.x;
    }
    get Y() {
        return this.y;
    }
    set X(x) {
        this.x = x;
    }
    set Y(y) {
        this.y = y;
    }
}
class Tree {
    constructor(pt, width, height, obj, tag) {
        this.pt = pt;
        this.height = height;
        this.width = width;
        this.isLocked = false;
        this.obj = obj;
        this.obj.tagName;
        this.tag = tag;
    }
    changePoints(pt) {
        this.pt = pt;
    }
    writeType() {
        if (this.type == "DD") {
            //this.tag.style.color="#00B050";
            this.tag.style.color = "cornsilk";
        }
        else if (this.type == "Dd") {
            // this.tag.style.color="#E3D82A";
            this.tag.style.color = "navy";
        }
        else {
            //ctx.fillStyle="#F00F00";
            this.tag.style.color = "#F00F00";
        }
        this.tag.innerHTML = this.type;
    }
    isinside(pt) {
        if ((pt.x > this.pt.x && pt.x < this.pt.x + this.width) && (pt.y > this.pt.y && pt.y < this.pt.y + this.height))
            return true;
        return false;
    }
    selectTree() {
        // if(this.obj.classList.contains("stem-out"))
        //     this.deselectTree();
        // else
        this.isLocked = true;
        this.obj.classList.add("stem-out");
        this.tag.style.visibility = "visible";
        console.log("YOu selected " + this.type);
        this.writeType();
    }
    deselectTree() {
        this.obj.classList.remove("stem-out");
        this.tag.style.visibility = "hidden";
        // this.tag.innerHTML = "";
    }
    updateTree(pt, width, height) {
        this.pt = pt;
        this.height = height;
        this.width = width;
    }
}
//# sourceMappingURL=Tree.js.map