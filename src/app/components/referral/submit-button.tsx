type Props = {
  isLoading: boolean;
};

export function SubmitButton({ isLoading }: Props) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {isLoading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      )}

      {isLoading ? "Submitting..." : "Submit Referral"}
    </button>
  );
}