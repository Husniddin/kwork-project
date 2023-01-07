import "../styles/home.css";
// components
import CardTitle from "../component/cart-title/CardTitle";
import FinanceTable from "../component/tables/FinanceTable";
import HeaderNav from "../component/navbar/HeaderNav";
import OverView from "../component/view-list/OverView";
import ChartComponent from "../charts/ChartComponent";
import Table from "../component/tables/Table";
import { FiPlusCircle } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";
// static data
import tableBody from "../static/finance-table";
import tableData from "../static/table-data";
import money from "../static/debtChart";
import info from "../static/barChart";
import companyData from "../static/companyData";
import circleChart from "../static/donutChart";
import overView from "../static/over-view";
import chartImg from "../assets/chart-img.png";
import rotioData from "../static/rotio";
import marginRatio from "../static/margin-ratio";
import ColsTable from "../component/tables/ColspanTable";

const Home = () => {
  return (
    <section className="pt-2">
      <div className="container">
        <div className="mb-[60px]">
          <div className="flex items-center gap-[15px] mb-[5px]">
            <h2 className="text-darkBlue text-[30px] leading-[30px] font-bold uppercase">
              Qualcomm Inc (QCOM)
            </h2>
            <button className="home__add-btn flex items-center gap-[7px] border border-blueColor rounded-[130px] py-[5.42px] pl-[13.22px] pr-[11.7px] text-[9px] leading-[11px] font-medium ">
              <IconContext.Provider value={{ color: "#3A9FF6", size: 13 }}>
                <FiPlusCircle />
              </IconContext.Provider>{" "}
              Add to wotchlist
            </button>
          </div>
          <p className="text-[14px] leading-[22px] font-light text-[#484848] mb-5">
            NasdaqGS - NasdaqGS Real Time Price. Currency in USD
          </p>
          <h3 className="mb-[3px] text-[30px] font-semibold leading-[30px] text-darkBlue">
            128.6{" "}
            <span className="text-lightGreen text-xl leading-5">
              {" "}
              +1.93 (1.52%)
            </span>
          </h3>
          <p className="text-[14px] leading-[22px] font-light text-[#484848]">
            Sep 7, 2022 4:00 PM EDT - Market closed
          </p>
        </div>
        <HeaderNav />
        <div className="grid__system overflow-hidden">
          <div className="item1 grid__item">
            <CardTitle title="About the company" />
            <div className="flex gap-[50px] mt-[25px] ">
              <p className="w-[50%]">
                QUALCOMM Incorporated engages in the development and
                commercialization of foundational technologies for the wireless
                industry worldwide. It operates through three segments: Qualcomm
                CDMA Technologies (QCT); Qualcomm Technology Licensing (QTL);
                and Qualcomm Strategic Initiatives (QSI). The QCT segment
                develops and supplies integrated circuits and system software
                based on 3G/4G/5G and other technologies for use in wireless
                voice and data communications, networking, application
                processing, multimedia, and global positioning system products.
                The QTL segment grants licenses or provides rights to use
                portions of its intellectual property portfolio, which include
                various patent rights useful in the manufac
              </p>
              <div className="item1__right__side w-[50%] pt-7">
                {companyData.map((item) => (
                  <div key={item.id}>
                    <OverView text={item.title} quantity={item.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* end of item1 */}
          <div className="item2 grid__item">
            <CardTitle title="REVENUE BREAKDOWN" />
            <div className="mt-[25px]">
              <ChartComponent
                series={circleChart.series}
                type="donut"
                width="400"
                options={circleChart.options}
              />
            </div>
          </div>
          {/* end of item2 */}
          <div className="item3 grid__item">
            <CardTitle title="Overview" />
            <div className="mt-[33px]">
              {overView.map((item) => (
                <div key={item.id}>
                  <OverView text={item.name} quantity={item.data} />
                </div>
              ))}
            </div>
          </div>
          {/* end of item3 */}
          <div className="item4 grid__item">
            <div className="mb-[15px]">
              <CardTitle title="Chart" />
            </div>
            <img src={chartImg} alt="chart img" className="h-[90%]" />
          </div>
          {/* end of item4 */}
          <div className="item5 grid__item">
            <CardTitle title="OVERALL SCORE" />
          </div>
          {/* end of item5 */}
          <div className="item6 grid__item">
            <CardTitle title="Octagon view" />
          </div>
          {/* end of item6 */}
          <div className="item7 grid__item">
            <CardTitle title="strength & weakness" />
          </div>
          {/* end of item7 */}
          <div className="item8 grid__item">
            <CardTitle title="FINANCIAL STRENGTH" />
            <div className="mt-11">
              <FinanceTable
                table_header={tableBody.table_head}
                table_body={tableBody.table_body}
                table__footer={tableBody.table_footer}
              />
            </div>
          </div>
          {/* end of item8 */}
          <div className="item9 grid__item">
            <CardTitle title="Debt to Assets" />
            <div className=" mt-10">
              <ChartComponent
                options={money.options}
                series={money.series}
                height={800}
                width={470}
              />
            </div>
          </div>
          <div className="item10 grid__item">
            <CardTitle title="Current ratio" />
            <div className=" mt-10">
              <ChartComponent
                options={rotioData.options}
                series={rotioData.series}
                height={800}
                width={470}
              />
            </div>
          </div>
          <div className="item11 grid__item">
            <div className="flex items-center justify-between">
              <CardTitle title="Current ratio" />
              <div>
                <button className="text-[10px] leading-[15px]">
                  Annual /{" "}
                </button>
                <button className="text-[10px] leading-[15px]">
                  {" "}
                  Quarterly
                </button>
              </div>
            </div>
            <div className="mt-0.5 mb-[35px]">
              <ul className="flex items-center gap-1">
                <li className="text-[10px] leading-[15px] text-[#746FF2] cursor-pointer">
                  Income statement |{" "}
                </li>
                <li className="text-[10px] leading-[15px] text-[#746FF2] cursor-pointer">
                  Balance sheet |
                </li>
                <li className="text-[10px] leading-[15px] text-[#746FF2] cursor-pointer">
                  {" "}
                  Cash flow
                </li>
                <li className="cursor-pointer">
                  <MdKeyboardArrowRight color="#3A9FF6" size={18} />
                </li>
              </ul>
            </div>
            {/* end of tab header*/}
            <Table
              table_header={tableData.table_header}
              table_body={tableData.tabel_body}
            />
          </div>
          {/* end of item11 */}
          <div className="item12 grid__item">
            <CardTitle title="Revenue & Net income" />
          </div>
          {/* end of item12 */}
          <div className="item13 grid__item">
            <CardTitle title="Cash flow" />
          </div>
          <div className="item14 grid__item">
            <CardTitle title="PROFITABILITY" />
            <div className="mt-11">
              <FinanceTable
                table_header={tableBody.table_head}
                table_body={tableBody.table_body}
                table__footer={tableBody.table_footer}
              />
            </div>
          </div>
          <div className="item15 grid__item">
            <CardTitle title="MARGIN RATIOS" />
            <div className=" mt-10">
              <ChartComponent
                options={info.options}
                series={info.series}
                height={800}
                width={420}
              />
            </div>
          </div>
          <div className="item16 grid__item">
            <CardTitle title="NET MARGIN" />
          </div>
          <div className="item17 grid__item">
            <CardTitle title="EFFECTIVENESS" />
            <div className="mt-11">
              <FinanceTable
                table_header={tableBody.table_head}
                table_body={tableBody.table_body}
                table__footer={tableBody.table_footer}
              />
            </div>
          </div>
          <div className="item18 grid__item">
            <CardTitle title="GROWTH" />
            <div className="mt-11">
              <FinanceTable
                table_header={tableBody.table_head}
                table_body={tableBody.table_body}
                table__footer={tableBody.table_footer}
              />
            </div>
          </div>
          <div className="item19 grid__item">
            <CardTitle title="Growth rate vs. Industry" />
          </div>
          <div className="item20 grid__item">
            <CardTitle title="FORECAST" />
            <div>
              <ColsTable />
            </div>
          </div>
          <div className="item21 grid__item">21</div>
          <div className="item22 grid__item">22</div>
        </div>
      </div>

      <ChartComponent
        options={info.options}
        series={info.series}
        type={info.type}
        width="500"
      />
    </section>
  );
};
export default Home;
