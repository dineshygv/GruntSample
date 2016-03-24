this["JST"] = this["JST"] || {};

this["JST"]["sayBye"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'hello: ' +
((__t = ( name )) == null ? '' : __t);

}
return __p
};

this["JST"]["sayHello"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'hello : ' +
((__t = ( name )) == null ? '' : __t);

}
return __p
};