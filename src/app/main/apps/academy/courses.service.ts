import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AcademyCoursesService implements Resolve<any>
{
    onCategoriesChanged: BehaviorSubject<any>;
    onCoursesChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onCategoriesChanged = new BehaviorSubject({});
        this.onCoursesChanged = new BehaviorSubject({});
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getCategories(),
                this.getCourses()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get categories
     *
     * @returns {Promise<any>}
     */
    getCategories(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient
            //   .get("api/academy-categories")
              .get('http://127.0.0.1:3000/api/courses')
              .subscribe((response: any) => {
                this.onCategoriesChanged.next(response);
                resolve(response);
                // console.log(response);
              }, reject);
        });
    }

    /**
     * Get courses
     *
     * @returns {Promise<any>}
     */
    getCourses(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient
              // .get('api/academy-courses')
              .get('http://127.0.0.1:3000/api/courses')
              .subscribe((response: any) => {
                this.onCoursesChanged.next(response);
                resolve(response);
              }, reject);
        });
    }

}
