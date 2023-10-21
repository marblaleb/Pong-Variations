var paddle1=document.querySelector(".paddle1");
var paddle2=document.querySelector(".paddle2");
var ball=document.querySelector(".ball");

var cp1=paddle1.getBoundingClientRect();
var cp2=paddle2.getBoundingClientRect();
var cb=ball.getBoundingClientRect();

var position=paddle1.style.top;


var position1=300;
var position2=300;
var pball=800;
var aball=300;

var change=false;
var change2=false;

var pag=window.innerHeight;
var pagw=window.innerWidth;
console.log(pag)


function mover1(evento){

    var cp=paddle1.getBoundingClientRect();
    var cp2=paddle2.getBoundingClientRect();
    
    if(evento.key=="w"){

        

        

        if(cp.top>5){        

        position1-=5;
        
        paddle1.style.top=position1+"px";

        }

    }else if(evento.key=="s"){

        if(cp.bottom<701){
        position1+=5;

        paddle1.style.top=position1+"px";
        }
    }
}

console.log(pagw);
console.log(pag);

function moverbola(){
    var cb=ball.getBoundingClientRect();
    var cp=paddle1.getBoundingClientRect();
    var cpd=paddle2.getBoundingClientRect();
  


    if(!change){

    if(pball>0){
 
    pball-=1;
    

     


        
    ball.style.left=pball+"px";
    

    }else{

        alert("paddle1 ha perdido")
        
        
    }

}

    if(cb.left==cp.right && cb.top>cp.top && cb.top<cp.bottom){

        change=true;
        
    }

    if(change){

        if(pball<1500){

        pball+=1;
        
        ball.style.left=pball+"px";
        }else{

         alert("pierde paddle 2");
        }

        if(cb.right==cpd.left && cb.top>cpd.top && cb.top<cpd.bottom){
            change=false;
        }
    }


    if(!change2){

        aball-=1;

        ball.style.top=aball+"px";

        if(aball<0){
            change2=true;
    
        }


    }

    if (change2){

        aball+=1;
        ball.style.top=aball+"px";

        if(aball>685){
            change2=false;
        }
    }

    

        

        


    }


    



    
    





function mover2(evento){
    console.log(evento.key);

    
    var cp2=paddle2.getBoundingClientRect();
    
    if(evento.key=="ArrowUp"){

        

        

        if(cp2.top>5){        

        position2-=5;
        
        paddle2.style.top=position2+"px";

        }

    }else if(evento.key=="ArrowDown"){

        if(cp2.bottom<701){
        position2+=5;

        paddle2.style.top=position2+"px";
        }
    }
}




document.addEventListener("keypress", mover1);
document.addEventListener("keydown", mover2);

setInterval(moverbola, 1);
