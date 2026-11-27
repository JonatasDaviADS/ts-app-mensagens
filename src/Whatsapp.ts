import { Contatinho } from "./Contatinho";
import { Mensagem } from "./Mensagem";
import { MsgAudio } from "./MsgAudio";
import { MsgFoto } from "./MsgFoto";
import { MsgTexto } from "./MsgTexto";

export class Whatsapp {
    private contatos: Contatinho[] = [];
    private mensagens: Mensagem[] = [];


    public adicionarContato(contato: Contatinho): void {
        this.contatos.push(contato);
    }


    public enviarTexto(destinatario: Contatinho, horaEnvio: string, conteudo: string): void {
        if (!this.ehContato(destinatario)) return;
        this.mensagens.push(new MsgTexto(destinatario, horaEnvio, conteudo));
    }

    public enviarAudio(destinatario: Contatinho, horaEnvio: string, conteudo: string, duracao: number): void {
        if (!this.ehContato(destinatario)) return;
        this.mensagens.push(new MsgAudio(destinatario, horaEnvio, conteudo, duracao));
    }

    public enviarFoto(destinatario: Contatinho, horaEnvio: string, conteudo: string, tamanho: number): void {
        if (!this.ehContato(destinatario)) return;
        this.mensagens.push(new MsgFoto(destinatario, horaEnvio, conteudo, tamanho));
    }


    public listarContatos(): void {
        console.log(`=== Contatos (${this.contatos.length}) ===`);
        for (const contato of this.contatos) {
            console.log(`- ${contato.getNome()} | ${contato.getCelular()}`);
        }
    }

    public listarMensagens(): void {
        console.log(`=== Mensagens (${this.mensagens.length}) ===`);
        for (const mensagem of this.mensagens) {
            mensagem.toString();
        }
    }


    private ehContato(destinatario: Contatinho): boolean {
        if (!this.contatos.includes(destinatario)) {
            console.error(`Erro: ${destinatario.getNome()} não está nos seus contatos. Mensagem não enviada.`);
            return false;
        }
        return true;
    }
}