

// Add your requirements
var restify = require('restify'); 
var builder = require('botbuilder'); 
 
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || 3978, function() 
{
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat bot  
var connector = new builder.ChatConnector
({ 

  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
 }); 

var bot = new builder.UniversalBot(connector, [
    function (session) {
        session.send("Welcome to the Servicenow BOT.");
        session.send("what is your need");
        session.send("A>Create an incident");
        session.send("B>Close an incident");
        builder.Prompts.text(session, "Reply A or B");
      
    },
    
    function (session, results) {
        session.dialogData.yourAnswer = results.response;
        if (session.dialogData.yourAnswer == 'A')
        {     builder .Prompts.text(session,"Describe your problem"); 
    }
},
  function (session, results) {        
session.dialogData.desc = results.response;
            var https = require('https');
            jsonObject = JSON.stringify({
                "short_description" : results.response
            });
             
            // build header
            //var postheaders = {
            //    'Content-Type' : 'application/json',
            //    'Content-Length' : Buffer.byteLength(jsonObject, 'utf8')
            //};
             
            // the post options
            var optionspost = {
                host : 'dev30526.service-now.com',
                port : 443,
                path : '/api/now/table/incident',
                method : 'POST',
                auth: 'admin:Snow@2105'
               // headers : postheaders
            };
             
             
            invokeInsert(jsonObject);
            
            function invokeInsert(jsonObject) {
                
                console.info('Start the POST call');
                // do the POST call
                var req = https.request(optionspost, function(res) {
                console.log("statusCode: ", res.statusCode);
                //  console.log("headers: ", res.headers);
                var result = "";
                res.on('data', function(data) {
                    console.info('POST result:'+data);
                    result += data;
                });
            
               res.on('end', function() {
                  var responseObject = JSON.parse(result);
                  //session.send("You said: %s", session.message.text);
                    console.log('Record number..'+responseObject.result.number);
                    session.send("Incident %s is created with description %s", responseObject.result.number,results.response);
                    });
                
            });
            // put json
            req.write(jsonObject);
            req.end();
            req.on('error', function(e) {
                console.error(e); 
			})	;	
        }
    },

        
       /* else if (session.dialogData.yourAnswer == 'B')
          {  
           session.beginDialog('closeIncident');
          }
       else 
        {
           session.beginDialog('checkResponse');
    }*/ 
    
	
     function(session,results)    
     {
    session.endDialog();
     }
    
   
]);

/*
//Dialog to create an incident
bot.dialog('createIncident',[
    function(session){
      builder .Prompts.text(session,"Describe your problem");  
    },
    function(session,results) {
       session.dialogData.description = results.response; 
       //below one line code is added for call to Snow
        dataToSnow(session.dialogData.description);
       // session.endDialogWithResult(results);
       session.send(" Incident has been created with description %s",session.dialogData.description);
        
        session.endDialog();
    }
]);
*/

   
  //dialog to close the incident
  
  bot.dialog('closeIncident',[
   function(session){
       builder.Prompts.text(session,"Tell the incident number"); 
   } ,
   function(session,results)  {
       //session.endDialogWithResult(results);
        session.send ("Incident number %s has been closed ",session.message.text);
       session.endDialog(); 
   }
  ]);

  //dialog to check the response

  bot.dialog('checkResponse',[
   function(session){
       builder.Prompts.text(session,"Please type 'A' or 'B' ");
    },
  function(session,results)
  {
        session.dialogData.yourAnswer = results.response;
        if (session.dialogData.yourAnswer == 'A')
        {   
       
        session.beginDialog('createIncident'); 
        
        }
        
        else if (session.dialogData.yourAnswer == 'B')
          {  
      
      session.beginDialog('closeIncident');
          }
     else 
        {
        
           session.beginDialog('checkResponse');
    } 
  },
  ])
server.post('/api/messages', connector.listen());


//end of new code

// ServiceNow wrapper begins

/*
function dataToSnow(desc)
{
    console.log ("came into dataTOsnow function");
c
 
 
invokeInsert(jsonObject);

function invokeInsert(jsonObject) {
    
    console.info('Start the POST call');
    // do the POST call
    var req = https.request(optionspost, function(res) {
    console.log("statusCode: ", res.statusCode);
    //  console.log("headers: ", res.headers);
    var result = "";
    res.on('data', function(data) {
        console.info('POST result:'+data);
        result += data;
    });

   res.on('end', function() {
      var responseObject = JSON.parse(result);
      //session.send("You said: %s", session.message.text);
        console.log('Record number..'+responseObject.result.number);
        //session.send("Incident is created: %s", responseObject.result.number);
        });
    
});
// put json
req.write(jsonObject);
req.end();
req.on('error', function(e) {
    console.error(e);
});
//return inc;
//return  callback(responseObject.result.number);
}
}
*/

server.get('/', restify.plugins.serveStatic({
 directory: __dirname,
 default: '/index.html'
}));
