export class Contatinho {
    private nome: string;
    private celular: string;

    constructor(nome: string, celular: string) {
        this.nome = nome;
        this.celular = celular;
    }

    public getNome(): string {
        return this.nome;
    }
    public getCelular(): string {
        return this.celular;
    }
}