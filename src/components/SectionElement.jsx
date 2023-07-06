// hacer que al pasar el cursor encima aparezcan las skills de ese trabajo/educacion

function SectionElement({each,index}) {
  return (
    <li className={`bg${index}`}>{each}</li>
  )
}

export default SectionElement