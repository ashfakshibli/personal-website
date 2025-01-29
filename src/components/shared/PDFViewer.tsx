import React from 'react';
import { X } from 'lucide-react';

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full h-full max-w-5xl p-4 md:p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg"
        >
          <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        {/* PDF Viewer */}
        <div className="w-full h-full bg-white rounded-lg shadow-xl overflow-hidden">
          <iframe
            src="/Ashfak_Resume_2025.pdf#toolbar=0"
            className="w-full h-full"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;