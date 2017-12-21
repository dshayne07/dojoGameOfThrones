$(document).ready(function(){
    var house, titles;
    $(document).on('click', 'img', function(){
        house = $(this).attr('alt');
        $.get("https://anapioficeandfire.com/api/houses?name="+house, function(res) {
            $('#name').text(res[0].name);
            $('#words').text(res[0].words);
            titles="";
            if(res[0].titles.length>1){
                for(var i=0; i<res[0].titles.length; i++){
                    if(i!=res[0].titles.length-1)
                        titles+=res[0].titles[i]+", ";
                    else
                        titles+="and "+res[0].titles[i];
                }
            }
            else
                titles=res[0].titles[0];
            $('#titles').text(titles);
        }, "json");
    });
});