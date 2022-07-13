import HttpClientProtected from './http-client-protected';
import {phoneResponse} from "./main";

export type UpdateNotification = {
    text_message: boolean,
    email: boolean,
    unsubscribe: boolean,
}
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

    public updateNotifications = (body: UpdateNotification) =>
        this.instance.patch(`/clients/notification-settings`, body)

   public updatePhone = (body: {phone_number: string}) =>
        this.instance.post(`/clients/phone-number`, body )

    public otpUpdateValidate = (data: { "phone_number": string, "otp": string }) =>
        this.instance.post("/clients/phone-number/validate", data);

    public updateEmail = (body: {email: string}) =>
        this.instance.patch(`/clients/email`, body )
    public resendUpdatePhone = (data: { "phone_number": string, }) => this.instance.post<phoneResponse>("/clients/phone-number/resend", data);

    public getAlbums = () => this.instance.get<any>("/albums");

    public getAllPhotos = () => this.instance.get<any>("/all-photos");

    public getPhotos = (id: string) => this.instance.get<any>(`/photos/${id}`);

}
