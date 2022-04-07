export interface IParams {
    page ?: string
    control? : string 
}

export interface IHeader{
    title ? : string
    checkControl ? : boolean 
    path ? : string
}
export interface IbreadCrumbName{
  path? :string
}

export interface IRoute {
    path: string;
    breadcrumbName: string;
    children: Array<{
      path: string;
      breadcrumbName: string;
    }>;
  }