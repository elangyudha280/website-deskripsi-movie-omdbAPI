




// buat fitur api data movie

// 1.buat function untk manggil data api

function dataMovie(keyword){
    return fetch(`http://www.omdbapi.com/?apikey=1a8df092&s=${keyword}`)
    .then((data_api) => data_api.json())
    .then((respone) => {
        console.log(respone)
    })
}


// 2.buat event untuk ambil datanya dari inputan modal search
// variable element button searchnya

const button_search = document.querySelector('.btn-search-movie')




// kasih event button searchnya
button_search.addEventListener('click', async function(){

    // seleksi nilai inputannya
    let input_search = document.querySelector('.input-search').value;

    // panggil function fecthnya
    await dataMovie(input_search);

 


})
