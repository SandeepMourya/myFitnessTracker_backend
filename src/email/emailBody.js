const emailBody = (name,image1,image2) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
    
        <title>Document</title>
    </head>
    
    
    <body>
        <table class="mainContainer" style="padding: 15px; display: flex;margin: auto;flex-direction: column;max-width: fit-content;width: 80%;">
    
            <tr class="hello" style="font-family: cursive;font-size: 22px;">
                <td style="font-family: cursive">Hello ${name}, Welcome to </td>
            </tr>
            <tr class="wrapper" style="display: flex;align-items: center;">
                <td class="title" style="font-family: cursive;font-size: 35px;color: #ff1a75;">MY FITNESS TRACKER</td>
                <td> <img class="image" src=${image1} style="width: 52px;height: 52px;"></td>
                
            </tr>
    
            <tr class="textContent" style="font-family: cursive;margin-bottom: 25px;">
                <td style="font-family: cursive">Food tables or journals are a great way to check yourself out about your daily diet.<br>It’s not
                    intended as a way to catch you, but a way to get a clear idea of ​​where to start when looking to
                    improve your diet. <br>A food tracking app that takes pictures of food items as implants and tracks the
                    foods you eat every day. The app generates a report at the end of the month.</td>
            </tr>
            <tr class="mailBodyImage" style="display: flex;align-items: center;justify-content: center;">
                <td><img src=${image2} alt="" srcset="" style="width: 402px;height: 402px;margin-bottom: 25px;"></td>
            </tr>
            <tr class="textContent" style="font-family: cursive;margin-bottom: 25px;">
                <td style="font-family: cursive">
                    Voila! You are all set to Track your Diet. <br>Do check out our Blogs to get additional Information on
                    Best health and lifestye prectices.<br><br>
                    Our Best,<br>
                    <span style="font-family: cursive"><b>Team My Fitness Tracker</b></span>
                </td>
    
            </tr>
        </table>
    
    
    
    
    </body>
    
    </html>`
}
module.exports={
    emailBody
}