
// global variables

const sections = document.querySelectorAll('section'); //to get all sections
const navBarContent = document.getElementById('navbar__list'); 
const button = document.querySelector('button');    // Scroll to top button
const newSectionBtn = document.getElementById('addSectionBtn');
const links = document.querySelectorAll('.page__header ul a');
let listItem = '';
let i = null ;  // counter


// build the nav

function buildNav(){

   const section= document.getElementById('section'+i);  // saves the section in a variable
   const sectionName = section.getAttribute('data-nav');
   const sectionLink = section.getAttribute('id');

   listItem = document.createElement('li');  // creates a place for the new item  
   listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'> ${sectionName}</a>`; // adds the link to the section
   listItem.addEventListener('click', scrollToSection);
  
// Adding the scrolling behavoir to the navigation bar

   function scrollToSection(d){
      d.preventDefault();            // To make the scrolling behavior smooth and not sudden
      const link = `#${sectionLink}`;  // To get the href of the list item
      document.querySelector(link).scrollIntoView({
         behavior: 'smooth'
      });
   }

   navBarContent.appendChild(listItem); 
  

}


for( i = 1; i<=sections.length; i++){  // section.length to make the length function in the number of sections.
   buildNav();

}


// make section active function

onscroll = function(){               // to make sure that the function runs throughout the scrolling process
   sections.forEach(ele =>{
      const scrollPosition = document.documentElement.scrollTop;  // to get the position on the page from top
      const  sectionPosition = ele.offsetTop;                     // to get the position of each section
      const sectionSize = ele.offsetHeight;                       
      
      if((scrollPosition)>= (sectionPosition - (sectionPosition *(0.25))) && scrollPosition< (sectionPosition + (sectionSize*0.10))){  // a condition to make a class active and to make sure that no two sections are active at the same time
         ele.classList.add('your-active-class');
      } else {
          ele.classList.remove('your-active-class');
      }
   })

   
// The condition to display the 'scroll to top' button

   if(window.pageYOffset> 800){
       button.style.display = 'block';
   } else {
      button.style.display = 'none';}
   }

// Adds scroll to top Feature

button.addEventListener('click', function(){ window.scrollTo(0,0)});
   

// Add a new section

function addSection(){
        
   const body = document.querySelector('main');
   const content = `<section id="section${i}" data-nav="Section ${i}">
      <div class="landing__container">
      <h2>Section ${i}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
 
      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
      </section>`;
       
   body.insertAdjacentHTML('beforeend', content);
      buildNav();
      i = i+1; 
   }

newSectionBtn.addEventListener('click', function(){         // Event listener that adds the new section feature
   addSection();
   
});
