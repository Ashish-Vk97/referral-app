
import ReferralForm from './components/referral/referral-form';

export default function Home() {
  return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <ReferralForm />
      </div>
    </main>
  );
}
