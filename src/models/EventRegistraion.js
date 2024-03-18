import { Schema, model } from "mongoose";

const EventRegistrationSchema = new Schema({
    name: {type:"String"},
    email: {type:"String"},
    event_name: {type:"String"}
})

const EventRegistrationCollection = model("EventRegistrationCollection", EventRegistrationSchema)
export default EventRegistrationCollection