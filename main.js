const fileInput= document.querySelector('.input-file'),
 chooseImg= document.querySelector('.choose-img')
 previewImg=document.querySelector('.preview-img img');



const getImg = ()=>{    //**Getting Images From User */
    let file =fileInput.files[0];
    if(!file) return; 
    console.log(file)
    previewImg.src= URL.createObjectURL(file) //** Passing File and add  to PreviewImg src */
}

 fileInput.addEventListener('change',getImg)
 chooseImg.addEventListener('click',()=>fileInput.click())