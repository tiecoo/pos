/** Considerando a lista de alunos abaixo... **/
const alunos = [
    {nome: 'Rogério Mattos', idade: 25, sexo: 'M'},
    {nome: 'Ana Luíza', idade: 23, sexo: 'F'},
    {nome: 'Paulo Roberto', idade: 21, sexo: 'M'},
    {nome: 'Maria da Silva', idade: 21, sexo: 'F'}
  ];
  
  /** 1º Passo - Funções auxiliares de array **/
  // for (var i = 0; i < alunos.length;i++){
  //   console.log(alunos[i]);
  // }
  
  // alunos.forEach(function(aluno){
  //   console.log(aluno);
  // })
  
  var alunas = alunos.filter(function(aluno){
    return aluno.sexo === "F";
  })
  console.log(alunas)
  /** 2º Passo - Declaração de variáveis com const e let **/
  //const is read only
  //let is local var
  /** 3º Passo - Utilização de arrow functions **/
  alunos.forEach(aluno =>console.log(aluno))
  alunos.forEach(aluno =>console.log(`Bom dia ${aluno.nome}`))
  
  /** 4º Passo - Iterar com laço for...of **/
  
  /** 5º Passo - Exibir uma mensagem de boa tarde para cada um dos alunos (template strings) **/