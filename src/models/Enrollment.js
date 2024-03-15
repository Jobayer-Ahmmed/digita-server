import { Schema, model } from "mongoose";


const EnrollSchema = new Schema({
    name: "String",
    email:"String",
    course_name: "String",
    course_fee: "String"
})

const EnrollCollection = model("EnrollCollection", EnrollSchema)
export default EnrollCollection