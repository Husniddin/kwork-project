import "../styles/finance-table.css";

const FinanceTable = (props) => {
  return (
    <table className="w-full finance__table">
      <thead className="bg-lightBlue  overflow-hidden ">
        <tr>
          {props.table_header.map((item, i) => (
            <th
              key={i}
              className="text-center py-4 px-[14px] text-white text-[10px] font-extrabold leading-[14px]  "
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.table_body.map((item, i) => (
          <tr key={i}>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[14px]">
              {item.name}
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[14px]">
              {item.ratio}
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[14px]">
              {item.industry}
            </td>
            <td className="py-[10px] px-[14px] text-center">
              <img src={item.trend} alt="trend" />
            </td>
            <td className="text-center text-green font-semibold text-xs leading-[14px] py-[10px] px-[14px]">
              {item.score}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <td
          colSpan="4"
          className="table__footer text-textDarkBlack font-normal text-xs leading-[14px] py-4 text-center"
        >
          {props.table__footer.title}
        </td>
        <td className="py-4 text-white font-semibold text-xs leading-[14px]  text-center bg-[#3CDA73]">
          {props.table__footer.allScore}
        </td>
      </tfoot>
    </table>
  );
};
export default FinanceTable;

{
  /* <div className="">
<div className="flex table__header bg-lightBlue rounded-t-[4px] overflow-hidden">
  {props.table_header.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</div>
{props.table_body.map((item, i) => (
  <ul className="flex">
    <li className="py-4 px-4 border">{item.name}</li>
    <li>{item.ratio}</li>
    <li>{item.industry}</li>
    <li>
      <img src={item.trend} alt="trend" />
    </li>
    <li>{item.score}</li>
  </ul>
))}
</div> */
}
