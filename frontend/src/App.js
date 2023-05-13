import p1 from "./images/avatar-mark-webber.webp";

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen py-5 bg-nvlgb font-main">
      <div className="w-screen h-screen bg-nwhite p-4 md:desktop-bg">
        {/* The Navbar */}
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-4">
            <h1 className="text-lg font-extrabold text-nvdb">Notifications</h1>
            <div className="h-full w-8 rounded-md text-center bg-pblue text-nwhite">
              3
            </div>
          </div>
          <div className="text-sm text-ndgb font-medium hover:cursor-pointer hover:text-pblue">
            Mark all as read
          </div>
        </div>
        <div className="w-full max-h-full mt-5 bg-red-500">
          {/* First Notification */}
          <div className="flex justify-center items-start gap-3 w-full h-auto p-3 bg-nvlgb shadow-sm rounded-sm">
            <img src={p1} alt="mark" className="w-10 h-10" />
            <div className="flex flex-col flex-1">
              <div className="text-sm text-ngb after:content-[''] after:w-5 after:h-5 after:bg-pred after:rounded-full">
                <span className="font-extrabold text-nvdb">Mark Webber</span>{" "}
                reacted to your recent post{"  "}
                <span className="text-ndgb">
                  My first tournament today!
                </span>{" "}
              </div>
              <p className="text-sm text-ngb">1m ago</p>
            </div>
          </div>
          {/* Second Notification */}
          {/* Third Notification */}
          {/* Forth Notification */}
          {/* Fifth Notification */}
          {/* Sixth Notification */}
          {/* Seventh Notification */}
        </div>
      </div>
    </div>
  );
}

export default App;
