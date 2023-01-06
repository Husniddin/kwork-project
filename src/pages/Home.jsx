import CardTitle from "../component/CardTitle";
import FinanceTable from "../component/FinanceTable";
import HeaderNav from "../component/HeaderNav";
import OverView from "../component/OverView";
import tableBody from "../static/finance-table";
import tableData from "../static/table-data";
import "../styles/home.css";
import ChartComponent from "../charts/ChartComponent";
import ChartWrapper from "../component/ChartWrapp";
import Table from "../component/Table";
import info from "../static/barChart";
import circleChart from "../static/donutChart";
import money from "../static/debtChart";
import companyData from "../static/companyData";
import { FiPlusCircle } from "react-icons/fi";
import { IconContext } from "react-icons";
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
        <div className="grid__system">
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
                  <OverView
                    text={item.title}
                    quantity={item.name}
                    key={item.id}
                  />
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
          <div className="item3 grid__item">3</div>
          <div className="item4 grid__item">4</div>
          <div className="item5 grid__item">5</div>
          <div className="item6 grid__item">6</div>
          <div className="item7 grid__item">7</div>
          <div className="item8 grid__item">8</div>
          <div className="item9 grid__item">9</div>
          <div className="item10 grid__item">10</div>
          <div className="item11 grid__item">11</div>
          <div className="item12 grid__item">12</div>
          <div className="item13 grid__item">13</div>
          <div className="item14 grid__item">14</div>
          <div className="item15 grid__item">15</div>
          <div className="item16 grid__item">16</div>
          <div className="item17 grid__item">17</div>
          <div className="item18 grid__item">18</div>
          <div className="item19 grid__item">19</div>
          <div className="item20 grid__item">20</div>
          <div className="item21 grid__item">21</div>
          <div className="item22 grid__item">22</div>
        </div>
      </div>
      <ChartComponent
        series={circleChart.series}
        type="donut"
        width="500"
        options={circleChart.options}
        fill={circleChart.fill}
      />
      <ChartWrapper>
        <ChartComponent
          options={info.options}
          series={info.series}
          type={info.type}
          width="500"
        />
        <FinanceTable
          table_header={tableBody.table_head}
          table_body={tableBody.table_body}
          table__footer={tableBody.table_footer}
        />
      </ChartWrapper>
      <ChartWrapper>
        <Table
          table_header={tableData.table_header}
          table_body={tableData.tabel_body}
        />
      </ChartWrapper>
      <ChartComponent
        options={money.options}
        series={money.series}
        type="line"
        height={600}
        width={800}
      />
    </section>
  );
};
export default Home;
