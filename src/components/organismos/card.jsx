import CardHeader from '../molecules/Card';
import CardBody from '../molecules/Cardcuerpo';

export default function Card({ number, topic, code, description, date, color }) {
  return (
    <div className="w-full max-w-md rounded-md overflow-hidden shadow-lg mb-4">
      <CardHeader number={number} topic={topic} code={code} color={color} />
      <CardBody description={description} date={date} />
    </div>
  );
}
