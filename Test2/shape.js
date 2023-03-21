

function numberOneTriangle() {
    let number = document.getElementById('draw').value
    let emtyPlace = '';
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    for (let i = 0; i < number; i++) {
        emtyPlace += '#';
        let newDiv = document.createElement('div');
        newDiv.innerHTML = emtyPlace;
        resultDiv.appendChild(newDiv);
    }
}