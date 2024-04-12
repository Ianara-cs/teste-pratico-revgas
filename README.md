# Teste Prático RevGas

Este é um projeto de teste prático para a empresa RevGas, que contém as partes da API e da aplicação web.

## Instalação

Certifique-se de ter o Node.js e o npm instalados em seu sistema. Em seguida, siga estas etapas para iniciar o projeto:

1. Clone o repositório do GitHub:

```bash
git clone https://github.com/seu-usuario/teste-pratico-revgas.git
```

2. Navegue até o diretório dos projetos:

```bash
cd teste-pratico-revgas/api
```

```bash
cd teste-pratico-revgas/web
```

3. Instale as dependências em cada:

```bash
npm install
```

## Configuração do Banco de Dados no projeto da API

O projeto utiliza MySQL como banco de dados. Certifique-se de ter um servidor MySQL em execução localmente ou configure as variáveis de ambiente para se conectar a um banco de dados remoto.

Certifique de está no diretório da API

1. Crie um arquivo .env na raiz do projeto e adicione as variáveis de acordo com o arquivo .env.example e as substitua

### Inicialização do Banco de Dados

Execute os seguintes comandos para criar a tabela no banco de dados e inserir os dados necessários:

1. Criar a tabela:

```bash
npm run create:table
```

2. Inserir dados:

```bash
npm run insert:data
```

## Inicialização do Projeto

Após configurar o banco de dados, você pode iniciar a API e a aplicação web:

1. Para iniciar a API e aplicação web basta está em seus respectivos diretórios e executar o comando abaixo:

```bash
npm run dev
```
