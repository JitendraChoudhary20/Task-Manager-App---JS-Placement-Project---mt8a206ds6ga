
const new_task_btn = document.querySelector(".taskbtn");

	const list_el = document.querySelector("#tasks");
	const wrapper_ele = document.querySelector('.wrapper');
	const add = document.querySelector(".btn-outline-info");
    const title = document.querySelector('#title');

    const discription_content = document.querySelector('#discription');

	// let count = tasks.length + 1;

	let status = document.getElementById('status').value;

    

	new_task_btn.addEventListener('click', () => {
	
		wrapper_ele.setAttribute('class', 'show-wrapper');
        
	});


	function renderData(id) {
		
	document.getElementById(id).classList.toggle('popup-task');

		// task_el.setAttribute('class', 'show-popup-');
        
	};


    add.addEventListener('click',()=>{
        if(title.value=="" || discription_content.value==''){
            alert("pls fill detail");
            return;
        }

		const task = title.value;
        const discription_value = discription_content.value;

		const outerdiv = document.createElement('div');
		outerdiv.setAttribute('id','task1');
		outerdiv.classList.add('task');
		outerdiv.setAttribute('draggable','true');
        outerdiv.setAttribute('ondragstart','drag(event)');
		outerdiv.setAttribute('ondblclick',`renderData(${1})`);
		const ptag = document.createElement('p');
		ptag.setAttribute('id','ptask');

		ptag.innerHTML=task;
		const ptag2 = document.createElement('p');
		ptag2.setAttribute('id','pdiscription');
		ptag2.innerHTML = discription_value;
		outerdiv.appendChild(ptag);
		outerdiv.appendChild(ptag2);

		
		

		const task_el = document.createElement('div');
		task_el.classList.add('popup-task','show-popup-task');
		task_el.setAttribute("id","1");
		
        // task_el.setAttribute('ondrag','drag(event)');


		const title_content_el = document.createElement('div');
		title_content_el.classList.add('title_content');


        const discription_content_el = document.createElement('div');
		discription_content_el.classList.add('discription_content');

		const status_content_el = document.createElement('div');
		status_content_el.classList.add('status_content');
		
		

		task_el.appendChild(title_content_el);
        task_el.appendChild(discription_content_el);  
        task_el.appendChild(status_content_el);   


		


		const title_input_el = document.createElement('input');
		title_input_el.classList.add('text','form-control');
		title_input_el.type = 'text';
		title_input_el.value = task;
        title_input_el.setAttribute('id','dragtarget');
        // title_content_el.setAttribute('draggable','true');
        // title_input_el.setAttribute('ondragstart','dragStart(event)');
        // title_input_el.setAttribute('ondrag','dragging(event)');


		title_input_el.setAttribute('readonly', 'readonly');

        const discription_input_el = document.createElement('input');
		discription_input_el.classList.add('text','form-control');
		discription_input_el.type = 'text';
		discription_input_el.value = discription_value;
		discription_input_el.setAttribute('readonly', 'readonly');
        discription_input_el.setAttribute('id','dragtarget2');

		const status_select = document.createElement('select');
		



    
		title_content_el.appendChild(title_input_el);
		discription_content_el.appendChild(discription_input_el);


		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'X';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		const open = document.getElementById("open");

		outerdiv.appendChild(task_el);
		open.appendChild(outerdiv);
		

		title.value = '';
        discription_content.value= '';
		wrapper_ele.setAttribute('class', 'wrapper');


    

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				title_input_el.removeAttribute("readonly");
				title_input_el.focus();
        
			} else {
				task_edit_el.innerText = "Edit";
				title_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			open.removeChild(task_el);
		});



	
    // console.log((obj));
    // tasks.push(obj);
    // count++;
	// renderData();

	});



    let close_btn = document.querySelector(".btn-close");
    close_btn.addEventListener('click',()=>{
        title.value = '';
        discription_content.value= '';
        wrapper_ele.setAttribute('class', 'wrapper');
    });

    
	function allowDrop(event) {
		event.preventDefault();
	}
	
	function drag(event) {
		event.dataTransfer.setData('text', event.target.id);
	}
	
	function drop(event){
		event.preventDefault();
		var data = event.dataTransfer.getData('text');
		event.target.appendChild(document.getElementById(data));
	}

// function renderData(id){
// 	document.getElementById(id).classList.toggle("show-popup");
// }



// 	const localStorageKey = "tasksArray";

// const getTasksArray = () => {
//     let array = localStorage.getItem(localStorageKey);

//     if(!array){
//         return [];
//     }

//     return JSON.parse(array);
// }

// let tasks = getTasksArray();

// const setTasksArray = () => {
//     const array = JSON.stringify(tasks);
//     localStorage.setItem(localStorageKey, array);
// }



	// function renderData(){
	// 	tasks.forEach((obj) =>{
	// 		let outerDiv = document.createElement('div');
	// 		outerDiv.classList.add('createdTasks', 'border-dark-subtle', 'm-2');
	// 		outerDiv.setAttribute('ondblclick', `renderTasksData(${obj.Id})`);
	// 		outerDiv.setAttribute('draggable', 'true');
	// 		outerDiv.setAttribute('ondragstart', 'drag(event)');
	// 		outerDiv.setAttribute('id', `task${obj.Id}`);
	
	// 		let taskTag = document.createElement('p');
	// 		taskTag.innerHTML = obj.Task;
	// 		let discriptionTag = document.createElement('p');
	// 		discriptionTag.innerHTML = obj.Discription;
			
	// 		outerDiv.appendChild(taskTag);
	// 		outerDiv.appendChild(discriptionTag);
	// 		let innnerDiv = document.createElement('div');
	// 		innnerDiv.classList.add('tasks', 'active');
	// 		innnerDiv.setAttribute('id', `${obj.Id}`);
	
	// 		let component1 = document.createElement('div');
	// 		component1.classList.add('mb-3');
	
	// 		let labelcomp1 = document.createElement('label');
	// 		labelcomp1.setAttribute('for', 'task');
	// 		labelcomp1.classList.add('form-label');
	// 		labelcomp1.innerText = 'Title';
	// 		let inputcomp1 = document.createElement('input');
	// 		inputcomp1.setAttribute('type', 'text');
	// 		inputcomp1.classList.add('form-control')
	// 		inputcomp1.value = obj.Task;
	// 		inputcomp1.disabled = true;
	
	// 		component1.appendChild(labelcomp1);
	// 		component1.appendChild(inputcomp1);
	
	// 		innnerDiv.appendChild(component1);
	
	// 		let statusComponent = document.createElement('div');
	// 		statusComponent.classList.add('mb-3');
	
	// 		let statuslabel = document.createElement('label');
	// 		statuslabel.setAttribute('for', `status${obj.Id}`);
	// 		statuslabel.innerHTML = 'Status';
	// 		let selectStatus = document.createElement('select');
	// 		selectStatus.classList.add("form-control");
	// 		selectStatus.setAttribute('id', `status${obj.Id}`);
	// 		let option1 = document.createElement('option');
	// 		option1.setAttribute('value', 'open');
	// 		option1.innerHTML = 'Open';
	// 		let option2 = document.createElement('option');
	// 		option2.setAttribute('value', 'in-progress');
	// 		option2.innerHTML = 'In-Progress';
	// 		let option3 = document.createElement('option');
	// 		option3.setAttribute('value', 'review');
	// 		option3.innerHTML = 'Review';
	// 		let option4 = document.createElement('option');
	// 		option4.setAttribute('value', 'completed');
	// 		option4.innerHTML = 'Completed';
	// 		selectStatus.appendChild(option1);
	// 		if(obj.Status === 'open'){
	// 			selectStatus.value = 'open';
	// 		}
	// 		selectStatus.appendChild(option2);
	// 		if(obj.Status === 'in-progress'){
	// 			selectStatus.value = 'in-progress';
	// 		}
	// 		selectStatus.appendChild(option3);
	// 		if(obj.Status === 'review'){
	// 			selectStatus.value = 'review';
	// 		}
	// 		selectStatus.appendChild(option4);
	// 		if(obj.Status === 'completed'){
	// 			selectStatus.value = 'completed';
	// 		}
	// 		selectStatus.disabled = 'true';
	
	// 		statusComponent.appendChild(statuslabel);
	// 		statusComponent.appendChild(selectStatus);
	
	// 		innnerDiv.appendChild(statusComponent);
	
	
	// 		let component2 = document.createElement('div');
	// 		component2.classList.add('mb-3');
	
	// 		let labelcomp2 = document.createElement('label');
	// 		labelcomp2.setAttribute('for', 'startdate');
	// 		labelcomp2.classList.add('form-label');
	// 		labelcomp2.innerText = 'Start Date';
	
	// 		let inputcomp2 = document.createElement('input');
	// 		inputcomp2.setAttribute('type', 'date');
	// 		inputcomp2.classList.add('form-control')
	// 		inputcomp2.disabled = true;
	// 		inputcomp2.value = obj.StartDate;
	
	// 		component2.appendChild(labelcomp2);
	// 		component2.appendChild(inputcomp2);
	
	// 		innnerDiv.appendChild(component2);
	
	// 		let component3 = document.createElement('div');
	// 		component3.classList.add('mb-3');
	
	// 		let labelcomp3 = document.createElement('label');
	// 		labelcomp3.setAttribute('for', 'endDate');
	// 		labelcomp3.classList.add('form-label');
	// 		labelcomp3.innerText = 'End Date';
	
	// 		let inputcomp3 = document.createElement('input');
	// 		inputcomp3.setAttribute('type', 'date');
	// 		inputcomp3.classList.add('form-control')
	// 		inputcomp3.disabled = true;
	// 		inputcomp3.value = obj.EndDate;
	
	// 		component3.appendChild(labelcomp3);
	// 		component3.appendChild(inputcomp3);
	
	// 		innnerDiv.appendChild(component3);
	
	
	// 		let component4 = document.createElement('div');
	// 		component4.classList.add('mb-3');
	// 		let labelcomp4 = document.createElement('label');
	// 		labelcomp4.setAttribute('for', 'discription');
	// 		labelcomp4.classList.add('form-label');
	// 		labelcomp4.innerText = 'Discription';
	
	// 		let textArea = document.createElement('textarea');
	// 		textArea.classList.add('form-control')
	// 		textArea.setAttribute('rows', '3');
	// 		textArea.setAttribute('style', 'resize: none');
	// 		textArea.value = obj.Discription;
	// 		textArea.disabled = true;
	
	// 		component4.appendChild(labelcomp4);
	// 		component4.appendChild(textArea);
	
	// 		innnerDiv.appendChild(component4);
	
	// 		let component5 = document.createElement('div');
	// 		component5.classList.add('add-btn');
	// 		component5.innerText = 'x';
	// 		component5.setAttribute('onclick', `renderTasksData(${obj.Id})`)
	
	// 		innnerDiv.appendChild(component5);
	
	// 		outerDiv.appendChild(innnerDiv);
	
	// 		document.getElementById(`${obj.Status}`).appendChild(outerDiv);
	
	// 	});
	// }
