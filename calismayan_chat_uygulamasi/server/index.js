const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // mongoose modülünü içe aktar
const database =require('./routes/Room.js')

const Room = require('./routes/Room.js');
const Message = require('./routes/Message.js');
const Pusher = require("pusher");
const pusher = new Pusher ({
    
        appId: "1733252",
        key: "1af73a2a5cc40440a173",
        secret: "05a24cb165b70c07d010",
        cluster: "eu",
        useTLS: true
      
});

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/', Room);
app.use('/', Message);

const PORT = 5000;

// MongoDB bağlantısını başlat
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Artık bağlanabilir misin?');

  const roomCollection = db.collection('rooms');
  const changeStream = roomCollection.watch();

  changeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      const roomDetails = change.fullDocument;
      pusher.trigger('rooms', 'inserted', roomDetails);
    } else {
      console.log('Trigger olayı gerçekleşmedi...');
    }
  });

  const msgCollection = db.collection('messages');
  const changeStream1 = msgCollection.watch();

  changeStream1.on('change', (change) => {
    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted', messageDetails);
    } else {
      console.log('Trigger olayı gerçekleşmedi...');
    }
  });
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
