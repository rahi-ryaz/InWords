import { Auth } from "../components/Auth"
import { Welcome } from "../components/Welcome"


export const Signin = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signin" />
            </div>
            <div className="hidden lg:block">
                <Welcome/>
            </div>
        </div>
    </div>
}