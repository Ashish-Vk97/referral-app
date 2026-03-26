type Props = {
  type?: "error" | "success";
  message: string;
};

export function Alert({ type = "error", message }: Props) {
  const styles =
    type === "error"
      ? "bg-red-100 text-red-700"
      : "bg-green-100 text-green-700";

  return <div className={`p-3 rounded-xl ${styles}`}>{message}</div>;
}