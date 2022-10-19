const dotenv = require('dotenv');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();


dotenv.config();
app.use(express.json());

PORT = process.env.PORT || 3000;



app.post("/bfhldevapigw.healthrx.co.in/bfl-api-challenge/challenge-entry", async(req, res) => {
    try {
        const response = {
            "is_success": true,
            "b_name": "TWFkaGF2IFNoYXJtYQ==",
            "name": "Madhav Sharma",
            "b_reg_no": "MDgzMkNTMTkxMDk1",
            "reg_no": "0832CS191071",
            "b_email": "bWFkaGF2LjEwMjAuc2hhcm1hQGdtYWlsLmNvbQ==",
            "email": "madhav.1020.sharma@gmail.com",
            "numbers": [],
            "alphabets": []
        }


        const { data } = req.body;
        for (let element of data) {
            if (isNaN(parseInt(element))) {
                response.alphabets.push(element);
            } else {
                response.numbers.push(element);
            }
        }
        res.json(response);


    } catch (error) {

    }
});



app.listen(PORT, () => {
    console.log("Server running on port " + PORT + ".");
})