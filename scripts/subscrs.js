
const btnAddSubscr = document.getElementById('createSubscr')
const subscrListElem = document.getElementById('currentSubscrs')
// 
// const btnClearList = document.getElementById('removeFiles')

const subscrs = [
    {
        title: 'Advanced',
    },
    {
        title: 'Pro',
    },
    {
        title: 'Noob',
    }]

renderSubscrs()

// subscrListElem.onclick = function (event){
//     if(event.target.dataset.index){
//         const index = parseInt(event.target.dataset.index)
//         const type = event.target.dataset.type

//         if(type === 'toggle'){
//             files[index].isActive = !files[index].isActive 
//         }
//         else if (type === 'remove'){
//             files.splice(index,1) 
//         }
//         renderSubscrs()
//     }
// }

subscrListElem.onclick = function (event){
    if(event.target.dataset.index){
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if(type === 'removeSubscr')
            files.splice(index,1)
        renderSubscrs()
    }
}

// btnClearList.onclick = function(){
//     // files.forEach(element => {
//     //     files.pop()
//     // });
//     files.length=0
//     renderSubscrs()
// }
// subscrListElem.onclick = function (event){
//     if(event.target.dataset.type === "removeFile"){
//         for(let i = 0; i < files.length; i++)
//             files.splice(i,1)
//         renderSubscrs()
//     }

// }
btnAddSubscr.onclick = function(){

    const newSubscr = {
        title:'Pro',
    }

    // if (inputElem.value.length === 0)   return
    subscrs.push(newSubscr)
    renderSubscrs()
        // inputElem.value = ''
}
function getSubscrTemplate(sub, i){
    return `
        <div class="subscrContainer">
            <div class="subscrWrapper">
                <div class="subscrTitlewrapper">
                    <h2 class="subscrTitle">${sub.title}</h2>
                </div>
                <div class="subscrPrice">
                    <p class="subscrPriceText">50 руб.</p>
                    <p class="subscrPriceDesc">Девствует суйтки</p>
                </div>
                <div class="tarif-wrpper">
                    <p class="tarifPagesPerDay">15 страниц в день</p>
                    <p class="tarifPagesPerMessage">10 страниц за сообщение</p>
                </div>
                <a href="#" class="subscrBuyBtn">Покупить</a>
                
            </div>
        </div>`
}
function renderSubscrs(){
    subscrListElem.innerHTML=''
    if(subscrs.length ===0)
        subscrListElem.innerHTML = '<p class="noSmth">Нет файлов</p>'
    for(let i = 0; i < subscrs.length; i++)
        subscrListElem.insertAdjacentHTML('beforeend',getSubscrTemplate(subscrs[i],i))  
}