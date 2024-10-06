import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}
// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Asia/Colombo").format("HH:mm:ss");
const xdate = moment.tz("Asia/Colombo").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Colombo").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const test = async (m, Matrix) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;
  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
     // console.log(selectedListId);
    }
  }
  const selectedId = selectedListId || selectedButtonId;
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '.';
        const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
        let ethix = {
    public: true 
};

let mode = ethix.public ? 'public' : 'private';

        const validCommands = ['paper', 'past', 'nirmal'];

  if (validCommands.includes(cmd)) {
    let msg = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *📝ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ 📝*
│📍 ᴠᴇʀꜱɪᴏɴ: 1
│👨‍💻 ᴏᴡɴᴇʀ : *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*      
│👤 ɴᴜᴍʙᴇʀ: 947297877501
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴄʀᴇᴀᴛᴇʀ: *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*
╰─────────────━┈⊷ `
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴡᴅʜɪᴛʜᴀ ɴɪʀᴍᴀʟ"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./src/paper.png')}, { upload: Matrix.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: "",
                  hasMediaAttachment: false  
                }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                    "name": "single_select",
                    "buttonParamsJson": `{"title":"ᴛᴀᴘ ʜᴇʀᴇ🗒",
                   "sections":
                     [{
                      "title":"ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ ᴀɴᴅ ɴᴏᴛᴇ ʙᴏᴛ ᴍᴇɴᴜ - ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ",
                      "highlight_label":"ꜱᴇʟᴇᴄᴛ ꜱᴜʙᴊᴇᴄᴛ",
                      "rows":[
                        {
                         "header":"",
                         "title":"ꜱᴄɪᴇɴᴄᴇ",
                         "description":"ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ✨",
                         "id":"science1"
                        },
                        {
                          "header":"",
                          "title":"ꜱɪɴʜᴀʟᴀ",
                          "description":"ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ✨",
                          "id":"sinhala1"
                        },
                        {
                          "header":"",
                          "title":"ʙᴜᴅʜᴅʜɪꜱᴍ",
                          "description":"ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ✨",
                          "id":"buddagama1"
                        },
                        {
                          "header":"",
                          "title":"ᴇɴɢʟɪꜱʜ",
                          "description":"ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ✨",
                          "id":"english1"
                        },
                        {
                          "header":"",
                          "title":"ᴍᴀᴛʜ",
                          "description":"ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ✨",
                          "id":"maths1"
                        },
                       {
                          "header":"",
                          "title":"ʜɪꜱᴛᴏʀʏ",
                          "description":"ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ✨",
                          "id":"history1"
                        },
                        {
                          "header":"",
                          "title":"ɢᴇᴏɢʀᴀᴘʜʏ",
                          "description":"ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ✨",
                          "id":"bugole1"
                        },
                        {
                          "header":"",
                          "title":"ᴍᴜꜱɪᴄ",
                          "description":"ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ✨",
                          "id":"music1"
                        },
                        {
                          "header":"",
                          "title":"ᴀɢʀᴇᴇ",
                          "description":"ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ✨",
                          "id":"krushi1"
                        },
                        {
                          "header":"",
                          "title":"ᴀʀᴛ",
                          "description":"ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ✨",
                          "id":"art1"
                        }
                      ]}
                    ]}`
                  },
              ],
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "Kawdhitha Nirmal",
                  serverMessageId: 143
                }
              }
          }),
        },
      },
    }, {});

    await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
  }
      if (selectedId == "science1") {
        const mode = process.env.MODE;
        const str = `hey ${m.pushName} ${pushwish}
        *╭─────────────━┈⊷
         > │😎 Type : .science
╰─────────────━┈⊷*

        ╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *📝ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ ᴀɴᴅ ɴᴏᴛᴇ📝*
│😎 Type : .science
│📍 ᴠᴇʀꜱɪᴏɴ: 1
│👨‍💻 ᴏᴡɴᴇʀ : *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*      
│👤 ɴᴜᴍʙᴇʀ: 947297877501
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴄʀᴇᴀᴛᴇʀ: *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*
╰─────────────━┈⊷
   `;
        let fgg = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: `Kawdhitha`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'Egk Nirmal'\nitem1.TEL;waid=${
                        m.sender.split("@")[0]
                    }:${
                        m.sender.split("@")[0]
                    }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            }
        };
       let { key } = await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/paper.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "Kawdhitha-Nirmal",
                  serverMessageId: 143
                }
              }
}, {
  quoted: fgg
});
}
if ( selectedId == "krushi1") {
    const str = `hey ${m.pushName} ${pushwish}
        *╭─────────────━┈⊷
         > │😎 Type : .krushi
╰─────────────━┈⊷*

        ╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *📝ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ ᴀɴᴅ ɴᴏᴛᴇ📝*
│😎 Type : .krushi
│📍 ᴠᴇʀꜱɪᴏɴ: 1
│👨‍💻 ᴏᴡɴᴇʀ : *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*      
│👤 ɴᴜᴍʙᴇʀ: 947297877501
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴄʀᴇᴀᴛᴇʀ: *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*
╰─────────────━┈⊷
   `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/paper.png'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "sinhala1") {
     const str =`hey ${m.pushName} ${pushwish}
        *╭─────────────━┈⊷
         > │😎 Type : .sinhala
╰─────────────━┈⊷*

        ╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *📝ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ ᴀɴᴅ ɴᴏᴛᴇ📝*
│😎 Type : .sinhala
│📍 ᴠᴇʀꜱɪᴏɴ: 1
│👨‍💻 ᴏᴡɴᴇʀ : *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*      
│👤 ɴᴜᴍʙᴇʀ: 947297877501
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴄʀᴇᴀᴛᴇʀ: *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*
╰─────────────━┈⊷
   `
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/paper.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "Kawdhitha-Nirmal",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "buddagama1") {
     const str = `hey ${m.pushName} ${pushwish}
        *╭─────────────━┈⊷
         > │😎 Type : .buddagama
╰─────────────━┈⊷*

        ╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *📝ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ ᴀɴᴅ ɴᴏᴛᴇ📝*
│😎 Type : .buddagama
│📍 ᴠᴇʀꜱɪᴏɴ: 1
│👨‍💻 ᴏᴡɴᴇʀ : *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*      
│👤 ɴᴜᴍʙᴇʀ: 947297877501
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴄʀᴇᴀᴛᴇʀ: *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*
╰─────────────━┈⊷
   `
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/paper.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "Kawdhitha-Nirmal",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "english1") {
     const str =`hey ${m.pushName} ${pushwish}
        *╭─────────────━┈⊷
         > │😎 Type : .english
╰─────────────━┈⊷*

        ╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *📝ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ ᴀɴᴅ ɴᴏᴛᴇ📝*
│😎 Type : .english
│📍 ᴠᴇʀꜱɪᴏɴ: 1
│👨‍💻 ᴏᴡɴᴇʀ : *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*      
│👤 ɴᴜᴍʙᴇʀ: 947297877501
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴄʀᴇᴀᴛᴇʀ: *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*
╰─────────────━┈⊷
   `
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/paper.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "Kawdhitha-Nirmal",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   if (selectedId == "maths1") {
     const str =`hey ${m.pushName} ${pushwish}
        *╭─────────────━┈⊷
         > │😎 Type : .maths
╰─────────────━┈⊷*

        ╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *📝ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ ᴀɴᴅ ɴᴏᴛᴇ📝*
│😎 Type : .maths
│📍 ᴠᴇʀꜱɪᴏɴ: 1
│👨‍💻 ᴏᴡɴᴇʀ : *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*      
│👤 ɴᴜᴍʙᴇʀ: 947297877501
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴄʀᴇᴀᴛᴇʀ: *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*
╰─────────────━┈⊷
   `
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/paper.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "Kawdhitha-Nirmal",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "history1") {
     const str =`hey ${m.pushName} ${pushwish}
        *╭─────────────━┈⊷
         > │😎 Type : .history
╰─────────────━┈⊷*

        ╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *📝ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ ᴀɴᴅ ɴᴏᴛᴇ📝*
│😎 Type : .history
│📍 ᴠᴇʀꜱɪᴏɴ: 1
│👨‍💻 ᴏᴡɴᴇʀ : *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*      
│👤 ɴᴜᴍʙᴇʀ: 947297877501
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴄʀᴇᴀᴛᴇʀ: *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*
╰─────────────━┈⊷
   `
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/paper.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "Kawdhitha-Nirmal",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "bugole1") {
     const str =`hey ${m.pushName} ${pushwish}
        *╭─────────────━┈⊷
         > │😎 Type : .bugole
╰─────────────━┈⊷*

        ╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *📝ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ ᴀɴᴅ ɴᴏᴛᴇ📝*
│😎 Type : .bugole
│📍 ᴠᴇʀꜱɪᴏɴ: 1
│👨‍💻 ᴏᴡɴᴇʀ : *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*      
│👤 ɴᴜᴍʙᴇʀ: 947297877501
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴄʀᴇᴀᴛᴇʀ: *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*
╰─────────────━┈⊷
   `
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/paper.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "Kawdhitha-Nirmal",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "music1") {
     const str =`hey ${m.pushName} ${pushwish}
        *╭─────────────━┈⊷
         > │😎 Type : .smusic
╰─────────────━┈⊷*

        ╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *📝ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ ᴀɴᴅ ɴᴏᴛᴇ📝*
│😎 Type : .music
│📍 ᴠᴇʀꜱɪᴏɴ: 1
│👨‍💻 ᴏᴡɴᴇʀ : *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*      
│👤 ɴᴜᴍʙᴇʀ: 947297877501
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴄʀᴇᴀᴛᴇʀ: *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*
╰─────────────━┈⊷
   `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/paper.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "Kawdhitha-Nirmal",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
};

export default test;
