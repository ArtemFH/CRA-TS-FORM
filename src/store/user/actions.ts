import {IUser} from "../../models/user/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";
import templatesApi from "../../api/requests/template"

export const fetchTemplates = createAsyncThunk<IUser[]>('template', async () => {
    const response = await templatesApi.getTemplates()
    return response.data;
})
