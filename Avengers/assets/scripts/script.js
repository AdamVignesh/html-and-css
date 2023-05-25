function initMap()
    {
    var options = {
        zoom : 5,
        center :{lat:11.0056,lng:76.961632},
    }
    var map = new google.maps.Map(document.querySelector('#map'),options);
    // var marker = new google.maps.Marker({
    //     position:{lat:11.0056,lng:76.961632},
    //     map:map
    // });

    // marker.addListener()
    var iconSize = new google.maps.Size(40,40);
    var infinityStones = [
        {
            coords:{lat:11.0056,lng:76.961632},
            icon:{url:"assets/images/timeStone.png", scaledSize:iconSize},
            content:'<h1>Time Stone</h1>',
        },
        {
            coords:{lat:13.044403,lng:80.251648},
            icon:{url:"assets/images/spaceStone.png", scaledSize:iconSize},
            content:'<h1>Space Stone</h1>',
        },
        {
            coords:{lat:10.9600778,lng:78.0766036},
            icon:{url:"assets/images/realityStone.png", scaledSize:iconSize},
            content:'<h1>Reality Stone</h1>',
        },{
            coords:{lat:21.0000,lng:78.0000},
            icon:{url:"assets/images/mindStone.png", scaledSize:iconSize},
            content:'<h1>Mind Stone</h1>',
        },{
            coords:{lat:12.971891,lng:77.641151},
            icon:{url:"assets/images/powerStone.png", scaledSize:iconSize},
            content:'<h1>Power Stone</h1>',
        },{
            coords:{lat:17.439930 ,lng:78.498276},
            icon:{url:"assets/images/soulStone.png", scaledSize:iconSize},
            content:'<h1>Soul Stone</h1>',
        }

    ];

    infinityStones.forEach((stone)=>{
        addMarker(stone);
        // console.log(stone);
    });
    function addMarker(props)
    {
        var marker = new google.maps.Marker({
                position:props.coords,
                icon:props.icon,
                map:map,
                draggable:true
                
                // icon:props.icon
            });

        if(props.content)
        {
            var infoWindow = new google.maps.InfoWindow({
                content:props.content
            });
        }
        marker.addListener('click',function(){
            infoWindow.open(map,marker);    
        });
    }

}

