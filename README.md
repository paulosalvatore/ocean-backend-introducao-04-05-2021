# Introdução ao Backend com NodeJS

**Para rodar Node na sua máquina:**
https://nodejs.org/en/download/

**VSCode - Editor de Códigos (IDE)**
https://code.visualstudio.com/download

**Postman** - Para testar requisições Rest (existem vários outros) - Também pode ser o Insomnia ou a versão Web do Postman, mas recomendo para seguir a aula usar o Postman instalado no PC
https://www.postman.com/downloads/

**JSON Viewer** (Extensão chrome) - Opcional
https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=pt-BR

## O que é backend?

- **Servidor com 1 camada**
  - Mainframe, acesso pelo terminal, terminal apenas para envio de comandos.
- **Servidor com 2 camadas**
  - Frontend e Backend
  - **Frontend Web**
    - Exibir dados e informações de maneira visual
    - **Lógica de Apresentação:** uso de linguagem de programação para exibir informações
    - **Linguagens usadas no frontend web:** HTML (estrutura - linguagem de marcação), CSS (estilos - linguagem de estilização) e JavaScript (comportamento - linguagem de programação)
    - O frontend está sempre 100% exposto e vulnerável.
  - **Backend**
    - Fornecer dados e informações para que o frontend exiba
    - Processa requisições do frontend e trabalha com os dados
    - Conversa com o banco de dados (possui dados e senhas de acesso)
    - É a principal camada de proteção/segurança da nossa aplicação
    - **Lógica de Negócios:** uso de linguagem de programação para estruturar e organizar informações
    - **Linguagens usadas no backend:** Praticamente qualquer linguagem de programação consegue realizar essa ação.
      - **As mais comuns são:** NodeJS (JavaScript), Java/Kotlin, PHP, Python, C#, C++, ...
      - **Frameworks?** NodeJS (Express, Nest), Java/Kotlin (Spring), Kotlin (Ktor), PHP (Laravel, CodeIgniter, CakePHP, Yii, ...), Python (Django, Flask), C# (.NET Core), C++ (...)
    - **Biblioteca vs Framework:**
      - **Biblioteca:** alguns arquivos de programação que tentam resolver um problema específico
      - **Framework:** várias bibliotecas organizadas de uma certa maneira para resolver vários problemas relacionados a uma determinada implementação. É muito comum também os frameworks fornecerem um padrão de arquitetura de projetos.
        - **Exemplo com API:** Comunicação HTTP, serialização de dados, transformar objetos nativos em formato JSON, renderização de conteúdo.
    - **NodeJS é um motor: interpretador!**
    - **Interpretador vs Compilador**
      - **Interpretador:** Recebe um arquivo de código e executa imediatamente.
        - NodeJS é escrito em C++.
        - NodeJS é um software como qualquer outro.
        - O NodeJS é um motor (software) escrito em C++ pra interpretar JavaScript!
      - **Compilador:** Um software que recebe um arquivo de código e converte esse código para um arquivo binário.
      - Esse arquivo binário será executado pelo sistema operacional.
- **Servidor multicamadas**
  - Mais de um frontend
  - Mais de um backend
  - Quantos servidores eu quiser.
  - É como se eu quebrasse o backend em várias aplicações.
  - Arquitetura de microsserviços
- **REST:** comunicação via protocolo HTTP utilizando alguns verbos
  - **Verbos (ou Methods):** CREATE, GET, PUT, DELETE, ...
  - **CREATE:** criar registros
  - **GET:** ler registros
  - **PUT:** atualizar registros
  - **DELETE:** remover registros
- **Node e NPM:**
  - Node Package Manager: Gerenciador de pacotes do Node
  - Todas as bibliotecas serão acessadas/instaladas pelo NPM
  - NPM salva todas as informações do projeto em um arquivo chamado `package.json`.

## HTTP

- **URL:** http://localhost:3000/
- **Protocolo:** HTTP
- **Endereço:** localhost (IP: 127.0.0.1)
- **Porta:** 3000
- **Método:** GET
- **Endpoint (rota):**
  - `/`: informações da aplicação
  - `/hello`: Hello, world!
  - `/mensagens`: Exibe a lista de mensagens



- **Google URL:** https://google.com
- **Protocolo:** HTTPS
- **Endereço:** google.com
- **Porta:** 80



- **Globo URL:** https://globo.com
- **Protocolo:** HTTPS
- **Endereço:** globo.com (IP: 186.192.90.12)
- **Porta:** 80