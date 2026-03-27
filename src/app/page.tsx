
import ReferralForm from './components/referral/referral-form';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            SYNERGEX MED PORTAL
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Submit your patient referral to the portal
          </p>
        </div>

        <ReferralForm />
      </div>
    </main>
  );
}
