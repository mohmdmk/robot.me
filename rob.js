const { listenerCount } = require('events');
const {Telegraf}= require('telegraf');

const bot = new Telegraf ('1934646826:AAFTGt_lLrL3Z4Iv7Q1KTVT07KwqsePNKMg');

bot.start();

bot.command('start',ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id,'please type your name',{       
    })

})


var user_array = [];
// user_array.push(ctx.text)

const menu = ['a','b','c','d','f'];
let my_list=[]
 
if(menu.length%2==0){
    for(let a=0;a<menu.length;a+=2)
    { 
        my_list.push( [ { text: menu[a],
        callback_data : menu[a]},
        
        { text: menu[a+1],
            callback_data : menu[a+1]}]
        );
        }
        
        }
else if(menu.length%2==1){ 
        var b = menu.length-1;  
       
    for(let a=0;a<b;a+=2)
    { 
    
    my_list.push( [ { text: menu[a],
    callback_data : menu[a]},
    
     { text: menu[a+1],
        callback_data : menu[a+1]}]
        
    );}
     
    my_list.push( [ { text: menu[b],
    callback_data : menu[b]}]);
}
    

   
     
bot.hears('menu', ctx => {
    console.log(ctx.message.message_id)
    let menumassage=`now,we have menu!`;   
    bot.telegram.sendMessage(ctx.chat.id, menumassage,{
        reply_markup: {
            inline_keyboard:my_list
        }
    })
})


bot.command('show' , ctx =>{
    
    ctx.reply(user_array)
})


bot.on('text', (ctx) => 
{
    console.log(ctx) 
    user_array.push(ctx.update.message.text)
})


bot.launch();
