const randomStringGenerator = (stringArray) => {
    const randomizeArray = Math.floor(Math.random() * (stringArray.length));

    return stringArray[randomizeArray];
}
module.exports = randomStringGenerator;