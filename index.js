


    $(document).ready(function(){
        // $(".history-hd");
        // $(".history-bd");

        $(".history-hd").click(function(){
            n=$(".history-hd").index(this);
            console.log(n);
            for(j=0;j<3;j++){
            $(".history-bd").eq(j).fadeOut("slow").removeClass("show");
            }
            $(".history-bd").eq(n).fadeIn("slow").addClass("show");
        });
        
    });


//     var J_Enter=document.getElementsByClassName("history-hd");
//     var mod=document.getElementsByClassName("history-bd");
 
//      for(var i=0; i<J_Enter.length; i++){
//         J_Enter[i].index=i;
//         J_Enter[i].onclick=function(){
//      for(var j=0; j<mod.length; j++){
//          mod[j].style.display='none'; 
//          mod[j].classList.remove("show");
//     }    
//          mod[this.index].classList.add("show");
//          mod[this.index].style.display='block';

//     };
//   }




	









