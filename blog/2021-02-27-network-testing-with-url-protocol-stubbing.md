---
slug: network-testing-with-url-protocol-stubbing
title: Testing netwok requests with URLProtocol stubs
authors: [anton]
tags: [swift, URLProtocol, testing, networking, ios]
---

Apple has a powerful [URL Loading System](https://developer.apple.com/documentation/foundation/url_loading_system) which can be used in various ways with a bunch of most common URL schemes. It also includes the [URLProtocol](https://developer.apple.com/documentation/foundation/urlprotocol), a class that can intercept all network requests for different purposes. You can use it for analytics, testing, and even profiling your application.
<!-- truncate -->
All you need to do is to subclass the `URLProtocol` and override nessesary methods.
```swift
class URLProtocolStub: URLProtocol {
    override class func canInit(with request: URLRequest) -> Bool {
        guard let url = request.url, let host = url.host else { return false }
            
        return host.hasSuffix("example.com")
    }

    override class func canonicalRequest(for request: URLRequest) -> URLRequest {
        return request
    }
}
```
After that you have to register it __before__ any network request were made and also unregister if needed:
```swift
override func setUp() {
    super.setUp()
    
    URLProtocol.registerClass(URLProtocolStub.self)
}

override func tearDown() {
    super.tearDown()
    
    URLProtocol.unregisterClass(URLProtocolStub.self)
}
```
And from now you can decide how to handle every single network request made within your application. 

For example you can stub a response before any paticular request will be executed and response immediately.
```swift
class URLProtocolStub: URLProtocol {
    enum URLResponseStub {
        case failure(Error)
        case success(Data)
    }
    
    static var stubs = [URL: URLResponseStub]()
    
    override func startLoading() {
        guard let url = request.url, let stub = URLProtocolStub.stubs[url] else { return }
        
        switch stub {
        case .failure(let error):
            client?.urlProtocol(self, didFailWithError: error)
        case .success(let data):
            client?.urlProtocol(self, didLoad: data)
        }
    }
    override func stopLoading() {}
}
```
:::caution
You have to implement `stopLoading` method even if you don't need it
:::

This approach gives you ability to mock any response you want just writing a fiew lines of code.
```swift
let url = URL(string: "https://example.com")!
let error = NSError(domain: "", code: 0)
URLProtocolStub.stubs[url] = .failure(error)
```

Just make sure that the whole mock stuff happens before the actual network requests.