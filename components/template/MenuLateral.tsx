import MenuItem from "./MenuItems";
import { IconAlert, IconCode, IconHome, IconSetting } from "./icons";


export default function MenuLateral() {
    return (
        <aside>
            <ul className={``}>
                <MenuItem url="/" texto="Home" icone={IconHome}/>
                <MenuItem url="/settings"  texto="Settings" icone={IconSetting}/>
                <MenuItem url="/alert"  texto="Alert" icone={IconAlert}/>
                <MenuItem url="/study"  texto="Study" icone={IconCode}/>
            </ul>
        </aside>
    )
}