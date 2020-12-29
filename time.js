
class Time{
    constructor(time){
        this.time = +time;
    }

add(obj){
    let time1 = this.time;
    console.log(time1);
    let time2 = obj.time;
    console.log(time2);

    let hr1 = Math.trunc(time1);
    let hr2 = Math.trunc(time2);
    let totalHr = hr1 + hr2;

    console.log(totalHr);

    let min1 = (time1 % 1) * 100;
    let min2 = (time2 % 1) * 100;
    let totalMin = (min1 + min2);
    let minHr = 0;
    let remMin = 0; 
    if (totalMin >= 60){
        minHr = Math.trunc(totalMin / 60);
        console.log(minHr);
        remMin = (totalMin % 60) / 100;
        console.log(remMin);
    }
    else {
        remMin = (totalMin % 60) / 100;
        console.log(remMin);
    }

    let total = totalHr + minHr + remMin ;
    console.log(total);

    if(total >= 24 ){
        console.log(`${Math.trunc(total/24)} days and ${total%24} hrs`);
    }
    else
        console.log(`${total} hrs`);
}
}

let t1 = new Time('13.55')
let t2 = new Time('00.05')
t1.add(t2);
