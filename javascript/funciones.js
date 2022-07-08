//funcion declaradas

function funcionDeclarada() {
  console.log("uno");
  console.log("dos");
  return "dato otakusf";
}

let valor = funcionDeclarada();

console.log(valor);


function funcionConParametros(valor){
    console.log(valor)
}


funcionConParametros("hola mundo");

function funcionConParametrosPorDefecto(valor="valor defecto", valor1=15){
    console.log(valor)
    console.log(valor1)
}

funcionConParametrosPorDefecto(valor);


//Funciondes declaradas VS funciones expresadas
funciondeclarada2()

function funciondeclarada2()
{
    console.log("esta es una funcion declarada, puede invocarse en cualquier parte del codigo incluso antes de que la funcion sea declarada")
}

funciondeclarada2()

//funcion expresadas, funcion anonimas

//si se llama antes de ser creada a una funcion expresada da un error
const funcionExpresada= function (){
    console.log("esta es una funcion expresada asignada a una variable, si invocamos esta funcion antes de su definicion JS nos dira....")
}

funcionExpresada()