import "../../styles/profit-table.css";
const Table = (props) => {
  return (
    <table className="!w-[372px] profit__table">
      <thead className="bg-lightBlue ">
        <tr>
          {props.table_header.map((item, i) => (
            <th
              key={i}
              className="text-center text-white text-[12px] font-bold leading-[14px] py-[14.5px]"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.table_body.map((items, i) => (
          <tr key={i}>
            {items.map((item, k) => (
              <td
                key={k}
                className="text-[12px] text-textDarkBlack leading-[19px] text-center px-4 py-[13px]  border-[0.2px]"
              >
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
