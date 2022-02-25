function search_in_page(){
    var input, mod;
    input= document.getElementById('searcher');
    mod=input.value.toLowerCase();

    if (mod == ('conocenos')) {
        window.location.href="historia.html";
    }
    else if (mod==('trabaja')) {
        window.location.href="cuestionario.html";
    }
    else if (mod == ('historia')){
        window.location.href="historia.html";
    }
    else if ( mod == ('melia')){
        window.location.href="index.html";
    }

    else if (mod ==('planifica')) {
        document.location.href='CAMBIO.html';
    }
    else if (mod !=''){
        document.getElementById('searcher').value ='';
        alert("Página no encontrada.");
    }

}