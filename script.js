// Função para mostrar uma mensagem após o envio do formulário
function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    document.getElementById('formMessage').innerHTML = `Thank you, ${name}! We'll get back to you at ${email}.`;
  } else {
    document.getElementById('formMessage').innerHTML = 'Please fill out both fields.';
  }
}
