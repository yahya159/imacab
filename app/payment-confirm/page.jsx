import Link from 'next/link';
import { LucideCheckCircle } from 'lucide-react';
import React from 'react';

function PaymentConfirm() {
  return (
    <div className="flex flex-col items-center justify-center px-5 mt-4">
      <LucideCheckCircle size={200} className="text-green-500" />
      <h2 className="text-[24px] mt-4">Payment Successful!</h2>
      <h2 className="text-[17px] text-center mt-6 text-gray-500">
        We sent an email with your order confirmation along with digital content.
      </h2>
      <Link href="/" className="p-2 mt-6 text-white rounded-md bg-blue-500">
        Go to Home
      </Link>
    </div>
  );
}

export default PaymentConfirm;
