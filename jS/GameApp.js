var game = document.getElementById("game");
const game_instruction = document.getElementById("game-instruction");
const genLevel = document.getElementById("genLevel");
//cursor
const gameCursor = document.getElementById("cursor");
gameCursor.style.display = "none";
const calMain = document.getElementById("calMain");
calMain.style.display = "none";
const emojisDiv = document.getElementById("emojis");
// emojisDiv.style.display="none";
const scoreDetails = document.getElementById("score_details");
const scoreImgDiv = document.getElementById("scoreImgDiv");
scoreImgDiv.style.display = "none";
const scoreDiv = document.getElementById("score");
scoreDiv.style.display = "none";
//buttons
const btnNextGen = document.getElementById("btnNextGen");
btnNextGen.style.display = "none";
const btnPlayAgain = document.getElementById("btnPlayAgain");
btnPlayAgain.style.display = "none";
const btnTestingTool = document.getElementById("btnTestingTool");
btnTestingTool.style.display = "none";
var treeObj;
var tree_container;
var stem;
let treeList = [];
var list;
var isGameStarted = false;
var genCount = 1;
//var testingTool:TestingTool=new TestingTool();
var isTestingBtnClicked = false;
let choiseCount = 0;
let userTrees = [];
//utils variables
var combintionTrees = [];
var resultStrings = [];
let score = 0;
let ddPercent = [];
var map;
var tmp;
function main() {
    setHightWIdth();
    drawTrees();
    generateTreeList();
    // cmp.resizeCanvas();
    isGameStarted = true;
    setTreeType();
    shuffleTree();
    //writeAlltypes();
    //  testingTool.draw(); 
}
main();
btnNextGen.onclick = function () {
    deSelectTrees();
    // console.log(JSON.stringify(ddPercent))
    isTestingBtnClicked = false;
    // genCount++;
    extractValue(ddPercent);
    resetValues();
    // updateCanvas();
    //  //  drawTrees();
    // writeAlltypes();
    btnNextGen.style.display = "none";
    genLevel.innerHTML = "Generation Level: " + genCount;
};
btnPlayAgain.onclick = function () {
    deSelectTrees();
    isTestingBtnClicked = false;
    genCount = 1;
    setTreeType();
    shuffleTree();
    // updateCanvas();
    resetValues();
    // main();
    btnPlayAgain.style.display = "none";
    //  btnTestingTool.style.display="none";
    btnPlayAgain.style.display = 'none';
    genLevel.innerHTML = "Generation Level: " + genCount;
};
btnTestingTool.onclick = function () {
    deSelectTrees();
    isTestingBtnClicked = true;
    choiseCount = 0;
    genCount = 1;
    setTreeType();
    shuffleTree();
    // updateCanvas();
    resetValues();
    btnPlayAgain.style.display = "none";
    btnTestingTool.style.display = "none";
    scoreDiv.style.display = "none";
    scoreImgDiv.style.display = "none";
    calMain.style.display = "none";
    // drawTrees();
};
game.addEventListener("mousemove", (e) => {
    if (isTestingBtnClicked) {
        gameCursor.style.display = "flex";
        var clickX = e.clientX;
        var clickY = e.clientY;
        gameCursor.style.left = clickX + "px";
        gameCursor.style.top = clickY + "px";
        for (var i = 0; i < list.length; i++) {
            if (!treeList[i].isLocked && clickX >= treeList[i].pt.x && clickX <= (treeList[i].pt.x + treeList[i].width) && clickY >= treeList[i].pt.y && clickY <= (treeList[i].pt.y + treeList[i].height)) {
                treeList[i].writeType();
                gameCursor.className = "showTreeType";
            }
            else if (!treeList[i].isLocked) {
                treeList[i].deselectTree();
            }
        }
    }
    else {
        gameCursor.style.display = "none";
    }
});
game.addEventListener('click', (e) => {
    var clickX = e.clientX;
    var clickY = e.clientY;
    for (var i = 0; i < list.length; i++) {
        if (!treeList[i].isLocked && clickX >= treeList[i].pt.x && clickX <= (treeList[i].pt.x + treeList[i].width) && clickY >= treeList[i].pt.y && clickY <= (treeList[i].pt.y + treeList[i].height)) {
            userTrees[choiseCount++] = treeList[i];
            treeList[i].selectTree();
            if (choiseCount == 2) {
                if (isTestingBtnClicked)
                    isTestingBtnClicked = false;
                generateCombination();
                showResult();
                showResultDescription();
                choiseCount = 0;
                genCount++;
                if (score >= 50)
                    btnNextGen.style.display = "block";
                else {
                    btnPlayAgain.style.display = "block";
                }
                if (score == 100) {
                    btnNextGen.style.display = "none";
                    btnPlayAgain.style.display = "block";
                }
            }
        }
    }
    if (genCount == 4)
        isTestingBtnClicked = false;
    if (genCount == 4 && score <= 99 /* && !testingTool.isLocked  */ && !isTestingBtnClicked) {
        btnNextGen.style.display = "none";
        btnTestingTool.style.display = "block";
        btnPlayAgain.style.display = "block";
    }
});
//# sourceMappingURL=GameApp.js.map