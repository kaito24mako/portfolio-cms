"use client";

function ClientForm() {
  function togglePasswordVisibility() {
    // change state
    // in RegisterForm, if the state is true, change the type of the password form to 'text'
  }

  return <input type="checkbox" onClick={togglePasswordVisibility} />;
}

export default ClientForm;
