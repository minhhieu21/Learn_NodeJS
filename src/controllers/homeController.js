const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World with Node JS')
}
const getTest = (req, res) => {
    res.render('index.ejs')
}

module.exports = {
    getHomepage,
    getTest
}