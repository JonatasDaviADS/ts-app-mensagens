# App de Mensagens - TypeScript 

Sistema simples de troca de mensagens com contatos e três tipos de mensagem(Texto, Áudio e Foto), feito a partir de um diagrama de classes. 

## Conceitos 
- **Classe abstrata:** `Mensagem`
- **Herança:** `MsgTexto`, `MsgAudio`, `MsgFoto` 
- **Agregação:** `Whatsapp` ◇ `Contatinho`
-- **Composição:** `Whatsapp` ◆ `Mensagem`
-- **Encapsulamento:** atributos `private` com getters

## Como rodar
```bash
npm install 
npm run build
npm start
```