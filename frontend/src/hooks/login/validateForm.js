export const validateForm = (form, target) => {
 let errors = {};
 const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 const regexPassword = /^.{6,12}$/; // 6 to 12 digits

 const emailValidation = () => {
  if (!form.email.trim()) {
   errors.email = 'El correo electrónico no puede estar vacío';
  } else if (!regexEmail.test(form.email.trim())) {
   errors.email = 'Parece que esto no es un correo electrónico.';
  } else {
   errors.email = true;
  }
 };

 const passwordValidation = () => {
  if (!form.password.trim()) {
   errors.password = 'La contraseña no puede estar vacía';
  } else if (!regexPassword.test(form.password.trim())) {
   errors.password = 'La contraseña debe contener mínimo 6 dígitos, máximo 12';
  } else {
   errors.password = true;
  }
 };

 const validateAll = () => {
  emailValidation();
  passwordValidation();
 };

 const selectValidation = (target) => {
  const validations = {
   email: emailValidation,
   password: passwordValidation,
   undefined: validateAll,
  };

  const select = validations[target];

  return select();
 };

 selectValidation(target);

 return errors;
};
