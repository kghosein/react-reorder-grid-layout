const RemoveBox = ({ boxId, setBox }) => (
  <button
    type="button"
    className="remove-box"
    onClick={(e) => {
      e.stopPropagation()
      setBox((prev) => prev?.filter((box) => box?.id !== boxId))
    }}
  >
    x
  </button>
)

export default RemoveBox
