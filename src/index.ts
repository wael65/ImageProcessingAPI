import express from 'express';
import logger from './middle/log';
import router from './routes/index';

const app = express();
const port = 3000;

app.use(logger);

//image resizing router
app.use('/api', router);

// start the Express servers
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
