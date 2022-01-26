var answer = [1, 1, 0, 2, 1, 0, 1, 1, 1, 0, 0, 1, 0, 2, 0] //答えの配列 0:左 1:右 2:引き分け
var img_peer = new Array(15);
for (var i = 0; i < img_peer.length; i++) {
  img_peer[i] = "img/peer/" + (i + 1) + ".PNG";
}
var img_answer = new Array(15);
for (var i = 0; i < img_answer.length; i++) {
  img_answer[i] = "img/answer/" + (i + 1) + ".PNG";
}
var index = 0;

var startTime = 'Global'
var endTime = 'Global'

//以下ボタン処理
$(".btn-start").on("click", function() { //スタートボタン
  startTime = performance.now();
  $(this).closest(".container").hide();
  id = $(this).attr("href");
  $(id).fadeIn();
  document.getElementById("text_q").innerHTML = "<p class=\"text-center\">どちらが勝利すると思いますか？</p>";
})

$(".btn-enter").on("click", function() { //決定ボタン
  $("#err_radio_item p").remove(); //エラーメッセージがあれば消去
  var val = $('input[type="radio"]:checked').val();
  //document.getElementById("debug").innerHTML = "<p class=\"text-center\">チェック：" +  val + "</p>";
  if (val != undefined) {
    $("#btn-enter").prop("disabled", true);
    $("#btn-next").prop("disabled", false);
    $('input[type="radio"]').prop("disabled", true);

    if (index < 15) { //１５問目まで
      document.getElementById("img-peer").src = img_answer[index];
      document.getElementById("text_q").innerHTML = "<p class=\"text-center\">ルールを予想してロボットに説明してください</p>";
    } else {
      document.getElementById("text_q").innerHTML = "エラー：異常な遷移です";
    }
  } else {//ラジオボタンが選択されていないとき
    $("#err_radio_item").append("<p><i class=\"fa fa-exclamation-triangle\"></i>勝敗を選択してください。</p>");
  }
})

$(".btn-next").on("click", function() { //次へボタン
  $("#btn-next").prop("disabled", true);
  $("#btn-enter").prop("disabled", false);
  $('input[type="radio"]').prop("checked", false);
  $('input[type="radio"]').prop("disabled", false);
  index++;
  if (index < 3) { //１５問目まで
    document.getElementById("img-peer").src = img_peer[index];
    //document.getElementById("text_q").innerHTML = (index + 1) + "問目の画像：" + img_peer[index];

    document.getElementById("text_q").innerHTML = "<p class=\"text-center\">どちらが勝利すると思いますか？</p>";
  } else {
    endTime = performance.now();
    var jikan = endTime - startTime
    //document.getElementById("time").innerHTML = "<p class=\"text-center\">開始時間：" + startTime + "終了時間：" + endTime + "</p>"
    document.getElementById("time").innerHTML = "<p class=\"text-center\">実行時間：" + jikan + "</p>";

    $(this).closest(".container").hide();
    $("#last").fadeIn();
  }
})

$(".btn-review").on("click", function() { //過去の結果表示ボタン
  $(this).closest(".container").hide();
  id = $(this).attr("href");
  $(id).fadeIn();
  s = ""
/*
  s += '<ul id="gallery" >'
  for(var i = 0; i < index; i++) {
    s += '<li class="item"><img src="img/answer/' + (i + 1) + '.PNG"></li>';
  }
  s += '</ul>'
*/

  for(var i = 0; i < index; i++) {
    s += '<img id="img-answer" src="img/answer/' + (i + 1) +'.PNG" class="img-fluid rounded mx-auto d-block" style="width:20%; max-width: 50%; height: auto;" alt="Unable to display image.">';
  }
  document.getElementById("img-review").innerHTML = s;
})
