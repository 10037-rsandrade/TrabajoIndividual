$(document).ready(function(){

    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {

        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if($this.val() === "") {
                label.removeClass("active highlight");
                } else {
                label.removeClass("highlight");
                }
        } else if (e.type === "focus") {
            if($this.val() === "") {
                label.removeClass("highlight");
            }
            else if($this.val() !== "") {
                label.addClass("highlight");
            }
        }

    });

    $(".tab a").on("click", function (e) {

        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();

        $(target).fadeIn(600);

    });

});


document.getElementById("formularioc").style.display = "none";
document.getElementById("enviardatos").style.display = "none";

function mostrar(){
    if(document.getElementById("checkbox1_1").checked == true){
        document.getElementById("formularioc").style.display = "block";
    }else{
         document.getElementById("formularioc").style.display = "none";
    }
}

function mostrarenviardatos(){
    if(document.getElementById("checkbox1_0").checked == true){
        document.getElementById("enviardatos").style.display = "block";
    }else{
         document.getElementById("enviardatos").style.display = "none";
    }
}