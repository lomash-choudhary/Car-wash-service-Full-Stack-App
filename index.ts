import prismaDBClient from "./db/connectToDB";
import app from "./app";
const listenPort = process.env.PORT

prismaDBClient
.$connect()
.then(() => {
    console.log(`Connected to database successfully`);
    app.listen(listenPort, () => {
        console.log(`App is listening on port ${listenPort}`)
    })
})
.catch((error) => {
    console.log(`Error occured while connecting to Database ${error}`)
})

