import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramImagesComponent } from './instagram-images.component';

describe('InstagramImagesComponent', () => {
  let component: InstagramImagesComponent;
  let fixture: ComponentFixture<InstagramImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
