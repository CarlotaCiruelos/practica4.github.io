
const myModal = document.getElementById("textoM");
function getResultados(){
    var name = document.getElementById("validationDefault01").value;
    var surname = document.getElementById("validationDefault02").value;
    var correo = document.getElementById("validationDefaultUsername").value;
    var pais = document.getElementById("validationDefault03").value;
    var postal = document.getElementById("validationDefault04").value;
    var continente = document.getElementById("sel1").value;
    var exp = document.getElementById("sel2").value;
    var area = document.getElementById("areat").value;


    var texto = name+" "+surname+" con residencia en: "+pais+" y código postal: "+postal+" y correo electrónico: "+correo+". Aplica para cargo de: "+area+" con preferencia en  "+continente+" con "+exp+" años de experiencia";

    myModal.innerHTML = texto;


}