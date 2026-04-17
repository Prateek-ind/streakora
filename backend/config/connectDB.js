
const mongoose = require("mongoose")

const connectDb = async ()=>{
    try {
        const connect = mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected")
    } catch (error) {
        console.log("unable to connect to db")
        process.exit(1)
    }
}

module.exports = connectDb