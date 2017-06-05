var numberContact = 0;

var cargarPagina = function(){
    
    $(".button-collapse").sideNav();
    $('.modal').modal();
    
    $("#sendContacts").click(publicarContacto);
  
     
};

function publicarContacto(e){
    e.preventDefault()
    
    //llamamos el  contenedor  de  donde   se  va  imprimir el  nuevo contacto
    var $contact = $("#posts"); 
    
    //Tomamos y llamamos el  valor  del  inputName
    var $name = $("#icon_prefix");
    var newName = $name.val();
    $("#icon_prefix").val("");
	
    
    //Tomamos y  llamamos el  valor  del  inputPhone
    var $phone = $("#icon_telephone");
    var newPhone = $phone.val();
    $("#icon_telephone").val("");
    
    
    //creamos  los elementos  que  necesitamos
    var $postContact =$("<div/>", {"class":"card-panel teal"});
    var $postPhone = $("<p/>",{"class":"white-text"});
    var $postName = $("<h5/>",{"class":"white-text"});
    var $deleteContact =$("<button type='button'/>")
    var $iconoDelete =$("<i/>",{"class":"material-icons"})
    
    //asignamos  el  valor  al  nuevo Post
    $postName.text(newName);
    $postPhone.text(newPhone);
    
    //Le damos  estilo  al  boton que  va eliminar
    $deleteContact.addClass("btn waves-effect waves-light");
    $iconoDelete.text("delete");
    
    
     //creamo  los  nuevos  elemento  en el  contenedor 
    $postContact.append($postName);
    $postContact.append($postPhone);
    
    $deleteContact.append($iconoDelete);
    $postContact.append($deleteContact);
    //Eliminamos  los  contactos
    $deleteContact.click(deleteConta);

    //estamos agregando  los  nuevos  elemento 
    $contact.prepend($postContact);
    

    
    
   //Contador
	numberContact++;
	$("#number-contacts").text(numberContact);
   
    };

//funcion para  eliminar, no la podemos poner  afuera por aqui se  crea  el  elemento para  eliminar.
    var deleteConta =function(){
        $(this).parent().remove(); 
        
        numberContact--;
		$("#number-contacts").text(numberContact);    
    
};

$(document).ready(cargarPagina);
    