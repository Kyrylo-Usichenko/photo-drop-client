import HttpClientProtected from './http-client-protected';

export type UpdateNotification = {
    text_message: boolean,
    email: boolean,
    unsubscribe: boolean
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

    // public getAlbums = (userId: {}) =>
    //     this.instance.get<any>(`/albums`);
    //
    // public getAlbum = (albumId?: string) =>
    //     this.instance.get<any>(`/albums/${albumId}`);
    //
    // public getPhotos = (albumId?: string) =>
    //     this.instance.get<any>(`/photos/${albumId}`);
    //
    // public createAlbum = (data: {}) =>
    //     this.instance.post<any>('/albums/create', data);
    //
    // public editAlbum = (data: {}) =>
    //     this.instance.patch<any>('/albums/edit', {
    //         headers: {
    //             'Authorization-token': `Bearer ${TokensLocalStorage.getInstance().getAccessToken()}`,
    //         }, data
    //     });
    // public getAddPhotoUrlS3 = (data: { name: string, ownerId: string, albumId: string, fileType: string }) =>
    //     this.instance.get<any>(`/presign-url?name=${data.name}&album_id=${data.albumId}&file_type=${data.fileType}`)

    public getPostPhotoUrl = (file_type: string | null) =>
        this.instance.get<any>(`/selfies/presign-url?file_type=${file_type}`)

    public getSelfie = () =>
        this.instance.get<any>(`/selfies`)

    public getUser = () =>
        this.instance.get<any>(`/clients`)

    public updateNotifications = (body:UpdateNotification) =>
        this.instance.patch(`/clients/notification-settings`, body)

}
