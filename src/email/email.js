const { path } = require('express/lib/application');
const nodemailer = require('nodemailer')
const {emailBody} = require("./emailBody")


const transporter = nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    },
  
})



const sendWelcomeEmail = (name,email)=>{
    let body = emailBody(name,"cid:menu","cid:mailBody")
    
    const options={
        from:process.env.EMAIL,
        to:email,
        subject:"Welcome",
        text:"Registration Success",
        template: 'email',
        attachments:[{
            filename:'menu.png',
            path:'src/email/view/menu.png',
            cid:"menu"
        },{
            filename:'mailBody.jpg',
            path:'src/email/view/mailBody.jpg',
            cid:"mailBody"
        }],
       
        html:body
    }

    transporter.sendMail(options,(error,info)=>{
        if(error){
            console.log(error);
            return
        }
        console.log("Sent "+info.response)
    })

}


module.exports ={
    sendWelcomeEmail
}