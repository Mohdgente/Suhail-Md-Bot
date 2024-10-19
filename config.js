const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349013777457";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_16_54_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDUxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxLFxuICAgICAgICA3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDkxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY0LFxuICAgICAgICA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgODksXG4gICAgICAgIDIwNixcbiAgICAgICAgMixcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNkJmWUdqZTE3b0pMMDJFek5KSm5yN2FsMGVNZUgzSXd4aVBYQjliSUg2bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDEzNzc3NDU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxREYyRkE5RUE5OTVCODY1ODQzRDUwREREODdCNERDMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkzNTY4NzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaE1hajFhVnFUbWUwbXU3djZtRWxtd1wiLFxuICBcInBob25lSWRcIjogXCI0MTk3OWYwMy01NjA5LTRhMjQtYTVlMi1kZTM4NDE2ZjRlMjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMzQsXG4gICAgICAyMzksXG4gICAgICAxODMsXG4gICAgICAyMzEsXG4gICAgICAyMjYsXG4gICAgICAxODUsXG4gICAgICAxMjIsXG4gICAgICAxNDQsXG4gICAgICAxNDEsXG4gICAgICA0NCxcbiAgICAgIDEzMCxcbiAgICAgIDExOSxcbiAgICAgIDgsXG4gICAgICAyNDUsXG4gICAgICAxNDEsXG4gICAgICAyMjksXG4gICAgICA5OCxcbiAgICAgIDUyLFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM5LFxuICAgICAgMTk0LFxuICAgICAgMjEyLFxuICAgICAgMTk0LFxuICAgICAgMTMxLFxuICAgICAgMTY5LFxuICAgICAgMTY3LFxuICAgICAgMTQ2LFxuICAgICAgMTQ2LFxuICAgICAgMjI1LFxuICAgICAgMTgyLFxuICAgICAgMSxcbiAgICAgIDIyOCxcbiAgICAgIDE3MixcbiAgICAgIDE1NyxcbiAgICAgIDExMCxcbiAgICAgIDAsXG4gICAgICAxODQsXG4gICAgICAxMyxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVWVDdQUTFIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEzNzc3NDU3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNb2gnZCBHZW50bGVcIixcbiAgICBcImxpZFwiOiBcIjI4NTUzMzExNzM1ODYzOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlg4cWVrR0VMM0l6N2dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2a3h6RkJRUHpqd1gwRGp2aVFRSzNMZmFZZHlndEgvczVydFh1M1o0Z3o0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVSY1RFaXJkSXBWRFlOdDNjK2p4TVo5YTZhUTFKQi80SXZRMlVuY0Fhck9acVdoZTdYTUpOT3lkaDkwaE5lWlltZWVtTm9iTlo2SDcrVnRMaHdmcERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJWenAwcXZTK2JkR1huRU10VXFZOENVamZYeHE0cjl2WG9pTVJySTB6Yk5TYnB5Ukl2TldzditVTXEwdkp2SU5nT2hCQ01nR3puOXBSV25HTWo4QkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTM3Nzc0NTc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MzU2ODY1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
