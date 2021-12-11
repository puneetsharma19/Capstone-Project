
const { range } = require('@tensorflow/tfjs-core');
const { spawn } = require('child_process');

var pred_category = 1


if(pred_category == 0)
{
var avg_rating = 0
var sale_price = 0
var total_review = 0
var genre = 0
var publisher_type = 0

const childpython = spawn('python',['calledpy2.py',pred_category,
avg_rating,
sale_price,
total_review,
genre,
publisher_type]);
}

else if(pred_category == 1)
{
    var price = 0;  // 0
    var retail_price = 0; // 1
    var uses_ad_boost = 0; // 2
    var rating = 0;  // 3

    var product_variation_inventory = 0; // 13
    var countries_shipped_to = 0 ; //16
    var inventory_total = 0; // 17
    var merch_rating_count = 0 ; //19
    var merch_rating = 0; // 20
    var tag_quality = 0; // 22
    var tag_count = 0 ; // 23
    var discount_rate = 0 ; // 27
    var color = 0 ; // 29-30-31 blue-pink-red
    
    var size = 0; //106-112 M-OTHER-S-XL-XS-XXl-XXS

    const childpython = spawn('python',['calledpy2.py',pred_category,
    price ,
    retail_price,
    uses_ad_boost,
    rating,
    product_variation_inventory ,
    countries_shipped_to, 
    inventory_total, 
    merch_rating_count,
    merch_rating,
    tag_quality,
    tag_count,
    discount_rate,
    color,
    size
    ]);
}
else if(pred_category == 2)
{
    var year_of_release = 0;
    var critic_score = 0;
    var critic_count = 0;
    var user_score = 0;
    var user_count = 0;
    var platform = 0;
    var gen_re = 0;
    var esrb_rating = 0;

    const childpython = spawn('python',['calledpy2.py',pred_category,
    year_of_release,
    critic_score,
    critic_count,
    user_score,
    user_count,
    platform,
    gen_re,
    esrb_rating]);
}
childpython.stdout.on('data',(data) => {
    console.log(`stdout: ${data}`);
});

childpython.stderr.on('data',(data) => {
    console.error(`stdout: ${data}`);
});

childpython.on('close',(code) => {
    console.log(`child process exited with code ${code}`);
});