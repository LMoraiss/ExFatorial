let num = 0;
let resultado = 1;

console.log("Informe o número da operação:");
process.stdin.once("data", function (data){
    num = parseInt(data.toString().trim())

    for ( let i = 1; i <= num; i++){
        resultado *= i 
    }
    console.log("O fatorial de " + num + " é " + resultado); 
process.exit();

})
