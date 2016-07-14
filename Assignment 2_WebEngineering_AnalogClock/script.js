function setAttr(id,val){
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
};
//if value is less than 10 then appends 0
function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};

function clock(){
    //calculate angle
    var d, h, m, s;
    d = new Date;
    
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    
    //move hands
    setAttr('hour-hand', h);
    setAttr('minute-hand', m);
    setAttr('second-hand', s);
    setAttr('second-tail', s+180);
    
    //display time
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
	//if hour is greater than 12 then makes it pm else am
    if(h >= 12){
        setText('suffix', 'PM');
    }else{
        setText('suffix', 'AM');
    }
    
    if(h != 12){
        h %= 12;
    }
    
    setText('second', s);
    setText('minute', m);
    setText('hour', h);
    
    //call every second
    setTimeout(clock, 1000);
    
};
window.onload=clock;