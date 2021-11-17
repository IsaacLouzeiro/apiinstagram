$(function(){

    const token = "IGQVJWZAWR4WVp2VC1POEp3dUNuMWtXWXVpUUNGTHFLcEhIVy01bk5TUmNMRGMtb244U3hFQmRybzNwZAU04NFRodlA4RENZAQ1Y4UnE5cEFtUjhyREJfSllWYUlMcFR1VzcwQVJ0M3FEaTN4Xy1KU1dZASgZDZD";
    const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,media_type,caption,permalink";

    $.get(url).then(function(response){
        // console.log('retorno: ', response.data);

        let dadosJson = response.data
        let conteudo = '<div class="row ps-2">';

        for (let p = 0; p < dadosJson.length; p++) {
            let feed = dadosJson[p];
            let titulo = feed.caption !== null ? feed.caption : '';
            let tipo = feed.media_type;
            if(tipo === 'VIDEO') {
                conteudo += '<div class="col-12"><video controls><source src="'+feed.media_url+'" type="video/mp4"></video></div>';
            }
            else if(tipo === 'IMAGE') {
                conteudo += '<div class="col-12"><img src="'+feed.media_url+'" onclick="window.open(\''+feed.permalink+'\');" title="'+titulo+'" alt="'+titulo+'"></div>';
            }    
        }

        conteudo += '</div>';

        $('#insta').html(conteudo);

    })

});