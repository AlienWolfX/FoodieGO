import { Layout } from "../Layout";
import { FiUser } from "react-icons/fi";
import { PiBowlFoodLight } from "react-icons/pi";
import { RiUserFollowLine } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";
import { useState } from "react";

export const Leaderboards = () => {
 const [selectedRole, setSelectedRole] = useState('All');

 const popularFoodiegoers = [
  {
   id: 1,
   name: "Bryan Ian Ramos",
   role: "Chef",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=BryanIanRamos&backgroundColor=b6e3f4",
   followers: 9800,
   recipes: 245,
   rank: 1,
   isFollowing: false,
   cuisine: "Filipino",
   joinedDate: "2023-01-15",
  },
  {
   id: 2,
   name: "Angelo Galope",
   role: "Chef",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=AngeloGalope&backgroundColor=c0aede",
   followers: 9200,
   recipes: 188,
   rank: 2,
   isFollowing: false,
   cuisine: "Asian Fusion",
   joinedDate: "2023-02-20",
  },
  {
   id: 3,
   name: "Lenor James Jamero",
   role: "Chef",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=LenorJames&backgroundColor=ffdfbf",
   followers: 8900,
   recipes: 210,
   rank: 3,
   isFollowing: false,
   cuisine: "Filipino",
   joinedDate: "2023-03-10",
  },
  {
   id: 4,
   name: "R.Z Tabaranza",
   role: "Student",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=RZTabaranza&backgroundColor=ffd5dc",
   followers: 8500,
   recipes: 156,
   rank: 4,
   isFollowing: false,
   cuisine: "Mediterranean",
   joinedDate: "2023-04-05",
  },
  {
   id: 5,
   name: "Cyrel Cabobod",
   role: "Home Cook",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=CyrelCabobod&backgroundColor=bde4a8",
   followers: 8200,
   recipes: 178,
   rank: 5,
   isFollowing: false,
   cuisine: "Vietnamese",
   joinedDate: "2023-03-25",
  },
  {
   id: 6,
   name: "Maria Santos",
   role: "Chef",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=MariaSantos&backgroundColor=d8a7ca",
   followers: 7800,
   recipes: 165,
   rank: 6,
   isFollowing: false,
   cuisine: "Spanish",
   joinedDate: "2023-05-12",
  },
  {
   id: 7,
   name: "John Chen",
   role: "Home Cook",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=JohnChen&backgroundColor=b6e3f4",
   followers: 7500,
   recipes: 142,
   rank: 7,
   isFollowing: false,
   cuisine: "Chinese",
   joinedDate: "2023-06-01",
  },
  {
   id: 8,
   name: "Sarah Kim",
   role: "Student",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=SarahKim&backgroundColor=c0aede",
   followers: 7200,
   recipes: 198,
   rank: 8,
   isFollowing: false,
   cuisine: "Korean",
   joinedDate: "2023-04-18",
  },
  {
   id: 9,
   name: "Marco Rossi",
   role: "Chef",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=MarcoRossi&backgroundColor=ffdfbf",
   followers: 6900,
   recipes: 134,
   rank: 9,
   isFollowing: false,
   cuisine: "Italian",
   joinedDate: "2023-07-15",
  },
  {
   id: 10,
   name: "Yuki Tanaka",
   role: "Chef",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=YukiTanaka&backgroundColor=ffd5dc",
   followers: 6700,
   recipes: 145,
   rank: 10,
   isFollowing: false,
   cuisine: "Japanese",
   joinedDate: "2023-05-30",
  },
  {
   id: 11,
   name: "Emily Watson",
   role: "Student",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=EmilyWatson&backgroundColor=bde4a8",
   followers: 6500,
   recipes: 122,
   rank: 11,
   isFollowing: false,
   cuisine: "British",
   joinedDate: "2023-08-05",
  },
  {
   id: 12,
   name: "Raj Patel",
   role: "Home Cook",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=RajPatel&backgroundColor=d8a7ca",
   followers: 6200,
   recipes: 167,
   rank: 12,
   isFollowing: false,
   cuisine: "Indian",
   joinedDate: "2023-06-22",
  },
  {
   id: 13,
   name: "Sophie Laurent",
   role: "Chef",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=SophieLaurent&backgroundColor=b6e3f4",
   followers: 6000,
   recipes: 189,
   rank: 13,
   isFollowing: false,
   cuisine: "French",
   joinedDate: "2023-07-08",
  },
  {
   id: 14,
   name: "Luis Rodriguez",
   role: "Home Cook",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=LuisRodriguez&backgroundColor=c0aede",
   followers: 5800,
   recipes: 112,
   rank: 14,
   isFollowing: false,
   cuisine: "Mexican",
   joinedDate: "2023-09-01",
  },
  {
   id: 15,
   name: "Anna Kowalski",
   role: "Student",
   image:
    "https://api.dicebear.com/7.x/lorelei/svg?seed=AnnaKowalski&backgroundColor=ffdfbf",
   followers: 5600,
   recipes: 145,
   rank: 15,
   isFollowing: false,
   cuisine: "Polish",
   joinedDate: "2023-08-15",
  },
 ];

 const trendingStats = [
  {
    title: "Top Foodiegoer",
    name: "Bryan Ian Ramos",
    stat: "9.8K followers",
    change: "+12%",
    icon: <FiUser className="text-lg" />,
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-100",
    changeType: "positive"
  },
  {
    title: "Top Recipe",
    name: "Adobong Manok",
    stat: "2.4K likes",
    change: "+18%",
    icon: <PiBowlFoodLight className="text-lg" />,
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-100",
    changeType: "positive"
  },
  {
    title: "Most Followed",
    name: "Chef Category",
    stat: "15.2K followers",
    change: "+8%",
    icon: <RiUserFollowLine className="text-lg" />,
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-100",
    changeType: "positive"
  }
];

 // Filter foodiegoers based on selected role
 const filteredFoodiegoers = popularFoodiegoers.filter(foodiegoer => 
   selectedRole === 'All' ? true : foodiegoer.role === selectedRole
 );

 return (
  <>
   <div>
    <Layout>
     <div>
      <h1 className="text-lg text-gray-600 font-medium">Leaderboards</h1>
     </div>
     <div className="mt-5">
      <div className="bg-white p-8 rounded-xl shadow border border-gray-50 min-h-[800px]">
       <div className="mb-5">
        <h1 className="text-lg font-medium">Trending</h1>
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trendingStats.map((stat, index) => (
          <div 
            key={index}
            className={`
              relative overflow-hidden rounded-xl border ${stat.borderColor}
              p-5 transition-all duration-300 hover:shadow-lg
              ${stat.bgColor} bg-opacity-40 hover:bg-opacity-50
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-medium ${stat.textColor}`}>
                {stat.title}
              </span>
              <div className={`
                h-8 w-8 rounded-full ${stat.bgColor} 
                flex items-center justify-center
                ${stat.textColor}
              `}>
                {stat.icon}
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold text-gray-800 truncate">
                {stat.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-gray-900">
                  {stat.stat}
                </span>
                <span className={`
                  text-xs font-medium px-1.5 py-0.5 rounded-full
                  ${stat.changeType === 'positive' ? 'text-emerald-700 bg-emerald-100' : 'text-red-700 bg-red-100'}
                `}>
                  {stat.change}
                </span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className={`
              absolute -right-6 -bottom-6 h-24 w-24 rounded-full
              ${stat.bgColor} opacity-20
            `} />
            <div className={`
              absolute -right-4 -bottom-4 h-16 w-16 rounded-full
              ${stat.bgColor} opacity-20
            `} />
          </div>
        ))}
       </div>
       {/* popular foodiegoers */}
       <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-medium">Popular Foodiegoers</h1>
          <div className="flex items-center gap-2">
            <button 
              className={`
                px-3 py-1.5 text-xs font-medium rounded-full transition-all
                ${selectedRole === 'All' ? 
                  'bg-gray-900 text-white' : 
                  'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
              onClick={() => setSelectedRole('All')}
            >
              All
            </button>
            <button 
              className={`
                px-3 py-1.5 text-xs font-medium rounded-full transition-all
                ${selectedRole === 'Chef' ? 
                  'bg-blue-600 text-white' : 
                  'bg-blue-50 text-blue-600 hover:bg-blue-100'}
              `}
              onClick={() => setSelectedRole('Chef')}
            >
              Chef
            </button>
            <button 
              className={`
                px-3 py-1.5 text-xs font-medium rounded-full transition-all
                ${selectedRole === 'Student' ? 
                  'bg-green-600 text-white' : 
                  'bg-green-50 text-green-600 hover:bg-green-100'}
              `}
              onClick={() => setSelectedRole('Student')}
            >
              Student
            </button>
            <button 
              className={`
                px-3 py-1.5 text-xs font-medium rounded-full transition-all
                ${selectedRole === 'Home Cook' ? 
                  'bg-purple-600 text-white' : 
                  'bg-purple-50 text-purple-600 hover:bg-purple-100'}
              `}
              onClick={() => setSelectedRole('Home Cook')}
            >
              Home Cook
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-100">
            <div className="grid grid-cols-12 gap-4 items-center text-xs font-medium text-gray-500">
              <div className="col-span-1">Rank</div>
              <div className="col-span-4">Foodiegoer</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Followers</div>
              <div className="col-span-2">Recipes</div>
              <div className="col-span-1">Cuisine</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {filteredFoodiegoers.map((data) => (
              <div 
                key={data.id} 
                className="px-6 py-3 hover:bg-gray-50 transition-colors grid grid-cols-12 gap-4 items-center"
              >
                {/* Rank */}
                <div className="col-span-1 flex items-center gap-2">
                  <div className={`
                    h-8 w-8 rounded-full flex items-center justify-center
                    ${data.rank === 1 ? "bg-yellow-100 text-yellow-600" : 
                      data.rank === 2 ? "bg-gray-100 text-gray-500" : 
                      data.rank === 3 ? "bg-amber-100 text-amber-600" : 
                      "bg-gray-50 text-gray-400"}
                  `}>
                    <FaMedal className="text-sm" />
                  </div>
                </div>

                {/* User Info */}
                <div className="col-span-4 flex items-center gap-3">
                  <img 
                    src={data.image} 
                    className="w-8 h-8 rounded-full ring-2 ring-offset-2 ring-gray-100" 
                    alt={data.name}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{data.name}</p>
                    <p className="text-xs text-gray-500">Joined {new Date(data.joinedDate).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Role */}
                <div className="col-span-2">
                  <span className={`
                    inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${data.role === 'Chef' ? 'bg-blue-100 text-blue-700' :
                      data.role === 'Student' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'}
                  `}>
                    {data.role}
                  </span>
                </div>

                {/* Stats */}
                <div className="col-span-2 text-sm text-gray-700">
                  {data.followers.toLocaleString()}
                </div>
                <div className="col-span-2 text-sm text-gray-700">
                  {data.recipes.toLocaleString()}
                </div>

                {/* Cuisine */}
                <div className="col-span-1">
                  <span className="text-xs text-gray-500">{data.cuisine}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
       </div>
      </div>
     </div>
    </Layout>
   </div>
  </>
 );
};
