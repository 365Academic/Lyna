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

document.querySelector('meta[name="description"]').setAttribute("content", page);

$('meta[property="og:image"]').attr('content', `https://lyna.ga/pages/${page}/${page}.png`);
$('meta[property="twitter:image"]').attr('content', `https://lyna.ga/pages/${page}/${page}.png`);