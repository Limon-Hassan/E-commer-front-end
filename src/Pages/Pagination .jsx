import React from 'react';

const Pagination = () => {
  return (
    <>
      <ul class="inline-flex -space-x-px text-sm">
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-slate-600 border border-e-0 border-gray-300 rounded-s-lg hover:bg-slate-400 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-black/20 dark:hover:text-white"
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-slate-600 bg-slate-400 border border-gray-300 hover:bg-slate-400 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-black/20 dark:hover:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-slate-600 bg-slate-400 border border-gray-300 hover:bg-slate-400 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-black/20 dark:hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            class="flex items-center justify-center px-3 h-8 leading-tight text-slate-600 bg-slate-400 border border-gray-300 hover:bg-slate-400 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-black/20 dark:hover:text-white"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-slate-600 bg-slate-400 border border-gray-300 hover:bg-slate-400 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-black/20 dark:hover:text-white"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-slate-600 bg-slate-400 border border-gray-300 hover:bg-slate-400 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-black/20 dark:hover:text-white"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-slate-600 bg-white border border-gray-300 rounded-e-lg hover:bg-slate-400 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-black/20 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
