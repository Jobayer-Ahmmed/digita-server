import { Schema, model } from "mongoose";


const CourseSchema = new Schema({
    course_name: "String",
    course_image: "String",
    course_description: "String",
    course_duration: "String",
    course_fee: "String"
})

const CourseCollection = model("CourseCollection", CourseSchema)
export default CourseCollection