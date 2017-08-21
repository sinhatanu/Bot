// Add your requirements
/*
var restify = require('restify'); 
var builder = require('botbuilder'); 

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || 3000, function() 
{
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat bot
var connector = new builder.ChatConnector
({ appId: '213c2245-3cb9-49a4-b852-41e4f6eea0b0', appPassword:'7WutpJBKjsXNAGALGVRMMiS' }); 
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// Create bot dialogs
bot.dialog('/', function (session) {
    session.send("Hello World");
});
*/
/*var bot = new builder.UniversalBot(connector, [
    function (session) {
        session.send("Welcome to the Servicenow BOT.");
        session.send("what is your need");
        session.send("A>Create an incident");
        session.send("B>Close an incident");
        builder.Prompts.text(session, "Reply A or B");
      
    },
    
    function (session, results) {
        session.dialogData.yourAnswer = results.response;
        builder.Prompts.text(session, "Specify your problem");
    },
    function (session, results) {
        session.dialogData.problem = results.response;

        
        session.send("Your problem is %s",session.dialogData.problem);
        
        session.endDialog();
    }
]);
server.post('/api/messages', connector.listen());

*/
/*
var restify = require('restify');
var builder = require('botbuilder');

//create bot and add dialogs
var bot = new builder.BotConnectorBot
({appId: 'YourAppID', appSecret : 'YourAppSecret'});
bot.add('/',function(session){
    session.send('Hello World');
});

//Setup Restify Server
var server = restify.createServer();
server.post('/api/messages',bot.verifyBotFrameWork(),bot.listen());
server.listen(process.env.port||3978, function(){
    console.log('%s listening to %s',server.name,server.url);
});
*/
// This loads the environment variables from the .env file
//require('dotenv-extended').load();

/*var builder = require('botbuilder');
var restify = require('restify');
var http = require('http'); //new
var local = true; //new

//For HTTPS
var https_options = {};
if (!local) {
    var fs = require('fs');
    https_options = {
        key: fs.readFileSync('C:\Users\Tanu Priya\Bot\node_modules\jsonwebtoken\test\ecdsa-public.pem'),
        certificate: fs.readFileSync('/etc/letsencrypt/live/your.domain/fullchain.pem'),
    };
}



// Setup Restify Server
//var server = restify.createServer();
var server = restify.createServer(https_options);
server.listen(process.env.port || process.env.PORT || 3000, function () {
    console.log('%s listening to %s', server.name, server.url);
});
//server.listen(process.env.port || process.env.PORT || 3978, function () {
  //  console.log('%s listening to %s', server.name, server.url);
//});

// Create chat bot and listen to messages
var connector = new builder.ChatConnector({
    //appId: process.env.MICROSOFT_APP_ID,
    //appPassword: process.env.MICROSOFT_APP_PASSWORD
    appId: '213c2245-3cb9-49a4-b852-41e4f6eea0b0', appPassword:'7WutpJBKjsXNAGALGVRMMiS' 
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
// Create bot dialogs
bot.dialog('/', function (session) {
    session.send("Hello World");
});
*/
/*
var bot = new builder.UniversalBot(connector, [
    function (session) {
        builder.Prompts.choice(session, 'What card would like to test?', CardNames, {
            maxRetries: 3,
            retryPrompt: 'Ooops, what you wrote is not a valid option, please try again'
        });
    },
    function (session, results) {

        // create the card based on selection
        var selectedCardName = results.response.entity;
        var card = createCard(selectedCardName, session);

        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
    }
]);

var HeroCardName = 'Hero card';
var ThumbnailCardName = 'Thumbnail card';
var ReceiptCardName = 'Receipt card';
var SigninCardName = 'Sign-in card';
var AnimationCardName = "Animation card";
var VideoCardName = "Video card";
var AudioCardName = "Audio card";
var CardNames = [HeroCardName, ThumbnailCardName, ReceiptCardName, SigninCardName, AnimationCardName, VideoCardName, AudioCardName];

function createCard(selectedCardName, session) {
    switch (selectedCardName) {
        case HeroCardName:
            return createHeroCard(session);
        case ThumbnailCardName:
            return createThumbnailCard(session);
        case ReceiptCardName:
            return createReceiptCard(session);
        case SigninCardName:
            return createSigninCard(session);
        case AnimationCardName:
            return createAnimationCard(session);
        case VideoCardName:
            return createVideoCard(session);
        case AudioCardName:
            return createAudioCard(session);
        default:
            return createHeroCard(session);
    }
}

function createHeroCard(session) {
    return new builder.HeroCard(session)
        .title('BotFramework Hero Card')
        .subtitle('Your bots — wherever your users are talking')
        .text('Build and connect intelligent bots to interact with your users naturally wherever they are, from text/sms to Skype, Slack, Office 365 mail and other popular services.')
        .images([
            builder.CardImage.create(session, 'https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg')
        ])
        .buttons([
            builder.CardAction.openUrl(session, 'https://docs.microsoft.com/bot-framework/', 'Get Started')
        ]);
}

function createThumbnailCard(session) {
    return new builder.ThumbnailCard(session)
        .title('BotFramework Thumbnail Card')
        .subtitle('Your bots — wherever your users are talking')
        .text('Build and connect intelligent bots to interact with your users naturally wherever they are, from text/sms to Skype, Slack, Office 365 mail and other popular services.')
        .images([
            builder.CardImage.create(session, 'https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg')
        ])
        .buttons([
            builder.CardAction.openUrl(session, 'https://docs.microsoft.com/bot-framework/', 'Get Started')
        ]);
}

var order = 1234;
function createReceiptCard(session) {
    return new builder.ReceiptCard(session)
        .title('John Doe')
        .facts([
            builder.Fact.create(session, order++, 'Order Number'),
            builder.Fact.create(session, 'VISA 5555-****', 'Payment Method')
        ])
        .items([
            builder.ReceiptItem.create(session, '$ 38.45', 'Data Transfer')
                .quantity(368)
                .image(builder.CardImage.create(session, 'https://github.com/amido/azure-vector-icons/raw/master/renders/traffic-manager.png')),
            builder.ReceiptItem.create(session, '$ 45.00', 'App Service')
                .quantity(720)
                .image(builder.CardImage.create(session, 'https://github.com/amido/azure-vector-icons/raw/master/renders/cloud-service.png'))
        ])
        .tax('$ 7.50')
        .total('$ 90.95')
        .buttons([
            builder.CardAction.openUrl(session, 'https://azure.microsoft.com/en-us/pricing/', 'More Information')
                .image('https://raw.githubusercontent.com/amido/azure-vector-icons/master/renders/microsoft-azure.png')
        ]);
}

function createSigninCard(session) {
    return new builder.SigninCard(session)
        .text('BotFramework Sign-in Card')
        .button('Sign-in', 'https://login.microsoftonline.com');
}

function createAnimationCard(session) {
    return new builder.AnimationCard(session)
        .title('Microsoft Bot Framework')
        .subtitle('Animation Card')
        .image(builder.CardImage.create(session, 'https://docs.microsoft.com/en-us/bot-framework/media/how-it-works/architecture-resize.png'))
        .media([
            { url: 'http://i.giphy.com/Ki55RUbOV5njy.gif' }
        ]);
}

function createVideoCard(session) {
    return new builder.VideoCard(session)
        .title('Big Buck Bunny')
        .subtitle('by the Blender Institute')
        .text('Big Buck Bunny (code-named Peach) is a short computer-animated comedy film by the Blender Institute, part of the Blender Foundation. Like the foundation\'s previous film Elephants Dream, the film was made using Blender, a free software application for animation made by the same foundation. It was released as an open-source film under Creative Commons License Attribution 3.0.')
        .image(builder.CardImage.create(session, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/220px-Big_buck_bunny_poster_big.jpg'))
        .media([
            { url: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }
        ])
        .buttons([
            builder.CardAction.openUrl(session, 'https://peach.blender.org/', 'Learn More')
        ]);
}

function createAudioCard(session) {
    return new builder.AudioCard(session)
        .title('I am your father')
        .subtitle('Star Wars: Episode V - The Empire Strikes Back')
        .text('The Empire Strikes Back (also known as Star Wars: Episode V – The Empire Strikes Back) is a 1980 American epic space opera film directed by Irvin Kershner. Leigh Brackett and Lawrence Kasdan wrote the screenplay, with George Lucas writing the film\'s story and serving as executive producer. The second installment in the original Star Wars trilogy, it was produced by Gary Kurtz for Lucasfilm Ltd. and stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.')
        .image(builder.CardImage.create(session, 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'))
        .media([
            { url: 'http://www.wavlist.com/movies/004/father.wav' }
        ])
        .buttons([
            builder.CardAction.openUrl(session, 'https://en.wikipedia.org/wiki/The_Empire_Strikes_Back', 'Read More')
        ]);
}*/

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
({ appId: '213c2245-3cb9-49a4-b852-41e4f6eea0b0', appPassword: '7WutpJBKjsXNAGALGVRMMiS' }); 
//working code 
/*
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// Create bot dialogs
bot.dialog('/', function (session) {
    session.send("Hello World");
});
*/

//new code for bot dialogs down till before server.get

/*server.get('/', restify.serveStatic({
 directory: __dirname,
 default: '/index.html'
}));*/

//start of new code

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
        builder.Prompts.text(session, "Describe your problem");
    },
    function (session, results) {
        session.dialogData.description = results.response;

        
        session.send(" Incident IncNumber has been created with description %s",session.dialogData.description);
        
        session.endDialog();
    }
]);
server.post('/api/messages', connector.listen());


//end of new code

server.get('/', restify.plugins.serveStatic({
 directory: __dirname,
 default: '/index.html'
}));
