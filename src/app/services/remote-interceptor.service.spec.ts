import { TestBed } from '@angular/core/testing';

import { RemoteInterceptorService } from './remote-interceptor.service';

describe('RemoteInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoteInterceptorService = TestBed.get(RemoteInterceptorService);
    expect(service).toBeTruthy();
  });
});
