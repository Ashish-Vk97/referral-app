type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export function Button({ loading, children, ...props }: Props) {
  return (
    <button {...props} className="btn-primary">
      {loading ? "Submitting..." : children}
    </button>
  );
}