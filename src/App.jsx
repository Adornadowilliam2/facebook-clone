import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center p-3 bg-gradient-to-r font-helvetica font-light"
        style={{
          background:
            "linear-gradient(90deg, #FEF7F4 0%, #FCF3F8 9%, #EEF7FF 20%)",
        }}
      >
        <h1 className="text-gray-400 text-[14px]">English (US)</h1>
        <img
          src="https://github.com/Adornadowilliam2/images/blob/main/Untitled%20design.png?raw=true"
          alt="fb logo"
          className="w-16 rounded-[50%] mt-[80px]"
        />
        <input
          type="text"
          placeholder="Mobile number or email"
          className="border border-[#ccc] p-4 w-[100%] rounded-lg mt-[100px]"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-[#ccc] p-4 w-[100%] rounded-lg mt-[20px] placeholder:font-medium"
        />
        <div className="bg-blue-600 p-3 w-[100%] mt-4 text-center text-white rounded-[100px]">
          <button>Log in</button>
        </div>
        <div className="mt-4">Forgot Password?</div>
        <div className="border border-[#0068ff] text-[#0068ff] p-2 w-[100%] rounded-[100px] text-center mt-[170px] mb-4">
          Create new account
        </div>
        <img
          src="https://github.com/Adornadowilliam2/images/blob/main/image__1_-removebg-preview.png?raw=true"
          alt="meta logo"
          className="w-[60px]"
        />
        <div className="mt-7">
          <ul className="flex gap-2 text-[10px] text-[gray]">
            <li>About</li>
            <li>Help</li>
            <li>More</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
