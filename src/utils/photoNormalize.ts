// @ts-ignore
import Compressor from "compressorjs";

 const normalizeFunc = (file: File) => {
  return new Promise<File>((resolve, reject) => {
    new Compressor(file, {
      maxWidth: 1000,
      maxHeight: 1000,
      success(normalizedFile: any) {
        resolve(normalizedFile as File);
      },
      error(error: any) {
        reject(error);
      },
    });
  });
};

export default normalizeFunc;