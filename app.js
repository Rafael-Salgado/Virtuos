 const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const mysql = require("mysql");
const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "database_virtuos",
});

require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });
  try {
    const accessToken = await oauth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        accessToken: accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    return transporter;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
};

//Middle Word
app.use(express.static(__dirname + "/"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/about.html"));
});
router.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/contact.html"));
});
router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/login.html"));
});
router.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/index.html"));
});
router.get("/admin", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/admin.html"));
});
router.get("/store", function (req, res) {
 res.sendFile(path.join(__dirname + "/html/shop.html"));
});
router.get("/product", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/single-product.html"));
});
router.get("/car", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/cart.html"));
});
router.get("/account", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/micuenta.html"));
});
/* Conexión tabla de productos */
router.get("/product-data", function(req,res){
  connection.query("SELECT * from products", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

router.post("/send-mail", function (req, res) {
  let message = `Phone: ${req.body.phone}\nName: ${req.body.name}\nEmail: ${req.body.email}\n${req.body.message}`;
  console.log(process.env.EMAIL);
  sendEmail({
    subject: req.body.subject,
    text: message,
    to: "rafael.e.salgado109@gmail.com",
    from: process.env.EMAIL,
  });
  res.redirect("/html/index.html");
});
/* Insertar nuevo producto */
router.post("/new-product", function (req, res) {
  console.log(req.body.productName);
 
  const insert = `INSERT INTO products (id,product_name,price,provee,product_description,song,category,product_image,stock) VALUES (null,'${req.body.productName}',${parseFloat(req.body.productPrice)},'${req.body.productSupplier}','${req.body.productDescription}','${req.body.productSong}','${req.body.productCategory}','${req.body.productImg}',${parseInt(req.body.productStock)})`;
  connection.query(insert, (err, rows) => {
    if(err) throw err
  })
 
  res.sendStatus(200);
});

app.use("/", router);
app.listen(port, () => {
  console.log("Servidor en el puerto", port);
});


/* Conexión tabla de usuario */
router.get("/user-data", function(req,res){
  connection.query("SELECT * from users", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});



/* Insertar nuevo usuario */
router.post("/new-user", function (req, res) {
  console.log(req.body.productName);
 
  const insert = `INSERT INTO users (id,user_name,user_lastname,email,user_phone,user_password) VALUES (null,'${req.body.name}',${req.body.last_name},'${req.body.email}','${req.body.phone}','${req.body.pass}','${req.body.pass2}')`;
  connection.query(insert, (err, rows) => {
    if(err) throw err
  })
 
  res.sendStatus(200);
});

app.use("/", router);
app.listen(port, () => {
  console.log("Servidor en el puerto", port);
});
