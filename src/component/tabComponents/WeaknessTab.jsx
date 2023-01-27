import Tabs, { Tab } from "react-best-tabs";
import strengsData from "../../static/strengs-data";
import "../../styles/home.css";
const WeaknessTab = () => {
  return (
    <div className="mt-2 mb-[43px]">
      <Tabs
        activeTab="1"
        className="strengs__tab"
        ulClassName=""
        activityClassName="!h-[1px] top-[17px]"
      >
        <Tab
          title="Financial strength"
          className="text-[10px]  leading-[15px] text-lightBlue "
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
          <div className="mt-[35px]">
            {" "}
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
          title="Effectiveness"
          className="text-[10px]  leading-[15px] text-lightBlue"
        >
          <div className="mt-[35px]">
            {" "}
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
          title="Growth"
          className="text-[10px]  leading-[15px] text-lightBlue"
        >
          <div className="mt-[35px]">
            {" "}
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
          title="Forecast"
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
        {/* <Tab
          title="Valuation"
          className="  text-[10px]  leading-[15px] text-lightBlue "
        >
          <div className="mt-[35px]"></div>
        </Tab>
        <Tab
          title="Dividend"
          className="  text-[10px]  leading-[15px] text-lightBlue "
        >
          <div className="mt-[35px]"></div>
        </Tab>
        <Tab
          title="Economic moat"
          className="  text-[10px]  leading-[15px] text-lightBlue "
        >
          <div className="mt-[35px]"></div>
        </Tab> */}
      </Tabs>
    </div>
  );
};
export default WeaknessTab;
