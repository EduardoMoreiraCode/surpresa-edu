const container = document.querySelector('.container');
const yesBtn = document.querySelector('.yes_btn');
const noBtn = document.querySelector('.no_btn');

const noAnswerMethod = () =>
{
    noBtn.style.position = 'absolute';
    // adicionando uma posição randomica qdo eu clicar
    const xPosition = Math.floor(Math.random() * container.clientWidth);
    const yPosition = Math.floor(Math.random() * container.clientHeight);

    // noBtn.style.left = `${xPosition}px`;
    // noBtn.style.top = `${yPosition}px`;

    noBtn.style.left = xPosition >= container.clientWidth / 2 ? `${xPosition - noBtn.clientWidth}px` : `${xPosition}px`;
    noBtn.style.top = yPosition >= container.clientHeight / 2 ? `${yPosition - noBtn.clientHeight}px` : `${yPosition}px`;
}

//no_btn was done

yesBtn.addEventListener('click',() =>{
    container.innerHTML = '<h2>Ebaaaa 🎉🎉🎉</h2>'
    alert("Você aceitou!!!")
    confirm("De primeira mesmo?")
    document.querySelector('h2').style.fontSize="2rem";
})

noBtn.addEventListener('click', noAnswerMethod);


function reset()
{
    location.reload();
}



// var count = 0;
// function contagem()
// {
//     count++;
//     if(count === 1)
//     {
//         alert("Dica: o botão \"SIM\" é o da esquerda!");
//     }

//     if(count === 4)
//     {
//         alert("Leve em consideração o esforço e dedicação que eu tive" + "\n" + "enquanto desenvolvia esse código difícil e complexo!");
//     }

//     if(count === 7)
//     {
//         alert("Um cara que toca violão, desenvolve códigos... " +"\n"+ "Não se encontra em qualquer lugar..."+"\n"+ "É só uma dica...");
        
//     }

//     if(count === 8)
//     {
//         count=0;
//     }
// }