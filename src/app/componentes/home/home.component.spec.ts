import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

const btn = document.querySelector('.btn') as HTMLAnchorElement;
const videoContainer = document.querySelector('.video-container') as HTMLDivElement;
const close = document.querySelector('.close') as HTMLSpanElement;
const video = videoContainer.querySelector('video') as HTMLVideoElement;

btn.addEventListener('click', () => {
  videoContainer.classList.add('show');
  videoContainer.style.pointerEvents = "auto";
  videoContainer.style.opacity = "100";
});

close.addEventListener('click', () => {
  videoContainer.classList.remove('show');
  videoContainer.style.pointerEvents = "none";
  videoContainer.style.opacity = "110";
  video.pause();
});
