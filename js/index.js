




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
// variable element button seacrhnya
