import { useSortable } from "@dnd-kit/sortable"
import RemoveBox from "./RemoveBox"
import { CSS } from "@dnd-kit/utilities"

const SortableItem = ({ id, setBox }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="boxes__box"
    >
      {!isDragging && (
        <>
          <span>{id}</span>
          <RemoveBox boxId={id} setBox={setBox} />
        </>
      )}
    </div>
  )
}

export default SortableItem
