import MenuItem from "./MenuItems";
import { IconAlert, IconCode, IconHome, IconSetting } from "./icons";


export default function MenuLateral() {
    return (
        <aside>
            <ul className={``}>
                <MenuItem url="/" texto="Home" icone={IconHome}/>
                <MenuItem url="/"  texto="Settings" icone={IconSetting}/>
                <MenuItem url="/"  texto="Alert" icone={IconAlert}/>
                <MenuItem url="/"  texto="Study" icone={IconCode}/>
            </ul>
        </aside>
    )
}