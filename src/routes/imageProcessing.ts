import express from 'express';
import checkQueryValidation from '../middlewares/checkQueryValidation';
import util from '../utilities/imageProcessing';
import fs from 'fs';
import path from 'path';

const routes = express.Router();

routes.get('/images', checkQueryValidation, async (req, res): Promise<void> => {
  if (req.query.height && req.query.width) {
    const fileName: string = req.query.filename as string;
    const width: number = parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);
    const processedImagePath = path.join(
      __dirname,
      '..',
      '..',
      'images',
      'thump',
      `${fileName}_${width}_${height}.jpg`
    );
    if (fs.existsSync(processedImagePath)) {
      res.status(200).sendFile(processedImagePath);
    } else {
      await util.resizeImage(fileName, width, height);
      res.status(200).sendFile(processedImagePath);
    }
  } else if (req.query.width) {
    const fileName: string = req.query.filename as string;
    const width: number = parseInt(req.query.width as string);
    const processedImagePath = path.join(
      __dirname,
      '..',
      '..',
      'images',
      'thump',
      `${fileName}_${width}_${width}.jpg`
    );
    if (fs.existsSync(processedImagePath)) {
      res.status(200).sendFile(processedImagePath);
    } else {
      await util.resizeImageWidth(fileName, width);
      res.status(200).sendFile(processedImagePath);
    }
  } else if (req.query.height) {
    const fileName: string = req.query.filename as string;
    const height: number = parseInt(req.query.height as string);
    const processedImagePath = path.join(
      __dirname,
      '..',
      '..',
      'images',
      'thump',
      `${fileName}_${height}_${height}.jpg`
    );
    if (fs.existsSync(processedImagePath)) {
      res.status(200).sendFile(processedImagePath);
    } else {
      await util.resizeImageHeight(fileName, height);
      res.status(200).sendFile(processedImagePath);
    }
  }
});

export default routes;
