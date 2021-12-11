const express = require('express')
const path = require('path')

///////////////////////////////////////////////////////
const { range } = require('@tensorflow/tfjs-core');
const { spawn } = require('child_process');
//////////////////////////////////////////////////////

const app = express()

var exphbs  = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    res.render('home')
})


app.post('/predictions', (req,res)=>{
    
    const obj = req.body
    console.log("object = ",obj)
    if(obj.product === "Books")
    {
        var g = {}
        g["Children"] = 0
        g["Comics"] = 1
        g["Fiction"] = 2
        g["Foreign Language"] = 3
        g["Genere Fiction"] = 4
        g["Non-fiction"] = 5

        var publisherType = {}
        publisherType["Amazon"] = 0
        publisherType["Big Five"] = 1
        publisherType["Indian"] = 2
        publisherType["Single Author"] = 3
        publisherType["Small/Medium"] = 4
        
        console.log(obj.genre)
        console.log(g[obj.genre])

        const childpython = spawn('python', ['calledpy2.py',0,
            obj.averageRating,
            obj.salePrice,
            obj.totalReview,
            g[obj.genre],
            publisherType[obj.publisherType]
        ]);
        childpython.stdout.on('data', (data) => {
            let object = `${data}`
            console.log(`stdout: ${data}`);
            console.log('obj = ',object)
            obj.sales = object 
            res.render('predictions',{myobj: obj,
                helpers: {
                    eq(str1, str2){ 
                        return str1 == str2; 
                    }
                }
            })
        });
    
        childpython.stderr.on('data', (data) => {
            console.error(`stdout: ${data}`);
        });
    
        childpython.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
        
    }
    else if(obj.product === "Games")
    {

        var p = {}
        var g = {}
        var e = {}

        p["DC"] = 0
        p["DS"] = 1
        p["GBA"] = 2
        p["GC"] = 3
        p["PC"] = 4
        p["PS"] = 5
        p["PS2"] = 6
        p["PS3"] = 7
        p["PS4"] = 8
        p["PSP"] = 9
        p["PSV"] = 10
        p["Wii"] = 11
        p["WiiU"] = 12
        p["X360"] = 13
        p["XB"] = 14
        p["XOne"] = 15

        g["Adventure"] = 0
        g["Fighting"] = 1
        g["Misc"] = 2
        g["Platform"] = 3
        g["Puzzle"] = 4
        g["Racing"] = 5
        g["Role-Playing"] = 6
        g["Shooter"] = 7
        g["Simulation"] = 8
        g["Sports"] = 9
        g["Strategy"] = 10


        e["E"] = 0
        e["E10+"] = 1
        e["K-A"] = 2
        e["M"] = 3
        e["RP"] = 4
        e["T"] = 5

        const childpython = spawn("python", ["calledpy2.py",2,
            obj.yearOfRelease,
            obj.criticScore,
            obj.criticCount,
            obj.userScore,
            obj.userCount,
            p[obj.platform],
            g[obj.genre],
            e[obj.esrbRating]
        ]);
        childpython.stdout.on('data', (data) => {
            let object = `${data}`
            console.log(`stdout: ${data}`);
            console.log('obj = ',object)
            object = object.substring(2) + " Million"
            obj.sales = object 
            res.render('predictions',{myobj: obj,
                helpers: {
                    eq(str1, str2){ 
                        return str1 == str2; 
                    }
                }
            })
        });
    
        childpython.stderr.on('data', (data) => {
            console.error(`stdout: ${data}`);
        });
    
        childpython.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    }
    else
    {
        var usesAdBoost = {}
        usesAdBoost["Yes"] = 1
        usesAdBoost["No"] = 0

        var productColor = {}
        productColor["Pink"] = 1
        productColor["Blue"] = 0
        productColor["Red"] = 2

        var productSize = {}
        productSize["M"] = 0 
        productSize["Other"] = 1 
        productSize["S"] = 2
        productSize["XXS"] = 6 
        productSize["XS"] = 4
        productSize["XL"] = 3 
        productSize["XXL"] = 5

        const childpython = spawn("python", ["calledpy2.py",1,
            obj.price,
            obj.retailPrice,
            usesAdBoost[obj.usesAdBoost],
            obj.rating,
            obj.productVariationInventory,
            obj.countriesShippedTo,
            obj.inventoryTotal,
            obj.merchantRatingCount,
            obj.merchantRating,
            obj.tagQuality,
            obj.tagCount,
            obj.discountRate,
            productColor[obj.productColor],
            productSize[obj.productSize]
        ]);
        childpython.stdout.on('data', (data) => {
            let object = `${data}`
            console.log(`stdout: ${data}`);
            console.log('obj = ',object)
            obj.sales = object 
            res.render('predictions',{myobj: obj,
                helpers: {
                    eq(str1, str2){ 
                        return str1 == str2; 
                    }
                }
            })
        });
    
        childpython.stderr.on('data', (data) => {
            console.error(`stdout: ${data}`);
        });
    
        childpython.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    }

    
})

app.listen(4002, ()=>{
    console.log('Server started on http://localhost:4002')
})







