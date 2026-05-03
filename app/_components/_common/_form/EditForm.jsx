function EditForm({ title, children }) {
  return (
    <form className="flex flex-col gap-6">
      <fieldset className="border p-4 rounded-md">
        <legend className="font-semibold">{title}</legend>
        {children}
      </fieldset>
    </form>
  );
}

export default EditForm;
