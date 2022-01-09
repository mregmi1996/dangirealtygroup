import cheerio from "cheerio";

export const searchForLocations=(htmlComponent)=>{
    const $ = cheerio.load(htmlComponent)
    const options = $('[name=twn]')
    const optionsList = (options.text()).split(/\r?\n/)
    const returnObject=[];
    for(let optionItem=0;optionItem<optionsList.length;optionItem++){
        if(optionsList[optionItem].indexOf("-")==-1 && optionsList[optionItem]!==""){
            returnObject.push({"label":optionsList[optionItem].trim()})
        }
    }
    return returnObject;
}

export const buildQueryString=(params)=>{
    return "https://idx.mlspin.com/rslts.asp?aid=BB815751&id=32323&type=sf&type=mf&type=cc&type=ld&type=ci&type=bu&type=rn&type=mh&rdSoldSearch=N&optTime=3&min=0&max=99999999&twn=ACTN&twn=01A&twn=01B&twn=01C&twn=01D&twn=ADAM&twn=AGAW&twn=ALFD&twn=AMHR&twn=ANDO&twn=ARLG&twn=01X&twn=01Y"
}

export const listings=(htmlComponent)=>{
    const $ = cheerio.load(htmlComponent);
    const results = $('.ResultsRow')
    const items = (results.text()).split("MLS #: ")
    let returnArray = [];
    for(let index=1;index<items.length;index++){
        let stringToParse = items[index]
        const MLS=stringToParse.substring(0,8)
        let stringToParse2=stringToParse.substring(10,)
        const status = (stringToParse2.substring(9, stringToParse2.indexOf("List"))).trim()
        let stringToParse3=stringToParse2.substring(stringToParse2.indexOf("List Price: ")+12,)
        const price=stringToParse3.substring(0, stringToParse3.indexOf('\xa0'))
        let stringToParse4=stringToParse3.substring(stringToParse3.indexOf('\xa0'),)
        let address = stringToParse4.substring(1, stringToParse4.indexOf(',')+4)
        let stringToParse5 = stringToParse4.substring(stringToParse4.indexOf(',')+4,)
        let typeOfProperty = stringToParse5.substring(1, stringToParse5.indexOf('Remarks:'))
        console.log(typeOfProperty.substring(0,typeOfProperty.length/2))
        let remarks;
        if(index==items.length-1){
            remarks =  stringToParse5.substring(stringToParse5.indexOf("Remarks: ")+ 9,stringToParse5.indexOf('Records 1 through'))
        }
        else{
            remarks =  stringToParse5.substring(stringToParse5.indexOf("Remarks: ")+ 9,)
        }
        console.log({"MLS":MLS, "Status":status, "Price":price, "Address":address, "PropertyType":typeOfProperty.substring(0,typeOfProperty.length/2), "Remarks":remarks})
        returnArray.push({"MLS":MLS, "Status":status, "Price":price, "Address":address, "PropertyType":typeOfProperty.substring(0,typeOfProperty.length/2), "Remarks":remarks})
    }
    return returnArray;
}