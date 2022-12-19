import imageProcessing from '../../utilities/imageProcessing';
import fs from 'fs';
import path from 'path';

describe('Test imageProcessing utility', (): void => {
  it('Test resizeImage function work correctly', async (): Promise<void> => {
    const height = 100;
    const width = 200;
    const fileName = 'encenadaport';
    await imageProcessing.resizeImage(fileName, width, height);
    expect(
      fs.existsSync(
        path.join(
          __dirname,
          '..',
          '..',
          '..',
          'images',
          'thump',
          `${fileName}_${width}_${height}.jpg`
        )
      )
    ).toBe(true);
  });
  it('Test resizeImageWidth function work correctly', async (): Promise<void> => {
    const width = 100;
    const fileName = 'encenadaport';
    await imageProcessing.resizeImageWidth(fileName, width);
    expect(
      fs.existsSync(
        path.join(
          __dirname,
          '..',
          '..',
          '..',
          'images',
          'thump',
          `${fileName}_${width}_${width}.jpg`
        )
      )
    ).toBe(true);
  });
  it('Test resizeImageHeight function work correctly', async (): Promise<void> => {
    const height = 200;
    const fileName = 'encenadaport';
    await imageProcessing.resizeImageWidth(fileName, height);
    expect(
      fs.existsSync(
        path.join(
          __dirname,
          '..',
          '..',
          '..',
          'images',
          'thump',
          `${fileName}_${height}_${height}.jpg`
        )
      )
    ).toBe(true);
  });
});
