import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { FC } from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'warning';
  note: string;
  onDismiss: (dismiss: boolean) => void;
}

const Alert: FC<AlertProps> = ({ type, note, onDismiss }) => {
  const alertTypes: Record<
    string,
    { bgcolor: string; color: string; text: string }
  > = {
    success: {
      bgcolor: 'bg-green-50',
      color: 'text-green-400',
      text: 'text-green-800',
    },
    error: {
      bgcolor: 'bg-red-50',
      color: 'text-red-400',
      text: 'text-red-800',
    },
    warning: {
      bgcolor: 'bg-yellow-50',
      color: 'text-yellow-400',
      text: 'text-yellow-800',
    },
  };

  return (
    <div className={`rounded-md p-4 ${alertTypes[type].bgcolor}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className={`h-5 w-5 ${alertTypes[type].color}`}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium ${alertTypes[type].text}`}>
            {note}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={() => onDismiss(false)}
              className={`inline-flex rounded-md p-1.5 focus:ring-2 ${alertTypes[type].bgcolor} focus:outline-none focus:ring-offset-2`}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
