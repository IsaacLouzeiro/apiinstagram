$(function(){

    const token = "IGQVJXenMyeV9BZAkttM3VNdVRlQjRYU1RxdG1uNV8zeG54NllHYkFXRm9iUkotYzJVbnRfTjl1WkVXRWFrS2htOHMwU2xlWW5OVVlhb0hFTEhZAbkpZAa3A1OHY3cTZAmY3E5VEY5bnRYdjJ5X0RYNXd5dAZDZD";
    const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,media_type,caption,permalink,username";

    $.get(url).then(function(response){
        // console.log('retorno: ', response.data);

        let dadosJson = response.data;
        let conteudo = '';
        let nameUser = ''+dadosJson[0].username+'';

        for (let p = 0; p < dadosJson.length; p++) {
            let feed = dadosJson[p];
            let titulo = feed.caption !== null ? feed.caption : '';
            let tipo = feed.media_type;
            if(tipo === 'VIDEO') {
                conteudo += '<div class="col-12"><video controls><source src="'+feed.media_url+'" type="video/mp4"></video></div>';
            }
            else if(tipo === 'IMAGE') {
                conteudo += '<div class="col-4"><img width="100%" src="'+feed.media_url+'" onclick="window.open(\''+feed.permalink+'\');" title="'+titulo+'" alt="'+titulo+'"></div>';
            }
            else if(tipo === 'CAROUSEL_ALBUM') {
                conteudo += '<div class="col-4"><img width="100%" src="'+feed.media_url+'" onclick="window.open(\''+feed.permalink+'\');" title="'+titulo+'" alt="'+titulo+'"></div>';
            } 
        }

        conteudo += '</div>';

        $('#insta').html(conteudo);
        $('#nameUser').html(nameUser);

    })

});
