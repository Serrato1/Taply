let noticeFilter = (start,end, date)=>{
    let startNew = start.split('/');
    let endNew = end.split('/');
    let dateNew = date.split('/');
    let fDate = new Date(startNew[2],parseInt(startNew[1]), startNew[0]);
    let tDate = new Date(endNew[2],parseInt(endNew[1]) ,  endNew[0]);
    let checkDate = new Date(dateNew[2],parseInt(dateNew[1]), dateNew[0]); 
    return checkDate >= fDate && checkDate <= tDate
}
let start = '1/1/2018';
let end = '5/1/2018';
let date = '2/1/2018'
console.log(noticeFilter(start,end,date) );