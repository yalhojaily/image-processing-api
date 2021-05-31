import express from 'express';
import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
import { imagesdir } from '../utilities/mkdir';

const app = express();
const port = 3000;

app.get('/api/image', (req, res) => {
      const filename = req.query.filename;
      const width = Number(req.query.width);
      const height = Number(req.query.height);
      
      imagesdir()
    
      const resizeImage = async () => {
        sharp('./assets/full/' + filename)
        .resize(width, height)
        .toBuffer()
        .then( data => {
        fsPromises.writeFile('./assets/thumbnails/' + filename, data)
        })
      .catch( err => {
        console.log(err);
      })
      }

      resizeImage();
      
      
        res.sendFile('/' + filename, {root: './assets/thumbnails' });
 
    
   
  });

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});


