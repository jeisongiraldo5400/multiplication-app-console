export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {
    /**
     * DI - Dependency Injection
     */
  }

  execute({ base, limit = 10 }: CreateTableOptions) {
    const table = (base: number, limit: number) => {
      const title = `
    ====================
      Tabla del ${base}
    ====================`;

      let table = "";
      for (let i = 1; i <= limit; i++) {
        table += `${base}  x  ${i}  =  ${base * i} \n`;
      }

      return `${title} \n ${table}`;
    };

    return table(base, limit);
  }
}
