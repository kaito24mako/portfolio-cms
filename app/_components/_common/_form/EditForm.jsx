function EditForm({ title, children }) {
  return (
    <form>
      <fieldset className="shadow-sm p-4 rounded-sm bg-base-200 text-sm lg:text-base">
        <legend className="font-medium rounded-lg bg-base-300 px-4 py-1 text-sm">
          {title}
        </legend>
        {children}
      </fieldset>
    </form>
  );
}

export default EditForm;
