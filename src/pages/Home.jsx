import "../styles/home.css";
import "react-best-tabs/dist/index.css";
//plugins
import { FiPlusCircle } from "react-icons/fi";
import { IconContext } from "react-icons";
import React from "react";
import Tabs, { Tab } from "react-best-tabs";
import { Link } from "react-router-dom";
// components
import CardTitle from "../component/cart-title/CardTitle";
import FinanceTable from "../component/tables/FinanceTable";
import HeaderNav from "../component/navbar/HeaderNav";
import OverView from "../component/view-list/OverView";
import Table from "../component/tables/Table";
import ColsTable from "../component/tables/ColspanTable";
import BaseBarChart from "../charts/ReBarChart";
import MixenChart from "../charts/MixenChart";
import DebtAssets from "../charts/DebtAssets";
import WeaknessTab from "../component/tabComponents/WeaknessTab";
import RateIndustry from "../charts/RateIndustry";
import Example from "../charts/Sinov";
import PineChartCustom from "../charts/PineChartCustom";

// static data
import tableBody from "../static/finance-table";
import tableData from "../static/table-data";
import debt from "../static/debtChart";
import companyData from "../static/companyData";
import overView from "../static/over-view";
import chartImg from "../assets/chart-img.png";
import marginRatio from "../static/margin-ratio";
import marginData from "../static/netmargin";
import data from "../static/cash-flow";
import BaseLineChart from "../charts/LineChart";
import NetMargin from "../charts/NetMargin";
import StackedChart from "../charts/StackedChart";
import EstimateActual from "../charts/EstimateActual";
import OctagonChart from "../charts/RadarChart";
import CurrentRatio from "../charts/CurrentRatio";

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
          <div className="item1 grid__item px-[25px] pb-[34px] max-h-[442px]">
            <CardTitle title="About the company" />
            <div className="flex gap-[50px] mt-[25px] ">
              <p className="w-[52.5%] text-[12px] leading-[22px] text-black">
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
              <div className="item1__right__side w-[47.5%] max-h-[457px]">
                {companyData.map((item) => (
                  <div key={item.id}>
                    <OverView
                      text={item.title}
                      quantity={item.name}
                      context_width="45%"
                      bottomSpace="16px"
                    />
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/"
              className="mt-1 text-blueColor leading-[22px] text-[12px]"
            >
              See more
            </Link>
          </div>
          {/* end of item1 */}
          <div className="item2 grid__item px-[25px]">
            <div className="px-[25px]">
              <CardTitle title="REVENUE BREAKDOWN" />
            </div>
            <PineChartCustom />
          </div>
          {/* end of item2 */}
          <div className="item3 grid__item pl-[25px] pr-[38px] max-h-[564px]">
            <CardTitle title="Overview" />
            <div className="mt-[16px] over__view">
              {overView.map((item) => (
                <OverView
                  key={item.id}
                  text={item.name}
                  quantity={item.data}
                  bottomSpace="9.5px"
                  context_width="30%"
                />
              ))}
            </div>
          </div>
          {/* end of item3 */}
          <div className="item4 grid__item px-[25px] max-h-[564px]">
            <div className="mb-[15px]">
              <CardTitle title="Chart" />
            </div>
            <img src={chartImg} alt="chart img" className="h-[90%]" />
          </div>
          {/* end of item4 */}
          <div className="item5 grid__item px-[25px] max-h-[442px]">
            <CardTitle title="OVERALL SCORE" />
          </div>
          {/* end of item5 */}
          <div className="item6 grid__item px-[25px] max-h-[442px]">
            <CardTitle title="Octagon view" />
            <div>
              <OctagonChart />
            </div>
          </div>
          {/* end of item6 */}
          <div className="item7 grid__item px-[25px] max-h-[442px]">
            <CardTitle title="strength & weakness" />
            <WeaknessTab />
            {/* end of tab */}
          </div>
          {/* end of item7 */}
          <div className="item8 grid__item pl-[25px] !pr-[23px] max-h-[468px]">
            <CardTitle title="FINANCIAL STRENGTH" />
            <div className="mt-10">
              <FinanceTable
                table_header={tableBody.table_head}
                table_body={tableBody.table_body}
                table__footer={tableBody.table_footer}
              />
            </div>
          </div>
          {/* end of item8 */}
          <div className="item9 grid__item max-h-[468px]">
            <div className="px-[25px]">
              <CardTitle title="Debt to Assets" />
            </div>
            <div className=" mt-10 pl-1">
              <DebtAssets data={debt} height={345} width={425} />
            </div>
          </div>
          <div className="item10 grid__item max-h-[468px]">
            <div className="px-[25px]">
              <CardTitle title="Current ratio" />
            </div>
            <div className=" mt-10 pl-1">
              <CurrentRatio height={345} width={417} />
            </div>
          </div>
          <div className="item11 grid__item px-[25px] max-h-[468px]">
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
                  <div className="mt-[30px]">
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
              </Tabs>
            </div>
            {/* end of tab header*/}
          </div>
          {/* end of item11 */}
          <div className="item12 grid__item max-h-[468px]">
            <div className="px-[25px] ">
              <CardTitle title="Revenue & Net income" />
            </div>
            <div className=" mt-11">
              <MixenChart width={390} height={345} />
            </div>
          </div>
          {/* end of item12 */}
          <div className="item13 grid__item max-h-[468px]">
            <div className="px-[25px]">
              <CardTitle title="Cash flow" />
            </div>
            <div className="pl-[10px] mt-10">
              <BaseBarChart width={390} height={345} data={data} />
            </div>
          </div>
          <div className="item14 grid__item px-[25px] max-h-[468px]">
            <CardTitle title="PROFITABILITY" />
            <div className="mt-10">
              <FinanceTable
                table_header={tableBody.table_head}
                table_body={tableBody.table_body}
                table__footer={tableBody.table_footer}
              />
            </div>
          </div>
          <div className="item15 grid__item max-h-[468px]">
            <div className="px-[25px]">
              <CardTitle title="MARGIN RATIOS" />
            </div>
            <div className=" mt-10 pl-1 pr-1">
              <BaseLineChart data={marginRatio} width={390} height={334} />
            </div>
          </div>
          <div className="item16 grid__item max-h-[468px]">
            <div className="px-[25px]">
              <CardTitle title="NET MARGIN" />
            </div>
            <div className="mt-10">
              <NetMargin data={marginData} width={420} height={334} />
            </div>
          </div>
          <div className="item17 grid__item px-[25px] max-h-[468px]">
            <CardTitle title="EFFECTIVENESS" />
            <div className="mt-10">
              <FinanceTable
                table_header={tableBody.table_head}
                table_body={tableBody.table_body}
                table__footer={tableBody.table_footer}
              />
            </div>
          </div>
          <div className="item18 grid__item px-[25px] max-h-[468px]">
            <CardTitle title="GROWTH" />
            <div className="mt-10">
              <FinanceTable
                table_header={tableBody.table_head}
                table_body={tableBody.table_body}
                table__footer={tableBody.table_footer}
              />
            </div>
          </div>
          <div className="item19 grid__item max-h-[468px]">
            <div className="px-[25px]">
              <CardTitle title="Growth rate vs. Industry" />
            </div>
            <div className="mt-10 pl-1">
              <RateIndustry width={390} height={334} />
            </div>
          </div>
          <div className="item20 grid__item px-[25px] max-h-[468px]">
            <CardTitle title="FORECAST" />
            <div className="mt-10">
              <ColsTable />
            </div>
          </div>
          <div className="item21 grid__item  max-h-[468px]">
            <div className="px-[25px]">
              <CardTitle title="Estimated EPS vs. Actual EPS" />
            </div>
            <div className="mt-10 !h-[400px]">
              <EstimateActual />
            </div>
          </div>
          <div className="item22 grid__item">
            <div className="ml-[25px]">
              <CardTitle title="Analyst rating" />
            </div>
            <div className="mt-11 px-[3px]">
              <StackedChart />
            </div>
          </div>
        </div>
        <Example />
      </div>
    </section>
  );
};
export default Home;
