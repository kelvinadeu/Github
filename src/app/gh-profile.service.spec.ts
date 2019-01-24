import { TestBed, inject } from '@angular/core/testing';

import { GhProfileService } from './gh-profile.service';

describe('GhProfileService', () => {
  beforeEach(() =>{
   TestBed.configureTestingModule({
     providers:[GhProfileService]
   });
 });
  it('should be created',inject([GhProfileService]),(service:GhProfileService) => {
    expect(service).toBeTruthy();
  }));
});
