// src/components/molecules/CardBody.jsx
export default function CardBody({ description, date }) {
    return (
      <div className="bg-white p-4 rounded-b-md shadow-md">
        <p>{description}</p>
        <div className="text-sm text-gray-400 mt-2 flex justify-between">
          <span>Last Updated</span>
          <span>{date}</span>
        </div>
      </div>
    );
  }
  