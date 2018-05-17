const {zero, zerobg} = require('./sketch_0.js') 
const { one,onebg } = require('./sketch_1.js') 
const { mg,mgbg } = require('./sketch_mg.js') 

module.exports = {
    sketches: [
        {
            name:"zero",
            func: zero,
            bg: zerobg
        },

        {
            name: "graphics",
            func: mg,
            bg: mgbg
        },

        {
            name: "one",
            func: one,
            bg: onebg
        }
    ]
}