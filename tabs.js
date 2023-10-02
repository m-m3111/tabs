let tab1= document.querySelector('#tab1')
const tab2= document.querySelector('#tab2')
const tab3= document.querySelector('#tab3')
let content= document.querySelector('.content')

tab2.addEventListener('click', ()=>
{
 tab2.style.backgroundColor= 'white'
 tab1.style.backgroundColor= '#fff6a3'
 tab3.style.backgroundColor= '#fff6a3'

 tab2.style.borderBottom= 'none';
 tab3.style.borderBottom= '2px solid red';
 tab1.style.borderBottom= '2px solid red';




 content.innerHTML= '<br><br><br>this tab 2 bullshit'}

);

tab1.addEventListener('click', ()=>
{
 tab1.style.backgroundColor= 'white'
 tab2.style.backgroundColor= '#fff6a3'
 tab3.style.backgroundColor= '#fff6a3'

 tab1.style.borderBottom= 'none';
 tab2.style.borderBottom= '2px solid red';
 tab3.style.borderBottom= '2px solid red';

 content.innerHTML= '<br> <br> <br> this is some bullshit for tab 1'

}
);

tab3.addEventListener('click', ()=>
{
 tab3.style.backgroundColor= 'white'
 tab2.style.backgroundColor= '#fff6a3'
 tab1.style.backgroundColor= '#fff6a3'

 tab3.style.borderBottom= 'none';
 tab1.style.borderBottom= '2px solid red';
 tab2.style.borderBottom= '2px solid red';

 content.innerHTML= '<br><br><br>this tab 3 bullshit'})
