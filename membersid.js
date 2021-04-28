const MembersId = require("./membersid.json")
ListeMembersID = MembersId["members"]
module.exports.MembersId = function(message) {
    a = 0
    while (a < ListeMembersID.length) {
        if(message.member.roles.cache.has(ListeMembersID[a])){
            return true;
        }
        a++
    }
    return false;
}