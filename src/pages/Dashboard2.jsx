import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import IncomeChart from "../components/IncomeExpenseChart"
import ProfessorList from "../components/ProfessorList"
import StudentList from "../components/StudentListDashboard2"
import Medal from "../components/MedalStatsSection"
import SalaryStatus from "../components/SalaryStatus"

const Dashboard2 = () => {
    const titleStyle = {
        size : '1rem',
        paddingTop: "1rem",
        fontWeight: 600,
    }

    const stats = [
        {
            title: 'Total Students',
            num: 3280,
            percent: 80,
            days: 20,
            color : '#ffffff',
            titleStyle : {
                size : '1rem',
                paddingTop: "1rem",
                fontWeight: 600,
            },
            lineColor : '#6A73FA'
        },
        {
            title: 'New Students',
            num: 245,
            percent: 50,
            days: 25,
            color : '#ffffff',
            titleStyle : {
                size : '1rem',
                paddingTop: "1rem",
                fontWeight: 600,
            },
            lineColor : '#FF1616'
        },
        {
            title: 'Total Course',
            num: 28,
            percent: 76,
            days: 20,
            color : '#ffffff',
            titleStyle : {
                size : '1rem',
                paddingTop: "1rem",
                fontWeight: 600,
            },
            lineColor : '#C62828'
        },
        {
            title: 'Fees Collection',
            num: '25160$',
            percent: 30,
            days: 30,
            color : '#ffffff',
            titleStyle : {
                size : '1rem',
                paddingTop: "1rem",
                fontWeight: 600,
            },
            lineColor : '#7ED321'
        },
    ]

    const medals = [
  {
    title: "Gold Medal",
    color: "#a8c4e0",   // area fill color
    stroke: "#7aafd4",  // line color
    overall: "82.24%",
    monthly: "12.24 %",
    day: "42.24%",
    badge: "20% High then last mont",
  },
  // ...
];
  return (
    <div className="w-screen h-screen bg-[#F2F2F3]">
      <Sidebar />
      <Navbar />

      <div className="absolute right-0 bottom-0 w-[calc(100vw-250px)] h-[calc(100vh-65px)] p-4 overflow-y-auto">
        {/* Top */}
        <div className="flex justify-between gap-8">
            {/* Left */}
            <div className="grid grid-cols-2 gap-[2rem] w-[50%]">
                {stats.map((stat, index) => (
                    <Card
                        key={index}
                        title={stat.title}
                        num={stat.num}
                        percent={stat.percent}
                        days={stat.days}
                        color={stat.color}
                        titleStyle={stat.titleStyle}
                        lineColor={stat.lineColor}
                    />
                ))}

                </div>
{/* Right */}
<div className="w-[50%]">
    <IncomeChart />
</div>
      </div>
<div className="flex justify-between gap-8 mt-10">
<ProfessorList />
<StudentList/>
</div>

<Medal />

<SalaryStatus />
                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
</div>
    </div>
  )
}

export default Dashboard2
