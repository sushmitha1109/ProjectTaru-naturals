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

    //   localStorage.setItem(textValue,final);
    //   document.getElementById("blackriceqty").innerHTML=localStorage.getItem(textValue);
    