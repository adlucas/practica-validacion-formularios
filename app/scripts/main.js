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
                       required:true,
                       minlength:4,
                       email:true,
                       remote:"php/validar_email_db.php"
                        //email:true
                    }, 
                    email2: {
                        required: true,
                        minlength:4,
                        equalTo: email
                    },cp:{
                    	required:true,
                    	maxlength:5,
                    	minlength:5,
                    	digits:true
                    },
                    iban:{
                    	/*ES91 2085 0166 69 0330150871*/
                    	iban:true,
                    	required:true
                    	
                    },
                    telefono: {
                        required: true,
                        maxlength:9,
                        minlength:9,
                        digits:true

                    },
                    lastName1: {
                       required:true
                    },
                    pass: {
                       required:true,

                       controlPass:true
						
	                     
                    }, 
                    pass2: {
                        required: true,
                        equalTo: pass
                    },
                    cif: {
                        required:true,
                        cifES:true
                    },
                    nif: {
                        required:true,
                        nifES:true,
                        remote:"php/validar_nif_db.php"
                    }
                    
                    
                }
                });
//si el cp tiene menos de 5 cifras relleno con ceros a la izq
//cp entre 01000 y 52999
$("#cp").focusout(function() {
                var caracteres = $("#cp").val();
                var num=5-caracteres.length;
                var cero="0";

                if(num!=0){
                for(i=1;i<num;i++){
                	cero+="0";
                }

                $("#cp").val(cero + caracteres);
               }else{
               	$("#cp").val(caracteres);
               }

              
                

            });
//despues de salir del foco de apellidos relleno el campo de facturacionNombre con el nmbre y apellidos
$("#apellidos").focusout(function() {
				var nombre= $("#nombre").val();
             	var apellidos= $("#apellidos").val();

              
                $("#facturacionNombre").val(nombre+" " + apellidos);

            });

//combobox empresa/particular al cambiar a empresa, se debe cambiar el label de facturacion nombre/empresa
$("#demandante").focusout(function() {
				
				
				if($("#demandante").val()==2){

 				/********************************************************/
				
               	$("#nif2").html("CIF:");
                $("#lblDemandante").html("Empresa:");
                $("#nif").attr({
				   	"id": "cif",
				  	"name": "cif"
				});
				                
                
               // $("#facturacionNombre").val("aaaaa");


                }
                else{
 					$("#nif2").html("NIF:");
				 	$("#lblDemandante").html("Nombre:");
                	$("#cif").attr({
					   	"id": "nif",
					  	"name": "nif"
					});
					                	


                }

            });

//el campo usuario se rellenara con el campo email
$("#email2").focusout(function() {
                
                $("#usuario").val($("#email2").val());
                $("#usuario").disabled="true";

            });
//prueba pass
$("#pass").focusin(function() {

                $("#pass").complexify({}, function(valid, complexity){
    //alert("Password complexity: " + complexity);

    			$("#PassValue").val(complexity);

    
  });


});
//complejidad de la contraseña, minimo 30% para validar
jQuery.validator.addMethod("controlPass", function(value,element) {

	var prueba=$("#PassValue").val();

  if(prueba<30){
  	alert("ERROR");
  	return false;
  }else{
  	  	alert("ok");

  return true;
	}
}, "Complejidad demasiado baja");