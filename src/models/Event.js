import { Schema, model } from "mongoose";


const EventSchema = new Schema({
    event_name: {type:"String"},
    event_image: {type:"String"},
    event_description: {type:"String"}
})

const EventCollection = model("EventCollection", EventSchema)
export default EventCollection