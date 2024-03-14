import express from "express"
import applyMiddleWare from "./middlewares/applyMiddleWare.js"
import coursePost from "./routes/courseRoute/coursePostRoute/index.js"
import courseGet from "./routes/courseRoute/courseGetRoute/index.js"
import courseUpdate from "./routes/courseRoute/courseUpdateRoute/index.js"
import courseDelete from "./routes/courseRoute/courseDeleteRoute/index.js"
import eventPost from "./routes/eventRoute/eventPostRoute/index.js"
import eventGet from "./routes/eventRoute/eventGetRoute/index.js"
import eventUpdate from "./routes/eventRoute/eventUpdateRoute/index.js"
import eventDelete from "./routes/eventRoute/eventDeleteRoute/index.js"


const app =express()


applyMiddleWare(app)
app.use(coursePost)
app.use(courseGet)
app.use(courseUpdate)
app.use(courseDelete)
app.use(eventPost)
app.use(eventGet)
app.use(eventUpdate)
app.use(eventDelete)


app.get("/health", (req, res)=>{
    res.send("Digita server is running")
})


app.all("*", (req, res, next)=>{
    const myErr = new Error(`The request URL is invalid : [${req.url}]`)
    myErr.status=404
    next(myErr)
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({message : err.message})
})

export default app