const fileInput = document.querySelector('.input-file'),
    chooseImg = document.querySelector('.choose-img')
previewImg = document.querySelector('.preview-img img');
filtersName = document.querySelector('.filter-info .name');
filtersValue = document.querySelector('.filter-info .value');
slider = document.querySelector('.slider input');
filters = document.querySelectorAll('.filter button')
rotates = document.querySelectorAll('.rotate button')


let brightness = 100, satuaration = 1, invertion = 0, greyscale = 0
let rotate=0 , horizontal=1,vertical=1;


const applyFilter = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${horizontal},${vertical})`

    previewImg.style.filter = `brightness(${brightness}%)saturate(${satuaration})invert(${invertion}%) grayscale(${greyscale})`
}

const getImg = () => {    //**Getting Images From User */
    let file = fileInput.files[0];
    if (!file) return;
    console.log(file)
    previewImg.src = URL.createObjectURL(file) //** Passing File and add  to PreviewImg src */
    previewImg.addEventListener('load', () => {
        document.querySelector('.container').classList.remove("disable")
    })
}
filters.forEach(option => {
    option.addEventListener('click', () => {
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active")
        filtersName.innerText = option.innerText;
        if (option.id === "Brightness") {
            slider.max = "200";
            slider.value = brightness
            filtersValue.innerText = `${brightness}%`
        } else if (option.id === "Satuaration") {
            slider.max = "200";
            slider.value = satuaration
            filtersValue.innerText = `${satuaration}%`
        } else if (option.id === "Invertion") {
            slider.max = "100";
            slider.value = invertion
            filtersValue.innerText = `${invertion}%`
        } else {
            slider.max = "100";
            slider.value = greyscale
            filtersValue.innerText = `${greyscale}%`
        }


    })
});

const updateFilter = () => {
    filtersValue.innerText = `${slider.value}%`
    const currentFilter = document.querySelector(".filter .active")

    if (currentFilter.id === "Brightness") {
        brightness = slider.value
    } else if (currentFilter.id === "Satuaration") {
        satuaration = slider.value
    } else if (currentFilter.id === "Invertion") {
        invertion = slider.value
    } else { greyscale = slider.value }

    applyFilter()
}

rotates.forEach( option =>{
    option.addEventListener('click',()=>{
        if(option.id === "left"){
            rotate -= 90
        }else if(option.id === "right"){
            rotate +=90
        }else if (option.id === "horizontal"){
            horizontal = horizontal === 1 ? - 1 : 1
        }else{
            vertical = vertical === 1 ? - 1 : 1

        }
        applyFilter()
    })
})


fileInput.addEventListener('change', getImg)
chooseImg.addEventListener('click', () => fileInput.click())
slider.addEventListener('input', updateFilter)