export default function Hero (props){
  return (
    <div className="px-8 pt-6 pb-28 space-y-4 relative">
      <p className="text-[39px] font-bold">Fun facts about React</p>
      <ul className="space-y-3 list-disc marker:text-sky-500 pl-5 text-base">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
        <img
          src="/images/Group.svg"
          className="absolute -right-4 overflow-x-hidden top-16"
          alt="logo"
        />
    </div>
  );
}