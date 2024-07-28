const AddBox = ({ setBox }) => (
  <button
    type="button"
    className="add-box"
    onClick={() =>
      setBox((prev) => {
        const id =
          prev?.length >= 1 ? Math.max(...prev?.map((box) => box?.id)) + 1 : 1
        return [...prev, { id: id }]
      })
    }
  >
    Add Box
  </button>
)

export default AddBox
