let taskButton = document.getElementById('addTaskButton');
let taskInput = document.getElementById('inputTask');
let listParent = document.getElementById('parentList');
const trashList = document.querySelectorAll('.trash');
const today = new Date();
let monthName = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','DEC'];
let dayName = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
let resultDay = dayName[today.getDay()];
let resultMonth = monthName[today.getMonth()];
document.getElementById('date').textContent = `${today.getDate()}`;
document.getElementById('month').textContent = `${resultMonth}`;
document.getElementById('year').textContent = `${today.getFullYear()}`;
document.getElementById('day').textContent = `${resultDay}`;


/* karena event listeners hanya ditambahkan pada elemen-elemen yang ada saat loop pertama kali dijalankan. Ketika elemen trashList baru ditambahkan setelah itu, event listener tidak secara otomatis ditambahkan ke elemen tersebut. 
SOLUSI : Delegasi Event: Delegasi event memungkinkan kamu untuk menangani event di elemen induk yang ada sejak awal, yang kemudian menangkap klik pada elemen trashList baru yang ditambahkan. */

function deleteTask() {
const trashList = document.querySelectorAll('.trash');
      for(let i = 0; i < trashList.length; i++ ){
          trashList[i].addEventListener('click', function(){
              trashList[i].setAttribute('src','img/checklistpng.png');
              trashList[i].previousElementSibling.style.color = '#D3D3D3';
          });
      }
  }
  deleteTask();

function returnButtonStyle(){
  taskButton.style.opacity = '0';
  setTimeout(() => {
    taskInput.style.width = '0px';
    taskInput.style.width = '';
  }, 300);
  
  setTimeout(() => {
    taskButton.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)';
  taskButton.textContent = 'Add Task';
  taskButton.style.backgroundColor = '#112D4E';
  taskButton.style.color = '#F9F7F7';
  taskButton.style.position = 'static';
  taskButton.style.left = '0';
  taskButton.style.opacity = '1';
  }, 500);
}

function buttonAnimation(){
  
  taskButton.textContent = '';
  let newImgButton = document.createElement('img');
  newImgButton.setAttribute('style','width: 20px; height: 20px;');
  newImgButton.setAttribute('src','img/add.png');
  taskButton.appendChild(newImgButton); 
  
  taskButton.style.backgroundColor = 'transparent';
  taskButton.style.color = '#112D4E';
  taskButton.style.boxShadow = 'none';
  taskButton.style.position = 'relative';
  taskButton.style.left = '100px';
}

taskButton.addEventListener('click',function(){
  
  if(taskInput.style.width === '0' || taskInput.style.width === ''){
      taskButton.style.opacity = '0';
      setTimeout(() => {
      taskInput.style.width = '230px';
      }, 100);
      setTimeout(() => {
        buttonAnimation();
      }, 400);
      setTimeout(() => {
        taskButton.style.opacity = '1';
      }, 700);

  } else{
        let newDiv = document.createElement('div');
        let newSpan = document.createElement('span');
        let newImg = document.createElement('img');
          
        /*
        'trim()'
        - Metode trim() menghapus semua spasi putih di awal dan akhir string.
        - Misalnya, jika pengguna memasukkan " hello world " (dengan spasi di awal dan akhir), trim() akan mengubahnya menjadi "hello world".
        
        !== ''
        - !== adalah operator ketidaksamaan yang memeriksa apakah nilai di sebelah kiri tidak sama dengan nilai di sebelah kanan.
        - '' adalah string kosong, jadi !== '' berarti "tidak sama dengan string kosong."
        */
        if(taskInput.value.trim() !== ''){

          newDiv.classList.add('mt-6', 'flex' , 'justify-between', 'items-center');
          newSpan.classList.add('block', 'text-xs', 'tracking-sm', 'font-light', 'NameList','ease-in-out','duration-400', 'transition-all');
          newImg.setAttribute('src','img/trashpng.png');
          newImg.setAttribute('style','width: 20px; height: 20px;'); 
          newImg.classList.add('self-center','trash','cursor-pointer')
          newSpan.textContent = taskInput.value;
          newDiv.appendChild(newSpan);
          newDiv.appendChild(newImg);
          listParent.appendChild(newDiv);
          setTimeout(() => {
            returnButtonStyle();
            }, 400);
            taskInput.value = '';
          deleteTask();
        } 
        else{
          alert('kolom masih kosong')
          returnButtonStyle();
        }
  }
})
