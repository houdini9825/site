// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dfQ8j":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "639f3b8acc4a0a36";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"e0sIE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _headerCtrlJs = require("./headerCtrl.js.js");
var _headerCtrlJsDefault = parcelHelpers.interopDefault(_headerCtrlJs);
var _gameBoardCtrlJs = require("./gameBoardCtrl.js.js");
var _popupCtrlJs = require("./popupCtrl.js.js");
var _popupCtrlJsDefault = parcelHelpers.interopDefault(_popupCtrlJs);
var _menuCtrlJs = require("./menuCtrl.js.js");
var _menuCtrlJsDefault = parcelHelpers.interopDefault(_menuCtrlJs);
function init() {
    (0, _headerCtrlJsDefault.default)();
    (0, _gameBoardCtrlJs.gameBoardInit)();
    (0, _popupCtrlJsDefault.default)();
    (0, _menuCtrlJsDefault.default)();
}
init();

},{"./headerCtrl.js":"iGcR5","./gameBoardCtrl.js":"29kK7","./popupCtrl.js":"8feyN","./menuCtrl.js":"gjz5A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iGcR5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _popupJs = require("../views/popup.js");
var _popupJsDefault = parcelHelpers.interopDefault(_popupJs);
// import scoreFooter from '../views/scoreFooter.js';
var _headerJs = require("../views/header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
// import gameBoard from '../views/gameboard.js';
function controlRefreshBtn() {
    (0, _popupJsDefault.default).renderRestartPopup();
    (0, _popupJsDefault.default).showPopup();
}
function headerInit() {
    (0, _headerJsDefault.default).addHandlerRefreshBtn(controlRefreshBtn);
}
exports.default = headerInit;

},{"../views/popup.js":"95gpZ","../views/header.js":"gMhUr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"95gpZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconXSvg = require("../../assets/icon-x.svg");
var _iconXSvgDefault = parcelHelpers.interopDefault(_iconXSvg);
var _iconOSvg = require("../../assets/icon-o.svg");
var _iconOSvgDefault = parcelHelpers.interopDefault(_iconOSvg);
class PopupView {
    #parentElement = document.querySelector(".pop-up-container");
    #xImage = (0, _iconXSvgDefault.default);
    #oImage = (0, _iconOSvgDefault.default);
    addHandlerPopup(handler) {
        this.#parentElement.addEventListener("click", handler);
    }
    showPopup() {
        this.#parentElement.classList.remove("hidden");
    }
    hidePopup() {
        this.#parentElement.classList.add("hidden");
    }
    renderWinPopup(data) {
        const msg = data.id === "You" ? "You won!" : "Oh no, you lost.";
        const color = data.char === "x" ? "dark-green" : "dark-orange";
        const image = data.char === "x" ? this.#xImage : this.#oImage;
        const html = `<p class="game-complete-msg">${msg}</p>
    <div class="takes-round-container">
      <img src="${image}" alt="">
      <p class="${color}">Takes the round</p>
    </div>
    <div class="popup-buttons-container">
      <button class="popup-btn quit-btn">
        Quit
      </button>
      <button class="popup-btn next-round-btn">
        Next Round
      </button>
    </div>`;
        this.#addToContainer(html);
    }
    renderTiePopup() {
        const html = `<p class="tied-restart-msg">Round Tied</p>
    <div class="popup-buttons-container">
      <button class="popup-btn quit-btn">
        Quit
      </button>
      <button class="popup-btn next-round-btn">
        Next Round
      </button>
    </div>`;
        this.#addToContainer(html);
    }
    renderRestartPopup() {
        const html = `<p class="tied-restart-msg">Restart Game?</p>
    <div class="popup-buttons-container">
      <button class="popup-btn cancel-btn">
        No, cancel
      </button>
      <button class="popup-btn restart-btn">
        Yes, restart
      </button>
    </div>`;
        this.#addToContainer(html);
    }
    #addToContainer(html) {
        this.#parentElement.innerHTML = html;
    }
}
exports.default = new PopupView();

},{"../../assets/icon-x.svg":"2BdmC","../../assets/icon-o.svg":"3RtGn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2BdmC":[function(require,module,exports) {
module.exports = require("8f13a6ea75f11c59").getBundleURL("8yhHL") + "icon-x.559b205c.svg" + "?" + Date.now();

},{"8f13a6ea75f11c59":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3RtGn":[function(require,module,exports) {
module.exports = require("9ea65f49b2f5f714").getBundleURL("8yhHL") + "icon-o.f1e028aa.svg" + "?" + Date.now();

},{"9ea65f49b2f5f714":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gMhUr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconXSvg = require("../../assets/icon-x.svg");
var _iconXSvgDefault = parcelHelpers.interopDefault(_iconXSvg);
var _iconOSvg = require("../../assets/icon-o.svg");
var _iconOSvgDefault = parcelHelpers.interopDefault(_iconOSvg);
class Header {
    #refreshBtn = document.querySelector(".active-reset-button");
    #currentTurnContainer = document.querySelector(".active-turn-notifier");
    #images = {
        x: (0, _iconXSvgDefault.default),
        o: (0, _iconOSvgDefault.default)
    };
    setCurrentTurnImg(data) {
        this.#currentTurnContainer.innerHTML = "";
        const html = `
    <img class="current-turn-image" src="${this.#images[data.char]}" />
    <p>Turn</p>`;
        this.#currentTurnContainer.insertAdjacentHTML("afterbegin", html);
    }
    addHandlerRefreshBtn(handler) {
        this.#refreshBtn.addEventListener("click", handler);
    }
}
exports.default = new Header();

},{"../../assets/icon-x.svg":"2BdmC","../../assets/icon-o.svg":"3RtGn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29kK7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "computerTurn", ()=>computerTurn);
parcelHelpers.export(exports, "gameBoardInit", ()=>gameBoardInit);
var _popupJs = require("../views/popup.js");
var _popupJsDefault = parcelHelpers.interopDefault(_popupJs);
var _scoreFooterJs = require("../views/scoreFooter.js");
var _scoreFooterJsDefault = parcelHelpers.interopDefault(_scoreFooterJs);
var _headerJs = require("../views/header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
var _gameboardJs = require("../views/gameboard.js");
var _gameboardJsDefault = parcelHelpers.interopDefault(_gameboardJs);
var _menuJs = require("../views/menu.js");
var _menuJsDefault = parcelHelpers.interopDefault(_menuJs);
var _gameJs = require("../models/game.js");
var _configJs = require("../config.js");
function computerTurn() {
    setTimeout(function() {
        const move = _gameJs.state.computerMakeMove();
        const computerInfo = _gameJs.state.getCurrentActingInfo();
        const tile = (0, _gameboardJsDefault.default).getTile(move);
        (0, _gameboardJsDefault.default).addCharToTile(tile, computerInfo.char);
        if (!checkWin()) changePlayer();
        checkTie();
    }, (0, _configJs.COMPUTER_DELAY));
}
function playerTurn(tile) {
    const activePlayer = _gameJs.state.getCurrentActingInfo();
    const tileSelection = Number(tile.id.slice(-1));
    (0, _gameboardJsDefault.default).addCharToTile(tile, activePlayer.char);
    _gameJs.state.playerMakeMove(tileSelection);
    if (!checkWin()) changePlayer();
    checkTie();
}
function changePlayer() {
    _gameJs.state.changeActing();
    (0, _headerJsDefault.default).setCurrentTurnImg(_gameJs.state.getCurrentActingInfo());
}
function checkWin() {
    if (_gameJs.state.checkIfWon()) {
        const winnerData = _gameJs.state.getCurrentActingInfo();
        (0, _popupJsDefault.default).renderWinPopup(winnerData);
        (0, _popupJsDefault.default).showPopup();
        (0, _scoreFooterJsDefault.default).changeScore(winnerData);
        _gameJs.state.turnGameOff();
        return true;
    }
    return false;
}
function checkTie() {
    if (_gameJs.state.checkIfBoardFull() && !_gameJs.state.checkIfWon()) {
        _gameJs.state.ties++;
        (0, _popupJsDefault.default).renderTiePopup();
        (0, _popupJsDefault.default).showPopup();
        const data = {
            char: "tie",
            score: _gameJs.state.ties
        };
        (0, _scoreFooterJsDefault.default).changeScore(data);
    }
}
function controlTileClick(e) {
    const tile = e.target.closest(".active-game-tile");
    if (!tile || tile.classList.contains("selected-tile") || _gameJs.state.currentActing.id !== "You") return;
    if (_gameJs.state.checkIfGameOn() && !_gameJs.state.checkIfBoardFull()) playerTurn(tile);
    if (_gameJs.state.checkIfGameOn() && !_gameJs.state.checkIfBoardFull()) computerTurn();
}
function controlTileHover(e) {
    e.preventDefault();
    const tile = e.target.closest(".active-game-tile");
    if (!tile || tile.innerHTML || _gameJs.state.getCurrentActingInfo().id === "CPU") return;
    const activePlayer = _gameJs.state.getCurrentActingInfo();
    (0, _gameboardJsDefault.default).hoverTile(tile, activePlayer.char);
    (0, _gameboardJsDefault.default).addHandlerTileHoverRemoval(tile, controlTileHoverOut);
}
function controlTileHoverOut(e) {
    e.preventDefault();
    const tile = e.target;
    if (tile.classList.contains("selected-tile")) return;
    (0, _gameboardJsDefault.default).clearSingleTile(tile);
}
function gameBoardInit() {
    (0, _gameboardJsDefault.default).addHandlerTileHover(controlTileHover);
    (0, _gameboardJsDefault.default).addHandlerTileClick(controlTileClick);
}

},{"../views/popup.js":"95gpZ","../views/scoreFooter.js":"jRh1w","../views/header.js":"gMhUr","../views/gameboard.js":"02ZQ3","../views/menu.js":"9MGhl","../models/game.js":"a9QkL","../config.js":"6pDRM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRh1w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ScoreFooter {
    #allScoreContainers = document.querySelectorAll(".score-container");
    #getContainer(char) {
        return document.querySelector(`.active-${char}-score-container`);
    }
    setLabel(data) {
        const container = this.#getContainer(data.char);
        const labelEl = container.querySelector(`.active-${data.char}-score-label`);
        labelEl.textContent = `${data.id} (${data.char.toUpperCase()})`;
    }
    changeScore(data) {
        const container = this.#getContainer(data.char);
        const scoreEl = container.querySelector(`.active-${data.char}-score`);
        scoreEl.textContent = data.score;
    }
    resetAllScores() {
        this.#allScoreContainers.forEach((c)=>{
            const score = c.querySelector(".score-number");
            score.textContent = "0";
        });
    }
}
exports.default = new ScoreFooter();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"02ZQ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconXSvg = require("../../assets/icon-x.svg");
var _iconXSvgDefault = parcelHelpers.interopDefault(_iconXSvg);
var _iconOSvg = require("../../assets/icon-o.svg");
var _iconOSvgDefault = parcelHelpers.interopDefault(_iconOSvg);
var _iconXOutlineSvg = require("../../assets/icon-x-outline.svg");
var _iconXOutlineSvgDefault = parcelHelpers.interopDefault(_iconXOutlineSvg);
var _iconOOutlineSvg = require("../../assets/icon-o-outline.svg");
var _iconOOutlineSvgDefault = parcelHelpers.interopDefault(_iconOOutlineSvg);
class GameBoard {
    #gameTiles = [
        ...document.querySelectorAll(".active-game-tile")
    ];
    #gameContainer = document.querySelector(".active-game-container");
    #fullImages = {
        x: (0, _iconXSvgDefault.default),
        o: (0, _iconOSvgDefault.default)
    };
    #outlineImages = {
        x: (0, _iconXOutlineSvgDefault.default),
        o: (0, _iconOOutlineSvgDefault.default)
    };
    addCharToTile(tile, char) {
        // const tileEl = this.#gameTiles.find(
        // 	(t) => Number(t.id.slice(-1)) === tile
        // );
        const html = `<img src="${this.#fullImages[char]}"/>`;
        tile.classList.add("selected-tile");
        tile.innerHTML = html;
    }
    hideGame() {
        this.#gameContainer.classList.add("hidden");
    }
    showGame() {
        this.#gameContainer.classList.remove("hidden");
    }
    clearAllTiles() {
        this.#gameTiles.forEach((tile)=>{
            tile.innerHTML = "";
            tile.classList.remove("selected-tile");
        });
    }
    getTile(move) {
        return this.#gameTiles.find((tile)=>Number(tile.id.slice(-1)) === move);
    }
    clearSingleTile(tile) {
        tile.innerHTML = "";
    }
    addHandlerTileClick(handler) {
        this.#gameContainer.addEventListener("click", handler);
    }
    addHandlerTileHover(handler) {
        this.#gameContainer.addEventListener("mouseover", handler);
    }
    addHandlerTileHoverRemoval(tile, handler) {
        tile.removeEventListener("mouseleave", handler);
        tile.addEventListener("mouseleave", handler);
    }
    hoverTile(tile, char) {
        const html = `<img src="${this.#outlineImages[char]}" />`;
        tile.innerHTML = html;
    }
    removeTileFocus(tile) {
        tile.innerHTML = "";
    }
}
exports.default = new GameBoard();

},{"../../assets/icon-x.svg":"2BdmC","../../assets/icon-o.svg":"3RtGn","../../assets/icon-x-outline.svg":"aJ1n9","../../assets/icon-o-outline.svg":"5XtgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aJ1n9":[function(require,module,exports) {
module.exports = require("7095c4cc1b38a561").getBundleURL("8yhHL") + "icon-x-outline.949da119.svg" + "?" + Date.now();

},{"7095c4cc1b38a561":"lgJ39"}],"5XtgZ":[function(require,module,exports) {
module.exports = require("6908fdcf8bfc4522").getBundleURL("8yhHL") + "icon-o-outline.82a2ee28.svg" + "?" + Date.now();

},{"6908fdcf8bfc4522":"lgJ39"}],"9MGhl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Menu {
    #pickContainer = document.querySelector(".pick-container");
    #pickBtns = [
        ...this.#pickContainer.querySelectorAll("button")
    ];
    #menuContainer = document.querySelector(".menu-container");
    #difficultyContainer = document.querySelector(".difficulty-container");
    addHandlerNewGame(handler) {
        this.#menuContainer.addEventListener("click", handler);
    }
    addHandlerChangeChar(handler) {
        this.#pickContainer.addEventListener("click", handler);
    }
    addHandlerSelectDifficulty(handler) {
        this.#difficultyContainer.addEventListener("click", handler);
    }
    addHandlerCloseErrorMessage(handler) {
        const errorMessage = document.querySelector(".error-message");
        errorMessage.addEventListener("click", handler);
    }
    clearMenuCharSelection() {
        this.#pickBtns.forEach((btn)=>btn.id = "");
    }
    clearDifficulties() {
        const difficulties = document.querySelectorAll(".difficulty-choice");
        difficulties.forEach((d)=>d.classList.remove("selected-difficulty"));
    }
    getDifficulty() {
        const difficulties = [
            ...document.querySelectorAll(".difficulty-choice")
        ];
        return difficulties.find((d)=>d.classList.contains("selected-difficulty")).dataset.val;
    }
    checkIfDifficultySelected() {
        const difficulties = [
            ...document.querySelectorAll(".difficulty-choice")
        ];
        return difficulties.find((d)=>d.classList.contains("selected-difficulty"));
    }
    checkIfCharSelected() {
        return this.#pickBtns.find((b)=>b.id === "char-button-active");
    }
    showErrorMessage() {
        document.querySelector(".error-message").classList.remove("hidden");
    }
    closeErrorMessage() {
        document.querySelector(".error-message").classList.add("hidden");
    }
    hideMenu() {
        this.#menuContainer.classList.add("hidden");
    }
    showMenu() {
        this.#menuContainer.classList.remove("hidden");
    }
    getSelection() {
        const s = this.#pickBtns.find((btn)=>btn.id === "char-button-active");
        return s.dataset.val;
    }
    changeCharChoice(charEl) {
        this.clearMenuCharSelection();
        charEl.id = "char-button-active";
    }
}
exports.default = new Menu();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a9QkL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "playerVsComputer", ()=>playerVsComputer) // export function playerVsplayer(char) {
 // 	char2 = char === 'x' ? 'o' : 'x';
 // 	const player1 = new Player(char, 'Player 1');
 // 	const player2 = new Player(char2, 'Player 2');
 // 	state = new TicTacToe(player1, player2, false);
 // }
;
var _playerJs = require("./player.js.js");
var _computerJs = require("./computer.js.js");
let state;
class TicTacToe {
    constructor(player1, player2, vsComputer = true){
        this.player1 = player1;
        this.player2 = player2;
        this.#findCurrentActing();
        this.vsComputer = vsComputer;
        this.board = new Set();
        this.gameOn = false;
        this.ties = 0;
    }
    #findCurrentActing() {
        this.currentActing = this.player1.char === "x" ? this.player1 : this.player2;
    }
    turnGameOff() {
        this.gameOn = false;
    }
    turnGameOn() {
        this.gameOn = true;
    }
    checkIfGameOn() {
        return this.gameOn;
    }
    clearBoard() {
        this.board.clear();
        for (const player of [
            this.player1,
            this.player2
        ])player.boardPositions.clear();
    }
    resetGame() {
        this.restartGame();
        this.resetScores();
    }
    resetScores() {
        this.player1.resetScore();
        this.player2.resetScore();
        this.ties = 0;
    }
    restartGame() {
        this.clearBoard();
        this.#findCurrentActing();
    }
    changeActing() {
        this.currentActing === this.player1 ? this.currentActing = this.player2 : this.currentActing = this.player1;
    }
    #updateBoard() {
        for (const player of [
            this.player1,
            this.player2
        ])player.boardPositions.forEach((pos)=>this.board.add(pos));
    }
    checkIfWon() {
        const winningVals = [
            [
                1,
                2,
                3
            ],
            [
                1,
                4,
                7
            ],
            [
                1,
                5,
                9
            ],
            [
                2,
                5,
                8
            ],
            [
                3,
                5,
                7
            ],
            [
                3,
                6,
                9
            ],
            [
                4,
                5,
                6
            ],
            [
                7,
                8,
                9
            ]
        ];
        for (const positions of winningVals)if (positions.every((pos)=>this.currentActing.boardPositions.has(pos))) {
            this.currentActing.increaseScore();
            return true;
        }
        return false;
    }
    // makeMove(move) {
    //   if (this.currentActing.id === 'Computer') this.#computerMakeMove()
    //   else this.#playerMakeMove(move)
    // }
    checkIfBoardFull() {
        return this.board.size >= 9;
    }
    playerMakeMove(move) {
        this.currentActing.makeMove(move);
        this.#updateBoard();
    }
    computerMakeMove() {
        const move = this.currentActing.makeMove(this.board);
        this.#updateBoard();
        return move;
    }
    getCurrentActingInfo() {
        return this.currentActing.getInfo();
    }
}
function playerVsComputer(char, difficulty) {
    char2 = char === "x" ? "o" : "x";
    const player1 = new (0, _playerJs.Player)(char, "You");
    const computer = new (0, _computerJs.Computer)(char2, "CPU", difficulty);
    state = new TicTacToe(player1, computer);
}

},{"./player.js":"agPxu","./computer.js":"iFiyA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"agPxu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Player", ()=>Player);
class Player {
    constructor(char, id){
        this.char = char;
        this.score = 0;
        this.id = id;
        this.boardPositions = new Set();
    }
    getInfo() {
        return {
            score: this.score,
            id: this.id,
            char: this.char
        };
    }
    resetScore() {
        this.score = 0;
    }
    increaseScore() {
        this.score++;
    }
    makeMove(move) {
        this.boardPositions.add(move);
        return move;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFiyA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Computer", ()=>Computer);
var _playerJs = require("./player.js.js");
const solutions = {
    1: [
        [
            2,
            3
        ],
        [
            4,
            7
        ],
        [
            5,
            9
        ]
    ],
    2: [
        [
            1,
            3
        ],
        [
            5,
            8
        ]
    ],
    3: [
        [
            1,
            2
        ],
        [
            5,
            7
        ],
        [
            6,
            9
        ]
    ],
    4: [
        [
            1,
            7
        ],
        [
            5,
            6
        ]
    ],
    5: [
        [
            1,
            9
        ],
        [
            2,
            8
        ],
        [
            3,
            7
        ],
        [
            4,
            6
        ]
    ],
    6: [
        [
            3,
            9
        ],
        [
            4,
            5
        ]
    ],
    7: [
        [
            1,
            4
        ],
        [
            8,
            9
        ],
        [
            3,
            5
        ]
    ],
    8: [
        [
            2,
            5
        ],
        [
            7,
            9
        ]
    ],
    9: [
        [
            1,
            5
        ],
        [
            3,
            6
        ],
        [
            7,
            8
        ]
    ]
};
const cornerTiles = [
    1,
    3,
    7,
    9
];
class Computer extends (0, _playerJs.Player) {
    constructor(char, id, difficulty){
        super(char, id);
        this.difficulty = difficulty.toLowerCase();
    }
    makeMove(board) {
        let move;
        if (this.difficulty === "easy") move = this.#makeMoveEasy(board);
        else if (this.difficulty === "medium") move = this.#makeMoveMedium(board);
        else if (this.difficulty === "hard") move = this.#makeMoveHard(board);
        this.boardPositions.add(move);
        return move;
    }
    #makeMoveEasy(board) {
        let move = Math.ceil(Math.random() * 9);
        while(board.has(move))move = Math.ceil(Math.random() * 9);
        return move;
    }
    #makeMoveMedium(board1) {
        const [possibleMoves, oppMoves] = this.#getOpponentAndPossibleMoves();
        return this.#mediumAlg(possibleMoves, oppMoves, board1);
    }
    #mediumAlg(possibleMoves1, oppMoves1, board2) {
        if (possibleMoves1.size === 1) return [
            ...possibleMoves1
        ][0];
        const checkCanWin = this.#checkIfCanWin(possibleMoves1);
        if (checkCanWin) return checkCanWin;
        const checkOppWin = this.#checkIfOpponentGoingToWin(possibleMoves1, oppMoves1);
        return checkOppWin ? checkOppWin : this.#makeMoveEasy(board2);
    }
    #getOpponentAndPossibleMoves(board3) {
        const possibleMoves2 = new Set();
        const oppMoves2 = new Set();
        for(let i = 1; i <= 9; i++){
            if (!board3.has(i)) possibleMoves2.add(i);
            else if (!this.boardPositions.has(i) && board3.has(i)) oppMoves2.add(i);
        }
        return [
            possibleMoves2,
            oppMoves2
        ];
    }
    #checkIfCanWin(possibleMoves3) {
        let move1;
        for (const tile of possibleMoves3.values()){
            if (move1) break;
            for (const lst of solutions[tile])if (this.boardPositions.has(lst[0]) && this.boardPositions.has(lst[1])) {
                move1 = tile;
                break;
            }
        }
        return Number(move1);
    }
    #checkIfOpponentGoingToWin(possibleMoves4, oppMoves3) {
        let move2;
        for(const tile1 in solutions){
            if (move2) break;
            for (const lst1 of solutions[tile1])if (oppMoves3.has(lst1[0]) && oppMoves3.has(lst1[1]) && possibleMoves4.has(Number(tile1))) {
                move2 = tile1;
                break;
            }
        }
        return Number(move2);
    }
    #makeMoveHard(board4) {
        const [possibleMoves5, oppMoves4] = this.#getOpponentAndPossibleMoves(board4);
        return this.#hardAlg(possibleMoves5, oppMoves4, board4);
    }
    #hardAlg(possibleMoves6, oppMoves5, board5) {
        const checkCanWin1 = this.#checkIfCanWin(possibleMoves6);
        if (checkCanWin1) return checkCanWin1;
        const checkOppWin1 = this.#checkIfOpponentGoingToWin(possibleMoves6, oppMoves5);
        if (checkOppWin1) return checkOppWin1;
        if (!board5.size) return 5;
        if (board5.size === 1) return this.#hardAlgOneTileTaken(oppMoves5);
        if (board5.size === 2) return this.#hardAlgTwoTilesTaken(oppMoves5);
        return this.#makeMoveEasy(board5);
    }
    #hardAlgOneTileTaken(oppMoves6) {
        const oppMove = [
            ...oppMoves6
        ][0];
        if (oppMove === 5) return this.#getRandomElement(cornerTiles);
        return 5;
    }
    #hardAlgTwoTilesTaken(oppMoves7) {
        const oppMove1 = [
            ...oppMoves7
        ][0];
        return this.#getRandomElement(cornerTiles.filter((t)=>t !== oppMove1));
    }
    #getRandomElement(arr) {
        console.log("testing");
        return arr[Math.floor(Math.random() * arr.length)];
    }
}

},{"./player.js":"agPxu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pDRM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COMPUTER_DELAY", ()=>COMPUTER_DELAY);
const COMPUTER_DELAY = 750;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8feyN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _popupJs = require("../views/popup.js");
var _popupJsDefault = parcelHelpers.interopDefault(_popupJs);
var _scoreFooterJs = require("../views/scoreFooter.js");
var _scoreFooterJsDefault = parcelHelpers.interopDefault(_scoreFooterJs);
// import header from '../views/header.js';
var _gameboardJs = require("../views/gameboard.js");
var _gameboardJsDefault = parcelHelpers.interopDefault(_gameboardJs);
var _menuJs = require("../views/menu.js");
var _menuJsDefault = parcelHelpers.interopDefault(_menuJs);
var _gameJs = require("../models/game.js");
var _headerJs = require("../views/header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
var _helpersJs = require("../helpers.js");
function mainHandler(e) {
    e.preventDefault();
    const btn = e.target.closest(".popup-btn");
    if (!btn) return;
    if (btn.classList.contains("quit-btn")) controlQuitBtn();
    else if (btn.classList.contains("next-round-btn")) controlNextRoundBtn();
    else if (btn.classList.contains("cancel-btn")) controlCancelBtn();
    else if (btn.classList.contains("restart-btn")) controlRestartBtn();
}
function controlNextRoundBtn() {
    _gameJs.state.restartGame();
    _gameJs.state.turnGameOn();
    resetGameBoard();
    (0, _helpersJs.checkIfComputerGoesFirst)();
}
function controlQuitBtn() {
    _gameJs.state.turnGameOff();
    _gameJs.state.resetGame();
    (0, _gameboardJsDefault.default).hideGame();
    (0, _menuJsDefault.default).showMenu();
    (0, _menuJsDefault.default).clearDifficulties();
    (0, _menuJsDefault.default).clearMenuCharSelection();
    resetGameBoard();
    (0, _scoreFooterJsDefault.default).resetAllScores();
}
function controlCancelBtn() {
    (0, _popupJsDefault.default).hidePopup();
}
function controlRestartBtn() {
    _gameJs.state.turnGameOn();
    _gameJs.state.resetGame();
    resetGameBoard();
    (0, _scoreFooterJsDefault.default).resetAllScores();
    (0, _helpersJs.checkIfComputerGoesFirst)();
}
function resetGameBoard() {
    (0, _gameboardJsDefault.default).clearAllTiles();
    _gameJs.state.clearBoard();
    (0, _headerJsDefault.default).setCurrentTurnImg(_gameJs.state.getCurrentActingInfo());
    (0, _popupJsDefault.default).hidePopup();
}
function popupInit() {
    (0, _popupJsDefault.default).addHandlerPopup(mainHandler);
}
exports.default = popupInit;

},{"../views/popup.js":"95gpZ","../views/scoreFooter.js":"jRh1w","../views/gameboard.js":"02ZQ3","../views/menu.js":"9MGhl","../models/game.js":"a9QkL","../views/header.js":"gMhUr","../helpers.js":"luDvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"luDvE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkIfComputerGoesFirst", ()=>checkIfComputerGoesFirst);
var _gameJs = require("./models/game.js.js");
var _gameBoardCtrlJs = require("./controllers/gameBoardCtrl.js.js");
function checkIfComputerGoesFirst() {
    if (_gameJs.state.player2.getInfo().char === "x") (0, _gameBoardCtrlJs.computerTurn)();
}

},{"./models/game.js":"a9QkL","./controllers/gameBoardCtrl.js":"29kK7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gjz5A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _popupJs = require("../views/popup.js");
var _popupJsDefault = parcelHelpers.interopDefault(_popupJs);
var _scoreFooterJs = require("../views/scoreFooter.js");
var _scoreFooterJsDefault = parcelHelpers.interopDefault(_scoreFooterJs);
var _headerJs = require("../views/header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
var _gameboardJs = require("../views/gameboard.js");
var _gameboardJsDefault = parcelHelpers.interopDefault(_gameboardJs);
var _menuJs = require("../views/menu.js");
var _menuJsDefault = parcelHelpers.interopDefault(_menuJs);
var _helpersJs = require("../helpers.js");
var _gameJs = require("../models/game.js");
function controlMenuNewGameBtn(e) {
    e.preventDefault();
    const btn = e.target.closest(".new-game-btn");
    if (!btn) return;
    if (!(0, _menuJsDefault.default).checkIfDifficultySelected() || !(0, _menuJsDefault.default).checkIfCharSelected()) return (0, _menuJsDefault.default).showErrorMessage();
    console.log((0, _menuJsDefault.default).getDifficulty());
    _gameJs.playerVsComputer((0, _menuJsDefault.default).getSelection(), (0, _menuJsDefault.default).getDifficulty());
    (0, _headerJsDefault.default).setCurrentTurnImg(_gameJs.state.getCurrentActingInfo());
    (0, _scoreFooterJsDefault.default).setLabel(_gameJs.state.player1.getInfo());
    (0, _scoreFooterJsDefault.default).setLabel(_gameJs.state.player2.getInfo());
    _gameJs.state.turnGameOn();
    (0, _menuJsDefault.default).closeErrorMessage();
    (0, _menuJsDefault.default).hideMenu();
    (0, _gameboardJsDefault.default).showGame();
    (0, _helpersJs.checkIfComputerGoesFirst)();
}
function controlMenuCharSelection(e) {
    e.preventDefault();
    const btn = e.target.closest(".main-menu-char-btn");
    if (btn) (0, _menuJsDefault.default).changeCharChoice(btn);
}
function controlDifficultySelection(e) {
    e.preventDefault();
    if (!e.target.classList.contains("difficulty-choice")) return;
    (0, _menuJsDefault.default).clearDifficulties();
    e.target.classList.add("selected-difficulty");
}
function controlErrorMessage(e) {
    e.preventDefault();
    if (!e.target.closest(".close-error")) return;
    (0, _menuJsDefault.default).closeErrorMessage();
}
function init() {
    (0, _menuJsDefault.default).addHandlerChangeChar(controlMenuCharSelection);
    (0, _menuJsDefault.default).addHandlerNewGame(controlMenuNewGameBtn);
    (0, _menuJsDefault.default).addHandlerSelectDifficulty(controlDifficultySelection);
    (0, _menuJsDefault.default).addHandlerCloseErrorMessage(controlErrorMessage);
}
exports.default = init;

},{"../views/popup.js":"95gpZ","../views/scoreFooter.js":"jRh1w","../views/header.js":"gMhUr","../views/gameboard.js":"02ZQ3","../views/menu.js":"9MGhl","../helpers.js":"luDvE","../models/game.js":"a9QkL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dfQ8j","e0sIE"], "e0sIE", "parcelRequire1ecf")

//# sourceMappingURL=index.cc4a0a36.js.map
