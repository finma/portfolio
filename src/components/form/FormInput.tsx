interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

export const FormInput = ({
  id,
  label,
  type,
  placeholder,
  required = false,
}: FormInputProps) => {
  return (
    <div>
      <label
        className='block mb-2 text-sm font-bold tracking-wide text-white'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className='border-red-custom caret-red-custom block px-4 py-3 mb-3 w-full leading-tight text-white bg-transparent rounded border-2 appearance-none focus:bg-transparent focus:outline-none'
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
