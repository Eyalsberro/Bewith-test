const fetch = require('node-fetch')
const catchAsync = require('../utils/catchAsync');

const getImages = catchAsync(async (req, res) => {
    try {
        const respo = await fetch('https://my-json-server.typicode.com/coing-dev/photo-api/images')
        const data = await respo.json();

        const respo2 = await fetch('https://my-json-server.typicode.com/coing-dev/photo-api/photos')
        const data2 = await respo2.json();

        res.send([...data[0],...data2[0]])
    } catch (error) {
        console.log(error);
    }
});

module.exports = {
    getImages
};