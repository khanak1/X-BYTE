const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhaRWxVN1pBTTJxYVY5ak1JeHduRnFPTlpoNUNVTERnQlp3SHdPRFBXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0RhZmxMVzhWWWJRbHArV3F1UEsxaTNlT0V0VlpzamZyQ29oUnRidHFSdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTkJaYkNraFNldzN0T0VnUDBSeXh2UWc5WGV1KzJFWjYvQWNVdTFLZEg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEaGlPUjFoUWRzMndTb1FnUUlUc01GNEk1ZlJOY3ZqUUdOdzdHMnc0QlVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9MMEVidEtOWXJnSGJYR2xRUkl3ZXhBbVNkdFlqYXRGeDl6S0VvOUkwV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InEyU0RHTlhQRVJrRkxFaitTaW9tNHBvOXFMd2FiOWdMaWJYYmFaeFkwMkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtrVVBPWjZRaXR2WVhYOVU2T0V4dW1uWTh2YnJJVFc4R2hMNFpGdWRXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjhSam5qOG1sS2FZR0wrNFd2QWlOcVAxTWpPQzlBOFF4dXVLWmFXS2V4UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZxZ3gvSS9relhPRWQvNmd6L1lCL2FqNmliUEM3NWo5eTRkRDZSRGhFZmVsazhTci9zbG4ybmx2cWk2ZXQ4c20rRW40clpWT0FuQlVRak50VmNhSUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJWckVPMWRoeXRpakFwNUY3cU1oUGUydWpUaHNRTnBGRlBCUHg1cFdZOHJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzU1NjE1OTIzNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFQzhGMkQ5MzZCRjg0QjkxNUY3MkYwNUYzQzE0QTczNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3NDU1MTMzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM1NTYxNTkyMzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkQ1NTFFODU1NzM2MkVFOEZFQTQ4QTM0NkU3MkMxOUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzQ1NTEzM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicFhLQkFCQnNTMlN0dWZxbVhMcVNhQSIsInBob25lSWQiOiJmMTA3YTAwOC00OGI5LTQwNWYtYTg5My1kNTIxZDczNDY3N2MiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlUyd1hiM2JiMDZoaGh5RG4xRGdPWXgvbmR3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im54bHNNZ08zK0tTaTkvakNMbmxvOTl6RFVMND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDOUpXMkJZWSIsIm1lIjp7ImlkIjoiOTIzNTU2MTU5MjM0OjM4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFmemFhbCBLaGFuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPS053ZDBCRUl1LzI3Y0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5WUQwczA2UnBJbG03TDNIdXY1VGFEbktEanBOWjllT2ZYOXV3cEQxZUZzPSIsImFjY291bnRTaWduYXR1cmUiOiJBVTE0cFhOcnlpREFndGkzcmtCY0dscXRwcVpnZFFQSzFCSmJSS2xTSzdNVytCQjZXVk92ZjdNMlMwOXh3bWRsSUdIMnBVU2RFVWQxY1ExdllkblpEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS0x1QW9SK3l6anNEbkc0YmtuNUFUaDB4eTRFWlFkbmtWYmdaOFdhNlIvTVNOZk9EU0lWaStEVGJOSGJRY2VTRFVSYWdlN1FjMWI3NktZemdMRUQrQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM1NTYxNTkyMzQ6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY21BOUxOT2thU0padXk5eDdyK1UyZzV5ZzQ2VFdmWGpuMS9ic0tROVhoYiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzQ1NTEyOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFb3AifQ==' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '923556159234' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Khan': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || true  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
