/*--------------------------------------------------------------------------------------\
|  _______    _    _____ _             _ _           ________     ___   ___ ___  __     |
| |__   __|  (_)  / ____| |           | (_)         /  ____  \   |__ \ / _ \__ \/_ |    |
|    | | __ _ _  | (___ | |_ _   _  __| |_  ___    /  / ___|  \     ) | | | | ) || |    |
|    | |/ _` | |  \___ \| __| | | |/ _` | |/ _ \  |  | |       |   / /| | | |/ / | |    |
|    | | (_| | |  ____) | |_| |_| | (_| | | (_) | |  | |___    |  / /_| |_| / /_ | |    |
|    |_|\__,_|_| |_____/ \__|\__,_|\__,_|_|\___/   \  \____|  /  |____|\___/____||_|    |
|                                                   \________/                          |
\--------------------------------------------------------------------------------------*/

var page = document.URL.substr(0,document.URL.lastIndexOf('/'));
    page = document.URL.replace(`${page}/`, '');

if(page == ""){
    page = "taistudio";
}

$(function(){
    $.getJSON(`../config/${page}/${page}.json`, function(data) {
        load(data);
    })
    .fail(function(){
        $.getJSON(`../config/taistudio/taistudio.json`, function(data) {
            load(data);
        })
    })
    $('.bottom').on('click', '.link', function(){
        window.open($(this).attr('data-link'), "_blank");
    })
    var height = $(window).height() - $('.top').height();
        height = Math.ceil(height) - 19;
    $('body .bottom').attr('style', `height:${height}px`);
});
$(window).resize(function(){
    var height = $(window).height() - $('.top').height();
        height = Math.ceil(height) - 19;
    $('body .bottom').attr('style', `height:${height}px`);
});
function load(data){
    config = data;
    if(config.background != null){
        $('body').prepend(`
            <img class="background" src="${config.background}"/>
        `);
    }
    $('.top .logo img').attr('src', config.logo);
    $('.top .name').text(config.name);
    $('title').text(`Lyna | ${config.name}`);
    if(config.colors != null){
        if(config.colors.length == 4){
            $('body').append(`
                <style>
                    body{
                        --pri: ${config.colors[0]};
                        --sec: ${config.colors[1]};
                        --tri: ${config.colors[2]};
                        --qua: ${config.colors[3]};
                    }
                </style>
            `);
        }
    }
    $('body').addClass(config.name);
    if(config.theme != null){
        $('body').addClass(config.theme);
    }
    for(i=0;i<config.links.length;i++){
        var icon;
        if(config.links[i].icon != null){
            icon = config.links[i].icon;
        }
        else{
            icon = `./img/services/${config.links[i].service}.png`;
        }
        $('.bottom').append(`
            <div class="link" data-link="${config.links[i].link}">
                <div class="left">
                    <div class="logo">
                        <img src="${icon}" alt="${config.links[i].service}">
                    </div>
                </div>
                <div class="center">
                    <div class="name">
                        ${config.links[i].name}
                    </div>
                </div>
                <div class="arrow">
                    <img src="./img/assets/arrow-circle-right-solid.svg" alt="ARROW">
                </div>
            </div>
        `);
    }
    setTimeout(() => {
        $('.content').addClass('active');
    }, 1000);
    $('.link').addClass('active');
}