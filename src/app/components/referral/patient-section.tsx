

import { FormField, Input } from '../ui/form';

import {
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { ReferralInput } from "@/lib/validators";


type Props = {
  register: UseFormRegister<ReferralInput>;
  errors: FieldErrors<ReferralInput>;
};

export function PatientSection({ register, errors }: Props) {
  return (
    <section>
      <h2 className="section-title">Patient Information</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <FormField label="First Name" error={errors.firstName?.message}>
          <Input {...register("firstName")} />
        </FormField>

        <FormField label="Last Name" error={errors.lastName?.message}>
          <Input {...register("lastName")} />
        </FormField>

        <FormField label="Date of Birth" error={errors.dob?.message}>
          <Input type="date" {...register("dob")} />
        </FormField>

        <FormField label="Phone" error={errors.phone?.message}>
          <Input {...register("phone")} />
        </FormField>

        <FormField label="Email" error={errors.email?.message}>
          <Input {...register("email")} />
        </FormField>
      </div>
    </section>
  );
}