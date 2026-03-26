
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
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          Synergex Med Portal
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          Submit your patient referral to the portal
        </p>
      </div>

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