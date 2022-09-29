import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();
  return (
    <Main
      meta={
        <Meta
          title="KEBS Inventory System"
          description="This is the kebs inventory management system"
        />
      }
    >
      <div className="m-auto flex h-[423px] w-[381px] flex-col rounded-[30px] bg-white shadow-2xl">
        <div className="flex h-[30%] w-full flex-col">
          <h1 className="mt-5 w-full p-1 text-center text-3xl font-bold text-black">
            Welcome
          </h1>
          <p className="w-full text-center text-sm text-gray-500">
            Already a use? Sign in with your and password
          </p>
        </div>
        <div className="flex h-[70%] flex-col px-10">
          <input
            placeholder="email"
            className="my-2 w-full rounded-[10px] bg-gray-200 p-3 text-center text-sm text-black placeholder:text-gray-600"
          />
          <input
            placeholder="password"
            className="my-2 w-full rounded-[10px] bg-gray-200 p-3 text-center text-sm text-black placeholder:text-gray-600"
          />
          <button
            className="my-5 rounded-[10px] bg-teal-700 p-3 text-sm font-bold text-white"
            onClick={() => router.push('/home')}
          >
            Sign In
          </button>
          <p className="w-full text-center text-sm text-gray-500">
            Powered By <a className="font-bold">Velt.io</a>
          </p>
        </div>
      </div>
    </Main>
  );
};

export default Index;
