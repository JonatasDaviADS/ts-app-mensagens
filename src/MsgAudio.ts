import { Contatinho } from "./Contatinho";
import { Mensagem } from "./Mensagem";

export class MsgAudio extends Mensagem {
    private duracao: number;

    constructor(destinatario: Contatinho, horaEnvio: string, conteudo: string, duracao: number) {
        super(destinatario, horaEnvio, conteudo);
        this.duracao = duracao;
    }

    public toString(): void {
        console.log(`[${this.getHoraEnvio()}] 🎤 Áudio para ${this.getDestinatario().getNome()}: ${this.getConteudo()} (${this.duracao} segundos)`);
    }
}