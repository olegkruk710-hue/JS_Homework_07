const clickMessage = document.querySelector("#counter");
const btnCounter = document.querySelector('#btn-1');
let counter1 = 0;


btnCounter.addEventListener("click", function(event) {
    if (event.shiftKey) {
        counter1 += 5;
        clickMessage.textContent = `${counter1}`
        console.log(event.type)
        return;
    }
    counter1 += 1;
    clickMessage.textContent = `${counter1}`
    console.log(event.type);
});

clickMessage.addEventListener("dblclick", function(event) {
        counter1 = 0;
        clickMessage.textContent = `${counter1}`;
        console.log(event.type);
})




const colorBlock = document.querySelector(".ex-2");
const btnColorChange = document.querySelectorAll(".ex-2 button");

btnColorChange.forEach(function(btn) {
    btn.style.color = String(btn.id)
});

colorBlock.addEventListener("click", function(event) {
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    colorBlock.style.backgroundColor = event.target.style.color;
});




const result = document.querySelector("#result");
const charsCounter = document.querySelector("#chars");
const input3 = document.querySelector("#input3");

charsCounter.textContent = `Символов: 0`
result.textContent = `Длина сообщения: ...`


input3.addEventListener("input", function(event) {
    charsCounter.textContent = `Символов: ${event.target.value.length}`
    if (event.target.value.length > 20) {
        charsCounter.style.color = "red";
    } else {
        charsCounter.style.color = "white";
    }
})

input3.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        result.textContent = `Длина сообщения: ${input3.value.length}`
    }

    if (event.key === "Backspace") {
        result.textContent = "Длина сообщения: ..."
    }
})




const resultText = document.querySelector("#resultText");
const priceInput = document.querySelector("#priceInput");
const countInput = document.querySelector("#countInput");
const btnCalc = document.querySelector("#btnCalc");

btnCalc.addEventListener("click", function(event) {
    event.preventDefault();

    let price = priceInput.value.trim();
    let count = countInput.value.trim();
    if (!price || !count) {
        return;
    }

    if ((isNaN(price) || isNaN(count)) || (!price || !count)) {
        resultText.textContent = "Введите корректные значения"
        return;
    }

    let result;
    result = Number(price) * Number(count);
    if (result < 0) {
        resultText.textContent = "Введите положительные значения";
        return;
    }
    resultText.textContent = `К оплате: ${result} тг`

})
