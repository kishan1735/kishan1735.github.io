interface HomeProjectCardProps {
  image: string;
  title: string;
  description: string;
  path: string;
}

function HomeProjectCard({
  image,
  title,
  description,
  path,
}: HomeProjectCardProps) {
  return (
    <div className="bg-blue-400 rounded-sm inline-block w-fit">
      <a
        href={path}
        target="_blank"
        className="border-4 border-white text-white font-display inline-block h-[455px] bg-black hover:-translate-2 rounded-sm"
      >
        <img src={image} className="h-60 w-auto" />
        <div className="text-2xl font-bold border-t-4 border-t-white p-4 text-blue-300">
          {title}
        </div>
        <div className="text-lg max-w-sm px-4">{description}</div>
      </a>
    </div>
  );
}

export default HomeProjectCard;
