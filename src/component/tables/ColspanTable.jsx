import "../../styles/finance-table.css";
const ColsTable = () => {
  return (
    <div>
      <table className="w-full finance__table">
        <thead className="bg-lightBlue  overflow-hidden ">
          <tr>
            <th className="text-center py-4 px-[14px] text-white text-[10px] font-extrabold leading-[14px]  ">
              Name
            </th>
            <th className="text-center py-4 px-[14px] text-white text-[10px] font-extrabold leading-[14px]  ">
              Current quarter
            </th>
            <th className="text-center py-4 px-[14px] text-white text-[10px] font-extrabold leading-[14px]  ">
              Next quarter
            </th>
            <th className="text-center py-4 px-[14px] text-white text-[10px] font-extrabold leading-[14px]  ">
              Current year
            </th>
            <th className="text-center py-4 px-[14px] text-white text-[10px] font-extrabold leading-[14px]  ">
              Next year
            </th>
            <th className="text-center py-4 px-[14px] text-white text-[10px] font-extrabold leading-[14px]  ">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              Revenue (million)
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              $9,620
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              $9,570
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              $40,340
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              $45,230
            </td>
            <td
              className="text-center text-[#FFCA2D] font-semibold text-xs leading-[14px] py-[10px] px-[14px]"
              rowSpan={2}
            >
              5
            </td>
          </tr>
          <tr>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              Revenue growth
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              -10.00%
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              -14.30%
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              -8.70%
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              12.10%
            </td>
          </tr>
          <tr>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              EPS
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              $2.35
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              $2.27
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              $10.23
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              19.80%
            </td>
            <td
              className="text-center text-[#FF7A49] font-semibold text-xs leading-[14px] py-[10px] px-[10px]"
              rowSpan={2}
            >
              4
            </td>
          </tr>
          <tr>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              EPS growth
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              -27.20%
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              -29.30%
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              -18.40%
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              15%
            </td>
          </tr>
          <tr>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              Number of analysts
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              21
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              21
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              31
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              28
            </td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td
              className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]"
              colSpan={5}
            >
              Weighted average score
            </td>
            <td className="text-center text-textDarkBlack font-normal text-xs leading-[14px] py-[10px] px-[10px]">
              8.3
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default ColsTable;
