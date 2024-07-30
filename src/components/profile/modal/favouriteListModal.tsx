import React, { useEffect, useRef } from 'react';

const FavoriteModal = ({ isOpen, onClose, favoriteQuestions }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Блокировка прокрутки фона
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.body.style.overflow = ''; // Разблокировка прокрутки фона
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-gray-700 p-5 w-1/2 h-4/6 rounded-md relative overflow-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">✕</button>
        <h2 className="text-xl font-bold mb-4">Favorite Questions2</h2>
        <ul>
          {favoriteQuestions.length > 0 ? (
            favoriteQuestions.map((question, index) => (
              <li key={index} className="mb-2">{question.question}</li>
            ))
          ) : (
            <li>No favorite questions</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FavoriteModal;
