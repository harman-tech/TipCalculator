function calculatebillwithtip(){
        var totalbill=Number(document.getElementById("totalbill").value);
        var tip_slider = document.getElementById("tip-range").value;
        var split_person= document.getElementById("split-person").value;
        document.getElementById("tip-percentage").innerHTML=tip_slider;
        //calculating tipamount
        var tipamount=totalbill*(tip_slider/100);
        var tipeach=tipamount/split_person;
        var newbilleach=(totalbill+tipamount)/split_person;
        var totalbillwithtip=totalbill+tipamount;
        console.log(tipamount);
        console.log(tipeach);
        console.log(newbilleach);
        console.log({totalbill,tip_slider,split_person});
        document.getElementById("tip-percentage").innerHTML=tip_slider+"%";
        document.getElementById("tip-amount").innerHTML="$"+tipamount.toFixed(2) ;
        document.getElementById("totalwithtip").innerHTML=totalbillwithtip.toFixed(2);
        document.getElementById("splitvalue").innerHTML=split_person+"person";
        document.getElementById("bill-each").innerHTML="$"+newbilleach.toFixed(2);
        document.getElementById("tip-each").innerHTML="$"+tipeach.toFixed(2);
}
let container=document.getElementById("container");
container.addEventListener("click",calculatebillwithtip);




