$(function(){

    const token = "IGQVJWZAWR4WVp2VC1POEp3dUNuMWtXWXVpUUNGTHFLcEhIVy01bk5TUmNMRGMtb244U3hFQmRybzNwZAU04NFRodlA4RENZAQ1Y4UnE5cEFtUjhyREJfSllWYUlMcFR1VzcwQVJ0M3FEaTN4Xy1KU1dZASgZDZD";
    const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,media_type,caption,permalink";

    $.get(url).then(function(response){
        console.log('retorno: ', response.data);
    })

});