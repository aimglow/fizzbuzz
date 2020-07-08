//fizzbuzz問題：倍数を出力する
const fizzbuzz = () => {
    
    const result = document.getElementById("out-result");

    //テキストボックスの値取得
    const textFizzNum = document.getElementById("fizznum").value;
    const textBuzzNum = document.getElementById("buzznum").value;

    //初期化
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

    //要件：文字列・空欄・小数の判定
    const judgeInvalidValue = value => {
        const intValue = parseInt(value, 10);
        const floatValue = parseFloat(value);
        return isNaN(intValue) || (floatValue !== intValue);
    };

    //入力判定
    if (judgeInvalidValue(textFizzNum) || judgeInvalidValue(textBuzzNum)) {
        const message = document.createElement("p");
        message.className = "result";
        message.innerText = "整数値を入力してください";
        result.appendChild(message);
        return;
    }

    //初期化
    const ul = document.createElement("ul");
    ul.className = "result";
    const fizzNum = parseInt(textFizzNum);
    const buzzNum = parseInt(textBuzzNum);

    let fi = 1;
    let fizzMultiple = fizzNum * fi;

    let bi = 1;
    let buzzMultiple = buzzNum * bi;

    //要件：倍数を計算して二桁まで表示する。
    while((fizzMultiple < 100) || (buzzMultiple < 100)){

        const li = document.createElement("li");
        li.className = "result";

        //要件：小さい順表示
        if (fizzMultiple === buzzMultiple) {
            //要件：公倍数の場合 : FizzBuzz出力
            li.innerText = "FizzBuzz" + " " + fizzMultiple;
            fi++;
            bi++;
        } else if(fizzMultiple < buzzMultiple) {
            li.innerText = "Fizz" + " " + fizzMultiple;
            fi++;
        } else {
            li.innerText = "Buzz" + " " + buzzMultiple;
            bi++;
        }
        
        ul.appendChild(li);

        //倍数計算処理
        fizzMultiple = fizzNum * fi;
        buzzMultiple = buzzNum * bi;

    }

    //fizzNum,buzzNum両方三桁以上の数字を入力された場合の対処
    if (ul.hasChildNodes()) {
        result.appendChild(ul);
    }
 
};