//fizzbuzz問題：倍数を出力する
const fizzbuzz = () => {
    
    const result = document.getElementById('out-result');

    //テキストボックスの値取得
    const txtfnum = document.getElementById('fizznum').value;
    const txtbnum = document.getElementById('buzznum').value;

    //初期化
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

    //要件：文字列・空欄・小数の判定
    const judgeInvalidValue = val => {
        const intVal = parseInt(val, 10);
        const floatVal = parseFloat(val);
        return isNaN(intVal) || (floatVal !== intVal);
    };

    //入力判定
    if (judgeInvalidValue(txtfnum) || judgeInvalidValue(txtbnum)) {
        const msg = document.createElement('p');
        msg.className = "result";
        msg.innerText = "整数値を入力してください";
        result.appendChild(msg);
        return;
    }

    //初期化
    const ul = document.createElement('ul');
    ul.className = "result";
    const fn = parseInt(txtfnum);
    const bn = parseInt(txtbnum);

    let fi = 1;
    let fm = fn * fi;

    let bi = 1;
    let bm = bn * bi;

    //要件：倍数を計算して二桁まで表示する。
    while((fm < 100) || (bm < 100)){

        const li = document.createElement('li');
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