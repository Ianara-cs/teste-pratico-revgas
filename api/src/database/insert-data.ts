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

    for (const row of data) {
        try {
            await connection.query(
              `INSERT INTO BANCOS(codigo_compensacao, nome)
                  VALUES(${row["Código de compensação"]}, '${row["Nome Instituição"]}')
              `
            )
          console.log('Dados inseridos com sucesso:', row["Código de compensação"], row["Nome Instituição"]);
        } catch (error) {
            console.error('Erro ao inserir dados:', error);
        }
    }


    await connection.destroy();
}

create()