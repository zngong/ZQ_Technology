
import { RouteReuseStrategy, DefaultUrlSerializer, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class AppReuseStrategy implements RouteReuseStrategy {
    public storedRouteHandles = new Map<string, DetachedRouteHandle>();
    /** 如果直接返回true,表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return route.data && route.data.key;
    }

    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.storedRouteHandles.set(route.data["key"], handle);
    }

    /** 若在缓存中有的都认为允许还原路由 */
    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return  this.storedRouteHandles.has(route.data["key"]);
    }

    /** 从缓存中获取快照，若无则返回nul */
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig) {
            return null
        }
        return this.storedRouteHandles.get(route.data["key"]);
    }
    /** 进入路由触发，判断是否同一路由 */
    public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig
    }
    
    public deleteReuseRoute(key:string){
        console.log("====storedRouteHandles====",this.storedRouteHandles)
    }


}