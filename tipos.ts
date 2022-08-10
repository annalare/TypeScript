// boolean
const contaPaga: boolean = false;

//number
const idade: number = 23;
const avaliacao: number = 4.5;

//string
const nome: string = "Larissa Mendes";

//Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 59, 46, 69998];

//Tuple
let jogadores: [string, number, boolean];
jogadores = ["Larissa", 3, false];

//Enum
enum StatusAprovacao {
  Aprovado = "001",
  Pendente = "002",
  Rejeitado = "003",
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [123, "lari", false];
const retornoDaAPI2: any = {};

//Void
function printarNaTela(msg: string): void {
  console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(objeto: object) {}
criar({
  propriedade: 1,
});

//Never
function loopInfinito(): never {
  while (true) {}
}
function erro(mensagem: string): never {
  throw new Error(mensagem);
}
function falha() {
  return erro("Algo falhou");
}

// Union Types
const nota: string | number = 5;

function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`);
}
exibirNota("10");
exibirNota(10);

//Alias

type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
};

//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [
  {
    nome: "Larissa",
    sobrenome: "Mendes",
    dataNascimento: new Date(),
  },
  {
    nome: "Guilherme",
    sobrenome: "Melo",
    dataNascimento: new Date(),
  },
];
function tratarFuncionarios(funcionarios: Funcionario[]) {
  for (let funcionario of funcionarios) {
    console.log("Nome do funcionario: ", funcionario.nome);
  }
}

//Nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string;
};
const contato: Contato = {
  nome: "Larissa",
  telefone1: "121434",
};

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
//(<number>minhaIdade).toString();

//const input = document.getElementById("numero4") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero4");
console.log(input.value);
