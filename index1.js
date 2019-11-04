 $(document).ready(function () {
   $("input[type='radio']").click(function(){
     var final = $("input[name='item1']:checked").val();
      $.ajax({  
        url:"index.js",  
        method:"POST",  
        data:{gender:gender},  
        success:function(){  
             $(".result").val(final);  
        }  
   });  
    //   localStorage.setItem(textValue,final);
    //   document.getElementById("blackriceqty").innerHTML=localStorage.getItem(textValue);
     });
     });