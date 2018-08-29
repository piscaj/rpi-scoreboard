# rpi-scoreboard
Work in progress. Raspberry Pi Scoreboard US BYD and IOT solution.<br>

<H2>API Overview</H2>
The application programming interface (API) allows you to programmatically query and make changes to Scoreboard US scoreboards. <br>
<hr/>
This API is currently developed for a standard baseball scoreboard, but will be expanded to support other standard sport configurations.  Since the API is based on REST principles, it conforms to some standard resource-oriented practices for naming conventions and data manipulation. You can use your browser to access URLs, and you can use any HTTP client in any programming language to interact with the API.

<H2>Authentication</H2>
Not supported yet.

<H2>REST API</H2>

If you are new to REST, here’s a few resources from Brian Eng and Jeff Cohen to get you started:<br>

Understanding Resources<br>
A Million APIs<br>
RESTful Design<br>
Each resource () has a similar structure. For example, the API will respond to the following commands for /status/score to read the current score.<br>

<b>HTTP Method:</b>  GET<br>
<b>Recieve:</b>  JSON<br>

<h3>Example:</h3><br>

Request:<br>
http://XXX.XXX.XXX.XXX:3001/status/score <br>

<b>Reply:</b><br>

HTTP/1.1 200 OK <br>

Date: Wed, 29 Aug 2018 16:20:12 GMT <br>
Etag: W/"5b-pbuDJZbxdBbkWtGY/kuskWGKeEM" <br>
Content-Type: application/json; charset=utf-8 <br>
Connection: keep-alive <br>
X-Powered-By: Express <br>
Content-Length: 91 <br>

{<br>
    "message": "Success",<br>
    "homeScore": 0, <br>
    "awayScore": 0, <br>
    "inning": 0, <br>
    "balls": 0, <br>
    "strikes": 0, <br>
    "outs": 0 <br>
} <br>

<h2>Resources:</h2>

<h3>/setDigit</h3><br>

<b>URL:</b><br>

/setDigit/resetScore<br>
/setDigit/home/add<br>
/setDigit/home/subtract<br>
/setDigit/away/add<br>
/setDigit/away/subtract<br>
/setDigit/inning/add<br>
/setDigit/inning/subtract<br>
/setDigit/balls/add<br>
/setDigit/balls/subtract<br>
/setDigit/strikes/add<br>
/setDigit/strikes/subtract<br>
/setDigit/outs/add<br>
/setDigit/outs/subtract<br>
/setDigit/home/"Set numerical value"<br>
/setDigit/away/"Set numerical value"<br>
/setDigit/inning/"Set numerical value"<br>

<h3>/status</h3><br>

<b>URL:</b><br>

/status/score"<br>
/status/serialport<br>
/status/serialport/open<br>
/status/serialport/close<br>






