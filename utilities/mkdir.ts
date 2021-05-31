import { promises as fsPromises } from 'fs';


const imagesdir = async () => {
    fsPromises.rmdir('./assets/thumbnails', { recursive: true})
  .then(() => console.log('removed..'))
  fsPromises.mkdir('./assets/thumbnails');
  }

  export {imagesdir};