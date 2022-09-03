const express = require('express');
const cors = require('cors');




const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const users = [
    {id: 1, name: 'Vin disel', email: 'vindisel@gmail.com', profession: 'actor'},
    {id: 2, name: 'Johnny Deep', email: 'JohnnyDeep@gmail.com', profession: 'actor'},
    {id: 3, name: 'Chris HemsWorth', email: 'ChrisHemsWorth@gmail.com', profession: 'actor'},
    {id: 4, name: 'Rock', email: 'Rock@gmail.com', profession: 'actor'},
    {id: 5, name: 'Will Smith', email: 'WillSmith@gmail.com', profession: 'actor'},
    {id: 6, name: 'Tom Cruiz', email: 'TomCruiz@gmail.com', profession: 'actor'},
    {id: 7, name: 'Leonardo Dcaprio', email: 'LeonardoDcaprio@gmail.com', profession: 'actor'}
];


app.get('/', (req, res) => {
    res.send('My practice server side project')
});

app.get('/users', (req ,res) =>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);

    }
    else{
        res.send(users);
    }
});

app.get('/user', (req, res) => {
    res.send({ id: 1, name: 'Atiqur Rahman', email: 'mdatiqurrahman9104@gmail.com' })
});

app.post('/user',(req, res) =>{
   const user = req.body;
   user.id  = users.length + 1;
   users.push(user);
   res.send(user);
})

app.get('/users/:userId', (req ,res) =>{
   const id = parseInt(req.params.userId);
   const user = users.find(u => u.id === id );
   res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['Mango', 'Banana', 'Apple', 'Jackfruit', 'Guava'])
});

app.get('/fruits/fruit/mango', (req, res) => {
    res.send('Mango is sour when it is ripe')
})

app.listen(port, () => {
    console.log('Example app listening on port', port)
})