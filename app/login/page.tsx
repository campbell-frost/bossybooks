import logo from '/public/bossybookslogo3.jpg'
import Image from 'next/image'
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center h-screen">
            <div className="relative mx-auto rounded-md flex w-full bg-white-50 shadow-lg max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-end p-3 md:h-36">
                    <div className=" text-white ">
                        <Image
                            src={logo}
                            alt="bossy books logo"
                            height="200"
                            width="600"
                        />
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}
