# inventory-crud-MongoDB
This project demonstrates basic Create, Read, Update, Delete (CRUD) operations 
Suggested Description for README.md or GitHub Repo:
🛠️ Mini CRUD Project using Node.js, MongoDB, and Mongoose
This project demonstrates basic Create, Read, Update, Delete (CRUD) operations using:

Node.js for the runtime

MongoDB as the database

Mongoose for object data modeling (ODM)

The app connects to MongoDB, performs item-level operations, and exits cleanly. It uses an Item model with fields like id, name, and rate.

🔧 Features:
✅ Add new items to the MongoDB database

📄 Fetch all existing items

✏️ Update item data based on id

🗑️ Delete item by id

📁 Project Structure:
bash
Copy
Edit
.
├── config/
│   └── assdata.js         # MongoDB connection config assignment database file
├── models/
│   └── item.js            # Mongoose schema for items
├── assindex.js                 # Main script to run CRUD operations wihich is assignment index file
└── package.json           # Node dependencies
🚀 How to Run:
Clone the repository

Run npm install to install dependencies

Ensure MongoDB is running

Execute: node run.js
