import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { AcademyCourseService } from 'app/main/apps/academy/course.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'academy-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AcademyCourseComponent
  implements OnInit, OnDestroy, AfterViewInit {
  animationDirection: 'left' | 'right' | 'none';
  course: any;
  courseStepContent: any;
  currentStep: number;
  results: any;

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
    private _httpClient: HttpClient,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    // Set the defaults
    this.animationDirection = 'none';
    this.currentStep = 0;
    this.results = [];

    // Set the private defaults
    this._unsubscribeAll = new Subject();

    iconRegistry.addSvgIcon('record_voice_over', sanitizer.bypassSecurityTrustResourceUrl('assets/images/examples/record_voice_over.svg'));
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to courses
    this._academyCourseService.onCourseChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(course => {
        this.course = course[0];
        this.course.steps = [
          {
            title: this.course.step1_type
          },
          {
            title: this.course.step2_type
          },
          {
            title: this.course.step3_type
          }
        ];
        this.getContent(this.course.step1_type).then(data => {
          this.course.steps[0].content = data;
        });
        this.getContent(this.course.step2_type).then(data => {
          this.course.steps[1].content = data;
        });
        this.getContent(this.course.step3_type).then(data => {
          this.course.steps[2].content = data;
        });
      });
    // this.getContentsExample(1)
    // .then(
    //     data => {
    //       this.results = data;
    //     }
    // );
    // console.log(this);
  }

  /**
   * After view init
   */
  ngAfterViewInit(): void {
    this.courseStepContent = this.fuseScrollbarDirectives.find(
      fuseScrollbarDirective => {
        return (
          fuseScrollbarDirective.elementRef.nativeElement.id ===
          'course-step-content'
        );
      }
    );
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
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
  gotoStep(step): void {
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
  gotoNextStep(): void {
    if (this.currentStep === this.course.totalSteps - 1) {
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
  gotoPreviousStep(): void {
    if (this.currentStep === 0) {
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
  toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

  getContent(step): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient
        .get('http://127.0.0.1:3000/api/courses/steps/' + step)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  getContentsExample(el): any {
    return new Promise((resolve, reject) => {
      this._httpClient
        .get('http://127.0.0.1:3000/api/courses/steps/examples/' + el)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}
