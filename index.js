const body = document.querySelector('body')

const addcat= (cat)=>{
const section = document.createElement('section')
const h3 = document.createElement('h3')
const ul =document.createElement('ul')

const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')

body.appendChild(section)
section.appendChild(h3)
section.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
section.setAttribute('class','categorie')
ul.setAttribute('class','list')

h3.innerText=cat.name;
li1.innerText=cat.value1
li2.innerText=cat.value2
li3.innerText=cat.value3
}
const xhrC= new XMLHttpRequest()
const urlC="https://api.chucknorris.io/jokes/categories"
const urlV="https://api.chucknorris.io/jokes/random?category=" 

xhrC.open('GET',urlC,true)

xhrC.addEventListener('load',()=>{
    const response = JSON.parse(xhrC.responseText);
    response.forEach(cat => {
      let c={}
      c.name=cat
      for(let i=0;i<4;i++){
        const xhrV= new XMLHttpRequest()
 
        xhrV.open('GET',urlV+''+cat , true)

           xhrV.addEventListener('load',()=>{
           const res = JSON.parse(xhrV.responseText)
           if(i==0){
            c.value1=res.value
           }
           if(i==1){
            c.value2=res.value
           }
           if(i==2){
            c.value3=res.value
           }
           if(i==3){
            addcat(c)
           }
           

        
           
           })
          xhrV.send()

      }
       
       
            
        
           


           
           
          
           
           
       
         
         
       
        
        
       

       
    });

})
xhrC.send()
