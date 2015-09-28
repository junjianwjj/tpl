define("test", function(){
return {render:function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<head>\n    <title>'+
((__t=( obj.title ))==null?'':__t)+
'</title>\n</head>';
}
return __p;
}};
});