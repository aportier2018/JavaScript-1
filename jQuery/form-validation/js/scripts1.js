$(document).ready(function() {


function validateEmail($email){
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test($email)){
		return false;
	}
	else{
		return true;
	}
}



$('#otherMember').on('click', function()
  {
    if ($("#otherMember").is(":checked"))
    {

      $('.subscription2').show();
    }
    else {
      
      $('.subscription2').hide();
    }

  }
);



})
