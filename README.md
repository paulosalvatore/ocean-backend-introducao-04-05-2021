# Introdução ao Backend com NodeJS

## O que é backend?

- **Servidor com 1 camada**
  - Mainframe, acesso pelo terminal, terminal apenas para envio de comandos.
- **Servidor com 2 camadas**
  - Frontend e Backend
  - **Frontend Web**
    - Exibir dados e informações de maneira visual
    - **Lógica de Apresentação:** uso de linguagem de programação para exibir informações
    - **Linguagens usadas no frontend web:** HTML (estrutura - linguagem de marcação), CSS (estilos - linguagem de estilização) e JavaScript (comportamento - linguagem de programação)
  - **Backend**
    - Fornecer dados e informações para que o frontend exiba
    - Processa requisições do frontend e trabalha com os dados
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
- Servidor multicamadas