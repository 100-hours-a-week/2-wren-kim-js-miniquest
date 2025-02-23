import { add, subtract } from "./operations.js";
import User from "./userProfile.js";

console.log(add(10, 5));
console.log(subtract(10, 5));

const user = new User("Jane", 25);
console.log(user.getProfile());