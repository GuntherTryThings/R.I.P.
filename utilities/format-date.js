module.exports = (dateObject) => {
    const date = `${dateObject.getFullYear()}-${`${dateObject.getMonth() + 1}`.padStart(2, '0')}-${`${dateObject.getDate() + 1}`.padStart(2, '0')}`;
    const time = `${`${dateObject.getHours()}`.padStart(2, '0')}:${`${dateObject.getMinutes()}`.padStart(2, '0')}:${`${dateObject.getSeconds()}`.padStart(2, '0')}`;
    return `${date} ${time}`;
};
