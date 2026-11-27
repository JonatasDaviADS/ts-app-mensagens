import { Contatinho } from "./Contatinho";
import { Mensagem } from "./Mensagem";

export class MsgFoto extends Mensagem {
    private tamanho: number;

    constructor(destinatario: Contatinho, horaEnvio: string, conteudo: string, tamanho: number) {
        super(destinatario, horaEnvio, conteudo);
        this.tamanho = tamanho;
    }

    public toString(): void {
        console.log(`[${this.getHoraEnvio()}] 📷 Foto para ${this.getDestinatario().getNome()}: ${this.getConteudo()} (${this.tamanho} KB)`);
    }
}