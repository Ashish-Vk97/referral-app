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

export function AttorneySection({ register, errors }: Props) {
  return (
    <section>
      <h2 className="section-title">Attorney Information</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <FormField label="Law Firm" error={errors.lawFirmName?.message}>
          <Input {...register("lawFirmName")} />
        </FormField>

        <FormField label="Attorney Name" error={errors.attorneyName?.message}>
          <Input {...register("attorneyName")} />
        </FormField>

        <FormField label="Attorney Email" error={errors.attorneyEmail?.message}>
          <Input {...register("attorneyEmail")} />
        </FormField>

        <FormField label="Attorney Phone" error={errors.attorneyPhone?.message}>
          <Input {...register("attorneyPhone")} />
        </FormField>
      </div>
    </section>
  );
}