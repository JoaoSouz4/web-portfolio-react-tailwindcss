import emailJs from '@emailjs/browser';

async function sendEmail(e, object) {
  e.preventDefault();

  const validation = validationForm(object);
  console.log(validation);
  if (validation.status == false) return validation;

  const { name, message, email } = object;
  const templateParms = {
    from_name: name,
    message: message,
    email: email,
  };
  const res = await emailJs.send(
    'service_tdkvdik',
    'template_8ou0i8e',
    templateParms,
    'f4pWDiQxorRfIzx-L'
  );
  return res;
}

function validationForm(object) {
  const { name, email, message } = object;

  if (name == '' || name == undefined || name == null) {
    return { status: false, message: 'Insira o seu nome, por favor' };
  }

  if (email == '' || email == undefined || email == null) {
    return { status: false, message: 'Certifique-se de informar o seu email' };
  }

  if (message == '' || message == undefined || message == null) {
    return { status: false, message: 'Lembre-se de escrever a mensagem' };
  }

  return true;
}

export default sendEmail;
