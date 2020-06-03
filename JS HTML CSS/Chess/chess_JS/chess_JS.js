var desc = document.getElementById("desc");
var arr = ["A", "B", "C", "D", "E", "F", "G", "H"];

function drawInDesv(i, j){
    if ((i==1 && j==1) || (i==1 && j==10)
        || (i==10 && j==1) || (i==10 && j==10)) {
        newCell.innerText = " ";
        newCell.setAttribute("class", "angle")
    }
    if(j==1 && (i>1 && i<10) ||
        j==10 && (i>1 && i<10)){
        newCell.setAttribute("class", "left-size")
        newCell.innerText = 10-i;
    }
    
    if(i==1 && (j>1 && j<10) ||
        i==10 && (j>1 && j<10)){
        newCell.setAttribute("class", "topBottom-size")
        newCell.innerText = arr[j-2];
    }
    
    if((j%2==0)){
        
    }
    
    if((i>1 && i<10 && j>1 && j<10) &&
        (i%2==0 && j%2!=0)){
            newCell.setAttribute("class", "black")
        } 

    if((i>1 && i<10 && j>1 && j<10) &&
        (i%2!=0 && j%2==0)){
            newCell.setAttribute("class", "white")
        } 

}


for(var i = 1; i<=10; i++){
    var newRow = document.createElement("div");
    newRow.setAttribute("class", "row");
    for (var j = 1; j<=10; j++){
        var newCell = document.createElement("div");
        newCell.setAttribute("class", "cell");
        
        drawInDesv(i,j);
        newRow.appendChild(newCell);
    }
    desc.appendChild(newRow);

}