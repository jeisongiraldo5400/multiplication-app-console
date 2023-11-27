import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileConted: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() /**
   * repository: Repository
   */
  {}

  execute({
    fileConted,
    fileDestination = "outputs",
    fileName = "table",
  }: Options): boolean {

    try {
      fs.mkdirSync(fileDestination, { recursive: true });

    fs.writeFile(
      `${fileDestination}/${fileName}.txt`,
      fileConted,
      (err: any) => {
        if (err) {
          return console.log({ err });
        }
      });
      
      return true;
    } catch(error) {
      console.log({error});
      return false
    }
  }
}
