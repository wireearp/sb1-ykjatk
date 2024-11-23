import React from 'react';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}
interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}
interface TableHeadProps extends React.HTMLAttributes<HTMLTableCellElement> {}
interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {}

export function Table({ className, ...props }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table
        className="w-full divide-y divide-gray-200"
        {...props}
      />
    </div>
  );
}

export function TableHeader({ className, ...props }: TableHeaderProps) {
  return <thead className="bg-gray-50" {...props} />;
}

export function TableBody({ className, ...props }: TableBodyProps) {
  return <tbody className="divide-y divide-gray-200 bg-white" {...props} />;
}

export function TableRow({ className, ...props }: TableRowProps) {
  return <tr className={className} {...props} />;
}

export function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: TableCellProps) {
  return <td className="px-6 py-4 whitespace-nowrap" {...props} />;
}