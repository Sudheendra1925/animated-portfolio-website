function leftturn(n){
   if(n==1){
    document.getElementById('fc').style.zIndex='999';
     document.getElementById('p1').style.zIndex='999';
     document.getElementById('p2').style.zIndex='1';
     document.getElementById('p3').style.zIndex='1';
     document.getElementById('bc').style.zIndex='1';
     document.getElementById('p4').style.zIndex='1';
   }
   if(n==2){
    document.getElementById('p3').style.zIndex='999';
    document.getElementById('p2').style.zIndex='999';
    document.getElementById('p1').style.zIndex='0';
    document.getElementById('p4').style.zIndex='0';
    document.getElementById('fc').style.zIndex='0';
    document.getElementById('bc').style.zIndex='0';
   }
   
    
}
function rightturn(n){
    if(n==1){
     document.getElementById('p2').style.zIndex='999';
     document.getElementById('p3').style.zIndex='999';
     document.getElementById('p1').style.zIndex='1';
     document.getElementById('p4').style.zIndex='1';
     document.getElementById('fc').style.zIndex='1';
     document.getElementById('bc').style.zIndex='1';
    }
    if(n==2){
     document.getElementById('p4').style.zIndex='999';
     document.getElementById('bc').style.zIndex='999';
     document.getElementById('p1').style.zIndex='1';
     document.getElementById('p2').style.zIndex='1';
     document.getElementById('fc').style.zIndex='1';
     document.getElementById('p3').style.zIndex='1';

    }
    
     
 }
