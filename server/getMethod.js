let data =         [
    {id: 1, username : "hi"},
    {id: 2, username : "hello"}
]

const getMethod = (req,res) =>{
    // let stringify = JSON.stringify(data)
    // res.end(stringify)
    res.download('./resume.txt','resume.txt')
}

module.exports = getMethod