import { Schema, model } from "mongoose";


const UserSchema = new Schema({
    username: {type:"String"},
    email: {type:"String"},
    ref_id: {type:"String"}
})

const UserCollection = model("UserCollection", UserSchema)
export default UserCollection