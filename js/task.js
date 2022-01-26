//【没】タスク進行画面の処理

var answer = [1,1,0,2,1,0,1,1,1,0,0,1,0,2,0] //答えの配列 0:左 1:右 2:引き分け

var img_peer = new Array(15);
for (var i = 0; i < img_peer.length; i++) {
  img_peer[i] = "../img/peer/" + i + ".PNG";
}

var ing_answer = new Array(15);
for (var i = 0; i < img_answer.length; i++) {
  img_answer[i] = "../img/answer/" + i + ".PNG";
}

var index = 0;
s = "";

document.getElementById("peer").src = s;

function next_clicked() { //次へボタン
  s = img_peer[3];
  document.getElementById("peer").src = s;
}

/*
for (var i = 0; i < img_peer.length; i++) {
  s = img_peer[i];
  document.getElementById("peer").innerHTML = s;
}
*/
