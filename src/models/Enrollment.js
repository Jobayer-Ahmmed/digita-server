import { Schema, model } from "mongoose";


const EnrollSchema = new Schema({
    name: {type:"String"},
    email:{type:"String"},
    course_name: {type:"String"},
    course_fee: {type:"String"},
    ref_id: {type:"String"}

})

const EnrollCollection = model("EnrollCollection", EnrollSchema)
export default EnrollCollection