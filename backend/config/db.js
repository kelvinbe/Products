import mongoose from "mongoose"



export const ConnectDB = async () => {

    try {
        const connect = await mongoose.connect(process.env.MONGODB_STRING)
        console.log(`connection: ${connect.connection.host}`)
    } catch (error) {
        console.log('error', error)
        process.exit(1)
    } 
}