import { createConnection } from "./data-source";

// Esse código tem a funcionalidade de criar a tabela 'bancos' para depois fazer a inserção dos dados.

async function create() { 
    const connection = await createConnection()

    try {
        await connection.query(
            `CREATE TABLE BANCOS(codigo_compensacao INT PRIMARY KEY, nome VARCHAR(255) NOT NULL)
            `
        )
        
      console.log("Create table 'bancos'");
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
    }


    await connection.destroy();
}

create()