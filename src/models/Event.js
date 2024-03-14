import { Schema, model } from "mongoose";


const EventSchema = new Schema({
    event_name: "String",
    event_image: "String",
    event_description: "String"
})

const EventCollection = model("EventCollection", EventSchema)
export default EventCollection