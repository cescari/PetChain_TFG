
export function setDataToJSON(data) {

    const FileSaver = require('file-saver');
    const fs = require('fs');
    
    var file = new File([data], "data.json", {type: "text/json;charset=utf-8"});
    FileSaver.saveAs(file); 

   
}