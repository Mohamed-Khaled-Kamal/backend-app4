
const express = require("express")
const app = express()

const port = process.env.PORT || 3000;

const path = require("path")

const x = path.join(__dirname, '../public')

app.use(express.static(x))


///////////////////////////////

app.set('view engine', 'hbs');


const viewDectionary = path.join(__dirname, '../temp/views')
app.set("views", viewDectionary)

/////////////////////////
var hbs = require('hbs');


app.get('/', (req, res) => {
    res.render('index',{
        title: "Home Page",
        desc : "This is Home Page"
    })
})

//////////////////////////////////////////////////


const geocode = require("./tools/geocode")
const forcast = require("./tools/forcast")

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error : ("You Must Provide Address !!!!!!!!!")
        })
    }
    geocode(req.query.address, (error, data) => {
        if (error) {
            return res.send ({error})
        }
        forcast(data.laititude, data.longtitude, (error, forcastdata) => {
            if (error) {
                return res.send ({error})
            }
            res.send({
                location: req.query.address,
                longtitude : data.longtitude,
                laititude:data.laititude,
                forcast: forcastdata
            })
        })
    })
})


///////////////////////////////////////////////////


app.get('*', (req, res)=>{
    res.send(`<h1>Page Not Found 404</h1>`)
})



app.listen( port , ()=> {
    console.log(`App listening on port ${port}`)
})



