console.log("in marvel");

var superHeros = [
   'iron man','thor','captain america','Falcon','hulk'
]

superHeros.forEach((hero)=>
{
    getChar(hero)
    .then(
    function(res)
    {
        console.log(res.data.results[0].thumbnail.path);
        // Create card element
        const card = document.createElement('div');
        card.classList.add('card','col-lg-3','col-sm-6','col-md-3');
        // card.classList.add('col-sm-6');

// Set card content
        card.innerHTML = `
          <img src="${res.data.results[0].thumbnail.path}.jpg" class="card-img-top" alt="Image">
          <div class="card-img-overlay col-lg-12 col-md-12 col-sm-12">
            <h5 class="card-title">${res.data.results[0].name}</h5>
            <p class="card-text">${res.data.results[0].description}</p>
          </div>
            `;
        
// org code

    //  <img src="${res.data.results[0].thumbnail.path}.jpg" class="card-img-top" alt="Card image">
    //          <div class="card-body">
    //              <h5 class="card-title">${res.data.results[0].name}</h5>
    //              <p class="card-text">${res.data.results[0].description}</p>
    //              <a href="#" class="btn btn-primary">Read More</a>
    //          </div>
//end



// Set card ID
        card.id = 'hero';

// Append card to the document body or any desired parent element
        document.getElementById('container').appendChild(card);
// document.body.appendChild(card);

    })
    .catch(
        function (error) {
            console.log(error+"error in getting char");
        });
});


function getChar(name)
{
    const publicKey = '38e1ffdaeaa9b9bef76cae16bc306f07';
    const hashKey = '50b69e3db7031ec68231ea6c05198f40';

    const api = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=${publicKey}&hash=${hashKey}&ts=1684993946733`;

    return new Promise(async function(resolve,reject){
        try{
            await fetch(api).then((res)=>
            {
                resolve(res.json())
            })
            .catch((error)=>reject(error));
        }
        catch(ex)
        {
            reject("ex"+ex);
        }
    });
}