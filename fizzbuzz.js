//fizzbuzz問題：倍数を出力する
const fizzbuzz = () => {
    
    let result = document.getElementById('out-result');

    //テキストボックスの値取得
    const txfn = document.getElementById('fizznum').value;
    const txbn = document.getElementById('buzznum').value;

    //初期化
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

    //要件：文字列・空欄・小数の判定
    const isError = v => {
        let iv = parseInt(v, 10);
        let fv = parseFloat(v);
        return isNaN(iv) || (fv !== iv);
    };

    //エラーチェック
    if (isError(txfn) || isError(txbn)) {
        let msg = document.createElement('p');
        msg.className = "result";
        msg.innerText = "整数値を入力してください";
        result.appendChild(msg);
        return;
    }

    //初期化
    let ul = document.createElement('ul');
    ul.className = "result";
    const fn = parseInt(txfn);
    const bn = parseInt(txbn);

    let fi = 1;
    let fm = fn * fi;

    let bi = 1;
    let bm = bn * bi;

    //要件：倍数を計算して二桁まで表示する。
    while((fm < 100) || (bm < 100)){

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

        //倍数計算処理
        fm = fn * fi;
        bm = bn * bi;

    }

    //fizzNum,buzzNum両方三桁以上の数字を入力された場合の対処
    if (ul.hasChildNodes()) {
        result.appendChild(ul);
    }
 
};