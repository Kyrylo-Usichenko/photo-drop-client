import HttpClientProtected from './http-client-protected';
import TokensLocalStorage from "../utils/local-storage/TokensLocalStorage";


export default class MainProtected extends HttpClientProtected {
    private static instanceCached: MainProtected;

    private constructor() {
        super(process.env.REACT_APP_BASE_URL);
    }

    static getInstance = () => {
        if (!MainProtected.instanceCached) {
            MainProtected.instanceCached = new MainProtected();
        }

        return MainProtected.instanceCached;
    };

    public getPostPhotoUrl = (file_type: string | null) =>
        this.instance.get<any>(`/selfies/presign-url?file_type=${file_type}`)
    public getSelfie = () =>
        this.instance.get<any>(`/selfies`)
    public getUser = () =>
        this.instance.get<any>(`/clients`)
    public updateUserName = (name: string) =>
        this.instance.patch<any>(`/clients/full-name`, {full_name: name})

}
