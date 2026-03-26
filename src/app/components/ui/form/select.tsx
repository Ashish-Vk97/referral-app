type Props = {
  options: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ options, ...props }: Props) {
  return (
    <select {...props} className="input">
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}