import { createConnection } from "./data-source";
import {WorkSheet, readFile, utils} from 'xlsx'
import path from 'path'

type Data = {
    'Código de compensação': number,
    'Nome Instituição': string
}

const filePath = path.join(__dirname, 'bancos.xlsx');

const workbook = readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data: Data[] = utils.sheet_to_json(worksheet);


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