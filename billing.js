// $(document).ready(function() {
//   var checkedValue;
//   $("allproducts").click(function(){
//     checkedValue= $("input[type='checkbox']").val();
//       });
//        $("billing").html(checkedValue);
//   });
$(document).ready(function () {
  $("input[type='checkbox']").click(function(){
     var final = $("input[name='item1']:checked").val();
     localStorage.setItem(textValue,final);
    });
});