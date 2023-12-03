import { LoginForm } from '@/components/organisms/LoginForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex justify-center" style={{ height: '100%' }}>
      <div className="py-5">
        <Image src="/chat-logo.png" width={300} height={300} alt="logo" />
        <LoginForm />
      </div>
    </main>
  );
}
