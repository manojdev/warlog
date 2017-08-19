const clashApi = require('clash-of-clans-api');
let client = clashApi({
  token: '' // Optional, can also use COC_API_TOKEN env variable
});
var twh ="#P2PVJ2CG";

client
  .clanCurrentWarByTag(twh)
  .then(function(response){
      var members = response.clan.members;
      console.log(members);
  })
  .catch(err => console.log(err));