

function btnLogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const resultado = document.getElementById("resultado");

    if (usuario === "kehlani" && senha === "ant3d3gm0n") {
        resultado.textContent = "Acesso permitido";
        resultado.classList.add("sucesso");
    } else {
        resultado.textContent = "Acesso negado!";
        resultado.classList.remove("sucesso");
    }
}