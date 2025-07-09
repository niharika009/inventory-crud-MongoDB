
const connectDB = require('./config/assdata');
const Item = require('./models/item');
async function runCrudd() {
await connectDB();
// CREATE
// const newItem = new Item({ id: 1, name: 'Chips',rate:1000 });
// await newItem.save();
// console.log('✅ item Created:', newItem);
const newItem2 = new Item({ id: 2, name: 'Bread',rate:500 });
await newItem2.save();
console.log('✅ item Created:', newItem2);
// READ
const itemss = await Item.find();
console.log('�� All itemss:', itemss);
// UPDATE
const updated = await Item.findOneAndUpdate(
{ id: 1 },
{ name: 'ChipsPack' },
{rate:1000},
{ new: true }
);
console.log('✏️ item Updated:', updated);
// DELETE
const deleted = await Item.findOneAndDelete({ id: 1 });
console.log('��️ item Deleted:', deleted);
process.exit(0); // Exit script
}
runCrudd();