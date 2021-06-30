$(document).ready(function () {
    $(".biomateria").hide();
    $(".coluna").hide();
    $(".estetica").hide();
    $(".lancamento").hide();

});

function mudarTexto(id){
    
    var title = document.getElementById('title-produto-din');
    var descricao = document.getElementById('descricao-produto-din');

	var titleProduto = [
        'Estética', 
        'Cabeça/Pescoço',
        'Coluna',
        'Biomateriais',
        ];


	var descricaoProduto = [
        'Produtos para cirurgia plástica: compromisso com a qualidade e segurança.',
        'Linha completa de produtos para o perfeito atendimento de cirurgias de cabeça e pescoço, visando o bem estar do paciente.',
        'Soluções em cirurgias de coluna minimamente invasivas.',
        'Constituídos de compostos que são integrados aos sistemas biológicos com o objetivo de substituir, completar ou tratar certo órgão ou tecido.',
    ];

    title.innerHTML = titleProduto[id];
    descricao.innerHTML = descricaoProduto[id];
   
}

function mudarBoxSlider(id){
    
    var infoCatBanner = document.getElementById('infoCatBanner');
    var infoTitleBanner = document.getElementById('infoTitleBanner');
    var infoDescBanner = document.getElementById('infoDescBanner');
    var urlBanner = document.getElementById('btnBanner');

	var infoCatBannerArray = [
        'LINHA MÉDICO-HOSPITALAR', 
        'CONHECIMENTO',
        'TECNOLOGIA'
        ];

	var infoTitleBannerArray = [
        '<b>Garantir</b> saúde',
        '<b>Qualidade e</b> eficiência',
        '<b>Produtos</b> inovadores'
      ];

    var infoDescBannerArray = [
        'Nossa proposta é disponibilizar completa linha de material<br>médico-hospitalar, acompanhando as inovações presentes no mundo.        ',
        'Maior segurança e qualidade no <br>atendimento do paciente',
        'Usamos tecnologia de ponta na criação de produtos que<br> facilitam a técnica cirúrgica.  '
      ];
    
      var urlArray = [
        '#url1',
        '#url2',
        '#url3',
      ];  
      
      
    infoCatBanner.innerHTML = infoCatBannerArray[id];
    infoTitleBanner.innerHTML = infoTitleBannerArray[id];
    infoDescBanner.innerHTML = infoDescBannerArray[id];
    //urlBanner.innerHTML = "<a href=" + urlArray[id] + ">VER CATÁLOGO</a>";
   
}

function mudarBtnCicle(id){
    $(".groupBtnControl").find("span").removeClass("btnCircleActive");
    $(".groupBtnControl").find("span").eq(id).addClass("btnCircleActive");
}

function alterarSlideComBtn(id){
    $(".owl-dot").eq(id).trigger("click");
    
}

function filtrarProdutos(id){
    $(".cabeca").hide();
    $(".biomateria").hide();
    $(".coluna").hide();
    $(".estetica").hide();
    $(".lancamento").hide();

    switch (id) { 
        case 1: 
            $(".cabeca").show();
            break;
        case 2: 
            $(".biomateria").show();
            break;
        case 3: 
            $(".coluna").show();
            break;		
        case 4: 
            $(".estetica").show();
            break;
        case 5: 
            $(".lancamento").show();
            break;
        default:
            console.log("id invalido " + id);
    }
}

/* PAGINA DETALHAR PRODUTOS {TROCA A DIV} */
function alterarDetalharProduto(id){
    $("#indicacoes").hide();
    $("#instrucoes").hide();

    switch (id) { 
        case 1: 
            $("#indicacoes").show();
            break;
        case 2: 
            $("#instrucoes").show();
            break;
        default:
            console.log("id invalido " + id);
    }
}

$(document).ready(function(){
 
 $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
     $(this).toggleClass('open');
     $('.mobilenav').toggleClass('navMenuMobileOpen');
   
 });

 $('#btnCulturaisMobile').click(function(){
     $('#subMenuMobile').toggle();
 });

 $( window ).resize(function() {
     $('#nav-icon1').removeClass('open');
     $('.mobilenav').removeClass('navMenuMobileOpen');
     console.log('teste')
 });
 
});