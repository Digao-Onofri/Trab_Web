//Para ler arquivos com nextjs
import {promises as fs} from 'fs';
import path from "path";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function retornaBD(arquivo: string): Promise<Array<any>>
{
    const dbPath = path.join(process.cwd(),'src', 'app','db',arquivo);
    const dados = await fs.readFile(dbPath,'utf-8');
    
    return JSON.parse(dados);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function armazenaBD(arquivo: string, dados: any)
{
    const dbPath = path.join(process.cwd(),'src', 'app','db',arquivo);
    await fs.writeFile(dbPath, JSON.stringify(dados,null,2));
}

const ConexaoBD = {
    retornaBD,
    armazenaBD
}

export default ConexaoBD;