console.log('__POWERED_BY_QIANKUN__:'+window.__POWERED_BY_QIANKUN__);
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  console.log('__webpack_public_path__:'+ __webpack_public_path__);
  console.log('__INJECTED_PUBLIC_PATH_BY_QIANKUN__:'+ window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);

  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
