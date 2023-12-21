let CountryList = require("./data.json");

function AllData(param = null){
    let arr = [];
    if(param === "undefined" || param === undefined || param === "" || param === null){
        CountryList.map((data)=>{
            arr.push(data)
        })
    }else{
        CountryList.map((dat) => {
            if (
                dat.name.toLowerCase().search(param.toLowerCase()) !== -1 ||
                dat.dial_code.toLowerCase().search(param.toLowerCase()) !== -1 ||
                dat.code.toLowerCase().search(param.toLowerCase()) !== -1
            ) {
                arr.push(dat);
            }
        })
    }
    return arr;
    
}

module.exports = AllData 