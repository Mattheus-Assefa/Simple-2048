// I don't know what I should call creation to make it understandable.

let Score = 0;

let Field = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

// done
function Move_Left() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        let creation = 10;
        for (let j = 1; j < 4; j++) {
            if(Field[i][j] == 0){
                continue;
            }
            else if (Field[i][j - 1] == 0) {
                moved = true;
                Field[i][j - 1] = Field[i][j];
                Field[i][j] = 0;
                if (j - 2 >= 0) {
                    j -= 2;
                } else {
                    j = 1;
                }
            } 
            else if(creation == j - 1 || creation == j){
                continue;
            }
            else if (Field[i][j - 1] == Field[i][j]) {
                if (creation == 10) {
                    creation = j - 1;
                }
                moved = true;
                Score += Field[i][j] * 2;
                Field[i][j - 1] *= 2;
                Field[i][j] = 0;
            }
            creation = 10;
        }
    }
    if(moved == true){
        Create_Random_Number();
    }
}

// done
function Move_Right() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        let creation = 10;
        for (let j = 2; j >= 0; j--) {
            if(Field[i][j] == 0){
                continue;
            }
            else if (Field[i][j + 1] == 0) {
                moved = true;
                Field[i][j + 1] = Field[i][j];
                Field[i][j] = 0;
                if (j + 2 <= 3) {
                    j += 2;
                } else {
                    j = 2;
                }
            }
            else if(creation == j + 1 || creation == j){
                continue;
            }
            else if (Field[i][j + 1] == Field[i][j]) {
                if (creation == 10) {
                    creation = j + 1;
                }
                moved = true;
                Score += Field[i][j] * 2;
                Field[i][j + 1] *= 2;
                Field[i][j] = 0;
            }
        }
        creation = 10;
    }
    if(moved == true){
        Create_Random_Number();
    }
}

// done
function Move_Up() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        let creation = 10;
        for (let j = 1; j < 4; j++) {
            if(Field[j][i] == 0){
                continue;
            }
            else if (Field[j - 1][i] == 0) {
                moved = true;
                Field[j - 1][i] = Field[j][i];
                Field[j][i] = 0;
                if (j - 2 >= 0) {
                    j -= 2;
                } else {
                    j = 1;
                }
            }
            else if(creation == j - 1 || creation == j){
                continue;
            }
             else if (Field[j - 1][i] == Field[j][i]) {
                if (creation == 10) {
                    creation = j - 1;
                }
                moved = true;
                Score += Field[j][i] * 2;
                Field[j - 1][i] *= 2;
                Field[j][i] = 0;
            }
        }
        creation = 10;
    }
    if(moved == true){
        Create_Random_Number();
    }
}

// done
function Move_Down() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        let creation = 10;
        for (let j = 2; j >= 0; j--) {
            if(Field[j][i] == 0){
                continue;
            }
            if (Field[j + 1][i] == 0) {
                moved = true;
                Field[j + 1][i] = Field[j][i];
                Field[j][i] = 0;
                if (j + 2 <= 3) {
                    j += 2;
                } else {
                    j = 2;
                }
            } 
            else if(creation == j + 1 || creation == j){
                continue;
            }
            else if (Field[j + 1][i] == Field[j][i] ) {
                if (creation == 10) {
                    creation = j + 1;
                }
                moved = true;
                Score += Field[j][i] * 2;
                Field[j + 1][i] *= 2;
                Field[j][i] = 0;
            }
        }
        creation = 10;
    }
    if(moved == true){
        Create_Random_Number();
    }
}

// done
function Full_Board() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (Field[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

// done
function Empty_Board() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (Field[i][j] != 0) {
                return false;
            }
        }
    }
    return true;
}

// done
function Reset_Board() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            Field[i][j] = 0;
        }

    }
    Create_Random_Number();
    Score = 0;
    Display();
}

function Create_Random_Number() {
    if (Full_Board() == true) {
        return;
    }

    let number_created = 2;

    // 1 in 10 chance to get 4
    if (Return_Random(11) == 1) {
        number_created = 4;
    }

    let placed = false;

    while (placed == false) {
        let y = Return_Random(4);
        let x = Return_Random(4);
        if (Field[y][x] == 0) {
            placed = true;
            Field[y][x] = number_created;
        }
    }
}

function Return_Random(value){
    return Math.floor(Math.random() * value);
}

function Display(){
    let ids = 1;
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){

            switch(Field[i][j]){
                case 0:
                    document.getElementById(ids.toString()).style.color = "gray";
                    document.getElementById(ids.toString()).style.background = "gray";
                    break;
                case 2:
                    document.getElementById(ids.toString()).style.color = "#776e65";
                    document.getElementById(ids.toString()).style.background = "#eee4da";
                    break;
                case 4:
                    document.getElementById(ids.toString()).style.color = "#776e65";
                    document.getElementById(ids.toString()).style.background = "#eee1c9";
                    break;
                case 8:
                    document.getElementById(ids.toString()).style.color = "#f9f6f2";
                    document.getElementById(ids.toString()).style.background = "#f3b27a";
                    break;
                case 16:
                    document.getElementById(ids.toString()).style.color = "#f9f6f2";
                    document.getElementById(ids.toString()).style.background = "#f69664";
                    break;
                case 32:
                    document.getElementById(ids.toString()).style.color = "#f9f6f2";
                    document.getElementById(ids.toString()).style.background = "#f77c5f";
                    break;
                case 64:
                    document.getElementById(ids.toString()).style.color = "#f9f6f2";
                    document.getElementById(ids.toString()).style.background = "#f75f3b";
                    break;  
                case 128:
                    document.getElementById(ids.toString()).style.color = "#f9f6f2";
                    document.getElementById(ids.toString()).style.background = "#edd073";
                    break;
                case 256:
                    document.getElementById(ids.toString()).style.color = "#f9f6f2";
                    document.getElementById(ids.toString()).style.background = "#edcc62";
                    break;
                case 512:
                    document.getElementById(ids.toString()).style.color = "#f9f6f2";
                    document.getElementById(ids.toString()).style.background = "#edc950";
                    break;
                case 1024:
                    document.getElementById(ids.toString()).style.color = "#f9f6f2";
                    document.getElementById(ids.toString()).style.background = "#edc53f";
                    break;
                case 2048:
                    document.getElementById(ids.toString()).style.color = "#f9f6f2";
                    document.getElementById(ids.toString()).style.background = "#edc22e";
                    break;
                case 4096:
                    document.getElementById(ids.toString()).style.color = "f9f6f2";
                    document.getElementById(ids.toString()).style.background = "#ee82ee";
            }
            document.getElementById(ids.toString()).innerHTML = Field[i][j];
            ids++;
        }
    }
    document.getElementById("score").textContent = Score;
}

function Game_Over(){
    if(Full_Board() == false){
        return false;
    }

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            let up = true;
            let down = true;
            let right = true;
            let left = true;

            if(i == 0){
                up = false;
            }
            else if(i == 3){
                down = false;
            }

            if(j == 0){
                left = false;
            }
            else if(j == 3){
                right = false;
            }

            if(up == true){
                if(Field[i][j] == Field[i + 1][j]){
                    return false;
                }
            }
            else if(down == true){
                if(Field[i][j] == Field[i - 1][j]){
                    return false;
                }
            }

            if(left == true){
                if(Field[i][j] == Field[i][j + 1]){
                  return true;
                }
            }
            else if(right == true){
                if(Field[i][j] == Field[i][j - 1]){
                  return true;
                }
            }
        }
    }
    return true;
}



if(Empty_Board() == true){
    Create_Random_Number();
    Display();
}



document.addEventListener(
    "keydown",
    function (event) {
        if (event.keyCode == 37) {
            //Left Arraw
            Move_Left();
            Display();
        } else if (event.keyCode == 38) {
            //Up Arrow
            Move_Up();
            Display();
        } else if (event.keyCode == 39) {
            //Right Arrow
            Move_Right();
            Display();
        } else if (event.keyCode == 40) {
            //Down Arrow
            Move_Down();
            Display();
        }
    },
    true
);

