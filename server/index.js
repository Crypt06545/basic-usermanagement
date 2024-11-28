const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config(); // Load environment variables

const app = express();
const port = 3000;

// middlewares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@bot.jxczvgl.mongodb.net/?retryWrites=true&w=majority&appName=bot`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log(user);
      res.send("User received");
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
