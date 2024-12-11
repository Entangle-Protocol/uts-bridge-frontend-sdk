export interface IAppRepository {
  getGlobalConfigUi(args: { id: number }): Promise<any | undefined>
}
