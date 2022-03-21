function HiddenElements(elements) {
  if(elements.selectedIndex !== 0) {
       for(var i=0; i < divsO.length; i++) {
           divsO[i].style.display = 'none';
      }
      document.getElementById(elements.value).style.display = 'block';
  }
}

window.onload=function() {
  //get the divs to show/hide
  divsO = document.getElementById("mainView").getElementsByClassName('show-hide');
};

var ele = "Csharp";
var menuSelect = document.getElementById('menuSelect');

for(var i, j = 0; i = menuSelect.options[j]; j++) {
  if(i.value == ele) {
    menuSelect.selectedIndex = j;
    break;
  }
}



//DARK THEME//

const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='bx-brightness-full'

const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'light' : 'dark'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-brightness-half' : 'bx-brightness-full'

if(selectedTheme){
    document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-brightness-half' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click',() =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

//COPY TO CLIPBOARD//

const inputTexts=document.getElementById("inputTexts");
const btnCopy=document.getElementById("btnCopy");

btnCopy.onclick=function(){
  inputTexts.select();
  document.execCommand("Copy");
}
