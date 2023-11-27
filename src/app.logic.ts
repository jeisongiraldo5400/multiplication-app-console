
import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b: base, l: limit, s: showTable } = yarg;

const table  = (base: number, limit: number) => {

  const title  = `
====================
  Tabla del ${base}
====================`

  let table = '';
  for (let i = 1; i <= limit; i++) {
    table += `${base}  x  ${i}  =  ${base * i} \n`;
  }

  return `${title} \n ${table}`;
}


if(showTable) {
  console.log(table(base, limit));
}


const outputPath = `outputs`;


fs.mkdirSync(outputPath, { recursive: true });
fs.writeFile(`${outputPath}/tabla-${base}.txt`, table(base, limit),  (err: any) => {
  if(err) {
    return console.log({err});
  }
  console.log('File created');
});

