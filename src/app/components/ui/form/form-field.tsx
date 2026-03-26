type Props = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

export function FormField({ label, error, children }: Props) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
      {error && <p className="error">{error}</p>}
    </div>
  );
}