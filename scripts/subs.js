// const inputElem = document.getElementById('title')
// const btnCreateSubscr = document.getElementById('create')
// const subscrListElem = document.getElementById('subscriptions')
// const subscrs = [
//     {
//         title: 'Start',
//         isActive: false,
//     },
//     {
//         title: 'Advanced',
//         isActive: true,
//     },
//     {
//         title: 'Pro',
//         isActive: false,
//     }]

// renderSubscrs()

// subscrListElem.onclick = function (event){
//     if(event.target.dataset.index){
//         const index = parseInt(event.target.dataset.index)
//         const type = event.target.dataset.type

//         if(type === 'toggle'){
//             subscrs[index].isActive = !subscrs[index].isActive 
//         }
//         else if (type === 'remove'){
//             subscrs.splice(index,1) 
//         }
//         renderSubscrs()
//     }
// }
// btnCreateSubscr.onclick = function(){
//     const newSubscr = {
//         title: inputElem.value,
//         isActive: false,
//     }

//     if (inputElem.value.length === 0)   return
//         subscrs.push(newSubscr)
//     renderSubscrs()
//         inputElem.value = ''
//     // subscrListElem.innerHTML = `
//     //     <li class="subsElem">
//     //         <span>Название</span>
//     //         <span>
//     //         <span>&check;</span>
//     //         <span>&times;</span>
//     //         </span>
//     //     </li>`
// }
// function getSubscrTemplate(subscr, i){
//     return `
//     <li class="subsElem">
//         <span class="${subscr.isActive ? 'text-decoration-line-through':''}">${subscr.title}</span>
//         <span>
//             <span class="btn btn-lg btn-${subscr.isActive ? 'warning':'success'}"data-type ='toggle' data-index=${i}>&check;</span>
//             <span class="btn btn-small btn-danger" data-index=${i} data-type='remove'>&times;</span>
//         </span>
//     </li>`
// }
// function renderSubscrs(){
//     subscrListElem.innerHTML=''
//     if(subscrs.length ===0)
//         subscrListElem.innerHTML = '<p>Нет доступных подписок</p>'
//     for(let i = 0; i < subscrs.length; i++)
//         subscrListElem.insertAdjacentHTML('beforeend',getSubscrTemplate(subscrs[i],i))  
// }


