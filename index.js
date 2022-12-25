const axios = require("axios")

const url = "https://api.netgopro.co.ke/apis.php"

sendSms({
    apikey: 'API_KEY', //NETGOPRO API KEY
    recipient:'RECIPIENT', //254...
    message:'Hello Test'
})

async function sendSms(body){
    try {
        const response = await axios.post(url, body)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}