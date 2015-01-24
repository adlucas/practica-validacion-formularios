 $("#formulario").validate({
                onkeyup: false,
                onfocusout: false,
                onclick: false,
                rules: {
                     nombre: {
                        required: true
                    },
                     apellidos: {
                       required:true
                        
                    },
                    email: {
                       required:true
                        //remote:"php/validar_email_db.php",
                        //email:true
                    }, 
                    email2: {
                        required: true,
                        equalTo: email
                    },cp:{
                    	required:true,
                    	maxlength:5
                    },
                    iban:{
                    	iban:true,
                    	required:true
                    	
                    },
                    telefono: {
                        required: true,
                        maxlength:9,
                        minlength:9,
                        digits:!0

                    },
                    lastName1: {
                       required:true
                    }
                }
                });
//si el cp tiene menos de 5 cifras relleno con ceros
$("#cp").focusout(function() {
                var caracteres = $("#cp").val();
                var num=5-caracteres.length;
                var cero=0;
                switch(num){
                	case 1:
                	cero=0;
                	$("#cp").val(cero + caracteres);
                	break;
                	case 2:
                	cero=00;
                	$("#cp").val(cero + caracteres);
                	break;
                	case 3:
                	cero=000;
                	$("#cp").val(cero + caracteres);
                	break;

                }

               // if (caracteres.length <= 4){
               
                

            });
//despues de salir del foco de apellidos relleno el campo de facturacionNombre con el nmbre y apellidos
$("#apellidos").focusout(function() {
				var nombre= $("#nombre").val();
             	var apellidos= $("#apellidos").val();

              
                $("#facturacionNombre").val(nombre+" " + apellidos);

            });

//combobox empresa/particular al cambiar a empresa, se debe cambiar el label de facturacion nombre/empresa
$("#demandante").focusout(function() {
				
				var prueba="holaaaa";
				if($("#demandante").val()==2){

 				/********************************************************/
				
              
                $("#lblDemandante").innerHTML="aaaaa";
               


                }
                else{

				$("#lblDemandante").value="particular";

                }

            });