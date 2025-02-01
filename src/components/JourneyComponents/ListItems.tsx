import type { ListItem } from "@/types/ContentTypes";
import ProjectItem from "./ProjectItem";

interface ListItemProps {
  lists: ListItem[] | undefined;
}

export default function ListItems({ lists }: ListItemProps) {
  return (
    <div>
      {/* Section Title */}
      <ul className="list-disc ml-5">
        {lists && lists.map((list, index: number) => (
          <li key={index}>
            <ProjectItem
              title={list.title}
              description={list.description}
              images={list.images || []} // Provide a default value of an empty array if images is undefined
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
