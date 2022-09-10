function shout(scream){
    return scream.toUpperCase();
}

function whisper(quiet){
    return quiet.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}
logShout('omar');

function logWhisper(string){
    console.log(string.toLowerCase());
}
logWhisper('omar');

function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        string = "I can\'t hear you!";
    } else if (string === string.toUpperCase()){
        string = "YES INDEED!";
    } else if (string === 'Let\'s have dinner together!'){
            string = 'I would love to!';
        }
        return string;
}
