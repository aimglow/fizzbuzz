//fizzbuzz問題：倍数を出力する
const fizzbuzz = () => {

    let result = document.getElementById('res00001');

    //テキストボックスの値取得
    const fn = parseInt(document.getElementById('fizznum').value);
    const bn = parseInt(document.getElementById('buzznum').value);

    //初期化
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

    //要件：文字列・空欄・小数の判定
    const isError = v => {
        let jv = parseInt(v, 10);
        return isNaN(jv) || (jv !== v);
    };

    //エラーチェック
    if (isError(fn) || isError(bn)) {
        let msg = document.createElement('p');
        msg.className = "result";
        msg.innerText = "整数値を入力してください";
        result.appendChild(msg);
        return;
    }

    //初期化
    let ul = document.createElement('ul');

    let fm = fn;
    let fi = 1;

    let bm = bn;
    let bi = 1;

    //要件：倍数を計算して二桁まで表示する。
    while((fm < 100) && (bm < 100)){

        //倍数計算処理
        fm = fn * fi;
        bm = bn * bi;

        let li = document.createElement('li');
        li.className = "result";

        //要件：小さい順表示
        if (fm === bm) {
            //要件：公倍数の場合 : FizzBuzz出力
            li.innerText = "FizzBuzz" + " " + fm;
            fi++;
            bi++;
        } else if(fm < bm) {
            li.innerText = "Fizz" + " " + fm;
            fi++;
        } else {
            li.innerText = "Buzz" + " " + bm;
            bi++;
        }
        
        ul.appendChild(li);

    }

    //fizzNum,buzzNum両方三桁以上の数字を入力された場合の対処
    if (ul.hasChildNodes()) {
        result.appendChild(ul);
    }
 
};