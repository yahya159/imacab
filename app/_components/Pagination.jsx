import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center px-3 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        <ChevronLeft className="w-5 h-5" />
        Previous
      </button>
      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center px-3 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Next
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

export default Pagination;
