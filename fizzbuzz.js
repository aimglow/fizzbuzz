//fizzbuzz問題：倍数を出力する
function fizzbuzz(){

    var result = document.getElementById('res00001');

    //テキストボックスの値取得
    var fn = document.getElementById('fizznum').value;
    var bn = document.getElementById('buzznum').value;

    //初期化
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

    //エラーチェック
    if (isError(fn) || isError(bn)){
        var msg = document.createElement('p');
        msg.className = "result";
        msg.innerText = "整数値を入力してください";
        result.appendChild(msg);
        return;
    }

    //初期化
    var fi = 1; var bi = 1;
    var ul = document.createElement('ul');

    //数値へ型変換明示
    fn = parseInt(fn);
    bn = parseInt(bn);

    do{
        //倍数計算処理
        var fm = fn * fi;
        var bm = bn * bi;

        //要件：倍数を計算して二桁まで表示する。
        if (fm >= 100 && bm >= 100){
            
            //fizzNum,buzzNum両方三桁以上の数字を入力された場合の対処
            if (ul.hasChildNodes()) { 
                result.appendChild(ul);
            }
            return;
        }

        var li = document.createElement('li');
        li.className = "result";

        //要件：小さい順表示
        if(fm == bm){
            li.innerText = "FizzBuzz" + " " + fm;
            //要件：公倍数の場合 : FizzBuzz出力
            fi++; bi++;
        }else if(fm < bm){
            li.innerText = "Fizz" + " " + fm;
            fi++;
        }else{
            li.innerText = "Buzz" + " " + bm;
            bi++;
        }
        
        ul.appendChild(li);

    } while (true);
 
}

//エラーチェック
function isError(v) {

    var jv = parseInt(v, 10);

    if (isNaN(jv)){
        //要件：文字列・空欄の場合
        return true;
    }else if(jv != v){
        //要件：小数の場合
        return true;
    }

    return false;
}
