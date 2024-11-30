import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Toaster, toast } from "sonner";
import LoadingBar from "react-top-loading-bar";
import loginImg from "/auth-images/loginImg.jpg"; // You might want to use a different admin-specific image

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const nav = useNavigate();
  const ref = useRef(null);

  const login = async (e) => {
    if (email === "" || password === "") {
      toast.error("Login credentials needed");
    } else {
      ref.current.staticStart(50);

      setTimeout(() => {
        ref.current.staticStart(70);
      }, 1500);

      setTimeout(() => {
        toast.success("Admin Login Successful!");
        ref.current.complete();
        setTimeout(() => {
          nav("/admin/home");
        }, 300);
      }, 3000);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <LoadingBar color="#f11946" ref={ref} />
      <Toaster richColors position="top-center" />
      <div className="w-full h-screen flex flex-col md:flex-row justify-between items-center">
        <div className="hidden md:flex shadow-lg w-full h-full">
          <img src={loginImg} alt="" className="w-full bg-cover bg-center" />
        </div>

        {isMobile ? (
          <div
            className="fixed inset-0 flex justify-center items-center z-20"
            style={{
              background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
            }}
          >
            <div className="w-[90%] max-w-[400px] animate-fadeIn">
              <AdminLoginContent
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                login={login}
                nav={nav}
                isMobile={isMobile}
              />
            </div>
          </div>
        ) : (
          <div className="h-screen w-full md:w-1/2 flex items-center justify-center">
            <div className="bg-white h-auto p-10 rounded-xl border border-mainblue border-opacity-15 shadow-sm w-[90%] max-w-[400px] transition-all duration-300 hover:shadow-lg">
              <AdminLoginContent
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                login={login}
                nav={nav}
                isMobile={isMobile}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const AdminLoginContent = ({
  email,
  setEmail,
  password,
  setPassword,
  login,
  nav,
  isMobile,
}) => (
  <>
    <div className="space-y-2 text-center mb-8">
      <div
        className={`text-2xl ${
          isMobile ? "text-white" : "text-mainblue"
        } font-bold`}
      >
        Welcome Back, Admin
      </div>
      <p className={`text-sm ${
        isMobile ? "text-gray-200" : "text-gray-500"
      }`}>
        Start managing user reports and monitor activities
      </p>
    </div>

    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className={`text-sm font-medium ${
            isMobile ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Admin Email
        </label>
        <input
          type="email"
          placeholder="Enter your admin email"
          className={`px-4 h-10 rounded-lg text-sm border 
            ${
              isMobile
                ? "bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                : "border-gray-300"
            } 
            focus:ring-2 focus:ring-mainblue focus:border-mainblue
            transition-all duration-200 outline-none`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="password"
          className={`text-sm font-medium ${
            isMobile ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Admin Password
        </label>
        <input
          type="password"
          placeholder="Enter your admin password"
          className={`px-4 h-10 rounded-lg text-sm border 
            ${
              isMobile
                ? "bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                : "border-gray-300"
            } 
            focus:ring-2 focus:ring-mainblue focus:border-mainblue
            transition-all duration-200 outline-none`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-end mt-1">
          <p
            onClick={() => nav("/admin/forgot-password")}
            className={`text-xs ${
              isMobile ? "text-gray-200" : "text-gray-600"
            } hover:text-mainblue transition-colors duration-200 cursor-pointer`}
          >
            Forgot your password?
          </p>
        </div>
      </div>
    </div>

    <div className="mt-8 space-y-4">
      <button
        onClick={login}
        className={`w-full h-10 rounded-lg font-medium text-sm
          transform transition-all duration-200 
          ${
            isMobile
              ? "bg-white text-mainblue hover:bg-white/90"
              : "bg-mainblue text-white hover:bg-mainblue/90"
          }
          hover:shadow-lg active:scale-95`}
      >
        Sign In as Admin
      </button>
      
      <div className="flex flex-col items-center gap-2">
        <div className={`text-xs ${
          isMobile ? "text-gray-200" : "text-gray-500"
        }`}>
          Access admin dashboard to:
          <ul className="mt-1 space-y-1 text-left list-disc pl-4">
            <li>Manage user reports</li>
            <li>Monitor recipe activities</li>
            <li>Review user feedback</li>
          </ul>
        </div>
        
        <span
          onClick={() => nav("/login")}
          className="text-[12px] text-mainblue font-light hover:font-medium flex items-center cursor-pointer mt-2"
        >
          ← Back to user login
        </span>
      </div>
    </div>
  </>
);
