const addButton = document.getElementById('addTaskButton'); //new task
const closeAddTaskButton = document.getElementById('closeAddTask');

const popupAddTaskForm = () => {
    document.getElementById('addTaskWrapper').classList.toggle('show-wrapper')
    document.getElementById('addTaskWrapper').classList.toggle('wrapper')
}

addButton.addEventListener('click', popupAddTaskForm);
closeAddTaskButton.addEventListener('click', popupAddTaskForm);


const addTaskButton = document.getElementById('addTask');

// const localStorageKey = "tasks";

const getTasksArray = () => {
    let array = localStorage.getItem('tasks');

    if(!array){
        return [];
    }

    return JSON.parse(array);
}

let tasksArray = getTasksArray();
let count = 1;
if(tasksArray.length != 0){
	count = tasksArray[tasksArray.length - 1].id + 1;
}

const setTasksArray = () => {
    const array = JSON.stringify(tasksArray);
    localStorage.setItem('tasks', array);
}

const createTaskObject = () => {
    let title = document.getElementById('title');
    let status =document.getElementById('status');
    let discription = document.getElementById('discription');

    if(title.value === '' || discription.value === ''){
        alert('Title or Discription should not be empty');
        return;
    }

    let obj = {
        id : count,
        title : `${title.value}`,
        status : `${status.value}`,
        discription : `${discription.value}`
    }

    tasksArray.push(obj);
	setTasksArray();

    title.value = '';
    discription.value = '';
    status.value = 'open';

    count++;

    popupAddTaskForm(); 

    renderData();
}
const clearInnerHtml = () => {
    document.getElementById('open').innerHTML = '';
    document.getElementById('in-progress').innerHTML = '';
    document.getElementById('review').innerHTML = '';
    document.getElementById('completed').innerHTML = '';
}

const showDetailTask=(id)=>{
       document.getElementById(id).classList.toggle('show-popup-task');
};
const DeleteTask=(id)=>{
	tasksArray=	tasksArray.filter((obj)=>{
		if(id != obj.id){
			return obj;
		}
	})
	setTasksArray();
	renderData();
}

const renderData = () => {
    clearInnerHtml();
    tasksArray.forEach((obj) => {
        const outerdiv = document.createElement('div');
		outerdiv.setAttribute('id',`task${obj.id}`);
		outerdiv.classList.add('task');
		outerdiv.setAttribute('draggable','true');
        outerdiv.setAttribute('ondragstart','drag(event)');
		outerdiv.setAttribute('ondblclick',`showDetailTask(${obj.id})`);

		const ptag = document.createElement('p');
		ptag.setAttribute('id','ptask');
		ptag.innerHTML= obj.title;

		const ptag2 = document.createElement('p');
		ptag2.setAttribute('id','pdiscription');
		ptag2.innerHTML = obj.discription;

		const delouterbtn = document.createElement('button');
		delouterbtn.setAttribute('id','delouterdiv');
		delouterbtn.classList.add("btn-del-div");
		delouterbtn.innerHTML='Delete';
		delouterbtn.setAttribute('onclick',`DeleteTask(${obj.id})`);

		outerdiv.appendChild(ptag);
		outerdiv.appendChild(ptag2);
		outerdiv.appendChild(delouterbtn);


		const innerDiv = document.createElement('div');
	    innerDiv.classList.add('popup-task','show-popup-task');
	    innerDiv.setAttribute("id",`${obj.id}`);
		
		const title_content_el = document.createElement('div');
		title_content_el.classList.add('title_content');

        const titlelabel = document.createElement('label');
		titlelabel.innerHTML = 'Title';

        const title_input_el = document.createElement('input');
		title_input_el.classList.add('text','form-control');
		title_input_el.type = 'text';
		title_input_el.value = obj.title;
        title_input_el.setAttribute('id',`title${obj.id}`);
        title_input_el.setAttribute('readonly', 'readonly');

        title_content_el.appendChild(titlelabel);
		title_content_el.appendChild(title_input_el);

        innerDiv.appendChild(title_content_el);


        const discription_content_el = document.createElement('div');
		discription_content_el.classList.add('discription_content');

        const discriptionlabel = document.createElement('label');
		discriptionlabel.innerHTML = 'Discription';

        const discription_input_el = document.createElement('input');
		discription_input_el.classList.add('text','form-control');
		discription_input_el.type = 'text';
		discription_input_el.value = obj.discription;
		discription_input_el.setAttribute('readonly', 'readonly');
        discription_input_el.setAttribute('id',`discription${obj.id}`);

        discription_content_el.appendChild(discriptionlabel);
		discription_content_el.appendChild(discription_input_el);

        innerDiv.appendChild(discription_content_el);



		const statusComponent = document.createElement('div');
		statusComponent.classList.add('mb-3');

        const statuslabel = document.createElement('label');
		statuslabel.setAttribute('for', 'status1');
		statuslabel.innerHTML = 'Status';
		const selectStatus = document.createElement('select');
		selectStatus.classList.add("form-control");
		selectStatus.setAttribute('id', `status${obj.id}`);
        selectStatus.disabled = true;
		const option1 = document.createElement('option');
		option1.setAttribute('value', 'open');
		option1.innerHTML = 'Open';
        if(obj.status == 'open'){
            option1.selected = true;
        }
		const option2 = document.createElement('option');
		option2.setAttribute('value', 'in-progress');
		option2.innerHTML = 'In-Progress';
        if(obj.status == 'in-progress'){
            option2.selected = true;
        }
		const option3 = document.createElement('option');
		option3.setAttribute('value', 'review');
		option3.innerHTML = 'Review';
        if(obj.status == 'review'){
            option3.selected = true;
        }
		const option4 = document.createElement('option');
		option4.setAttribute('value', 'completed');
		option4.innerHTML = 'Completed';
        if(obj.status == 'completed'){
            option4.selected = true;
        }

        selectStatus.appendChild(option1);
        selectStatus.appendChild(option2);
        selectStatus.appendChild(option3);
        selectStatus.appendChild(option4);

        statusComponent.appendChild(statuslabel);
		statusComponent.appendChild(selectStatus);

        innerDiv.appendChild(statusComponent);   


       outerdiv.appendChild (innerDiv);



        


		// const task_actions_el = document.createElement('div');
		// task_actions_el.classList.add('actions');
		
		// const task_edit_el = document.createElement('button');
		// task_edit_el.classList.add('edit-btn');
		// task_edit_el.innerText = 'Edit';

		// const task_delete_el = document.createElement('button');
		// task_delete_el.classList.add('remove-btn');
		// task_delete_el.innerText = 'Remove';

		// task_actions_el.appendChild(task_edit_el);
		// task_actions_el.appendChild(task_delete_el);

	    // innerDiv.appendChild(task_actions_el);

		const toAppend = document.getElementById(`${obj.status}`);

        toAppend.appendChild(outerdiv)

        

		// task_edit_el.addEventListener('click', (e) => {
		// 	if (task_edit_el.innerText.toLowerCase() == "edit") {
		// 		task_edit_el.innerText = "Save";
		// 		title_input_el.removeAttribute("readonly");
		// 		title_input_el.focus();
        
		// 	} else {
		// 		task_edit_el.innerText = "Edit";
		// 		title_input_el.setAttribute("readonly", "readonly");
		// 	}
		// });

		// task_delete_el.addEventListener('click', (e) => {
		// 	outerdiv.removeChild (innerDiv);
		// });
		
    })
}

renderData();
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    //task1
    let taskId = Number(data.charAt(4));
    tasksArray.forEach((obj) => {
        if(obj.id == taskId){
            obj.status = event.target.id;
        }
    })
    event.target.appendChild(document.getElementById(data));
	setTasksArray();
    renderData();
}

addTaskButton.addEventListener('click', createTaskObject);

