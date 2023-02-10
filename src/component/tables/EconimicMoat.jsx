import economicMoat from "../../static/econimicMoat";
const EconomicMoat = () => {
  return (
    <div>
      <table>
        <thead className="bg-lightBlue ">
          <tr>
            <th className="text-[10px] leading-[14px] font-[800] text-white text-center py-4">
              Name
            </th>
            <th className="text-[10px] leading-[14px] font-[800] text-white text-center py-4">
              Scale
            </th>
            <th className="text-[10px] leading-[14px] font-[800] text-white text-center py-4">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {economicMoat.map((item, i) => (
            <tr key={i}>
              <td className="text-[12px] leading-[14px] text-[#161616] text-center py-4">
                {item.name}
              </td>
              <td className="text-[12px] leading-[14px] text-[#161616] text-center py-4">
                {item.scale}
              </td>
              <td className="text-[12px] leading-[14px] text-[#161616] text-center py-4">
                {item.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EconomicMoat;
