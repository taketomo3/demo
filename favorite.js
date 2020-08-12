

// (function($){
//     $(document).ready(function(){
//         $("[id=element]").hide();

//         $("[id=btn]").hover(function(){
//             $("[id=element]").toggle();
//         });
//     });
// })(jQuery);
// (function($){
//     $(document).ready(function(){
//         $("[id=element]").hide();

//         $("[id=btn]").hover(function(){
//             $("[id=element]").toggle();
//         });
//     });
// })(jQuery);

// (function($){
//   $(document).ready(function(){
//     $('#pict2').hide();

//     $('.country-item1').click(function(){
//       $('#pict2').toggle();
//     });
//   });
// })(jQuery);

$(function(){
  var box = $('.js_target');//検索対象のDOMを格納する
  var conditions = $('.js_conditions');//現在の条件の選択状況を保持するオブジェクト
  var findConditions;//各data-typeの子要素(input)を格納する
  var currentType;//現在のdata-typeを示す
  var checkcount = 0;//各data-typeのチェックボックス選択数
  var data_check = 0;//対象項目のデータがどれだけチェック状態と一致しているか
 
  var condition ={};//チェックボックスの入力状態を保持するオブジェクト
  
  for(var i = 0; i < conditions.length; i++){//ターゲットのdata-typeを参照し、メソッドとしてconditionに個別に代入する
    currentType = conditions[i].getAttribute('data-type');
    condition[currentType] = [];
  }
 
  function setConditions(){//条件設定
 
    box.removeClass('js_selected');
 
    for(var i = 0; i < conditions.length; i++){//data-typeごとの処理
 
      currentType = conditions[i].getAttribute('data-type');
 
      findConditions = conditions[i].querySelectorAll('input');
 
      for(var n = 0; n< findConditions.length; n++){//inputごとの処理
 
        if(findConditions[n].checked){//現在選択中のインプットが選択されている場合
          condition[currentType][findConditions[n].value] = true;
          checkcount++
        } else {
          condition[currentType][findConditions[n].value] = false;
        }
        if(findConditions.length === n+1){//ループが最後の場合
          if(checkcount === 0){
            for(var t = 0; t < findConditions.length; t++){
              condition[currentType][findConditions[t].value] = true;
            }
          }
          checkcount = 0;
        }
      }
    }
 
 
    for(var m = 0, len = box.length; m< len; ++m){//最初に取得したターゲットの情報と、現在のinputの選択状態を比較して処理を行う
 
      for(var i = 0; i < conditions.length; i++){//ターゲットのdata-typeを参照し、メソッドとしてconditionに個別に代入する
        currentType = conditions[i].getAttribute('data-type');
         
        if(condition[currentType][$(box[m]).data(currentType)]){
          data_check++;
        } else {
 
        }
      }
 
        if(data_check === conditions.length){
          $(box[m]).addClass('js_selected');
        }else{
 
        }
        data_check = 0;
 
    }
  }
 
  setConditions();
 
  $(document).on('click','input',function(){
 
    setConditions();
 
  });
 
});