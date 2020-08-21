import dotenv from "dotenv";
import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import { getProfileById } from "./endpoints/getProfileById";
import { signup } from "./endpoints/signup";
import { login } from "./endpoints/login";

/*******| CONFIGS |*******/
dotenv.config();
const app = express();
app.use(express.json());
/**************************/

/************************| ENDPOINTGS |**************************/
//...Endpoints vão aqui...
app.post("/signup", signup);
app.post("/login", login);
// app.get("/user/profile", getOwnProfile);
app.get("/user/:id", getProfileById);
// app.post("/recipe", createRecipe);
// app.get("/recipe/:id", getRecipeById);
// app.post("/user/follow", followUserById);
// app.post("/user/unfollow", unfollowUserById);
// app.get("/user/feed", getFeedRevenue);

/****************************************************************/

/***************************| LOCALHOST |************************************/
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
/*****************************************************************************/
