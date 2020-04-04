const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://bot_alert:v01266530853@cluster0-msfuc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     console.log("connect success");
// });

function MongoController() {
    function set (key, value) {
        const db = client.db(process.env.MONGODB_NAME);
        db.collection('contacts').insertMany([{a:7}, {a:6}], function(err, r) {
            console.log("insert " + err);
        });
    }
    return {
        set: set
    };
}
exports.MongoController = MongoController;