import MenuItem from "./MenuItems";
import { IconAlert, IconCode, IconHome, IconSetting } from "./icons";


export default function MenuLateral() {
    return (
        <aside>
            <ul className={``}>
                <MenuItem url="/Home" texto="Home" icone={IconHome}/>
                <MenuItem url="/Settings"  texto="Settings" icone={IconSetting}/>
                <MenuItem url="/Alert"  texto="Alert" icone={IconAlert}/>
                <MenuItem url="/Study"  texto="Study" icone={IconCode}/>
            </ul>
        </aside>
    )
}