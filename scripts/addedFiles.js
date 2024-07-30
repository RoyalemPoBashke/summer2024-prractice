

const docsListElem = document.getElementById('addedFiles')
const btnClearList = document.getElementById('removeFiles')
const files = [
    {
        title: 'photo 01-02-20022',
    },
    {
        title: 'photo 09-08-20022',
    },
    {
        title: 'photo 05-06-20062',
    }]

renderFiles()

// docsListElem.onclick = function (event){
//     if(event.target.dataset.index){
//         const index = parseInt(event.target.dataset.index)
//         const type = event.target.dataset.type

//         if(type === 'toggle'){
//             files[index].isActive = !files[index].isActive 
//         }
//         else if (type === 'remove'){
//             files.splice(index,1) 
//         }
//         renderFiles()
//     }
// }

	$('#file-input').change(function() {
		let filesZ = this.files;
		// console.log( files[1].name)
		$(filesZ).each(function(index, file) {
      const newFile = {
        title: filesZ[index].name,
      }
      console.log(filesZ[index].name)
      sendFiles(filesZ);
      files.push(newFile)
      renderFiles()
		})
	});

docsListElem.onclick = function (event){
    if(event.target.dataset.index){
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if(type === 'removeFile')
            files.splice(index,1)
        renderFiles()
    }
}

btnClearList.onclick = function(){
    // files.forEach(element => {
    //     files.pop()
    // });
    files.length=0
    renderFiles()
}
// docsListElem.onclick = function (event){
//     if(event.target.dataset.type === "removeFile"){
//         for(let i = 0; i < files.length; i++)
//             files.splice(i,1)
//         renderFiles()
//     }

// }

function getAddedFileTemplate(file, i){
    return `
              <li>
                <div class="added-file">
                  <div class="add-img-wrapper">
                    <div class="addedFileContainer">
                      <div class="preview-img">
                        <a class="img-file">
                          <img src="./img/testText.png" width="35" height="35">
                        </a>
                      </div>
                      <div class="img-name">
                        <p class="added-img-text">${file.title}</p>  
                      </div>
                    </div>
                    <span class="btn btn-small btn-danger" data-index=${i} data-type='removeFile' '>&times;</span>

                  </div>
                </div>
              </li>`
}
function renderFiles(){
    docsListElem.innerHTML=''
    if(files.length ===0)
        docsListElem.innerHTML = '<p class="noSmth">Нет файлов</p>'
    for(let i = 0; i < files.length; i++)
    {
        docsListElem.insertAdjacentHTML('beforeend',getAddedFileTemplate(files[i],i))
    }

}

var dropZone = $('#upload-container');

$('#file-input').focus(function() {
  $('label').addClass('focus');
})
.focusout(function() {
  $('label').removeClass('focus');
});


dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
  return false;
});

dropZone.on('dragover dragenter', function() {
  dropZone.addClass('dragover');
});

dropZone.on('dragleave', function(e) {
  let dx = e.pageX - dropZone.offset().left;
  let dy = e.pageY - dropZone.offset().top;
  if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
    dropZone.removeClass('dragover');
  }
});

dropZone.on('drop', function(e) {
  dropZone.removeClass('dragover');
  let filesZ = e.originalEvent.dataTransfer.files;
  sendFiles(filesZ);
  $(filesZ).each(function(index, file) {
    const newFile = {
      title: filesZ[index].name,
    }
    console.log(filesZ[index].name)
    sendFiles(filesZ);
    files.push(newFile)
    renderFiles()
  })
});

// $('#file-input').change(function() {
// 	let files = this.files;
// 	// console.log(files[0].name)

// 	sendFiles(files);
// });


function sendFiles(files) {
  let maxFileSize = 5242880;
  let Data = new FormData();
  $(files).each(function(index, file) {
    if ((file.size <= maxFileSize) && ((file.type == 'image/png')
       || (file.type == 'image/jpeg'))) {
      Data.append('images[]', file);
    };
  });

  $.ajax({
    url: dropZone.attr('action'),
    type: dropZone.attr('method'),
    data: Data,
    contentType: false,
    processData: false,
    success: function(data) {
      // alert ('Файлы были успешно загружены!');
    }
  });
}
