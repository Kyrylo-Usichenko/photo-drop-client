import axios, {AxiosInstance, AxiosResponse} from "axios";
import Main from "./main";
import TokensLocalStorage from "../utils/local-storage/TokensLocalStorage";

abstract class HttpClient {
    protected readonly instance: AxiosInstance;

    public constructor(
        baseURL: string | undefined,
        contentType = "application/json"
    ) {
        this.instance = axios.create({
            baseURL,
            headers: {
                "Content-Type": contentType,
            },
        });

        this.initializeResponseInterceptor();
    }

    private initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(this.handleSuccessResponse, this.handleResponseError);
    };

    private handleSuccessResponse = ({data}: AxiosResponse) => data;

    private handleResponseError = async (e: any): Promise<any> => {
        const status = e.response ? e.response.status : null;
        const tokens = TokensLocalStorage.getInstance();
        const main = Main.getInstance();
        const currentAccessToken = tokens.getAccessToken();
        if (status === 403 && currentAccessToken) {
            tokens.clear()
            window.location.replace('/login')

        }
        return Promise.reject(e);
    };
}

export default HttpClient;
