$(document).ready(function(){
    $('#email').click(function(){
        if($(this).val()=="name@example.com"){
            $(this).val('');
        }//fim do if
    }//fim da funcao anonima
    );//fim do click no objeto id=email

    $('#senha').click(function(){
        if($(this).val()=="senha"){
            $(this).val('');
        }//fim do if
    }//fim da funcao anonima
    );//fim do click no objeto id=senha

$('#botaoLogar').click(function(){
    if($('#email').val()=='' ||$('#email').val()=="name@example.com"){
        $('#mensagem').html("Email ou senha inválida");
        $('#mensagem').fadeIn(300).delay(2000).fadeOut(400);
    }else if($('#senha').val()==''||$('#senha').val()=="senha"){
        $('#mensagem').html("Email ou senha inválida");
        $('#mensagem').fadeIn(300).delay(2000).fadeOut(400);
    }else{
        em=$('#email').val();
        se=$('#senha').val();
        //$('#mensagem').html("Usuário ok");
        //$('#mensagem').fadeIn(300).delay(2000).fadeOut(400);
        $.ajax({
            url: '../usuario/pesquisaUsuario.php',
            type: 'POST',
            data: {email:em,senha:se},

            success: function(response){
                response=response.trim();

                if(response !== "erro"){
                    $('#mensagem').html("Você será redirecionado");
                    $('#mensagem').fadeIn(300).delay(2000).fadeOut(400);

                    var dados=response.split("|");
                    var id=dados[0];
                    var nome=dados[1];
                    var tipo=dados[2];

                    //window.location.href="principal.php?id="+id+"&nome="+nome+"&tipo="+tipo;
                    window.location.href="../telas/principal.html";
                }else{
                    console.log(response)
                    $('#mensagem').html("Usuário não encontrado");
                    $('#mensagem').fadeIn(300).delay(2000).fadeOut(400);
                }
            },
                error: function(xhr,status,error){
                    console.log("Erro na requisição:",error);
                }
        });
    }
})
})