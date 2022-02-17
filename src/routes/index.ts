import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { resizing, imgReSiz } from '../utilities/processing';

const router = express.Router();

const inputFolder = './orginal/';

router.get('/', async (req: Request, res: Response) => {
  const filename = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;

  // checking for the name inputted for image
  if (filename === undefined || filename === '') {
    res.send(
      `Invalid or empetty filename input for image ${filename}. Please put valid filename`
    );

    // checking for the width and height inputted for image
  } else if (
    width === undefined ||
    width === '' ||
    height === undefined ||
    height === ''
  ) {
    res.send(
      `Invalid or empetty width or heigh input for image ${filename}. Please put valid width and heigh`
    );
  } else if (
    isNaN(Number(width)) ||
    isNaN(Number(height)) ||
    Number(width) < 30 ||
    Number(height) < 30
  ) {
    res.send(
      `Invalid width or heigh for image ${filename}, please input numbers greater than 30`
    );

    // checking for the image inputted already exist in the original folder
  } else if (!fs.existsSync(inputFolder + filename)) {
    res.send(
      `Image ${filename} is not found in orginal folder, please choose an image from orginal folders `
    );

    // Image processing
  } else {
    const imgName = imgReSiz(
      //validate input
      filename.toString(),
      width.toString(),
      height.toString()
    );
    let reqImage = path.join('./zImages/', imgName);
    const fileExists = fs.existsSync(reqImage);

    // Resolving full path name for the requested image
    reqImage = path.resolve(__dirname, '..', '..', 'zImages', imgName);

    // Sending requested image to the API if it already exists in the destination folder
    if (fileExists) {
      console.log(
        'the file is existing in zImages folder, and now it is sent to the endpoint'
      );
      res.sendFile(reqImage);

      // Resizing the requested image for the 1st time, save it in the destination folder and send it to the API
    } else {
      await resizing(inputFolder + filename, Number(width), Number(height));
      console.log(
        'Resizing the image is done, and now it is sent to the endpoint'
      );
      res.sendFile(reqImage);
    }
  }
});

export default router;
