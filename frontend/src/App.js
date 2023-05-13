import p1 from "./images/avatar-mark-webber.webp";
import p2 from "./images/avatar-angela-gray.webp";
import p3 from "./images/avatar-jacob-thompson.webp";
import p4 from "./images/avatar-rizky-hasanuddin.webp";
import p5 from "./images/avatar-kimberly-smith.webp";
import p6 from "./images/avatar-nathan-peterson.webp";
import p7 from "./images/avatar-anna-kim.webp";
import chess from "./images/image-chess.webp";

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen py-2 bg-nvlgb font-main">
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
        <div className="flex flex-col gap-2 max-w-full h-auto mt-5 ">
          {/* First Notification */}
          <div className="flex justify-center items-start gap-3 w-full h-auto p-3 bg-nvlgb shadow-sm rounded-sm">
            <img src={p1} alt="mark" className="w-10 h-10" />
            <div className="flex flex-col flex-1">
              <div className="text-sm text-ngb after:inline-block after:w-2 after:h-2 after:ml-1 after:bg-pred after:rounded-full">
                <span className="font-extrabold text-nvdb hover:cursor-pointer hover:text-pblue">
                  Mark Webber
                </span>{" "}
                reacted to your recent post{"  "}
                <span className="text-ndgb font-extrabold hover:cursor-pointer hover:text-pblue">
                  My first tournament today!
                </span>{" "}
              </div>
              <p className="text-sm text-ngb">1m ago</p>
            </div>
          </div>
          {/* Second Notification */}
          <div className="flex justify-center items-start gap-3 w-full h-auto p-3 bg-nvlgb shadow-sm rounded-sm">
            <img src={p2} alt="angela" className="w-10 h-10" />
            <div className="flex flex-col flex-1">
              <div className="text-sm text-ngb after:inline-block after:w-2 after:h-2 after:ml-1 after:bg-pred after:rounded-full">
                <span className="font-extrabold text-nvdb hover:cursor-pointer hover:text-pblue">
                  Angela Gray
                </span>{" "}
                followed you
              </div>
              <p className="text-sm text-ngb">5m ago</p>
            </div>
          </div>
          {/* Third Notification */}
          <div className="flex justify-center items-start gap-3 w-full h-auto p-3 bg-nvlgb shadow-sm rounded-sm">
            <img src={p3} alt="jacob" className="w-10 h-10" />
            <div className="flex flex-col flex-1">
              <div className="text-sm text-ngb after:inline-block after:w-2 after:h-2 after:ml-1 after:bg-pred after:rounded-full">
                <span className="font-extrabold text-nvdb hover:cursor-pointer hover:text-pblue">
                  Jacob Thompson
                </span>{" "}
                has joined your group{"  "}
                <span className="text-pblue font-extrabold hover:cursor-pointer">
                  Chess Club
                </span>{" "}
              </div>
              <p className="text-sm text-ngb">1 day ago</p>
            </div>
          </div>
          {/* Forth Notification */}
          <div className="flex justify-center items-start gap-3 w-full h-auto p-3  rounded-sm">
            <img src={p4} alt="rizky" className="w-10 h-10" />
            <div className="flex flex-col flex-1">
              <div className="text-sm text-ngb">
                <span className="font-extrabold text-nvdb hover:cursor-pointer hover:text-pblue">
                  Rizky Hasanuddin
                </span>{" "}
                sent you a private message
              </div>
              <p className="text-sm text-ngb">5 days ago</p>
              <div className="p-2  mt-2 border-2 border-nlgb2 rounded-md">
                <p className="text-sm font-medium text-ngb">
                  Hello, thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and improving my game.
                </p>
              </div>
            </div>
          </div>
          {/* Fifth Notification */}
          <div className="flex justify-center items-start gap-3 w-full h-auto p-3 rounded-sm">
            <img src={p5} alt="kimberly" className="w-10 h-10" />
            <div className="flex flex-col flex-1">
              <div className="text-sm text-ngb ">
                <span className="font-extrabold text-nvdb hover:cursor-pointer hover:text-pblue">
                  Kimberly Smith
                </span>{" "}
                commented on your picture
              </div>
              <p className="text-sm text-ngb">1 week ago</p>
            </div>
            <img src={chess} alt="chess" className="w-10 h-10" />
          </div>
          {/* Sixth Notification */}
          <div className="flex justify-center items-start gap-3 w-full h-auto p-3 rounded-sm">
            <img src={p6} alt="nathan" className="w-10 h-10" />
            <div className="flex flex-col flex-1">
              <div className="text-sm text-ngb">
                <span className="font-extrabold text-nvdb hover:cursor-pointer hover:text-pblue">
                  Nathan Peterson
                </span>{" "}
                reacted to your recent post{" "}
                <span className="text-ndgb font-extrabold hover:cursor-pointer hover:text-pblue">
                  5 end-game strategies to increase your win rate
                </span>
              </div>
              <p className="text-sm text-ngb">2 weeks ago</p>
            </div>
          </div>
          {/* Seventh Notification */}
          <div className="flex justify-center items-start gap-3 w-full h-auto p-3 rounded-sm">
            <img src={p7} alt="anna" className="w-10 h-10" />
            <div className="flex flex-col flex-1">
              <div className="text-sm text-ngb">
                <span className="font-extrabold text-nvdb hover:cursor-pointer hover:text-pblue">
                  Anna Kim
                </span>{" "}
                left the group{"  "}
                <span className="text-pblue font-extrabold hover:cursor-pointer">
                  Chess Club
                </span>{" "}
              </div>
              <p className="text-sm text-ngb">2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
