import { Contatinho } from "./Contatinho";
import { Mensagem } from "./Mensagem";

export class MsgTexto extends Mensagem {
    private numChar: number;

    constructor(destinatario: Contatinho, horaEnvio: string, conteudo: string) {
        super(destinatario, horaEnvio, conteudo);
        this.numChar = conteudo.length;
    }


    public toString(): void {
        console.log(`[${this.getHoraEnvio()}] 💬 Texto para ${this.getDestinatario().getNome()}: "${this.getConteudo()}" (${this.numChar} caracteres)`);
    }
}