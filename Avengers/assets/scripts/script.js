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


    //call this to change thanos location at regular intervals
     setInterval(changeLoc,30000);
    
    const maxLat = 90;
    const minLat = -90;
    const maxLng = 180;
    const minLng = -180;

    let newLat = 0;
    let newLng = 0; 
    console.log("newlat"+newLat);
    console.log("newlng"+newLng);
    let thanosMarker;
    let flag =0;
    markThanos();
    function randomLatLng()
    {
        newLat = Math.random() * (maxLat - minLat) + minLat;
        newLng = Math.random() * (maxLng - minLng) + minLng;
        console.log("newlat"+newLat);
        console.log("newlng"+newLng);
    }
    function changeLoc()
    {
        flag = 0;
        randomLatLng();
        console.log("in change loc");
        thanosMarker.setPosition(new google.maps.LatLng(newLat, newLng));

        infinityStones.forEach((stone)=>
        {
            var differenceInDistance = calculateDistance(newLat,newLng,stone.coords.lat,stone.coords.lng);
            differenceInDistance =  Math.round(differenceInDistance);
            if(differenceInDistance < 7000 )
            {
                flag =1;
            }
            console.log(differenceInDistance);
        });
        if(flag)
        {
            alert("Thanos alert");
            flag=0;
        }

    }

    // markThanos();
    function markThanos()
    {
        
        console.log("in thanos marker");
        
        randomLatLng();
            thanosMarker = new google.maps.Marker({
            position:{lat:newLat,lng:newLng},
            icon:{url:"assets/images/thanos.png", scaledSize:iconSize},
            map:map,
            draggable:true
        });

        // thanosMarker.setPosition(new google.maps.LatLng(newLat, newLng));
    }


    function calculateDistance(lat1, lon1, lat2, lon2) {
        const earthRadius = 6371; // Radius of the Earth in kilometers
      
        // Convert latitude and longitude to radians
        const latRad1 = toRadians(lat1);
        const lonRad1 = toRadians(lon1);
        const latRad2 = toRadians(lat2);
        const lonRad2 = toRadians(lon2);
      
        // Calculate the differences in latitude and longitude
        const deltaLat = latRad2 - latRad1;
        const deltaLon = lonRad2 - lonRad1;
      
        // Calculate the distance using the Haversine formula
        const a =
          Math.sin(deltaLat / 2) ** 2 +
          Math.cos(latRad1) * Math.cos(latRad2) * Math.sin(deltaLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadius * c;
      
        return distance;
      }
      
      // Helper function to convert degrees to radians
      function toRadians(degrees) {
        return degrees * (Math.PI / 180);
      }
      



}

