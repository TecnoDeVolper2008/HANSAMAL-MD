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

        const validCommands = ['note', 'kawditha', 'paper'];

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
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *📝ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ ᴀɴᴅ ɴᴏᴛᴇ📝D*
│📍 ᴠᴇʀꜱɪᴏɴ: 1
│👨‍💻 ᴏᴡɴᴇʀ : *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀ*      
│👤 ɴᴜᴍʙᴇʀ: 947297877501
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴄʀᴇᴀᴛᴇʀ: *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀ*
╰─────────────━┈⊷ `
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴡᴅʜɪᴛʜᴀ ɴɪʀᴍᴀʟ"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./src/logo.png')}, { upload: Matrix.waUploadToServer})), 
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
                    "title":"ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ ᴀɴᴅ ɴᴏᴛᴇ ʙᴏᴛ ᴍᴇɴᴜ",
                    "highlight_label":"ꜱᴇʟᴇᴄᴛ ꜱᴜʙᴊᴇᴄᴛ",
                    "rows":[
                      {
                       "header":"",
                       "title":"ʜɪꜱᴛᴏʀʏ",
                       "description":"ɴᴏᴛᴇꜱ✨",
                       "id":"history"
                      },
                      {
                        "header":"",
                        "title":"ꜱɪɴʜᴀʟᴀ",
                        "description":"ɴᴏᴛᴇꜱ✨",
                        "id":"sinhala"
                      },
                      {
                        "header":"",
                        "title":"ʙᴜᴅʜᴅʜɪꜱᴍ",
                        "description":"ɴᴏᴛᴇꜱ✨",
                        "id":"buddagama"
                      },
                      {
                        "header":"",
                        "title":"ᴇɴɢʟɪꜱʜ",
                        "description":"ɴᴏᴛᴇꜱ✨",
                        "id":"english"
                      },
                      {
                        "header":"",
                        "title":"ᴍᴀᴛʜ",
                        "description":"ɴᴏᴛᴇꜱ✨",
                        "id":"maths"
                      },
                     {
                        "header":"",
                        "title":"ꜱᴄɪᴇɴᴄᴇ",
                        "description":"ɴᴏᴛᴇꜱ✨",
                        "id":"scince"
                      },
                      {
                        "header":"",
                        "title":"ɢᴇᴏɢʀᴀᴘʜʏ",
                        "description":"ɴᴏᴛᴇꜱ✨",
                        "id":"bugole"
                      },
                      {
                        "header":"",
                        "title":"ᴍᴜꜱɪᴄ",
                        "description":"ɴᴏᴛᴇꜱ✨",
                        "id":"music"
                      },
                      {
                        "header":"",
                        "title":"ᴀɢʀᴇᴇ",
                        "description":"ɴᴏᴛᴇꜱ✨",
                        "id":"krushi"
                      },
                      {
                        "header":"",
                        "title":"ᴀʀᴛ",
                        "description":"ɴᴏᴛᴇꜱ✨",
                        "id":"art"
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
                  newsletterName: "EGK NIRMAL",
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
      if (selectedId == "history") {
        const mode = process.env.MODE;
        const str = `hey ${m.pushName} ${pushwish}

History lesson 01
Short note 
Part 2

 පේශ කර්මාන්තය🌚🌻 

✨රෙදි පිළි නිශ්පාදනය ආශ්‍රිත කර්මාන්තය පේශ කර්මාන්තයයි..අතීතයේ හස්ත කර්මාන්තයක් ලෙස පැවති මෙය 18 වන සියවස අගභාගයේදී යාන්ත්‍රීකරණය විය.

❤‍🩹රෙදි විවීම සඳහා ප්‍රථමයෙන් නිපදවූ යන්ත්‍රය = දුවන නඩාව 
❤‍🩹නිපදවූයේ= ජෝන් කේ(1733)

නූල් විවීම සඳහා නිපදවූ යන්ත්‍ර 04 කි.

 01)ජෙනී යන්ත්‍රය (ජේම්ස් හාග්‍රිවුස් -1764)

 02)ජල රාමුව (රිචඩ් ආර්ක්රයිට් - 1769)

03)මියුල් යන්ත්‍රය (සැමුවෙල් ක්‍රොම්ප්ටන් -1779)

04)වාෂ්ප බල මියුල් යන්ත්‍රය (එඩ්මන්ඩ් කාර්ට්රයිට් - 1785)

✨පේශ කර්මාන්තයේ දියුණුවක් ඇති වීමට බලපෑ හේතු

 ❤‍🩹රෙදි පිළි ඉල්ලුම ඉහළ යාම
❤‍🩹නව යන්ත්‍ර සූත්‍ර බිහි වීම


✍ Kawdhitha


#Copied

History lesson 01
Short note 
Part 3

යකඩ හා වානේ කර්මාන්තය🌚🌻

 🍂වානේ උඳුන

🍃හෙන්රි බෙසමර්
🍃1856
🍃ශක්තිමත් වානේ නිපදවීම

 🍂යපස් උණු කිරීමේ ක්‍රමය
🍃ඒබ්‍රහම් ඩර්බි


 ගල් අඟුරු කර්මාන්තය🌚🌻 

✨බ්‍රිතාන්‍යයේ ගල් අඟුරු බහුලව පවතින ප්‍රදේශ

🍃යෝක්ෂයර්
🍃දකුණු වේල්ස්
🍃ලැන්කැෂයර්

✨ගල් අඟුරු ජනප්‍රිය වීම කෙරෙහි බලපෑ හේතු

🍃මිල ගණන් පහළ අගයක් ගැනීම
🍃ඉහළ කාර්‍යක්ෂමතාවක් පැවතීම

✨ගල් අඟුරු වලින් කෙරෙන අතුරු නිෂ්පාදන

🍃සායම්
🍃ඖෂධ
🍃පොහොර
🍃සුවඳ විලවුන්

✨ගල් අඟුරු කර්මාන්තය දියුණු වීමට බලපෑ හේතු

🍃ගල් අඟුරුවලට පැවති ඉල්ලුම ඉහළ යාම
🍃නව සොයා ගැනීම් හා යන්ත්‍රසූත්‍ර බිහි වීම

 🍂වාෂ්ප එන්ජිම 

🍃ජේම්ස් වොට්
🍃ආකරවල ඇති ජලය නළ මගින් ඉවත් කිරීම 
   ආකර තුළ උණුසුම් වාතය සිසිල් කිරීම

 🍂ආරක්ෂක ලාම්පුව

🍃හම්ප්‍රි ඩේව්
🍃1812
🍃ආකර තුළට ආලෝකය සැපයීම

✨බ්‍රිතාන්‍යයේ කාර්මික විප්ලවය ව්‍යාප්ත වූ වෙනත් කර්මාන්ත

🍃ප්‍රවාහන ක්ෂේත්‍රය 
🍃සන්නිවේදන ක්ෂේත්‍රය 
🍃කෘෂිකාර්මික ක්ෂේත්‍රය


✍ kawdhitha


#Copied

History lesson 01 
Short note 
Part 4

 ප්‍රවාහන ක්ෂේත්‍රය🌚🍃

 18 වන සියවසෙන් පසු ප්‍රවාහන ක්ෂේත්‍රයට එක් වූ අංග✨🍂

 🤍දුම්රිය එන්ජිම(ජෝර්ජ් ස්ටීවන්සන් - 1814)

 🤍මෝටර් රථය(ඩෙම්ලර් -1885)

 🤍ගුවන්යානය (රයිට් සහෝදරයන් - 1903)


 සන්නිවේදන ක්ෂේත්‍රය🍃🌚 

 ❤පෙනී තැපැල් සේවය(1804)

 ❤විදුලි පණිවිඩ ක්‍රමය(සැමුවෙල් මෝස් - 1844)

 ❤දුරකථනය (ඇලෙක්සැන්ඩර් ග්‍රැහැම්බෙල්(1876)

 ❤ගුවන්විදුලිය (ගුග්ලි මාර්කෝනි - 1895)

 ❤රූපවාහිනිය ( ජෝන් ලොගී බෙයාඩ්)


 කෘෂිකාර්මික ක්ෂේත්‍රය🌚🍃 

කෘෂිකාර්මික ක්ෂේත්‍රයේ දියුණුවට බලපෑ සාධක 🤍❗

 💫මහා පරිමාණ ගොවිබිම්

💫ශෂ්‍යමාරු ක්‍රමය

💫සත්ත්ව පාලනය සඳහා නව තාක්ෂණය යොදා ගැනීම
  🍃බැටලුවන් අභිජනනය - රොබට් බැක්වෙල්

💫නව කෘෂිකාර්මික ක්‍රම හා උපකරණ භාවිතය


කාර්මික විප්ලවයේ ප්‍රතිඵල ක්ෂේත්‍ර තුනක් යටතේ වර්ග කළ හැක.

💗ආර්ථික
💗සමාජ
💗දේශපාලන

ආර්ථික ක්ෂේත්‍රයේ සිදු වූ වෙනස්කම්🌝🌻

 🖤ස්වයංපෝෂිත ආර්ථික ක්‍රමය බිඳ වැටීම
🖤වෙළඳාම පුළුල් වීම
🖤ලොව පුරා යටත් විජිත බිහි වීම
🖤බද්ධ ව්‍යාපාර හා බහුජාතික සමාගම් බිහි වීම

සමාජ ක්ෂේත්‍රයේ ඇති වූ වෙනස්කම් 🌝🌻

🖤ජීවන තත්ත්වය ඉහළ යාම 
🖤මිනිස් පරිභෝජනය පුළුල් වීම
🖤හිඟයකින් තොරව භාණ්ඩ පරිභෝජනය කිරීම
🖤මුඩුක්කු නිවාස බිහි වීම
🖤පරිසර දූෂණය ඉහළ යාම 

දේශපාලන ක්ෂේත්‍රයේ ඇති වූ වෙනස්කම්🌝🌻

🖤 වෘත්තීය සමිති, උද්ඝෝෂණ, වැඩ වර්ජන ඇති වීම
🖤නව දේශපාලන දර්ශන ඇති වීම


 කාර්මික විප්ලවය ශ්‍රී ලංකාව කෙරෙහි ඇති කළ බලපෑම😌🍃

❤‍🩹යන්ත්‍ර සූත්‍ර භාවිතයට යොමු වීම
❤‍🩹මාර්ග හා ප්‍රවාහන කටයුතු පුළුල් වීම
❤‍🩹නව නගර බිහි වීම හා පැරණි නගර පුළුල් වීම
❤‍🩹බැංකු හා මුදල් කටයුතු පුළුල් වීම 
❤‍🩹ආනයන අපනයන වේගය වැඩි වීම

✍🌻 Kawdhitha

#Copied

💢__ History easy tags __💢


ප්‍රාග් ඓතිහාසික යුගය 🗿🪨

💠 හැඳින්වීම
:-සාහිත්‍ය මූලාශ්‍ර මගින් විස්තර කරන අතීතයට පෙර පැවති යුගය

💠 යැපීම් ක්‍රමය
:- දඩයමින් සහ තැන තැන ඇවිද යමින් ආහාර එකතු කිරීම

💠 වාසස්ථාන

:- 🔅 දේශගුණික කලාප

1. අර්ධ ශුෂ්ක කලාපය
> මාතොට, මිනිහා ගල් කන්ද, උඩමලල, බුන්දල, අලුගල්ගේ

2. පහතරට වියළි කලාපය
> පොතාන, අලිගල, පිදුරංගල, දියවින්න

3. පහතරට අතරමැදි වියලි කලාපය
> අත්තනගොඩ අළු ලෙන

4. තෙත් කලාපය
> බෙල්ලන් බැඳි පැලැස්ස, මානියම්ගම,බටදොඹලෙන, කිතුල්ගල බෙලිලෙන , පාහියන්ගල

5. කඳුකර වියළි අතර මැදි කලාපය
> රාවණා ඇල්ල

:- 🔅 එළිමහන් ගල් ගුහා වාසස්ථාන

1. වෙරලාශ්‍රිත එළිමහන් වාසස්ථාන
> මිනිහා ගල් කන්ද, බුන්දල, පතිරාජවෙල

2. පහතරට තෙත් කලාපීය ලෙන්
> පාහියන්ගල, බටදොඹ ලෙන, කිතුල්ගල බෙලිලෙන

3. පහතරට වියලි කලාපීය ලෙන්
> සීගිරියේ පොතාන, අලිගල

4. තෙත් කලාපීය එළිමහන් වාසස්ථාන
> බෙල්ලන් බැඳි පැලැස්ස

5. කඳුකර එළිමහන් දඩයම් වාසස්ථාන
> බණ්ඩාරවෙල, හෝර්ටන් තැන්න


⭕ මතක තබාගැනීමේ සරල ආකාරයක් 👀

 මිනිහා බුන් පතිරා වෙරළේ එළියේ
පාහි බටේ කිතු බෙලිලෙන පහත තෙතේ
පහත වියළි අලි පොතාන සීගිරියේ
බෙල්ල බැඳි බණ්ඩා හෝටන් කඳු එළියේ  😉😉

💠 තාක්ෂණය

:- ගල් මෙවලම් , ක්ෂුද්‍ර ශිලා මෙවලම්
> ♦ රත්නපුර අවට මැණික් පතල්
> ♦ ඉරණමඩු සැකැස්ම
> ♦ බූන්දල වැල්ලේ ගංගොඩ
> ♦ පාහියන්ගල

:- ක්ෂුද්‍ර ශිලා මෙවලම්
> 🔅 මධ්‍ය ශිලා යුගය
> 🔅 බිම් වීදුරු (පිරිසිදු තිරිවානා ගල්) 4.5 cm 

💠 අභිචාර විධි

:- ⏱ රාවණා එල්ල ගල් ගුහාව
> දෙකට බෙදෙන සේ සිදුරු විදෙන ලද මිනිස් හිස් කබල
> රළුවට තිබුණු දාර පිටතට නෙරා තිබූ තැන් ගලක උලා මට්ටම් කර රතුගල් ආලේප කර තිබුණි.

:- ⏱ පාහියන්ගල ගල් ගුහාව
> රතු ගුරුගල් ආලේපිත ඇටසැකිලි
> අවදි කීපයක පුද්ගලයන් නව දෙනෙකුගේ ඇටසැකිලි 

:- ⏱ කුරුවිට බට දොඹ ලෙන
> ඇටසැකිලි නමා වකුටු කළ මිනිස් සිරුරු

:-⏱ කිතුල්ගල බෙලිලෙන
> දොළොස් දෙනකුගේ ඇටසැකිලි

:- ⏱ බෙල්ලන් බැඳි පැලැස්ස
> ඇටසැකිලි තිහක්

💠 ජීවන රටාව

♦ සංචාරක ජීවිතයක්
♦ වර්ෂා කාලයේ ගල්ගුහාවල
♦ කුඩා කණ්ඩායම් ලෙස
> 15 - 25 අතර
> උපරිම 50
♦ සාමාජිකයෝ පහකට  50 m² ප්‍රමාණවත් වූ බව
> බණ්ඩාරවෙල  චර්ච්හිල් ස්ථානයෙන් සොයාගත් ගල් යුගයට අයත් ස්තානයේ වපසරිය = 150 m² , පුද්ගලයන් = 25

> බෙල්ලන් බැඳි පැලැස්ස , වපසරිය = 120 m² , මිනිස් ඇටසැකිලි = 30

♦ ආහාර :- දඩයම් කළ සතුන් , මාංශ ජනක ධාතු බහුල මිරිදිය මසුන් සහ ශාක ආහාර

> ගවරා, කුළුමීහරකා, වල්ලූරා, හම්බාවා ...

> තිත්තයින්

> වල්දෙල් , කැළෑකෙහෙල් 

♦ කිතුල්ගල බෙලිලෙනෙන් වසර 12500 ට පෙර පුළුස්සා ආහාරයට ගත් කැලෑ දෙල් ඇට හමුවීම.

• පිෂ්ටය බහුල ආහාර
> ගෝනාල, කටු අල වැනි

• කිතුල්ගල බෙලිලෙනෙන් කලපු බෙල්ලන්ගේ අවශේෂ සොයාගැනීම.

💠 වෙනත් වැදගත් කරුණු

🔅 පිරිමියකුගේ උස 174 cm
🔅 කාන්තාවකගේ උස 166 cm
🔅 දත් විශාලයි
🔅 නාසය හා නිකට පළල වේ
🔅 පිරිමියකුගේ මොළයේ විශාලත්වය 1600 cm³

⚖⚖⚖⚖⚖⚖⚖⚖⚖⚖⚖⚖⚖⚖

Created by, 
 Admin Nirmal ✨ 


#Copied

History easy tags ☘❤
*__ ශ්‍රී ලංකාවේ ජාතික පුනරුදය __*

#පළමු කොටස 

🔹 ශ්‍රී ලංකාවට පැමිණි යුරෝපීය ජාතීන් පිළිවෙලින් ,

> ♦ පෘතුගීසීන් (1505-1658)
> ♦ ලන්දේසීන් (1658-1796)
> ♦ ඉංග්‍රීසින් (1796-1948)

♣ මිෂනාරි සමාගමක් යනු
> ක්‍රිස්තියානි ආගම් මෙරට පැතිරවීම සඳහා කටයුතු කළ සංවිධාන වේ.

💠 ලන්ඩන් මිෂනාරි සමාගම
> 1804

💠 බැප්ටිස්ට් මිෂනාරි සමාගම
> 1812
> කොළඹ

💠වෙස්ලියන් මිෂනාරි සමාගම
> 1814-1815
> උතුරු පළාත

💠 ඇමරිකන් මිෂනාරි සමාගම
> 1816
> උතුරු පළාත

💠 චර්ච් මිෂනාරි සමාගම
> 1818
> කොළඹ, ගාල්ල, මහනුවර, මන්නාරම

ලන්ඩන් බෑනා වෙස්වලාගෙන ඇමෙරිකාවට ගිහින් චාමර 💤🥹

☘ මිෂනාරී සංවිධාන විසින් තම ආගම් පැතිරවීම සඳහා යොදාගත් මාධ්‍ය
> ලේඛන කටයුතු
> දේශන කටයුතු
> අධ්‍යාපනය

🔹 මිෂනාරි සංවිධාන විසින් තම ආගම් පැතිරවීම සඳහා ලේඛන මාධය යොදාගත් බවට උදාහරණ
> බයිබලය සිංහල භාෂාවට පරිවර්තනය කිරීම.
> පොත්පත් සඟරා මුද්‍රණය කර බෙදා හැරීම.
> සිංහල හා දෙමළ භාෂා ඉගෙන ගැනීම

🛜 මිෂනාරි සංවිධාන මුද්‍රණය කළ ප්‍රකාශන
> 🔅මාසික තෑග්ග = චර්ච් මිෂනාරි සමාගම
> 🔅 ලංකා නිධානය = ආගමික පුස්තකා සමාගම
> 🔅 උරගල = බැප්ටිස්ට් මිෂනාරි සමාගම

🌀 මිෂනාරි සංවිධාන විසින් තම ආගම් පැතිරවීම සඳහා දේශන මාධ්‍ය හා අධ්‍යාපනය යොදාගත් බවට උදාහරණ
> 💠 මහජනතාව ගැවසෙන තැන් වල දේශන පැවැත්වීම
> 💠 පාසල් ආරම්භ කිරීම
> 💠 ඉංග්‍රීසි දැනුම ඇති අයට රජයේ රැකියා ලබාදීම

🍁 බෞද්ධ පුනර්ධ ව්‍යාපාරය සඳහා ගත් ක්‍රියාමාර්ග
> ♦ මුද්‍රණාල පිහිටුවීම
> ♦ පංච මහා වාද පැවැත්වීම
> ♦ බෞද්ධ පාසල් පිහිටුවීම
> ♦ බෞද්ධ පූජනීය ස්ථාන රැකගැනීම

🪸 බෞද්ධයන් පිහිටවූ මුද්‍රණාල
> සරසවි සඳරැස මුද්‍රණාලය
> කවට කතික මුද්‍රනාලය
> ලංකාභිනව විශ්‍රුත මුද්‍රණාලය
> ලංකෝපකාර මුද්‍රණාලය
> සුදර්ශන මුද්‍රණාලය

🌻 බෞද්ධයන් විසින් ප්‍රකාශයට පත් කරන ලද ප්‍රකාශන
> ලංකා ලෝකය
> ලක් මිණි පහන
> සිංහල ජාතිය
> සිංහල බෞද්ධයා
> සරසවි සඳරැස

🪻 පංච මහා වාද
> • බද්දේගම වාදය
> • වරාගොඩ වාදය
> • උදන්විට වාදය
> • ගම්පොළ වාදය
> • පානදුරාවාදය

⭕ බන්ඩෝ වරෙන් උදේම ගමේ පන්සලට 😉

〽 බෞද්ධ පුනරුද ව්‍යාපාරය උදෙසා හෙන්රි ස්ටිල් ඕල්කට් තුමාගෙන් සිදුවූ සේවාවන් 
> 1. පරම විඥානාර්ථ සමාගම පිහිටුවීම
> 2. බෞද්ධ කොඩිය නිර්මාණය කිරීම
> 3. වෙසක් පොහොය රජයේ නිවාඩු දිනයක් බවට පත් කිරීම
> 4. බෞද්ධ පාසල් පිහිටුවීම

🌀 බෞද්ධ පාසල් පිහිටුවීමට ක්‍රියාකාරී වූ පුද්ගලයන්
> හික්කඩුවේ සුමංගල හිමි
> රත්මලානේ ධර්මාලෝක 
> හෙන්රි ස්ටිල් ඕල්කට් තුමා
> අනගාරික ධර්මපාලතුමා
> ස්පේටර් සේනානායක මහතා

〰〰〰〰〰〰〰〰〰〰〰

Created by, 
 Admin Nirmal ✨ 

#Copied

History easy tags🪻💜
*____ ශ්‍රී ලංකාවේ ජාතික පුනරුදය ____*

# Part_02

〽 බෞද්ධ පුනරුදය උදෙසා මෙරට පිහිට වූ බෞද්ධ පාසල්

> ♦කොළඹ ආනන්ද විද්‍යාලය
> ♦ ගාල්ල මහින්ද විද්‍යාලය
> ♦ මහනුවර ධර්ම රාජ විද්‍යාලය
> ♦ නාවලපිටිය අනුරුද්ධ විද්‍යාලය
> ♦ මාතලේ විජය විද්‍යාලය

🌀 බෞද්ධ පුනරජීවනය උදෙසා මෙරට පිහිටවූ පිරිවෙන් 

🔅 රත්මලානේ පරම ධම්මචේතිය පිරිවෙන
> වලානේ සිද්ධාර්ථ හිමි (1841)

🔅 මාලිගාකන්දේ විද්‍යෝදය පිරිවෙන
> හික්කඩුවේ සුමංගල හිමි (1873)

🔅 පෑලියගොඩ විද්‍යාලංකාර පිරිවෙන
> රත්මලානේ ධර්මාලෝක හිමි (1875)

☘ බෞද්ධ පුනරුදය උදෙසා අනගාරික ධර්මපාලතුමාගෙන් සිදුවූ සේවාවන්

> 🌻 මහා බෝධි සමාගම් පිහිටුවීම
> 🌻සිංහල බෞද්ධයා පුවත්පත ප්‍රකාශයට පත් කිරීම
> 🌻 ඉන්දියාවේ බුද්ධගයාවේ අයිතිය බෞද්ධයන්ට ලබා ගැනීම
> 🌻 දේශීය සංස්කෘතිය අගය කිරීමට දේශන පැවැත්වීම

🪸 දේශානුරාගය හා ජාත්‍යාලය වර්ධනය කිරීමේ ව්‍යාපාරයේ ප්‍රධාන අරමුණ 
> දේශීය සංස්කෘතිය අගය කිරීමට ජනතාව උනන්දු කරවීමෙන් රටට ආදරය කරන ජනතාවක් බිහිකිරීම

🪸 දේශානු රාගය හා ජාත්‍යාලය වර්ධනය කිරීමේ ව්‍යාපාරයේ කැපී පෙනෙන නායකයන්
> 💠 අනගාරික ධර්මපාලතුමා
> 💠 වලිසිංහ හරිස්චන්ද්‍ර මහතා
> 💠 පියදාස සිරිසේන මහතා
> 💠 ජෝන් ද සිල්වා මහතා

🍁 බෞද්ධ පූජනීය ස්ථාන රැකගැනීමේ කටයුතුවල නිරත වූ නායකයන්
> වලිසින්හ හරිස්චන්ද්‍ර මහතා
> අනගාරික ධර්මපාල තුමා

🦄 පුරාවිද්‍යා ගවේෂණ, කැනීම් හා පර්යේෂණ සිදු කරමින් මෙරට ඉතිහාසය පිළිබඳ පොත්පත් රචනා කළ යුරෝපීය උගතුන් 

> 🐞 H C P බෙල්
> 🐞හෙන්රි පාකර්
> 🐞 රීස් ඩේවිඩ්
> 🐞 ජෝර්ජ් ටර්නර්

🐸 අමධ්‍යප ව්‍යාපාරය සඳහා ප්‍රමුඛත්වය දැරූ නායකයින්
> 🐰 අනගාරික ධර්මපාලතුමා
> 🐰 ජෝන් ද සිල්වා මහතා
> 🐰 පියදාස සිරිසේන මහතා

🪼 දේශීය සංස්කෘතිය රැක ගැනීම උදෙසා අමධ්‍යප ව්‍යාපාරය ගන්නා ලද ක්‍රියාමාර්ග
> 🕸 ප්‍රසිද්ධ ස්ථානවල  දේශන පැවැත්වීම
> 🕸 නවකතා රචනා කිරීම
> 🕸 නාට්‍ය නිෂ්පාදනය කිරීම


⭕ හින්දු ආගමික පුනරුදය

🍁 හින්දු ආගමික පුනරුදය උදෙසා කැපවීමෙන් කටයුතු කර නායකයින්

> ♦ ආරුමුග නාවලර් තුමා
> ♦ පොන්නම්බලම් රාමනාදන් මහතා
> ♦ පොන්නම්බලම් අරුනාචලම් මහතා

💠 හින්දු ආගමික පුනරුද උදෙසා ආරුමුග නාවලර් තුමාගෙන් ඉටු වූ සේවාවන්
> 🔅 යාපනයේ හින්දු විද්‍යාලය ආරම්භ කිරීම
> 🔅 පෙළ පොත් රචනා කිරීම
> 🔅 උදයභානු පුවත්පත ආරම්භ කිරීම
> 🔅 විදේශීය භාෂාවලින් රචිත පොත්පත් දෙමල භාෂාවට පරිවර්තනය කිරීම


⭕ ඉස්ලාම් ආගමික පුනරුදය

🌀 ඉස්ලාම් ආගමික පුනරුදය උදෙසා කැපවීමෙන් කටයුතු කළ නායකයින්
> 💠 සිද්ධි ලෙබ්බේ මහතා
> 💠 T B ජයා මහතා
> 💠 ඔරබි පාෂා මහතා

🌻 ඉස්ලාම් ආගමික පුනරුදය උදෙසා සිද්ධි ලැබේ මහතාගෙන් ඉටු වූ සේවාවන්
> 🔅 මුස්ලිම් nation පුවත්පත ඇරඹීම
> 🔅 කොළඹ සහිරා විද්‍යාලය ඇරඹීම
> 🔅 මුස්ලිම් අධ්‍යාපන සමිතිය පිහිටුවීම
> 🔅 මද්‍රසා පාසල් ප්‍රතිසංවිධානය කිරීම.


🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁

Created by, 
 Admin Nirmal ✨ 


#Copied

History easy tags🪻💜
*____ ශ්‍රී ලංකාවේ ජාතික පුනරුදය ____*

# Part_02

〽 බෞද්ධ පුනරුදය උදෙසා මෙරට පිහිට වූ බෞද්ධ පාසල්

> ♦කොළඹ ආනන්ද විද්‍යාලය
> ♦ ගාල්ල මහින්ද විද්‍යාලය
> ♦ මහනුවර ධර්ම රාජ විද්‍යාලය
> ♦ නාවලපිටිය අනුරුද්ධ විද්‍යාලය
> ♦ මාතලේ විජය විද්‍යාලය

🌀 බෞද්ධ පුනරජීවනය උදෙසා මෙරට පිහිටවූ පිරිවෙන් 

🔅 රත්මලානේ පරම ධම්මචේතිය පිරිවෙන
> වලානේ සිද්ධාර්ථ හිමි (1841)

🔅 මාලිගාකන්දේ විද්‍යෝදය පිරිවෙන
> හික්කඩුවේ සුමංගල හිමි (1873)

🔅 පෑලියගොඩ විද්‍යාලංකාර පිරිවෙන
> රත්මලානේ ධර්මාලෝක හිමි (1875)

☘ බෞද්ධ පුනරුදය උදෙසා අනගාරික ධර්මපාලතුමාගෙන් සිදුවූ සේවාවන්

> 🌻 මහා බෝධි සමාගම් පිහිටුවීම
> 🌻සිංහල බෞද්ධයා පුවත්පත ප්‍රකාශයට පත් කිරීම
> 🌻 ඉන්දියාවේ බුද්ධගයාවේ අයිතිය බෞද්ධයන්ට ලබා ගැනීම
> 🌻 දේශීය සංස්කෘතිය අගය කිරීමට දේශන පැවැත්වීම

🪸 දේශානුරාගය හා ජාත්‍යාලය වර්ධනය කිරීමේ ව්‍යාපාරයේ ප්‍රධාන අරමුණ 
> දේශීය සංස්කෘතිය අගය කිරීමට ජනතාව උනන්දු කරවීමෙන් රටට ආදරය කරන ජනතාවක් බිහිකිරීම

🪸 දේශානු රාගය හා ජාත්‍යාලය වර්ධනය කිරීමේ ව්‍යාපාරයේ කැපී පෙනෙන නායකයන්
> 💠 අනගාරික ධර්මපාලතුමා
> 💠 වලිසිංහ හරිස්චන්ද්‍ර මහතා
> 💠 පියදාස සිරිසේන මහතා
> 💠 ජෝන් ද සිල්වා මහතා

🍁 බෞද්ධ පූජනීය ස්ථාන රැකගැනීමේ කටයුතුවල නිරත වූ නායකයන්
> වලිසින්හ හරිස්චන්ද්‍ර මහතා
> අනගාරික ධර්මපාල තුමා

🦄 පුරාවිද්‍යා ගවේෂණ, කැනීම් හා පර්යේෂණ සිදු කරමින් මෙරට ඉතිහාසය පිළිබඳ පොත්පත් රචනා කළ යුරෝපීය උගතුන් 

> 🐞 H C P බෙල්
> 🐞හෙන්රි පාකර්
> 🐞 රීස් ඩේවිඩ්
> 🐞 ජෝර්ජ් ටර්නර්

🐸 අමධ්‍යප ව්‍යාපාරය සඳහා ප්‍රමුඛත්වය දැරූ නායකයින්
> 🐰 අනගාරික ධර්මපාලතුමා
> 🐰 ජෝන් ද සිල්වා මහතා
> 🐰 පියදාස සිරිසේන මහතා

🪼 දේශීය සංස්කෘතිය රැක ගැනීම උදෙසා අමධ්‍යප ව්‍යාපාරය ගන්නා ලද ක්‍රියාමාර්ග
> 🕸 ප්‍රසිද්ධ ස්ථානවල  දේශන පැවැත්වීම
> 🕸 නවකතා රචනා කිරීම
> 🕸 නාට්‍ය නිෂ්පාදනය කිරීම


⭕ හින්දු ආගමික පුනරුදය

🍁 හින්දු ආගමික පුනරුදය උදෙසා කැපවීමෙන් කටයුතු කර නායකයින්

> ♦ ආරුමුග නාවලර් තුමා
> ♦ පොන්නම්බලම් රාමනාදන් මහතා
> ♦ පොන්නම්බලම් අරුනාචලම් මහතා

💠 හින්දු ආගමික පුනරුද උදෙසා ආරුමුග නාවලර් තුමාගෙන් ඉටු වූ සේවාවන්
> 🔅 යාපනයේ හින්දු විද්‍යාලය ආරම්භ කිරීම
> 🔅 පෙළ පොත් රචනා කිරීම
> 🔅 උදයභානු පුවත්පත ආරම්භ කිරීම
> 🔅 විදේශීය භාෂාවලින් රචිත පොත්පත් දෙමල භාෂාවට පරිවර්තනය කිරීම


⭕ ඉස්ලාම් ආගමික පුනරුදය

🌀 ඉස්ලාම් ආගමික පුනරුදය උදෙසා කැපවීමෙන් කටයුතු කළ නායකයින්
> 💠 සිද්ධි ලෙබ්බේ මහතා
> 💠 T B ජයා මහතා
> 💠 ඔරබි පාෂා මහතා

🌻 ඉස්ලාම් ආගමික පුනරුදය උදෙසා සිද්ධි ලැබේ මහතාගෙන් ඉටු වූ සේවාවන්
> 🔅 මුස්ලිම් nation පුවත්පත ඇරඹීම
> 🔅 කොළඹ සහිරා විද්‍යාලය ඇරඹීම
> 🔅 මුස්ලිම් අධ්‍යාපන සමිතිය පිහිටුවීම
> 🔅 මද්‍රසා පාසල් ප්‍රතිසංවිධානය කිරීම.


🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁

Created by, 
 Kawdhitha ✨ 


✿ Short Notes 📒🔖
✿ Study tips & Tricks 🔐📖
✿ Study Motives ✒🖇
✿ Educational resources 🗂
✿ Poll questions 💹💯


 🍂කෲව් මැකලම් ආණ්ඩුක්‍රමය 

🍃 කොමිසමේ නාමය - කෲව් මැකලම් කොමිසම 
🍃 කොමිසම පත් කළ වර්ෂය - 1910 
🍃 කොමිසමේ සාමාජිකයන් -  
 හෙන්රි මැකලම් 
 කෲව් ස්වාමි 

        ව්‍යවස්ථාදායක සභාව
   _______________|____________
   |                                                     | 
නිල ලත්                    නිල නොලත් 
  (11)                                   (10)
         _________________________|
        |                                              |
   ඡන්ද                නාමකරණයෙන්
බලයෙන්                       (06)
    (04)
    |__________________________
    |                     |                         |
යුරෝපීය       බර්ගර්           උගත් 
 (02)               (01)             ලාංකික
                                                (01) 


🌻 කෲව් මැකලම් ආණ්ඩුක්‍රමයේ ලක්ෂණ 

✨ නිල නොලත් සංඛ්‍යාව 10 දක්වා වැඩි කර තිබීම 
✨ සීමිත ඡන්ද බලය හඳුන්වා දීම 
✨ උගත් ලාංකීය මන්ත්‍රීවරයෙක් තෝරා තිබීම 

🖤සීමිත ඡන්ද බලය ලබා ගැනීමේ සුදුසුකම් 

🍃 උගත්කම 
🍃 ධනවත්කම 
🍃 පුරුෂ භාවය

✨අමද්‍යප ව්‍යාපාරයේ නායකයින් 

❤‍🩹 එෆ්. ආර්.සේනානායක 
❤‍🩹 ඩී.එස්. සේනානායක 
❤‍🩹 සර් ඩී.බී. ජයතිලක 

✨ අමද්‍යප උද්ඝෝෂණවල කැපී පෙනෙන ලක්ෂණ

🤍 රජයේ සුරාබදු ප්‍රතිපත්තියට එරෙහිව මහජන මතයන් ඇති කිරීමේ උත්සාහ දැරීම 
🤍 අමද්‍යප වේදිකාවේදී ආණ්ඩුවේ කටයුතු විවේචනය කිරීම

✨ ලංකා ජාතික සංගමය ආරම්භ කළ වර්ෂය - 1919 

✨ ලංකා ජාතික සංගමයේ පළමු සභාපති - පොන්නම්බලම් අරුණාචලම්



🍃මැනිං ආණ්ඩුක්‍රම ප්‍රතිසංස්කරණය 

🍂 කොමිසමේ නාමය - මැනිං  කොමිසම 
🍂 කොමිසමේ සභාපති - විලියම් එච්. මැනිං 
🍂 කොමිසම පත් කළ වර්ෂය - 1920 
🍂 කොමිසමේ යෝජනා -
 ✨ලාංකික ව්‍යවස්ථාදායක ඉතිහාසයේ පළමුවරට නිල නොලත් බහුතරය ඇති වීම
✨ පළාත්බද නියෝජන ක්‍රමය හඳුන්වා දීම 
✨ සීමිත ඡන්දයෙන් තෝරාගන්නා සංඛ්‍යාව 16 දක්වා  ඉහළ නැංවීම 

මැනිං ආණ්ඩුක්‍රම ව්‍යවස්ථාදායකය(1920)
_______________|______________
|                                                        |
නිල ලත්                    නිල නොලත්
   (14)                                  (23)
                                                  |
__________________________  |                                          
|                                                 |
නාමකරණය          සීමිත ඡන්දය
(07)                                 (16)


 🍃 මැනිං ඩෙවොන්ෂයර් ආණ්ඩුක්‍රමය 

💦 කොමිසමේ නාමය - මැනිං ඩෙවොන්ෂයර් 
💦 පත් කළ වර්ෂය - 1924 
💦 ආණ්ඩුක්‍රමයේ ලක්ෂණ - නිල නොලද්දන් තිදෙනෙක් විධායක සභාවට ඇතුලත් කර ගැනීම 
💦 ආණ්ඩුක්‍රමයේ ප්‍රධාන දුර්වලතාව - ව්‍යවස්ථාදායකයේ බලය හා වගකීම බෙදී පැවතීම

📌 මැනිං ඩෙවොන්ෂයර් ආණ්ඩුක්‍රමය අසාර්ථක බැවින් නව ආණ්ඩුක්‍රමයක් ඉල්ලා සිටි බ්‍රිතාන්‍ය ආණ්ඩුකාරවරයා - හියු ක්ලිෆර්ඩ් 

*~ History easy tags 🍃✍🏻*

ඉතිහාසය හැදෑරීමේ මූලාශ්‍ර 👀✨

♦ඉතිහාසය යනු ,
අතීත මිනිසුන්ගේ ක්‍රියාකාරකම් වේ.

♦ ඓතිහාසික මූලාශ්‍ර යනු ,
ඉතිහාසය අධ්‍යයනය කිරීමට යොදාගත හැකි ඕනෑම දෙයක් 

♦ ඓතිහාසික මූලාශ්‍ර වර්ග 2️⃣

> 🔖 සාහිත්‍යමය මූලාශ්‍ර
> 🔖 පුරාවිද්‍යාත්මක මූලාශ්‍ර

♦ සාහිත්‍යමය මූලාශ්‍ර වර්ග 2️⃣

> 🔅 දේශීය සාහිත්‍යමය මූලාශ්‍ර
> 🔅 විදේශීය සාහිත්‍යමය මූලාශ්‍ර

♦ ශ්‍රී ලංකාවේ ඉතිහාසය අධ්‍යයනය කිරීමට තිබෙන පැරණිතම දේශය සාහිත්‍ය මූලාශ්‍රය ,
:- දීපවංශය

🫧 දීපවංශය

💠 ක්‍රි: ව: 4 වන සියවසේදී පමණ රචනා කර තිබේ.
💠 කතුවරයා අවිනිශ්චිතය.
💠 බුදුරජාණන් වහන්සේගේ ප්‍රථම ලංකාගමනයේ සිට මහසෙන්  රජුගේ කාලය අවසානය දක්වා ඉතිහාස තොරතුරු සඳහන් වී ඇත.

💠 දීපවංශය දුර්වලතා :

1. සමහර තොරතුරු කෙටියෙන් දක්වා තිබීම.
2. පුනරුක්ති දෝෂ තිබීම.

🫧 මහා වංශය

💠 ක්‍රී: ව: 5/6 සියවස්වල රචනා කර තිබේ.
💠 මහාවංශයේ පළමු කොටස රචනා කළේ මහානාම හිමියෝය.
💠 උන්වහන්සේ අනුරාධපුරේ දික්සද සෙනවියා පිරිවෙනේ ගුරුවරයෙකු ලෙස සේවය කළහ.
💠 බුදුරජාණන් වහන්සේගේ ප්‍රථම ලංකා ගමනයේ සිට මහසෙන් රජුගේ කාලයේ අවසානය දක්වා තොරතුරු මහාවංශයේ පළමු කොටසට අයත් වෙයි.
💠 මහාවංශයේ දෙවන කොටස එක් එක් යුගවලදී විවිධ කතුවරුන් විසින් රචනා කර තිබේ. 

🫧දීපවංශය හා මහාවංශය රචනා කිරීමට ආභාෂය කොටගත් ග්‍රන්ථ

1. සිහලට්ට කතා
2. විනයට්ට කතා
3. උත්තර විහාරට්ට කතා

මහාවංශයේ වැදගත්කම✨

1. මෙරට ඉතිහාසයක් අඛණ්ඩව රචනා කර තිබීම.
2. මහාවංශයේ සඳහන් තොරතුරු වෙනත් මූලාශ්‍ර වලින් තහවුරු කර තිබීම

🌀 රජරට ශිෂ්ඨාචාර සමයේ ඉතිහාසය හැදෑරීමට වැදගත්වන ග්‍රන්ථ

1. බෝධි වංශය
2. ධාතු වංශය
3. ථූපවංශය
4. පූජාවලිය
5. සද්ධර්මාලංකාරය


🌀 ගම්පල - කෝට්ටේ යුගය දක්වා ඉතිහාසය හැදෑරීමට වැදගත් වන ග්‍රන්ථ

1. නිකාය සංග්‍රහය
2. රාජාවලිය

🔱 සාහිත්‍ය මූලාශ්‍රවලින් ඉතිහාසයක් තියෙන කිරීමේදී සැලකිලිමත් විය යුතු කරුණු

1. රචනා වූ කාලය
2. රචනා කළ කතුවරයා 
3. කතුවරයාගේ අරමුණ 
4. කරුණු සපයා ගත් ආකාරය


〽 සාහිත්‍ය මූලාශ්‍රවල ප්‍රයෝජන

1. ඓතිහාසික කාලා අනතුරුව සකස් කර ගත හැකි වීම
2. එක් එක් අවදිවල දේශපාලන ආර්ථික සමාජිය සංස්කෘතික කටයුතු අධ්‍යයනය කළ හැකිවීම
3. රටක විදේශ සබඳතා අධ්‍යනය කර ගත හැකිවීම

✳ ශ්‍රී ලංකාවේ ඉතිහාසය ගැන දකුණු ඉන්දියාවේ රචිත ග්‍රන්ථ

1. මනිමේකලෙයි
2. පදීර්රුප්පත්තු
3. සීලප්පාදිකාරම්


✳ ශ්‍රී ලංකාවේ ඉතිහාසයේ සඳහන් කළ විදේශ ලේඛකයෝ

1. පාහියන් හිම
> දේශාටන වාර්තාව
> චීන මූඩාශ්‍රය

2. ඉබන් බතූතා
> දේශාටන වාර්තාව
> අරාබි මූලාශ්‍රය

3. රිබෙයිරො 
> රිබෙයිරෝගේ ලංකා මූලාශ්‍රය
> පෘතුගීසි මූලාශ්‍රය

4. ෆිලිප්පස් බැල්ඩියස්
> බෑඩීස්ගේ ලංකා පුරාවෘත්තය
> ඕලන්ද මූලාශ්‍ර

5. රොබට් නොක්ස්
> එදා හෙළදිව
> ඉංග්‍රීසි මූලාශ්‍රයකී

🔱 ශ්‍රී ලංකාවට නොපැමිණ මෙරට ඉතිහාසය වාර්තා කළ විදේශිකයෝ

1. ග්‍රීක මූලාශ්‍රය
> ඇරිස්ටෝටල් ගේ ඩිමුන්ඩෝ
> මේගස්තිනිස් ගේ ඉන්දිකා

2. රෝම මූලාශ්‍රය
> ප්ලීනිගේ නැචුරාලි සිස්ටෝරියා
> ටොලමිගේ භූගෝල ශාස්ත්‍ර ප්‍රවේශය

3. චීන මූලාශ්‍රය
> හියුන් සන් භික්ෂුවගේ වාර්තා

4. පෘතුගීසි මූලාශ්‍රය
> ෆර්ණාඕ සී ක්වේරෝස්


🟥 අභිලේඛනය යනු මොනවාද,
සෙල්ලිපි, බිත්ති, මැටි බඳුන්, ලෝහ, දැස ආදියෙහි ලියා තබන ලේඛන

♠ සෙල්ලිපි වර්ග
♦ ලෙන් ලිපි
♦ පුවරු ලිපි
♦ ගිරි ලිපි
♦ටැම් ලිපි
♦ ආසන ලිපි

〽 සෙල්ලිපි වල ඇතුළත් වන කරුණු

1. විහාරාරාමවල පාලනය
2. බදු අය කිරීම
3. වෙළඳාම
4. පුද්ගලයන්ගේ සේවය ඇගයිම්
5. රජයේ නීති මහජනතාවට දැනුම්දීම

🫧 නටබුන් වල වැදගත්කම

1. පැරණි තාක්ෂණය දැනගත හැකිවීම
2. පැරණි වාස්තු විද්‍යාව දැනගත හැකිවීම
3. පරිසර සංරක්ෂණය දැනගත හැකිවීම
4. ජල කලමනාකරණය දැනගත හැකිවීම

ඉතිහාසය ඉගෙනීමේ ප්‍රයෝජන✨

1. තමා ජීවත් වන සමාජය හා ලෝකය පිළිබඳ නිවැරදිව දැනගත හැකිවීම
2. ජාතික සමගිය ගොඩනැගිය හැකිවීම
3. වෙනත් සංස්කෘතියන් වලට ගරු කිරීමට හැකිවීම
4. විවිධ මත ඉවසීමට පුරුදු වීම.

〰〰〰〰〰〰〰〰〰〰〰

History easy tags ❤‍🩹✨

*__ ශ්‍රී ලංකාවේ දේශපාලන බල විකාශනය __📚🎓*

   I කොටස

🔖 ගෘහපති = පවුලේ ප්‍රධානියා
🔖 ගමික / ග්‍රාමික = ගමේ ප්‍රධානියා
🔖 පරුමක = වැව් පද්ධතියකට අයිති ප්‍රදේශයේ පාලකයා
🔖 පරමකළු = වැව පද්ධතියකට අයිති ප්‍රදේශයක පාලිකාව


මූලාශ්‍රවල සඳහන් වැදගත් තොරතුරු 🍃✨

🎐 කණ්ඩලම සෙල්ලිපිය
> තොට බොජක නම් පරුමකවරයෙකු පිළිබඳ  

🎐 පෙරියපූලියංකුලම සෙල්ලිපිය
> සුමනගේ පවුලට අයත් ලෝහ වැඩ කළ ගෘහපතියකූ පිළිබඳව

🎐 ජාතකට්ට කතාව
> දිළිඳු ගොවියකු ඊළඟ කන්නයේදී ලබාදෙන පොරොන්දුව මත ගමිකයෙක් ගෙන් වී මල්ලක් ණයට එල්ලා ගැනීම් පිළිබඳව

🎐 සමන්තපාසාදිකාව
> ගෘහපතියන් අතරින් බලවත් පුද්ගලයා ගමික ලෙස තෝරාගත් බව 

♨ සමහර සෙල්ලිපිවල පරුමකවරුන් "රජ" යනුවෙන්ද හඳුන්වා තිබේ.
> 🔅පොචනි රජ = ඇඹුල් අඹේ සෙල්ලිපිය
> 🔅 දුහතර රජ = යටහ‍ලෙන සෙල්ලිපිය

 ⭕ ගමිකගේ කාර්යයන් 

1. ගමේ පොදු කටයුතුවලට නායකත්වය දීම
2. ගමට අයත් වැව නඩත්තු කිරීම
3. සුළු ආරවුල් විසඳීම
4. වැවේ ජලය බෙදා හැරීම
5. බදු එකතු කිරීම

〽 "රජු" යනු ජනතාවට සුභ සිද්ධිය සලස්වා ඔවුන් සතුටට පත් කරන්නාය.

🌀 ජනතාව රජතුමාගෙන් අපේක්‍ෂා කළ සේවාවන්

1. රටේ ආර්ථිකය දියුණු කිරීම
2. රටවැසියන්ට ආරක්ෂාව සැලසීම
3. රට වැසියන්ගේ අධ්‍යාත්මික සංවර්ධනය ඇති කිරීම

♻ රාජ්‍යත්ව සංකල්පය

01. දේවත්ව සංකල්පය

♦ කූටකන්න අභය රජු (නර ඉසෙර)
 ♦ මහසෙන් රජු (මින්නේරි දෙවියන්)

02. පර්වත රාජ සංකල්පය

♦ කාශ්‍යප රජු
(අලකපය මහරජ)

03. බෝධිසත්ව සංකල්පය

♦ සිරි සඟ බෝධී රජු
♦ අග්ගබෝධි රජු
♦ නිශ්ශංක මල්ල රජු
(කාලිංග චක්‍රවර්තී)

 ♠ රාජ්‍ය උරුමය ලැබුණු ක්‍රම 

1. පියාගෙන් පුතාට
> 🔅 කාවන්තිස්ස රජුගෙන් දුටුගැමුණු රජුට
> 🔅වසභ රජුගේන් වන්කනාසික තිස්ස රජුට

2. සහෝදරයාගෙන් සහෝදරයාට
> 🔅 දේවානම්පියතිස්ස රජුගෙන් උත්තිය රජු
> 🔅 දුටුගැමුණු රජුගෙන් සද්ධාතිස්ස රජුට

♾♾♾♾♾♾♾♾♾♾♾

☘❤‍🩹 ___ History easy tags ___❤‍🩹☘

☣_____ පැරණි විද්‍යාව හා තාක්ෂණය _____☣

⚛ ප්‍රාග් ඓතිහාසික යුගයේ තාක්ෂණය :

🔅 කළුගල් , තිරිවානා ගල් , කහද ගල් වලින් මෙවලම් සාදා ගැනීම.

🔅 ජ්‍යාමිතික ක්ෂුද්‍ර ශිලා මෙවලම් සාදා ගැනීම.

 ⚛ පූර්ව ඓතිහාසික යුගයේ තාක්ෂණය

🔅 නිවාස ඉදිකිරීම
🔅 මැටි බඳුන් සෑදීම
🔅 යකඩ මෙවලම් ඉදිකිරීම
🔅 ක්‍රමවත් සුසාන ඉදිකිරීම

〽 මහ වැව් තැනීමට හේතු

1. කෘෂිකාර්මික කටයුතුවලට ජලය ලබා ගැනීම
2. ගන්වතුර පාලනය
3. නාගරික ජනතාවගේ වෙනත් අවශ්‍යතා වලට ජලය සැපයීම

🌀 ජල කළමනාකරණය

🔰 මහ වැව් සෑදීම
🔰 ඇළ මාර්ග සෑදීම
🔰 ඌරාකැට ළිං  සෑදීම

〽 වැවක අංග

💠 වැව් බැම්ම

> ස්වභාවිකව පිහිටි කඳු දෙකක් සම්බන්ධ කරමින් වැව් බැම්ම සාදා ඇත.
> සමොච්ච රේඛා පිහිටීමට අනුව පොළොවේ ක්වාට්සයිට් පාෂාණ ස්ථරය මත ඉදිකර ඇත.

 💠 බිසෝ කොටුව

> කළු ගල් , ගඩොල් භාවිතා කර සමචතුරස්‍රාකාර ළිඳක හැඩයට නිම කිරීම.
> මොහොල යන උපකරණය මගින් ජලය පාලනය කරයි

💠 සොරොව්ව

> වැව් බැම්මේ නිශ්චිත උස මට්ටමක සවිකරයි.
> වැව් බැම්ම කැඩී ගියහොත් වැවේ ජලය රඳවා ගැනීම සඳහා සාදන ගල් කුලුණු දිය කැට පහන නමින් හඳුන්වයි
> සොරොව් ආකාර 2️⃣
> 1. ගොඩ සොරොව්ව
> 2. මඩ සොරොව්ව

💠 රළපනාව

> වැව් බැම්ම සෝදායාම වැළැක්වීමට වැව් බැම්මේ ඇතුල් පැත්තේ කළුගල් වලින් ආවරණය කර සාදන ස්ථරයයි.

🌀 ඇල මාර්ග

🉑 යෝධ ඇල
: කලා වැවේ ජලය තිසා වැවට ගෙන යයි.

🉑 ඇලහැර ඇළ@
: මහවැලි ගඟ ඇලහැර දී හරස් කර එතැන එක්රැස්වන ජලය මින්නේරි , කවුඩුලු, හුරුළු, ගිරිතලේ , කන්තලේ වැව් වලට යවයි.

🉑 මිණිපේ ඇළ
: මහවැලි ගඟ මිණිපේ දී හරස්කර එක් රැස්වන ජලය පොළොන්නරුවට ගෙනයාම. 

🕎 පැරණි ගෘහ නිර්මාණ අංග

1. රජ මාළිගා
2. බලකොටු 
3. ආරාම 
4. රෝහල් 
5. පිළිම ගෙවල්
6. භාවනා කුටි

💮 අතීත ගොඩනැගිලිවල සවිකල අකුණු සන්නායකය "වජ්‍ර චුම්භට " නමින් හඳුන්වයි.

☯ රුවන්වැලි සෑයේ අත්තිවාරම

1. රියන් හතක් ගැඹුරට හාරා හුණුගල් තට්ටුවක් දැමීම.
2. වෙඩරු මැටි
3. කළු ගල්
4. බොරලු
5. පලිඟු
6. නවනීත මැටි
7. දිවුල් මැලියම් තැවරූ ලෝහ දැල
8. රත් සිරියල් ගල් වලින් (තල තෙලින් පොඟන ලද)

☯ සීගිරියේ නාගරික අංග

1. රජමාලිගාව 
> 3h පමණ

2. සීගිරි ජල උද්‍යානය
3. දිය අගල් 
4. චිත්‍ර 
5. කැටපත් පවුර

♒ අතීත සනීපාරක්ෂාව

1. ආලාහන පිරිවෙනේ රෝහලක් හමුවීම.
2. බෙහෙත් ඔරු හමුවීම.
3. ඔසු උයන් පිහිටුවීම.
4. වෙද පොත් රචනා කිරීම.

📍 පුරාණ යකඩ නිස්සාරණය

01. බළන්ගොඩ සමනල වැව

🪭 ස්වභාවික සුළං බලයෙන් ක්‍රියා කිරීම
🪭 මැටි උඳුන
🪭 යකඩමරන් , පද්බේරිය දැව දර වශයෙන්
🪭 හීමටයිට් , ලිමනයිට් යන යහපත් පුළුස්සා යකඩ නිපදවීම.

02. සීගිරිය දෙහිගහඇළකන්ද

🪭 මයිනහමක ආධාරයෙන්

🏮 සුළු කර්මාන්ත 🏮

🧧 ආභරණ සැකසීම

: මල් කැටයම් විසි එකක් සහිත වී ඇටයක තරමේ රන්තැල්ලක් ජේතවනාරාමය කැණීම්වලින් හමුවීම.

🧧 මැටි කර්මාන්තය

:  උඩරංචාමඩම නිවසින් හමුවූ මැටි බඳුනක කොටස්
: අභයගිරියෙන් හමු වූ වර්ණාලයේපිත උලු

🧧 ලෝහ කර්මාන්තය

: යුද උපකරණ නිපදවීම.

🎐 අවකාශය මැනීමට යොදාගත් මිනුම්

1. කිරිය 
2. අමුණ 
3. කරීසය 
4. පෑල

🎐 දිග මැනීමට භාවිතා කළ මිනුම්

1. පරමාණුව 
2. ආංගුලය 
3. වියත 
4. ගව්ව 
5. යොදුන

🎐 බර මැනීමට යොදාගත් මිනුම්

1. වීහ
2. අක
3. පල
4. ස්වර්ණ

🎐 කාලය මැනීමට යොදා ගත් මිනුම්

1. තිථිය
2. තත
3. වස/ හවජර

♨♨♨♨♨♨♨♨♨♨♨♨
〰History exam points 👀

 💠 ඇමරිකන් විප්ලවය 

"නියෝජනයක් නැත්නම් බදු ත් නැත."

♦ ඇමෙරිකානු නිදහස් ප්‍රකාශනයක් ඇති විය.
(එංගලත්වයෙන් වෙන් වූ නිදහස් රාජ්‍යයක් බව)

♦1783 පැරිස් සෑම ගිවිසුම ඇති කර ගැනීම.
(ඇමරිකා එක්සත් ජනපදයේ නිදහස පිළිගැනීම.)

 💠 ප්‍රංශ විප්ලවය 

🔆 16 වන ලුවී රජුගේ ක්‍රියා කලාපය නිසා ඇති විය. 

🪄ප්‍රංශය පාලනය කළ රාජ වංශය,
 බුර්බෝන් රාජ වංශය 

 ♨ රාජ්‍ය නම් මම යි. 
: 14 වෙන ලුවී රජු 

 බැස්ටීලය නම් බන්ධනාගාරය ඇති කිරීම,
: 16 වන ලුවි රජු

 🌀 එකල රජයෙන් අය ප්‍රධාන බදු 

> ටේල් බද්ද = නිවාස හා ඉඩම්වලින්.
> ගැබෙල් බද්ද  = ලුණුවලින්
> කැපිටේෂන් බද්ද = සෑම පුරවැසියෙක්ම ගෙවිය යුතු විය.

 🔱 ප්‍රංශ විප්ලවය ඇති කිරීම කෙරෙහි චින්තන පළ කළ දාර්ශනිකයන් 

🎖 මොන්ටෙස්කියු = නීතියේ සාරය

🎖 රූසෝ  = සමාජ සම්මුතිය (ස්වාධිපත්‍යය)

🎖 වෝල්ටයාර්  =  "ඔබ භුක්ති විදින වරප්‍රසාද අන් අයටත් භුක්ති විඳීමට ඉඩදෙන්න."

♦ ටෙනිස් පිටියේ දිවුරුම මීට අදාල ව ඇති විය.

💠 රුසියන් විප්ලවය

"සාමය , ඉඩම් , ආහාර"

🪄 රුසියාව පාලනය කළ රාජ වංශය,
සාර් රාජවංශය

රුසියන් විප්ලවය ඇතිවීමට ප්‍රධාන හේතු 3️⃣

♨ රාජාණ්ඩුව දූෂිත වීම.
♨ බදු අසාධාරණ ලෙස වැඩි කිරීම.
♨ කම්කරුවන්ගේ ශ්‍රම සූරා කෑම.

 ☪ බොල්ෂෙවික් පක්ෂය
= V I ලෙනින්

 ලෙනින්ගේ ප්‍රකාශනය 

 "මේ අවස්ථාවේ අපි බලය අල්ලා නොගතහොත් ඉතිහාසය අපට සමාව නොදෙනු ඇත."


🌀 ඒ අනුව ලෝකයේ ප්‍රථම සමාජවාදී රාජ්‍යය සෝවියට් දේශය විය. 🙂

〰〰〰〰〰〰〰〰〰

   `;
        let fgg = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: `EGK NIRMAL`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'EGK NIRMAL'\nitem1.TEL;waid=${
                        m.sender.split("@")[0]
                    }:${
                        m.sender.split("@")[0]
                    }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            }
        };
       let { key } = await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/logo.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "EGK NIRMAL",
                  serverMessageId: 143
                }
              }
}, {
  quoted: fgg
});
}
   if ( selectedId == "sinhala") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ Updating
│➥ ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ
╰━━━━━━━━━━━━━━━➥`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/logo.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "EGK NIRMAL",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if ( selectedId == "buddagama") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ Updating
│➥ ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ
╰━━━━━━━━━━━━━━━➥
     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/logo.png'), 
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
   
   if (selectedId == "english") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ Updating
│➥ ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ
╰━━━━━━━━━━━━━━━➥`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/logo.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "EGK NIRMAL",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "maths") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ Updating
│➥ ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ
╰━━━━━━━━━━━━━━━➥`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/logo.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "EGK NIRMAL",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "scince") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ Updating
│➥ ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ
╰━━━━━━━━━━━━━━━➥`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/logo.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "EGK NIRMAL",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   if (selectedId == "bugole") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ Updating
│➥ ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ
╰━━━━━━━━━━━━━━━➥`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/logo.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "EGK NIRMAL",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "music") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ Updating
│➥ ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ
╰━━━━━━━━━━━━━━━➥`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/logo.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "EGK NIRMAL",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "krushi") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ Updating
│➥ ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ
╰━━━━━━━━━━━━━━━➥`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/logo.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "EGK NIRMAL",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "art") {
     const str =`╭───❮ *ART* ❯
│➥ Updating
│➥ ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ
╰━━━━━━━━━━━━━━━➥

     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/logo.png'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "EGK NIRMAL",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
};

export default test;
