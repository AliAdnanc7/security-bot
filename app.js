var TelegramBot = require('node-telegram-bot-api');


var token = 'token';
//  git add .
//  git commit -am "make it better"
//  git push heroku master



var groub = [
  '-1001435959304',
  '-1001337179089',
  '-1001190051449',
  '-1001458629422',
  '-1001359761204',
  '655049808',
  '1150981021',
  '-1001394082428'
  
]


var kek=[
        'instagram.com',
        'fb.com',
        'facebook.com',
        'twitter.com',
        'snapchat.com',
        'whatsapp.com',
        'meet.google.com'

        ]

        var grouburl=[
          'رابط المجموعه',
          'رابط الكروب',
          'رابط كروب',
          'رابط مجموعه',
     
          'رابط المجموعة',
          'رابط مجموعة'
          ]    
var sg='https://t.me/c/1435959304/188051'
//  الازرار

let suo = {
  'تطبيقات  Math':{
      'WolframAlpha':"1",
      'symbolab':'2',
      ' microsoft math solver':'3'

  },
  
'روابط المجموعات':{
          'Engineering_Students':'4',
          'Mechanical':'5',
          'Math':'6',
          'English':'7',
          'AutoCAD':'8',
          'Chegg' :'9'
                   },
    'قنوات':{

      'روابط':'10'
    }               
 
}




// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, {polling: true});
bot.on("polling_error", (err) => console.log(err));

 
   
bot.on("message",function(msg){
   
  console.log(msg)
  if(msg.text==="id"){
    bot.sendMessage(msg.chat.id,msg.chat.id)
  }

  var  mention = "["+msg.from.first_name+"](tg://user?id="+(msg.from.id)+")"

  var  myadmin = "["+'Ali'+"](https://t.me/"+('AliS219')+")"
  var  chann3 = "["+'الرسم الهندسي'+"](https://t.me/"+('drawing_u_o_t')+")"
  var  chann4 = "["+'اوتوكاد AutoCAD'+"](https://t.me/"+('auto96/324')+")"


  if(msg.text==='id'  && msg.from.id==655049808){
/*
   bot.exportChatInviteLink(msg.chat.id).then((link)=>{

bot.sendMessage(msg.chat.id,"link"+' \n'+link)


   });
   */
   bot.sendMessage(msg.chat.id,msg.chat.id)
  }
    
  



  //مسح صور و الفيديوهات



  bot.getChatMember(msg.chat.id,msg.from.id)   
  .then(res=>{
           //في حالة عدم وجود العضو في القناة left
   if(res.status==="left"){
         console.log("oo")
                 }else{
                   //في حالة وجود العضوو بالقناة member
                    if(res.status==="member"){ 
                    
                      if(msg.audio || msg.video){
                        bot.deleteMessage(msg.chat.id,msg.message_id);
                        bot.sendMessage(488856795,mention+'\n'+'رسالة الشخص'+'\n'+msg.text,{
                          'parse_mode':'Markdown'})
                      }


                    }
                 }}) 

               
              
       







  
    console.log(msg)

  //الخاص
    if(msg.text  && msg.chat.type==='private'){

      bot.sendMessage(msg.chat.id,myadmin+'   '+"مطور بوت     "+' @'+'AliS219',
      {
        'parse_mode':'Markdown'
      }
      ); }


      var cha1 = -1001291966749 //idالقناة 
      var cha2 = -1001200684740 

      //قنوات الرسم

      var cha3 = -1001364685592
      var cha4 = -1001414780894
//فكشن لوب
    function checker(value) {
      for (var i = 0; i < groub.length; i++) {
          if (value.indexOf(groub[i]) > -1) {
              return true;
          }
      }
      return false;
  }

  //فكشن لوب
  function checker(value) {
    for (var i = 0; i < kek.length; i++) {
        if (value.indexOf(kek[i]) > -1) {
            return true;
        }
    }
    return false;
}

//فشكن الرابط مجموعه
function checker(value) {
  for (var i = 0; i < grouburl.length; i++) {
      if (value.indexOf(grouburl[i]) > -1) {
          return true;
      }
  }
  return false;
}
//فكشن لوب قنوات



//تحديث v3

if(msg.text.includes('www.chegg.com')&& groub.includes(msg.chat.id.toString())  ){
//bot.deleteMessage(msg.chat.id,msg.message_id)
bot.sendMessage(msg.chat.id,mention+'\n Chegg free \n\n https://t.me/chegg2/120',{

  'disable_web_page_preview':true ,
    'parse_mode':'Markdown'
        }).then((result) => { setTimeout(() => {
          bot.deleteMessage(msg.chat.id, result.message_id)
          }, 25 * 1000)}).catch(err => console.log(err))

        }





if(msg.text && grouburl.includes(msg.text.toString())){

  bot.exportChatInviteLink(msg.chat.id).then((link)=>{

    bot.sendMessage(msg.chat.id,'الرابط'+'\n'+link)

}) 

} else if(msg.text==='/info@sSbee_bot'){
  bot.deleteMessage(msg.chat.id,msg.message_id); 
bot.sendMessage(msg.chat.id,mention+' يرجى زيارة الرابط الاتي '+'\n   https://t.me/sufy6/505 ',
{
  'disable_web_page_preview':true ,
  
'parse_mode':'Markdown'
}).then((result) => { setTimeout(() => {
    bot.deleteMessage(msg.chat.id, result.message_id)

    
    }, 15 * 1000)}).catch(err => console.log(err))

} else if (msg.text==='/chegg@sSbee'){
  bot.deleteMessage(msg.chat.id,msg.message_id); 
  bot.sendMessage(msg.chat.id,mention+' يرجى زيارة الرابط الاتي '+'\n ',
  {

   'reply_to_message_id': message.message_id ,
  'parse_mode':'Markdown',
 
  'reply_markup':{ 

    'inline_keyboard':[



  [{text:"::رابط ☑️::",url:'https://t.me/sufy6/1170'}],
  


    ]}}).then((result) => { setTimeout(() => {
      bot.deleteMessage(msg.chat.id, result.message_id)
   
      }, 15 * 1000)}).catch(err => console.log(err))
   
}
 

//تحديث V2
if(msg.text=='/bot@sSbee_bot'&& groub.includes(msg.chat.id.toString())  ){
  bot.deleteMessage(msg.chat.id,msg.message_id); 
 
  bot.sendMessage(msg.chat.id,mention+'\n'+'اختر ما تريد \n Bot by '+myadmin+' ',{ 
    'parse_mode':'Markdown' ,  
    'disable_web_page_preview' :true ,
   'reply_markup':{
   'inline_keyboard':[
    [{'text':'Go:>>',
    'callback_data':'رجوع' + '-' + msg.from.id}]
   ]}
}).then((result) => { setTimeout(() => {
  bot.deleteMessage(msg.chat.id, result.message_id)
  }, 45 * 1000)})
.catch(err => console.log(err))
                   }

 // [{text:"رابط قناة 2",url:'https://t.me/suffy96'}]
//الاشتراك الاجباري                   
    if(msg &&  msg.chat.id !=-1001190051449){
    console.log(msg)
   bot.getChatMember(cha1,msg.from.id)   
  .then(res=>{
           //في حالة عدم وجود العضو في القناة left
   if(res.status==="left"){
   bot.deleteMessage(msg.chat.id,msg.message_id)
   bot.sendMessage(msg.chat.id,mention+'\n '+"🚸| عذرا عزيزي\n 🚫| لا يمكنك المشاركة في المجموعة الا بعد الاشتراك في القناة 👇\n 1⃣- https://t.me/suffy96/145 \n\n 2⃣- https://t.me/sufy6/505   \n bot by "+myadmin+" "
     ,{
      'disable_web_page_preview':true ,

            'parse_mode':'Markdown'

               }).then((result) => { setTimeout(() => {
                  bot.deleteMessage(msg.chat.id, result.message_id)
                  }, 20 * 1000)}).catch(err => console.log(err))
                 }else{
                   //في حالة وجود العضوو بالقناة member
                    if(res.status==="member"){ 

              
    //القناة الثانيه            
                
    bot.getChatMember(cha2,msg.from.id)   
  .then(res=>{
           //في حالة عدم وجود العضو في القناة left
   if(res.status==="left"){
   bot.deleteMessage(msg.chat.id,msg.message_id)
   bot.sendMessage(msg.chat.id,mention+'\n '+"🚸| عذرا عزيزي\n 🚫| انت لم تشترك بالقناة الثانيه 👇\n  \n\n 2⃣- https://t.me/sufy6/505   \n bot by "+myadmin+" ",
               {
                'disable_web_page_preview':true ,
            'parse_mode':'Markdown'
                

                  }).then((result) => { setTimeout(() => {
                  bot.deleteMessage(msg.chat.id, result.message_id)
                  }, 20 * 1000)}).catch(err => console.log(err))
                 }else{
                   //في حالة وجود العضوو بالقناة member
                    if(res.status==="member"){ }
                 }}) 

                    }
                 }})       
                
                } else {
    //قنوات الرسم الهندسي   
if(msg){ 
  


  console.log(msg)
  bot.getChatMember(cha3,msg.from.id)   
 .then(res=>{
          //في حالة عدم وجود العضو في القناة left
  if(res.status==="left"){
  bot.deleteMessage(msg.chat.id,msg.message_id)
  bot.sendMessage(msg.chat.id,mention+'\n '+"🚸| عذرا عزيزي\n 🚫| لا يمكنك المشاركة في المجموعة الا بعد الاشتراك في القناة 👇\n 1⃣- "+ chann3 +  " \n\n 2⃣- "+ chann4+"    \n bot by "+myadmin+" "
    ,{
     'disable_web_page_preview':true ,

           'parse_mode':'Markdown'

              }).then((result) => { setTimeout(() => {
                 bot.deleteMessage(msg.chat.id, result.message_id)
                 }, 20 * 1000)}).catch(err => console.log(err))
                }else{
                  //في حالة وجود العضوو بالقناة member
                   if(res.status==="member"){ 




           
   //القناة الثانيه            
               
   bot.getChatMember(cha4,msg.from.id)   
 .then(res=>{
          //في حالة عدم وجود العضو في القناة left
  if(res.status==="left"){
  bot.deleteMessage(msg.chat.id,msg.message_id)
  bot.sendMessage(msg.chat.id,mention+'\n '+"🚸| عذرا عزيزي\n 🚫| انت لم تشترك بالقناة الثاني👇\n   1⃣- "+chann3+" \n\n 2⃣- "+chann4+"   \n bot by "+myadmin+" ",
              {
               'disable_web_page_preview':true ,
           'parse_mode':'Markdown'
               

                 }).then((result) => { setTimeout(() => {
                 bot.deleteMessage(msg.chat.id, result.message_id)
                 }, 20 * 1000)}).catch(err => console.log(err))
                }else{
                  //في حالة وجود العضوو بالقناة member
                   if(res.status==="member"){ }
                }})}}})}}



                
//رسالة للامن
  if(msg.text && groub.includes(msg.chat.id.toString())  ){        
    bot.getChatMember(msg.chat.id,msg.from.id) .then(res=>{
                 //في حالة عدم وجود العضو في القناة left          
                  if(res.status==='member' && kek.includes(msg.text)  )
                
                  {
                    if(msg.audio || msg.video){
                      bot.deleteMessage(msg.chat.id,msg.message_id);
                      bot.sendMessage(488856795,mention+'\n'+'رسالة الشخص'+'\n'+msg.text,{
                        'parse_mode':'Markdown'})
                    }
                  bot.deleteMessage(msg.chat.id,msg.message_id);
                  bot.sendMessage(488856795,mention+'\n'+'رسالة الشخص'+'\n'+msg.text,{
                    'parse_mode':'Markdown'})
          
                  }else{if(res.status==='administrator' || res.status==='creator')
                    {} }
                  if(res.status==='member' && msg.text=='/s')
                   {

                 bot.sendMessage(msg.chat.id,mention+' '+'القوانين'+'\n ',{
              'parse_mode':'Markdown',
              'reply_markup':{       
                     'inline_keyboard':[

                      [{text:'هنا',url:sg}]
                     ]
                   }

                 }).then((result) => { setTimeout(() => {
                  bot.deleteMessage(msg.chat.id, result.message_id)
              }, 7 * 1000)})
              .catch(err => console.log(err))

                  }
               })
               return true
              }else{


              }


});



//كال باك داتا

bot.on('callback_query', (async function onCallbackQuery(callbackQuery) {
  var action = callbackQuery.data;
  bot.answerCallbackQuery({callback_query_id:callbackQuery.id})
  action=action.split('-');
  let msg = callbackQuery.message;
  var opt = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    // inline_message_id: callbackQuery.id,
  };

 

  
  if (action[1]==callbackQuery.from.id){


    
  if( action[0]=='1'){
   
bot.forwardMessage(msg.chat.id,-1001200684740,724)}

if( action[0]=='2'){
   
  bot.forwardMessage(msg.chat.id,-1001200684740,582)}

  
if( action[0]=='3'){
   
  bot.forwardMessage(msg.chat.id,-1001200684740,1064)}

  //رابط كروب ENG  
if( action[0]=='4'){
   
  bot.exportChatInviteLink(-1001435959304).then((link)=>{

   bot.sendMessage(msg.chat.id,'الرابط'+'\n'+link)
  })}
//رابط كروب ميكانيك
  if( action[0]=='5'){
   
    bot.exportChatInviteLink(-1001337179089).then((link)=>{
  
     bot.sendMessage(msg.chat.id,'الرابط'+'\n'+link)
    })}
//Math
    if( action[0]=='6'){
   
      bot.exportChatInviteLink(-1001359761204).then((link)=>{
    
       bot.sendMessage(msg.chat.id,'الرابط'+'\n'+link)
      })}
//English
if( action[0]=='7'){
   
  bot.exportChatInviteLink(-1001458629422).then((link)=>{

   bot.sendMessage(msg.chat.id,'الرابط'+'\n'+link)
  })}
//اوتكاد
if( action[0]=='8'){
   
  bot.exportChatInviteLink(-1001190051449).then((link)=>{

   bot.sendMessage(msg.chat.id,'الرابط'+'\n'+link)
  })}
//chegg

if( action[0]=='9'){
   
  bot.exportChatInviteLink(75757577).then((link)=>{

   bot.sendMessage(msg.chat.id,'الرابط'+'\n'+link)
  })
  bot.sendMessage(msg.chat.id,'رابط'+'\n   https://t.me/Chegg3')
}
//قنوات
if (action[0]=='10'){

  bot.sendMessage(msg.chat.id,'\n'+'اختر ما تريد',{      
    'reply_to_message_id':msg.message_id,
   'reply_markup':{
   'inline_keyboard':[

    [{'text':'Eng Mustafa Jabbar','url':'https://t.me/sufy6'}],
    [{'text':'All Engineering Books','url':'https://t.me/draw5'}],
    [{'text':'قناة التقارير الجامعية','url':'https://t.me/report70'}],
    [{'text':'Engineering Exams','url':'https://t.me/exam86'}],
    [{'text':'تعلم اللغة الانكليزية','url':'https://t.me/teaching96'}]

   ]}
}).then((result) => { setTimeout(() => {
  bot.deleteMessage(msg.chat.id, result.message_id)
}, 60 * 1000)})
.catch(err => console.log(err))
                    }
  

    //
    if (action[0] in suo){
      var keyboard = [];
      for (var key1 in suo[action[0]]){
        key =[{
          'text':key1.replace('_',' ').replace('_',' '),
          'callback_data':suo[action[0]][key1] + '-' + callbackQuery.from.id
        }]
        keyboard.push(key)
      };

      
      key4 =[{
        'text':'رجوع',
        'callback_data':'رجوع' + '-' + callbackQuery.from.id
      }]
      keyboard.push(key4)
      let opts = {
          inline_keyboard: keyboard,
      }
      bot.editMessageReplyMarkup(opts,opt);
    } else if('خروج'==action[0]){

      bot.deleteMessage(msg.chat.id,msg.message_id);
     //bot.deleteMessage(msg.chat.id,msg.reply_to_message.message_id);

    
    
    }else if('رجوع'==action[0]){
      var keyboard = [];
      for (var key1 in suo){
        key =[{
          'text':key1.replace('_',' ').replace('_',' '),
          'callback_data':key1 + '-' + callbackQuery.from.id
        }]
        keyboard.push(key)
      };
      key4 =[{
        'text':'خروح',
        'callback_data':'خروج' +  '-' + callbackQuery.from.id
      }]
      keyboard.push(key4)
      let opts = {
          inline_keyboard: keyboard,
      }
      bot.editMessageReplyMarkup(opts,opt);
  }
}}));
/*
  bot.on('callback_query',function (Q){


 
   var data=Q.data ;

   
  
   if(data=='2'  ){
     bot.deleteMessage(Q.message.chat.id,Q.message.message_id)
     bot.answerCallbackQuery(Q.id, {text: 'اهلا و سهلا في مجموعة المصطفى \n يرجى الاطلاع على القوانين المجموعه عن طريق كتابة s/', show_alert: true  },);
   } else{ }
  

  });
*/
  
bot.on('new_chat_member', (async function new_chat_members(msg) {
  try {
      bot.deleteMessage(msg.chat.id, msg.message_id)
  } catch (error) {}
}));


bot.on('left_chat_member', (async function left_chat_member(msg) {
  try {
      bot.deleteMessage(msg.chat.id, msg.message_id)
  } catch (error) {}
}));




