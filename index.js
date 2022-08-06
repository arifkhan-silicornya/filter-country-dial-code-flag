const CountryList = require("country-list-with-dial-code-and-flag");

// console.log(CountryList);

function AllData(param = null){
    console.log(param);
    let arr = [];
    if(param === "undefined" || param === "" || param === null){
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
console.log(AllData());

module.exports = AllData 