import express from "express"
import applyMiddleWare from "./middlewares/applyMiddleWare.js"
import coursePost from "./routes/courseRoute/coursePostRoute/index.js"
import courseGet from "./routes/courseRoute/courseGetRoute/index.js"
import courseUpdate from "./routes/courseRoute/courseUpdateRoute/index.js"
import courseDelete from "./routes/courseRoute/courseDeleteRoute/index.js"
import courseGetById from "./routes/courseRoute/courseGetRouteById/index.js"
import eventPost from "./routes/eventRoute/eventPostRoute/index.js"
import eventGet from "./routes/eventRoute/eventGetRoute/index.js"
import eventUpdate from "./routes/eventRoute/eventUpdateRoute/index.js"
import eventDelete from "./routes/eventRoute/eventDeleteRoute/index.js"
import eventGetById from "./routes/eventRoute/eventGetRouteById/index.js"
import enrollmentPost from "./routes/enrollmentRoute/enrollmentPostRoute/index.js"
import enrollmentGet from "./routes/enrollmentRoute/enrollmentGetRoute/index.js"
import enrollmentGetByEmail from "./routes/enrollmentRoute/enrollmentGetByEmail/index.js"
import enrollmentGetByRef from "./routes/enrollmentRoute/enrollmentGetByRef/index.js"
import enrollmentGetForPagination from "./routes/enrollmentRoute/enrollmentGetRouteForPagination/index.js"
import enrollmentCountGetRoute from "./routes/enrollmentRoute/enrollmentCountGetRoute/index.js"
import userPost from "./routes/userRoute/userPostRoute/index.js"
import userGet from "./routes/userRoute/userGetRoute/index.js"
import userGetByRef from "./routes/userRoute/userGetRouteByRef/index.js"
import userGetByEmail from "./routes/userRoute/userGetRouteByEmail/index.js"
import eventRegistrationPost from "./routes/eventRegsitration/eventRegsitrationPostRoute/index.js"
import eventRegistrationGetByEmail from "./routes/eventRegsitration/eventRegistraionGetRouteByEmail/index.js"
import eventRegistrationCountGet from "./routes/eventRegsitration/eventRegistrationCountGetRoute/index.js"
import eventRegistrationGet from "./routes/eventRegsitration/eventRegistrationGetRoute/index.js"
import enrollmentTodayGet from "./routes/enrollmentRoute/enrollmentGetRouteWithTime/enrollmentTodayGetRoute/index.js"
import enrollmentWeekGet from "./routes/enrollmentRoute/enrollmentGetRouteWithTime/enrollmentWeekGetRoute/index.js"
import enrollmentMonthGet from "./routes/enrollmentRoute/enrollmentGetRouteWithTime/enrollmentMonthGetRoute/index.js"
import enrollmentYearGet from "./routes/enrollmentRoute/enrollmentGetRouteWithTime/enrollmentYearGetRoute/index.js"


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
app.use(courseGetById)
app.use(eventGetById)
app.use(enrollmentPost)
app.use(enrollmentGet)
app.use(enrollmentGetForPagination)
app.use(enrollmentGetByEmail)
app.use(enrollmentGetByRef)
app.use(enrollmentCountGetRoute)
app.use(userPost)
app.use(userGet)
app.use(userGetByRef)
app.use(userGetByEmail)
app.use(eventRegistrationPost)
app.use(eventRegistrationGetByEmail)
app.use(eventRegistrationGet)
app.use(eventRegistrationCountGet)
app.use(enrollmentTodayGet)
app.use(enrollmentWeekGet)
app.use(enrollmentMonthGet)
app.use(enrollmentYearGet)

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