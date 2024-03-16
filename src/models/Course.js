import { Schema, model } from "mongoose";


const CourseSchema = new Schema({
    course_name: {type:"String"},
    course_image: {type:"String"},
    course_description: {type:"String"},
    course_duration: {type:"String"},
    course_fee: {type:"String"}
})

const CourseCollection = model("CourseCollection", CourseSchema)
export default CourseCollection