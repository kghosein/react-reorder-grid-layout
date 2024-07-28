const ReorderedBoxes = ({ box }) => (
  <>
    <h3>Reordered Boxes</h3>
    {"["}
    {box?.map((el) => {
      const id = el?.id + ","
      return id
    })}
    {"]"}
  </>
)

export default ReorderedBoxes
