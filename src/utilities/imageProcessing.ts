import sharp from 'sharp';
import path from 'path';

const resizeImage = async (
  fileName: string,
  width: number,
  height: number
): Promise<void> => {
  await sharp(path.join(__dirname, '..', '..', 'images', `${fileName}.jpg`))
    .resize({
      width: width,
      height: height
    })
    .toFormat('jpg')
    .toFile(
      path.join(
        __dirname,
        '..',
        '..',
        'images',
        'thump',
        `${fileName}_${width}_${height}.jpg`
      )
    );
};

const resizeImageWidth = async (fileName: string, width: number): Promise<void> => {
  await sharp(path.join(__dirname, '..', '..', 'images', `${fileName}.jpg`))
    .resize({
      width: width
    })
    .toFormat('jpg')
    .toFile(
      path.join(
        __dirname,
        '..',
        '..',
        'images',
        'thump',
        `${fileName}_${width}_${width}.jpg`
      )
    );
};

const resizeImageHeight = async (fileName: string, height: number): Promise<void> => {
  await sharp(path.join(__dirname, '..', '..', 'images', `${fileName}.jpg`))
    .resize({
      height: height
    })
    .toFormat('jpg')
    .toFile(
      path.join(
        __dirname,
        '..',
        '..',
        'images',
        'thump',
        `${fileName}_${height}_${height}.jpg`
      )
    );
};

export default { resizeImage, resizeImageWidth, resizeImageHeight };
