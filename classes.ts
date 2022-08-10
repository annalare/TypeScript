class Data {
  public dia: number;
  mes: number;
  ano: number;

  constructor(dia: number, mes: number, ano: number) {
    this.dia = dia;
    this.mes = mes;
    this.ano = mes;
  }
}
const data = new Data(1, 1, 2022);
console.log(data.dia);
