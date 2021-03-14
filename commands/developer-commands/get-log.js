module.exports = async (message) => {
    if(message.arguments.includes('--err'))
        message.channel.send({ files: ['./log/error.log'] });
    else
        message.channel.send({ files: ['./log/combined.log'] });
};