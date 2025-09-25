
const Footer: React.FC = () => {
  return (
    <div className="bg-neutral-200 absolute bottom-0 w-full items-center">
        <p className="text-sm px-8 py-3 text-slate-600">India</p>
        <div className="flex py-3 px-8">
            <ul className="flex [&>*]:mr-6 text-sm text-slate-600">
            {/* [&>*]:mr-6 to give fuctiojn written in parent class to child class */}
                <li>About</li>
                <li>Advertising</li>
                <li>Bussiness</li>
                <li>How Search works</li>
            </ul>
            <ul className="flex ml-auto [&>*]:mr-6 text-sm text-slate-600">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Settings</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer