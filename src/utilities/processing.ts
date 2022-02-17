import sharp from 'sharp';
import path from 'path';

// Resizing Image
const resizing = async (
  reqImg: string,
  width: number,
  height: number
): Promise<void> => {
  try {
    const ext = path.extname(reqImg);
    const mainName = path.basename(reqImg, ext);
    const imgName =
      './zImages/' +
      mainName +
      '_' +
      width.toString() +
      '_' +
      height.toString() +
      ext;

    await sharp(reqImg).resize(width, height).toFile(imgName);
  } catch (err) {
    console.log(err);
  }
};

//creat the destenation file name
const imgReSiz = (name: string, width: string, height: string): string => {
  const mainName = name.slice(0, name.lastIndexOf('.'));
  const ext = name.slice(name.length - 3);

  return mainName + '_' + width + '_' + height + '.' + ext;
};

export { resizing, imgReSiz };
