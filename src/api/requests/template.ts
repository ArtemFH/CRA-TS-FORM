import {$instance} from "../api";
import {IUser} from "../../models/user/IUser";


const getTemplates = async () => {
    return await $instance.get<IUser[]>('users')
}

const exported = {
    getTemplates
}

export default exported
