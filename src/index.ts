import { Contatinho } from "./Contatinho";
import { Whatsapp } from "./Whatsapp";

const ana = new Contatinho("Ana", "(51) 99999-1111");
const bruno = new Contatinho("Bruno", "(51) 98888-2222");
const desconhecido = new Contatinho("Carlos", "(51) 97777-3333");

const app = new Whatsapp();
app.adicionarContato(ana);
app.adicionarContato(bruno);

app.enviarTexto(ana, "14:30", "Oi, Ana! Tudo bem?");
app.enviarAudio(bruno, "14:32", "audio_bruno.mp3", 45);
app.enviarFoto(ana, "14:35", "foto_praia.jpg", 2048);

app.enviarTexto(desconhecido, "14:40", "Quem é você?");

app.listarContatos();
app.listarMensagens();

