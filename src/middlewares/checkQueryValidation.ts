import express from 'express';
import fs from 'fs';
import path from 'path';

const checkQueryValidation = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  if (req.query.filename) {
    if (
      fs.existsSync(
        path.join(__dirname, '..', '..', 'images', `${req.query.filename}.jpg`)
      )
    ) {
      if (!(req.query.width || req.query.height)) {
        res.status(400).send('Please enter width and height');
      } else {
        if (
          (req.query.width && parseInt(req.query.width as string) <= 0) ||
          (req.query.height && parseInt(req.query.height as string) <= 0)
        ) {
          res.status(400).send('Width and height must be greater than zero');
        } else {
          next();
        }
      }
    } else {
      res.status(404).send('File not found');
    }
  } else {
    res.status(400).send('Please enter filename');
  }
};

export default checkQueryValidation;
