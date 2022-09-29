import type { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="flex h-8 w-full flex-row">
      <p className="flex-[0.2]">Inventory</p>
      <div className="flex-[0.6]">Search</div>
      <div className="flex-[0.1]">Other</div>
    </div>
  );
};

export default Header;
