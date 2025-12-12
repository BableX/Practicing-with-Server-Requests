let userInput = document.getElementById('user_input')
let btn = document.getElementById('btn')
let result = document.getElementById('result')

btn.addEventListener('click', getInfo)

async function getInfo() {
    let word = userInput.value

      result.innerHTML = ""

    let response = await fetch(`https://api.unsplash.com/search/photos?query=${word}&client_id=KfpqKSLF1wwJencONCA3eHHwQge0_eE5StZNnsbJNuU`)
      let data = await response.json()

    RenderPhotos(data.results)
}



   function RenderPhotos(photos) {
    photos.forEach(photo => {
        let col = document.createElement('div')
        col.className = "col-md-4"

        col.innerHTML = `
        <div class="card shadow">
            <img src="${photo.urls.regular}" class="card-img-top" alt="${photo.alt_description}">
            <div class="card-body">
                <p class="card-text">${photo.alt_description || "Фото без описания"}</p>
            </div>
        </div>
        `

         result.append(col)
    
    
        })


}
