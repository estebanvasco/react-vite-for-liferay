var Vf = Object.defineProperty;
var Ta = Object.getOwnPropertySymbols;
var Bf = Object.prototype.hasOwnProperty, $f = Object.prototype.propertyIsEnumerable;
var La = (g, E, m) => E in g ? Vf(g, E, { enumerable: !0, configurable: !0, writable: !0, value: m }) : g[E] = m, Ra = (g, E) => {
  for (var m in E || (E = {}))
    Bf.call(E, m) && La(g, m, E[m]);
  if (Ta)
    for (var m of Ta(E))
      $f.call(E, m) && La(g, m, E[m]);
  return g;
};
function Hf(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var No = { exports: {} }, I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa;
function Wf() {
  if (Oa) return I;
  Oa = 1;
  var g = Symbol.for("react.element"), E = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), _e = Symbol.for("react.provider"), ve = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), ye = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function X(c) {
    return c === null || typeof c != "object" ? null : (c = Y && c[Y] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, H = Object.assign, U = {};
  function D(c, v, M) {
    this.props = c, this.context = v, this.refs = U, this.updater = M || K;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, D.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function ce() {
  }
  ce.prototype = D.prototype;
  function fe(c, v, M) {
    this.props = c, this.context = v, this.refs = U, this.updater = M || K;
  }
  var Te = fe.prototype = new ce();
  Te.constructor = fe, H(Te, D.prototype), Te.isPureReactComponent = !0;
  var Ce = Array.isArray, et = Object.prototype.hasOwnProperty, Le = { current: null }, Me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ye(c, v, M) {
    var F, V = {}, B = null, Z = null;
    if (v != null) for (F in v.ref !== void 0 && (Z = v.ref), v.key !== void 0 && (B = "" + v.key), v) et.call(v, F) && !Me.hasOwnProperty(F) && (V[F] = v[F]);
    var W = arguments.length - 2;
    if (W === 1) V.children = M;
    else if (1 < W) {
      for (var ee = Array(W), $e = 0; $e < W; $e++) ee[$e] = arguments[$e + 2];
      V.children = ee;
    }
    if (c && c.defaultProps) for (F in W = c.defaultProps, W) V[F] === void 0 && (V[F] = W[F]);
    return { $$typeof: g, type: c, key: B, ref: Z, props: V, _owner: Le.current };
  }
  function Pt(c, v) {
    return { $$typeof: g, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function vt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === g;
  }
  function Kt(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(M) {
      return v[M];
    });
  }
  var at = /\/+/g;
  function Be(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Kt("" + c.key) : v.toString(36);
  }
  function tt(c, v, M, F, V) {
    var B = typeof c;
    (B === "undefined" || B === "boolean") && (c = null);
    var Z = !1;
    if (c === null) Z = !0;
    else switch (B) {
      case "string":
      case "number":
        Z = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case g:
          case E:
            Z = !0;
        }
    }
    if (Z) return Z = c, V = V(Z), c = F === "" ? "." + Be(Z, 0) : F, Ce(V) ? (M = "", c != null && (M = c.replace(at, "$&/") + "/"), tt(V, v, M, "", function($e) {
      return $e;
    })) : V != null && (vt(V) && (V = Pt(V, M + (!V.key || Z && Z.key === V.key ? "" : ("" + V.key).replace(at, "$&/") + "/") + c)), v.push(V)), 1;
    if (Z = 0, F = F === "" ? "." : F + ":", Ce(c)) for (var W = 0; W < c.length; W++) {
      B = c[W];
      var ee = F + Be(B, W);
      Z += tt(B, v, M, ee, V);
    }
    else if (ee = X(c), typeof ee == "function") for (c = ee.call(c), W = 0; !(B = c.next()).done; ) B = B.value, ee = F + Be(B, W++), Z += tt(B, v, M, ee, V);
    else if (B === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return Z;
  }
  function ct(c, v, M) {
    if (c == null) return c;
    var F = [], V = 0;
    return tt(c, F, "", "", function(B) {
      return v.call(M, B, V++);
    }), F;
  }
  function De(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(M) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = M);
      }, function(M) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = M);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var le = { current: null }, k = { transition: null }, R = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: k, ReactCurrentOwner: Le };
  function x() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return I.Children = { map: ct, forEach: function(c, v, M) {
    ct(c, function() {
      v.apply(this, arguments);
    }, M);
  }, count: function(c) {
    var v = 0;
    return ct(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return ct(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!vt(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, I.Component = D, I.Fragment = m, I.Profiler = pe, I.PureComponent = fe, I.StrictMode = G, I.Suspense = j, I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, I.act = x, I.cloneElement = function(c, v, M) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var F = H({}, c.props), V = c.key, B = c.ref, Z = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (B = v.ref, Z = Le.current), v.key !== void 0 && (V = "" + v.key), c.type && c.type.defaultProps) var W = c.type.defaultProps;
      for (ee in v) et.call(v, ee) && !Me.hasOwnProperty(ee) && (F[ee] = v[ee] === void 0 && W !== void 0 ? W[ee] : v[ee]);
    }
    var ee = arguments.length - 2;
    if (ee === 1) F.children = M;
    else if (1 < ee) {
      W = Array(ee);
      for (var $e = 0; $e < ee; $e++) W[$e] = arguments[$e + 2];
      F.children = W;
    }
    return { $$typeof: g, type: c.type, key: V, ref: B, props: F, _owner: Z };
  }, I.createContext = function(c) {
    return c = { $$typeof: ve, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: _e, _context: c }, c.Consumer = c;
  }, I.createElement = Ye, I.createFactory = function(c) {
    var v = Ye.bind(null, c);
    return v.type = c, v;
  }, I.createRef = function() {
    return { current: null };
  }, I.forwardRef = function(c) {
    return { $$typeof: oe, render: c };
  }, I.isValidElement = vt, I.lazy = function(c) {
    return { $$typeof: ae, _payload: { _status: -1, _result: c }, _init: De };
  }, I.memo = function(c, v) {
    return { $$typeof: ye, type: c, compare: v === void 0 ? null : v };
  }, I.startTransition = function(c) {
    var v = k.transition;
    k.transition = {};
    try {
      c();
    } finally {
      k.transition = v;
    }
  }, I.unstable_act = x, I.useCallback = function(c, v) {
    return le.current.useCallback(c, v);
  }, I.useContext = function(c) {
    return le.current.useContext(c);
  }, I.useDebugValue = function() {
  }, I.useDeferredValue = function(c) {
    return le.current.useDeferredValue(c);
  }, I.useEffect = function(c, v) {
    return le.current.useEffect(c, v);
  }, I.useId = function() {
    return le.current.useId();
  }, I.useImperativeHandle = function(c, v, M) {
    return le.current.useImperativeHandle(c, v, M);
  }, I.useInsertionEffect = function(c, v) {
    return le.current.useInsertionEffect(c, v);
  }, I.useLayoutEffect = function(c, v) {
    return le.current.useLayoutEffect(c, v);
  }, I.useMemo = function(c, v) {
    return le.current.useMemo(c, v);
  }, I.useReducer = function(c, v, M) {
    return le.current.useReducer(c, v, M);
  }, I.useRef = function(c) {
    return le.current.useRef(c);
  }, I.useState = function(c) {
    return le.current.useState(c);
  }, I.useSyncExternalStore = function(c, v, M) {
    return le.current.useSyncExternalStore(c, v, M);
  }, I.useTransition = function() {
    return le.current.useTransition();
  }, I.version = "18.3.1", I;
}
var Ma;
function Do() {
  return Ma || (Ma = 1, No.exports = Wf()), No.exports;
}
var Ba = Do();
const $a = /* @__PURE__ */ Hf(Ba);
var Tl = {}, zo = { exports: {} }, Ve = {}, To = { exports: {} }, Lo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Da;
function Qf() {
  return Da || (Da = 1, function(g) {
    function E(k, R) {
      var x = k.length;
      k.push(R);
      e: for (; 0 < x; ) {
        var c = x - 1 >>> 1, v = k[c];
        if (0 < pe(v, R)) k[c] = R, k[x] = v, x = c;
        else break e;
      }
    }
    function m(k) {
      return k.length === 0 ? null : k[0];
    }
    function G(k) {
      if (k.length === 0) return null;
      var R = k[0], x = k.pop();
      if (x !== R) {
        k[0] = x;
        e: for (var c = 0, v = k.length, M = v >>> 1; c < M; ) {
          var F = 2 * (c + 1) - 1, V = k[F], B = F + 1, Z = k[B];
          if (0 > pe(V, x)) B < v && 0 > pe(Z, V) ? (k[c] = Z, k[B] = x, c = B) : (k[c] = V, k[F] = x, c = F);
          else if (B < v && 0 > pe(Z, x)) k[c] = Z, k[B] = x, c = B;
          else break e;
        }
      }
      return R;
    }
    function pe(k, R) {
      var x = k.sortIndex - R.sortIndex;
      return x !== 0 ? x : k.id - R.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var _e = performance;
      g.unstable_now = function() {
        return _e.now();
      };
    } else {
      var ve = Date, oe = ve.now();
      g.unstable_now = function() {
        return ve.now() - oe;
      };
    }
    var j = [], ye = [], ae = 1, Y = null, X = 3, K = !1, H = !1, U = !1, D = typeof setTimeout == "function" ? setTimeout : null, ce = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Te(k) {
      for (var R = m(ye); R !== null; ) {
        if (R.callback === null) G(ye);
        else if (R.startTime <= k) G(ye), R.sortIndex = R.expirationTime, E(j, R);
        else break;
        R = m(ye);
      }
    }
    function Ce(k) {
      if (U = !1, Te(k), !H) if (m(j) !== null) H = !0, De(et);
      else {
        var R = m(ye);
        R !== null && le(Ce, R.startTime - k);
      }
    }
    function et(k, R) {
      H = !1, U && (U = !1, ce(Ye), Ye = -1), K = !0;
      var x = X;
      try {
        for (Te(R), Y = m(j); Y !== null && (!(Y.expirationTime > R) || k && !Kt()); ) {
          var c = Y.callback;
          if (typeof c == "function") {
            Y.callback = null, X = Y.priorityLevel;
            var v = c(Y.expirationTime <= R);
            R = g.unstable_now(), typeof v == "function" ? Y.callback = v : Y === m(j) && G(j), Te(R);
          } else G(j);
          Y = m(j);
        }
        if (Y !== null) var M = !0;
        else {
          var F = m(ye);
          F !== null && le(Ce, F.startTime - R), M = !1;
        }
        return M;
      } finally {
        Y = null, X = x, K = !1;
      }
    }
    var Le = !1, Me = null, Ye = -1, Pt = 5, vt = -1;
    function Kt() {
      return !(g.unstable_now() - vt < Pt);
    }
    function at() {
      if (Me !== null) {
        var k = g.unstable_now();
        vt = k;
        var R = !0;
        try {
          R = Me(!0, k);
        } finally {
          R ? Be() : (Le = !1, Me = null);
        }
      } else Le = !1;
    }
    var Be;
    if (typeof fe == "function") Be = function() {
      fe(at);
    };
    else if (typeof MessageChannel != "undefined") {
      var tt = new MessageChannel(), ct = tt.port2;
      tt.port1.onmessage = at, Be = function() {
        ct.postMessage(null);
      };
    } else Be = function() {
      D(at, 0);
    };
    function De(k) {
      Me = k, Le || (Le = !0, Be());
    }
    function le(k, R) {
      Ye = D(function() {
        k(g.unstable_now());
      }, R);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, g.unstable_continueExecution = function() {
      H || K || (H = !0, De(et));
    }, g.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pt = 0 < k ? Math.floor(1e3 / k) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, g.unstable_getFirstCallbackNode = function() {
      return m(j);
    }, g.unstable_next = function(k) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = X;
      }
      var x = X;
      X = R;
      try {
        return k();
      } finally {
        X = x;
      }
    }, g.unstable_pauseExecution = function() {
    }, g.unstable_requestPaint = function() {
    }, g.unstable_runWithPriority = function(k, R) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var x = X;
      X = k;
      try {
        return R();
      } finally {
        X = x;
      }
    }, g.unstable_scheduleCallback = function(k, R, x) {
      var c = g.unstable_now();
      switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? c + x : c) : x = c, k) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = x + v, k = { id: ae++, callback: R, priorityLevel: k, startTime: x, expirationTime: v, sortIndex: -1 }, x > c ? (k.sortIndex = x, E(ye, k), m(j) === null && k === m(ye) && (U ? (ce(Ye), Ye = -1) : U = !0, le(Ce, x - c))) : (k.sortIndex = v, E(j, k), H || K || (H = !0, De(et))), k;
    }, g.unstable_shouldYield = Kt, g.unstable_wrapCallback = function(k) {
      var R = X;
      return function() {
        var x = X;
        X = R;
        try {
          return k.apply(this, arguments);
        } finally {
          X = x;
        }
      };
    };
  }(Lo)), Lo;
}
var Ia;
function Kf() {
  return Ia || (Ia = 1, To.exports = Qf()), To.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function Yf() {
  if (Fa) return Ve;
  Fa = 1;
  var g = Do(), E = Kf();
  function m(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var G = /* @__PURE__ */ new Set(), pe = {};
  function _e(e, t) {
    ve(e, t), ve(e + "Capture", t);
  }
  function ve(e, t) {
    for (pe[e] = t, e = 0; e < t.length; e++) G.add(t[e]);
  }
  var oe = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), j = Object.prototype.hasOwnProperty, ye = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ae = {}, Y = {};
  function X(e) {
    return j.call(Y, e) ? !0 : j.call(ae, e) ? !1 : ye.test(e) ? Y[e] = !0 : (ae[e] = !0, !1);
  }
  function K(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function H(e, t, n, r) {
    if (t === null || typeof t == "undefined" || K(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function U(e, t, n, r, l, u, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = o;
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    D[e] = new U(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    D[t] = new U(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    D[e] = new U(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    D[e] = new U(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    D[e] = new U(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    D[e] = new U(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    D[e] = new U(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    D[e] = new U(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    D[e] = new U(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var ce = /[\-:]([a-z])/g;
  function fe(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      ce,
      fe
    );
    D[t] = new U(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ce, fe);
    D[t] = new U(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ce, fe);
    D[t] = new U(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    D[e] = new U(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), D.xlinkHref = new U("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    D[e] = new U(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Te(e, t, n, r) {
    var l = D.hasOwnProperty(t) ? D[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (H(t, n, l, r) && (n = null), r || l === null ? X(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Ce = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, et = Symbol.for("react.element"), Le = Symbol.for("react.portal"), Me = Symbol.for("react.fragment"), Ye = Symbol.for("react.strict_mode"), Pt = Symbol.for("react.profiler"), vt = Symbol.for("react.provider"), Kt = Symbol.for("react.context"), at = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), ct = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), k = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var x = Object.assign, c;
  function v(e) {
    if (c === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      c = t && t[1] || "";
    }
    return `
` + c + e;
  }
  var M = !1;
  function F(e, t) {
    if (!e || M) return "";
    M = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (p) {
          r = p;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
`), u = r.stack.split(`
`), o = l.length - 1, i = u.length - 1; 1 <= o && 0 <= i && l[o] !== u[i]; ) i--;
        for (; 1 <= o && 0 <= i; o--, i--) if (l[o] !== u[i]) {
          if (o !== 1 || i !== 1)
            do
              if (o--, i--, 0 > i || l[o] !== u[i]) {
                var s = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= i);
          break;
        }
      }
    } finally {
      M = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function V(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = F(e.type, !1), e;
      case 11:
        return e = F(e.type.render, !1), e;
      case 1:
        return e = F(e.type, !0), e;
      default:
        return "";
    }
  }
  function B(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Me:
        return "Fragment";
      case Le:
        return "Portal";
      case Pt:
        return "Profiler";
      case Ye:
        return "StrictMode";
      case Be:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Kt:
        return (e.displayName || "Context") + ".Consumer";
      case vt:
        return (e._context.displayName || "Context") + ".Provider";
      case at:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ct:
        return t = e.displayName || null, t !== null ? t : B(e.type) || "Memo";
      case De:
        t = e._payload, e = e._init;
        try {
          return B(e(t));
        } catch (n) {
        }
    }
    return null;
  }
  function Z(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return B(t);
      case 8:
        return t === Ye ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function W(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ee(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function $e(e) {
    var t = ee(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n != "undefined" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, u.call(this, o);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = $e(e));
  }
  function Io(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ee(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Sr(e) {
    if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null;
    try {
      return e.activeElement || e.body;
    } catch (t) {
      return e.body;
    }
  }
  function Ml(e, t) {
    var n = t.checked;
    return x({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
  }
  function Fo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = W(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function jo(e, t) {
    t = t.checked, t != null && Te(e, "checked", t, !1);
  }
  function Dl(e, t) {
    jo(e, t);
    var n = W(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Il(e, t.type, n) : t.hasOwnProperty("defaultValue") && Il(e, t.type, W(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Uo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Il(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Mn = Array.isArray;
  function sn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + W(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return x({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ao(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(m(92));
        if (Mn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: W(n) };
  }
  function Vo(e, t) {
    var n = W(t.value), r = W(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Bo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function $o(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function jl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? $o(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, Ho = function(e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Dn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var In = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ha = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function(e) {
    Ha.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), In[t] = In[e];
    });
  });
  function Wo(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || In.hasOwnProperty(e) && In[e] ? ("" + t).trim() : t + "px";
  }
  function Qo(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Wo(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Wa = x({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ul(e, t) {
    if (t) {
      if (Wa[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Al(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Vl = null;
  function Bl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var $l = null, an = null, cn = null;
  function Ko(e) {
    if (e = rr(e)) {
      if (typeof $l != "function") throw Error(m(280));
      var t = e.stateNode;
      t && (t = Wr(t), $l(e.stateNode, e.type, t));
    }
  }
  function Yo(e) {
    an ? cn ? cn.push(e) : cn = [e] : an = e;
  }
  function Xo() {
    if (an) {
      var e = an, t = cn;
      if (cn = an = null, Ko(e), t) for (e = 0; e < t.length; e++) Ko(t[e]);
    }
  }
  function Go(e, t) {
    return e(t);
  }
  function Zo() {
  }
  var Hl = !1;
  function Jo(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return Go(e, t, n);
    } finally {
      Hl = !1, (an !== null || cn !== null) && (Zo(), Xo());
    }
  }
  function Fn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Wr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var Wl = !1;
  if (oe) try {
    var jn = {};
    Object.defineProperty(jn, "passive", { get: function() {
      Wl = !0;
    } }), window.addEventListener("test", jn, jn), window.removeEventListener("test", jn, jn);
  } catch (e) {
    Wl = !1;
  }
  function Qa(e, t, n, r, l, u, o, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Un = !1, Er = null, _r = !1, Ql = null, Ka = { onError: function(e) {
    Un = !0, Er = e;
  } };
  function Ya(e, t, n, r, l, u, o, i, s) {
    Un = !1, Er = null, Qa.apply(Ka, arguments);
  }
  function Xa(e, t, n, r, l, u, o, i, s) {
    if (Ya.apply(this, arguments), Un) {
      if (Un) {
        var p = Er;
        Un = !1, Er = null;
      } else throw Error(m(198));
      _r || (_r = !0, Ql = p);
    }
  }
  function Yt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function qo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function bo(e) {
    if (Yt(e) !== e) throw Error(m(188));
  }
  function Ga(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Yt(e), t === null) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return bo(l), e;
          if (u === r) return bo(l), t;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) n = l, r = u;
      else {
        for (var o = !1, i = l.child; i; ) {
          if (i === n) {
            o = !0, n = l, r = u;
            break;
          }
          if (i === r) {
            o = !0, r = l, n = u;
            break;
          }
          i = i.sibling;
        }
        if (!o) {
          for (i = u.child; i; ) {
            if (i === n) {
              o = !0, n = u, r = l;
              break;
            }
            if (i === r) {
              o = !0, r = u, n = l;
              break;
            }
            i = i.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function ei(e) {
    return e = Ga(e), e !== null ? ti(e) : null;
  }
  function ti(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ti(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ni = E.unstable_scheduleCallback, ri = E.unstable_cancelCallback, Za = E.unstable_shouldYield, Ja = E.unstable_requestPaint, ie = E.unstable_now, qa = E.unstable_getCurrentPriorityLevel, Kl = E.unstable_ImmediatePriority, li = E.unstable_UserBlockingPriority, Cr = E.unstable_NormalPriority, ba = E.unstable_LowPriority, ui = E.unstable_IdlePriority, xr = null, ft = null;
  function ec(e) {
    if (ft && typeof ft.onCommitFiberRoot == "function") try {
      ft.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
    } catch (t) {
    }
  }
  var nt = Math.clz32 ? Math.clz32 : rc, tc = Math.log, nc = Math.LN2;
  function rc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (tc(e) / nc | 0) | 0;
  }
  var Pr = 64, Nr = 4194304;
  function An(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var i = o & ~l;
      i !== 0 ? r = An(i) : (u &= o, u !== 0 && (r = An(u)));
    } else o = n & ~l, o !== 0 ? r = An(o) : u !== 0 && (r = An(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - nt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function lc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function uc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var o = 31 - nt(u), i = 1 << o, s = l[o];
      s === -1 ? (!(i & n) || i & r) && (l[o] = lc(i, t)) : s <= t && (e.expiredLanes |= i), u &= ~i;
    }
  }
  function Yl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function oi() {
    var e = Pr;
    return Pr <<= 1, !(Pr & 4194240) && (Pr = 64), e;
  }
  function Xl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = n;
  }
  function oc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - nt(n), u = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Gl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - nt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var Q = 0;
  function ii(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var si, Zl, ai, ci, fi, Jl = !1, Tr = [], Nt = null, zt = null, Tt = null, Bn = /* @__PURE__ */ new Map(), $n = /* @__PURE__ */ new Map(), Lt = [], ic = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function di(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Nt = null;
        break;
      case "dragenter":
      case "dragleave":
        zt = null;
        break;
      case "mouseover":
      case "mouseout":
        Tt = null;
        break;
      case "pointerover":
      case "pointerout":
        Bn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $n.delete(t.pointerId);
    }
  }
  function Hn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = rr(t), t !== null && Zl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function sc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Nt = Hn(Nt, e, t, n, r, l), !0;
      case "dragenter":
        return zt = Hn(zt, e, t, n, r, l), !0;
      case "mouseover":
        return Tt = Hn(Tt, e, t, n, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Bn.set(u, Hn(Bn.get(u) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, $n.set(u, Hn($n.get(u) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function pi(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = qo(n), t !== null) {
            e.blockedOn = t, fi(e.priority, function() {
              ai(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Vl = r, n.target.dispatchEvent(r), Vl = null;
      } else return t = rr(n), t !== null && Zl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function mi(e, t, n) {
    Lr(e) && n.delete(t);
  }
  function ac() {
    Jl = !1, Nt !== null && Lr(Nt) && (Nt = null), zt !== null && Lr(zt) && (zt = null), Tt !== null && Lr(Tt) && (Tt = null), Bn.forEach(mi), $n.forEach(mi);
  }
  function Wn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Jl || (Jl = !0, E.unstable_scheduleCallback(E.unstable_NormalPriority, ac)));
  }
  function Qn(e) {
    function t(l) {
      return Wn(l, e);
    }
    if (0 < Tr.length) {
      Wn(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Nt !== null && Wn(Nt, e), zt !== null && Wn(zt, e), Tt !== null && Wn(Tt, e), Bn.forEach(t), $n.forEach(t), n = 0; n < Lt.length; n++) r = Lt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Lt.length && (n = Lt[0], n.blockedOn === null); ) pi(n), n.blockedOn === null && Lt.shift();
  }
  var fn = Ce.ReactCurrentBatchConfig, Rr = !0;
  function cc(e, t, n, r) {
    var l = Q, u = fn.transition;
    fn.transition = null;
    try {
      Q = 1, ql(e, t, n, r);
    } finally {
      Q = l, fn.transition = u;
    }
  }
  function fc(e, t, n, r) {
    var l = Q, u = fn.transition;
    fn.transition = null;
    try {
      Q = 4, ql(e, t, n, r);
    } finally {
      Q = l, fn.transition = u;
    }
  }
  function ql(e, t, n, r) {
    if (Rr) {
      var l = bl(e, t, n, r);
      if (l === null) vu(e, t, r, Or, n), di(e, r);
      else if (sc(l, e, t, n, r)) r.stopPropagation();
      else if (di(e, r), t & 4 && -1 < ic.indexOf(e)) {
        for (; l !== null; ) {
          var u = rr(l);
          if (u !== null && si(u), u = bl(e, t, n, r), u === null && vu(e, t, r, Or, n), u === l) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else vu(e, t, r, null, n);
    }
  }
  var Or = null;
  function bl(e, t, n, r) {
    if (Or = null, e = Bl(r), e = Xt(e), e !== null) if (t = Yt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = qo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Or = e, null;
  }
  function hi(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (qa()) {
          case Kl:
            return 1;
          case li:
            return 4;
          case Cr:
          case ba:
            return 16;
          case ui:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rt = null, eu = null, Mr = null;
  function vi() {
    if (Mr) return Mr;
    var e, t = eu, n = t.length, r, l = "value" in Rt ? Rt.value : Rt.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[u - r]; r++) ;
    return Mr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Dr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ir() {
    return !0;
  }
  function yi() {
    return !1;
  }
  function He(e) {
    function t(n, r, l, u, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(u) : u[i]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ir : yi, this.isPropagationStopped = yi, this;
    }
    return x(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ir);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ir);
    }, persist: function() {
    }, isPersistent: Ir }), t;
  }
  var dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, tu = He(dn), Kn = x({}, dn, { view: 0, detail: 0 }), dc = He(Kn), nu, ru, Yn, Fr = x({}, Kn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: uu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Yn && (Yn && e.type === "mousemove" ? (nu = e.screenX - Yn.screenX, ru = e.screenY - Yn.screenY) : ru = nu = 0, Yn = e), nu);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ru;
  } }), gi = He(Fr), pc = x({}, Fr, { dataTransfer: 0 }), mc = He(pc), hc = x({}, Kn, { relatedTarget: 0 }), lu = He(hc), vc = x({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yc = He(vc), gc = x({}, dn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), wc = He(gc), Sc = x({}, dn, { data: 0 }), wi = He(Sc), kc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ec = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, _c = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Cc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _c[e]) ? !!t[e] : !1;
  }
  function uu() {
    return Cc;
  }
  var xc = x({}, Kn, { key: function(e) {
    if (e.key) {
      var t = kc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Dr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ec[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: uu, charCode: function(e) {
    return e.type === "keypress" ? Dr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Dr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Pc = He(xc), Nc = x({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Si = He(Nc), zc = x({}, Kn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: uu }), Tc = He(zc), Lc = x({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rc = He(Lc), Oc = x({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mc = He(Oc), Dc = [9, 13, 27, 32], ou = oe && "CompositionEvent" in window, Xn = null;
  oe && "documentMode" in document && (Xn = document.documentMode);
  var Ic = oe && "TextEvent" in window && !Xn, ki = oe && (!ou || Xn && 8 < Xn && 11 >= Xn), Ei = " ", _i = !1;
  function Ci(e, t) {
    switch (e) {
      case "keyup":
        return Dc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xi(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pn = !1;
  function Fc(e, t) {
    switch (e) {
      case "compositionend":
        return xi(t);
      case "keypress":
        return t.which !== 32 ? null : (_i = !0, Ei);
      case "textInput":
        return e = t.data, e === Ei && _i ? null : e;
      default:
        return null;
    }
  }
  function jc(e, t) {
    if (pn) return e === "compositionend" || !ou && Ci(e, t) ? (e = vi(), Mr = eu = Rt = null, pn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ki && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Uc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Pi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Uc[e.type] : t === "textarea";
  }
  function Ni(e, t, n, r) {
    Yo(r), t = Br(t, "onChange"), 0 < t.length && (n = new tu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Gn = null, Zn = null;
  function Ac(e) {
    Qi(e, 0);
  }
  function jr(e) {
    var t = gn(e);
    if (Io(t)) return e;
  }
  function Vc(e, t) {
    if (e === "change") return t;
  }
  var zi = !1;
  if (oe) {
    var iu;
    if (oe) {
      var su = "oninput" in document;
      if (!su) {
        var Ti = document.createElement("div");
        Ti.setAttribute("oninput", "return;"), su = typeof Ti.oninput == "function";
      }
      iu = su;
    } else iu = !1;
    zi = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function Li() {
    Gn && (Gn.detachEvent("onpropertychange", Ri), Zn = Gn = null);
  }
  function Ri(e) {
    if (e.propertyName === "value" && jr(Zn)) {
      var t = [];
      Ni(t, Zn, e, Bl(e)), Jo(Ac, t);
    }
  }
  function Bc(e, t, n) {
    e === "focusin" ? (Li(), Gn = t, Zn = n, Gn.attachEvent("onpropertychange", Ri)) : e === "focusout" && Li();
  }
  function $c(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return jr(Zn);
  }
  function Hc(e, t) {
    if (e === "click") return jr(t);
  }
  function Wc(e, t) {
    if (e === "input" || e === "change") return jr(t);
  }
  function Qc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var rt = typeof Object.is == "function" ? Object.is : Qc;
  function Jn(e, t) {
    if (rt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!j.call(t, l) || !rt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Oi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mi(e, t) {
    var n = Oi(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Oi(n);
    }
  }
  function Di(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Di(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ii() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch (r) {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function au(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Kc(e) {
    var t = Ii(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Di(n.ownerDocument.documentElement, n)) {
      if (r !== null && au(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = Mi(n, u);
          var o = Mi(
            n,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Yc = oe && "documentMode" in document && 11 >= document.documentMode, mn = null, cu = null, qn = null, fu = !1;
  function Fi(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fu || mn == null || mn !== Sr(r) || (r = mn, "selectionStart" in r && au(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), qn && Jn(qn, r) || (qn = r, r = Br(cu, "onSelect"), 0 < r.length && (t = new tu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
  }
  function Ur(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var hn = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, du = {}, ji = {};
  oe && (ji = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
  function Ar(e) {
    if (du[e]) return du[e];
    if (!hn[e]) return e;
    var t = hn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ji) return du[e] = t[n];
    return e;
  }
  var Ui = Ar("animationend"), Ai = Ar("animationiteration"), Vi = Ar("animationstart"), Bi = Ar("transitionend"), $i = /* @__PURE__ */ new Map(), Hi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ot(e, t) {
    $i.set(e, t), _e(t, [e]);
  }
  for (var pu = 0; pu < Hi.length; pu++) {
    var mu = Hi[pu], Xc = mu.toLowerCase(), Gc = mu[0].toUpperCase() + mu.slice(1);
    Ot(Xc, "on" + Gc);
  }
  Ot(Ui, "onAnimationEnd"), Ot(Ai, "onAnimationIteration"), Ot(Vi, "onAnimationStart"), Ot("dblclick", "onDoubleClick"), Ot("focusin", "onFocus"), Ot("focusout", "onBlur"), Ot(Bi, "onTransitionEnd"), ve("onMouseEnter", ["mouseout", "mouseover"]), ve("onMouseLeave", ["mouseout", "mouseover"]), ve("onPointerEnter", ["pointerout", "pointerover"]), ve("onPointerLeave", ["pointerout", "pointerover"]), _e("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _e("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _e("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _e("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _e("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _e("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zc = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
  function Wi(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Xa(r, t, void 0, e), e.currentTarget = null;
  }
  function Qi(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o], s = i.instance, p = i.currentTarget;
          if (i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Wi(l, i, p), u = s;
        }
        else for (o = 0; o < r.length; o++) {
          if (i = r[o], s = i.instance, p = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Wi(l, i, p), u = s;
        }
      }
    }
    if (_r) throw e = Ql, _r = !1, Ql = null, e;
  }
  function q(e, t) {
    var n = t[Eu];
    n === void 0 && (n = t[Eu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ki(t, e, 2, !1), n.add(r));
  }
  function hu(e, t, n) {
    var r = 0;
    t && (r |= 4), Ki(n, e, r, t);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Vr]) {
      e[Vr] = !0, G.forEach(function(n) {
        n !== "selectionchange" && (Zc.has(n) || hu(n, !1, e), hu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || (t[Vr] = !0, hu("selectionchange", !1, t));
    }
  }
  function Ki(e, t, n, r) {
    switch (hi(t)) {
      case 1:
        var l = cc;
        break;
      case 4:
        l = fc;
        break;
      default:
        l = ql;
    }
    n = l.bind(null, t, n, e), l = void 0, !Wl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function vu(e, t, n, r, l) {
    var u = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || i.nodeType === 8 && i.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var s = o.tag;
          if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          o = o.return;
        }
        for (; i !== null; ) {
          if (o = Xt(i), o === null) return;
          if (s = o.tag, s === 5 || s === 6) {
            r = u = o;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
    Jo(function() {
      var p = u, y = Bl(n), w = [];
      e: {
        var h = $i.get(e);
        if (h !== void 0) {
          var _ = tu, P = e;
          switch (e) {
            case "keypress":
              if (Dr(n) === 0) break e;
            case "keydown":
            case "keyup":
              _ = Pc;
              break;
            case "focusin":
              P = "focus", _ = lu;
              break;
            case "focusout":
              P = "blur", _ = lu;
              break;
            case "beforeblur":
            case "afterblur":
              _ = lu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = gi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = mc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = Tc;
              break;
            case Ui:
            case Ai:
            case Vi:
              _ = yc;
              break;
            case Bi:
              _ = Rc;
              break;
            case "scroll":
              _ = dc;
              break;
            case "wheel":
              _ = Mc;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = wc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = Si;
          }
          var N = (t & 4) !== 0, se = !N && e === "scroll", f = N ? h !== null ? h + "Capture" : null : h;
          N = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var S = d.stateNode;
            if (d.tag === 5 && S !== null && (d = S, f !== null && (S = Fn(a, f), S != null && N.push(tr(a, S, d)))), se) break;
            a = a.return;
          }
          0 < N.length && (h = new _(h, P, null, n, y), w.push({ event: h, listeners: N }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", h && n !== Vl && (P = n.relatedTarget || n.fromElement) && (Xt(P) || P[yt])) break e;
          if ((_ || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, _ ? (P = n.relatedTarget || n.toElement, _ = p, P = P ? Xt(P) : null, P !== null && (se = Yt(P), P !== se || P.tag !== 5 && P.tag !== 6) && (P = null)) : (_ = null, P = p), _ !== P)) {
            if (N = gi, S = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (N = Si, S = "onPointerLeave", f = "onPointerEnter", a = "pointer"), se = _ == null ? h : gn(_), d = P == null ? h : gn(P), h = new N(S, a + "leave", _, n, y), h.target = se, h.relatedTarget = d, S = null, Xt(y) === p && (N = new N(f, a + "enter", P, n, y), N.target = d, N.relatedTarget = se, S = N), se = S, _ && P) t: {
              for (N = _, f = P, a = 0, d = N; d; d = vn(d)) a++;
              for (d = 0, S = f; S; S = vn(S)) d++;
              for (; 0 < a - d; ) N = vn(N), a--;
              for (; 0 < d - a; ) f = vn(f), d--;
              for (; a--; ) {
                if (N === f || f !== null && N === f.alternate) break t;
                N = vn(N), f = vn(f);
              }
              N = null;
            }
            else N = null;
            _ !== null && Yi(w, h, _, N, !1), P !== null && se !== null && Yi(w, se, P, N, !0);
          }
        }
        e: {
          if (h = p ? gn(p) : window, _ = h.nodeName && h.nodeName.toLowerCase(), _ === "select" || _ === "input" && h.type === "file") var z = Vc;
          else if (Pi(h)) if (zi) z = Wc;
          else {
            z = $c;
            var T = Bc;
          }
          else (_ = h.nodeName) && _.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (z = Hc);
          if (z && (z = z(e, p))) {
            Ni(w, z, n, y);
            break e;
          }
          T && T(e, h, p), e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && Il(h, "number", h.value);
        }
        switch (T = p ? gn(p) : window, e) {
          case "focusin":
            (Pi(T) || T.contentEditable === "true") && (mn = T, cu = p, qn = null);
            break;
          case "focusout":
            qn = cu = mn = null;
            break;
          case "mousedown":
            fu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fu = !1, Fi(w, n, y);
            break;
          case "selectionchange":
            if (Yc) break;
          case "keydown":
          case "keyup":
            Fi(w, n, y);
        }
        var L;
        if (ou) e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
        else pn ? Ci(e, n) && (O = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
        O && (ki && n.locale !== "ko" && (pn || O !== "onCompositionStart" ? O === "onCompositionEnd" && pn && (L = vi()) : (Rt = y, eu = "value" in Rt ? Rt.value : Rt.textContent, pn = !0)), T = Br(p, O), 0 < T.length && (O = new wi(O, e, null, n, y), w.push({ event: O, listeners: T }), L ? O.data = L : (L = xi(n), L !== null && (O.data = L)))), (L = Ic ? Fc(e, n) : jc(e, n)) && (p = Br(p, "onBeforeInput"), 0 < p.length && (y = new wi("onBeforeInput", "beforeinput", null, n, y), w.push({ event: y, listeners: p }), y.data = L));
      }
      Qi(w, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Br(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Fn(e, n), u != null && r.unshift(tr(e, u, l)), u = Fn(e, t), u != null && r.push(tr(e, u, l))), e = e.return;
    }
    return r;
  }
  function vn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Yi(e, t, n, r, l) {
    for (var u = t._reactName, o = []; n !== null && n !== r; ) {
      var i = n, s = i.alternate, p = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 && p !== null && (i = p, l ? (s = Fn(n, u), s != null && o.unshift(tr(n, s, i))) : l || (s = Fn(n, u), s != null && o.push(tr(n, s, i)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Jc = /\r\n?/g, qc = /\u0000|\uFFFD/g;
  function Xi(e) {
    return (typeof e == "string" ? e : "" + e).replace(Jc, `
`).replace(qc, "");
  }
  function $r(e, t, n) {
    if (t = Xi(t), Xi(e) !== t && n) throw Error(m(425));
  }
  function Hr() {
  }
  var yu = null, gu = null;
  function wu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Su = typeof setTimeout == "function" ? setTimeout : void 0, bc = typeof clearTimeout == "function" ? clearTimeout : void 0, Gi = typeof Promise == "function" ? Promise : void 0, ef = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gi != "undefined" ? function(e) {
    return Gi.resolve(null).then(e).catch(tf);
  } : Su;
  function tf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ku(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Qn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Qn(t);
  }
  function Mt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Zi(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + yn, nr = "__reactProps$" + yn, yt = "__reactContainer$" + yn, Eu = "__reactEvents$" + yn, nf = "__reactListeners$" + yn, rf = "__reactHandles$" + yn;
  function Xt(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[yt] || n[dt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Zi(e); e !== null; ) {
          if (n = e[dt]) return n;
          e = Zi(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function rr(e) {
    return e = e[dt] || e[yt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[nr] || null;
  }
  var _u = [], wn = -1;
  function Dt(e) {
    return { current: e };
  }
  function b(e) {
    0 > wn || (e.current = _u[wn], _u[wn] = null, wn--);
  }
  function J(e, t) {
    wn++, _u[wn] = e.current, e.current = t;
  }
  var It = {}, xe = Dt(It), Ie = Dt(!1), Gt = It;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return It;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Fe(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qr() {
    b(Ie), b(xe);
  }
  function Ji(e, t, n) {
    if (xe.current !== It) throw Error(m(168));
    J(xe, t), J(Ie, n);
  }
  function qi(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, Z(e) || "Unknown", l));
    return x({}, n, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || It, Gt = xe.current, J(xe, e), J(Ie, Ie.current), !0;
  }
  function bi(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    n ? (e = qi(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, b(Ie), b(xe), J(xe, e)) : b(Ie), J(Ie, n);
  }
  var gt = null, Yr = !1, Cu = !1;
  function es(e) {
    gt === null ? gt = [e] : gt.push(e);
  }
  function lf(e) {
    Yr = !0, es(e);
  }
  function Ft() {
    if (!Cu && gt !== null) {
      Cu = !0;
      var e = 0, t = Q;
      try {
        var n = gt;
        for (Q = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        gt = null, Yr = !1;
      } catch (l) {
        throw gt !== null && (gt = gt.slice(e + 1)), ni(Kl, Ft), l;
      } finally {
        Q = t, Cu = !1;
      }
    }
    return null;
  }
  var kn = [], En = 0, Xr = null, Gr = 0, Xe = [], Ge = 0, Zt = null, wt = 1, St = "";
  function Jt(e, t) {
    kn[En++] = Gr, kn[En++] = Xr, Xr = e, Gr = t;
  }
  function ts(e, t, n) {
    Xe[Ge++] = wt, Xe[Ge++] = St, Xe[Ge++] = Zt, Zt = e;
    var r = wt;
    e = St;
    var l = 32 - nt(r) - 1;
    r &= ~(1 << l), n += 1;
    var u = 32 - nt(t) + l;
    if (30 < u) {
      var o = l - l % 5;
      u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, wt = 1 << 32 - nt(t) + l | n << l | r, St = u + e;
    } else wt = 1 << u | n << l | r, St = e;
  }
  function xu(e) {
    e.return !== null && (Jt(e, 1), ts(e, 1, 0));
  }
  function Pu(e) {
    for (; e === Xr; ) Xr = kn[--En], kn[En] = null, Gr = kn[--En], kn[En] = null;
    for (; e === Zt; ) Zt = Xe[--Ge], Xe[Ge] = null, St = Xe[--Ge], Xe[Ge] = null, wt = Xe[--Ge], Xe[Ge] = null;
  }
  var We = null, Qe = null, te = !1, lt = null;
  function ns(e, t) {
    var n = be(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function rs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, We = e, Qe = Mt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, We = e, Qe = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zt !== null ? { id: wt, overflow: St } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, We = e, Qe = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Nu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zu(e) {
    if (te) {
      var t = Qe;
      if (t) {
        var n = t;
        if (!rs(e, t)) {
          if (Nu(e)) throw Error(m(418));
          t = Mt(n.nextSibling);
          var r = We;
          t && rs(e, t) ? ns(r, n) : (e.flags = e.flags & -4097 | 2, te = !1, We = e);
        }
      } else {
        if (Nu(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, te = !1, We = e;
      }
    }
  }
  function ls(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    We = e;
  }
  function Zr(e) {
    if (e !== We) return !1;
    if (!te) return ls(e), te = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wu(e.type, e.memoizedProps)), t && (t = Qe)) {
      if (Nu(e)) throw us(), Error(m(418));
      for (; t; ) ns(e, t), t = Mt(t.nextSibling);
    }
    if (ls(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Qe = Mt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Qe = null;
      }
    } else Qe = We ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function us() {
    for (var e = Qe; e; ) e = Mt(e.nextSibling);
  }
  function _n() {
    Qe = We = null, te = !1;
  }
  function Tu(e) {
    lt === null ? lt = [e] : lt.push(e);
  }
  var uf = Ce.ReactCurrentBatchConfig;
  function lr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(o) {
          var i = l.refs;
          o === null ? delete i[u] : i[u] = o;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Jr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function os(e) {
    var t = e._init;
    return t(e._payload);
  }
  function is(e) {
    function t(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null; ) t(f, a), a = a.sibling;
      return null;
    }
    function r(f, a) {
      for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
      return f;
    }
    function l(f, a) {
      return f = Wt(f, a), f.index = 0, f.sibling = null, f;
    }
    function u(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, S) {
      return a === null || a.tag !== 6 ? (a = ko(d, f.mode, S), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, S) {
      var z = d.type;
      return z === Me ? y(f, a, d.props.children, S, d.key) : a !== null && (a.elementType === z || typeof z == "object" && z !== null && z.$$typeof === De && os(z) === a.type) ? (S = l(a, d.props), S.ref = lr(f, a, d), S.return = f, S) : (S = kl(d.type, d.key, d.props, null, f.mode, S), S.ref = lr(f, a, d), S.return = f, S);
    }
    function p(f, a, d, S) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Eo(d, f.mode, S), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, S, z) {
      return a === null || a.tag !== 7 ? (a = un(d, f.mode, S, z), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function w(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = ko("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case et:
            return d = kl(a.type, a.key, a.props, null, f.mode, d), d.ref = lr(f, null, a), d.return = f, d;
          case Le:
            return a = Eo(a, f.mode, d), a.return = f, a;
          case De:
            var S = a._init;
            return w(f, S(a._payload), d);
        }
        if (Mn(a) || R(a)) return a = un(a, f.mode, d, null), a.return = f, a;
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, S) {
      var z = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return z !== null ? null : i(f, a, "" + d, S);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case et:
            return d.key === z ? s(f, a, d, S) : null;
          case Le:
            return d.key === z ? p(f, a, d, S) : null;
          case De:
            return z = d._init, h(
              f,
              a,
              z(d._payload),
              S
            );
        }
        if (Mn(d) || R(d)) return z !== null ? null : y(f, a, d, S, null);
        Jr(f, d);
      }
      return null;
    }
    function _(f, a, d, S, z) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return f = f.get(d) || null, i(a, f, "" + S, z);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case et:
            return f = f.get(S.key === null ? d : S.key) || null, s(a, f, S, z);
          case Le:
            return f = f.get(S.key === null ? d : S.key) || null, p(a, f, S, z);
          case De:
            var T = S._init;
            return _(f, a, d, T(S._payload), z);
        }
        if (Mn(S) || R(S)) return f = f.get(d) || null, y(a, f, S, z, null);
        Jr(a, S);
      }
      return null;
    }
    function P(f, a, d, S) {
      for (var z = null, T = null, L = a, O = a = 0, Se = null; L !== null && O < d.length; O++) {
        L.index > O ? (Se = L, L = null) : Se = L.sibling;
        var $ = h(f, L, d[O], S);
        if ($ === null) {
          L === null && (L = Se);
          break;
        }
        e && L && $.alternate === null && t(f, L), a = u($, a, O), T === null ? z = $ : T.sibling = $, T = $, L = Se;
      }
      if (O === d.length) return n(f, L), te && Jt(f, O), z;
      if (L === null) {
        for (; O < d.length; O++) L = w(f, d[O], S), L !== null && (a = u(L, a, O), T === null ? z = L : T.sibling = L, T = L);
        return te && Jt(f, O), z;
      }
      for (L = r(f, L); O < d.length; O++) Se = _(L, f, O, d[O], S), Se !== null && (e && Se.alternate !== null && L.delete(Se.key === null ? O : Se.key), a = u(Se, a, O), T === null ? z = Se : T.sibling = Se, T = Se);
      return e && L.forEach(function(Qt) {
        return t(f, Qt);
      }), te && Jt(f, O), z;
    }
    function N(f, a, d, S) {
      var z = R(d);
      if (typeof z != "function") throw Error(m(150));
      if (d = z.call(d), d == null) throw Error(m(151));
      for (var T = z = null, L = a, O = a = 0, Se = null, $ = d.next(); L !== null && !$.done; O++, $ = d.next()) {
        L.index > O ? (Se = L, L = null) : Se = L.sibling;
        var Qt = h(f, L, $.value, S);
        if (Qt === null) {
          L === null && (L = Se);
          break;
        }
        e && L && Qt.alternate === null && t(f, L), a = u(Qt, a, O), T === null ? z = Qt : T.sibling = Qt, T = Qt, L = Se;
      }
      if ($.done) return n(
        f,
        L
      ), te && Jt(f, O), z;
      if (L === null) {
        for (; !$.done; O++, $ = d.next()) $ = w(f, $.value, S), $ !== null && (a = u($, a, O), T === null ? z = $ : T.sibling = $, T = $);
        return te && Jt(f, O), z;
      }
      for (L = r(f, L); !$.done; O++, $ = d.next()) $ = _(L, f, O, $.value, S), $ !== null && (e && $.alternate !== null && L.delete($.key === null ? O : $.key), a = u($, a, O), T === null ? z = $ : T.sibling = $, T = $);
      return e && L.forEach(function(Af) {
        return t(f, Af);
      }), te && Jt(f, O), z;
    }
    function se(f, a, d, S) {
      if (typeof d == "object" && d !== null && d.type === Me && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case et:
            e: {
              for (var z = d.key, T = a; T !== null; ) {
                if (T.key === z) {
                  if (z = d.type, z === Me) {
                    if (T.tag === 7) {
                      n(f, T.sibling), a = l(T, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (T.elementType === z || typeof z == "object" && z !== null && z.$$typeof === De && os(z) === T.type) {
                    n(f, T.sibling), a = l(T, d.props), a.ref = lr(f, T, d), a.return = f, f = a;
                    break e;
                  }
                  n(f, T);
                  break;
                } else t(f, T);
                T = T.sibling;
              }
              d.type === Me ? (a = un(d.props.children, f.mode, S, d.key), a.return = f, f = a) : (S = kl(d.type, d.key, d.props, null, f.mode, S), S.ref = lr(f, a, d), S.return = f, f = S);
            }
            return o(f);
          case Le:
            e: {
              for (T = d.key; a !== null; ) {
                if (a.key === T) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  n(f, a);
                  break;
                }
                else t(f, a);
                a = a.sibling;
              }
              a = Eo(d, f.mode, S), a.return = f, f = a;
            }
            return o(f);
          case De:
            return T = d._init, se(f, a, T(d._payload), S);
        }
        if (Mn(d)) return P(f, a, d, S);
        if (R(d)) return N(f, a, d, S);
        Jr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = ko(d, f.mode, S), a.return = f, f = a), o(f)) : n(f, a);
    }
    return se;
  }
  var Cn = is(!0), ss = is(!1), qr = Dt(null), br = null, xn = null, Lu = null;
  function Ru() {
    Lu = xn = br = null;
  }
  function Ou(e) {
    var t = qr.current;
    b(qr), e._currentValue = t;
  }
  function Mu(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Pn(e, t) {
    br = e, Lu = xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (je = !0), e.firstContext = null);
  }
  function Ze(e) {
    var t = e._currentValue;
    if (Lu !== e) if (e = { context: e, memoizedValue: t, next: null }, xn === null) {
      if (br === null) throw Error(m(308));
      xn = e, br.dependencies = { lanes: 0, firstContext: e };
    } else xn = xn.next = e;
    return t;
  }
  var qt = null;
  function Du(e) {
    qt === null ? qt = [e] : qt.push(e);
  }
  function as(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Du(t)) : (n.next = l.next, l.next = n), t.interleaved = n, kt(e, r);
  }
  function kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var jt = !1;
  function Iu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function cs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Et(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, A & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, kt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Du(r)) : (t.next = l.next, l.next = t), r.interleaved = t, kt(e, n);
  }
  function el(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Gl(e, n);
    }
  }
  function fs(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? l = u = o : u = u.next = o, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function tl(e, t, n, r) {
    var l = e.updateQueue;
    jt = !1;
    var u = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, p = s.next;
      s.next = null, o === null ? u = p : o.next = p, o = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, i = y.lastBaseUpdate, i !== o && (i === null ? y.firstBaseUpdate = p : i.next = p, y.lastBaseUpdate = s));
    }
    if (u !== null) {
      var w = l.baseState;
      o = 0, y = p = s = null, i = u;
      do {
        var h = i.lane, _ = i.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: _,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var P = e, N = i;
            switch (h = t, _ = n, N.tag) {
              case 1:
                if (P = N.payload, typeof P == "function") {
                  w = P.call(_, w, h);
                  break e;
                }
                w = P;
                break e;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = N.payload, h = typeof P == "function" ? P.call(_, w, h) : P, h == null) break e;
                w = x({}, w, h);
                break e;
              case 2:
                jt = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [i] : h.push(i));
        } else _ = { eventTime: _, lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (p = y = _, s = w) : y = y.next = _, o |= h;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null) break;
          h = i, i = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = w), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      tn |= o, e.lanes = o, e.memoizedState = w;
    }
  }
  function ds(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var ur = {}, pt = Dt(ur), or = Dt(ur), ir = Dt(ur);
  function bt(e) {
    if (e === ur) throw Error(m(174));
    return e;
  }
  function Fu(e, t) {
    switch (J(ir, t), J(or, e), J(pt, ur), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : jl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = jl(t, e);
    }
    b(pt), J(pt, t);
  }
  function Nn() {
    b(pt), b(or), b(ir);
  }
  function ps(e) {
    bt(ir.current);
    var t = bt(pt.current), n = jl(t, e.type);
    t !== n && (J(or, e), J(pt, n));
  }
  function ju(e) {
    or.current === e && (b(pt), b(or));
  }
  var ne = Dt(0);
  function nl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Uu = [];
  function Au() {
    for (var e = 0; e < Uu.length; e++) Uu[e]._workInProgressVersionPrimary = null;
    Uu.length = 0;
  }
  var rl = Ce.ReactCurrentDispatcher, Vu = Ce.ReactCurrentBatchConfig, en = 0, re = null, me = null, ge = null, ll = !1, sr = !1, ar = 0, of = 0;
  function Pe() {
    throw Error(m(321));
  }
  function Bu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function $u(e, t, n, r, l, u) {
    if (en = u, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rl.current = e === null || e.memoizedState === null ? ff : df, e = n(r, l), sr) {
      u = 0;
      do {
        if (sr = !1, ar = 0, 25 <= u) throw Error(m(301));
        u += 1, ge = me = null, t.updateQueue = null, rl.current = pf, e = n(r, l);
      } while (sr);
    }
    if (rl.current = il, t = me !== null && me.next !== null, en = 0, ge = me = re = null, ll = !1, t) throw Error(m(300));
    return e;
  }
  function Hu() {
    var e = ar !== 0;
    return ar = 0, e;
  }
  function mt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ge === null ? re.memoizedState = ge = e : ge = ge.next = e, ge;
  }
  function Je() {
    if (me === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var t = ge === null ? re.memoizedState : ge.next;
    if (t !== null) ge = t, me = e;
    else {
      if (e === null) throw Error(m(310));
      me = e, e = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, ge === null ? re.memoizedState = ge = e : ge = ge.next = e;
    }
    return ge;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wu(e) {
    var t = Je(), n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = me, l = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = u.next, u.next = o;
      }
      r.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var i = o = null, s = null, p = u;
      do {
        var y = p.lane;
        if ((en & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var w = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = w, o = r) : s = s.next = w, re.lanes |= y, tn |= y;
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? o = r : s.next = i, rt(r, t.memoizedState) || (je = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, re.lanes |= u, tn |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Qu(e) {
    var t = Je(), n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        u = e(u, o.action), o = o.next;
      while (o !== l);
      rt(u, t.memoizedState) || (je = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function ms() {
  }
  function hs(e, t) {
    var n = re, r = Je(), l = t(), u = !rt(r.memoizedState, l);
    if (u && (r.memoizedState = l, je = !0), r = r.queue, Ku(gs.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || ge !== null && ge.memoizedState.tag & 1) {
      if (n.flags |= 2048, fr(9, ys.bind(null, n, r, l, t), void 0, null), we === null) throw Error(m(349));
      en & 30 || vs(n, t, l);
    }
    return l;
  }
  function vs(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ys(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ws(t) && Ss(e);
  }
  function gs(e, t, n) {
    return n(function() {
      ws(t) && Ss(e);
    });
  }
  function ws(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !rt(e, n);
    } catch (r) {
      return !0;
    }
  }
  function Ss(e) {
    var t = kt(e, 1);
    t !== null && st(t, e, 1, -1);
  }
  function ks(e) {
    var t = mt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = cf.bind(null, re, e), [t.memoizedState, e];
  }
  function fr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Es() {
    return Je().memoizedState;
  }
  function ul(e, t, n, r) {
    var l = mt();
    re.flags |= e, l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ol(e, t, n, r) {
    var l = Je();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (me !== null) {
      var o = me.memoizedState;
      if (u = o.destroy, r !== null && Bu(r, o.deps)) {
        l.memoizedState = fr(t, n, u, r);
        return;
      }
    }
    re.flags |= e, l.memoizedState = fr(1 | t, n, u, r);
  }
  function _s(e, t) {
    return ul(8390656, 8, e, t);
  }
  function Ku(e, t) {
    return ol(2048, 8, e, t);
  }
  function Cs(e, t) {
    return ol(4, 2, e, t);
  }
  function xs(e, t) {
    return ol(4, 4, e, t);
  }
  function Ps(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ns(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ol(4, 4, Ps.bind(null, t, e), n);
  }
  function Yu() {
  }
  function zs(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Ts(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ls(e, t, n) {
    return en & 21 ? (rt(n, t) || (n = oi(), re.lanes |= n, tn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, je = !0), e.memoizedState = n);
  }
  function sf(e, t) {
    var n = Q;
    Q = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Vu.transition;
    Vu.transition = {};
    try {
      e(!1), t();
    } finally {
      Q = n, Vu.transition = r;
    }
  }
  function Rs() {
    return Je().memoizedState;
  }
  function af(e, t, n) {
    var r = $t(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Os(e)) Ms(t, n);
    else if (n = as(e, t, n, r), n !== null) {
      var l = Oe();
      st(n, e, r, l), Ds(n, t, r);
    }
  }
  function cf(e, t, n) {
    var r = $t(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Os(e)) Ms(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var o = t.lastRenderedState, i = u(o, n);
        if (l.hasEagerState = !0, l.eagerState = i, rt(i, o)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Du(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch (p) {
      } finally {
      }
      n = as(e, t, l, r), n !== null && (l = Oe(), st(n, e, r, l), Ds(n, t, r));
    }
  }
  function Os(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re;
  }
  function Ms(e, t) {
    sr = ll = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ds(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Gl(e, n);
    }
  }
  var il = { readContext: Ze, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useInsertionEffect: Pe, useLayoutEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useMutableSource: Pe, useSyncExternalStore: Pe, useId: Pe, unstable_isNewReconciler: !1 }, ff = { readContext: Ze, useCallback: function(e, t) {
    return mt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Ze, useEffect: _s, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ul(
      4194308,
      4,
      Ps.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ul(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ul(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = mt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = mt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = af.bind(null, re, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = mt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ks, useDebugValue: Yu, useDeferredValue: function(e) {
    return mt().memoizedState = e;
  }, useTransition: function() {
    var e = ks(!1), t = e[0];
    return e = sf.bind(null, e[1]), mt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = re, l = mt();
    if (te) {
      if (n === void 0) throw Error(m(407));
      n = n();
    } else {
      if (n = t(), we === null) throw Error(m(349));
      en & 30 || vs(r, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, _s(gs.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, fr(9, ys.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = mt(), t = we.identifierPrefix;
    if (te) {
      var n = St, r = wt;
      n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = of++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, df = {
    readContext: Ze,
    useCallback: zs,
    useContext: Ze,
    useEffect: Ku,
    useImperativeHandle: Ns,
    useInsertionEffect: Cs,
    useLayoutEffect: xs,
    useMemo: Ts,
    useReducer: Wu,
    useRef: Es,
    useState: function() {
      return Wu(cr);
    },
    useDebugValue: Yu,
    useDeferredValue: function(e) {
      var t = Je();
      return Ls(t, me.memoizedState, e);
    },
    useTransition: function() {
      var e = Wu(cr)[0], t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: ms,
    useSyncExternalStore: hs,
    useId: Rs,
    unstable_isNewReconciler: !1
  }, pf = { readContext: Ze, useCallback: zs, useContext: Ze, useEffect: Ku, useImperativeHandle: Ns, useInsertionEffect: Cs, useLayoutEffect: xs, useMemo: Ts, useReducer: Qu, useRef: Es, useState: function() {
    return Qu(cr);
  }, useDebugValue: Yu, useDeferredValue: function(e) {
    var t = Je();
    return me === null ? t.memoizedState = e : Ls(t, me.memoizedState, e);
  }, useTransition: function() {
    var e = Qu(cr)[0], t = Je().memoizedState;
    return [e, t];
  }, useMutableSource: ms, useSyncExternalStore: hs, useId: Rs, unstable_isNewReconciler: !1 };
  function ut(e, t) {
    if (e && e.defaultProps) {
      t = x({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Xu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : x({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var sl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Yt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Oe(), l = $t(e), u = Et(r, l);
    u.payload = t, n != null && (u.callback = n), t = Ut(e, u, l), t !== null && (st(t, e, l, r), el(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Oe(), l = $t(e), u = Et(r, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Ut(e, u, l), t !== null && (st(t, e, l, r), el(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Oe(), r = $t(e), l = Et(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Ut(e, l, r), t !== null && (st(t, e, r, n), el(t, e, r));
  } };
  function Is(e, t, n, r, l, u, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : t.prototype && t.prototype.isPureReactComponent ? !Jn(n, r) || !Jn(l, u) : !0;
  }
  function Fs(e, t, n) {
    var r = !1, l = It, u = t.contextType;
    return typeof u == "object" && u !== null ? u = Ze(u) : (l = Fe(t) ? Gt : xe.current, r = t.contextTypes, u = (r = r != null) ? Sn(e, l) : It), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = sl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function js(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && sl.enqueueReplaceState(t, t.state, null);
  }
  function Gu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Iu(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = Ze(u) : (u = Fe(t) ? Gt : xe.current, l.context = Sn(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Xu(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && sl.enqueueReplaceState(l, l.state, null), tl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zn(e, t) {
    try {
      var n = "", r = t;
      do
        n += V(r), r = r.return;
      while (r);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Zu(e, t, n) {
    return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
  }
  function Ju(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var mf = typeof WeakMap == "function" ? WeakMap : Map;
  function Us(e, t, n) {
    n = Et(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      hl || (hl = !0, po = r), Ju(e, t);
    }, n;
  }
  function As(e, t, n) {
    n = Et(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Ju(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Ju(e, t), typeof r != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([this]) : Vt.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Vs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new mf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = zf.bind(null, e, t, n), t.then(e, e));
  }
  function Bs(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function $s(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Et(-1, 1), t.tag = 2, Ut(n, t, 1))), n.lanes |= 1), e);
  }
  var hf = Ce.ReactCurrentOwner, je = !1;
  function Re(e, t, n, r) {
    t.child = e === null ? ss(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function Hs(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return Pn(t, l), r = $u(e, t, n, r, u, l), n = Hu(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, _t(e, t, l)) : (te && n && xu(t), t.flags |= 1, Re(e, t, r, l), t.child);
  }
  function Ws(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !So(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Qs(e, t, u, r, l)) : (e = kl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !(e.lanes & l)) {
      var o = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Jn, n(o, r) && e.ref === t.ref) return _t(e, t, l);
    }
    return t.flags |= 1, e = Wt(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Qs(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Jn(u, r) && e.ref === t.ref) if (je = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) e.flags & 131072 && (je = !0);
      else return t.lanes = e.lanes, _t(e, t, l);
    }
    return qu(e, t, n, r, l);
  }
  function Ks(e, t, n) {
    var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, J(Ln, Ke), Ke |= n;
    else {
      if (!(n & 1073741824)) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, J(Ln, Ke), Ke |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, J(Ln, Ke), Ke |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, J(Ln, Ke), Ke |= r;
    return Re(e, t, l, n), t.child;
  }
  function Ys(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function qu(e, t, n, r, l) {
    var u = Fe(n) ? Gt : xe.current;
    return u = Sn(t, u), Pn(t, l), n = $u(e, t, n, r, u, l), r = Hu(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, _t(e, t, l)) : (te && r && xu(t), t.flags |= 1, Re(e, t, n, l), t.child);
  }
  function Xs(e, t, n, r, l) {
    if (Fe(n)) {
      var u = !0;
      Kr(t);
    } else u = !1;
    if (Pn(t, l), t.stateNode === null) cl(e, t), Fs(t, n, r), Gu(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, i = t.memoizedProps;
      o.props = i;
      var s = o.context, p = n.contextType;
      typeof p == "object" && p !== null ? p = Ze(p) : (p = Fe(n) ? Gt : xe.current, p = Sn(t, p));
      var y = n.getDerivedStateFromProps, w = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      w || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== p) && js(t, o, r, p), jt = !1;
      var h = t.memoizedState;
      o.state = h, tl(t, r, o, l), s = t.memoizedState, i !== r || h !== s || Ie.current || jt ? (typeof y == "function" && (Xu(t, n, y, r), s = t.memoizedState), (i = jt || Is(t, n, i, r, h, s, p)) ? (w || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = p, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, cs(e, t), i = t.memoizedProps, p = t.type === t.elementType ? i : ut(t.type, i), o.props = p, w = t.pendingProps, h = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ze(s) : (s = Fe(n) ? Gt : xe.current, s = Sn(t, s));
      var _ = n.getDerivedStateFromProps;
      (y = typeof _ == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== w || h !== s) && js(t, o, r, s), jt = !1, h = t.memoizedState, o.state = h, tl(t, r, o, l);
      var P = t.memoizedState;
      i !== w || h !== P || Ie.current || jt ? (typeof _ == "function" && (Xu(t, n, _, r), P = t.memoizedState), (p = jt || Is(t, n, p, r, h, P, s) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, P, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, P, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = P), o.props = r, o.state = P, o.context = s, r = p) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return bu(e, t, n, r, u, l);
  }
  function bu(e, t, n, r, l, u) {
    Ys(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && bi(t, n, !1), _t(e, t, u);
    r = t.stateNode, hf.current = t;
    var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Cn(t, e.child, null, u), t.child = Cn(t, null, i, u)) : Re(e, t, i, u), t.memoizedState = r.state, l && bi(t, n, !0), t.child;
  }
  function Gs(e) {
    var t = e.stateNode;
    t.pendingContext ? Ji(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ji(e, t.context, !1), Fu(e, t.containerInfo);
  }
  function Zs(e, t, n, r, l) {
    return _n(), Tu(l), t.flags |= 256, Re(e, t, n, r), t.child;
  }
  var eo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function to(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Js(e, t, n) {
    var r = t.pendingProps, l = ne.current, u = !1, o = (t.flags & 128) !== 0, i;
    if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), J(ne, l & 1), e === null)
      return zu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, o = { mode: "hidden", children: o }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = El(o, r, 0, null), e = un(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = to(n), t.memoizedState = eo, e) : no(t, o));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return vf(e, t, o, r, i, l, n);
    if (u) {
      u = r.fallback, o = t.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Wt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = Wt(i, u) : (u = un(u, o, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, o = e.child.memoizedState, o = o === null ? to(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~n, t.memoizedState = eo, r;
    }
    return u = e.child, e = u.sibling, r = Wt(u, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function no(e, t) {
    return t = El({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function al(e, t, n, r) {
    return r !== null && Tu(r), Cn(t, e.child, null, n), e = no(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function vf(e, t, n, r, l, u, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Zu(Error(m(422))), al(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), u = un(u, l, o, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, t.mode & 1 && Cn(t, e.child, null, o), t.child.memoizedState = to(o), t.memoizedState = eo, u);
    if (!(t.mode & 1)) return al(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, u = Error(m(419)), r = Zu(u, r, void 0), al(e, t, o, r);
    }
    if (i = (o & e.childLanes) !== 0, je || i) {
      if (r = we, r !== null) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, kt(e, l), st(r, e, l, -1));
      }
      return wo(), r = Zu(Error(m(421))), al(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tf.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Qe = Mt(l.nextSibling), We = t, te = !0, lt = null, e !== null && (Xe[Ge++] = wt, Xe[Ge++] = St, Xe[Ge++] = Zt, wt = e.id, St = e.overflow, Zt = t), t = no(t, r.children), t.flags |= 4096, t);
  }
  function qs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Mu(e.return, t, n);
  }
  function ro(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
  }
  function bs(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, u = r.tail;
    if (Re(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qs(e, n, t);
        else if (e.tag === 19) qs(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (J(ne, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && nl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ro(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && nl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ro(t, !0, n, null, u);
        break;
      case "together":
        ro(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function cl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function _t(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), tn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Wt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function yf(e, t, n) {
    switch (t.tag) {
      case 3:
        Gs(t), _n();
        break;
      case 5:
        ps(t);
        break;
      case 1:
        Fe(t.type) && Kr(t);
        break;
      case 4:
        Fu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        J(qr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (J(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Js(e, t, n) : (J(ne, ne.current & 1), e = _t(e, t, n), e !== null ? e.sibling : null);
        J(ne, ne.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return bs(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), J(ne, ne.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ks(e, t, n);
    }
    return _t(e, t, n);
  }
  var ea, lo, ta, na;
  ea = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, lo = function() {
  }, ta = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, bt(pt.current);
      var u = null;
      switch (n) {
        case "input":
          l = Ml(e, l), r = Ml(e, r), u = [];
          break;
        case "select":
          l = x({}, l, { value: void 0 }), r = x({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Fl(e, l), r = Fl(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
      }
      Ul(n, r);
      var o;
      n = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var i = l[p];
        for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (pe.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== i && (s != null || i != null)) if (p === "style") if (i) {
          for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
        } else n || (u || (u = []), u.push(
          p,
          n
        )), n = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (pe.hasOwnProperty(p) ? (s != null && p === "onScroll" && q("scroll", e), u || i === s || (u = [])) : (u = u || []).push(p, s));
      }
      n && (u = u || []).push("style", n);
      var p = u;
      (t.updateQueue = p) && (t.flags |= 4);
    }
  }, na = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function dr(e, t) {
    if (!te) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function gf(e, t, n) {
    var r = t.pendingProps;
    switch (Pu(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ne(t), null;
      case 1:
        return Fe(t.type) && Qr(), Ne(t), null;
      case 3:
        return r = t.stateNode, Nn(), b(Ie), b(xe), Au(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, lt !== null && (vo(lt), lt = null))), lo(e, t), Ne(t), null;
      case 5:
        ju(t);
        var l = bt(ir.current);
        if (n = t.type, e !== null && t.stateNode != null) ta(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return Ne(t), null;
          }
          if (e = bt(pt.current), Zr(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[dt] = t, r[nr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                q("cancel", r), q("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++) q(bn[l], r);
                break;
              case "source":
                q("error", r);
                break;
              case "img":
              case "image":
              case "link":
                q(
                  "error",
                  r
                ), q("load", r);
                break;
              case "details":
                q("toggle", r);
                break;
              case "input":
                Fo(r, u), q("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, q("invalid", r);
                break;
              case "textarea":
                Ao(r, u), q("invalid", r);
            }
            Ul(n, u), l = null;
            for (var o in u) if (u.hasOwnProperty(o)) {
              var i = u[o];
              o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && $r(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && $r(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : pe.hasOwnProperty(o) && i != null && o === "onScroll" && q("scroll", r);
            }
            switch (n) {
              case "input":
                wr(r), Uo(r, u, !0);
                break;
              case "textarea":
                wr(r), Bo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Hr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = $o(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[dt] = t, e[nr] = r, ea(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Al(n, r), n) {
                case "dialog":
                  q("cancel", e), q("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  q("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bn.length; l++) q(bn[l], e);
                  l = r;
                  break;
                case "source":
                  q("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  q(
                    "error",
                    e
                  ), q("load", e), l = r;
                  break;
                case "details":
                  q("toggle", e), l = r;
                  break;
                case "input":
                  Fo(e, r), l = Ml(e, r), q("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = x({}, r, { value: void 0 }), q("invalid", e);
                  break;
                case "textarea":
                  Ao(e, r), l = Fl(e, r), q("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ul(n, l), i = l;
              for (u in i) if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "style" ? Qo(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ho(e, s)) : u === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Dn(e, s) : typeof s == "number" && Dn(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (pe.hasOwnProperty(u) ? s != null && u === "onScroll" && q("scroll", e) : s != null && Te(e, u, s, o));
              }
              switch (n) {
                case "input":
                  wr(e), Uo(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Bo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + W(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? sn(e, !!r.multiple, u, !1) : r.defaultValue != null && sn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ne(t), null;
      case 6:
        if (e && t.stateNode != null) na(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (n = bt(ir.current), bt(pt.current), Zr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[dt] = t, (u = r.nodeValue !== n) && (e = We, e !== null)) switch (e.tag) {
              case 3:
                $r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && $r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[dt] = t, t.stateNode = r;
        }
        return Ne(t), null;
      case 13:
        if (b(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (te && Qe !== null && t.mode & 1 && !(t.flags & 128)) us(), _n(), t.flags |= 98560, u = !1;
          else if (u = Zr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(m(317));
              u[dt] = t;
            } else _n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Ne(t), u = !1;
          } else lt !== null && (vo(lt), lt = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? he === 0 && (he = 3) : wo())), t.updateQueue !== null && (t.flags |= 4), Ne(t), null);
      case 4:
        return Nn(), lo(e, t), e === null && er(t.stateNode.containerInfo), Ne(t), null;
      case 10:
        return Ou(t.type._context), Ne(t), null;
      case 17:
        return Fe(t.type) && Qr(), Ne(t), null;
      case 19:
        if (b(ne), u = t.memoizedState, u === null) return Ne(t), null;
        if (r = (t.flags & 128) !== 0, o = u.rendering, o === null) if (r) dr(u, !1);
        else {
          if (he !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (o = nl(e), o !== null) {
              for (t.flags |= 128, dr(u, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return J(ne, ne.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && ie() > Rn && (t.flags |= 128, r = !0, dr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = nl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dr(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !te) return Ne(t), null;
          } else 2 * ie() - u.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, dr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (o.sibling = t.child, t.child = o) : (n = u.last, n !== null ? n.sibling = o : t.child = o, u.last = o);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ie(), t.sibling = null, n = ne.current, J(ne, r ? n & 1 | 2 : n & 1), t) : (Ne(t), null);
      case 22:
      case 23:
        return go(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ke & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function wf(e, t) {
    switch (Pu(t), t.tag) {
      case 1:
        return Fe(t.type) && Qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Nn(), b(Ie), b(xe), Au(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ju(t), null;
      case 13:
        if (b(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(m(340));
          _n();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return b(ne), null;
      case 4:
        return Nn(), null;
      case 10:
        return Ou(t.type._context), null;
      case 22:
      case 23:
        return go(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1, ze = !1, Sf = typeof WeakSet == "function" ? WeakSet : Set, C = null;
  function Tn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ue(e, t, r);
    }
    else n.current = null;
  }
  function uo(e, t, n) {
    try {
      n();
    } catch (r) {
      ue(e, t, r);
    }
  }
  var ra = !1;
  function kf(e, t) {
    if (yu = Rr, e = Ii(), au(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch (S) {
            n = null;
            break e;
          }
          var o = 0, i = -1, s = -1, p = 0, y = 0, w = e, h = null;
          t: for (; ; ) {
            for (var _; w !== n || l !== 0 && w.nodeType !== 3 || (i = o + l), w !== u || r !== 0 && w.nodeType !== 3 || (s = o + r), w.nodeType === 3 && (o += w.nodeValue.length), (_ = w.firstChild) !== null; )
              h = w, w = _;
            for (; ; ) {
              if (w === e) break t;
              if (h === n && ++p === l && (i = o), h === u && ++y === r && (s = o), (_ = w.nextSibling) !== null) break;
              w = h, h = w.parentNode;
            }
            w = _;
          }
          n = i === -1 || s === -1 ? null : { start: i, end: s };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (gu = { focusedElem: e, selectionRange: n }, Rr = !1, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
    else for (; C !== null; ) {
      t = C;
      try {
        var P = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (P !== null) {
              var N = P.memoizedProps, se = P.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? N : ut(t.type, N), se);
              f.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var d = t.stateNode.containerInfo;
            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (S) {
        ue(t, t.return, S);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, C = e;
        break;
      }
      C = t.return;
    }
    return P = ra, ra = !1, P;
  }
  function pr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && uo(t, n, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function oo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function la(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, la(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dt], delete t[nr], delete t[Eu], delete t[nf], delete t[rf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ua(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function oa(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ua(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function io(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Hr));
    else if (r !== 4 && (e = e.child, e !== null)) for (io(e, t, n), e = e.sibling; e !== null; ) io(e, t, n), e = e.sibling;
  }
  function so(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), e = e.sibling;
  }
  var ke = null, ot = !1;
  function At(e, t, n) {
    for (n = n.child; n !== null; ) ia(e, t, n), n = n.sibling;
  }
  function ia(e, t, n) {
    if (ft && typeof ft.onCommitFiberUnmount == "function") try {
      ft.onCommitFiberUnmount(xr, n);
    } catch (i) {
    }
    switch (n.tag) {
      case 5:
        ze || Tn(n, t);
      case 6:
        var r = ke, l = ot;
        ke = null, At(e, t, n), ke = r, ot = l, ke !== null && (ot ? (e = ke, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ke.removeChild(n.stateNode));
        break;
      case 18:
        ke !== null && (ot ? (e = ke, n = n.stateNode, e.nodeType === 8 ? ku(e.parentNode, n) : e.nodeType === 1 && ku(e, n), Qn(e)) : ku(ke, n.stateNode));
        break;
      case 4:
        r = ke, l = ot, ke = n.stateNode.containerInfo, ot = !0, At(e, t, n), ke = r, ot = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, o = u.destroy;
            u = u.tag, o !== void 0 && (u & 2 || u & 4) && uo(n, t, o), l = l.next;
          } while (l !== r);
        }
        At(e, t, n);
        break;
      case 1:
        if (!ze && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (i) {
          ue(n, t, i);
        }
        At(e, t, n);
        break;
      case 21:
        At(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, At(e, t, n), ze = r) : At(e, t, n);
        break;
      default:
        At(e, t, n);
    }
  }
  function sa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Sf()), t.forEach(function(r) {
        var l = Lf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function it(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var u = e, o = t, i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              ke = i.stateNode, ot = !1;
              break e;
            case 3:
              ke = i.stateNode.containerInfo, ot = !0;
              break e;
            case 4:
              ke = i.stateNode.containerInfo, ot = !0;
              break e;
          }
          i = i.return;
        }
        if (ke === null) throw Error(m(160));
        ia(u, o, l), ke = null, ot = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        ue(l, t, p);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) aa(t, e), t = t.sibling;
  }
  function aa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (it(t, e), ht(e), r & 4) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (N) {
            ue(e, e.return, N);
          }
          try {
            pr(5, e, e.return);
          } catch (N) {
            ue(e, e.return, N);
          }
        }
        break;
      case 1:
        it(t, e), ht(e), r & 512 && n !== null && Tn(n, n.return);
        break;
      case 5:
        if (it(t, e), ht(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Dn(l, "");
          } catch (N) {
            ue(e, e.return, N);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, o = n !== null ? n.memoizedProps : u, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            i === "input" && u.type === "radio" && u.name != null && jo(l, u), Al(i, o);
            var p = Al(i, u);
            for (o = 0; o < s.length; o += 2) {
              var y = s[o], w = s[o + 1];
              y === "style" ? Qo(l, w) : y === "dangerouslySetInnerHTML" ? Ho(l, w) : y === "children" ? Dn(l, w) : Te(l, y, w, p);
            }
            switch (i) {
              case "input":
                Dl(l, u);
                break;
              case "textarea":
                Vo(l, u);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var _ = u.value;
                _ != null ? sn(l, !!u.multiple, _, !1) : h !== !!u.multiple && (u.defaultValue != null ? sn(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : sn(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[nr] = u;
          } catch (N) {
            ue(e, e.return, N);
          }
        }
        break;
      case 6:
        if (it(t, e), ht(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (N) {
            ue(e, e.return, N);
          }
        }
        break;
      case 3:
        if (it(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Qn(t.containerInfo);
        } catch (N) {
          ue(e, e.return, N);
        }
        break;
      case 4:
        it(t, e), ht(e);
        break;
      case 13:
        it(t, e), ht(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (fo = ie())), r & 4 && sa(e);
        break;
      case 22:
        if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (p = ze) || y, it(t, e), ze = p) : it(t, e), ht(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1) for (C = e, y = e.child; y !== null; ) {
            for (w = C = y; C !== null; ) {
              switch (h = C, _ = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, h, h.return);
                  break;
                case 1:
                  Tn(h, h.return);
                  var P = h.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, P.props = t.memoizedProps, P.state = t.memoizedState, P.componentWillUnmount();
                    } catch (N) {
                      ue(r, n, N);
                    }
                  }
                  break;
                case 5:
                  Tn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    da(w);
                    continue;
                  }
              }
              _ !== null ? (_.return = h, C = _) : da(w);
            }
            y = y.sibling;
          }
          e: for (y = null, w = e; ; ) {
            if (w.tag === 5) {
              if (y === null) {
                y = w;
                try {
                  l = w.stateNode, p ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = w.stateNode, s = w.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Wo("display", o));
                } catch (N) {
                  ue(e, e.return, N);
                }
              }
            } else if (w.tag === 6) {
              if (y === null) try {
                w.stateNode.nodeValue = p ? "" : w.memoizedProps;
              } catch (N) {
                ue(e, e.return, N);
              }
            } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
              w.child.return = w, w = w.child;
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              y === w && (y = null), w = w.return;
            }
            y === w && (y = null), w.sibling.return = w.return, w = w.sibling;
          }
        }
        break;
      case 19:
        it(t, e), ht(e), r & 4 && sa(e);
        break;
      case 21:
        break;
      default:
        it(
          t,
          e
        ), ht(e);
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ua(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dn(l, ""), r.flags &= -33);
            var u = oa(e);
            so(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, i = oa(e);
            io(e, i, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ue(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ef(e, t, n) {
    C = e, ca(e);
  }
  function ca(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null; ) {
      var l = C, u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || fl;
        if (!o) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || ze;
          i = fl;
          var p = ze;
          if (fl = o, (ze = s) && !p) for (C = l; C !== null; ) o = C, s = o.child, o.tag === 22 && o.memoizedState !== null ? pa(l) : s !== null ? (s.return = o, C = s) : pa(l);
          for (; u !== null; ) C = u, ca(u), u = u.sibling;
          C = l, fl = i, ze = p;
        }
        fa(e);
      } else l.subtreeFlags & 8772 && u !== null ? (u.return = l, C = u) : fa(e);
    }
  }
  function fa(e) {
    for (; C !== null; ) {
      var t = C;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && ds(t, u, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                ds(t, o, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var p = t.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var w = y.dehydrated;
                    w !== null && Qn(w);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(m(163));
          }
          ze || t.flags & 512 && oo(t);
        } catch (h) {
          ue(t, t.return, h);
        }
      }
      if (t === e) {
        C = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, C = n;
        break;
      }
      C = t.return;
    }
  }
  function da(e) {
    for (; C !== null; ) {
      var t = C;
      if (t === e) {
        C = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, C = n;
        break;
      }
      C = t.return;
    }
  }
  function pa(e) {
    for (; C !== null; ) {
      var t = C;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              dl(4, t);
            } catch (s) {
              ue(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ue(t, l, s);
              }
            }
            var u = t.return;
            try {
              oo(t);
            } catch (s) {
              ue(t, u, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              oo(t);
            } catch (s) {
              ue(t, o, s);
            }
        }
      } catch (s) {
        ue(t, t.return, s);
      }
      if (t === e) {
        C = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, C = i;
        break;
      }
      C = t.return;
    }
  }
  var _f = Math.ceil, pl = Ce.ReactCurrentDispatcher, ao = Ce.ReactCurrentOwner, qe = Ce.ReactCurrentBatchConfig, A = 0, we = null, de = null, Ee = 0, Ke = 0, Ln = Dt(0), he = 0, mr = null, tn = 0, ml = 0, co = 0, hr = null, Ue = null, fo = 0, Rn = 1 / 0, Ct = null, hl = !1, po = null, Vt = null, vl = !1, Bt = null, yl = 0, vr = 0, mo = null, gl = -1, wl = 0;
  function Oe() {
    return A & 6 ? ie() : gl !== -1 ? gl : gl = ie();
  }
  function $t(e) {
    return e.mode & 1 ? A & 2 && Ee !== 0 ? Ee & -Ee : uf.transition !== null ? (wl === 0 && (wl = oi()), wl) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : hi(e.type)), e) : 1;
  }
  function st(e, t, n, r) {
    if (50 < vr) throw vr = 0, mo = null, Error(m(185));
    Vn(e, n, r), (!(A & 2) || e !== we) && (e === we && (!(A & 2) && (ml |= n), he === 4 && Ht(e, Ee)), Ae(e, r), n === 1 && A === 0 && !(t.mode & 1) && (Rn = ie() + 500, Yr && Ft()));
  }
  function Ae(e, t) {
    var n = e.callbackNode;
    uc(e, t);
    var r = zr(e, e === we ? Ee : 0);
    if (r === 0) n !== null && ri(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ri(n), t === 1) e.tag === 0 ? lf(ha.bind(null, e)) : es(ha.bind(null, e)), ef(function() {
        !(A & 6) && Ft();
      }), n = null;
      else {
        switch (ii(r)) {
          case 1:
            n = Kl;
            break;
          case 4:
            n = li;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = ui;
            break;
          default:
            n = Cr;
        }
        n = _a(n, ma.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function ma(e, t) {
    if (gl = -1, wl = 0, A & 6) throw Error(m(327));
    var n = e.callbackNode;
    if (On() && e.callbackNode !== n) return null;
    var r = zr(e, e === we ? Ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Sl(e, r);
    else {
      t = r;
      var l = A;
      A |= 2;
      var u = ya();
      (we !== e || Ee !== t) && (Ct = null, Rn = ie() + 500, rn(e, t));
      do
        try {
          Pf();
          break;
        } catch (i) {
          va(e, i);
        }
      while (!0);
      Ru(), pl.current = u, A = l, de !== null ? t = 0 : (we = null, Ee = 0, t = he);
    }
    if (t !== 0) {
      if (t === 2 && (l = Yl(e), l !== 0 && (r = l, t = ho(e, l))), t === 1) throw n = mr, rn(e, 0), Ht(e, r), Ae(e, ie()), n;
      if (t === 6) Ht(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !Cf(l) && (t = Sl(e, r), t === 2 && (u = Yl(e), u !== 0 && (r = u, t = ho(e, u))), t === 1)) throw n = mr, rn(e, 0), Ht(e, r), Ae(e, ie()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ln(e, Ue, Ct);
            break;
          case 3:
            if (Ht(e, r), (r & 130023424) === r && (t = fo + 500 - ie(), 10 < t)) {
              if (zr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Oe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Su(ln.bind(null, e, Ue, Ct), t);
              break;
            }
            ln(e, Ue, Ct);
            break;
          case 4:
            if (Ht(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - nt(r);
              u = 1 << o, o = t[o], o > l && (l = o), r &= ~u;
            }
            if (r = l, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _f(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Su(ln.bind(null, e, Ue, Ct), r);
              break;
            }
            ln(e, Ue, Ct);
            break;
          case 5:
            ln(e, Ue, Ct);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ae(e, ie()), e.callbackNode === n ? ma.bind(null, e) : null;
  }
  function ho(e, t) {
    var n = hr;
    return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256), e = Sl(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && vo(t)), e;
  }
  function vo(e) {
    Ue === null ? Ue = e : Ue.push.apply(Ue, e);
  }
  function Cf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!rt(u(), l)) return !1;
          } catch (o) {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ht(e, t) {
    for (t &= ~co, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - nt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function ha(e) {
    if (A & 6) throw Error(m(327));
    On();
    var t = zr(e, 0);
    if (!(t & 1)) return Ae(e, ie()), null;
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && (t = r, n = ho(e, r));
    }
    if (n === 1) throw n = mr, rn(e, 0), Ht(e, t), Ae(e, ie()), n;
    if (n === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, ln(e, Ue, Ct), Ae(e, ie()), null;
  }
  function yo(e, t) {
    var n = A;
    A |= 1;
    try {
      return e(t);
    } finally {
      A = n, A === 0 && (Rn = ie() + 500, Yr && Ft());
    }
  }
  function nn(e) {
    Bt !== null && Bt.tag === 0 && !(A & 6) && On();
    var t = A;
    A |= 1;
    var n = qe.transition, r = Q;
    try {
      if (qe.transition = null, Q = 1, e) return e();
    } finally {
      Q = r, qe.transition = n, A = t, !(A & 6) && Ft();
    }
  }
  function go() {
    Ke = Ln.current, b(Ln);
  }
  function rn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, bc(n)), de !== null) for (n = de.return; n !== null; ) {
      var r = n;
      switch (Pu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qr();
          break;
        case 3:
          Nn(), b(Ie), b(xe), Au();
          break;
        case 5:
          ju(r);
          break;
        case 4:
          Nn();
          break;
        case 13:
          b(ne);
          break;
        case 19:
          b(ne);
          break;
        case 10:
          Ou(r.type._context);
          break;
        case 22:
        case 23:
          go();
      }
      n = n.return;
    }
    if (we = e, de = e = Wt(e.current, null), Ee = Ke = t, he = 0, mr = null, co = ml = tn = 0, Ue = hr = null, qt !== null) {
      for (t = 0; t < qt.length; t++) if (n = qt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, u = n.pending;
        if (u !== null) {
          var o = u.next;
          u.next = l, r.next = o;
        }
        n.pending = r;
      }
      qt = null;
    }
    return e;
  }
  function va(e, t) {
    do {
      var n = de;
      try {
        if (Ru(), rl.current = il, ll) {
          for (var r = re.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (en = 0, ge = me = re = null, sr = !1, ar = 0, ao.current = null, n === null || n.return === null) {
          he = 1, mr = t, de = null;
          break;
        }
        e: {
          var u = e, o = n.return, i = n, s = t;
          if (t = Ee, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, w = y.tag;
            if (!(y.mode & 1) && (w === 0 || w === 11 || w === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var _ = Bs(o);
            if (_ !== null) {
              _.flags &= -257, $s(_, o, i, u, t), _.mode & 1 && Vs(u, p, t), t = _, s = p;
              var P = t.updateQueue;
              if (P === null) {
                var N = /* @__PURE__ */ new Set();
                N.add(s), t.updateQueue = N;
              } else P.add(s);
              break e;
            } else {
              if (!(t & 1)) {
                Vs(u, p, t), wo();
                break e;
              }
              s = Error(m(426));
            }
          } else if (te && i.mode & 1) {
            var se = Bs(o);
            if (se !== null) {
              !(se.flags & 65536) && (se.flags |= 256), $s(se, o, i, u, t), Tu(zn(s, i));
              break e;
            }
          }
          u = s = zn(s, i), he !== 4 && (he = 2), hr === null ? hr = [u] : hr.push(u), u = o;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var f = Us(u, s, t);
                fs(u, f);
                break e;
              case 1:
                i = s;
                var a = u.type, d = u.stateNode;
                if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Vt === null || !Vt.has(d)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var S = As(u, i, t);
                  fs(u, S);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        wa(n);
      } catch (z) {
        t = z, de === n && n !== null && (de = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ya() {
    var e = pl.current;
    return pl.current = il, e === null ? il : e;
  }
  function wo() {
    (he === 0 || he === 3 || he === 2) && (he = 4), we === null || !(tn & 268435455) && !(ml & 268435455) || Ht(we, Ee);
  }
  function Sl(e, t) {
    var n = A;
    A |= 2;
    var r = ya();
    (we !== e || Ee !== t) && (Ct = null, rn(e, t));
    do
      try {
        xf();
        break;
      } catch (l) {
        va(e, l);
      }
    while (!0);
    if (Ru(), A = n, pl.current = r, de !== null) throw Error(m(261));
    return we = null, Ee = 0, he;
  }
  function xf() {
    for (; de !== null; ) ga(de);
  }
  function Pf() {
    for (; de !== null && !Za(); ) ga(de);
  }
  function ga(e) {
    var t = Ea(e.alternate, e, Ke);
    e.memoizedProps = e.pendingProps, t === null ? wa(e) : de = t, ao.current = null;
  }
  function wa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = wf(n, t), n !== null) {
          n.flags &= 32767, de = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          he = 6, de = null;
          return;
        }
      } else if (n = gf(n, t, Ke), n !== null) {
        de = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    he === 0 && (he = 5);
  }
  function ln(e, t, n) {
    var r = Q, l = qe.transition;
    try {
      qe.transition = null, Q = 1, Nf(e, t, n, r);
    } finally {
      qe.transition = l, Q = r;
    }
    return null;
  }
  function Nf(e, t, n, r) {
    do
      On();
    while (Bt !== null);
    if (A & 6) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (oc(e, u), e === we && (de = we = null, Ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || vl || (vl = !0, _a(Cr, function() {
      return On(), null;
    })), u = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || u) {
      u = qe.transition, qe.transition = null;
      var o = Q;
      Q = 1;
      var i = A;
      A |= 4, ao.current = null, kf(e, n), aa(n, e), Kc(gu), Rr = !!yu, gu = yu = null, e.current = n, Ef(n), Ja(), A = i, Q = o, qe.transition = u;
    } else e.current = n;
    if (vl && (vl = !1, Bt = e, yl = l), u = e.pendingLanes, u === 0 && (Vt = null), ec(n.stateNode), Ae(e, ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = po, po = null, e;
    return yl & 1 && e.tag !== 0 && On(), u = e.pendingLanes, u & 1 ? e === mo ? vr++ : (vr = 0, mo = e) : vr = 0, Ft(), null;
  }
  function On() {
    if (Bt !== null) {
      var e = ii(yl), t = qe.transition, n = Q;
      try {
        if (qe.transition = null, Q = 16 > e ? 16 : e, Bt === null) var r = !1;
        else {
          if (e = Bt, Bt = null, yl = 0, A & 6) throw Error(m(331));
          var l = A;
          for (A |= 4, C = e.current; C !== null; ) {
            var u = C, o = u.child;
            if (C.flags & 16) {
              var i = u.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (C = p; C !== null; ) {
                    var y = C;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, y, u);
                    }
                    var w = y.child;
                    if (w !== null) w.return = y, C = w;
                    else for (; C !== null; ) {
                      y = C;
                      var h = y.sibling, _ = y.return;
                      if (la(y), y === p) {
                        C = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = _, C = h;
                        break;
                      }
                      C = _;
                    }
                  }
                }
                var P = u.alternate;
                if (P !== null) {
                  var N = P.child;
                  if (N !== null) {
                    P.child = null;
                    do {
                      var se = N.sibling;
                      N.sibling = null, N = se;
                    } while (N !== null);
                  }
                }
                C = u;
              }
            }
            if (u.subtreeFlags & 2064 && o !== null) o.return = u, C = o;
            else e: for (; C !== null; ) {
              if (u = C, u.flags & 2048) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  pr(9, u, u.return);
              }
              var f = u.sibling;
              if (f !== null) {
                f.return = u.return, C = f;
                break e;
              }
              C = u.return;
            }
          }
          var a = e.current;
          for (C = a; C !== null; ) {
            o = C;
            var d = o.child;
            if (o.subtreeFlags & 2064 && d !== null) d.return = o, C = d;
            else e: for (o = a; C !== null; ) {
              if (i = C, i.flags & 2048) try {
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dl(9, i);
                }
              } catch (z) {
                ue(i, i.return, z);
              }
              if (i === o) {
                C = null;
                break e;
              }
              var S = i.sibling;
              if (S !== null) {
                S.return = i.return, C = S;
                break e;
              }
              C = i.return;
            }
          }
          if (A = l, Ft(), ft && typeof ft.onPostCommitFiberRoot == "function") try {
            ft.onPostCommitFiberRoot(xr, e);
          } catch (z) {
          }
          r = !0;
        }
        return r;
      } finally {
        Q = n, qe.transition = t;
      }
    }
    return !1;
  }
  function Sa(e, t, n) {
    t = zn(n, t), t = Us(e, t, 1), e = Ut(e, t, 1), t = Oe(), e !== null && (Vn(e, 1, t), Ae(e, t));
  }
  function ue(e, t, n) {
    if (e.tag === 3) Sa(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Sa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
          e = zn(n, e), e = As(t, e, 1), t = Ut(t, e, 1), e = Oe(), t !== null && (Vn(t, 1, e), Ae(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function zf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Oe(), e.pingedLanes |= e.suspendedLanes & n, we === e && (Ee & n) === n && (he === 4 || he === 3 && (Ee & 130023424) === Ee && 500 > ie() - fo ? rn(e, 0) : co |= n), Ae(e, t);
  }
  function ka(e, t) {
    t === 0 && (e.mode & 1 ? (t = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : t = 1);
    var n = Oe();
    e = kt(e, t), e !== null && (Vn(e, t, n), Ae(e, n));
  }
  function Tf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ka(e, n);
  }
  function Lf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(t), ka(e, n);
  }
  var Ea;
  Ea = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ie.current) je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return je = !1, yf(e, t, n);
      je = !!(e.flags & 131072);
    }
    else je = !1, te && t.flags & 1048576 && ts(t, Gr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        cl(e, t), e = t.pendingProps;
        var l = Sn(t, xe.current);
        Pn(t, n), l = $u(null, t, r, e, l, n);
        var u = Hu();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Fe(r) ? (u = !0, Kr(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Iu(t), l.updater = sl, t.stateNode = l, l._reactInternals = t, Gu(t, r, e, n), t = bu(null, t, r, !0, u, n)) : (t.tag = 0, te && u && xu(t), Re(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (cl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Of(r), e = ut(r, e), l) {
            case 0:
              t = qu(null, t, r, e, n);
              break e;
            case 1:
              t = Xs(null, t, r, e, n);
              break e;
            case 11:
              t = Hs(null, t, r, e, n);
              break e;
            case 14:
              t = Ws(null, t, r, ut(r.type, e), n);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), qu(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), Xs(e, t, r, l, n);
      case 3:
        e: {
          if (Gs(t), e === null) throw Error(m(387));
          r = t.pendingProps, u = t.memoizedState, l = u.element, cs(e, t), tl(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = zn(Error(m(423)), t), t = Zs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = zn(Error(m(424)), t), t = Zs(e, t, r, n, l);
            break e;
          } else for (Qe = Mt(t.stateNode.containerInfo.firstChild), We = t, te = !0, lt = null, n = ss(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (_n(), r === l) {
              t = _t(e, t, n);
              break e;
            }
            Re(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ps(t), e === null && zu(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, wu(r, l) ? o = null : u !== null && wu(r, u) && (t.flags |= 32), Ys(e, t), Re(e, t, o, n), t.child;
      case 6:
        return e === null && zu(t), null;
      case 13:
        return Js(e, t, n);
      case 4:
        return Fu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Cn(t, null, r, n) : Re(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), Hs(e, t, r, l, n);
      case 7:
        return Re(e, t, t.pendingProps, n), t.child;
      case 8:
        return Re(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Re(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, o = l.value, J(qr, r._currentValue), r._currentValue = o, u !== null) if (rt(u.value, o)) {
            if (u.children === l.children && !Ie.current) {
              t = _t(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var i = u.dependencies;
            if (i !== null) {
              o = u.child;
              for (var s = i.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (u.tag === 1) {
                    s = Et(-1, n & -n), s.tag = 2;
                    var p = u.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), Mu(
                    u.return,
                    n,
                    t
                  ), i.lanes |= n;
                  break;
                }
                s = s.next;
              }
            } else if (u.tag === 10) o = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (o = u.return, o === null) throw Error(m(341));
              o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Mu(o, n, t), o = u.sibling;
            } else o = u.child;
            if (o !== null) o.return = u;
            else for (o = u; o !== null; ) {
              if (o === t) {
                o = null;
                break;
              }
              if (u = o.sibling, u !== null) {
                u.return = o.return, o = u;
                break;
              }
              o = o.return;
            }
            u = o;
          }
          Re(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Pn(t, n), l = Ze(l), r = r(l), t.flags |= 1, Re(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = ut(r, t.pendingProps), l = ut(r.type, l), Ws(e, t, r, l, n);
      case 15:
        return Qs(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), cl(e, t), t.tag = 1, Fe(r) ? (e = !0, Kr(t)) : e = !1, Pn(t, n), Fs(t, r, l), Gu(t, r, l, n), bu(null, t, r, !0, e, n);
      case 19:
        return bs(e, t, n);
      case 22:
        return Ks(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function _a(e, t) {
    return ni(e, t);
  }
  function Rf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function be(e, t, n, r) {
    return new Rf(e, t, n, r);
  }
  function So(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Of(e) {
    if (typeof e == "function") return So(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === at) return 11;
      if (e === ct) return 14;
    }
    return 2;
  }
  function Wt(e, t) {
    var n = e.alternate;
    return n === null ? (n = be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function kl(e, t, n, r, l, u) {
    var o = 2;
    if (r = e, typeof e == "function") So(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case Me:
        return un(n.children, l, u, t);
      case Ye:
        o = 8, l |= 8;
        break;
      case Pt:
        return e = be(12, n, t, l | 2), e.elementType = Pt, e.lanes = u, e;
      case Be:
        return e = be(13, n, t, l), e.elementType = Be, e.lanes = u, e;
      case tt:
        return e = be(19, n, t, l), e.elementType = tt, e.lanes = u, e;
      case le:
        return El(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case vt:
            o = 10;
            break e;
          case Kt:
            o = 9;
            break e;
          case at:
            o = 11;
            break e;
          case ct:
            o = 14;
            break e;
          case De:
            o = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return t = be(o, n, t, l), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function un(e, t, n, r) {
    return e = be(7, e, r, t), e.lanes = n, e;
  }
  function El(e, t, n, r) {
    return e = be(22, e, r, t), e.elementType = le, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ko(e, t, n) {
    return e = be(6, e, null, t), e.lanes = n, e;
  }
  function Eo(e, t, n) {
    return t = be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Mf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xl(0), this.expirationTimes = Xl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function _o(e, t, n, r, l, u, o, i, s) {
    return e = new Mf(e, t, n, i, s), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = be(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Iu(u), e;
  }
  function Df(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Le, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ca(e) {
    if (!e) return It;
    e = e._reactInternals;
    e: {
      if (Yt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Fe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Fe(n)) return qi(e, n, t);
    }
    return t;
  }
  function xa(e, t, n, r, l, u, o, i, s) {
    return e = _o(n, r, !0, e, l, u, o, i, s), e.context = Ca(null), n = e.current, r = Oe(), l = $t(n), u = Et(r, l), u.callback = t != null ? t : null, Ut(n, u, l), e.current.lanes = l, Vn(e, l, r), Ae(e, r), e;
  }
  function _l(e, t, n, r) {
    var l = t.current, u = Oe(), o = $t(l);
    return n = Ca(n), t.context === null ? t.context = n : t.pendingContext = n, t = Et(u, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ut(l, t, o), e !== null && (st(e, l, o, u), el(e, l, o)), o;
  }
  function Cl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Pa(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Co(e, t) {
    Pa(e, t), (e = e.alternate) && Pa(e, t);
  }
  function If() {
    return null;
  }
  var Na = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function xo(e) {
    this._internalRoot = e;
  }
  xl.prototype.render = xo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    _l(e, t, null, null);
  }, xl.prototype.unmount = xo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      nn(function() {
        _l(null, e, null, null);
      }), t[yt] = null;
    }
  };
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ci();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++) ;
      Lt.splice(n, 0, e), n === 0 && pi(e);
    }
  };
  function Po(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Pl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function za() {
  }
  function Ff(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var p = Cl(o);
          u.call(p);
        };
      }
      var o = xa(t, r, e, 0, null, !1, !1, "", za);
      return e._reactRootContainer = o, e[yt] = o.current, er(e.nodeType === 8 ? e.parentNode : e), nn(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = Cl(s);
        i.call(p);
      };
    }
    var s = _o(e, 0, !1, null, null, !1, !1, "", za);
    return e._reactRootContainer = s, e[yt] = s.current, er(e.nodeType === 8 ? e.parentNode : e), nn(function() {
      _l(t, s, n, r);
    }), s;
  }
  function Nl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = Cl(o);
          i.call(s);
        };
      }
      _l(t, o, e, l);
    } else o = Ff(n, t, e, l, r);
    return Cl(o);
  }
  si = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = An(t.pendingLanes);
          n !== 0 && (Gl(t, n | 1), Ae(t, ie()), !(A & 6) && (Rn = ie() + 500, Ft()));
        }
        break;
      case 13:
        nn(function() {
          var r = kt(e, 1);
          if (r !== null) {
            var l = Oe();
            st(r, e, 1, l);
          }
        }), Co(e, 1);
    }
  }, Zl = function(e) {
    if (e.tag === 13) {
      var t = kt(e, 134217728);
      if (t !== null) {
        var n = Oe();
        st(t, e, 134217728, n);
      }
      Co(e, 134217728);
    }
  }, ai = function(e) {
    if (e.tag === 13) {
      var t = $t(e), n = kt(e, t);
      if (n !== null) {
        var r = Oe();
        st(n, e, t, r);
      }
      Co(e, t);
    }
  }, ci = function() {
    return Q;
  }, fi = function(e, t) {
    var n = Q;
    try {
      return Q = e, t();
    } finally {
      Q = n;
    }
  }, $l = function(e, t, n) {
    switch (t) {
      case "input":
        if (Dl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Wr(r);
              if (!l) throw Error(m(90));
              Io(r), Dl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Vo(e, n);
        break;
      case "select":
        t = n.value, t != null && sn(e, !!n.multiple, t, !1);
    }
  }, Go = yo, Zo = nn;
  var jf = { usingClientEntryPoint: !1, Events: [rr, gn, Wr, Yo, Xo, yo] }, yr = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Uf = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ce.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ei(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance || If, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber) try {
      xr = zl.inject(Uf), ft = zl;
    } catch (e) {
    }
  }
  return Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jf, Ve.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Po(t)) throw Error(m(200));
    return Df(e, t, null, n);
  }, Ve.createRoot = function(e, t) {
    if (!Po(e)) throw Error(m(299));
    var n = !1, r = "", l = Na;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = _o(e, 1, !1, null, null, n, !1, r, l), e[yt] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new xo(t);
  }, Ve.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = ei(t), e = e === null ? null : e.stateNode, e;
  }, Ve.flushSync = function(e) {
    return nn(e);
  }, Ve.hydrate = function(e, t, n) {
    if (!Pl(t)) throw Error(m(200));
    return Nl(null, e, t, !0, n);
  }, Ve.hydrateRoot = function(e, t, n) {
    if (!Po(e)) throw Error(m(405));
    var r = n != null && n.hydratedSources || null, l = !1, u = "", o = Na;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = xa(t, null, e, 1, n != null ? n : null, l, !1, u, o), e[yt] = t.current, er(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new xl(t);
  }, Ve.render = function(e, t, n) {
    if (!Pl(t)) throw Error(m(200));
    return Nl(null, e, t, !1, n);
  }, Ve.unmountComponentAtNode = function(e) {
    if (!Pl(e)) throw Error(m(40));
    return e._reactRootContainer ? (nn(function() {
      Nl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[yt] = null;
      });
    }), !0) : !1;
  }, Ve.unstable_batchedUpdates = yo, Ve.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Pl(n)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Nl(e, t, n, !1, r);
  }, Ve.version = "18.3.1-next-f1338f8080-20240426", Ve;
}
var ja;
function Xf() {
  if (ja) return zo.exports;
  ja = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (E) {
        console.error(E);
      }
  }
  return g(), zo.exports = Yf(), zo.exports;
}
var Ua;
function Gf() {
  if (Ua) return Tl;
  Ua = 1;
  var g = Xf();
  return Tl.createRoot = g.createRoot, Tl.hydrateRoot = g.hydrateRoot, Tl;
}
var Zf = Gf(), Jf = Object.defineProperty, qf = (g, E, m) => E in g ? Jf(g, E, { enumerable: !0, configurable: !0, writable: !0, value: m }) : g[E] = m, Ll = (g, E, m) => qf(g, typeof E != "symbol" ? E + "" : E, m);
const bf = {
  stringify: (g) => g ? "true" : "false",
  parse: (g) => /^[ty1-9]/i.test(g)
}, ed = {
  stringify: (g) => g.name,
  parse: (g, E, m) => {
    const G = (() => {
      if (typeof window < "u" && g in window)
        return window[g];
      if (typeof global < "u" && g in global)
        return global[g];
    })();
    return typeof G == "function" ? G.bind(m) : void 0;
  }
}, td = {
  stringify: (g) => JSON.stringify(g),
  parse: (g) => JSON.parse(g)
}, nd = {
  stringify: (g) => `${g}`,
  parse: (g) => parseFloat(g)
}, rd = {
  stringify: (g) => g,
  parse: (g) => g
}, Ro = {
  string: rd,
  number: nd,
  boolean: bf,
  function: ed,
  json: td
};
function ld(g) {
  return g.replace(
    /([a-z0-9])([A-Z])/g,
    (E, m, G) => `${m}-${G.toLowerCase()}`
  );
}
const Rl = Symbol.for("r2wc.render"), Ol = Symbol.for("r2wc.connected"), on = Symbol.for("r2wc.context"), xt = Symbol.for("r2wc.props");
function ud(g, E, m) {
  var G, pe, _e;
  E.props || (E.props = g.propTypes ? Object.keys(g.propTypes) : []), E.events || (E.events = []);
  const ve = Array.isArray(E.props) ? E.props.slice() : Object.keys(E.props), oe = Array.isArray(E.events) ? E.events.slice() : Object.keys(E.events), j = {}, ye = {}, ae = {}, Y = {};
  for (const K of ve) {
    j[K] = Array.isArray(E.props) ? "string" : E.props[K];
    const H = ld(K);
    ae[K] = H, Y[H] = K;
  }
  for (const K of oe)
    ye[K] = Array.isArray(E.events) ? {} : E.events[K];
  class X extends HTMLElement {
    constructor() {
      super(), Ll(this, _e, !0), Ll(this, pe), Ll(this, G, {}), Ll(this, "container"), E.shadow ? this.container = this.attachShadow({
        mode: E.shadow
      }) : this.container = this, this[xt].container = this.container;
      for (const H of ve) {
        const U = ae[H], D = this.getAttribute(U), ce = j[H], fe = ce ? Ro[ce] : null;
        fe != null && fe.parse && D && (this[xt][H] = fe.parse(D, U, this));
      }
      for (const H of oe)
        this[xt][H] = (U) => {
          const D = H.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(D, Ra({ detail: U }, ye[H]))
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(Y);
    }
    connectedCallback() {
      this[Ol] = !0, this[Rl]();
    }
    disconnectedCallback() {
      this[Ol] = !1, this[on] && m.unmount(this[on]), delete this[on];
    }
    attributeChangedCallback(H, U, D) {
      const ce = Y[H], fe = j[ce], Te = fe ? Ro[fe] : null;
      ce in j && Te != null && Te.parse && D && (this[xt][ce] = Te.parse(D, H, this), this[Rl]());
    }
    [(_e = Ol, pe = on, G = xt, Rl)]() {
      this[Ol] && (this[on] ? m.update(this[on], this[xt]) : this[on] = m.mount(
        this.container,
        g,
        this[xt]
      ));
    }
  }
  for (const K of ve) {
    const H = ae[K], U = j[K];
    Object.defineProperty(X.prototype, K, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[xt][K];
      },
      set(D) {
        this[xt][K] = D;
        const ce = U ? Ro[U] : null;
        if (ce != null && ce.stringify) {
          const fe = ce.stringify(D, H, this);
          this.getAttribute(H) !== fe && this.setAttribute(H, fe);
        } else
          this[Rl]();
      }
    });
  }
  return X;
}
function od(g, E, m) {
  const G = Zf.createRoot(g), pe = $a.createElement(E, m);
  return G.render(pe), {
    root: G,
    ReactComponent: E
  };
}
function id({ root: g, ReactComponent: E }, m) {
  const G = $a.createElement(E, m);
  g.render(G);
}
function sd({ root: g }) {
  g.unmount();
}
function ad(g, E = {}) {
  return ud(g, E, { mount: od, update: id, unmount: sd });
}
var Oo = { exports: {} }, gr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function cd() {
  if (Aa) return gr;
  Aa = 1;
  var g = Do(), E = Symbol.for("react.element"), m = Symbol.for("react.fragment"), G = Object.prototype.hasOwnProperty, pe = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(oe, j, ye) {
    var ae, Y = {}, X = null, K = null;
    ye !== void 0 && (X = "" + ye), j.key !== void 0 && (X = "" + j.key), j.ref !== void 0 && (K = j.ref);
    for (ae in j) G.call(j, ae) && !_e.hasOwnProperty(ae) && (Y[ae] = j[ae]);
    if (oe && oe.defaultProps) for (ae in j = oe.defaultProps, j) Y[ae] === void 0 && (Y[ae] = j[ae]);
    return { $$typeof: E, type: oe, key: X, ref: K, props: Y, _owner: pe.current };
  }
  return gr.Fragment = m, gr.jsx = ve, gr.jsxs = ve, gr;
}
var Va;
function fd() {
  return Va || (Va = 1, Oo.exports = cd()), Oo.exports;
}
var Mo = fd();
const dd = ({ initialMessage: g = "" }) => {
  const [E, m] = Ba.useState(g);
  return /* @__PURE__ */ Mo.jsxs("div", { children: [
    /* @__PURE__ */ Mo.jsx("h1", { children: E }),
    /* @__PURE__ */ Mo.jsx(
      "input",
      {
        type: "text",
        value: E,
        onChange: (G) => m(G.target.value),
        placeholder: "Enter a new message"
      }
    )
  ] });
};
customElements.define(
  "frm-dir-medical",
  ad(dd, {
    props: {
      initialMessage: "string"
    }
  })
);
