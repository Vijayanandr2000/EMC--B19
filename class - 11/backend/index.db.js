import express from "express";
import cors from "cors";
// const { MongoClient, ServerApiVersion } = require("mongodb");
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const app = express();

app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://vijayanandr2000:hbi9HjnQWARVzkA6@cluster0.h0rte1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

const users = [
  {
    email: "abc@gmail.com",
    password: "123",
  },
];

const userCollection = client.db("loginApp").collection("users");

const checkEmailInDatabase = async (email) => {
  //   return users.find((user) => user.email === email);
  return await userCollection.findOne({
    email: email,
  });
};

const userInputCheck = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  next();
};

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/signup", userInputCheck, async (req, res) => {
  //   console.log("req.body", req.body);
  const { email, password } = req.body;

  //   if (!email || !password) {
  //     return res.status(400).json({ message: "Email and password are required" });
  //   }

  const existingUser = await checkEmailInDatabase(email);

  console.log("existingUser", existingUser);

  if (existingUser) {
    return res.status(400).json({ message: "User already exists...!" });
  }

  const newUser = { email, password };

  //   users.push(newUser);
  const newUserIdentity = await userCollection.insertOne(newUser);

  return res.status(201).json({
    message: "User Created Successfully...!",
    newUserIdentity,
  });
});

app.post("/login", userInputCheck, async (req, res) => {
  const { email, password } = req.body;

  //   if (!email || !password) {
  //     return res.status(400).json({ message: "Email and password are required" });
  //   }

  const existingUser = await checkEmailInDatabase(email);

  if (!existingUser) {
    return res.status(404).json({ message: "User Not Found...!" });
  }

  if (password != existingUser.password) {
    return res.status(401).json({ message: "Invalid Password...!" });
  }

  return res.status(200).json({ message: "Login Successful...!" });
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  const mongoUserId = new ObjectId(id);

  const deletedData = await userCollection.deleteOne({
    _id: mongoUserId,
  });

  console.log("deletedData", deletedData);

  if (!deletedData.deletedCount) {
    return res.status(404).json({ message: "User Not Found...!" });
  }

  return res.status(200).json({ message: "User Deleted Successfully...!" });
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  const mongoUserId = new ObjectId(id);

  const deletedData = await userCollection.deleteOne({
    _id: mongoUserId,
  });

  console.log("deletedData", deletedData);

  if (!deletedData.deletedCount) {
    return res.status(404).json({ message: "User Not Found...!" });
  }

  return res.status(200).json({ message: "User Deleted Successfully...!" });
});

app.put("/user", async (req, res) => {
  const { id } = req.query;
  const { newPassword } = req.body;

  const mongoUserId = new ObjectId(id);

  const updatedData = await userCollection.updateOne(
    {
      _id: mongoUserId,
    },
    {
      $set: {
        password: newPassword,
      },
    }
  );

  console.log("updatedData", updatedData);

  if (!updatedData.modifiedCount) {
    return res.status(404).json({ message: "User Not Found...!" });
  }

  return res.status(200).json({ message: "User Updated Successfully...!" });
});

app.get("/users", async (req, res) => {
  const usersData = await userCollection.find({}).toArray();

  return res
    .status(200)
    .json({ message: "User fetched Successfully...!", usersData });
});

app.get("/user/:id", async (req, res) => {
  const usersData = await userCollection
    .find({
      _id: new ObjectId(req.params.id),
    })
    .toArray();

  return res
    .status(200)
    .json({ message: "User fetched Successfully...!", usersData });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
  run().catch(console.dir);
});

// db.collection.find({
//   key: {
//     condition: vaue,
//   },
// });

// db.collection.find({
//   price: {
//     $gt: 700,
//   },
// });

// db.collection.find({
//   $and: [{ price: { $gt: 700 } }, { price: { $lt: 1000 } }],
// });

// db.collection.find({
//   $or: [{ price: { $gt: 700 } }, { price: { $lt: 1000 } }],
// });
