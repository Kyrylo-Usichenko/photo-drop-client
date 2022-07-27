import { createReducerFunction, ImmerReducer } from "immer-reducer";

interface UserState {
  responseCode: string | null;
  redirectToUrl: string | null;
  phone: string;
  isAuth: boolean;
  isLoading: boolean;
  selfie: string | null;
  tempSelfie: string | null;
  user: {
    full_name?: string | null;
    id?: string | null;
    phone_number?: string | null;
    email?: string | null;
    notification_settings?: {
      text_message: boolean;
      email: boolean;
      unsubscribe: boolean;
    };
    selfie?: {
      photo_url: string;
    };
  } | null;
  albums: Array<any> | null;
  albumsPhotos: Array<any>;
  albumPhotos: Array<any> | null;
  albumDate: number | null;
  albumLocation: string | null;
  allPhotos: Array<any> | null;
}

const initialState: UserState = {
  redirectToUrl: null,
  responseCode: null,
  phone: "",
  isAuth: false,
  isLoading: false,
  selfie: null,
  tempSelfie: null,
  user: null,
  albums: null,
  albumsPhotos: [],
  albumPhotos: null,
  albumDate: null,
  albumLocation: null,
  allPhotos: null,
};

export class User extends ImmerReducer<UserState> {
  setResponseCode(responseCode: string | null) {
    this.draftState.responseCode = responseCode;
  }

  setPhone(phone: string) {
    this.draftState.phone = phone;
  }

  redirectUser(url: string | null) {
    this.draftState.redirectToUrl = url;
  }

  setAuth(isAuth: boolean) {
    this.draftState.isAuth = isAuth;
  }

  setLoading(isLoading: boolean) {
    this.draftState.isLoading = isLoading;
  }

  setSelfie(url: string) {
    this.draftState.selfie = url;
  }

  setTempSelfie(photo: string | null) {
    this.draftState.tempSelfie = photo;
  }

  setUser(user: any, selfie: { photo_url: string }) {
    this.draftState.user = { ...user, selfie: selfie };
  }
  setUserSelfie1(selfie: string) {
    this.draftState.user = {
      ...this.draftState.user,
      selfie: {
        photo_url: selfie,
      },
    };
  }

  setUserName(name: string) {
    this.draftState.user = {
      ...this.draftState.user,
      full_name: name,
    };
  }

  setUserPhone(phone: string) {
    this.draftState.user = {
      ...this.draftState.user,
      phone_number: phone,
    };
  }

  setUserNotification(body: {
    text_message: boolean;
    email: boolean;
    unsubscribe: boolean;
  }) {
    this.draftState.user = {
      ...this.draftState.user,
      notification_settings: {
        text_message: body.text_message,
        email: body.email,
        unsubscribe: body.unsubscribe,
      },
    };
  }

  setEmail(email: string) {
    this.draftState.user = {
      ...this.draftState.user,
      email: email,
    };
  }

  setAlbums(albums: Array<any>) {
    this.draftState.albums = albums;
  }

  setAlbumsPhotos(photos: Array<any>) {
    this.draftState.albumsPhotos = [...this.draftState.albumsPhotos, ...photos];
  }
  setAlbumPhotos(data: { photos: any; date: number; locations: string }) {
    this.draftState.albumPhotos = data.photos;
    this.draftState.albumDate = data.date;
    this.draftState.albumLocation = data.locations;
  }
  setAllPhotos(photos: Array<any> | null) {
    this.draftState.allPhotos = photos;
  }
}

export default createReducerFunction(User, initialState);
