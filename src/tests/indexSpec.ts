import supertest from 'supertest';
import app from '../index';
import { resizing, imgReSiz }  from '../utilities/processing';
import path from 'path'
import fs from 'fs'

const request = supertest(app);

describe('Test endpoint responses', () => {

  const inputFolder = './orginal/';
  const filename = 'santamonica.jpg';
  const width = '200';
  const height = '200'; 

  beforeAll(async () =>  {  
    await resizing(inputFolder + filename, Number(width), Number(height));
 });

    it('Test Image Resizing', () => {  
      const imgName = imgReSiz(
      filename.toString(),
      width.toString(),
      height.toString()
      );
    
      let reqImage = path.join('./zImages/', imgName);
      
      reqImage = path.resolve(__dirname, '..', '..', 'zImages', imgName);
     
      const fileExists = fs.existsSync(reqImage);
      console.log(fileExists);

     expect(fileExists).toBe(true);

});

  it('get the api/images endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('Filename created', () => {
    expect(imgReSiz('image.jpg', '300', '300')).toEqual('image_300_300.jpg');
  });

  it('image api should not accept missing filename parameter', async () => {
    const res = await request.get(
      '/images?filename=fjord.jpg&width=100 || /images?filename=fjord.jpg&heigh=100 ||images?&width=100&heigh=100 '
    );
    expect(res.status).toBe(404);
  });
});
