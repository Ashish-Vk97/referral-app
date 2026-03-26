export function getErrorMessage(error: any): string {
  if (error?.data?.zodError) return "Invalid form data";
  return error?.message || "Something went wrong";
}