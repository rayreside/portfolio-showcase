var user = {
    username: "Ray",
    password: "123",
};
var database = [user];
var newsFeed = [
    {
        username: "Chad",
        timeline: "Bro",
    },
    {
        username: "Trevor",
        timeline: "Bruh",
    },
    {
        username: "Wilhelm",
        timeline: "Apologies",
    }
];
// PROMPTS
var prUsername = prompt("Input username:");
var prPassword = prompt("Input password:");

// FUNCTIONS
function signIn(usn,psw){
    if (usn === database[0].username &&
        psw === database[0].password){
            console.log(newsFeed);
    } else {
        alert ("Wrong credentials.");
    }
}

// EXECUTABLES
signIn(prUsername, prPassword);