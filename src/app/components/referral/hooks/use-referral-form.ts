import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { referralSchema, ReferralInput } from "@/lib/validators";
import { trpc } from "@/lib/trpc-client";
import toast from "react-hot-toast";

export function useReferralForm() {
  const mutation = trpc.referral.submitReferral.useMutation();

  const form = useForm<ReferralInput>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      phone: "",
      email: "",
      lawFirmName: "",
      attorneyName: "",
      attorneyEmail: "",
      attorneyPhone: "",
      complaint: "",
      clinicLocation: "Anaheim",
      appointmentType: "In-Person",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data, {
      onSuccess: (res) => {
        toast.success(`✅ ${res.message}`);
        form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      onError: (err) => {
        toast.error(err.message || "Something went wrong");
      },
    });
  });

  return {
    register: form.register,
    watch: form.watch,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    isLoading: mutation.isPending,
    onSubmit,
  };
}



 