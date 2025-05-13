import React from 'react';

export default function NavFooter() {
  return (
    <div className="flex w-full justify-between text-xs gap-10">
      <a href="#" className="hover:text-gray-300 transition-colors">Awwwards</a>
      <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
      <a href="#" className="hover:text-gray-300 transition-colors">Dribble</a>
      <a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a>
    </div>
  );
}