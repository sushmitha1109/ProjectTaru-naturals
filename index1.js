 $(document).ready(function () {
   var a = 0 ;
    $('#adds').click(function add() {
       a++;
    $("#noofproducts").val(a);
    });

    $('#subs').click(function add() {
      a--;
   $("#noofproducts").val(a);

});
 });
  //     $.ajax({  
  //      url: "/data",
  //      method: "POST",
  //      data: {
  //        item: final
  //         },
  // success: function() {
  //   $(".result").val(final);
  // }
  

    //   localStorage.setItem(textValue,final);
    //   document.getElementById("blackriceqty").innerHTML=localStorage.getItem(textValue);
    