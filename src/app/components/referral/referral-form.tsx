
"use client";

import { PatientSection } from "./patient-section";
import { AttorneySection } from "./attorney-section";
import { ReferralDetails } from "./referral-details";

import { useReferralForm } from './hooks/use-referral-form';
import { SubmitButton } from './submit-button';

export default function ReferralForm() {
  const { register, errors, watch, onSubmit, isLoading } =
    useReferralForm();

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
     

      <form
        onSubmit={onSubmit}
        className="space-y-8"
      >
      <PatientSection register={register} errors={errors} />
      <AttorneySection register={register} errors={errors} />
      <ReferralDetails
        register={register}
        errors={errors}
        watch={watch}
      />

      <SubmitButton isLoading={isLoading} />
    </form>
    </div>
  );
}