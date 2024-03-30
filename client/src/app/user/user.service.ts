import { Injectable, OnDestroy } from "@angular/core";
import { UserForAuth } from "../types/user";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Subscription, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  api = "http://localhost:3030/users";
  user: UserForAuth | undefined;
  USER_KEY = "[user]";

  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>(`${this.api}/login`, { email, password })
      .pipe(
        tap((user) => {
          this.user$$.next(user);
          localStorage.setItem("token", JSON.stringify(user));
        })
      );
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string
  ) {
    return this.http
      .post<UserForAuth>(`${this.api}/register`, {
        username,
        email,
        password,
        rePassword,
      })
      .pipe(
        tap((user) => {
          this.user$$.next(user);
          localStorage.setItem("token", JSON.stringify(user));
        })
      );
  }

  logout() {
    return this.http.post(`${this.api}/logout`, {}).pipe(
      tap(() => {
        this.user$$.next(undefined);
        localStorage.removeItem("token");
      })
    );
  }

  getMyProfile() {
    return this.http
      .get<UserForAuth>(`${this.api}/me`)
      .pipe(tap((user) => this.user$$.next(user)));
  }
  getMyPosts() {
    //TODO
  }

  getSavedBooks() {
    //TODO
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
