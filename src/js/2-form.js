const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  formData = JSON.parse(saved);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  const json = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, json);
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
