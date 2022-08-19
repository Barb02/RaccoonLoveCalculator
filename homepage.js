function calculaAmor(){
    var nome1 = document.getElementById("nome1").value;
    var nome2 = document.getElementById("nome2").value;
    if(nome1.length > 0 && nome2.length > 0){
        var num = Math.round(Math.random()*100);
        document.getElementById("modalTitle").innerHTML = num + "%";

        if(num <= 20){
            document.getElementById("modalBody").innerHTML = "É...não foi dessa vez. Sinto muito, mas o amor não é para vocês.";
            $("#gif").attr("src","../CharlesLoveCalculator_code/guaxinim_algodao_doce.gif");
        }
        else if(num > 20 && num <= 40){
            document.getElementById("modalBody").innerHTML = "O que caberia melhor aqui é uma amizade. Mais que amigos, friends.";
            $("#gif").attr("src","../CharlesLoveCalculator_code/hoje_nao.gif");
        }
        else if(num > 40 && num <= 60){
            document.getElementById("modalBody").innerHTML = "Tem potencial...mas será uma longa jornada. Boa sorte.";
            $("#gif").attr("src","../CharlesLoveCalculator_code/guaxinim_com_cuidado.gif");
        }
        else if(num > 60 && num <= 80){
            document.getElementById("modalBody").innerHTML = "Formam um belo casal, sem dúvida.";
            $("#gif").attr("src","../CharlesLoveCalculator_code/bate_aqui.gif");
        }
        else{
            document.getElementById("modalBody").innerHTML = "Parabéns, você encontrou sua alma gêmea!!";
            $("#gif").attr("src","../CharlesLoveCalculator_code/amor.gif");
        }
        $('#resultsModal').modal('show');
    }
    else{
        alert("Digite dois nomes!");
    }
}