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
import ColsTable from "../component/tables/ColspanTable";
import React, { Component } from "react";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
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
import estimedData from "../static/estimed";
import industryData from "../static/industry";
import marginData from "../static/netmargin";
import netIcom from "../static/net-income";
import strengsData from "../static/strengs-data";
import cashFlow from "../static/cash-flow";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

const Home = () => {
  return (
    <section className="pt-2">
      <div className="container">
        <div className="mb-[60px]">
          <div className="flex items-center gap-[15px] mb-[5px]">
            <h2 className="text-darkBlue text-[30px] leading-[30px] font-bold uppercase">
              Qualcomm Inc (QCOM)
            </h2>
            <button className="home__add-btn h-max flex items-center gap-[7px] border border-blueColor rounded-[130px] py-[5.42px] pl-[13.22px] pr-[11.7px] text-[9px] leading-[11px] font-medium mt-1">
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
          <div className="item1 grid__item px-[25px] pb-[34px]">
            <CardTitle title="About the company" />
            <div className="flex gap-[50px] mt-[25px] ">
              <p className="w-[50%] text-[12px] leading-[22px] text-black">
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
                    <OverView
                      text={item.title}
                      quantity={item.name}
                      context_width="42%"
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-1 text-black leading-[22px] text-[12px]">
              See more
            </p>
          </div>
          {/* end of item1 */}
          <div className="item2 grid__item px-[25px]">
            <div className="px-[25px]">
              <CardTitle title="REVENUE BREAKDOWN" />
            </div>
            <div className="mt-[25px] pl-1">
              <ChartComponent
                series={circleChart.series}
                type="donut"
                width="400"
                options={circleChart.options}
              />
            </div>
          </div>
          {/* end of item2 */}
          <div className="item3 grid__item pl-[25px] pr-[38px]">
            <CardTitle title="Overview" />
            <div className="mt-[33px] over__view">
              {overView.map((item) => (
                <OverView
                  key={item.id}
                  text={item.name}
                  quantity={item.data}
                  context_width="27%"
                />
              ))}
            </div>
          </div>
          {/* end of item3 */}
          <div className="item4 grid__item px-[25px]">
            <div className="mb-[15px]">
              <CardTitle title="Chart" />
            </div>
            <img src={chartImg} alt="chart img" className="h-[90%]" />
          </div>
          {/* end of item4 */}
          <div className="item5 grid__item px-[25px]">
            <CardTitle title="OVERALL SCORE" />
          </div>
          {/* end of item5 */}
          <div className="item6 grid__item px-[25px]">
            <CardTitle title="Octagon view" />
          </div>
          {/* end of item6 */}
          <div className="item7 grid__item px-[25px]">
            <CardTitle title="strength & weakness" />
            <div className="mt-2 mb-[43px]">
              <Tabs
                activeTab="1"
                className="strengs__tab"
                ulClassName=""
                activityClassName="!h-[1px] top-[17px]"
              >
                <Tab
                  title="Financial strength"
                  className="text-[10px]  leading-[15px] text-lightBlue"
                >
                  <div className="mt-[35px]">
                    <div>
                      {strengsData.map((item) => (
                        <div
                          className="flex items-center gap-[17px] mt-[30px]"
                          key={item.id}
                        >
                          <span
                            className="block h-[31px] !w-[9.08px] rounded-[8px]"
                            style={{ background: `${item.bg_color}` }}
                          ></span>
                          <h4 className="text-[10px] leading-[15px] font-medium text-black flex-1">
                            {item.title}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab>
                <Tab
                  title="Profitability"
                  className="text-[10px]  leading-[15px] text-lightBlue"
                >
                  <div className="mt-[35px]">Tab 2 content</div>
                </Tab>
                <Tab
                  title="Effectiveness"
                  className="text-[10px]  leading-[15px] text-lightBlue"
                >
                  <div className="mt-[35px]">Tab 3 content</div>
                </Tab>
                <Tab
                  title="Growth"
                  className="text-[10px]  leading-[15px] text-lightBlue"
                >
                  <div className="mt-[35px]">Tab 4 content</div>
                </Tab>
                <Tab
                  title="Forecast"
                  className="text-[10px]  leading-[15px] text-lightBlue"
                >
                  <div className="mt-[35px]">Tab 5 content</div>
                </Tab>
                <Tab
                  title=" "
                  className=" font-semibold leading-[25px] -ml-2 text-[#3A9FF6]"
                >
                  <div className="mt-[35px]">Tab 6 content</div>
                </Tab>
              </Tabs>
            </div>
            {/* end of tab */}
          </div>
          {/* end of item7 */}
          <div className="item8 grid__item pl-[25px] !pr-[23px]">
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
            <div className="px-[25px]">
              <CardTitle title="Debt to Assets" />
            </div>
            <div className=" mt-10 pl-1">
              <ChartComponent
                options={money.options}
                series={money.series}
                height={800}
                width={495}
              />
            </div>
          </div>
          <div className="item10 grid__item">
            <div className="px-[25px]">
              <CardTitle title="Current ratio" />
            </div>
            <div className=" mt-10 pl-1">
              <ChartComponent
                options={rotioData.options}
                series={rotioData.series}
                height={800}
                width={495}
              />
            </div>
          </div>
          <div className="item11 grid__item px-[25px]">
            <div className="flex items-center justify-between">
              <CardTitle title="Current ratio" />
              <div>
                <button className="text-[10px] leading-[15px]">Annual /</button>
                <button className="text-[10px] leading-[15px]">
                  Quarterly
                </button>
              </div>
            </div>
            <div className="mt-0.5">
              <Tabs
                activeTab="1"
                className="rotio__tab"
                ulClassName="current__ratio"
                activityClassName=" !h-[1px] "
                onClick={(event, tab) => console.log(event, tab)}
              >
                <Tab
                  title="Income statement"
                  className="text-[10px]  leading-[15px] text-lightBlue"
                >
                  <div className="mt-[35px]">
                    <Table
                      table_header={tableData.table_header}
                      table_body={tableData.tabel_body}
                    />
                  </div>
                </Tab>
                <Tab
                  title=" Balance sheet"
                  className="text-[10px]  leading-[15px] text-lightBlue"
                >
                  <div className="mt-[35px]">Tab 2 content</div>
                </Tab>
                <Tab
                  title="Cash flow"
                  className="text-[10px]  leading-[15px] text-lightBlue"
                >
                  <div className="mt-[35px]">Tab 3 content</div>
                </Tab>
                <Tab title=" " className=" text-[#3A9FF6]">
                  <div className=" font-semibold leading-[25px] -ml-2 mt-[35px]">
                    Tab 4 content
                  </div>
                </Tab>
              </Tabs>
            </div>
            {/* end of tab header*/}
          </div>
          {/* end of item11 */}
          <div className="item12 grid__item px-[25px]">
            <CardTitle title="Revenue & Net income" />
          </div>
          {/* end of item12 */}
          <div className="item13 grid__item">
            <CardTitle title="Cash flow" />
          </div>
          <div className="item14 grid__item px-[25px]">
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
            <div className="px-[25px]">
              <CardTitle title="MARGIN RATIOS" />
            </div>
            <div className=" mt-10 pl-1 pr-1">
              <ChartComponent
                options={info.options}
                series={info.series}
                height={800}
                width={430}
              />
            </div>
          </div>
          <div className="item16 grid__item">
            <div className="px-[25px]">
              <CardTitle title="NET MARGIN" />
            </div>
            <div className="mt-11">
              <ChartComponent
                options={marginData.options}
                series={marginData.series}
                width={405}
                height={800}
              />
            </div>
          </div>
          <div className="item17 grid__item px-[25px]">
            <CardTitle title="EFFECTIVENESS" />
            <div className="mt-11">
              <FinanceTable
                table_header={tableBody.table_head}
                table_body={tableBody.table_body}
                table__footer={tableBody.table_footer}
              />
            </div>
          </div>
          <div className="item18 grid__item px-[25px]">
            <CardTitle title="GROWTH" />
            <div className="mt-11">
              <FinanceTable
                table_header={tableBody.table_head}
                table_body={tableBody.table_body}
                table__footer={tableBody.table_footer}
              />
            </div>
          </div>
          <div className="item19 grid__item ">
            <div className="px-[25px]">
              <CardTitle title="Growth rate vs. Industry" />
            </div>
            <div className="mt-11 pl-1">
              <ChartComponent
                options={industryData.options}
                series={industryData.series}
                width={400}
                height={800}
              />
            </div>
          </div>
          <div className="item20 grid__item px-[25px]">
            <CardTitle title="FORECAST" />
            <div className="mt-11">
              <ColsTable />
            </div>
          </div>
          <div className="item21 grid__item  ">
            <div className="px-[25px]">
              <CardTitle title="Estimated EPS vs. Actual EPS" />
            </div>
            <div className="mt-11 !h-[400px]">
              <ChartComponent
                options={marginRatio.options}
                series={marginRatio.series}
                width="100%"
                height={500}
              />
            </div>
          </div>
          <div className="item22 grid__item">
            <div className="ml-[25px]">
              <CardTitle title="Analyst rating" />
            </div>
            <div className="mt-11 px-[3px]">
              <ChartComponent
                options={estimedData.options}
                series={estimedData.series}
                type="bar"
                width={405}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <ChartComponent
        options={netIcom.options}
        series={netIcom.series}
        width={850}
        height={800}
      /> */}

      <div style={{ width: "600px", height: "400px" }}>
        <Line
          options={netIcom.options}
          data={netIcom.data}
          labels={netIcom.labels}
        />
      </div>
      <section>
        {/* <ChartComponent
          options={cashFlow.options}
          series={cashFlow.series}
          height={800}
          width={550}
        /> */}
      </section>
    </section>
  );
};
export default Home;
