define("template/lib/cn", function(){
return {render:function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n<style>\n    * {\n        margin: 0;\n        padding: 0\n    }\n    html,body {\n        font-family: microsoft yahei arial, "黑体";\n    }\n    .ab{\n        position: absolute;\n    }\n\n</style>\n<div style="width: 100mm; height: 180mm;" id="page_'+
((__t=(printSerialId))==null?'':__t)+
'">\n    <div style="width: 98mm; height: 110mm; border: solid 1pt #000; overflow: hidden; margin: 0 auto; font-family: \'microsoft yahei\';position: relative">\n        <div class="title ab" style="border-bottom: solid 1px #626365;width: 100%;height: 9mm;line-height: 9mm;top: 0;left: 0;">\n            <div class="ab" style="width: 30mm;height: 9mm; top: 0mm;">\n                ';
try{if(waybillBranch.cpLogoUp){
__p+='\n                <img src="http:'+
((__t=(waybillBranch.cpLogoUp))==null?'':__t)+
'" style="height: 9mm;"/>\n                ';
}}catch(ex){}
__p+='\n            </div>\n            <div class="ab" style="width: 44mm;"></div>\n            ';
try{if(waybillBranch.isCod == "1"){
__p+='\n            <div class="ab" style="width:24mm;height:9mm;font-size: 12pt;right: 3mm;top: 0mm;position: absolute;text-align: right;">代收贷款</div>\n            ';
}}catch(ex){}
__p+='\n\n            <div class="ab" style="width:30mm;height:9mm;font-size: 12pt;right: 23mm;top: 0mm;position: absolute;text-align: center;">';
try{
__p+=''+
((__t=(waybillBranch.deliveryService))==null?'':__t)+
' ';
}catch(ex){}
__p+='';
try{if(waybillBranch.businessType == "电商特惠"){
__p+='E';
}else{
__p+=''+
((__t=(waybillBranch.businessType))==null?'':__t)+
'';
}}catch(ex){}
__p+='\n            </div>\n\n            ';
try{if(!waybillBranch.cpLogoUp){
__p+='\n            <div class="ab" style="width:50mm;height:9mm;font-size: 12pt; line-height: 1; left: 3mm;top: 2mm;position: absolute;text-align: left;">'+
((__t=(waybillBranch.partnerName))==null?'':__t)+
'</div>\n            ';
}}catch(ex){}
__p+='\n        </div>\n        <div class="ab" style="width:98mm;height:15mm;text-align: left;top: 9mm;left: 0;font-size: 32pt; overflow: hidden; white-space: nowrap; font-weight: bold;padding-left: 1mm;border-bottom: solid 1px #626365;">'+
((__t=(waybillBranch.branchCode))==null?'':__t)+
'</div>\n        <div class="ab" style="width:71mm;height:10mm;line-height:10mm;left:0;top: 24mm;padding-left:3mm;font-size: 16pt;border-right: solid 1px #626365;border-bottom: solid 1px #626365;">'+
((__t=(waybillBranch.branchName))==null?'':__t)+
'</div>\n        <div class="ab" style="top:24mm;right:0;width: 24mm;height: 10mm;border-bottom: solid 1px #626365; font-size: 8pt; text-align: center; line-height: 5mm;">'+
((__t=(waybillBranch.printTime))==null?'':__t)+
'</div>\n        <!-- 收件 -->\n        <div class="ab" style="top: 34mm; width: 4.2mm;padding-top: 4mm;  padding-left: 0.8mm;font-size:8pt;height: 14mm;border-right: solid 1px #626365;border-bottom: solid 1px #626365;">\n            收件\n        </div>\n        <div class="ab" style="top: 34mm;left:5mm;font-size:8pt;width: 67mm;height: 17mm;font-weight:bold;letter-spacing: 1pt;border-right: solid 1px #626365;border-bottom: solid 1px #626365;padding: 1mm 0 0 2mm;line-height: 4mm;">\n            '+
((__t=(waybillBranch.buyerName))==null?'':__t)+
' '+
((__t=(waybillBranch.buyerMobile))==null?'':__t)+
'<br>\n            '+
((__t=(waybillBranch.buyerAddress))==null?'':__t)+
'\n        </div>\n        <div class="ab" style="width: 24mm;height: 5mm;line-height: 5mm; top: 34mm;text-align: center;font-size: 6pt;right: 0;border-bottom: solid 1px #626365;">\n            服务\n        </div>\n        <div class="ab" style="width: 23mm;height: 24mm;right: 0;top: 39mm;border-bottom: solid 1px #626365;letter-spacing: 1pt;font-size: 5pt;padding: 1mm 0mm 0mm 2mm;line-height: 2.7mm;">\n            ';
if(waybillBranch.cpCode == 'EMS'){
__p+='\n            ';
try{
__p+='';
if(waybillBranch.statePrice){
__p+='<p style="word-break: break-all;">保价金额:'+
((__t=(waybillBranch.statePrice))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.benefits != '0 元'){
__p+='<p style="word-break: break-all;">保价费用:'+
((__t=(waybillBranch.benefits))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.amount != '0.00(元)' && waybillBranch.isCod == 1){
__p+='<p style="word-break: break-all;">代收金额:'+
((__t=(waybillBranch.amount))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.packageWeight != '0.00(KG)'){
__p+='<p style="word-break: break-all;">计费重量:'+
((__t=(waybillBranch.packageWeight))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
} else if(waybillBranch.cpCode == 'YTO'){
__p+='\n            ';
try{
__p+='';
if(waybillBranch.statePrice){
__p+='<p style="word-break: break-all;">保价金额:'+
((__t=(waybillBranch.statePrice))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.benefits != '0 元'){
__p+='<p style="word-break: break-all;">保价费用:'+
((__t=(waybillBranch.benefits))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.amount != '0.00(元)' && waybillBranch.isCod == 1){
__p+='<p style="word-break: break-all;">代收金额:'+
((__t=(waybillBranch.amount))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
} else if(waybillBranch.cpCode == 'ZTO'){
__p+='\n            ';
try{
__p+='';
if(waybillBranch.statePrice){
__p+='<p style="word-break: break-all;">保价金额:'+
((__t=(waybillBranch.statePrice))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.benefits != '0 元'){
__p+='<p style="word-break: break-all;">保价费用:'+
((__t=(waybillBranch.benefits))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.amount != '0.00(元)' && waybillBranch.isCod == 1){
__p+='<p style="word-break: break-all;">代收金额:'+
((__t=(waybillBranch.amount))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
} else if(waybillBranch.cpCode == 'YUNDA'){
__p+='\n            ';
try{
__p+='';
if(waybillBranch.statePrice){
__p+='<p style="word-break: break-all;">保价金额:'+
((__t=(waybillBranch.statePrice))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.benefits != '0 元'){
__p+='<p style="word-break: break-all;">保价费用:'+
((__t=(waybillBranch.benefits))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.amount != '0.00(元)' && waybillBranch.isCod == 1){
__p+='<p style="word-break: break-all;">代收金额:'+
((__t=(waybillBranch.amount))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
} else if(waybillBranch.cpCode == 'SF'){
__p+='\n            ';
try{
__p+=' ';
if(waybillBranch.payments){
__p+='<p style="word-break: break-all;">付款方式:'+
((__t=(waybillBranch.payments))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.maccount){
__p+='<p style="word-break: break-all;">月结账号:'+
((__t=(waybillBranch.maccount))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.thirdParty){
__p+='<p style="word-break: break-all;">第三方地区:'+
((__t=(waybillBranch.thirdParty))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.statePrice){
__p+='<p style="word-break: break-all;">保价金额:'+
((__t=(waybillBranch.statePrice))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.benefits != '0 元'){
__p+='<p style="word-break: break-all;">保价费用:'+
((__t=(waybillBranch.benefits))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n\n            ';
} else if(waybillBranch.cpCode == 'POSTB'){
__p+='\n            ';
} else{
__p+='\n            ';
try{
__p+='';
if(waybillBranch.orderFlag){
__p+='<p style="word-break: break-all;">配送环境:'+
((__t=(waybillBranch.orderFlag))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.thirdParty){
__p+='<p style="word-break: break-all;">第三方地区:'+
((__t=(waybillBranch.thirdParty))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.businessType){
__p+='<p style="word-break: break-all;">业务类型:'+
((__t=(waybillBranch.businessType))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.maccount){
__p+='<p style="word-break: break-all;">月结账号:'+
((__t=(waybillBranch.maccount))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+=' ';
if(waybillBranch.payments){
__p+='<p style="word-break: break-all;">付款方式:'+
((__t=(waybillBranch.payments))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.amount != '0.00(元)' && waybillBranch.isCod == 1){
__p+='<p style="word-break: break-all;">代收金额:'+
((__t=(waybillBranch.amount))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.statePrice){
__p+='<p style="word-break: break-all;">保价金额:'+
((__t=(waybillBranch.statePrice))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
try{
__p+='';
if(waybillBranch.benefits != '0 元'){
__p+='<p style="word-break: break-all;">保价费用:'+
((__t=(waybillBranch.benefits))==null?'':__t)+
'</p>';
}
__p+='';
}catch(ex){}
__p+='\n            ';
}
__p+='\n\n        </div>\n        <!-- 寄件 -->\n        <div class="ab" style="top: 52mm;width: 4.2mm;height: 10mm;padding-top: 2mm; padding-left: 0.8mm;font-size:8pt;border-right: solid 1px #626365;border-bottom: solid 1px #626365;">\n            寄件\n        </div>\n        <div class="ab" style="width: 66mm;height: 11mm;padding: 1mm 1.5mm 0mm 1.5mm;line-height: 3mm;letter-spacing: 1pt;font-size: 6pt;top: 52mm;left: 5mm;border-right: solid 1px #626365;border-bottom: solid 1px #626365;">\n            '+
((__t=(waybillBranch.consignName))==null?'':__t)+
' '+
((__t=(waybillBranch.consignMobile))==null?'':__t)+
'<br>\n            '+
((__t=(waybillBranch.consignAddress))==null?'':__t)+
'\n        </div>\n        <div class="ab" style="width: 98mm;height: 25mm;top: 66mm;border-bottom: solid 1px #000;text-align: center">\n            ';
try{if(waybillBranch.wayBillUrl){
__p+='\n            <img src="'+
((__t=(waybillBranch.wayBillUrl))==null?'':__t)+
'"/>\n            ';
}}catch(ex){}
__p+='\n        </div>\n        <div class="ab" style="width: 42mm;height: 17mm;bottom:0;left: 0;border-right: solid 1px #626365;font-size: 6pt;padding: 2mm 0 0 2mm; line-height: 1.5">\n            快件送达收件人地址，经收件人或收件人（寄件人）允许的代收人签字，视为送达。您的签字代表您已签收此包裹，并已确认商品信息无误、包装完好、没有划痕、破损等表面质量问题。\n        </div>\n        <div class="ab" style="width: 33mm;height: 17mm;bottom: 0;left: 44mm;font-size: 8pt;border-right: solid 1px #626365;padding: 2mm 0 0 2mm;">\n            <p style="margin-top: 2mm;">签收人：</p>\n            <p style="margin-top: 2mm;">时间：</p>\n        </div>\n        <div class="ab" style="width: 19mm;height: 19mm;bottom: 0;right: 0;">\n        </div>\n\n    </div>\n    <div style="width: 98mm; height: 68mm; border: solid 1pt #000; overflow: hidden; margin: 0 auto; font-family: \'microsoft yahei\';position: relative">\n        <div class="ab" style="width: 98mm;height: 14mm;top: 0;left: 0;border-bottom: solid 1px #626365;">\n            <div class="ab" style="width: 30mm;height: 14mm;left: 0;top: 0;">\n                ';
try{if(waybillBranch.cpLogoDown){
__p+='\n                <img src="http:'+
((__t=(waybillBranch.cpLogoDown))==null?'':__t)+
'" style="height: 14mm; margin: 0;"/>\n                ';
}}catch(ex){}
__p+='\n            </div>\n            ';
try{if(!waybillBranch.cpLogoDown){
__p+='\n            <div class="ab" style="width:50mm;height:14mm;font-size: 16pt; line-height: 1; left: 3mm;top: 4mm;position: absolute;text-align: left;">'+
((__t=(waybillBranch.partnerName))==null?'':__t)+
'</div>\n            ';
}}catch(ex){}
__p+='\n            <div class="ab" style="width: 68mm;height: 14mm;right: 0;top: 2mm; text-align: right;">\n                ';
try{if(waybillBranch.wayBillUrlSmall){
__p+='\n                <img src="'+
((__t=(waybillBranch.wayBillUrlSmall))==null?'':__t)+
'"/>\n                ';
}}catch(ex){}
__p+='\n            </div>\n        </div>\n        <div class="ab" style="width: 4mm;height: 10mm;left: 0;top: 14mm;font-size: 8pt;border-right: solid 1px #626365;border-bottom: solid 1px #626365;padding-left: 1mm;padding-top: 2mm;">\n            收件\n        </div>\n        <div class="ab" style="width: 70mm;height: 10mm;top: 14mm;left: 5mm; font-size: 6pt;letter-spacing: 1pt;border-right: solid 1px #626365;border-bottom: solid 1px #626365;padding: 1mm 2mm;">\n            '+
((__t=(waybillBranch.buyerName))==null?'':__t)+
' '+
((__t=(waybillBranch.buyerMobile))==null?'':__t)+
'<br/>\n            '+
((__t=(waybillBranch.buyerAddress))==null?'':__t)+
'\n        </div>\n        <div class="ab" style="width: 4mm;height: 10mm;left: 0;top: 26mm;font-size: 8pt;border-right: solid 1px #626365;border-bottom: solid 1px #626365;padding-left: 1mm;padding-top: 2mm;">\n            寄件\n        </div>\n        <div class="ab" style="width: 70mm;height: 10mm;top: 26mm;left: 5mm;font-size: 6pt;letter-spacing: 1pt;border-right: solid 1px #626365;border-bottom: solid 1px #626365;padding: 1mm 2mm;">\n            '+
((__t=(waybillBranch.consignName))==null?'':__t)+
' '+
((__t=(waybillBranch.consignMobile))==null?'':__t)+
'<br/>\n            '+
((__t=(waybillBranch.consignAddress))==null?'':__t)+
'\n        </div>\n        <div class="ab" style="width: 19mm;height: 24mm;top:14mm;right:0;font-size: 8pt;border-bottom: solid 1px #626365;">\n            <img src="https://img.alicdn.com/tps/TB1cuXnIVXXXXbsXFXXXXXXXXXX.png" style="width: 16mm;height: 16mm;  margin: 2mm 1.5mm 0 1.5mm;"/>\n            <p style="text-align: center;">扫码有惊喜</p>\n        </div>\n        <div class="ab" style="bottom:25mm;left: 2mm;font-size: 8pt;font-weight: bold;letter-spacing: 1pt;">\n            商家自定义区\n        </div>\n        <div class="ab" style="bottom:2mm ;right: 3mm;font-size: 8pt;font-weight: bold; letter-spacing: 1pt;">\n            已验视\n        </div>\n\n        ';
if(waybillBranch.replenish){
__p+='\n        <div class="ab" style="width:24mm;height:9mm;font-size: 12pt;right: 2mm;top: 40mm;position: absolute;text-align: right;">C</div>\n        ';
}
__p+='\n        <div class="ab" style="bottom:5mm ;right: 0;font-size: 40pt;font-weight: bold; width: 98mm; text-align: center;">\n            '+
((__t=(waybillBranch.cartCode))==null?'':__t)+
'\n        </div>\n    </div>\n</div>';
}
return __p;
}};
});