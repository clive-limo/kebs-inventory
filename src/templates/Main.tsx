import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-screen max-w-screen-md px-1 text-gray-700 antialiased">
    {props.meta}
    <div className="h-screen w-screen">
      <div className="flex h-full w-full text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };
