const { google } = require("googleapis");

const credentials = require('./config.js');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    credentials.clientId,
    credentials.clientSecret,
    "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
    refresh_token: credentials.refreshToken
});

const accessToken = oauth2Client.getAccessToken();

module.exports = {
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: credentials.user, 
         clientId: credentials.clientId,
         clientSecret: credentials.clientSecret,
         refreshToken: credentials.refreshToken,
         accessToken: accessToken
    }
};