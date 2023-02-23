// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// // TODO: chia todo theo 3 state
// const app = {
//     data: {
//         todos: [
//             {
//                 category: 'Marketing',
//                 title: 'Write SEO article for new product',
//                 content: 'This is an existential moment for effective altruism and the rationalist community writ-large.',
//                 time: 'June 30, 2022',
//                 state: 0,
//                 id: 'id-1',
//             },
//             {
//                 category: 'Marketing',
//                 title: 'Write SEO article for new product',
//                 content: 'This is an existential moment for effective altruism and the rationalist community writ-large.',
//                 time: 'June 30, 2022',
//                 state: 1,
//                 id: 'id-2',
//             },
//             {
//                 category: 'Marketing',
//                 title: 'Write SEO article for new product',
//                 content: 'This is an existential moment for effective altruism and the rationalist community writ-large.',
//                 time: 'June 30, 2022',
//                 state: 2,
//                 id: 'id-3',
//             },
//         ],
//     },
//     selector: {
//         openformBtn: '.btn-add',
//         popup: '.popup',
//         deleteBtn: '.delete-btn',
//         containerList: ['#todo', '#doing', '#finished'],
//     },
//     setTodos: function() {
//         const json = JSON.stringify(this.data);
//         localStorage.setItem('todos', json);
//     },
//     getTodos: function() {
//         const json = localStorage.getItem('todos');
//         if (!json) return;
//         this.data = JSON.parse(json);
//     },
//     htmlConvert: function (item) {
//         const html = `
//         <div class="box" id="${item.id}">
//             <div class="box-head">
//                 <div class="box-title">
//                     <div class="category">${item.category}</div>
//                     <h3 class="title">${item.title}</h3>
//                 </div>
//                 <div class="box-action">
//                     <div class="icon">
//                         <img class="edit-btn" src="./static/Edit.png" alt="edit" data-id="${item.id}">
//                     </div>
//                     <div class="icon">
//                         <img class="delete-btn" src="./static/Delete.png" alt="delete" data-id="${item.id}">
//                     </div>
//                 </div>
//             </div>
//             <div class="box-divider"></div>
//             <div class="box-body">
//                 <p class="box-desc content">
//                     ${item.content}
//                 </p>
//                 <div class="box-time">
//                     <img src="./static/time.png" alt="time">
//                     <span>${item.time}</span>
//                 </div>
//             </div>
//         </div>
//         `
//         return html;
//     },
//     deleteTodos: function(id) {
//         const selector = '#' + id;
//         const element = $(selector);
//         element.remove();
//         this.data.todos = this.data.todos.filter(todo => todo.id !== id);
//     },
//     addTodos: function(todo) {
//         const container = $('#todo');
//         const html = this.htmlConvert(todo);
//         container.innerHTML = container.innerHTML + html;
//         this.handleEvent();
//         this.data.todos.push(todo);
//     },
//     editTodos: function(data) {
//         const selector = '#' + data.id;
//         const element = $(selector);
//         const oldTodo = this.data.todos.find(todo => todo.id === data.id);
//         if (oldTodo.state != data.state) {
//             const oldContainer = $(this.selector.containerList[oldTodo.state]);
//             const newContainer = $(this.selector.containerList[data.state]);
//             oldContainer.removeChild(element);
//             newContainer.appendChild(element);
//         }
//         for (let key in data) {
//             // Skip id, time, state as they are not in the element
//             if (key === 'id' || key === 'time' || key === 'state') continue;
//             element.querySelector(`.${key}`).innerHTML = data[key];
//         }
//         // Should have check if the data is changed, if not, no need to update the data but I'm lazy
//         this.data.todos = this.data.todos.map(todo => {
//             if (todo.id === data.id) {
//                 return data;
//             }
//             return todo;
//         });
//     },
//     updateCounter() {
//         const todoCounter = $('#todo-counter');
//         const doingCounter = $('#doing-counter');
//         const finishedCounter = $('#finished-counter');
//         const todoList = this.data.todos;
//         todoCounter.innerHTML = todoList.filter(todo => todo.state === 0).length;
//         doingCounter.innerHTML = todoList.filter(todo => todo.state === 1).length;
//         finishedCounter.innerHTML = todoList.filter(todo => todo.state === 2).length;
//     },
//     handleEvent: function() {
//         const popup = $(this.selector.popup);
//         const addBtn = $(this.selector.openformBtn);
//         const form = $$('.form');
//         const deleteBtnList = $$('.delete-btn');
//         const editBtnList = $$('.edit-btn');

//         addBtn.onclick = () => {
//             popup.classList.add('visible');
//             form[0].classList.add('visible');
//             // Clear all valid and invalid class before open edit form, due to form validation will add valid and invalid class
//             Array.from($$('.valid')).forEach(item => item.classList.remove('valid'));
//             Array.from($$('.invalid')).forEach(item => item.classList.remove('invalid'));
//         }

//         window.addEventListener('formAdd', (e) => {
//             // Prevent formAdd event trigger twice
//             e.stopImmediatePropagation();
//             const data = e.detail;
//             this.addTodos(data);
//             this.setTodos();
//             this.updateCounter();
//         });
//         window.addEventListener('formEdit', (e) => {
//             // Prevent formEdit event trigger twice 
//             e.stopImmediatePropagation();
//             const data = e.detail;
//             this.editTodos(data);
//             this.setTodos();
//             this.updateCounter();
//         });

//         Array.from(deleteBtnList).forEach(btn => {
//             btn.onclick = (e) => {
//                 const id = e.target.dataset.id;
//                 this.deleteTodos(id);
//                 this.setTodos();
//             }
//         });

//         Array.from(editBtnList).forEach(btn => {
//             btn.onclick = (e) => {
//                 // Clear all valid and invalid class before open edit form, due to form validation will add valid and invalid class
//                 Array.from($$('.valid')).forEach(item => item.classList.remove('valid'));
//                 Array.from($$('.invalid')).forEach(item => item.classList.remove('invalid'));
//                 popup.classList.add('visible');

//                 // Form[1] refer to the edit form
//                 form[1].classList.add('visible');
//                 const id = e.target.dataset.id;
//                 const todo = this.data.todos.find(todo => todo.id === id);
//                 const editFormSelector = ['#edit-category', '#edit-title', '#edit-content'];
//                 const radioSelector = '.select';
//                 editFormSelector.forEach((selector, index) => {
//                     $(selector).value = todo[Object.keys(todo)[index]];
//                 });
//                 const radioInputs = $(radioSelector).querySelectorAll('input');
//                 Array.from(radioInputs).find(input => input.value == todo.state).checked = true;

//                 // Sending todo data to form validation
//                 const event = new CustomEvent('editTodo', {detail: todo})
//                 window.dispatchEvent(event);
//             }
//         })
//     },
//     render() {
//         const _this = this;
//         const data = this.data;
//         const containerList = [...this.selector.containerList];

//         this.updateCounter();
//         // 3 refers to 3 states: Doing / Todo / Finished
//         for (let i = 0; i < 3; i++) {
//             const container = $(containerList[i]);
//             const filteredTodo = data.todos.filter(todo => todo.state % 3 === i);
//             const html = filteredTodo.map(todo => _this.htmlConvert(todo)).join('');
//             container.innerHTML = html;
//         }
//     },
//     start: function() {
//         // localStorage.setItem('todos', JSON.stringify(this.data));
//         form.start();
//         this.getTodos();
//         this.render();
//         this.handleEvent();
//     }
// }
// app.start();