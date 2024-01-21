import { HttpClient, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { EMPTY, Observable, Subject, catchError, from, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  messages = new Subject<Message>();
  messages$ = this.messages.asObservable();

  protected baseUrl = 'http://localhost:3000/api';
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
    return request.pipe(
      take(1),
      catchError((err) => {
        const { status, error, message } = err;
        const severity =
          status < 300
            ? 'success'
            : status < 400
              ? 'info'
              : status < 500
                ? 'warning'
                : 'error';
        const summary =
          status < 300
            ? 'Success'
            : status < 400
              ? 'Info'
              : status < 500
                ? 'Warning'
                : 'Server error';
        this.messages.next({
          severity,
          summary,
          detail: message ?? error ?? 'Unknown error',
        });
        return EMPTY;
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
