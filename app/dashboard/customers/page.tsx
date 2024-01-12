'use client';

import { useParams } from 'next/navigation';

const CustomersPage = () => {
  const params = useParams();
  return (
    <>
      <p>Customers Page</p>
    </>
  );
};

export default CustomersPage;
