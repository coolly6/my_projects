const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const url = "mongodb+srv://jenn_yaffe:Fuckthis1234!@cluster0-raagg.mongodb.net/myProjects?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true});
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected!');
});



const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
    projectName: String,
    description: String,
    urlHeroku:String,
    urlGithub: String,
    image: String
});

const ProjectModel = mongoose.model('project', ProjectSchema);

app.get('/getprojects', (req, res) => {
    ProjectModel.find({}, (err, docs) => {
        if (err) throw err;
        console.log('found', docs)
        res.send(docs)

    })
})
app.post('/manager', (req, res) => {
    const data = req.body
    console.log(data)
    const contact = new ProjectModel(data);

    contact.save().then(doc => {
        console.log('doc:',doc);
        res.send(doc)
    }).catch(err => {
        console.log(err)
    })
})

    

app.listen(port, () => console.log(`server listening on port ${port}!!!`))