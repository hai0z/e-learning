"use client";
import { ApexOptions } from "apexcharts";
import { Users, BookOpen, GraduationCap, DollarSign } from "lucide-react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DashboardPage = () => {
  const revenueChartOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
      },
    },
    xaxis: {
      categories: [
        "T1",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6",
        "T7",
        "T8",
        "T9",
        "T10",
        "T11",
        "T12",
      ],
    },
  };

  const revenueChartSeries = [
    {
      name: "Doanh thu",
      data: [500, 150, 850, 500, 900, 200, 550, 250, 550, 350, 400, 300],
    },
  ];

  const accessChartOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: [
        "T1",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6",
        "T7",
        "T8",
        "T9",
        "T10",
        "T11",
        "T12",
      ],
    },
    colors: ["#FF4560", "#008FFB"],
    legend: {
      position: "bottom",
    },
  };

  const accessChartSeries = [
    {
      name: "Xu hướng truy cập website",
      data: [35, 41, 45, 41, 50, 45, 35, 50, 55, 45, 60, 55],
    },
    {
      name: "Mức tiêu truy cập website",
      data: [30, 35, 30, 25, 35, 30, 40, 45, 40, 35, 45, 40],
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-primary">
              <DollarSign size={24} />
            </div>
            <div className="stat-title">Doanh thu</div>
            <div className="stat-value text-primary">126,560</div>
            <div className="stat-desc">↗︎ 12% so với tháng trước</div>
          </div>
        </div>

        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <BookOpen size={24} />
            </div>
            <div className="stat-title">Học viên</div>
            <div className="stat-value">8,846</div>
            <div className="stat-desc">↗︎ 11% so với năm trước</div>
          </div>
        </div>

        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-accent">
              <GraduationCap size={24} />
            </div>
            <div className="stat-title">Lớp học</div>
            <div className="stat-value">215</div>
            <div className="stat-desc">Số lượng lớp đang mở: 120</div>
          </div>
        </div>

        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-info">
              <Users size={24} />
            </div>
            <div className="stat-title">Nhân viên</div>
            <div className="stat-value">56</div>
            <div className="stat-desc">
              Giáo vụ: 6 | Marketing: 6 | Giáo viên: 20
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-base-100 p-6 rounded-box shadow-xl lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Báo cáo doanh thu</h2>
            <div className="flex gap-2">
              <button className="btn btn-sm">Tháng</button>
              <button className="btn btn-sm">Quý</button>
              <button className="btn btn-sm">Năm</button>
            </div>
          </div>
          <Chart
            options={revenueChartOptions as ApexOptions}
            series={revenueChartSeries}
            type="bar"
            height={350}
          />
        </div>

        <div className="bg-base-100 p-6 rounded-box shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Xu hướng truy cập</h2>
            <select className="select select-sm">
              <option>Giờ cao điểm</option>
              <option>Hàng ngày</option>
              <option>Hàng tuần</option>
            </select>
          </div>
          <Chart
            options={accessChartOptions as ApexOptions}
            series={accessChartSeries}
            type="line"
            height={350}
          />
        </div>
      </div>

      {/* Classes Table */}
      <div className="bg-base-100 p-6 rounded-box shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Các lớp học đã triển khai</h2>
          <button className="btn btn-primary btn-sm">Xem tất cả</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Mã lớp</th>
                <th>Tên lớp</th>
                <th>Thành viên</th>
                <th>Khóa học</th>
                <th>Phòng</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Net15</td>
                <td>T1-51</td>
                <td>14</td>
                <td>Todo-Pro</td>
                <td>B401</td>
                <td>
                  <span className="badge badge-success">Đã hoàn thành</span>
                </td>
              </tr>
              <tr>
                <td>Java22</td>
                <td>T2-32</td>
                <td>18</td>
                <td>Spring Boot</td>
                <td>A305</td>
                <td>
                  <span className="badge badge-warning">Đang diễn ra</span>
                </td>
              </tr>
              <tr>
                <td>React12</td>
                <td>T3-45</td>
                <td>16</td>
                <td>React Native</td>
                <td>C201</td>
                <td>
                  <span className="badge badge-warning">Đang diễn ra</span>
                </td>
              </tr>
              <tr>
                <td>Python8</td>
                <td>T4-28</td>
                <td>20</td>
                <td>Data Science</td>
                <td>B302</td>
                <td>
                  <span className="badge badge-error">Tạm hoãn</span>
                </td>
              </tr>
              <tr>
                <td>Web19</td>
                <td>T5-37</td>
                <td>15</td>
                <td>Frontend Dev</td>
                <td>A401</td>
                <td>
                  <span className="badge badge-success">Đã hoàn thành</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
