function fnFlexItemWidth(){
    let setBox = $('.flex-box>div');
    let conWidth = $('.container').width();
    let setWidth = (conWidth - 12) / 2;

    setBox.css({
        width:setWidth,
    })
}

function moveBox(item){
    $(item).css({
        transform:'translateX(0)',
        opacity:'1',
    })

}
function loadEvent(leftBox,rightBox){    
    moveBox(leftBox);
    moveBox(rightBox);
}

function loadEventS(item1,item2,item3,item4,item5,item6,deTime){
    setTimeout(function(){ 
        console.log(item1,item2);       
        loadEvent(item1,item2);
    },deTime);
    
    setTimeout(function(){
        console.log(item3,item4);           
        loadEvent(item3,item4);
    },deTime+600);
    
    setTimeout(function(){ 
        console.log(item5,item6);          
        loadEvent(item5,item6);
    },deTime+1200);
}