const LOCALSTORAGEKEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

feedbackForm.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(LOCALSTORAGEKEY);
  e.target.reset();
  Object.keys(formData).map(key => {
    formData[key] = '';
  });
});

function restoreFormData() {
  if (localStorage.getItem(LOCALSTORAGEKEY)) {
    formData = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY));
    feedbackForm.elements.email.value = formData.email;
    feedbackForm.elements.message.value = formData.message;
  }
}

restoreFormData();
