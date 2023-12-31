export const USER_COUNT_PER_PAGE = 6;

class Api {
  public get positions(): string {
    return "/positions";
  }

  public get users(): string {
    return "/users";
  }

  public get token(): string {
    return "/token";
  }

  public usersPagination(page: number, count: number = USER_COUNT_PER_PAGE): string {
    return `/users?page=${page}&count=${count}`;
  }
}

export default new Api();
