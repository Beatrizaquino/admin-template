import Logo from "./Logo";
import MenuItem from "./MenuItems";
import { IconAlert, IconCode, IconHome, IconSetting } from "./icons";


export default function MenuLateral() {
    return (
        <aside>
            <div className={`
            flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-600 via-blue-800 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className={``}>
                <MenuItem url="/" texto="Home" icone={IconHome}/>
                <MenuItem url="/settings"  texto="Settings" icone={IconSetting}/>
                <MenuItem url="/alert"  texto="Alert" icone={IconAlert}/>
                <MenuItem url="/study"  texto="Study" icone={IconCode}/>
            </ul>
        </aside>
    )
}