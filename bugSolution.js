```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{"$inc":{"field":1}}); 
//or
let value = 5; //value to increment by
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{"$inc":{"field":value}});
```