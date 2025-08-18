// import PlayGround from "./components/PlayGround";
import Button_clsx from "./components/Button_clsx";
import Button_cva from "./components/Button_cva";
import Button_tw from "./components/Button_tw";
import Button_twMerge from "./components/Button_twMerge";
import Card from "./components/Card";
import ChatCard from "./components/ChatCard";
import Profile from "./components/Profile";
import ProfileCard from "./components/ProfileCard";
import "/src/styles/style.css";

function App() {
  return (
    <div>
      <h1 className="flex justify-center items-center bg-indigo-500 text-white px-4 py-2 text-shadow-lg">
        hello tailwind
      </h1>

      <hr className="my-5" />

      {/* <PlayGround /> */}

      <ChatCard />

      <hr className="my-5" />

      <ProfileCard />

      <hr className="my-5" />

      <Profile />

      <hr className="my-5" />

      <Button_twMerge type="primary" className="bg-red-500">
        Call To Action
      </Button_twMerge>

      <hr className="my-5" />

      <Button_clsx size="sm" className="bg-orange-400">
        Call To Action
      </Button_clsx>

      <hr className="my-5" />

      <Button_tw size="lg" className="bg-emerald-500" disabled>
        Call To Action
      </Button_tw>

      <hr className="my-5" />

      <Button_cva intent='secondary' block size="lg" disabled className='bg-indigo-500' loading={true}>Call To Action</Button_cva>

      <hr className='my-5'/>

      <Button_cva intent='primary' block size="lg" className='text-6xl' loading={true}>Call To Action</Button_cva>
     
      <hr className="my-5" />

      <Button_cva>Call TO Action</Button_cva>

      <hr className="my-5" />

      <Card
        type="primary"
        logoSrc="/Logo-Facebook.png"
        rate="$120/hr"
        title="Senior UI Developer"
        company="Facebook"
      />

      <Card
        type="secondary"
        logoSrc="/Logo-google.png"
        rate="$260/hr"
        title="Senior Data Engineer"
        company="Google"
      />

      <Card
        type="tertiary"
        logoSrc="/Logo-Airbnb.png"
        rate="$80/hr"
        title="Senior UX Designer"
        company="Airbnb"
        className="max-w-[400px]"
      />



    </div>


  );
}
export default App;
