const getKeyByValue = (obj, value) =>
    Object.keys(obj).find(key => obj[key] === value);

const snapshotToArray = async (snapshot) => {
    var returnArr = [];

    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};


module.exports = {
    getKeyByValue,
    snapshotToArray
}


