import { SignupForm } from '@/components/organisms';
import Image from 'next/image';

const SignUp = () => {
  return (
    <main className="flex justify-center" style={{ height: '100%' }}>
      <div className="py-5">
        <Image src="/chat-logo.png" width={300} height={300} alt="logo" />
        <SignupForm />
      </div>
    </main>
  );
};

export default SignUp;
