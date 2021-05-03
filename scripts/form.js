// A $( document ).ready() block.
$( document ).ready(function() {
  
  $("#custom").hide();  
  $(document).on("change", "#t-shirt", chkTshirt);
  
  function chkTshirt() {
    
    var tshirt = $("#t-shirt").val();
    //alert(tshirt);
    
      if(tshirt == "CUSTOM") {

        $("#custom").removeAttr("disabled");
        $("#custom").attr("required", true);
        $("#custom").show();

      } // End if tshirt
    
      else {
        
        $("#custom").hide();
        $("#custom").attr("disabled", true);
        $("#custom").val("");
        $("#custom").removeAttr("required");
        
      } // End of else-if tshirt
    
  } // End chkTshirt
  
});



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()



