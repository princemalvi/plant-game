var totalRows = 3;
var totalCols = 10;
var gameHeight;
var gameWidth;
window.onresize = () => {
    setHightWIdth();
    updatePoints();
};
function updatePoints() {
    var count = 0;
    for (var i = 1; i <= totalRows; i++) {
        for (var j = 1; j <= totalCols; j++) {
            var element = document.getElementById("plant_" + i + "_" + j);
            // alert(element)
            treeList[count].updateTree(new Point(element.getBoundingClientRect().left, element.getBoundingClientRect().top), element.getBoundingClientRect().width, element.getBoundingClientRect().height);
            count++;
        }
    }
}
function drawTrees() {
    // alert(window.innerWidth)
    if (screen.width > 992) {
        totalRows = 3;
        totalCols = 10;
        // alert(totalRows + "  " + totalCols)
        gameHeight = game.getBoundingClientRect().height / 3.5;
        gameWidth = game.getBoundingClientRect().width / 12;
    }
    else {
        totalRows = 5;
        totalCols = 6;
        gameHeight = game.getBoundingClientRect().height / 6;
        gameWidth = game.getBoundingClientRect().width / 8;
    }
    for (var i = 1; i <= totalRows; i++) {
        var trees_tag_row_container = document.createElement("div");
        trees_tag_row_container.className = "trees-tag-row-container";
        game.appendChild(trees_tag_row_container);
        for (var j = 1; j <= totalCols; j++) {
            var tree_tag_container = document.createElement("div");
            trees_tag_row_container.appendChild(tree_tag_container);
            tree_container = document.createElement("div");
            tree_container.className = "tree-container";
            tree_container.id = "plant_" + i + "_" + j;
            tree_container.style.height = gameHeight + "px";
            tree_container.style.width = gameWidth + "px";
            tree_tag_container.appendChild(tree_container);
            var tag_container = document.createElement("div");
            // tag_container.innerHTML = "dd";
            tag_container.id = "tag" + i + "_" + j;
            // console.log("id: "+tag_container.id);
            tag_container.className = "tag-container";
            tree_tag_container.appendChild(tag_container);
            stem = document.createElement("div");
            stem.className = "stem";
            stem.id = "stem";
            stem.style.top = "46.5%";
            stem.style.width = "100%";
            stem.style.height = "78%";
            tree_container.appendChild(stem);
            var left_leaf_container = document.createElement("div");
            left_leaf_container.className = "left-leaf-container";
            for (var k = 0; k < 5; k++) {
                var leaf = document.createElement("div");
                leaf.className = "leaf";
                leaf.style.height = ((tree_container.getBoundingClientRect().bottom - tree_container.getBoundingClientRect().top) * 0.10) + "px";
                leaf.style.width = ((tree_container.getBoundingClientRect().bottom - tree_container.getBoundingClientRect().top) * 0.10) + "px";
                left_leaf_container.appendChild(leaf);
            }
            stem.appendChild(left_leaf_container);
            var middletree = document.createElement("div");
            middletree.style.width = "1%";
            middletree.style.borderLeft = "3px solid transparent";
            middletree.style.borderRight = "3px solid transparent";
            stem.appendChild(middletree);
            var borderLength = (stem.getBoundingClientRect().bottom - stem.getBoundingClientRect().top) * 0.80;
            middletree.style.borderBottom = borderLength + "px solid brown";
            var leaf = document.createElement("div");
            leaf.className = "leaf top";
            leaf.style.height = ((tree_container.getBoundingClientRect().bottom - tree_container.getBoundingClientRect().top) * 0.10) + "px";
            leaf.style.width = ((tree_container.getBoundingClientRect().bottom - tree_container.getBoundingClientRect().top) * 0.10) + "px";
            middletree.appendChild(leaf);
            var right_leaf_container = document.createElement("div");
            right_leaf_container.className = "right-leaf-container";
            for (var k = 0; k < 5; k++) {
                var leaf = document.createElement("div");
                leaf.className = "leaf";
                leaf.style.height = ((tree_container.getBoundingClientRect().bottom - tree_container.getBoundingClientRect().top) * 0.10) + "px";
                leaf.style.width = ((tree_container.getBoundingClientRect().bottom - tree_container.getBoundingClientRect().top) * 0.10) + "px";
                right_leaf_container.appendChild(leaf);
            }
            stem.appendChild(right_leaf_container);
            var half_circle_1 = document.createElement("div");
            half_circle_1.className = "half-circle1";
            var half_circle_2 = document.createElement("div");
            half_circle_2.className = "half-circle2";
            var half_circle_3 = document.createElement("div");
            half_circle_3.className = "half-circle3";
            var soil = document.createElement("div");
            soil.className = "soil";
            soil.id = "soil";
            soil.style.width = "100%";
            soil.style.height = "22%";
            soil.style.top = "79%";
            soil.appendChild(half_circle_1);
            soil.appendChild(half_circle_2);
            soil.appendChild(half_circle_3);
            tree_container.appendChild(soil);
        }
    }
}
function generateTreeList() {
    list = document.querySelectorAll(".tree-container");
    var row = 1;
    var cols = 1;
    for (var i = 0; i < list.length; i++) {
        let htmlClass = "plant_" + row + "_" + cols;
        let obj = document.querySelector("#" + htmlClass + " #stem");
        let tag_container = document.getElementById("tag" + row + "_" + cols);
        treeObj = new Tree(new Point(list[i].getBoundingClientRect().x, list[i].getBoundingClientRect().y), list[i].getBoundingClientRect().width, list[i].getBoundingClientRect().height, obj, tag_container);
        // treeList[i] = treeObj
        treeList.push(treeObj);
        if (cols % totalCols == 0) {
            row++;
            cols = 0;
        }
        cols++;
    }
}
function setHightWIdth() {
    if (window.screen.width > 992) {
        game.style.width = "70vw";
        game.style.height = "70vh";
    }
    else {
        game.style.width = "95vw";
        game.style.height = "70vh";
    }
}
function setTreeType() {
    treeList[0].type = "DD";
    treeList[1].type = "DD";
    treeList[2].type = "Dd";
    treeList[3].type = "Dd";
    treeList[4].type = "dd";
    treeList[5].type = "Dd";
    treeList[6].type = "Dd";
    treeList[7].type = "DD";
    treeList[8].type = "dd";
    treeList[9].type = "DD";
    treeList[10].type = "Dd";
    treeList[11].type = "dd";
    treeList[12].type = "Dd";
    treeList[13].type = "DD";
    treeList[14].type = "Dd";
    treeList[15].type = "DD";
    treeList[16].type = "Dd";
    treeList[17].type = "DD";
    treeList[18].type = "dd";
    treeList[19].type = "Dd";
    treeList[20].type = "dd";
    treeList[21].type = "DD";
    treeList[22].type = "Dd";
    treeList[23].type = "Dd";
    treeList[24].type = "DD";
    treeList[25].type = "Dd";
    treeList[26].type = "Dd";
    treeList[27].type = "Dd";
    treeList[28].type = "DD";
    treeList[29].type = "Dd";
}
function shuffleTree() {
    for (let i = 0; i < treeList.length; i++) {
        let random = randomNumber(i, treeList.length - 1);
        let tmp = treeList[i].type;
        treeList[i].type = treeList[random].type;
        treeList[random].type = tmp;
    }
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getOccurences(string, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == string)
            count++;
    }
    return count;
}
function showResult() {
    // //console.log("you chosed: "+userTrees[0].type +" & "+userTrees[1].type);
    ddPercent = [];
    for (let i = 0; i < resultStrings.length; i++) {
        let percent = Number(resultStrings[i].substring(0, resultStrings[i].indexOf("%")));
        let type = resultStrings[i].substring(resultStrings[i].indexOf("%") + 1);
        ddPercent.push(percent + "% " + type);
        if (type == "DD") {
            //console.log(percent+"%");
            score += percent;
        }
        else if (type == "Dd") {
            //console.log("0.5("+percent+"%)");
            score += 0.5 * percent;
        }
    }
}
function showResultDescription() {
    // scoreImgDiv.style.display = "flex";
    // scoreImgDiv.style.display = "block";
    scoreDiv.style.display = "block";
    calMain.style.display = "block";
    scoreDetails.innerHTML = "";
    // for (let i = 0; i < ddPercent.length; i++) {
    //     document.getElementById("cal_dd").innerHTML += ddPercent[i];
    //     if (i != ddPercent.length - 1)
    //         document.getElementById("cal_dd").innerHTML += ", "
    // }
    emojisDiv.style.display = "block";
    if (score == 100) {
        document.getElementById("emoji").innerHTML = "&#x1f973;";
        scoreDetails.innerHTML = "Got Lucky! You selected the parents with DD gene." +
            "All your plants are disease resistant.";
    }
    else if (score >= 75) {
        document.getElementById("emoji").innerHTML = "&#x1f600;";
        scoreDetails.innerHTML = "Well Done! can be done better.";
    }
    else if (score >= 50) {
        document.getElementById("emoji").innerHTML = "&#x1f607;";
        scoreDetails.innerHTML = "Not bad, But half of the plants might die of infections";
    }
    else {
        document.getElementById("emoji").innerHTML = "&#x1f641;";
        scoreDetails.innerHTML = "Need a better selection of parents! Most of the plants might die of infections";
    }
    document.getElementById("percent").innerHTML = score + "%";
    /*    if (userTrees[0].type == "DD") {
   
           switch (userTrees[1].type) {
               case "DD":
                   scoreImg.src = "images/newplant1.svg";
                   break;
               case "Dd":
                   scoreImg.src = "images/newplant2.svg";
                   break;
               case "dd":
                   scoreImg.src = "images/newplant3.svg";
                   break;
           }
       }
       else if (userTrees[0].type == "Dd") {
   
           switch (userTrees[1].type) {
               case "DD":
                   scoreImg.src = "images/newplant4.svg";
                   break;
               case "Dd":
                   scoreImg.src = "images/newplant5.svg";
                   break;
               case "dd":
                   scoreImg.src = "images/newplant6.svg";
                   break;
           }
       }
       else if (userTrees[0].type == "dd") {
   
           switch (userTrees[1].type) {
               case "DD":
                   scoreImg.src = "images/newplant7.svg";
                   break;
               case "Dd":
                   scoreImg.src = "images/newplant8.svg";
                   break;
               case "dd":
                   scoreImg.src = "images/newplant9.svg";
                   break;
           }
       } */
    game_instruction.innerHTML = "You selected ";
    if (userTrees[0].type == userTrees[1].type) {
        game_instruction.innerHTML += "both plants with " + userTrees[0].type;
    }
    else {
        game_instruction.innerHTML += "plants with ";
        game_instruction.innerHTML += userTrees[0].type + " and " + userTrees[1].type;
    }
    game_instruction.innerHTML += " genetic makeup as parents.";
    if (!(userTrees[0].type == "dd" && userTrees[1].type == "dd")) {
        game_instruction.innerHTML += "Your first generation" +
            " crop will consist of ";
        let conatinsdd = false;
        for (let i = 0; i < ddPercent.length; i++) {
            game_instruction.innerHTML += ddPercent[i] + " plants";
            if (i != ddPercent.length - 1) {
                game_instruction.innerHTML += " , and ";
            }
            if (ddPercent[i].includes("dd"))
                conatinsdd = true;
        }
        if (conatinsdd)
            game_instruction.innerHTML += ". The dd plants can die due to infections.";
        else
            game_instruction.innerHTML += ".";
    }
    else {
        game_instruction.innerHTML += " All the progeny plants were also" +
            " dd and will not fight diseases well.";
    }
}
function deSelectTrees() {
    userTrees[0].isLocked = false;
    userTrees[1].isLocked = false;
    userTrees[0].deselectTree();
    userTrees[1].deselectTree();
    // userTrees[0].img=treeImg;
    // userTrees[1].img=treeImg;
}
// functions to set trees for next generations
function extractValue(arr1) {
    console.log("arr1= " + arr1);
    map = new Map();
    for (var i = 0; i < arr1.length; i++) {
        var arr = arr1[i].split("% ");
        //console.log("arr= "+arr)
        map.set(arr[1], arr[0]);
        tmp = arr[1];
        //   console.log("map1=  "+map);
    }
    // console.log("map=  "+JSON.stringify(map));
    generateNextGenerationTrees(map);
}
function generateNextGenerationTrees(map) {
    var dd;
    var DD;
    var Dd;
    // console.log("in gen " +JSON.stringify(map))
    if (map.get("dd"))
        dd = parseInt(map.get("dd"));
    if (map.get("DD"))
        DD = parseInt(map.get("DD"));
    if (map.get("Dd"))
        Dd = parseInt(map.get("Dd"));
    // console.log(dd,Dd,DD)
    setTypeAndValueOfTrees(dd, Dd, DD);
}
function setTypeAndValueOfTrees(dd = 0, Dd = 0, DD = 0) {
    var dd = dd != 0 ? ((treeList.length) * dd) / 100 : 0;
    var Dd = Dd != 0 ? ((treeList.length) * Dd) / 100 : 0;
    var DD = DD != 0 ? ((treeList.length) * DD) / 100 : 0;
    // //console.log(dd +  "   " + Dd + "  " + DD)
    if (dd.toString().includes(".") && Dd.toString().includes(".")) {
        dd = dd + 0.5;
        Dd = Dd - 0.5;
    }
    else if (dd.toString().includes(".") && DD.toString().includes(".")) {
        dd = dd + 0.5;
        DD = DD - 0.5;
    }
    else if (Dd.toString().includes(".") && DD.toString().includes(".")) {
        Dd = Dd + 0.5;
        DD = DD - 0.5;
    }
    console.log("check3");
    generateArrayWithRandomNumber(dd, Dd, DD);
}
function generateArrayWithRandomNumber(dd, Dd, DD) {
    console.log("check4");
    let AllTypes = ["dd", "Dd", "DD"];
    let ddCounter = 0, DDCounter = 0, DdCounter = 0;
    for (let i = 0; i < treeList.length; i++) {
        let random = randomNumber(0, AllTypes.length - 1);
        if (AllTypes[random] == "dd" && ddCounter < dd) {
            treeList[i].type = AllTypes[random];
            ddCounter++;
        }
        else if (AllTypes[random] == "Dd" && DdCounter < Dd) {
            treeList[i].type = AllTypes[random];
            DdCounter++;
        }
        else if (AllTypes[random] == "DD" && DDCounter < DD) {
            treeList[i].type = AllTypes[random];
            DDCounter++;
        }
        else {
            i--;
        }
    }
    shuffleTree();
}
function generateCombination() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let result = userTrees[0].type.charAt(i) + userTrees[1].type.charAt(j);
            if (result == "dD")
                result = "Dd";
            combintionTrees.push(result);
        }
    }
    let distinctTypes = [];
    for (let i = 0; i < combintionTrees.length; i++) {
        let occurence = getOccurences(combintionTrees[i], distinctTypes);
        if (occurence == 0) { //is distinct element
            occurence = getOccurences(combintionTrees[i], combintionTrees);
            // console.log("ocuurrence of "+combintionTrees[i]+" is "+occurence);
            resultStrings.push(occurence * 25 + "%" + combintionTrees[i]);
            distinctTypes.push(combintionTrees[i]);
            //console.log("result: "+JSON.stringify(resultStrings));
        }
    }
}
function resetValues() {
    if (score < 50 || score == 100) {
        game_instruction.innerHTML = "We have 30 Healthy plants of which the 10 DD gene plants, 15 Dd gene plants, and 5" +
            "dd gene plants. From these, we want to select plant parents to create as many" +
            "surviving plants continuously across generations.<br><br>" +
            "In the first step select two parent plants for cross-breeding:";
    }
    choiseCount = 0;
    score = 0;
    ddPercent = [];
    resultStrings = [];
    userTrees = [];
    combintionTrees = [];
    calMain.style.display = "none";
    document.getElementById("emoji").innerHTML = "";
    scoreDiv.style.display = "none";
    // testingTool.isVisible=false;
    // map.clear();
}
function writeAlltypes() {
    for (let i = 0; i < treeList.length; i++)
        treeList[i].writeType();
}
//# sourceMappingURL=GameUtils.js.map