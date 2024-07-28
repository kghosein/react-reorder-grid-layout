import { useState } from "react"
import AddBox from "./AddBox"
import SortableItem from "./SortableItem"
import {
  closestCenter,
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable"
import ReorderedBoxes from "./ReorderedBoxes"

const Boxes = () => {
  const [box, setBox] = useState([])
  const [activeId, setActiveId] = useState(null)

  const sensors = useSensors(
    useSensor(MouseSensor, {
      delay: 250,
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      delay: 250,
      activationConstraint: {
        distance: 10,
      },
    })
  )

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id !== over.id) {
      setBox((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }

    setActiveId(null)
  }

  const handleDragStart = (event) => {
    const { active } = event
    setActiveId(active.id)
  }

  return (
    <>
      <AddBox setBox={setBox} />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={box} strategy={rectSortingStrategy}>
          <div className="boxes">
            <div className="boxes__wrapper">
              {box?.map((el) => (
                <SortableItem key={el?.id} id={el?.id} setBox={setBox} />
              ))}
            </div>
          </div>
        </SortableContext>
        <DragOverlay>
          {activeId ? (
            <div className="boxes__box">
              <span>{activeId}</span>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
      <ReorderedBoxes box={box} />
    </>
  )
}

export default Boxes
