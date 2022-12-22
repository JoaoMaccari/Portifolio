


function abrirmenu(){
    let BarraMenuAberto = document.getElementById('barra-menu')
    if(BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "180px";
        BarraMenuAberto.style.height = "62vh";
    }else{
        BarraMenuAberto.style.width = "0px";
    }
}