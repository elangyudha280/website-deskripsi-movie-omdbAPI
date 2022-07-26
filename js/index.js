




// buat fitur api data movie

// 1.buat function untk manggil data api

function dataMovie(keyword){
    return fetch(`http://www.omdbapi.com/?apikey=1a8df092&s=${keyword}`)
    .then((data_api) => data_api.json())
    .then((respone) => {
       return respone;
    })
}

// 1.2 BUAT FUNCTION UPDATE UINYA

function updateUi(data){
    let card = "";
    let container_list = document.querySelector('.container-list');
    data.Search.forEach(element => {
       card += `
                <div class="movie-item">
                <img src="${(element.Poster === "N/A" || element.Poster === undefined) ? "../img/default.jpg" : element.Poster}" alt="" class="img-movie">
                <div class="desc-container">
                    <div class="desc-kotak">
                    <h4 class="judul-film" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdb="${element.imdbID}">${element.Title}</h4>
                    </div>
                </div>
                </div>
       `

      
    });

   return container_list.innerHTML = card;
}

// 1.3 FUNCTION UNTUK manggil data api unutk modalnya

function dataModal(imdb){

    return fetch(`http://www.omdbapi.com/?apikey=1a8df092&t=${imdb}`)
    .then(data_xhr => data_xhr.json())  
    .then(respone => respone);

}

// 1.4 function untk updateUi modalnya

function updateUiModal(data_modal){

    let fragment = document.querySelector('.modal-card');
    let cards = `  
         <p class="">${data_modal.Title}</p>  
    `;

       
    return fragment.innerHTML = cards;

}


// 1.4 BUAT EVENT PADA JUDUL MOVIE MENGGUNAKAN TEKNIK EVEN BANDING
document.addEventListener('click', async function(e){
    if(e.target.className === 'judul-film'){

        let imdb = e.target.textContent;
        let data_modal = await dataModal(imdb);

        updateUiModal(data_modal);
            console.log(data_modal.Title)
    }
})


// 2.buat event untuk ambil datanya dari inputan modal search
// variable element button searchnya

const button_search = document.querySelector('.btn-search-movie')




// kasih event button searchnya
button_search.addEventListener('click', async function(){

    // seleksi nilai inputannya
    let input_search = document.querySelector('.input-search').value;

    // panggil function fecthnya
    let data_m =  await dataMovie(input_search);

     await updateUi(data_m);
    
})
