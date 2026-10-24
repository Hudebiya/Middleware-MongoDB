import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/db/db.js";

const port = 4000;

connectDB()
  
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  

