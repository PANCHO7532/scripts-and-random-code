const fs = require('fs');
const dgram = require('dgram');
const { resolve } = require('path');
const A2S_INFO_RESPONSE_HEADER = [0xff, 0xff, 0xff, 0xff, 0x49];
const A2S_PLAYER_RESPONSE_HEADER = [0xff, 0xff, 0xff, 0xff, 0x44];
function strToArr(string) {
    var arr = [];
    for(let c = 0; c < string.length; c++) {
        arr.push(string.charCodeAt(c));
    }
    return arr;
}
function buftoArr(buffer) {
    var arr = [];
    for(let c = 0; c < buffer.length; c++) {
        arr.push(buffer[c]);
    }
    return arr;
}
//read server.cfg
var scfg = fs.readFileSync("server.json").toString();
scfg = JSON.parse(scfg);
console.log(scfg["hostname"]);
function udpCallback(msg, rinfo) {
    console.log("[INFO] Connection received from: " + rinfo.address + ":" + rinfo.port);
    console.log("Buffer:");
    console.log(msg);
    console.log("String:");
    console.log(msg.toString());
    //writin' response
    response_bytes = [];
    response_bytes.push(0x11); //protocol ver
    response_bytes = response_bytes.concat(strToArr(scfg["hostname"]));
    response_bytes.push(0x00);
    response_bytes = response_bytes.concat(strToArr(scfg["map"]));
    response_bytes.push(0x00);
    response_bytes = response_bytes.concat(strToArr(scfg["game"]));
    response_bytes.push(0x00);
    response_bytes = response_bytes.concat(strToArr(scfg["gameName"]));
    response_bytes.push(0x00);
    response_bytes.push(0x40, 0x01); //appid (short) 0x40, 0x01 = 320 short appid for Half-Life 2: Deathmatch, if not matches with client it doesn't appears on server browser
    response_bytes.push(0x05); //actual players on server (byte)
    response_bytes.push(0x0A); //max players (byte) 0xa = 10 players
    response_bytes.push(0x00); //number of bots? (byte) (player count decreases)
    response_bytes.push(0x64); //d = dedicated, i = non-dedicated, p = sourcetv
    response_bytes.push(0x77); //w = windows, l = linux, m = macos
    response_bytes.push(0x00); //visible = 0 - public, 1 - private
    response_bytes.push(0x00); //vac secured = 0 - no, 1 - yes
    response_bytes = response_bytes.concat(strToArr("1.0.0.1")); //game version or source engine build number (actual one: 5394425)
    response_bytes.push(0x00); //edf
    //console.log(Buffer.from([64]).readInt16LE(0));
    if(buftoArr(msg)[4] == 0x55) /*equals to U*/ {
        if(buftoArr(msg).slice(5, 9) != [0xff, 0xff, 0xff, 0xff]) {
            //message with challenge
            console.log("GUYS I'M SENDING A2S_PLAYER RESPONSE AFTER CHALLENGE");
            var resp = [0xff, 0xff, 0xff, 0xff, 0x44];
            resp.push(0x05) //total of players?
            //init of player chunk object
            resp.push(0x00) //start of player chunk
            resp = resp.concat(strToArr("PANCHO7532"));
            resp.push(0x00) //? separator i guess
            resp.push(0x58, 0x00, 0x00, 0x00); //Score (long)
            resp.push(0x88, 0x88, 0x88, 0x46); //duration in server (float)
            ///////////////////////////////////////////////////////////////
            //init of player chunk object
            resp.push(0x00) //start of player chunk
            resp = resp.concat(strToArr("Swag69420noscope"));
            resp.push(0x00) //? separator i guess
            resp.push(0x28, 0x00, 0x00, 0x00); //Score (long)
            resp.push(0x11, 0x11, 0x11, 0x40); //duration in server (float)
            ///////////////////////////////////////////////////////////////
            //init of player chunk object
            resp.push(0x00) //start of player chunk
            resp = resp.concat(strToArr("XxXPussySlayerXxX"));
            resp.push(0x00) //? separator i guess
            resp.push(0x18, 0x00, 0x00, 0x00); //Score (long)
            resp.push(0xff, 0xff, 0xff, 0x40); //duration in server (float)
            ///////////////////////////////////////////////////////////////
            //init of player chunk object
            resp.push(0x00) //start of player chunk
            resp = resp.concat(strToArr("p0358-is-gay"));
            resp.push(0x00) //? separator i guess
            resp.push(0x2A, 0x00, 0x00, 0x00); //Score (long)
            resp.push(0x22, 0x22, 0x22, 0x41); //duration in server (float)
            ///////////////////////////////////////////////////////////////
            //init of player chunk object
            resp.push(0x00) //start of player chunk
            resp = resp.concat(strToArr("theVeteranCuntXD"));
            resp.push(0x00) //? separator i guess
            resp.push(0x01, 0x00, 0x00, 0x00); //Score (long)
            resp.push(0x77, 0x77, 0x77, 0x43); //duration in server (float)
            udpServer.send(Buffer.from(resp), rinfo.port, rinfo.address);
            return;
        //} else if(buftoArr(msg)[4] == 0x55) {
        //    //it's a A2S_PLAYER challenge
        //    console.log("GUYS IT'S A A2S_PLAYER CHALLENGE");
            //lmao i can't believe this cunt copypasted the challenge answer from the vdc wiki
            //so, challenge response should be the 4f's and then an 'a', followed by an int (4 bytes)
            //apparently this last one challenge int could be anything as apparently the game doesn't gives a fuck
        //    var resp = [0xFF, 0xFF, 0xFF, 0xFF, 0x41, 0x4B, 0xA1, 0xD5, 0x22];
        //    console.log("bufresponse:");
        //    console.log(Buffer.from(resp));
        //    udpServer.send(Buffer.from(resp), rinfo.port, rinfo.address);
        //    return;
        }
        //it's a A2S_PLAYER challenge
        console.log("GUYS IT'S A A2S_PLAYER CHALLENGE");
        //lmao i can't believe this cunt copypasted the challenge answer from the vdc wiki
        //so, challenge response should be the 4f's and then an 'a', followed by an int (4 bytes)
        //apparently this last one challenge int could be anything as apparently the game doesn't gives a fuck
        var resp = [0xFF, 0xFF, 0xFF, 0xFF, 0x41, 0x4B, 0xA1, 0xD5, 0x22];
        console.log("bufresponse:");
        console.log(Buffer.from(resp));
        udpServer.send(Buffer.from(resp), rinfo.port, rinfo.address);
        return;
        } else if(buftoArr(msg)[4] == 0x71) {
            //A2S_GETCHALLENGE
            //so, source is a bit too special on how this challenge is sent, let's try to document it
            //and by "document it" we will just download the leaked source codes for the 2007 engine base and CS:GO, Team Fortress 2 leaked sources and look their functionality
            //requests as 'q' 0x71
            //responds an 'A' 0x41
            //and contains the challenge sent along with some bytes that i have to look into
            //-------------------------------------
            //request struct:
            //xffffffff - header 
            //x71 - 'q' - A2S_GETCHALLENGE	 (internally acoording to 2007 source and tf2 source idk)
            //4 bytes long (not long long) with garbage or a 9 digit number (1 - 999999999)
            //10 bytes of zero chars '0' 0x30
            //null end 0x00
            //-------------------------------------
            //response struct:
            //xffffffff - header 
            //x41 - 'A' - S2C_CHALLENGE (internally acoording to 2007 source or tf2 source idk)
            //(string) "3IOZ" -WHAT XD- (S2C_MAGICVERSION), changes between games apparently, TF2 magic version is the inverse, "ZOI3"
            //HEADS UP! S2C_MAGICVERSION isn't present on the original Source 2007 codebase. They probably added it after the initial 2007 leak or in newer source versions like 2009 and 2013 codebases
            //This obviously may lead to reimplement this on the future so we can allow retail/oob clients to connect.
            //(long) 4 bytes of randomness (server challenge)
            //(long) the challenge we sent (4 bytes, client challenge)
            //(long) 0x03, steam auth protocol number
            //then from here if the steam auth protocol matches with the protocol we using on steam (probably 3 xd), then we have the following fields:
            //(short) 0 or 1, steam2 encryption key is present?
            //(persisten, long of 6 bytes? xd), steam profile id of the server? (apparently this isn't present anymore on TF2 code), ex sequence: 07 B8 34 6C F3 41
            //(short), steam appid, in this case 320
            //(byte) 0 or 1?, BSecure? (probably some vac bullshit) in our case is 1 so it's a steam server whatsoever
            // 6 bytes of zero chars '0' 0x30 for pad it
            //-------------------------------------
            //so, how we solve this to craft a valid response for the game?
            //1) server challenge:
            //for avoid guessing if this could be garbage or calculated random garbage, we fill it with zeroes, a char or FF's...
            //...or we copy paste the client challenge and that's all
            //2) steam auth protocol:
            //as my implementation is NO STEAM related, then we could set this to zero, but the game may throw an error because this mismatches
            //UPDATE 5/4
            //SO, apparently there are two auth types
            // 2 = auth by hashed cd key
            // 3 = auth by certified steam user id, certificates and a large bullshit that i'm not going to check out
            //and, for solve this dilemma, we should use 0x02? i think yes
            //i'll update with a follow up, but surely i could leave this at a value of 3 anyway
            //3) steam2 encrypt key is present:
            //we don't have encryption key so we go wildly unencrypted? (btw this is zero on authed clients so we could put it at 1 just to see what happens) but this may cause problems
            //4) the mysterious 6 byte persistent content:
            //i don't know exactly what this is for so, we fill it with the example sequence given before, or we fill it with zeroes, FFs, etc.
            //5) BSecure:
            //we aren't secure so zero xD (or 1 if this goes wrong)
            console.log("A2S_CHALLENGE REEEEEEEEEEEEEEEEE");
            var resp = [0xff, 0xff, 0xff, 0xff, 0x41]; //'A'
            resp = resp.concat(strToArr("3IOZ"));
            resp.push(0x07, 0x05, 0x03, 0x02);
            //client chall
            //console.log(buftoArr(msg).slice(5, 9));
            var chall = buftoArr(msg).slice(5, 9);
            resp.push(chall[0], chall[1], chall[2], chall[3]); //weirdo
            resp.push(0x02, 0x00, 0x00, 0x00); //steam protocol value
            //resp.push(0x00); //s2 encrypt
            //resp.push(0xff, 0xff, 0xff, 0xff, 0xff, 0xff); //unknown values xd
            //resp.push(0x40, 0x01); //app id
            //resp.push(0x01) //bsecure
            resp.push(0x30, 0x30, 0x30, 0x30, 0x30, 0x30); //'0' pad
            resp.push(0x00); //end
            udpServer.send(Buffer.from(resp), rinfo.port, rinfo.address);
            return;
    } else if(buftoArr(msg)[4] == 0x6B) { //'k'
        //ANYWAY
        //at this point the client is convinced that we are trustworthy and starts a connection
        //player 'k' packet struct (if the steam protocol is 2)
        //=====================================================
        //xffffffff - header 
        //x6B - 'k' -  C2S_CONNECT
        //(long) - unknown purpose (18)
        //(long) - steam auth proto (either 2 or 3)
        //(long) - server challenge (that we generated previously)
        //(long) - client challenge (that the client sent initially on 'q')
        //(string) - player name
        //(string) - password (if any)
        //0x00
        //(string) - source engine build number/engine version
        //0x00
        //(string) - hashed cd key (probably our game cd key idk, or other hashed steam bullshit)
        //0x00 - eof
        //======================================================
        //BTW this is the packet structure just in case if the steam protocol is 0x02, if it's 0x03 like an modern client,
        //then it proceds to add a long-ass garbage content that probably is our steam certificate or steam crypted stuff that isn't well
        //documented on the source engine leaks (2007 and 2013 TF2, havent checked CSGO yet)
        //
        //and finally, the server response for this is a two simple xffffffff'B' (S2C_CONNECTION) with the challenge, 10 '0' pad
        //and another same one but with 15 byte pad
        var resp = [0xff, 0xff, 0xff, 0xff, 0x42]; //'B'
        var chall = buftoArr(msg).slice(17, 21);
        resp.push(chall[0], chall[1], chall[2], chall[3]); //weirdo
        resp.push(0x30,0x30,0x30,0x30,0x30,0x30,0x30,0x30,0x30,0x30);
        resp.push(0x00);
        udpServer.send(Buffer.from(resp), rinfo.port, rinfo.address);
        var resp = [0xff, 0xff, 0xff, 0xff, 0x42]; //'B'
        resp.push(0x30,0x30,0x30,0x30,0x30,0x30,0x30,0x30,0x30,0x30,0x30,0x30,0x30,0x30,0x30);
        resp.push(0x00);
        //you are a handsome client didn't you? :D *hands connection OK*
        udpServer.send(Buffer.from(resp), rinfo.port, rinfo.address);
        return;
    }
    console.log(Buffer.from(A2S_INFO_RESPONSE_HEADER.concat(response_bytes)));
    fs.writeFileSync("resp.dat", Buffer.from(A2S_INFO_RESPONSE_HEADER.concat(response_bytes)));
    udpServer.send(Buffer.from(A2S_INFO_RESPONSE_HEADER.concat(response_bytes)), rinfo.port, rinfo.address);
    return;
}
var udpServer = dgram.createSocket('udp6', udpCallback);
udpServer.bind(27128, function() {
    console.log("[INFO] Server started!");
});