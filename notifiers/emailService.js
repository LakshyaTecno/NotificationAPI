const nodemailer =require('nodemailer');

module.exports=nodemailer.createTransport({
    port:465,
    service:"gmail",
    auth:{
        user:"lakshyatecno@gmail.com",
        pass:"bqmdilxpsmljxahl",
    },
    secure:true
});