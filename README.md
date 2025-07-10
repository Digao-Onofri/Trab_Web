# Garagem Digital

Este é um projeto desenvolvido com o objetivo de propiciar uma vitrine digital de carros, proporcionando praticidade para adição, deleção e atualização dos carros catálogados

## Principais tecnologias utilizadas

• Frontend: React Js, Css, Zod e React-hot-toast.

• Backend: Next Js e bcrypt

## Instalação local

Primeiramente clone o repositório ou baixe os arquivos.

### Utilização

1. Instale as dependências no terminal com o comando:

   ```bash
   npm install
   ```
   
   ```bash
   npm i zod
   ```
   
   ```bash
   npm i react-hot-toast
   ```
   
   ```bash
   npm i bcrypt
   ```

2. Crie um arquivo chamado .env na raiz (projeto-final) e copie para dentro do arquivo o resultado que obtiver do comando seguinte do terminal:

    ```bash
    node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
    ```
Lembre-se que o conteúdo do arquivo deve ser no seguinte padrão:
TOKEN="resultado_do_código"

3. Inicie o servidor:

   ```bash
   npm run dev
   ```

Após realizar todos os passos descritos, acesse a URL do servidor do frontend em seu navegador e a aplicação estará pronta para uso.
