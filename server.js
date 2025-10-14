import express from "express";
import { type } from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));


const emails = [];

app.get("/", (req, res)=>{
    res.render("index", { message:"", type: "" });
});

app.post("/notify", (req, res)=>{
    const email = req.body.email?.trim().toLowerCase()

    let message = "";
    let type = "";

    if(email && !emails.includes(email)) {
        emails.push(email)
        message = "* Email saved successfully!";
        type = "success";
    }else if (emails.includes(email)) {
        message = "* Email already Registered!";
        type = "warning";
    } else {
        message = "❌ * Please enter a valid email.";
        type = "error";
    }
    
    console.log("Email has been added:", emails)
    res.render("index", {message, type});
    //res.redirect("/")
});

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})