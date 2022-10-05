import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-screen w-screen max-w-screen-xl px-1 text-gray-700 antialiased mx-auto">
    {props.meta}
    <div className="flex h-[100%] w-[100%] flex-col text-screen">
      {props.children}
    </div>
  </div>
);

export { Main };
