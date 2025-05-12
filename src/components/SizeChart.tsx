import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface SizeChartProps {
  onClose: () => void;
}

const SizeChart: React.FC<SizeChartProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Handle ESC key press
    const handleEscPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    // Handle click outside modal
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscPress);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscPress);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold">Size Chart</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close size chart"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Size</th>
                  <th className="border border-gray-300 p-2 text-left">Chest (in)</th>
                  <th className="border border-gray-300 p-2 text-left">Waist (in)</th>
                  <th className="border border-gray-300 p-2 text-left">Hip (in)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">XS</td>
                  <td className="border border-gray-300 p-2">34-36</td>
                  <td className="border border-gray-300 p-2">27-29</td>
                  <td className="border border-gray-300 p-2">34-36</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2">S</td>
                  <td className="border border-gray-300 p-2">36-38</td>
                  <td className="border border-gray-300 p-2">29-31</td>
                  <td className="border border-gray-300 p-2">36-38</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">M</td>
                  <td className="border border-gray-300 p-2">38-40</td>
                  <td className="border border-gray-300 p-2">31-33</td>
                  <td className="border border-gray-300 p-2">38-40</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2">L</td>
                  <td className="border border-gray-300 p-2">40-42</td>
                  <td className="border border-gray-300 p-2">33-36</td>
                  <td className="border border-gray-300 p-2">40-43</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">XL</td>
                  <td className="border border-gray-300 p-2">42-45</td>
                  <td className="border border-gray-300 p-2">36-40</td>
                  <td className="border border-gray-300 p-2">43-46</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6">
            <h3 className="font-medium mb-2">How to Measure</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape horizontal.</li>
              <li><strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.</li>
              <li><strong>Hip:</strong> Measure around the fullest part of your hips, keeping the tape horizontal.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeChart;