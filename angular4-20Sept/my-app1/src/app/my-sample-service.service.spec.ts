import { TestBed, inject } from '@angular/core/testing';

import { MySampleServiceService } from './my-sample-service.service';

describe('MySampleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySampleServiceService]
    });
  });

  it('should be created', inject([MySampleServiceService], (service: MySampleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
