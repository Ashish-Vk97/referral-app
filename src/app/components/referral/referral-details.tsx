// import { FormField, Textarea, Select, RadioGroup } from "@/components/ui/form";

import { FormField,RadioGroup,Select,Textarea } from '../ui/form';

import {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
} from "react-hook-form";
import { ReferralInput } from "@/lib/validators";


type Props = {
  register: UseFormRegister<ReferralInput>;
  errors: FieldErrors<ReferralInput>;
  watch: UseFormWatch<ReferralInput>;
};

export function ReferralDetails({ register, errors, watch }: Props) {
  const complaint = watch("complaint") || "";

  return (
    <section>
      <h2 className="section-title">Referral Details</h2>

      <FormField label="Primary Complaint" error={errors.complaint?.message}>
        <Textarea {...register("complaint")} />
        <p className="text-sm text-gray-400 text-right">
          {complaint.length}/500
        </p>
      </FormField>

      <div className="grid md:grid-cols-2 gap-4">
        <FormField
          label="Clinic Location"
          error={errors.clinicLocation?.message}
        >
          <Select
            options={[
              "Anaheim",
              "Culver City",
              "Downey",
              "El Monte",
              "Long Beach",
              "Los Angeles",
            ]}
            {...register("clinicLocation")}
          />
        </FormField>

        <FormField
          label="Appointment Type"
          error={errors.appointmentType?.message}
        >
          <RadioGroup
            options={["In-Person", "Telemedicine"]}
            register={register("appointmentType")}
          />
        </FormField>
      </div>
    </section>
  );
}