this["JST"] = this["JST"] || {};

this["JST"]["templates/sayBye.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'hello: ' +
((__t = ( name )) == null ? '' : __t);

}
return __p
};

this["JST"]["templates/sayHello.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'hello : ' +
((__t = ( name )) == null ? '' : __t);

}
return __p
};