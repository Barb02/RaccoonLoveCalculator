
var lang = "en"

$('[lang]').hide(); // hide all lang attributes on start.
$('[lang="en"]').show(); 
$('#en-switch').on("click", function () {
    
    $('[lang]').hide();
    $('[lang="en"]').show();
    lang = "en";
});
$('#pt-switch').on("click", function () {
    $('[lang]').hide();
    $('[lang="pt"]').show();
    lang = "pt";
});

function calculateLove(){
    if(lang == "pt"){
        var name1 = document.getElementById("name1").value;
        var name2 = document.getElementById("name2").value; 
    }
    else{
        var name1 = document.getElementById("name1en").value;
        var name2 = document.getElementById("name2en").value; 
    }
    
    if(name1.length > 0 && name2.length > 0){
        var num = Math.round(Math.random()*100);
        document.getElementById("modalTitle").innerHTML = num + "%";

        if(num <= 20){
            if(lang == "pt"){
                document.getElementById("modalBody").innerHTML = "É... não foi dessa vez. Sinto muito, mas o amor não é para vocês.";
            }
            else{
                document.getElementById("modalBody").innerHTML = "Well... not in this lifetime. I'm sorry, but love isn't for you two.";
            }
            $("#gif").attr("src","img_bundle/guaxinim_algodao_doce.gif");
        }
        else if(num > 20 && num <= 40){
            if(lang == "pt"){
                document.getElementById("modalBody").innerHTML = "O que caberia melhor aqui é uma amizade. Mais que amigos, friends.";
            }
            else{
                document.getElementById("modalBody").innerHTML = "A friendship would fit best. #BrosForLife";
            }
            $("#gif").attr("src","img_bundle/hoje_nao.gif");
        }
        else if(num > 40 && num <= 60){
            if(lang == "pt"){
                document.getElementById("modalBody").innerHTML = "Vejo potencial, mas será uma longa jornada. Boa sorte, amigo.";
            }
            else{
                document.getElementById("modalBody").innerHTML = "I see potential, but it will be a long journey. Good luck, my friend.";
            }
            $("#gif").attr("src","img_bundle/guaxinim_com_cuidado.gif");
        }
        else if(num > 60 && num <= 80){
            if(lang == "pt"){
                document.getElementById("modalBody").innerHTML = "Formam um belo casal, sem dúvida!";
            }
            else{
                document.getElementById("modalBody").innerHTML = "A cute couple, for sure!";
            }
            $("#gif").attr("src","img_bundle/bate_aqui.gif");
        }
        else{
            if(lang == "pt"){
                document.getElementById("modalBody").innerHTML = "Parabéns! Você encontrou sua alma gêmea!!";
            }
            else{
                document.getElementById("modalBody").innerHTML = "Congrats! You've found your soulmate!!";
            }
            $("#gif").attr("src","img_bundle/amor.gif");
        }
        $('#resultsModal').modal('show');
    }
    else{
        alert("Digite dois nomes!");
    }
}