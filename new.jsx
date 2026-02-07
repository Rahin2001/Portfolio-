import React, { useState } from 'react';
import { Bell, Search, User, Home, BarChart2, Settings, Users, DollarSign, TrendingUp, Activity, ShoppingCart } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(3);
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const stats = [
    { title: 'Total Revenue', value: '$45,231', change: '+20.1%', icon: <DollarSign />, color: 'bg-blue-500' },
    { title: 'Active Users', value: '2,345', change: '+15.3%', icon: <Users />, color: 'bg-green-500' },
    { title: 'Sales', value: '1,234', change: '+8.2%', icon: <ShoppingCart />, color: 'bg-purple-500' },
    { title: 'Growth Rate', value: '23.5%', change: '+5.1%', icon: <TrendingUp />, color: 'bg-orange-500' },
  ];

  const recentActivity = [
    { user: 'John Doe', action: 'made a purchase', time: '2 minutes ago', amount: '$299' },
    { user: 'Sarah Smith', action: 'signed up', time: '15 minutes ago', amount: null },
    { user: 'Mike Johnson', action: 'upgraded plan', time: '1 hour ago', amount: '$99/mo' },
    { user: 'Emily Davis', action: 'left a review', time: '2 hours ago', amount: null },
    { user: 'Chris Wilson', action: 'made a purchase', time: '3 hours ago', amount: '$149' },
  ];

  const chartData = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 78 },
    { day: 'Wed', value: 90 },
    { day: 'Thu', value: 72 },
    { day: 'Fri', value: 85 },
    { day: 'Sat', value: 95 },
    { day: 'Sun', value: 88 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-indigo-600">DashApp</h1>
        </div>
        <nav className="px-4 space-y-2">
          <NavItem icon={<Home size={20} />} label="Dashboard" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
          <NavItem icon={<BarChart2 size={20} />} label="Analytics" active={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} />
          <NavItem icon={<Users size={20} />} label="Customers" active={activeTab === 'customers'} onClick={() => setActiveTab('customers')} />
          <NavItem icon={<ShoppingCart size={20} />} label="Orders" active={activeTab === 'orders'} onClick={() => setActiveTab('orders')} />
          <NavItem icon={<Settings size={20} />} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                <Bell size={20} />
                {notifications > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <div className="text-sm font-semibold">Admin User</div>
                  <div className="text-xs text-gray-500">admin@dashapp.com</div>
                </div>
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                  <User size={20} />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
          </div>

          {/* Period Selector */}
          <div className="mb-6 flex gap-2">
            {['day', 'week', 'month', 'year'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg capitalize transition ${
                  selectedPeriod === period
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Charts and Activity */}
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Revenue Trend</h3>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Activity size={16} />
                  <span>+12.5% vs last period</span>
                </div>
              </div>
              <div className="flex items-end justify-between h-64 gap-4">
                {chartData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-indigo-100 rounded-t-lg relative group cursor-pointer hover:bg-indigo-200 transition">
                      <div
                        className="bg-indigo-600 rounded-t-lg transition-all duration-500"
                        style={{ height: `${item.value * 2}px` }}
                      ></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                        ${item.value}k
                      </div>
                    </div>
                    <span className="text-xs text-gray-600">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <ActivityItem key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Top Products</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sales</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <TableRow product="Premium Plan" sales="1,234" revenue="$45,678" status="Active" />
                  <TableRow product="Standard Plan" sales="987" revenue="$32,456" status="Active" />
                  <TableRow product="Basic Plan" sales="654" revenue="$12,345" status="Active" />
                  <TableRow product="Enterprise Plan" sales="321" revenue="$98,765" status="Limited" />
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
        active
          ? 'bg-indigo-50 text-indigo-600'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}

function StatCard({ title, value, change, icon, color }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-white`}>
          {icon}
        </div>
        <span className="text-sm font-semibold text-green-600">{change}</span>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function ActivityItem({ user, action, time, amount }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0">
        <User size={16} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900">
          <span className="font-semibold">{user}</span> {action}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-xs text-gray-500">{time}</p>
          {amount && (
            <>
              <span className="text-gray-300">•</span>
              <p className="text-xs font-semibold text-green-600">{amount}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function TableRow({ product, sales, revenue, status }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 text-sm font-medium text-gray-900">{product}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{sales}</td>
      <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{revenue}</td>
      <td className="px-6 py-4">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {status}
        </span>
      </td>
    </tr>
  );
}
