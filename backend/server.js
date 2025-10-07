import app from "./app.js";
import dotenv from "dotenv";

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})
