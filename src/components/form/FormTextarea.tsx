interface FormTextareaProps {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
}

export const FormTextarea = ({
  id,
  label,
  placeholder,
  required = false,
}: FormTextareaProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className='block mb-2 text-sm font-bold tracking-wide text-white'
      >
        {label}
      </label>
      <textarea
        className='border-red-custom caret-red-custom block px-4 py-3 mb-3 w-full h-32 leading-tight text-white bg-transparent rounded border-2 appearance-none resize-none focus:bg-transparent focus:outline-none'
        id={id}
        name={id}
        placeholder={placeholder}
        rows={4}
        required={required}
      />
    </div>
  );
};
