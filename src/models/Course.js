import { Schema, model } from "mongoose";


const CourseSchema = new Schema({
    course_name: "String",
    course_image: "String",
    course_description: "String"
})

const CourseCollection = model("CourseCollection", CourseSchema)
export default CourseCollection