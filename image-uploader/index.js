const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const PORT = process.env.PORT || 3000;


// app".get("/",(req,res)=>{
//     res.send("<h1>hello world</h1>")
// })
//storage eongine

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

// const upload = multer({
//     dest:'./upload/images',
// })
app.use('/profile',express.static('upload/images'))
app.post("/upload",upload.single('profile'),(req,res)=>{
  res.json({
     success:1,
     profile_url:`http://localhost:3000/profile/${req.file.filename}`
  })  
})


app.listen(PORT, () => console.log(`app.listening on port ${PORT}`));
