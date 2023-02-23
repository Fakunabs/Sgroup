// const form = {
//     selectors: {
//         popup: '.popup',
//         form: '.form',
//         formAdd: {
//             selector: '.form-add',
//             inputs: ['#category', '#title', '#content'],
//         },
//         formEdit: {
//             selector: '.form-edit',
//             inputs: ['#edit-category', '#edit-title', '#edit-content'],
//         },
//         closeBtn: '.btn-close',
//         todo: null,
//     },
//     validator: {
//         validate: function(inputElement, rule) {
//             const isValid = rule.test(inputElement.value)
//             if (!isValid) {
//                 inputElement.classList.remove('valid')
//                 inputElement.classList.add('invalid')
//             } else {
//                 inputElement.classList.add('valid')
//             }
//             return isValid;
//         },
//         isRequired: function(selector) {
//             return {
//                 selector: selector,
//                 test: function(value) {
//                     return value !== ''
//                 }
//             }
//         }
//     },
//     handleInput: function(rules) {
//         rules.forEach(rule => {
//             const inputElement = $(rule.selector);
//             inputElement.onblur = () => this.validator.validate(inputElement, rule);
//             inputElement.oninput = () => inputElement.classList.remove('invalid');
//         })
//     },
//     handleDate() {
//         const date = new Date();
//         const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         const time = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
//         return time;
//     },
//     handleFormData(inputElements) {
//         const formData = inputElements.reduce(function(value, input) {
//             value[input.dataset.key] = input.value;
//             return value;
//         }, {})
//         const time = this.handleDate();
//         const data = {
//             ...formData,
//             time: time,
//             state: formData.state || 0,
//             id: ('id-' + Math.random()).split('.').join(''), // remove dot in id
//         }
//         return data;
//     },
//     handleSubmit: function(e, rules, type) {
//         e.preventDefault();
//         let isFormValid = true;
//         rules.forEach(rule => {
//             const inputElement = $(rule.selector);
//             const isValid = this.validator.validate(inputElement, rule);
//             if (!isValid) return isFormValid = false;
//         });

//         if (isFormValid) {
//             let formData = {};
//             const inputElements = rules.map(rule => $(rule.selector));
//             formData = this.handleFormData(inputElements);

//             // this.todo is null when add new todo, not null when edit todo
//             if (this.todo) { 
//                 const radioInputs = $('.select').querySelector('input:checked');
//                 formData = {...formData, id: this.todo.id, state: Number.parseInt(radioInputs.value)};
//                 this.todo = null;
//             }
//             const event = new CustomEvent(type, {detail: formData})
//             window.dispatchEvent(event);
//         }
//         return isFormValid;
//     },
//     clearForm: function(inputElements) {
//         inputElements.forEach(element => {
//             element.classList.remove('invalid');
//             element.classList.remove('valid');
//             element.value = '';
//         })
//     },
//     handleEvent: function(formSelector, rules, type) {
//         const popup = $(this.selectors.popup);
//         const form = $(formSelector);
//         const closeBtn = form.querySelector('.btn-close');
//         const inputElements = rules.map(rule => $(rule.selector));

//         // Prevent form close when click on form
//         form.onmousedown = (e) => e.stopPropagation();
//         form.onsubmit = (e) => {
//             const isValid = this.handleSubmit(e, rules, type);
//             if (!isValid) return;
//             this.clearForm(inputElements);
//             popup.classList.remove('visible');
//             form.classList.remove('visible');
//         }

//         // Get data from todo item for editting
//         // Should have just get the id but anyway, lazy to change
//         window.addEventListener('editTodo', (e) => {
//             this.todo = e.detail;
//         });

//         closeBtn.onclick = () => {
//             this.clearForm(inputElements);
//             popup.classList.remove('visible');
//             form.classList.remove('visible');
//             this.todo = null;
//         }
//         popup.onmousedown = () => { // Make popup close when mouse down on popup, not when mouse up
//             const inputSelector = [...this.selectors.formAdd.inputs, ...this.selectors.formEdit.inputs].map(selector => $(selector));
//             this.clearForm(inputSelector);
//             popup.classList.remove('visible');
//             form.classList.remove('visible');
//             this.todo = null;
//         }

//     },
//     start: function() {
//         const isRequired = this.validator.isRequired;

//         const formAdd = this.selectors.formAdd;
//         const formAddRules = formAdd.inputs.map(selector => isRequired(selector));
//         const formEdit = this.selectors.formEdit;
//         const formEditRules = formEdit.inputs.map(selector => isRequired(selector));
//         this.handleInput(formAddRules);
//         this.handleEvent(formAdd.selector, formAddRules, 'formAdd');
//         this.handleInput(formEditRules);
//         this.handleEvent(formEdit.selector, formEditRules, 'formEdit');
//     },
// }

const addNewTask = document.getElementsByClassName('btn-add');
const closeNewTask = document.getElementsByClassName('btn-close');
const submit = document.getElementById('submit');
const form = document.getElementsByClassName('form-add');

addNewTask[0].addEventListener('click', () => {
    console.log("a");
    const popup = document.getElementsByClassName('popup');
    const formAdd = document.getElementsByClassName('form-add');
    popup[0].classList.add('visible');
    formAdd[0].classList.add('visible');
});

closeNewTask[0].addEventListener('click', () => {
    const popup = document.getElementsByClassName('popup');
    const formAdd = document.getElementsByClassName('form-add');
    popup[0].classList.remove('visible');
    formAdd[0].classList.remove('visible');
});

form.addEventListener("submit", function() {
    
});


