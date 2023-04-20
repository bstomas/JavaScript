function imcCalculator(event) {
    //inputs
    const userName = document.querySelector(".name-js").value;
    const height = +document.querySelector(".height-js").value;
    const weight = +document.querySelector(".weight-js").value;

    // Lógica

    const imc = weight / height ** 2;

    let classification = undefined;
    let textColor = undefined;

    if (imc <= 18.5) {
        classification = "Baixo peso";
        textColor = "Blue";
    }
    else if (imc < 24.9) {
        classification = "Normal";
        textColor = "green";
    }
    else if (imc < 29.9) {
        classification = "Sobrepeso";
        textColor = "yellow";
    }
    else if (imc < 34.9) {
        classification = "Obesidade";
        textColor = "orange";
    }
    else if (imc < 39.9) {
        classification = "Obesidade mórbida";
        textColor = "red";
    }
    else {
        classification = "Obesidade mórbida muito grave";
        textColor = "brown";
    }

    // Outputs

    document.querySelector(".result-js").innerHTML = `<p>Olá, ${userName}! De acordo com os dados informados, o seu IMC é de ${imc.toFixed(3)}<br>
    Na classificação da OMS, tu te enquadras em <span class="${textColor}">${classification}.</span></p>`;

}



