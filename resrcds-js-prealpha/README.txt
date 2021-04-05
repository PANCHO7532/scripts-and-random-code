So, this is my attempt at trying to emulate srcds with javascript, with surprisingly good results (although i didn't reach to go in a true match yet)

What this basically does is:
- Set up a server (duh)
- Print server name, players inside, max players, actual map, etc
- Print actual players in the server (fake players)
- Authenticate and validate server challenges and their steam auth bullshit

Inside you will find comments and maybe useful documentation about every aspect of the Source Engine packets and what everything does inside the script
Featuring the following undocumented Source Engine packet types:
- A2S_GETCHALLENGE
- S2C_CHALLENGE
- C2S_CONNECT
- S2C_CONNECTION

I did my best and tried to document them but as much as i could, but there may be incoherencies, fucking swear words, and my barely comprehension of english :v
Source Engine has a pretty peculiar packet handling depending on which steam protocol or source version you're using so i recommend you to take a really really close look for avoid bashing your head against a wall later, you'll thank me then.

How to run this heap of shit:
1) Download Node.JS (https://nodejs.org/en/download/)
2) Download the contents of this folder
3) Open a terminal and execute "node index.js"
4) Open Half-Life 2: Deathmatch, and then add as a favourite your IP with the port 27128, ex: 192.168.1.145:27128
5) Enjoy

You may not see the server at first, if it doesn't appear on the Favourites tab, then you need to run this script from another machine on the same network (or a VPS if you're kinda rich), and then add the new IP on the port 27128
And that's it! The final result is a working server... almost but does everything basic to function itself. Enjoy experimenting'

Surely you would ask, what the hell is "resrcds"?
Well, ReSRCDS is a homebrew project to rewrite and rebuild and port srcds (Source Dedicated Server) into Java, this script is just a "one filer" draft for understand at detail the packet structure of Source.
What did i do at this time? (05/04/2021): basically this script xd

Altough i do not guarantee that this project will see the surface from their cave someday, i wont discard it as i'm obsessed with Source Engine xD
Anyway, see ya' round

Oh, almost forgot, if you find something useful here, and you do something cool with it, don't forget to share some credit :D
