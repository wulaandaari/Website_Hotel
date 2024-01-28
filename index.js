const Room = require("./models/room");
const Authrouter = require("./routes/auth");
const Roomrouter = require("./routes/room");
const BookRouter = require("./routes/booking");
const PaymentRouter = require("./routes/payment");
const cookieParser = require("cookie-parser");

const express = require("express");
const session = require("express-session");
const Booking = require("./models/booking");
const app = express();


app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "Kelompok 1",

}))
app.use(express.static(__dirname + "/public"))
app.use((req,res,next) => {
    let err = req.session.error;
    const succes = req.session.succes;
    delete req.session.error;
    delete req.session.succes;
    res.locals.message = "";
    res.locals.user = req.session.user;
    if (err) res.locals.message = '<p class="msg-error">'+ err + '</p>';
    if (succes) res.locals.message = '<p class="msg-succes">'+ succes + '</p>';
    next()
})

app.use("/auth", Authrouter)
app.use("/room", Roomrouter)
app.use("/book", BookRouter)
app.use("/payment", PaymentRouter)
app.get("/", async(req,res) => {
    const data = await Room.findAll();
    if(typeof req.session.user === undefined || !req.session.user) {
        res.redirect("/login")
    }
    res.render("pages/index", {rooms: data})
})
app.get("/login", (req,res) => {
    if(req.session.user && typeof req.session.user !== undefined) {
        res.redirect("/")
    }
    res.render("pages/login")
})

app.get("/register", (req,res) => {
    if(req.session.user && typeof req.session.user !== undefined) {
        res.redirect("/")
    }
    res.render("pages/signup")
})

app.get("/book/:id", async(req,res) => {
    if(typeof req.session.user === undefined || !req.session.user) {
        res.redirect("/login")
    }
    const {id} = req.params;
    const data = await Room.findByPk(id)
    res.render("pages/book", {room: data})
})

app.get("/payment/:id", async(req,res) => {
    if(!typeof req.session.user === undefined || !req.session.user) {
        res.redirect("/login")
    }
    const {id} = req.params;
    const data = await Booking.findByPk(id, {include: {
        model: Room,
        attributes: ["price"]
    }})
    const dataCheckOut = new Date(data.check_out);
    const dateCheckIn = new Date(data.check_in);
    const date =  dataCheckOut.getDate() - dateCheckIn.getDate()
    const price = date * parseFloat(data.room.price.split(" ")[1].split(".").join(""));
    console.log(price)

    const amount = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(price)

    res.render("pages/payment", {price: amount, bookId:data.id, amount: price});
})

app.get("/logout", (req,res) => {
    req.session.destroy()
    res.redirect("/login")
})


app.listen(5000, () =>  {

    console.log("Hello world")
})
