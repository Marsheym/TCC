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

    $('#nome').click(function(){
        if($(this).val()=="nome completo"){
            $(this).val('');
        }//fim do if
    }//fim da funcao anonima
    );//fim do click no objeto id=email

    $('#botaoCadastrar').click(function(){
    if($('#email').val()=='' ||$('#email').val()=="name@example.com"){
        $('#mensagem').html("Email inválido");
        $('#mensagem').fadeIn(300).delay(2000).fadeOut(400);
    }else if($('#senha').val()==''||$('#senha').val()=="senha"){
        $('#mensagem').html("Senha inválida");
        $('#mensagem').fadeIn(300).delay(2000).fadeOut(400);
    }else if($('#nome').val()==''||$('#nome').val()=="nome completo"){
        $('#mensagem').html("Nome inválida");
        $('#mensagem').fadeIn(300).delay(2000).fadeOut(400);
    }else{
        em=$('#email').val();
        se=$('#senha').val();
        no=$('#nome').val();
        //$('#mensagem').html("Usuário ok");
        //$('#mensagem').fadeIn(300).delay(2000).fadeOut(400);
        $.ajax({
            url: 'cadastraUsuario.php',
            type: 'POST',
            data: {email:em,senha:se,nome:no},

            success: function(response){
                if(response !== "erro"){
                    console.log(response);
                    $('#mensagem').html("Você será redirecionado");
                    $('#mensagem').fadeIn(300).delay(2000).fadeOut(400);

                    //window.location.href="principal.php?id="+id+"&nome="+nome+"&tipo="+tipo;
                    window.location.href="login.php";
                }else{
                    $('#mensagem').html("Erro ao cadastrar");
                    $('#mensagem').fadeIn(300).delay(2000).fadeOut(400);
                }
            },
                error: function(xhr,status,error){
                    console.log("Erro na requisição:",error);
                }
        });
    }
})
});