module.exports = (message) => {
    const { LOGINCHANNEL } = require('../../config/ids.json');
    const giveRoleToUser = require('../../handlers/role-select-handler');
    if (message.channel.id != LOGINCHANNEL)
        return message.channel.send(`Ezt a parancsot csak az <#${LOGINCHANNEL}> csatornán használhatod.`);
    const roles = defineRoles();
    giveRoleToUser(message, roles);
    message.channel.send(`${message.author}, sikeresen csatlakoztál a MK-s csoporthoz.`);
};

function defineRoles() {
    const { MIK, MK, MFTK, GTK, NEBULOLITE } = require('../../config/ids.json');
    return {
        selected: [MK, NEBULOLITE],
        removeable: [MIK, GTK, MFTK],
    };
}