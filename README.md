# EJTECS-BACKEND | Hacktoberfest 2023
Este é um projeto idealizado por [Arthur Soares](https://github.com/arthur-mts) e [JV](https://github.com/joaovictornsv) para por em prática conhecimentos de:
- Servidores WEB
- Deploy em um servidor na nuvem
- Banco de Dados não relacionais
- Design Patterns
- Ferramentas de padronização de código
- Git/GitHub
- Docker
- NodeJS

### Como posso contribuir? 🚀

Para contribuir basta escolher (ou criar uma!) uma [Issue](https://github.com/EJTECS/ejtecs-backend/issues) e abrir uma [Pull Request]() seguindo as instruções no arquivo [CONTRIBUTING.md](https://github.com/EJTECS/ejtecs-backend/blob/main/CONTRIBUTING.md) que nosso time irá revisar com carinho!

### Não me sinto seguro pra contribuir 😞
Não tem problema! Todos estamos aqui para aprender e praticar revisão de código e como refatorá-los.  
Leia com atenção as [Issues](https://github.com/EJTECS/ejtecs-backend/issues) e se houver alguma dúvida fique a vontade para perguntar.

---

## Setup 🛠️

### Git 🌳
Instale o [git](https://git-scm.com/) na sua máquina.
### Interface para requisições HTTP
Recomendamos que utilize alguma dessas interfaces para testar as suas APIs nos ambientes local e sandbox:
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)
- [WebStorm HTTP Client](https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html)

### NodeJS 🟢
Instale o [NodeJs](https://nodejs.org/pt-br) na versão v18.18.2 LTS.  
Recomendamos que utilize o gerênciador de versões do Node [NVM](https://github.com/nvm-sh/nvm) para facilitar as configurações de versões.

### Docker 🐋
TODO: rodar mongodb localmente

## Como executar

### Instale as dependências
```bash
npm i
```

### Inicie o banco de dados localmente
```bash
docker image build -t "ejtecs-mongo" database
docker container run -p 27017:27017 -d ejtecs-mongo:latest
```

### Inicie o servidor
```bash
npm start
```

### Rode os tests
```bash
npm test
```
