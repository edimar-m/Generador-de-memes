/***Header***/

/*Declaraciones*/
const imageEditorPanel = document.getElementById('image-editor-panel');
const textEditorPanel = document.getElementById('text-editor-panel');
const asideContainer = document.getElementById('aside-panel-container');
const imgButton = document.getElementById('image-button');
const memeContainer = document.getElementById('meme-container');
const downloadButton = document.getElementById('button-download');
const textButton = document.getElementById('text-button');
const lightButton = document.getElementById('light-button');
const darkButton = document.getElementById('dark-button');

/*Inicialización*/

//Botón imagen-header
imgButton.addEventListener('click', ()=>{
    asideContainer.style.display = 'block';
    imageEditorPanel.classList.remove('display-none');
    textEditorPanel.classList.add('display-none');
});

//Botón text-header
textButton.addEventListener('click', ()=>{
    asideContainer.style.display = 'block';
    textEditorPanel.classList.remove('display-none');
    imageEditorPanel.classList.add('display-none');
});

//Cambio modo claro/ modo oscuro
lightButton.addEventListener('click', ()=>{
    lightButton.classList.add('display-none');
    darkButton.classList.remove('display-none');
    document.body.classList.add('dark-mode');
});

darkButton.addEventListener('click', ()=>{
    lightButton.classList.remove('display-none');
    darkButton.classList.add('display-none');
    document.body.classList.remove('dark-mode');
});

/*************************************************/

/***Contenedor principal/ Edition section***/

//Botón de descarga
downloadButton.addEventListener('click', ()=>{
    domtoimage.toBlob(memeContainer)
    .then(function (blob) {
        saveAs(blob, 'mi-meme.png');
    });
});

/******************************************************************************************************/

/***Aside- panel imagen***/
// Boton cerrar barra lateral

const asideButton = document.getElementById('aside-button');

asideButton.addEventListener('click', ()=>{
    asideContainer.style.display ='none';
});

//Imagen URL

const memeImage = document.getElementById('meme-image');
const urlImage = document.getElementById('url');

urlImage.addEventListener('keyup', (e)=>{
    e.preventDefault();
    const valueUrl = urlImage.value;
    memeImage.style.backgroundImage = `url("${valueUrl}")`;
    memeImage.style.backgroundPosition = 'center';
});

//Fondo 
const backColorImg = document.getElementById('input-back-color');
const blendBackColor = document.getElementById('blend-back-color');
const SelectBackColor = document.getElementById('select-back-color');

SelectBackColor.addEventListener('change',()=>{  
    memeImage.style.backgroundBlendMode = SelectBackColor.value;
});

backColorImg.addEventListener('input', ()=>{
    const valueImageBack = backColorImg.value;
    memeImage.style.backgroundColor = valueImageBack;
    backColorImg.innerHTML = valueImageBack.toUpperCase();
});

// Filtros de la imágen

const brightnessFilter = document.getElementById('brightness');
const opacityFilter = document.getElementById('opacity');
const contrastFilter = document.getElementById('contrast');
const blurFilter = document.getElementById('blur');
const grayscaleFilter = document.getElementById('grayscale');
const sepiaFilter = document.getElementById('sepia');
const hueFilter = document.getElementById('hue');
const saturateFilter = document.getElementById('saturate');
const invertFilter = document.getElementById('invert');

const filtrosImagen = () =>{
    memeImage.style.filter = `brightness(${brightnessFilter.value}) opacity(${opacityFilter.value}) contrast(${contrastFilter.value}%) blur(${blurFilter.value}px) grayscale(${grayscaleFilter.value}%) sepia(${sepiaFilter.value}%) hue-rotate(${hueFilter.value}deg) saturate(${saturateFilter.value}%) invert(${invertFilter.value})`;
};

brightnessFilter.addEventListener('change', filtrosImagen);
opacityFilter.addEventListener('change', filtrosImagen);
contrastFilter.addEventListener('change', filtrosImagen);
blurFilter.addEventListener('change', filtrosImagen);
grayscaleFilter.addEventListener('change', filtrosImagen);
sepiaFilter.addEventListener('change', filtrosImagen);
hueFilter.addEventListener('change', filtrosImagen);
saturateFilter.addEventListener('change', filtrosImagen);
invertFilter.addEventListener('change', filtrosImagen);

//Reestablecer Filtros

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', ()=>{
    brightnessFilter.value = '1';
    opacityFilter.value= '1';
    contrastFilter.value= '100';
    blurFilter.value= '0';
    grayscaleFilter.value = '0';
    sepiaFilter.value = '0';
    hueFilter.value= '0';
    saturateFilter.value = '100';
    invertFilter.value = '0';
    filtrosImagen();
});

/******************************************************************************************************/

/***Aside- panel texto***/
//Texto superior e inferior del meme

const inputTopText = document.getElementById('top-aside-text');
const inputBottomText = document.getElementById('bottom-aside-text');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const withoutTopText = document.getElementById('without-top-text');
const withoutBottomText = document.getElementById('without-bottom-text');

//Top text input
inputTopText.addEventListener('keyup', () => {
    const changedTopText = inputTopText.value;
    topText.innerHTML = changedTopText;
});

//Bottom text input
inputBottomText.addEventListener('keyup', () => {
    const changedBottomText = inputBottomText.value;
    bottomText.innerHTML = changedBottomText;
});

//checkbox sin texto superior
withoutTopText.addEventListener('change',()=>{
    if(withoutTopText.checked){
        topText.classList.add('display-none');
    } else{
        topText.classList.remove('display-none');
    }
});

//checkbox sin texto inferior
withoutBottomText.addEventListener('change',()=>{
    if(withoutBottomText.checked){
        bottomText.classList.add('display-none');
    } else{
        bottomText.classList.remove('display-none');
    }
});

//Tipo de fuente del texto meme

const fontType = document.getElementById('font-type');

fontType.addEventListener('change',()=>{
    topText.style.fontFamily = `${fontType.value}`;
    bottomText.style.fontFamily = `${fontType.value}`;
});

//Tamaño de fuente del texto meme

const fontSize = document.getElementById('font-size');

const fontSizeImput = () =>{
    topText.style.fontSize = `${fontSize.value}px`;
    bottomText.style.fontSize = `${fontSize.value}px`;
}
fontSize.addEventListener('input', fontSizeImput);

//Alineación del texto meme

const textAlignLetf = document.getElementById('button-text-left');  
const textAlignCenter = document.getElementById('button-text-center');  
const textAlignRight = document.getElementById('button-text-rigth');

textAlignLetf.addEventListener('click', ()=>{
    topText.style.textAlign = 'left';
    bottomText.style.textAlign= 'left';
});

textAlignCenter.addEventListener('click', ()=>{
    topText.style.textAlign = 'center';
    bottomText.style.textAlign= 'center';
});

textAlignRight.addEventListener('click', ()=>{
    topText.style.textAlign = 'right';
    bottomText.style.textAlign= 'right';
});





