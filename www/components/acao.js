$(document).on("click", "#listar", function(){
  alert("teste");
  $(location).attr("href", "listar.html");
});

$(document).on("click","#cadastrar", function(){
  var parametros ={
    "sabor":$("$sabor").val(""),
    "valor":$("$valor").val("")
  };
  $.ajax({
    type:"post", //como vou enviar os dados ao servidor
    url:"https://dsetec.000webhostapp.com/cadastra.php",//para onde vou enviar
    data:parametros,//o que eu vou enviar
    //caso esteja certo executa esse codigo
    success: function(data){
      navigator.notification.alert(data);
    },
    //caso esteja errado executa esse codigo
    error: function(data){
      navigator.notification.alert("Erro ao cadastrar!");
    }
  });
}); 
