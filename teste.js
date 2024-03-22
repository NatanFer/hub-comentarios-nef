
const dataAtual = new Date();
// let data = dataAtual.getDay() +'de'+ ''+ dataAtual.getMonth()+''+dataAtual.getHours() + ':' + dataAtual.getMinutes();
const opcoesFormatacao = { day: 'numeric', month: 'short', hour:'numeric'};
const hora=dataAtual.getHours();
  const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoesFormatacao);
const dataEhora=(dataFormatada)
  console.log(dataFormatada+'hr');
