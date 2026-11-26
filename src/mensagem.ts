import { Contatinho } from "./contatinho";


export abstract class Mensagem {
    private destinatario: Contatinho;
    private horaEnvio: string;
    private conteudo: string;

    constructor(destinatario: Contatinho, horaEnvio: string, conteudo: string) {
        this.destinatario = destinatario;
        this.horaEnvio = horaEnvio;
        this.conteudo = conteudo;
    }


    public getDestinatario(): Contatinho {
        return this.destinatario;
    }

    public getHoraEnvio(): string {
        return this.horaEnvio;
    }

    public getConteudo(): string {
        return this.conteudo;
    }


    public abstract toString(): void;
}