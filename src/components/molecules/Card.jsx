// src/components/molecules/CardHeader.jsx
export default function CardHeader({ number, topic, code }) {
    return (
      <div className="flex justify-between items-center px-4 py-2 text-white rounded-t-md bg-red-600">
        <span className="font-bold">🔴 {number}</span>
        <span>{topic}</span>
        <span>{code}</span>
      </div>
    );
  }
  