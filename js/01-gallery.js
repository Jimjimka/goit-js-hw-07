import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery')

const makeGalleryImage = ({ preview, original, description } = {}) => {
    return `
    <div class="gallery__item"> 
    <a class="gallery__link" href="${original}"> 
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> 
    </a> 
    </div>
    
  `;
  };

  const galleryCardsArr = galleryItems.map(el => {
    return makeGalleryImage(el);
  });

  const galleryCardsString=galleryCardsArr.join('')

  galleryListEl.insertAdjacentHTML('afterbegin', galleryCardsString);

  const onGalaryClick = (event)=>{
    event.preventDefault()
    const {target} = event
    const largeImagePath = target.dataset.source
    
      const changeSize =  basicLightbox.create(`
      <img src=${largeImagePath} width="" height="">
      `
      )

    
      changeSize.show()

      document.addEventListener('keydown', event=>{
        if(event.code==='Escape'){
          changeSize.close()
        }
      })
   
  }

  galleryListEl.addEventListener('click',onGalaryClick)




  // const {target} = event
  // const largeImagePath = target.dataset.source
  // const minImagesPath = target.currentSrc
  // {
  //   onShow:()=>{
  //     window.addEventListener('keydown', closeModal)
  //   }
  // }