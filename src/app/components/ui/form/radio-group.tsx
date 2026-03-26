type Props = {
  options: string[];
  register: any;
};

export function RadioGroup({ options, register }: Props) {
  return (
    <div className="flex gap-6 mt-2">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2">
          <input type="radio" value={opt} {...register} />
          {opt}
        </label>
      ))}
    </div>
  );
}