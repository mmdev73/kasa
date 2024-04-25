export const cLog = (text:string | any, type:number) => {
    let colorNormal = "color: black"
    let colorSuccess = "color: green; font-weight: bold;"
    let colorWarning = "color: orange; font-weight: bold;"
    let colorError = "color: red; font-weight: bold;"
    let colorInfo = "color: blue; font-weight: bold;"
    switch (type){
        case 0:
            return console.log(text)
        case 1:
            return console.log("%cWARNING - (W) : " + "%c" + text, colorWarning, colorNormal)
        case 2:
            return console.log("%cERROR - (E) : " + "%c" + text, colorError, colorNormal)
        case 3:
            return console.log("%cSUCCESS - (S) : " + "%c" + text, colorSuccess, colorNormal)
        case 4:
            return console.log("%cINFO - (I) : " + "%c" + text, colorInfo, colorNormal)
        default:
            return console.log(text)
    }
}