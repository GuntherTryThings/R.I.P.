const { LOGINCHANNEL } = require('../config/ids.json');

module.exports = (member) => {
    const channel = member.guild.channels.cache.get(LOGINCHANNEL);
    if (!channel) return;
    channel.send(
`${member} megjelent az órán.
Kérlek válaszd ki, hogy melyik karra jársz:
    **$mik ha MIK**
        vagy
    **$mk ha MK**
        vagy
    **$gtk ha GTK**
        vagy
    **$mftk ha MFTK**

(a parancsok csak ezen a csatornán használhatóak)`
    );
};