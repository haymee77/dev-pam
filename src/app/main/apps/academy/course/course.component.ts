import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { AcademyCourseService } from 'app/main/apps/academy/course.service';

@Component({
    selector     : 'academy-course',
    templateUrl  : './course.component.html',
    styleUrls    : ['./course.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AcademyCourseComponent implements OnInit, OnDestroy, AfterViewInit
{
    animationDirection: 'left' | 'right' | 'none';
    course: any;
    courseStepContent: any;
    currentStep: number;
    step1Contents: any;

    @ViewChildren(FusePerfectScrollbarDirective)
    fuseScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AcademyCourseService} _academyCourseService
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {FuseSidebarService} _fuseSidebarService
     */
    constructor(
        private _academyCourseService: AcademyCourseService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseSidebarService: FuseSidebarService,
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.animationDirection = 'none';
        this.currentStep = 0;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to courses
        this._academyCourseService.onCourseChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(course => {

                this.course = course[0];
                // this.getContent(this.course.step1_type).subscribe(data => {
                //     console.log(data);
                //     this.step1Contents = data;
                // });
                this.course.steps = [
                    { title: this.course.step1_type, content: this.step1Contents },
                    {
                        title: this.course.step2_type, content: this.getContent(this.course.step2_type).subscribe(
                            (data) => this.step1Contents = { ...data }, // success path
                            // error => this.error = error // error path
                        ) },
                    { title: this.course.step3_type, content: this.getContent(this.course.step3_type) }
                ];
                console.log(this.step1Contents);
                console.log(this.getContent(this.course.step2_type));
            });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        this.courseStepContent = this.fuseScrollbarDirectives.find((fuseScrollbarDirective) => {
            return fuseScrollbarDirective.elementRef.nativeElement.id === 'course-step-content';
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Go to step
     *
     * @param step
     */
    gotoStep(step): void
    {
        // Decide the animation direction
        this.animationDirection = this.currentStep < step ? 'left' : 'right';

        // Run change detection so the change
        // in the animation direction registered
        this._changeDetectorRef.detectChanges();

        // Set the current step
        this.currentStep = step;
    }

    /**
     * Go to next step
     */
    gotoNextStep(): void
    {
        if ( this.currentStep === this.course.totalSteps - 1 )
        {
            return;
        }

        // Set the animation direction
        this.animationDirection = 'left';

        // Run change detection so the change
        // in the animation direction registered
        this._changeDetectorRef.detectChanges();

        // Increase the current step
        this.currentStep++;
    }

    /**
     * Go to previous step
     */
    gotoPreviousStep(): void
    {
        if ( this.currentStep === 0 )
        {
            return;
        }

        // Set the animation direction
        this.animationDirection = 'right';

        // Run change detection so the change
        // in the animation direction registered
        this._changeDetectorRef.detectChanges();

        // Decrease the current step
        this.currentStep--;
    }

    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void
    {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }

    // getContent(step): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         this._httpClient
    //             .get('http://127.0.0.1:3000/api/courses/steps/' + step)
    //             .subscribe((response: any) => {
    //                 resolve(response);
    //             }, reject);
    //     });
    // }

    getContent(step): any {
        return this._httpClient
            .get('http://127.0.0.1:3000/api/courses/steps/' + step);
    }
}
