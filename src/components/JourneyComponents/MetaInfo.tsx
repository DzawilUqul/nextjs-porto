interface MetaInfoProps {
  label: string;
  value: string;
  link?: boolean;
}

const MetaInfo: React.FC<MetaInfoProps> = ({ label, value, link=false }) => {
  return (
    <div className="flex flex-row my-1">
      <div className="bg-violet-950 font-bold text-white rounded-md px-2">
        {label}
      </div>
      {link ? <a href={value} target="_blank" rel="noreferrer noopener" className="ml-2 text-blue-600 font-semibold underline">{value}</a> : <p className="ml-2">{value}</p>}
    </div>
  );
};

export default MetaInfo;
