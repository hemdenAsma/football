import { TestBed } from '@angular/core/testing';

import { StandingService } from './standing.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('StandingService', () => {
  let service: StandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(StandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
