/*
Qx:
^https:\/\/i\.weread\.qq\.com\/pay\/(memberCardSummary|balance) url script-response-body WechatRead.js

MITM = i.weread.qq.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const member = '/pay/memberCardSummary';
const balance = '/pay/balance';
debugger;
if (url.indexOf(member) != -1) {
   obj["expiredTime"] = "7956892799";
   obj["expired"] = "0";
   obj["remainTime"] = "9999999999999";
   obj["savedMoney"] = "999999";
   body = JSON.stringify(obj);
}
if (url.indexOf(balance) != -1) {
   obj["balance"] = "999999";
   obj["giftBalance"] = "999999";
   obj["peerBalance"] = "999999";
   body = JSON.stringify(obj);
 }
$done({body});