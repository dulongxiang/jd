/*************************************

项目名称：有谱么
下载地址：https://t.cn/A60Vxtkh
脚本作者：chxm1023
特别感谢：@Baby，提供数据
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/yopu\.co\/api\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/youpume.js

[mitm]
hostname = yopu.co

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.dailyPlayAwardCoupon = null;
chxm1023.isMember = true;
chxm1023.isMembershipAutoRenewal = true;
chxm1023.ladder = "member";
chxm1023.adsDisabledTill = 1772380823000;


$done({ body: JSON.stringify(chxm1023)});
