import "../../styles/finance-table.css";

const FinanceTable = (props) => {
  return (
    <table className="w-[372px] finance__table">
      <thead className="bg-lightBlue  overflow-hidden ">
        <tr>
          {props.table_header.map((item, i) => (
            <th
              key={i}
              className="text-center py-4 px-[10px]  text-white text-[10px] font-extrabold leading-[14px]  "
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
        <tr>
          <td
            colSpan="4"
            className="table__footer text-textDarkBlack font-normal text-xs leading-[14px] !border-none py-4 text-center relative overflow-hidden rounded-bl"
          >
            {props.table__footer.title}
          </td>
          <td className=" text-white font-semibold text-xs leading-[14px] relative text-center !border-none bg-[#3CDA73] !rounded-br py-4 ">
            {props.table__footer.allScore}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
export default FinanceTable;
