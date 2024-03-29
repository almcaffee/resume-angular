import { HttpClient } from '@angular/common/http';
import { Injectable, Renderer2 } from '@angular/core';
import { Observable, combineLatest, from, map, take } from 'rxjs';
import { environment } from '../../environments/environment';

const _win = window ?? {};

export interface RawContent {
  filename: string;
  content: string;
  label: string;
  ext: string;
}
@Injectable({
  providedIn: 'root',
})
export class WebService {
  protected baseUrl = `${environment.apiDomain}/api`;
  protected rawContentUrl = environment.gitHubUrl;
  constructor(protected readonly httpClient: HttpClient) {
    this.onInit(); // Not to be confused with ngOnInit
  }

  /** Method to be overwritten by extended classes to be called in constructor */
  onInit() {}

  /**
   * Sets the baseUrl for all requests.
   * For dev this can point to alternative environments.
   * @param baseUrl If you want to override the baseUrl, you can do so here.
   */
  setBaseUrl(baseUrl: string): void {
    this.baseUrl = `${baseUrl}/api`;
  }

  /**
   * Makes a get request to the server.
   * Imports {@link makeRequest}
   * @param url Endpoint to get from
   * @param options Http.get options defaults to empty object
   * @returns Chainable Observable<T> in which T is the type passed by the fn call or defaults to unknown
   */
  makeGetRequest<T = unknown>(
    url: string,
    options: object = {},
  ): Observable<T> {
    const request = this.httpClient.get<T>(url, {
      ...options,
    });
    return this.makeRequest<T>(request);
  }

  /**
   * Makes a post request to the server.
   * Imports {@link makeRequest}, {@link cleanUrl}
   * @param url Endpoint to post to
   * @param body body of the post request defaults to empty object
   * @param options Http.post options defaults to empty object
   * @returns Chainable Observable<T> in which T is the type passed by the fn call or defaults to unknown
   */
  makePostRequest<T = unknown>(
    url: string,
    body: Record<string, unknown>,
    options: Record<string, unknown>,
  ): Observable<T | unknown> {
    const postBody = body || {};
    const postOptions = options || {};

    if (postOptions['responseType'] === 'text') {
      const request = this.httpClient.post(url, postBody, {
        ...postOptions,
        responseType: 'text',
      });
      return this.makeRequest(request);
    }

    const request = this.httpClient.post<T>(url, body, {
      ...postOptions,
      responseType: 'json',
    });
    return this.makeRequest(request);
  }

  /**
   * Deletes a resource from the server.
   * Imports {@link makeRequest}, {@link cleanUrl}
   * @param url Endpoint to delete
   * @param options Http.delete options
   * @param mxOpts Mixpanel options
   * @returns Chainable Observable<T> in which T is the type passed by the fn call or defaults to unknown
   */
  makeDeleteRequest<T = unknown>(
    url: string,
    options: object = {},
  ): Observable<T | unknown> {
    const request = this.httpClient.delete(url, {
      ...options,
      responseType: 'text',
    });
    return this.makeRequest(request);
  }

  /**
   * Makes the Http request. Useful if actions need to be performed each request.
   * @param request The rxjs request to be made
   * @returns Chainable Observable<T> in which T is the type passed by the fn call or defaults to unknown
   */
  makeRequest<T = unknown>(request: Observable<T>): Observable<T> {
    return request.pipe(take(1));
  }

  makeMultipleRawContentRequests(
    paths: Array<string>,
  ): Observable<Array<RawContent>> {
    return combineLatest(paths.map((path) => this.makeRawContentRequest(path)));
  }

  makeRawContentRequest(path: string): Observable<RawContent> {
    return this.makeGetRequest<string>(`${this.rawContentUrl}/${path}`, {
      responseType: 'text',
    }).pipe(
      map((content) => {
        const filename = path.split('/').pop()!;
        const name = filename.split('.').shift()!.split('-').join(' ');
        const ext = filename.split('.').pop()!;

        return {
          filename,
          content,
          label: name,
          ext,
        };
      }),
    );
  }

  /**
   * Makes an external request that transforms the request from a promise to an observable.
   * Imports {@link makeRequest}
   * @param request The promise request to be made
   * @param url The url of the request
   * @returns Chainable Observable<T> in which T is the type passed by the fn call or defaults to unknown
   */
  makePromiseRequest<T = unknown>(
    request: Promise<T>,
    url: string,
  ): Observable<T> {
    const externalRequest = from(request);
    return this.makeRequest<T>(externalRequest);
  }
}
