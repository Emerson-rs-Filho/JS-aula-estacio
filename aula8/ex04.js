let pessoa = {
    nome: 'Emerson',
    idade: 20,
    profissao: 'estagiario',
    get idadeAumentada() {
        return this.idade + 1;
    }
}
pessoa['aniversario'] = '21/01/2003';
console.log(pessoa.idadeAumentada);
console.log(pessoa);