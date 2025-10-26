import { O as is_promise, P as get_current_component, G as set_current_component, F as flush, s as safe_not_equal, n as noop, d as detach, i as insert_hydration, p as empty, r as onMount, f as claim_element, h as children, l as element, z as binding_callbacks, Q as destroy_each, e as append_hydration, x as attr, R as claim_html_tag, k as claim_space, S as HtmlTagHydration, m as space, A as run_all, y as set_style, T as action_destroyer, U as listen, V as get_svelte_dataset, W as createEventDispatcher, j as claim_text, t as text, X as add_flush_callback, Y as bubble, c as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, a as get_slot_changes } from "../chunks/Cgb4ZbU3.js";
import { g as group_outros, t as transition_out, c as check_outros, a as transition_in, S as SvelteComponent, i as init, d as destroy_component, m as mount_component, e as claim_component, b as create_component, f as bind } from "../chunks/_XIm49Gv.js";
import { g as getAugmentedNamespace } from "../chunks/ZwL-VWJa.js";
import { b as base } from "../chunks/BVxC8YUZ.js";
import { _ as __vitePreload } from "../chunks/CQrtv1eE.js";
function handle_promise(promise, info) {
  const token = info.token = {};
  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    let child_ctx = info.ctx;
    if (key !== void 0) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }
    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;
    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block2, i) => {
          if (i !== index && block2) {
            group_outros();
            transition_out(block2, 1, 1, () => {
              if (info.blocks[i] === block2) {
                info.blocks[i] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }
      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }
    info.block = block;
    if (info.blocks) info.blocks[index] = block;
    if (needs_flush) {
      flush();
    }
  }
  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(
      (value) => {
        set_current_component(current_component);
        update(info.then, 1, info.value, value);
        set_current_component(null);
      },
      (error) => {
        set_current_component(current_component);
        update(info.catch, 2, info.error, error);
        set_current_component(null);
        if (!info.hasCatch) {
          throw error;
        }
      }
    );
    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }
    info.resolved = /** @type {T} */
    promise;
  }
}
function update_await_block_branch(info, ctx, dirty) {
  const child_ctx = ctx.slice();
  const { resolved } = info;
  if (info.current === info.then) {
    child_ctx[info.value] = resolved;
  }
  if (info.current === info.catch) {
    child_ctx[info.error] = resolved;
  }
  info.block.p(child_ctx, dirty);
}
function ensure_array_like(array_like_or_iterator) {
  return (array_like_or_iterator == null ? void 0 : array_like_or_iterator.length) !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
var segmenter = {};
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t2[p] = s[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f, y, t2, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done) return t2;
      if (y = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t2[1]) {
            _.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _.label < t2[2]) {
            _.label = t2[2];
            _.ops.push(op);
            break;
          }
          if (t2[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
};
var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function(o2) {
    var ar = [];
    for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};
function __importStar(mod2) {
  if (mod2 && mod2.__esModule) return mod2;
  var result = {};
  if (mod2 != null) {
    for (var k = ownKeys(mod2), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod2, k[i]);
  }
  __setModuleDefault(result, mod2);
  return result;
}
function __importDefault(mod2) {
  return mod2 && mod2.__esModule ? mod2 : { default: mod2 };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
const tslib_es6 = {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension
};
const tslib_es6$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource,
  get __assign() {
    return __assign;
  },
  __asyncDelegator,
  __asyncGenerator,
  __asyncValues,
  __await,
  __awaiter,
  __classPrivateFieldGet,
  __classPrivateFieldIn,
  __classPrivateFieldSet,
  __createBinding,
  __decorate,
  __disposeResources,
  __esDecorate,
  __exportStar,
  __extends,
  __generator,
  __importDefault,
  __importStar,
  __makeTemplateObject,
  __metadata,
  __param,
  __propKey,
  __read,
  __rest,
  __rewriteRelativeImportExtension,
  __runInitializers,
  __setFunctionName,
  __spread,
  __spreadArray,
  __spreadArrays,
  __values,
  default: tslib_es6
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(tslib_es6$1);
function CanonicalizeLocaleList$1(locales) {
  return Intl.getCanonicalLocales(locales);
}
function CanonicalizeTimeZoneName(tz, _a) {
  var zoneNames = _a.zoneNames, uppercaseLinks = _a.uppercaseLinks;
  var uppercasedTz = tz.toUpperCase();
  var uppercasedZones = zoneNames.reduce(function(all, z) {
    all[z.toUpperCase()] = z;
    return all;
  }, {});
  var ianaTimeZone = uppercaseLinks[uppercasedTz] || uppercasedZones[uppercasedTz];
  if (ianaTimeZone === "Etc/UTC" || ianaTimeZone === "Etc/GMT") {
    return "UTC";
  }
  return ianaTimeZone;
}
/*!
 *  decimal.js v10.5.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var EXP_LIMIT = 9e15, MAX_DIGITS = 1e9, NUMERALS = "0123456789abcdef", LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", DEFAULTS = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -9e15,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: EXP_LIMIT,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: false
  // true/false
}, inexact, quadrant, external = true, decimalError = "[DecimalError] ", invalidArgument = decimalError + "Invalid argument: ", precisionLimitExceeded = decimalError + "Precision limit exceeded", cryptoUnavailable = decimalError + "crypto unavailable", tag = "[object Decimal]", mathfloor = Math.floor, mathpow = Math.pow, isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, LN10_PRECISION = LN10.length - 1, PI_PRECISION = PI.length - 1, P = { toStringTag: tag };
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s < 0) x.s = 1;
  return finalise(x);
};
P.ceil = function() {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min2, max2) {
  var k, x = this, Ctor = x.constructor;
  min2 = new Ctor(min2);
  max2 = new Ctor(max2);
  if (!min2.s || !max2.s) return new Ctor(NaN);
  if (min2.gt(max2)) throw Error(invalidArgument + max2);
  k = x.cmp(min2);
  return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
  var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
  if (!xd || !yd) {
    return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
  }
  if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
  if (xs !== ys) return xs;
  if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;
  xdL = xd.length;
  ydL = yd.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.d) return new Ctor(NaN);
  if (!x.d[0]) return new Ctor(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function() {
  var e, m, n, r, rep, s, sd, t2, t3, t3plusx, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  external = false;
  s = x.s * mathpow(x.s * x, 1 / 3);
  if (!s || Math.abs(s) == 1 / 0) {
    n = digitsToString(x.d);
    e = x.e;
    if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? "0" : "00";
    s = mathpow(n, 1 / 3);
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t2 = r;
    t3 = t2.times(t2).times(t2);
    t3plusx = t3.plus(x);
    r = divide(t3plusx.plus(x).times(t2), t3plusx.plus(t3), sd + 2, 1);
    if (digitsToString(t2.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t2, e + 1, 0);
          if (t2.times(t2).times(t2).eq(x)) {
            r = t2;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function() {
  var w, d = this.d, n = NaN;
  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w) for (; w % 10 == 0; w /= 10) n--;
    if (n < 0) n = 0;
  }
  return n;
};
P.dividedBy = P.div = function(y) {
  return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
  var x = this, Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
  return this.cmp(y) === 0;
};
P.floor = function() {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  var k = this.cmp(y);
  return k == 1 || k === 0;
};
P.hyperbolicCosine = P.cosh = function() {
  var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
  if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero()) return one;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    n = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
  var cosh2_x, i = k, d8 = new Ctor(8);
  for (; i--; ) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function() {
  var k, pr, rm, len, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (; k--; ) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(x.s);
  if (x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;
  return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function() {
  var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
  if (k !== -1) {
    return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseHyperbolicCosine = P.acosh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
  var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
  Ctor.precision = pr + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(0.5);
};
P.inverseSine = P.asin = function() {
  var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
  if (x.isZero()) return new Ctor(x);
  k = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (k !== -1) {
    if (k === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseTangent = P.atan = function() {
  var i, j, k, n, px, t2, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s) return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr + 4, rm).times(0.25);
    r.s = x.s;
    return r;
  }
  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;
  k = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;
  for (; i !== -1; ) {
    px = px.times(x2);
    t2 = r.minus(px.div(n += 2));
    px = px.times(x2);
    r = t2.plus(px.div(n += 2));
    if (r.d[j] !== void 0) for (i = j; r.d[i] === t2.d[i] && i--; ) ;
  }
  if (k) r = r.times(2 << k - 1);
  external = true;
  return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function() {
  return !!this.d;
};
P.isInteger = P.isInt = function() {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
  return !this.s;
};
P.isNegative = P.isNeg = function() {
  return this.s < 0;
};
P.isPositive = P.isPos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base2) {
  var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
  if (base2 == null) {
    base2 = new Ctor(10);
    isBase10 = true;
  } else {
    base2 = new Ctor(base2);
    d = base2.d;
    if (base2.s < 0 || !d || !d[0] || base2.eq(1)) return new Ctor(NaN);
    isBase10 = base2.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k = d[0]; k % 10 === 0; ) k /= 10;
      inf = k !== 1;
    }
  }
  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base2, sd);
  r = divide(num, denominator, sd, 1);
  if (checkRoundingDigits(r.d, k = pr, rm)) {
    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base2, sd);
      r = divide(num, denominator, sd, 1);
      if (!inf) {
        if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r.d, k += 10, rm));
  }
  external = true;
  return finalise(r, pr, rm);
};
P.minus = P.sub = function(y) {
  var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s) y = new Ctor(NaN);
    else if (x.d) y.s = -y.s;
    else y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (yd[0]) y.s = -y.s;
    else if (xd[0]) y = new Ctor(x);
    else return new Ctor(rm === 3 ? -0 : 0);
    return external ? finalise(y, pr, rm) : y;
  }
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--; ) d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy) len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i) xd[len++] = 0;
  for (i = yd.length; i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; ) xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; ) xd.pop();
  for (; xd[0] === 0; xd.shift()) --e;
  if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function(y) {
  var q, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }
  q = q.times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function() {
  return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
  return naturalLogarithm(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P.plus = P.add = function(y) {
  var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s) y = new Ctor(NaN);
    else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (!yd[0]) y = new Ctor(x);
    return external ? finalise(y, pr, rm) : y;
  }
  k = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; ) d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; ) xd.pop();
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function(z) {
  var k, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
  if (x.d) {
    k = getPrecision(x.d);
    if (z && x.e + 1 > k) k = x.e + 1;
  } else {
    k = NaN;
  }
  return k;
};
P.round = function() {
  var x = this, Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function() {
  var m, n, sd, r, rep, t2, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(d);
    if ((n.length + e) % 2 == 0) n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t2 = r;
    r = t2.plus(divide(x, t2, sd + 2, 1)).times(0.5);
    if (digitsToString(t2.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t2, e + 1, 0);
          if (t2.times(t2).eq(x)) {
            r = t2;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.tangent = P.tan = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function(y) {
  var carry, e, i, k, r, rL, t2, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd || !xd[0] || !yd || !yd[0]) {
    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
  }
  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; ) r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k = xdL + i; k > i; ) {
      t2 = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t2 % BASE | 0;
      carry = t2 / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (; !r[--rL]; ) r.pop();
  if (carry) ++e;
  else r.shift();
  y.d = r;
  y.e = getBase10Exponent(r, e);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0) return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0) rm = Ctor.rounding;
  else checkInt32(rm, 0, 8);
  return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp, rm) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function(maxD) {
  var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
  if (!xd) return new Ctor(x);
  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k = e % LOG_BASE;
  d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
  if (maxD == null) {
    maxD = e > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
    maxD = n.gt(d) ? e > 0 ? d : n1 : n;
  }
  external = false;
  n = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;
  for (; ; ) {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1) break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }
  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;
  r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
  Ctor.precision = pr;
  external = true;
  return r;
};
P.toHexadecimal = P.toHex = function(sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function(y, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d) return x;
    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === void 0) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }
    if (!x.d) return y.s ? x : y;
    if (!y.d) {
      if (y.s) y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P.toNumber = function() {
  return +this;
};
P.toOctal = function(sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function(y) {
  var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));
  x = new Ctor(x);
  if (x.eq(1)) return x;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (y.eq(1)) return finalise(x, pr, rm);
  e = mathfloor(y.e / LOG_BASE);
  if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k, pr);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
  }
  s = x.s;
  if (s < 0) {
    if (e < y.d.length - 1) return new Ctor(NaN);
    if ((y.d[e] & 1) == 0) s = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }
  k = mathpow(+x, yn);
  e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k = Math.min(12, (e + "").length);
  r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
  if (r.d) {
    r = finalise(r, pr + 5, 1);
    if (checkRoundingDigits(r.d, pr, rm)) {
      e = pr + 10;
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
      if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
        r = finalise(r, pr + 1, 0);
      }
    }
  }
  r.s = s;
  external = true;
  Ctor.rounding = rm;
  return finalise(r, pr, rm);
};
P.toPrecision = function(sd, rm) {
  var str, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
  }
  return finalise(new Ctor(x), sd, rm);
};
P.toString = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k) str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; ) w /= 10;
  return str + w;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r, rd;
  for (k = d[0]; k >= 10; k /= 10) --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0) rd = rd / 100 | 0;
      else if (i == 1) rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0) rd = rd / 1e3 | 0;
      else if (i == 1) rd = rd / 100 | 0;
      else if (i == 2) rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
function convertBase(str, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str.length;
  for (; i < strL; ) {
    for (arrL = arr.length; arrL--; ) arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === void 0) arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k, len, y;
  if (x.isZero()) return x;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k; i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k;
  return x;
}
var divide = /* @__PURE__ */ function() {
  function multiplyInteger(x, k, base2) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k + carry;
      x[i] = temp % base2 | 0;
      carry = temp / base2 | 0;
    }
    if (carry) x.unshift(carry);
    return x;
  }
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract(a, b, aL, base2) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base2 + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; ) a.shift();
  }
  return function(x, y, pr, rm, dp, base2) {
    var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t2, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(
        // Return NaN if either NaN, or both Infinity or 0.
        !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0
        )
      );
    }
    if (base2) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base2 = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign2);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); i++) ;
    if (yd[i] > (xd[i] || 0)) e--;
    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {
      sd = sd / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;
        for (; (i < xL || k) && sd--; i++) {
          t2 = k * base2 + (xd[i] || 0);
          qd[i] = t2 / yd | 0;
          k = t2 % yd | 0;
        }
        more = k || i < xL;
      } else {
        k = base2 / (yd[0] + 1) | 0;
        if (k > 1) {
          yd = multiplyInteger(yd, k, base2);
          xd = multiplyInteger(xd, k, base2);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; ) rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= base2 / 2) ++yd0;
        do {
          k = 0;
          cmp = compare(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * base2 + (rem[1] || 0);
            k = rem0 / yd0 | 0;
            if (k > 1) {
              if (k >= base2) k = base2 - 1;
              prod = multiplyInteger(yd, k, base2);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k--;
                subtract(prod, yL < prodL ? yz : yd, prodL, base2);
              }
            } else {
              if (k == 0) cmp = k = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL) prod.unshift(0);
            subtract(rem, prod, remL, base2);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 1) {
                k++;
                subtract(rem, yL < remL ? yz : yd, remL, base2);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }
          qd[i++] = k;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
        more = rem[0] !== void 0;
      }
      if (!qd[0]) qd.shift();
    }
    if (logBase == 1) {
      q.e = e;
      inexact = more;
    } else {
      for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
      q.e = i + e * logBase - 1;
      finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
    }
    return q;
  };
}();
function finalise(x, sd, rm, isTruncated) {
  var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
  out: if (sd != null) {
    xd = x.d;
    if (!xd) return x;
    for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
    i = sd - digits;
    if (i < 0) {
      i += LOG_BASE;
      j = sd;
      w = xd[xdi = 0];
      rd = w / mathpow(10, digits - j - 1) % 10 | 0;
    } else {
      xdi = Math.ceil((i + 1) / LOG_BASE);
      k = xd.length;
      if (xdi >= k) {
        if (isTruncated) {
          for (; k++ <= xdi; ) xd.push(0);
          w = rd = 0;
          digits = 1;
          i %= LOG_BASE;
          j = i - LOG_BASE + 1;
        } else {
          break out;
        }
      } else {
        w = k = xd[xdi];
        for (digits = 1; k >= 10; k /= 10) digits++;
        i %= LOG_BASE;
        j = i - LOG_BASE + digits;
        rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
      }
    }
    isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
    roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
    if (sd < 1 || !xd[0]) {
      xd.length = 0;
      if (roundUp) {
        sd -= x.e + 1;
        xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
        x.e = -sd || 0;
      } else {
        xd[0] = x.e = 0;
      }
      return x;
    }
    if (i == 0) {
      xd.length = xdi;
      k = 1;
      xdi--;
    } else {
      xd.length = xdi + 1;
      k = mathpow(10, LOG_BASE - i);
      xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
    }
    if (roundUp) {
      for (; ; ) {
        if (xdi == 0) {
          for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
          j = xd[0] += k;
          for (k = 1; j >= 10; j /= 10) k++;
          if (i != k) {
            x.e++;
            if (xd[0] == BASE) xd[0] = 1;
          }
          break;
        } else {
          xd[xdi] += k;
          if (xd[xdi] != BASE) break;
          xd[xdi--] = 0;
          k = 1;
        }
      }
    }
    for (i = xd.length; xd[--i] === 0; ) xd.pop();
  }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd) {
  if (!x.isFinite()) return nonFiniteToString(x);
  var k, e = x.e, str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0) str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0) str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len) str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len) str += ".";
      str += getZeroString(k);
    }
  }
  return str;
}
function getBase10Exponent(digits, e) {
  var w = digits[0];
  for (e *= LOG_BASE; w >= 10; w /= 10) e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr) Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
  var w = digits.length - 1, len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (; w % 10 == 0; w /= 10) len--;
    for (w = digits[0]; w >= 10; w /= 10) len++;
  }
  return len;
}
function getZeroString(k) {
  var zs = "";
  for (; k--; ) zs += "0";
  return zs;
}
function intPow(Ctor, x, n, pr) {
  var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (; ; ) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k)) isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0) ++r.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k);
  }
  external = true;
  return r;
}
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, n) {
  var k, y, x = new Ctor(args[0]), i = 0;
  for (; ++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    }
    k = x.cmp(y);
    if (k === n || k === 0 && x.s === n) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd) {
  var denominator, guard, j, pow2, sum2, t2, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t2 = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t2);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (; ; ) {
    pow2 = finalise(pow2.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t2 = sum2.plus(divide(pow2, denominator, wpr, 1));
    if (digitsToString(t2.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j = k;
      while (j--) sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow2 = t2 = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t2;
  }
}
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum2, t2, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t2 = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t2);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (; ; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t2 = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t2.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e !== 0) sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum2 = divide(sum2, new Ctor(n), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t2 = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t2;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0) e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; i++) ;
  for (len = str.length; str.charCodeAt(len - 1) === 48; --len) ;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0) i += LOG_BASE;
    if (i < len) {
      if (i) x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; ) x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; ) str += "0";
    x.d.push(+str);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str) {
  var base2, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str)) return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str) x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base2 = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base2 = 2;
  } else if (isOctal.test(str)) {
    base2 = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base2), i, i * 2);
  }
  xd = convertBase(str, base2, BASE);
  xe = xd.length - 1;
  for (i = xe; xd[i] === 0; --i) xd.pop();
  if (i < 0) return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat) x = divide(x, divisor, len * 4);
  if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;
  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (; k--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j, t2, u, x2, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (; ; ) {
    t2 = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t2) : y.minus(t2);
    y = divide(t2.times(x2), new Ctor(n++ * n++), pr, 1);
    t2 = u.plus(y);
    if (t2.d[k] !== void 0) {
      for (j = k; t2.d[j] === u.d[j] && j--; ) ;
      if (j == -1) break;
    }
    j = u;
    u = y;
    y = t2;
    t2 = j;
  }
  external = true;
  t2.d.length = k + 1;
  return t2;
}
function tinyPow(b, e) {
  var n = b;
  while (--e) n *= b;
  return n;
}
function toLessThanHalfPi(Ctor, x) {
  var t2, isNeg = x.s < 0, pi2 = getPi(Ctor, Ctor.precision, 1), halfPi = pi2.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t2 = x.divToInt(pi2);
  if (t2.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t2.times(pi2));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t2) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t2) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi2).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
  var base2, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
    if (isExp) {
      base2 = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base2 = baseOut;
    }
    if (i >= 0) {
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base2);
      y.e = y.d.length;
    }
    xd = convertBase(str, 10, base2);
    e = len = xd.length;
    for (; xd[--len] == 0; ) xd.pop();
    if (!xd[0]) {
      str = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base2);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k = base2 / 2;
      roundUp = roundUp || xd[sd + 1] !== void 0;
      roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (; ++xd[--sd] > base2 - 1; ) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length; !xd[len - 1]; --len) ;
      for (i = 0, str = ""; i < len; i++) str += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++) str += "0";
            xd = convertBase(str, base2, baseOut);
            for (len = xd.length; !xd[len - 1]; --len) ;
            for (i = 1, str = "1."; i < len; i++) str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (; ++e; ) str = "0" + str;
        str = "0." + str;
      } else {
        if (++e > len) for (e -= len; e--; ) str += "0";
        else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs$2(x) {
  return new this(x).abs();
}
function acos$2(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2$1(y, x) {
  y = new this(y);
  x = new this(x);
  var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }
  return r;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
function config(obj) {
  if (!obj || typeof obj !== "object") throw Error(decimalError + "Object expected");
  var i, p, v, useDefaults = obj.defaults === true, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -9e15,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -9e15,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < ps.length; i += 3) {
    if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
      else throw Error(invalidArgument + p + ": " + v);
    }
  }
  if (p = "crypto", useDefaults) this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== void 0) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v);
    }
  }
  return this;
}
function cos$2(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone(obj) {
  var i, p, ps;
  function Decimal2(v) {
    var e, i2, t2, x = this;
    if (!(x instanceof Decimal2)) return new Decimal2(v);
    x.constructor = Decimal2;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal2.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal2.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t2 = typeof v;
    if (t2 === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e = 0, i2 = v; i2 >= 10; i2 /= 10) e++;
        if (external) {
          if (e > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }
        return;
      }
      if (v * 0 !== 0) {
        if (!v) x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    }
    if (t2 === "string") {
      if ((i2 = v.charCodeAt(0)) === 45) {
        v = v.slice(1);
        x.s = -1;
      } else {
        if (i2 === 43) v = v.slice(1);
        x.s = 1;
      }
      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
    }
    if (t2 === "bigint") {
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      return parseDecimal(x, v.toString());
    }
    throw Error(invalidArgument + v);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.EUCLID = 9;
  Decimal2.config = Decimal2.set = config;
  Decimal2.clone = clone;
  Decimal2.isDecimal = isDecimalInstance;
  Decimal2.abs = abs$2;
  Decimal2.acos = acos$2;
  Decimal2.acosh = acosh;
  Decimal2.add = add;
  Decimal2.asin = asin;
  Decimal2.asinh = asinh;
  Decimal2.atan = atan;
  Decimal2.atanh = atanh;
  Decimal2.atan2 = atan2$1;
  Decimal2.cbrt = cbrt;
  Decimal2.ceil = ceil;
  Decimal2.clamp = clamp;
  Decimal2.cos = cos$2;
  Decimal2.cosh = cosh;
  Decimal2.div = div;
  Decimal2.exp = exp;
  Decimal2.floor = floor;
  Decimal2.hypot = hypot;
  Decimal2.ln = ln;
  Decimal2.log = log;
  Decimal2.log10 = log10;
  Decimal2.log2 = log2;
  Decimal2.max = max$1;
  Decimal2.min = min$1;
  Decimal2.mod = mod$1;
  Decimal2.mul = mul;
  Decimal2.pow = pow$1;
  Decimal2.random = random;
  Decimal2.round = round;
  Decimal2.sign = sign;
  Decimal2.sin = sin$2;
  Decimal2.sinh = sinh;
  Decimal2.sqrt = sqrt$2;
  Decimal2.sub = sub;
  Decimal2.sum = sum;
  Decimal2.tan = tan;
  Decimal2.tanh = tanh;
  Decimal2.trunc = trunc;
  if (obj === void 0) obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0; i < ps.length; ) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
    }
  }
  Decimal2.config(obj);
  return Decimal2;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i, n, t2 = new this(0);
  external = false;
  for (i = 0; i < arguments.length; ) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t2 = n;
    } else if (t2.d) {
      t2 = t2.plus(n.times(n));
    }
  }
  external = true;
  return t2.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
  return new this(x).ln();
}
function log(x, y) {
  return new this(x).log(y);
}
function log2(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max$1() {
  return maxOrMin(this, arguments, -1);
}
function min$1() {
  return maxOrMin(this, arguments, 1);
}
function mod$1(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow$1(x, y) {
  return new this(x).pow(y);
}
function random(sd) {
  var d, e, k, n, i = 0, r = new this(1), rd = [];
  if (sd === void 0) sd = this.precision;
  else checkInt32(sd, 1, MAX_DIGITS);
  k = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (; i < k; ) rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));
    for (; i < k; ) {
      n = d[i];
      if (n >= 429e7) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k *= 4);
    for (; i < k; ) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 214e7) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n % 1e7);
        i += 4;
      }
    }
    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k = rd[--i];
  sd %= LOG_BASE;
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }
  for (; rd[i] === 0; i--) rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (; rd[0] === 0; e -= LOG_BASE) rd.shift();
    for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;
    if (k < LOG_BASE) e -= LOG_BASE - k;
  }
  r.e = e;
  r.d = rd;
  return r;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin$2(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt$2(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (; x.s && ++i < args.length; ) x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
new Decimal(10);
var ZERO$1 = new Decimal(0);
var NEGATIVE_ZERO = new Decimal(-0);
function memoize(fn, options) {
  var cache = options && options.cache ? options.cache : cacheDefault;
  var serializer = options && options.serializer ? options.serializer : serializerDefault;
  var strategy = options && options.strategy ? options.strategy : strategyDefault;
  return strategy(fn, {
    cache,
    serializer
  });
}
function isPrimitive(value) {
  return value == null || typeof value === "number" || typeof value === "boolean";
}
function monadic(fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === "undefined") {
    computedValue = fn.call(this, arg);
    cache.set(cacheKey, computedValue);
  }
  return computedValue;
}
function variadic(fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3);
  var cacheKey = serializer(args);
  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === "undefined") {
    computedValue = fn.apply(this, args);
    cache.set(cacheKey, computedValue);
  }
  return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
  return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic;
  return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
  return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
var serializerDefault = function() {
  return JSON.stringify(arguments);
};
var ObjectWithoutPrototypeCache = (
  /** @class */
  function() {
    function ObjectWithoutPrototypeCache2() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    ObjectWithoutPrototypeCache2.prototype.get = function(key) {
      return this.cache[key];
    };
    ObjectWithoutPrototypeCache2.prototype.set = function(key, value) {
      this.cache[key] = value;
    };
    return ObjectWithoutPrototypeCache2;
  }()
);
var cacheDefault = {
  create: function create() {
    return new ObjectWithoutPrototypeCache();
  }
};
var strategies = {
  variadic: strategyVariadic
};
function repeat(s, times) {
  if (typeof s.repeat === "function") {
    return s.repeat(times);
  }
  var arr = new Array(times);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = s;
  }
  return arr.join("");
}
function setInternalSlot(map, pl, field, value) {
  if (!map.get(pl)) {
    map.set(pl, /* @__PURE__ */ Object.create(null));
  }
  var slots = map.get(pl);
  slots[field] = value;
}
function setMultiInternalSlots(map, pl, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var k = _a[_i];
    setInternalSlot(map, pl, k, props[k]);
  }
}
function getInternalSlot(map, pl, field) {
  return getMultiInternalSlots(map, pl, field)[field];
}
function getMultiInternalSlots(map, pl) {
  var fields = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    fields[_i - 2] = arguments[_i];
  }
  var slots = map.get(pl);
  if (!slots) {
    throw new TypeError("".concat(pl, " InternalSlot has not been initialized"));
  }
  return fields.reduce(function(all, f) {
    all[f] = slots[f];
    return all;
  }, /* @__PURE__ */ Object.create(null));
}
function isLiteralPart(patternPart) {
  return patternPart.type === "literal";
}
function defineProperty(target, name, _a) {
  var value = _a.value;
  Object.defineProperty(target, name, {
    configurable: true,
    enumerable: false,
    writable: true,
    value
  });
}
function createDataProperty(target, name, value) {
  Object.defineProperty(target, name, {
    configurable: true,
    enumerable: true,
    writable: true,
    value
  });
}
function invariant$1(condition, message, Err) {
  if (Err === void 0) {
    Err = Error;
  }
  if (!condition) {
    throw new Err(message);
  }
}
var createMemoizedNumberFormat = memoize(function() {
  var _a;
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return new ((_a = Intl.NumberFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
}, {
  strategy: strategies.variadic
});
var createMemoizedDateTimeFormat = memoize(function() {
  var _a;
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return new ((_a = Intl.DateTimeFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
}, {
  strategy: strategies.variadic
});
var createMemoizedPluralRules = memoize(function() {
  var _a;
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return new ((_a = Intl.PluralRules).bind.apply(_a, __spreadArray([void 0], args, false)))();
}, {
  strategy: strategies.variadic
});
var createMemoizedLocale = memoize(function() {
  var _a;
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return new ((_a = Intl.Locale).bind.apply(_a, __spreadArray([void 0], args, false)))();
}, {
  strategy: strategies.variadic
});
var createMemoizedListFormat = memoize(function() {
  var _a;
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return new ((_a = Intl.ListFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
}, {
  strategy: strategies.variadic
});
function ToString(o) {
  if (typeof o === "symbol") {
    throw TypeError("Cannot convert a Symbol value to a string");
  }
  return String(o);
}
function ToNumber(arg) {
  if (typeof arg === "number") {
    return new Decimal(arg);
  }
  invariant$1(typeof arg !== "bigint" && typeof arg !== "symbol", "BigInt and Symbol are not supported", TypeError);
  if (arg === void 0) {
    return new Decimal(NaN);
  }
  if (arg === null || arg === 0) {
    return ZERO$1;
  }
  if (arg === true) {
    return new Decimal(1);
  }
  if (typeof arg === "string") {
    try {
      return new Decimal(arg);
    } catch (e) {
      return new Decimal(NaN);
    }
  }
  invariant$1(typeof arg === "object", "object expected", TypeError);
  var primValue = ToPrimitive(arg, "number");
  invariant$1(typeof primValue !== "object", "object expected", TypeError);
  return ToNumber(primValue);
}
function ToInteger(n) {
  var number = ToNumber(n);
  if (number.isNaN() || number.isZero()) {
    return ZERO$1;
  }
  if (number.isFinite()) {
    return number;
  }
  var integer = number.abs().floor();
  if (number.isNegative()) {
    integer = integer.negated();
  }
  return integer;
}
function TimeClip(time) {
  if (!time.isFinite()) {
    return new Decimal(NaN);
  }
  if (time.abs().greaterThan(8.64 * 1e15)) {
    return new Decimal(NaN);
  }
  return ToInteger(time);
}
function ToObject(arg) {
  if (arg == null) {
    throw new TypeError("undefined/null cannot be converted to object");
  }
  return Object(arg);
}
function SameValue(x, y) {
  if (Object.is) {
    return Object.is(x, y);
  }
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }
  return x !== x && y !== y;
}
function ArrayCreate(len) {
  return new Array(len);
}
function HasOwnProperty(o, prop) {
  return Object.prototype.hasOwnProperty.call(o, prop);
}
function Type(x) {
  if (x === null) {
    return "Null";
  }
  if (typeof x === "undefined") {
    return "Undefined";
  }
  if (typeof x === "function" || typeof x === "object") {
    return "Object";
  }
  if (typeof x === "number") {
    return "Number";
  }
  if (typeof x === "boolean") {
    return "Boolean";
  }
  if (typeof x === "string") {
    return "String";
  }
  if (typeof x === "symbol") {
    return "Symbol";
  }
  if (typeof x === "bigint") {
    return "BigInt";
  }
}
var MS_PER_DAY = 864e5;
function mod(x, y) {
  return x - Math.floor(x / y) * y;
}
function Day(t2) {
  return Math.floor(t2 / MS_PER_DAY);
}
function WeekDay(t2) {
  return mod(Day(t2) + 4, 7);
}
function DayFromYear(y) {
  return Date.UTC(y, 0) / MS_PER_DAY;
}
function TimeFromYear(y) {
  return Date.UTC(y, 0);
}
function YearFromTime(t2) {
  return new Date(t2).getUTCFullYear();
}
function DaysInYear(y) {
  if (y % 4 !== 0) {
    return 365;
  }
  if (y % 100 !== 0) {
    return 366;
  }
  if (y % 400 !== 0) {
    return 365;
  }
  return 366;
}
function DayWithinYear(t2) {
  return Day(t2) - DayFromYear(YearFromTime(t2));
}
function InLeapYear(t2) {
  return DaysInYear(YearFromTime(t2)) === 365 ? 0 : 1;
}
function MonthFromTime(t2) {
  var dwy = DayWithinYear(t2);
  var leap = InLeapYear(t2);
  if (dwy >= 0 && dwy < 31) {
    return 0;
  }
  if (dwy < 59 + leap) {
    return 1;
  }
  if (dwy < 90 + leap) {
    return 2;
  }
  if (dwy < 120 + leap) {
    return 3;
  }
  if (dwy < 151 + leap) {
    return 4;
  }
  if (dwy < 181 + leap) {
    return 5;
  }
  if (dwy < 212 + leap) {
    return 6;
  }
  if (dwy < 243 + leap) {
    return 7;
  }
  if (dwy < 273 + leap) {
    return 8;
  }
  if (dwy < 304 + leap) {
    return 9;
  }
  if (dwy < 334 + leap) {
    return 10;
  }
  if (dwy < 365 + leap) {
    return 11;
  }
  throw new Error("Invalid time");
}
function DateFromTime(t2) {
  var dwy = DayWithinYear(t2);
  var mft = MonthFromTime(t2);
  var leap = InLeapYear(t2);
  if (mft === 0) {
    return dwy + 1;
  }
  if (mft === 1) {
    return dwy - 30;
  }
  if (mft === 2) {
    return dwy - 58 - leap;
  }
  if (mft === 3) {
    return dwy - 89 - leap;
  }
  if (mft === 4) {
    return dwy - 119 - leap;
  }
  if (mft === 5) {
    return dwy - 150 - leap;
  }
  if (mft === 6) {
    return dwy - 180 - leap;
  }
  if (mft === 7) {
    return dwy - 211 - leap;
  }
  if (mft === 8) {
    return dwy - 242 - leap;
  }
  if (mft === 9) {
    return dwy - 272 - leap;
  }
  if (mft === 10) {
    return dwy - 303 - leap;
  }
  if (mft === 11) {
    return dwy - 333 - leap;
  }
  throw new Error("Invalid time");
}
var HOURS_PER_DAY = 24;
var MINUTES_PER_HOUR = 60;
var SECONDS_PER_MINUTE = 60;
var MS_PER_SECOND = 1e3;
var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;
function HourFromTime(t2) {
  return mod(Math.floor(t2 / MS_PER_HOUR), HOURS_PER_DAY);
}
function MinFromTime(t2) {
  return mod(Math.floor(t2 / MS_PER_MINUTE), MINUTES_PER_HOUR);
}
function SecFromTime(t2) {
  return mod(Math.floor(t2 / MS_PER_SECOND), SECONDS_PER_MINUTE);
}
function IsCallable(fn) {
  return typeof fn === "function";
}
function OrdinaryHasInstance(C, O, internalSlots) {
  if (!IsCallable(C)) {
    return false;
  }
  if (internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction) {
    var BC = internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction;
    return O instanceof BC;
  }
  if (typeof O !== "object") {
    return false;
  }
  var P2 = C.prototype;
  if (typeof P2 !== "object") {
    throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
  }
  return Object.prototype.isPrototypeOf.call(P2, O);
}
function msFromTime(t2) {
  return mod(t2, MS_PER_SECOND);
}
function OrdinaryToPrimitive(O, hint) {
  var methodNames;
  if (hint === "string") {
    methodNames = ["toString", "valueOf"];
  } else {
    methodNames = ["valueOf", "toString"];
  }
  for (var _i = 0, methodNames_1 = methodNames; _i < methodNames_1.length; _i++) {
    var name_1 = methodNames_1[_i];
    var method = O[name_1];
    if (IsCallable(method)) {
      var result = method.call(O);
      if (typeof result !== "object") {
        return result;
      }
    }
  }
  throw new TypeError("Cannot convert object to primitive value");
}
function ToPrimitive(input, preferredType) {
  if (typeof input === "object" && input != null) {
    var exoticToPrim = Symbol.toPrimitive in input ? input[Symbol.toPrimitive] : void 0;
    var hint = void 0;
    if (exoticToPrim !== void 0) {
      if (preferredType === void 0) {
        hint = "default";
      } else if (preferredType === "string") {
        hint = "string";
      } else {
        invariant$1(preferredType === "number", 'preferredType must be "string" or "number"');
        hint = "number";
      }
      var result = exoticToPrim.call(input, hint);
      if (typeof result !== "object") {
        return result;
      }
      throw new TypeError("Cannot convert exotic object to primitive.");
    }
    if (preferredType === void 0) {
      preferredType = "number";
    }
    return OrdinaryToPrimitive(input, preferredType);
  }
  return input;
}
function CoerceOptionsToObject(options) {
  if (typeof options === "undefined") {
    return /* @__PURE__ */ Object.create(null);
  }
  return ToObject(options);
}
function DefaultNumberOption(inputVal, min2, max2, fallback) {
  if (inputVal === void 0) {
    return fallback;
  }
  var val = Number(inputVal);
  if (isNaN(val) || val < min2 || val > max2) {
    throw new RangeError("".concat(val, " is outside of range [").concat(min2, ", ").concat(max2, "]"));
  }
  return Math.floor(val);
}
function GetNumberOption(options, property, minimum, maximum, fallback) {
  var val = options[property];
  return DefaultNumberOption(val, minimum, maximum, fallback);
}
function GetOption(opts, prop, type, values, fallback) {
  if (typeof opts !== "object") {
    throw new TypeError("Options must be an object");
  }
  var value = opts[prop];
  if (value !== void 0) {
    if (type !== "boolean" && type !== "string") {
      throw new TypeError("invalid type");
    }
    if (type === "boolean") {
      value = Boolean(value);
    }
    if (type === "string") {
      value = ToString(value);
    }
    if (values !== void 0 && !values.filter(function(val) {
      return val == value;
    }).length) {
      throw new RangeError("".concat(value, " is not within ").concat(values.join(", ")));
    }
    return value;
  }
  return fallback;
}
function GetOptionsObject(options) {
  if (typeof options === "undefined") {
    return /* @__PURE__ */ Object.create(null);
  }
  if (typeof options === "object") {
    return options;
  }
  throw new TypeError("Options must be an object");
}
function GetStringOrBooleanOption(opts, prop, values, trueValue, falsyValue, fallback) {
  var value = opts[prop];
  if (value === void 0) {
    return fallback;
  }
  if (value === true) {
    return trueValue;
  }
  var valueBoolean = Boolean(value);
  if (valueBoolean === false) {
    return falsyValue;
  }
  value = ToString(value);
  if (value === "true" || value === "false") {
    return fallback;
  }
  if ((values || []).indexOf(value) === -1) {
    throw new RangeError("Invalid value ".concat(value));
  }
  return value;
}
var SANCTIONED_UNITS = [
  "angle-degree",
  "area-acre",
  "area-hectare",
  "concentr-percent",
  "digital-bit",
  "digital-byte",
  "digital-gigabit",
  "digital-gigabyte",
  "digital-kilobit",
  "digital-kilobyte",
  "digital-megabit",
  "digital-megabyte",
  "digital-petabyte",
  "digital-terabit",
  "digital-terabyte",
  "duration-day",
  "duration-hour",
  "duration-millisecond",
  "duration-minute",
  "duration-month",
  "duration-second",
  "duration-week",
  "duration-year",
  "length-centimeter",
  "length-foot",
  "length-inch",
  "length-kilometer",
  "length-meter",
  "length-mile-scandinavian",
  "length-mile",
  "length-millimeter",
  "length-yard",
  "mass-gram",
  "mass-kilogram",
  "mass-ounce",
  "mass-pound",
  "mass-stone",
  "temperature-celsius",
  "temperature-fahrenheit",
  "volume-fluid-ounce",
  "volume-gallon",
  "volume-liter",
  "volume-milliliter"
];
function removeUnitNamespace(unit) {
  return unit.slice(unit.indexOf("-") + 1);
}
var SIMPLE_UNITS = SANCTIONED_UNITS.map(removeUnitNamespace);
function IsSanctionedSimpleUnitIdentifier(unitIdentifier) {
  return SIMPLE_UNITS.indexOf(unitIdentifier) > -1;
}
function IsValidTimeZoneName(tz, _a) {
  var zoneNamesFromData = _a.zoneNamesFromData, uppercaseLinks = _a.uppercaseLinks;
  var uppercasedTz = tz.toUpperCase();
  var zoneNames = /* @__PURE__ */ new Set();
  var linkNames = /* @__PURE__ */ new Set();
  zoneNamesFromData.map(function(z) {
    return z.toUpperCase();
  }).forEach(function(z) {
    return zoneNames.add(z);
  });
  Object.keys(uppercaseLinks).forEach(function(linkName) {
    linkNames.add(linkName.toUpperCase());
    zoneNames.add(uppercaseLinks[linkName].toUpperCase());
  });
  return zoneNames.has(uppercasedTz) || linkNames.has(uppercasedTz);
}
function toUpperCase(str) {
  return str.replace(/([a-z])/g, function(_, c) {
    return c.toUpperCase();
  });
}
var NOT_A_Z_REGEX = /[^A-Z]/;
function IsWellFormedCurrencyCode(currency) {
  currency = toUpperCase(currency);
  if (currency.length !== 3) {
    return false;
  }
  if (NOT_A_Z_REGEX.test(currency)) {
    return false;
  }
  return true;
}
function toLowerCase(str) {
  return str.replace(/([A-Z])/g, function(_, c) {
    return c.toLowerCase();
  });
}
function IsWellFormedUnitIdentifier(unit) {
  unit = toLowerCase(unit);
  if (IsSanctionedSimpleUnitIdentifier(unit)) {
    return true;
  }
  var units = unit.split("-per-");
  if (units.length !== 2) {
    return false;
  }
  var numerator = units[0], denominator = units[1];
  if (!IsSanctionedSimpleUnitIdentifier(numerator) || !IsSanctionedSimpleUnitIdentifier(denominator)) {
    return false;
  }
  return true;
}
function ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode) {
  if (x.eq(r1))
    return r1;
  invariant$1(r1.lessThan(x) && x.lessThan(r2), "x should be between r1 and r2 but x=".concat(x, ", r1=").concat(r1, ", r2=").concat(r2));
  if (unsignedRoundingMode === "zero") {
    return r1;
  }
  if (unsignedRoundingMode === "infinity") {
    return r2;
  }
  var d1 = x.minus(r1);
  var d2 = r2.minus(x);
  if (d1.lessThan(d2)) {
    return r1;
  }
  if (d2.lessThan(d1)) {
    return r2;
  }
  invariant$1(d1.eq(d2), "d1 should be equal to d2");
  if (unsignedRoundingMode === "half-zero") {
    return r1;
  }
  if (unsignedRoundingMode === "half-infinity") {
    return r2;
  }
  invariant$1(unsignedRoundingMode === "half-even", "unsignedRoundingMode should be half-even");
  var cardinality = r1.div(r2.minus(r1)).mod(2);
  if (cardinality.isZero()) {
    return r1;
  }
  return r2;
}
var PART_TYPES_TO_COLLAPSE = /* @__PURE__ */ new Set([
  "unit",
  "exponentMinusSign",
  "minusSign",
  "plusSign",
  "percentSign",
  "exponentSeparator",
  "percent",
  "percentSign",
  "currency",
  "literal"
]);
function CollapseNumberRange(numberFormat, result, _a) {
  var getInternalSlots = _a.getInternalSlots;
  var internalSlots = getInternalSlots(numberFormat);
  var symbols = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem];
  var rangeSignRegex = new RegExp("s?[".concat(symbols.rangeSign, "]s?"));
  var rangeSignIndex = result.findIndex(function(r) {
    return r.type === "literal" && rangeSignRegex.test(r.value);
  });
  var prefixSignParts = [];
  for (var i = rangeSignIndex - 1; i >= 0; i--) {
    if (!PART_TYPES_TO_COLLAPSE.has(result[i].type)) {
      break;
    }
    prefixSignParts.unshift(result[i]);
  }
  if (Array.from(prefixSignParts.map(function(p) {
    return p.value;
  }).join("")).length > 1) {
    var newResult = Array.from(result);
    newResult.splice(rangeSignIndex - prefixSignParts.length, prefixSignParts.length);
    return newResult;
  }
  var suffixSignParts = [];
  for (var i = rangeSignIndex + 1; i < result.length; i++) {
    if (!PART_TYPES_TO_COLLAPSE.has(result[i].type)) {
      break;
    }
    suffixSignParts.push(result[i]);
  }
  if (Array.from(suffixSignParts.map(function(p) {
    return p.value;
  }).join("")).length > 1) {
    var newResult = Array.from(result);
    newResult.splice(rangeSignIndex + 1, suffixSignParts.length);
    return newResult;
  }
  return result;
}
Decimal.set({
  toExpPos: 100
});
function ComputeExponentForMagnitude(internalSlots, magnitude) {
  var notation = internalSlots.notation, dataLocaleData = internalSlots.dataLocaleData, numberingSystem = internalSlots.numberingSystem;
  switch (notation) {
    case "standard":
      return 0;
    case "scientific":
      return magnitude.toNumber();
    case "engineering":
      var thousands = magnitude.div(3).floor();
      return thousands.times(3).toNumber();
    default: {
      invariant$1(notation === "compact", "Invalid notation");
      var compactDisplay = internalSlots.compactDisplay, style = internalSlots.style, currencyDisplay = internalSlots.currencyDisplay;
      var thresholdMap = void 0;
      if (style === "currency" && currencyDisplay !== "name") {
        var currency = dataLocaleData.numbers.currency[numberingSystem] || dataLocaleData.numbers.currency[dataLocaleData.numbers.nu[0]];
        thresholdMap = currency.short;
      } else {
        var decimal = dataLocaleData.numbers.decimal[numberingSystem] || dataLocaleData.numbers.decimal[dataLocaleData.numbers.nu[0]];
        thresholdMap = compactDisplay === "long" ? decimal.long : decimal.short;
      }
      if (!thresholdMap) {
        return 0;
      }
      var num = Decimal.pow(10, magnitude).toString();
      var thresholds = Object.keys(thresholdMap);
      if (num < thresholds[0]) {
        return 0;
      }
      if (num > thresholds[thresholds.length - 1]) {
        return thresholds[thresholds.length - 1].length - 1;
      }
      var i = thresholds.indexOf(num);
      if (i === -1) {
        return 0;
      }
      var magnitudeKey = thresholds[i];
      var compactPattern = thresholdMap[magnitudeKey].other;
      if (compactPattern === "0") {
        return 0;
      }
      return magnitudeKey.length - thresholdMap[magnitudeKey].other.match(/0+/)[0].length;
    }
  }
}
var negativeMapping = {
  ceil: "zero",
  floor: "infinity",
  expand: "infinity",
  trunc: "zero",
  halfCeil: "half-zero",
  halfFloor: "half-infinity",
  halfExpand: "half-infinity",
  halfTrunc: "half-zero",
  halfEven: "half-even"
};
var positiveMapping = {
  ceil: "infinity",
  floor: "zero",
  expand: "infinity",
  trunc: "zero",
  halfCeil: "half-infinity",
  halfFloor: "half-zero",
  halfExpand: "half-infinity",
  halfTrunc: "half-zero",
  halfEven: "half-even"
};
function GetUnsignedRoundingMode(roundingMode, isNegative) {
  if (isNegative) {
    return negativeMapping[roundingMode];
  }
  return positiveMapping[roundingMode];
}
Decimal.set({
  toExpPos: 100
});
function ToRawFixedFn(n, f) {
  return n.times(Decimal.pow(10, -f));
}
function findN1R1(x, f, roundingIncrement) {
  var nx = x.times(Decimal.pow(10, f)).floor();
  var n1 = nx.div(roundingIncrement).floor().times(roundingIncrement);
  var r1 = ToRawFixedFn(n1, f);
  return {
    n1,
    r1
  };
}
function findN2R2(x, f, roundingIncrement) {
  var nx = x.times(Decimal.pow(10, f)).ceil();
  var n2 = nx.div(roundingIncrement).ceil().times(roundingIncrement);
  var r2 = ToRawFixedFn(n2, f);
  return {
    n2,
    r2
  };
}
function ToRawFixed(x, minFraction, maxFraction, roundingIncrement, unsignedRoundingMode) {
  var f = maxFraction;
  var _a = findN1R1(x, f, roundingIncrement), n1 = _a.n1, r1 = _a.r1;
  var _b = findN2R2(x, f, roundingIncrement), n2 = _b.n2, r2 = _b.r2;
  var r = ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode);
  var n, xFinal;
  var m;
  if (r.eq(r1)) {
    n = n1;
    xFinal = r1;
  } else {
    n = n2;
    xFinal = r2;
  }
  if (n.isZero()) {
    m = "0";
  } else {
    m = n.toString();
  }
  var int;
  if (f !== 0) {
    var k = m.length;
    if (k <= f) {
      var z = repeat("0", f - k + 1);
      m = z + m;
      k = f + 1;
    }
    var a = m.slice(0, k - f);
    var b = m.slice(m.length - f);
    m = a + "." + b;
    int = a.length;
  } else {
    int = m.length;
  }
  var cut = maxFraction - minFraction;
  while (cut > 0 && m[m.length - 1] === "0") {
    m = m.slice(0, m.length - 1);
    cut--;
  }
  if (m[m.length - 1] === ".") {
    m = m.slice(0, m.length - 1);
  }
  return {
    formattedString: m,
    roundedNumber: xFinal,
    integerDigitsCount: int,
    roundingMagnitude: -f
  };
}
function findN1E1R1(x, p) {
  var maxN1 = Decimal.pow(10, p);
  var minN1 = Decimal.pow(10, p - 1);
  var maxE1 = x.div(minN1).log(10).plus(p).minus(1).ceil();
  var currentE1 = maxE1;
  while (true) {
    var currentN1 = x.div(Decimal.pow(10, currentE1.minus(p).plus(1))).floor();
    if (currentN1.lessThan(maxN1) && currentN1.greaterThanOrEqualTo(minN1)) {
      var currentR1 = currentN1.times(Decimal.pow(10, currentE1.minus(p).plus(1)));
      if (currentR1.lessThanOrEqualTo(x)) {
        return {
          n1: currentN1,
          e1: currentE1,
          r1: currentR1
        };
      }
    }
    currentE1 = currentE1.minus(1);
  }
}
function findN2E2R2(x, p) {
  var maxN2 = Decimal.pow(10, p);
  var minN2 = Decimal.pow(10, p - 1);
  var minE2 = x.div(maxN2).log(10).plus(p).minus(1).floor();
  var currentE2 = minE2;
  while (true) {
    var currentN2 = x.div(Decimal.pow(10, currentE2.minus(p).plus(1))).ceil();
    if (currentN2.lessThan(maxN2) && currentN2.greaterThanOrEqualTo(minN2)) {
      var currentR2 = currentN2.times(Decimal.pow(10, currentE2.minus(p).plus(1)));
      if (currentR2.greaterThanOrEqualTo(x)) {
        return {
          n2: currentN2,
          e2: currentE2,
          r2: currentR2
        };
      }
    }
    currentE2 = currentE2.plus(1);
  }
}
function ToRawPrecision(x, minPrecision, maxPrecision, unsignedRoundingMode) {
  var p = maxPrecision;
  var m;
  var e;
  var xFinal;
  if (x.isZero()) {
    m = repeat("0", p);
    e = 0;
    xFinal = ZERO$1;
  } else {
    var _a = findN1E1R1(x, p), n1 = _a.n1, e1 = _a.e1, r1 = _a.r1;
    var _b = findN2E2R2(x, p), n2 = _b.n2, e2 = _b.e2, r2 = _b.r2;
    var r = ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode);
    var n = void 0;
    if (r.eq(r1)) {
      n = n1;
      e = e1.toNumber();
      xFinal = r1;
    } else {
      n = n2;
      e = e2.toNumber();
      xFinal = r2;
    }
    m = n.toString();
  }
  var int;
  if (e >= p - 1) {
    m = m + repeat("0", e - p + 1);
    int = e + 1;
  } else if (e >= 0) {
    m = m.slice(0, e + 1) + "." + m.slice(m.length - (p - (e + 1)));
    int = e + 1;
  } else {
    invariant$1(e < 0, "e should be less than 0");
    m = "0." + repeat("0", -e - 1) + m;
    int = 1;
  }
  if (m.includes(".") && maxPrecision > minPrecision) {
    var cut = maxPrecision - minPrecision;
    while (cut > 0 && m[m.length - 1] === "0") {
      m = m.slice(0, m.length - 1);
      cut--;
    }
    if (m[m.length - 1] === ".") {
      m = m.slice(0, m.length - 1);
    }
  }
  return {
    formattedString: m,
    roundedNumber: xFinal,
    integerDigitsCount: int,
    roundingMagnitude: e
  };
}
function FormatNumericToString(intlObject, _x) {
  var x = _x;
  var sign2;
  if (x.isZero() && x.isNegative()) {
    sign2 = "negative";
    x = ZERO$1;
  } else {
    invariant$1(x.isFinite(), "NumberFormatDigitInternalSlots value is not finite");
    if (x.lessThan(0)) {
      sign2 = "negative";
    } else {
      sign2 = "positive";
    }
    if (sign2 === "negative") {
      x = x.negated();
    }
  }
  var result;
  var roundingType = intlObject.roundingType;
  var unsignedRoundingMode = GetUnsignedRoundingMode(intlObject.roundingMode, sign2 === "negative");
  switch (roundingType) {
    case "significantDigits":
      result = ToRawPrecision(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits, unsignedRoundingMode);
      break;
    case "fractionDigits":
      result = ToRawFixed(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits, intlObject.roundingIncrement, unsignedRoundingMode);
      break;
    default:
      var sResult = ToRawPrecision(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits, unsignedRoundingMode);
      var fResult = ToRawFixed(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits, intlObject.roundingIncrement, unsignedRoundingMode);
      if (intlObject.roundingType === "morePrecision") {
        if (sResult.roundingMagnitude <= fResult.roundingMagnitude) {
          result = sResult;
        } else {
          result = fResult;
        }
      } else {
        invariant$1(intlObject.roundingType === "lessPrecision", "Invalid roundingType");
        if (sResult.roundingMagnitude <= fResult.roundingMagnitude) {
          result = fResult;
        } else {
          result = sResult;
        }
      }
      break;
  }
  x = result.roundedNumber;
  var string = result.formattedString;
  if (intlObject.trailingZeroDisplay === "stripIfInteger" && x.isInteger()) {
    var i = string.indexOf(".");
    if (i > -1) {
      string = string.slice(0, i);
    }
  }
  var int = result.integerDigitsCount;
  var minInteger = intlObject.minimumIntegerDigits;
  if (int < minInteger) {
    var forwardZeros = repeat("0", minInteger - int);
    string = forwardZeros + string;
  }
  if (sign2 === "negative") {
    if (x.isZero()) {
      x = NEGATIVE_ZERO;
    } else {
      x = x.negated();
    }
  }
  return { roundedNumber: x, formattedString: string };
}
function ComputeExponent(internalSlots, x) {
  if (x.isZero()) {
    return [0, 0];
  }
  if (x.isNegative()) {
    x = x.negated();
  }
  var magnitude = x.log(10).floor();
  var exponent = ComputeExponentForMagnitude(internalSlots, magnitude);
  x = x.times(Decimal.pow(10, -exponent));
  var formatNumberResult = FormatNumericToString(internalSlots, x);
  if (formatNumberResult.roundedNumber.isZero()) {
    return [exponent, magnitude.toNumber()];
  }
  var newMagnitude = formatNumberResult.roundedNumber.log(10).floor();
  if (newMagnitude.eq(magnitude.minus(exponent))) {
    return [exponent, magnitude.toNumber()];
  }
  return [
    ComputeExponentForMagnitude(internalSlots, magnitude.plus(1)),
    magnitude.plus(1).toNumber()
  ];
}
function CurrencyDigits(c, _a) {
  var currencyDigitsData = _a.currencyDigitsData;
  return HasOwnProperty(currencyDigitsData, c) ? currencyDigitsData[c] : 2;
}
var S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;
var digitMapping = {
  "adlm": [
    "𞥐",
    "𞥑",
    "𞥒",
    "𞥓",
    "𞥔",
    "𞥕",
    "𞥖",
    "𞥗",
    "𞥘",
    "𞥙"
  ],
  "ahom": [
    "𑜰",
    "𑜱",
    "𑜲",
    "𑜳",
    "𑜴",
    "𑜵",
    "𑜶",
    "𑜷",
    "𑜸",
    "𑜹"
  ],
  "arab": [
    "٠",
    "١",
    "٢",
    "٣",
    "٤",
    "٥",
    "٦",
    "٧",
    "٨",
    "٩"
  ],
  "arabext": [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹"
  ],
  "bali": [
    "᭐",
    "᭑",
    "᭒",
    "᭓",
    "᭔",
    "᭕",
    "᭖",
    "᭗",
    "᭘",
    "᭙"
  ],
  "beng": [
    "০",
    "১",
    "২",
    "৩",
    "৪",
    "৫",
    "৬",
    "৭",
    "৮",
    "৯"
  ],
  "bhks": [
    "𑱐",
    "𑱑",
    "𑱒",
    "𑱓",
    "𑱔",
    "𑱕",
    "𑱖",
    "𑱗",
    "𑱘",
    "𑱙"
  ],
  "brah": [
    "𑁦",
    "𑁧",
    "𑁨",
    "𑁩",
    "𑁪",
    "𑁫",
    "𑁬",
    "𑁭",
    "𑁮",
    "𑁯"
  ],
  "cakm": [
    "𑄶",
    "𑄷",
    "𑄸",
    "𑄹",
    "𑄺",
    "𑄻",
    "𑄼",
    "𑄽",
    "𑄾",
    "𑄿"
  ],
  "cham": [
    "꩐",
    "꩑",
    "꩒",
    "꩓",
    "꩔",
    "꩕",
    "꩖",
    "꩗",
    "꩘",
    "꩙"
  ],
  "deva": [
    "०",
    "१",
    "२",
    "३",
    "४",
    "५",
    "६",
    "७",
    "८",
    "९"
  ],
  "diak": [
    "𑥐",
    "𑥑",
    "𑥒",
    "𑥓",
    "𑥔",
    "𑥕",
    "𑥖",
    "𑥗",
    "𑥘",
    "𑥙"
  ],
  "fullwide": [
    "０",
    "１",
    "２",
    "３",
    "４",
    "５",
    "６",
    "７",
    "８",
    "９"
  ],
  "gong": [
    "𑶠",
    "𑶡",
    "𑶢",
    "𑶣",
    "𑶤",
    "𑶥",
    "𑶦",
    "𑶧",
    "𑶨",
    "𑶩"
  ],
  "gonm": [
    "𑵐",
    "𑵑",
    "𑵒",
    "𑵓",
    "𑵔",
    "𑵕",
    "𑵖",
    "𑵗",
    "𑵘",
    "𑵙"
  ],
  "gujr": [
    "૦",
    "૧",
    "૨",
    "૩",
    "૪",
    "૫",
    "૬",
    "૭",
    "૮",
    "૯"
  ],
  "guru": [
    "੦",
    "੧",
    "੨",
    "੩",
    "੪",
    "੫",
    "੬",
    "੭",
    "੮",
    "੯"
  ],
  "hanidec": [
    "〇",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九"
  ],
  "hmng": [
    "𖭐",
    "𖭑",
    "𖭒",
    "𖭓",
    "𖭔",
    "𖭕",
    "𖭖",
    "𖭗",
    "𖭘",
    "𖭙"
  ],
  "hmnp": [
    "𞅀",
    "𞅁",
    "𞅂",
    "𞅃",
    "𞅄",
    "𞅅",
    "𞅆",
    "𞅇",
    "𞅈",
    "𞅉"
  ],
  "java": [
    "꧐",
    "꧑",
    "꧒",
    "꧓",
    "꧔",
    "꧕",
    "꧖",
    "꧗",
    "꧘",
    "꧙"
  ],
  "kali": [
    "꤀",
    "꤁",
    "꤂",
    "꤃",
    "꤄",
    "꤅",
    "꤆",
    "꤇",
    "꤈",
    "꤉"
  ],
  "khmr": [
    "០",
    "១",
    "២",
    "៣",
    "៤",
    "៥",
    "៦",
    "៧",
    "៨",
    "៩"
  ],
  "knda": [
    "೦",
    "೧",
    "೨",
    "೩",
    "೪",
    "೫",
    "೬",
    "೭",
    "೮",
    "೯"
  ],
  "lana": [
    "᪀",
    "᪁",
    "᪂",
    "᪃",
    "᪄",
    "᪅",
    "᪆",
    "᪇",
    "᪈",
    "᪉"
  ],
  "lanatham": [
    "᪐",
    "᪑",
    "᪒",
    "᪓",
    "᪔",
    "᪕",
    "᪖",
    "᪗",
    "᪘",
    "᪙"
  ],
  "laoo": [
    "໐",
    "໑",
    "໒",
    "໓",
    "໔",
    "໕",
    "໖",
    "໗",
    "໘",
    "໙"
  ],
  "lepc": [
    "᪐",
    "᪑",
    "᪒",
    "᪓",
    "᪔",
    "᪕",
    "᪖",
    "᪗",
    "᪘",
    "᪙"
  ],
  "limb": [
    "᥆",
    "᥇",
    "᥈",
    "᥉",
    "᥊",
    "᥋",
    "᥌",
    "᥍",
    "᥎",
    "᥏"
  ],
  "mathbold": [
    "𝟎",
    "𝟏",
    "𝟐",
    "𝟑",
    "𝟒",
    "𝟓",
    "𝟔",
    "𝟕",
    "𝟖",
    "𝟗"
  ],
  "mathdbl": [
    "𝟘",
    "𝟙",
    "𝟚",
    "𝟛",
    "𝟜",
    "𝟝",
    "𝟞",
    "𝟟",
    "𝟠",
    "𝟡"
  ],
  "mathmono": [
    "𝟶",
    "𝟷",
    "𝟸",
    "𝟹",
    "𝟺",
    "𝟻",
    "𝟼",
    "𝟽",
    "𝟾",
    "𝟿"
  ],
  "mathsanb": [
    "𝟬",
    "𝟭",
    "𝟮",
    "𝟯",
    "𝟰",
    "𝟱",
    "𝟲",
    "𝟳",
    "𝟴",
    "𝟵"
  ],
  "mathsans": [
    "𝟢",
    "𝟣",
    "𝟤",
    "𝟥",
    "𝟦",
    "𝟧",
    "𝟨",
    "𝟩",
    "𝟪",
    "𝟫"
  ],
  "mlym": [
    "൦",
    "൧",
    "൨",
    "൩",
    "൪",
    "൫",
    "൬",
    "൭",
    "൮",
    "൯"
  ],
  "modi": [
    "𑙐",
    "𑙑",
    "𑙒",
    "𑙓",
    "𑙔",
    "𑙕",
    "𑙖",
    "𑙗",
    "𑙘",
    "𑙙"
  ],
  "mong": [
    "᠐",
    "᠑",
    "᠒",
    "᠓",
    "᠔",
    "᠕",
    "᠖",
    "᠗",
    "᠘",
    "᠙"
  ],
  "mroo": [
    "𖩠",
    "𖩡",
    "𖩢",
    "𖩣",
    "𖩤",
    "𖩥",
    "𖩦",
    "𖩧",
    "𖩨",
    "𖩩"
  ],
  "mtei": [
    "꯰",
    "꯱",
    "꯲",
    "꯳",
    "꯴",
    "꯵",
    "꯶",
    "꯷",
    "꯸",
    "꯹"
  ],
  "mymr": [
    "၀",
    "၁",
    "၂",
    "၃",
    "၄",
    "၅",
    "၆",
    "၇",
    "၈",
    "၉"
  ],
  "mymrshan": [
    "႐",
    "႑",
    "႒",
    "႓",
    "႔",
    "႕",
    "႖",
    "႗",
    "႘",
    "႙"
  ],
  "mymrtlng": [
    "꧰",
    "꧱",
    "꧲",
    "꧳",
    "꧴",
    "꧵",
    "꧶",
    "꧷",
    "꧸",
    "꧹"
  ],
  "newa": [
    "𑑐",
    "𑑑",
    "𑑒",
    "𑑓",
    "𑑔",
    "𑑕",
    "𑑖",
    "𑑗",
    "𑑘",
    "𑑙"
  ],
  "nkoo": [
    "߀",
    "߁",
    "߂",
    "߃",
    "߄",
    "߅",
    "߆",
    "߇",
    "߈",
    "߉"
  ],
  "olck": [
    "᱐",
    "᱑",
    "᱒",
    "᱓",
    "᱔",
    "᱕",
    "᱖",
    "᱗",
    "᱘",
    "᱙"
  ],
  "orya": [
    "୦",
    "୧",
    "୨",
    "୩",
    "୪",
    "୫",
    "୬",
    "୭",
    "୮",
    "୯"
  ],
  "osma": [
    "𐒠",
    "𐒡",
    "𐒢",
    "𐒣",
    "𐒤",
    "𐒥",
    "𐒦",
    "𐒧",
    "𐒨",
    "𐒩"
  ],
  "rohg": [
    "𐴰",
    "𐴱",
    "𐴲",
    "𐴳",
    "𐴴",
    "𐴵",
    "𐴶",
    "𐴷",
    "𐴸",
    "𐴹"
  ],
  "saur": [
    "꣐",
    "꣑",
    "꣒",
    "꣓",
    "꣔",
    "꣕",
    "꣖",
    "꣗",
    "꣘",
    "꣙"
  ],
  "segment": [
    "🯰",
    "🯱",
    "🯲",
    "🯳",
    "🯴",
    "🯵",
    "🯶",
    "🯷",
    "🯸",
    "🯹"
  ],
  "shrd": [
    "𑇐",
    "𑇑",
    "𑇒",
    "𑇓",
    "𑇔",
    "𑇕",
    "𑇖",
    "𑇗",
    "𑇘",
    "𑇙"
  ],
  "sind": [
    "𑋰",
    "𑋱",
    "𑋲",
    "𑋳",
    "𑋴",
    "𑋵",
    "𑋶",
    "𑋷",
    "𑋸",
    "𑋹"
  ],
  "sinh": [
    "෦",
    "෧",
    "෨",
    "෩",
    "෪",
    "෫",
    "෬",
    "෭",
    "෮",
    "෯"
  ],
  "sora": [
    "𑃰",
    "𑃱",
    "𑃲",
    "𑃳",
    "𑃴",
    "𑃵",
    "𑃶",
    "𑃷",
    "𑃸",
    "𑃹"
  ],
  "sund": [
    "᮰",
    "᮱",
    "᮲",
    "᮳",
    "᮴",
    "᮵",
    "᮶",
    "᮷",
    "᮸",
    "᮹"
  ],
  "takr": [
    "𑛀",
    "𑛁",
    "𑛂",
    "𑛃",
    "𑛄",
    "𑛅",
    "𑛆",
    "𑛇",
    "𑛈",
    "𑛉"
  ],
  "talu": [
    "᧐",
    "᧑",
    "᧒",
    "᧓",
    "᧔",
    "᧕",
    "᧖",
    "᧗",
    "᧘",
    "᧙"
  ],
  "tamldec": [
    "௦",
    "௧",
    "௨",
    "௩",
    "௪",
    "௫",
    "௬",
    "௭",
    "௮",
    "௯"
  ],
  "telu": [
    "౦",
    "౧",
    "౨",
    "౩",
    "౪",
    "౫",
    "౬",
    "౭",
    "౮",
    "౯"
  ],
  "thai": [
    "๐",
    "๑",
    "๒",
    "๓",
    "๔",
    "๕",
    "๖",
    "๗",
    "๘",
    "๙"
  ],
  "tibt": [
    "༠",
    "༡",
    "༢",
    "༣",
    "༤",
    "༥",
    "༦",
    "༧",
    "༨",
    "༩"
  ],
  "tirh": [
    "𑓐",
    "𑓑",
    "𑓒",
    "𑓓",
    "𑓔",
    "𑓕",
    "𑓖",
    "𑓗",
    "𑓘",
    "𑓙"
  ],
  "vaii": [
    "ᘠ",
    "ᘡ",
    "ᘢ",
    "ᘣ",
    "ᘤ",
    "ᘥ",
    "ᘦ",
    "ᘧ",
    "ᘨ",
    "ᘩ"
  ],
  "wara": [
    "𑣠",
    "𑣡",
    "𑣢",
    "𑣣",
    "𑣤",
    "𑣥",
    "𑣦",
    "𑣧",
    "𑣨",
    "𑣩"
  ],
  "wcho": [
    "𞋰",
    "𞋱",
    "𞋲",
    "𞋳",
    "𞋴",
    "𞋵",
    "𞋶",
    "𞋷",
    "𞋸",
    "𞋹"
  ]
};
var CARET_S_UNICODE_REGEX = new RegExp("^".concat(S_UNICODE_REGEX.source));
var S_DOLLAR_UNICODE_REGEX = new RegExp("".concat(S_UNICODE_REGEX.source, "$"));
var CLDR_NUMBER_PATTERN = /[#0](?:[\.,][#0]+)*/g;
function formatToParts(numberResult, data2, pl, options) {
  var _a;
  var sign2 = numberResult.sign, exponent = numberResult.exponent, magnitude = numberResult.magnitude;
  var notation = options.notation, style = options.style, numberingSystem = options.numberingSystem;
  var defaultNumberingSystem = data2.numbers.nu[0];
  var compactNumberPattern = null;
  if (notation === "compact" && magnitude) {
    compactNumberPattern = getCompactDisplayPattern(numberResult, pl, data2, style, options.compactDisplay, options.currencyDisplay, numberingSystem);
  }
  var nonNameCurrencyPart;
  if (style === "currency" && options.currencyDisplay !== "name") {
    var byCurrencyDisplay = data2.currencies[options.currency];
    if (byCurrencyDisplay) {
      switch (options.currencyDisplay) {
        case "code":
          nonNameCurrencyPart = options.currency;
          break;
        case "symbol":
          nonNameCurrencyPart = byCurrencyDisplay.symbol;
          break;
        default:
          nonNameCurrencyPart = byCurrencyDisplay.narrow;
          break;
      }
    } else {
      nonNameCurrencyPart = options.currency;
    }
  }
  var numberPattern;
  if (!compactNumberPattern) {
    if (style === "decimal" || style === "unit" || style === "currency" && options.currencyDisplay === "name") {
      var decimalData = data2.numbers.decimal[numberingSystem] || data2.numbers.decimal[defaultNumberingSystem];
      numberPattern = getPatternForSign(decimalData.standard, sign2);
    } else if (style === "currency") {
      var currencyData = data2.numbers.currency[numberingSystem] || data2.numbers.currency[defaultNumberingSystem];
      numberPattern = getPatternForSign(currencyData[options.currencySign], sign2);
    } else {
      var percentPattern = data2.numbers.percent[numberingSystem] || data2.numbers.percent[defaultNumberingSystem];
      numberPattern = getPatternForSign(percentPattern, sign2);
    }
  } else {
    numberPattern = compactNumberPattern;
  }
  var decimalNumberPattern = CLDR_NUMBER_PATTERN.exec(numberPattern)[0];
  numberPattern = numberPattern.replace(CLDR_NUMBER_PATTERN, "{0}").replace(/'(.)'/g, "$1");
  if (style === "currency" && options.currencyDisplay !== "name") {
    var currencyData = data2.numbers.currency[numberingSystem] || data2.numbers.currency[defaultNumberingSystem];
    var afterCurrency = currencyData.currencySpacing.afterInsertBetween;
    if (afterCurrency && !S_DOLLAR_UNICODE_REGEX.test(nonNameCurrencyPart)) {
      numberPattern = numberPattern.replace("¤{0}", "¤".concat(afterCurrency, "{0}"));
    }
    var beforeCurrency = currencyData.currencySpacing.beforeInsertBetween;
    if (beforeCurrency && !CARET_S_UNICODE_REGEX.test(nonNameCurrencyPart)) {
      numberPattern = numberPattern.replace("{0}¤", "{0}".concat(beforeCurrency, "¤"));
    }
  }
  var numberPatternParts = numberPattern.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g);
  var numberParts = [];
  var symbols = data2.numbers.symbols[numberingSystem] || data2.numbers.symbols[defaultNumberingSystem];
  for (var _i = 0, numberPatternParts_1 = numberPatternParts; _i < numberPatternParts_1.length; _i++) {
    var part = numberPatternParts_1[_i];
    if (!part) {
      continue;
    }
    switch (part) {
      case "{0}": {
        numberParts.push.apply(numberParts, partitionNumberIntoParts(
          symbols,
          numberResult,
          notation,
          exponent,
          numberingSystem,
          // If compact number pattern exists, do not insert group separators.
          !compactNumberPattern && ((_a = options.useGrouping) !== null && _a !== void 0 ? _a : true),
          decimalNumberPattern,
          style,
          options.roundingIncrement,
          GetUnsignedRoundingMode(options.roundingMode, sign2 === -1)
        ));
        break;
      }
      case "-":
        numberParts.push({ type: "minusSign", value: symbols.minusSign });
        break;
      case "+":
        numberParts.push({ type: "plusSign", value: symbols.plusSign });
        break;
      case "%":
        numberParts.push({ type: "percentSign", value: symbols.percentSign });
        break;
      case "¤":
        numberParts.push({ type: "currency", value: nonNameCurrencyPart });
        break;
      default:
        if (/^\{c:/.test(part)) {
          numberParts.push({
            type: "compact",
            value: part.substring(3, part.length - 1)
          });
        } else {
          numberParts.push({ type: "literal", value: part });
        }
        break;
    }
  }
  switch (style) {
    case "currency": {
      if (options.currencyDisplay === "name") {
        var unitPattern = (data2.numbers.currency[numberingSystem] || data2.numbers.currency[defaultNumberingSystem]).unitPattern;
        var unitName = void 0;
        var currencyNameData = data2.currencies[options.currency];
        if (currencyNameData) {
          unitName = selectPlural(pl, numberResult.roundedNumber.times(Decimal.pow(10, exponent)).toNumber(), currencyNameData.displayName);
        } else {
          unitName = options.currency;
        }
        var unitPatternParts = unitPattern.split(/(\{[01]\})/g);
        var result = [];
        for (var _b = 0, unitPatternParts_1 = unitPatternParts; _b < unitPatternParts_1.length; _b++) {
          var part = unitPatternParts_1[_b];
          switch (part) {
            case "{0}":
              result.push.apply(result, numberParts);
              break;
            case "{1}":
              result.push({ type: "currency", value: unitName });
              break;
            default:
              if (part) {
                result.push({ type: "literal", value: part });
              }
              break;
          }
        }
        return result;
      } else {
        return numberParts;
      }
    }
    case "unit": {
      var unit = options.unit, unitDisplay = options.unitDisplay;
      var unitData = data2.units.simple[unit];
      var unitPattern = void 0;
      if (unitData) {
        unitPattern = selectPlural(pl, numberResult.roundedNumber.times(Decimal.pow(10, exponent)).toNumber(), data2.units.simple[unit][unitDisplay]);
      } else {
        var _c = unit.split("-per-"), numeratorUnit = _c[0], denominatorUnit = _c[1];
        unitData = data2.units.simple[numeratorUnit];
        var numeratorUnitPattern = selectPlural(pl, numberResult.roundedNumber.times(Decimal.pow(10, exponent)).toNumber(), data2.units.simple[numeratorUnit][unitDisplay]);
        var perUnitPattern = data2.units.simple[denominatorUnit].perUnit[unitDisplay];
        if (perUnitPattern) {
          unitPattern = perUnitPattern.replace("{0}", numeratorUnitPattern);
        } else {
          var perPattern = data2.units.compound.per[unitDisplay];
          var denominatorPattern = selectPlural(pl, 1, data2.units.simple[denominatorUnit][unitDisplay]);
          unitPattern = unitPattern = perPattern.replace("{0}", numeratorUnitPattern).replace("{1}", denominatorPattern.replace("{0}", ""));
        }
      }
      var result = [];
      for (var _d = 0, _e = unitPattern.split(/(\s*\{0\}\s*)/); _d < _e.length; _d++) {
        var part = _e[_d];
        var interpolateMatch = /^(\s*)\{0\}(\s*)$/.exec(part);
        if (interpolateMatch) {
          if (interpolateMatch[1]) {
            result.push({ type: "literal", value: interpolateMatch[1] });
          }
          result.push.apply(result, numberParts);
          if (interpolateMatch[2]) {
            result.push({ type: "literal", value: interpolateMatch[2] });
          }
        } else if (part) {
          result.push({ type: "unit", value: part });
        }
      }
      return result;
    }
    default:
      return numberParts;
  }
}
function partitionNumberIntoParts(symbols, numberResult, notation, exponent, numberingSystem, useGrouping, decimalNumberPattern, style, roundingIncrement, unsignedRoundingMode) {
  var result = [];
  var n = numberResult.formattedString, x = numberResult.roundedNumber;
  if (x.isNaN()) {
    return [{ type: "nan", value: n }];
  } else if (!x.isFinite()) {
    return [{ type: "infinity", value: n }];
  }
  var digitReplacementTable = digitMapping[numberingSystem];
  if (digitReplacementTable) {
    n = n.replace(/\d/g, function(digit) {
      return digitReplacementTable[+digit] || digit;
    });
  }
  var decimalSepIndex = n.indexOf(".");
  var integer;
  var fraction;
  if (decimalSepIndex > 0) {
    integer = n.slice(0, decimalSepIndex);
    fraction = n.slice(decimalSepIndex + 1);
  } else {
    integer = n;
  }
  var shouldUseGrouping = false;
  if (useGrouping === "always") {
    shouldUseGrouping = true;
  } else if (useGrouping === "min2") {
    shouldUseGrouping = x.greaterThanOrEqualTo(1e4);
  } else if (useGrouping === "auto" || useGrouping) {
    shouldUseGrouping = notation !== "compact" || x.greaterThanOrEqualTo(1e4);
  }
  if (shouldUseGrouping) {
    var groupSepSymbol = style === "currency" && symbols.currencyGroup != null ? symbols.currencyGroup : symbols.group;
    var groups = [];
    var integerNumberPattern = decimalNumberPattern.split(".")[0];
    var patternGroups = integerNumberPattern.split(",");
    var primaryGroupingSize = 3;
    var secondaryGroupingSize = 3;
    if (patternGroups.length > 1) {
      primaryGroupingSize = patternGroups[patternGroups.length - 1].length;
    }
    if (patternGroups.length > 2) {
      secondaryGroupingSize = patternGroups[patternGroups.length - 2].length;
    }
    var i = integer.length - primaryGroupingSize;
    if (i > 0) {
      groups.push(integer.slice(i, i + primaryGroupingSize));
      for (i -= secondaryGroupingSize; i > 0; i -= secondaryGroupingSize) {
        groups.push(integer.slice(i, i + secondaryGroupingSize));
      }
      groups.push(integer.slice(0, i + secondaryGroupingSize));
    } else {
      groups.push(integer);
    }
    while (groups.length > 0) {
      var integerGroup = groups.pop();
      result.push({ type: "integer", value: integerGroup });
      if (groups.length > 0) {
        result.push({ type: "group", value: groupSepSymbol });
      }
    }
  } else {
    result.push({ type: "integer", value: integer });
  }
  if (fraction !== void 0) {
    var decimalSepSymbol = style === "currency" && symbols.currencyDecimal != null ? symbols.currencyDecimal : symbols.decimal;
    result.push({ type: "decimal", value: decimalSepSymbol }, { type: "fraction", value: fraction });
  }
  if ((notation === "scientific" || notation === "engineering") && x.isFinite()) {
    result.push({ type: "exponentSeparator", value: symbols.exponential });
    if (exponent < 0) {
      result.push({ type: "exponentMinusSign", value: symbols.minusSign });
      exponent = -exponent;
    }
    var exponentResult = ToRawFixed(new Decimal(exponent), 0, 0, roundingIncrement, unsignedRoundingMode);
    result.push({
      type: "exponentInteger",
      value: exponentResult.formattedString
    });
  }
  return result;
}
function getPatternForSign(pattern, sign2) {
  if (pattern.indexOf(";") < 0) {
    pattern = "".concat(pattern, ";-").concat(pattern);
  }
  var _a = pattern.split(";"), zeroPattern = _a[0], negativePattern = _a[1];
  switch (sign2) {
    case 0:
      return zeroPattern;
    case -1:
      return negativePattern;
    default:
      return negativePattern.indexOf("-") >= 0 ? negativePattern.replace(/-/g, "+") : "+".concat(zeroPattern);
  }
}
function getCompactDisplayPattern(numberResult, pl, data2, style, compactDisplay, currencyDisplay, numberingSystem) {
  var _a;
  var roundedNumber = numberResult.roundedNumber, sign2 = numberResult.sign, magnitude = numberResult.magnitude;
  var magnitudeKey = String(Math.pow(10, magnitude));
  var defaultNumberingSystem = data2.numbers.nu[0];
  var pattern;
  if (style === "currency" && currencyDisplay !== "name") {
    var byNumberingSystem = data2.numbers.currency;
    var currencyData = byNumberingSystem[numberingSystem] || byNumberingSystem[defaultNumberingSystem];
    var compactPluralRules = (_a = currencyData.short) === null || _a === void 0 ? void 0 : _a[magnitudeKey];
    if (!compactPluralRules) {
      return null;
    }
    pattern = selectPlural(pl, roundedNumber.toNumber(), compactPluralRules);
  } else {
    var byNumberingSystem = data2.numbers.decimal;
    var byCompactDisplay = byNumberingSystem[numberingSystem] || byNumberingSystem[defaultNumberingSystem];
    var compactPlaralRule = byCompactDisplay[compactDisplay][magnitudeKey];
    if (!compactPlaralRule) {
      return null;
    }
    pattern = selectPlural(pl, roundedNumber.toNumber(), compactPlaralRule);
  }
  if (pattern === "0") {
    return null;
  }
  pattern = getPatternForSign(pattern, sign2).replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}").replace(/0+/, "0");
  return pattern;
}
function selectPlural(pl, x, rules) {
  return rules[pl.select(x)] || rules.other;
}
function FormatApproximately(internalSlots, result) {
  var symbols = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem];
  var approximatelySign = symbols.approximatelySign;
  result.push({ type: "approximatelySign", value: approximatelySign });
  return result;
}
function PartitionNumberPattern(internalSlots, _x) {
  var _a;
  var x = _x;
  var magnitude = 0;
  var pl = internalSlots.pl, dataLocaleData = internalSlots.dataLocaleData, numberingSystem = internalSlots.numberingSystem;
  var symbols = dataLocaleData.numbers.symbols[numberingSystem] || dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
  var exponent = 0;
  var n;
  if (x.isNaN()) {
    n = symbols.nan;
  } else if (!x.isFinite()) {
    n = symbols.infinity;
  } else {
    if (!x.isZero()) {
      invariant$1(x.isFinite(), "Input must be a mathematical value");
      if (internalSlots.style == "percent") {
        x = x.times(100);
      }
      _a = ComputeExponent(internalSlots, x), exponent = _a[0], // IMPL: We need to record the magnitude of the number
      magnitude = _a[1];
      x = x.times(Decimal.pow(10, -exponent));
    }
    var formatNumberResult = FormatNumericToString(internalSlots, x);
    n = formatNumberResult.formattedString;
    x = formatNumberResult.roundedNumber;
  }
  var sign2;
  var signDisplay = internalSlots.signDisplay;
  switch (signDisplay) {
    case "never":
      sign2 = 0;
      break;
    case "auto":
      if (x.isPositive() || x.isNaN()) {
        sign2 = 0;
      } else {
        sign2 = -1;
      }
      break;
    case "always":
      if (x.isPositive() || x.isNaN()) {
        sign2 = 1;
      } else {
        sign2 = -1;
      }
      break;
    case "exceptZero":
      if (x.isZero()) {
        sign2 = 0;
      } else if (x.isNegative()) {
        sign2 = -1;
      } else {
        sign2 = 1;
      }
      break;
    default:
      invariant$1(signDisplay === "negative", 'signDisplay must be "negative"');
      if (x.isNegative() && !x.isZero()) {
        sign2 = -1;
      } else {
        sign2 = 0;
      }
      break;
  }
  return formatToParts({
    roundedNumber: x,
    formattedString: n,
    exponent,
    // IMPL: We're returning this for our implementation of formatToParts
    magnitude,
    sign: sign2
  }, internalSlots.dataLocaleData, pl, internalSlots);
}
function FormatNumeric(internalSlots, x) {
  var parts = PartitionNumberPattern(internalSlots, x);
  return parts.map(function(p) {
    return p.value;
  }).join("");
}
function PartitionNumberRangePattern(numberFormat, x, y, _a) {
  var getInternalSlots = _a.getInternalSlots;
  invariant$1(!x.isNaN() && !y.isNaN(), "Input must be a number", RangeError);
  var internalSlots = getInternalSlots(numberFormat);
  var xResult = PartitionNumberPattern(internalSlots, x);
  var yResult = PartitionNumberPattern(internalSlots, y);
  if (FormatNumeric(internalSlots, x) === FormatNumeric(internalSlots, y)) {
    var appxResult = FormatApproximately(internalSlots, xResult);
    appxResult.forEach(function(el) {
      el.source = "shared";
    });
    return appxResult;
  }
  var result = [];
  xResult.forEach(function(el) {
    el.source = "startRange";
    result.push(el);
  });
  var rangeSeparator = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign;
  result.push({ type: "literal", value: rangeSeparator, source: "shared" });
  yResult.forEach(function(el) {
    el.source = "endRange";
    result.push(el);
  });
  return CollapseNumberRange(numberFormat, result, { getInternalSlots });
}
function FormatNumericRange(numberFormat, x, y, _a) {
  var getInternalSlots = _a.getInternalSlots;
  var parts = PartitionNumberRangePattern(numberFormat, x, y, {
    getInternalSlots
  });
  return parts.map(function(part) {
    return part.value;
  }).join("");
}
function FormatNumericRangeToParts(numberFormat, x, y, _a) {
  var getInternalSlots = _a.getInternalSlots;
  var parts = PartitionNumberRangePattern(numberFormat, x, y, {
    getInternalSlots
  });
  return parts.map(function(part, index) {
    return {
      type: part.type,
      value: part.value,
      source: part.source,
      result: index.toString()
    };
  });
}
function FormatNumericToParts(nf, x, implDetails) {
  var parts = PartitionNumberPattern(implDetails.getInternalSlots(nf), x);
  var result = ArrayCreate(0);
  for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
    var part = parts_1[_i];
    result.push({
      type: part.type,
      value: part.value
    });
  }
  return result;
}
function CanonicalizeLocaleList(locales) {
  return Intl.getCanonicalLocales(locales);
}
var data = {
  supplemental: {
    languageMatching: {
      "written-new": [
        {
          paradigmLocales: {
            _locales: "en en_GB es es_419 pt_BR pt_PT"
          }
        },
        {
          $enUS: {
            _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI"
          }
        },
        {
          $cnsar: {
            _value: "HK+MO"
          }
        },
        {
          $americas: {
            _value: "019"
          }
        },
        {
          $maghreb: {
            _value: "MA+DZ+TN+LY+MR+EH"
          }
        },
        {
          no: {
            _desired: "nb",
            _distance: "1"
          }
        },
        {
          bs: {
            _desired: "hr",
            _distance: "4"
          }
        },
        {
          bs: {
            _desired: "sh",
            _distance: "4"
          }
        },
        {
          hr: {
            _desired: "sh",
            _distance: "4"
          }
        },
        {
          sr: {
            _desired: "sh",
            _distance: "4"
          }
        },
        {
          aa: {
            _desired: "ssy",
            _distance: "4"
          }
        },
        {
          de: {
            _desired: "gsw",
            _distance: "4",
            _oneway: "true"
          }
        },
        {
          de: {
            _desired: "lb",
            _distance: "4",
            _oneway: "true"
          }
        },
        {
          no: {
            _desired: "da",
            _distance: "8"
          }
        },
        {
          nb: {
            _desired: "da",
            _distance: "8"
          }
        },
        {
          ru: {
            _desired: "ab",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ach",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          nl: {
            _desired: "af",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ak",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "am",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          es: {
            _desired: "ay",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          ru: {
            _desired: "az",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          ur: {
            _desired: "bal",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          ru: {
            _desired: "be",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "bem",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          hi: {
            _desired: "bh",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "bn",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "bo",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          fr: {
            _desired: "br",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          es: {
            _desired: "ca",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          fil: {
            _desired: "ceb",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "chr",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "ckb",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          fr: {
            _desired: "co",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          fr: {
            _desired: "crs",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          sk: {
            _desired: "cs",
            _distance: "20"
          }
        },
        {
          en: {
            _desired: "cy",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ee",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "eo",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          es: {
            _desired: "eu",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          da: {
            _desired: "fo",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          nl: {
            _desired: "fy",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ga",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "gaa",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "gd",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          es: {
            _desired: "gl",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          es: {
            _desired: "gn",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          hi: {
            _desired: "gu",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ha",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "haw",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          fr: {
            _desired: "ht",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          ru: {
            _desired: "hy",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ia",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ig",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "is",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          id: {
            _desired: "jv",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ka",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          fr: {
            _desired: "kg",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          ru: {
            _desired: "kk",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "km",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "kn",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "kri",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          tr: {
            _desired: "ku",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          ru: {
            _desired: "ky",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          it: {
            _desired: "la",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "lg",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          fr: {
            _desired: "ln",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "lo",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "loz",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          fr: {
            _desired: "lua",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          hi: {
            _desired: "mai",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "mfe",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          fr: {
            _desired: "mg",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "mi",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ml",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          ru: {
            _desired: "mn",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          hi: {
            _desired: "mr",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          id: {
            _desired: "ms",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "mt",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "my",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ne",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          nb: {
            _desired: "nn",
            _distance: "20"
          }
        },
        {
          no: {
            _desired: "nn",
            _distance: "20"
          }
        },
        {
          en: {
            _desired: "nso",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ny",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "nyn",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          fr: {
            _desired: "oc",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "om",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "or",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "pa",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "pcm",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ps",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          es: {
            _desired: "qu",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          de: {
            _desired: "rm",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "rn",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          fr: {
            _desired: "rw",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          hi: {
            _desired: "sa",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "sd",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "si",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "sn",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "so",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "sq",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "st",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          id: {
            _desired: "su",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "sw",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ta",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "te",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          ru: {
            _desired: "tg",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ti",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          ru: {
            _desired: "tk",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "tlh",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "tn",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "to",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          ru: {
            _desired: "tt",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "tum",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "ug",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          ru: {
            _desired: "uk",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "ur",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          ru: {
            _desired: "uz",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          fr: {
            _desired: "wo",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "xh",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "yi",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "yo",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "za",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          en: {
            _desired: "zu",
            _distance: "30",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "aao",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "abh",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "abv",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "acm",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "acq",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "acw",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "acx",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "acy",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "adf",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "aeb",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "aec",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "afb",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "ajp",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "apc",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "apd",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "arq",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "ars",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "ary",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "arz",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "auz",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "avl",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "ayh",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "ayl",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "ayn",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "ayp",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "bbz",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "pga",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "shu",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ar: {
            _desired: "ssh",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          az: {
            _desired: "azb",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          et: {
            _desired: "vro",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ff: {
            _desired: "ffm",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ff: {
            _desired: "fub",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ff: {
            _desired: "fue",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ff: {
            _desired: "fuf",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ff: {
            _desired: "fuh",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ff: {
            _desired: "fui",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ff: {
            _desired: "fuq",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ff: {
            _desired: "fuv",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          gn: {
            _desired: "gnw",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          gn: {
            _desired: "gui",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          gn: {
            _desired: "gun",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          gn: {
            _desired: "nhd",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          iu: {
            _desired: "ikt",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          kln: {
            _desired: "enb",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          kln: {
            _desired: "eyo",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          kln: {
            _desired: "niq",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          kln: {
            _desired: "oki",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          kln: {
            _desired: "pko",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          kln: {
            _desired: "sgc",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          kln: {
            _desired: "tec",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          kln: {
            _desired: "tuy",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          kok: {
            _desired: "gom",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          kpe: {
            _desired: "gkp",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "ida",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "lkb",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "lko",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "lks",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "lri",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "lrm",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "lsm",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "lto",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "lts",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "lwg",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "nle",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "nyd",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          luy: {
            _desired: "rag",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          lv: {
            _desired: "ltg",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          mg: {
            _desired: "bhr",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          mg: {
            _desired: "bjq",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          mg: {
            _desired: "bmm",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          mg: {
            _desired: "bzc",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          mg: {
            _desired: "msh",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          mg: {
            _desired: "skg",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          mg: {
            _desired: "tdx",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          mg: {
            _desired: "tkg",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          mg: {
            _desired: "txy",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          mg: {
            _desired: "xmv",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          mg: {
            _desired: "xmw",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          mn: {
            _desired: "mvf",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "bjn",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "btj",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "bve",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "bvu",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "coa",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "dup",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "hji",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "id",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "jak",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "jax",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "kvb",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "kvr",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "kxd",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "lce",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "lcf",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "liw",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "max",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "meo",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "mfa",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "mfb",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "min",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "mqg",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "msi",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "mui",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "orn",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "ors",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "pel",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "pse",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "tmw",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "urk",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "vkk",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "vkt",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "xmm",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "zlm",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ms: {
            _desired: "zmi",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ne: {
            _desired: "dty",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          om: {
            _desired: "gax",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          om: {
            _desired: "hae",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          om: {
            _desired: "orc",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          or: {
            _desired: "spv",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ps: {
            _desired: "pbt",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          ps: {
            _desired: "pst",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qub",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qud",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "quf",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qug",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "quh",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "quk",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qul",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qup",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qur",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qus",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "quw",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qux",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "quy",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qva",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qvc",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qve",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qvh",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qvi",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qvj",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qvl",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qvm",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qvn",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qvo",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qvp",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qvs",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qvw",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qvz",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qwa",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qwc",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qwh",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qws",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qxa",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qxc",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qxh",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qxl",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qxn",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qxo",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qxp",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qxr",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qxt",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qxu",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          qu: {
            _desired: "qxw",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          sc: {
            _desired: "sdc",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          sc: {
            _desired: "sdn",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          sc: {
            _desired: "sro",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          sq: {
            _desired: "aae",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          sq: {
            _desired: "aat",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          sq: {
            _desired: "aln",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          syr: {
            _desired: "aii",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          uz: {
            _desired: "uzs",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          yi: {
            _desired: "yih",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "cdo",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "cjy",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "cpx",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "czh",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "czo",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "gan",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "hak",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "hsn",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "lzh",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "mnp",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "nan",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "wuu",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          zh: {
            _desired: "yue",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "*": {
            _desired: "*",
            _distance: "80"
          }
        },
        {
          "en-Latn": {
            _desired: "am-Ethi",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "ru-Cyrl": {
            _desired: "az-Latn",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "bn-Beng",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "zh-Hans": {
            _desired: "bo-Tibt",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "ru-Cyrl": {
            _desired: "hy-Armn",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "ka-Geor",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "km-Khmr",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "kn-Knda",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "lo-Laoo",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "ml-Mlym",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "my-Mymr",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "ne-Deva",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "or-Orya",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "pa-Guru",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "ps-Arab",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "sd-Arab",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "si-Sinh",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "ta-Taml",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "te-Telu",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "ti-Ethi",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "ru-Cyrl": {
            _desired: "tk-Latn",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "ur-Arab",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "ru-Cyrl": {
            _desired: "uz-Latn",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "en-Latn": {
            _desired: "yi-Hebr",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "sr-Cyrl": {
            _desired: "sr-Latn",
            _distance: "5"
          }
        },
        {
          "zh-Hans": {
            _desired: "za-Latn",
            _distance: "10",
            _oneway: "true"
          }
        },
        {
          "zh-Hans": {
            _desired: "zh-Hani",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          "zh-Hant": {
            _desired: "zh-Hani",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          "ar-Arab": {
            _desired: "ar-Latn",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          "bn-Beng": {
            _desired: "bn-Latn",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          "gu-Gujr": {
            _desired: "gu-Latn",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          "hi-Deva": {
            _desired: "hi-Latn",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          "kn-Knda": {
            _desired: "kn-Latn",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          "ml-Mlym": {
            _desired: "ml-Latn",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          "mr-Deva": {
            _desired: "mr-Latn",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          "ta-Taml": {
            _desired: "ta-Latn",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          "te-Telu": {
            _desired: "te-Latn",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          "zh-Hans": {
            _desired: "zh-Latn",
            _distance: "20",
            _oneway: "true"
          }
        },
        {
          "ja-Jpan": {
            _desired: "ja-Latn",
            _distance: "5",
            _oneway: "true"
          }
        },
        {
          "ja-Jpan": {
            _desired: "ja-Hani",
            _distance: "5",
            _oneway: "true"
          }
        },
        {
          "ja-Jpan": {
            _desired: "ja-Hira",
            _distance: "5",
            _oneway: "true"
          }
        },
        {
          "ja-Jpan": {
            _desired: "ja-Kana",
            _distance: "5",
            _oneway: "true"
          }
        },
        {
          "ja-Jpan": {
            _desired: "ja-Hrkt",
            _distance: "5",
            _oneway: "true"
          }
        },
        {
          "ja-Hrkt": {
            _desired: "ja-Hira",
            _distance: "5",
            _oneway: "true"
          }
        },
        {
          "ja-Hrkt": {
            _desired: "ja-Kana",
            _distance: "5",
            _oneway: "true"
          }
        },
        {
          "ko-Kore": {
            _desired: "ko-Hani",
            _distance: "5",
            _oneway: "true"
          }
        },
        {
          "ko-Kore": {
            _desired: "ko-Hang",
            _distance: "5",
            _oneway: "true"
          }
        },
        {
          "ko-Kore": {
            _desired: "ko-Jamo",
            _distance: "5",
            _oneway: "true"
          }
        },
        {
          "ko-Hang": {
            _desired: "ko-Jamo",
            _distance: "5",
            _oneway: "true"
          }
        },
        {
          "*-*": {
            _desired: "*-*",
            _distance: "50"
          }
        },
        {
          "ar-*-$maghreb": {
            _desired: "ar-*-$maghreb",
            _distance: "4"
          }
        },
        {
          "ar-*-$!maghreb": {
            _desired: "ar-*-$!maghreb",
            _distance: "4"
          }
        },
        {
          "ar-*-*": {
            _desired: "ar-*-*",
            _distance: "5"
          }
        },
        {
          "en-*-$enUS": {
            _desired: "en-*-$enUS",
            _distance: "4"
          }
        },
        {
          "en-*-GB": {
            _desired: "en-*-$!enUS",
            _distance: "3"
          }
        },
        {
          "en-*-$!enUS": {
            _desired: "en-*-$!enUS",
            _distance: "4"
          }
        },
        {
          "en-*-*": {
            _desired: "en-*-*",
            _distance: "5"
          }
        },
        {
          "es-*-$americas": {
            _desired: "es-*-$americas",
            _distance: "4"
          }
        },
        {
          "es-*-$!americas": {
            _desired: "es-*-$!americas",
            _distance: "4"
          }
        },
        {
          "es-*-*": {
            _desired: "es-*-*",
            _distance: "5"
          }
        },
        {
          "pt-*-$americas": {
            _desired: "pt-*-$americas",
            _distance: "4"
          }
        },
        {
          "pt-*-$!americas": {
            _desired: "pt-*-$!americas",
            _distance: "4"
          }
        },
        {
          "pt-*-*": {
            _desired: "pt-*-*",
            _distance: "5"
          }
        },
        {
          "zh-Hant-$cnsar": {
            _desired: "zh-Hant-$cnsar",
            _distance: "4"
          }
        },
        {
          "zh-Hant-$!cnsar": {
            _desired: "zh-Hant-$!cnsar",
            _distance: "4"
          }
        },
        {
          "zh-Hant-*": {
            _desired: "zh-Hant-*",
            _distance: "5"
          }
        },
        {
          "*-*-*": {
            _desired: "*-*-*",
            _distance: "4"
          }
        }
      ]
    }
  }
};
var regions = {
  "001": [
    "001",
    "001-status-grouping",
    "002",
    "005",
    "009",
    "011",
    "013",
    "014",
    "015",
    "017",
    "018",
    "019",
    "021",
    "029",
    "030",
    "034",
    "035",
    "039",
    "053",
    "054",
    "057",
    "061",
    "142",
    "143",
    "145",
    "150",
    "151",
    "154",
    "155",
    "AC",
    "AD",
    "AE",
    "AF",
    "AG",
    "AI",
    "AL",
    "AM",
    "AO",
    "AQ",
    "AR",
    "AS",
    "AT",
    "AU",
    "AW",
    "AX",
    "AZ",
    "BA",
    "BB",
    "BD",
    "BE",
    "BF",
    "BG",
    "BH",
    "BI",
    "BJ",
    "BL",
    "BM",
    "BN",
    "BO",
    "BQ",
    "BR",
    "BS",
    "BT",
    "BV",
    "BW",
    "BY",
    "BZ",
    "CA",
    "CC",
    "CD",
    "CF",
    "CG",
    "CH",
    "CI",
    "CK",
    "CL",
    "CM",
    "CN",
    "CO",
    "CP",
    "CQ",
    "CR",
    "CU",
    "CV",
    "CW",
    "CX",
    "CY",
    "CZ",
    "DE",
    "DG",
    "DJ",
    "DK",
    "DM",
    "DO",
    "DZ",
    "EA",
    "EC",
    "EE",
    "EG",
    "EH",
    "ER",
    "ES",
    "ET",
    "EU",
    "EZ",
    "FI",
    "FJ",
    "FK",
    "FM",
    "FO",
    "FR",
    "GA",
    "GB",
    "GD",
    "GE",
    "GF",
    "GG",
    "GH",
    "GI",
    "GL",
    "GM",
    "GN",
    "GP",
    "GQ",
    "GR",
    "GS",
    "GT",
    "GU",
    "GW",
    "GY",
    "HK",
    "HM",
    "HN",
    "HR",
    "HT",
    "HU",
    "IC",
    "ID",
    "IE",
    "IL",
    "IM",
    "IN",
    "IO",
    "IQ",
    "IR",
    "IS",
    "IT",
    "JE",
    "JM",
    "JO",
    "JP",
    "KE",
    "KG",
    "KH",
    "KI",
    "KM",
    "KN",
    "KP",
    "KR",
    "KW",
    "KY",
    "KZ",
    "LA",
    "LB",
    "LC",
    "LI",
    "LK",
    "LR",
    "LS",
    "LT",
    "LU",
    "LV",
    "LY",
    "MA",
    "MC",
    "MD",
    "ME",
    "MF",
    "MG",
    "MH",
    "MK",
    "ML",
    "MM",
    "MN",
    "MO",
    "MP",
    "MQ",
    "MR",
    "MS",
    "MT",
    "MU",
    "MV",
    "MW",
    "MX",
    "MY",
    "MZ",
    "NA",
    "NC",
    "NE",
    "NF",
    "NG",
    "NI",
    "NL",
    "NO",
    "NP",
    "NR",
    "NU",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PF",
    "PG",
    "PH",
    "PK",
    "PL",
    "PM",
    "PN",
    "PR",
    "PS",
    "PT",
    "PW",
    "PY",
    "QA",
    "QO",
    "RE",
    "RO",
    "RS",
    "RU",
    "RW",
    "SA",
    "SB",
    "SC",
    "SD",
    "SE",
    "SG",
    "SH",
    "SI",
    "SJ",
    "SK",
    "SL",
    "SM",
    "SN",
    "SO",
    "SR",
    "SS",
    "ST",
    "SV",
    "SX",
    "SY",
    "SZ",
    "TA",
    "TC",
    "TD",
    "TF",
    "TG",
    "TH",
    "TJ",
    "TK",
    "TL",
    "TM",
    "TN",
    "TO",
    "TR",
    "TT",
    "TV",
    "TW",
    "TZ",
    "UA",
    "UG",
    "UM",
    "UN",
    "US",
    "UY",
    "UZ",
    "VA",
    "VC",
    "VE",
    "VG",
    "VI",
    "VN",
    "VU",
    "WF",
    "WS",
    "XK",
    "YE",
    "YT",
    "ZA",
    "ZM",
    "ZW"
  ],
  "002": [
    "002",
    "002-status-grouping",
    "011",
    "014",
    "015",
    "017",
    "018",
    "202",
    "AO",
    "BF",
    "BI",
    "BJ",
    "BW",
    "CD",
    "CF",
    "CG",
    "CI",
    "CM",
    "CV",
    "DJ",
    "DZ",
    "EA",
    "EG",
    "EH",
    "ER",
    "ET",
    "GA",
    "GH",
    "GM",
    "GN",
    "GQ",
    "GW",
    "IC",
    "IO",
    "KE",
    "KM",
    "LR",
    "LS",
    "LY",
    "MA",
    "MG",
    "ML",
    "MR",
    "MU",
    "MW",
    "MZ",
    "NA",
    "NE",
    "NG",
    "RE",
    "RW",
    "SC",
    "SD",
    "SH",
    "SL",
    "SN",
    "SO",
    "SS",
    "ST",
    "SZ",
    "TD",
    "TF",
    "TG",
    "TN",
    "TZ",
    "UG",
    "YT",
    "ZA",
    "ZM",
    "ZW"
  ],
  "003": [
    "003",
    "013",
    "021",
    "029",
    "AG",
    "AI",
    "AW",
    "BB",
    "BL",
    "BM",
    "BQ",
    "BS",
    "BZ",
    "CA",
    "CR",
    "CU",
    "CW",
    "DM",
    "DO",
    "GD",
    "GL",
    "GP",
    "GT",
    "HN",
    "HT",
    "JM",
    "KN",
    "KY",
    "LC",
    "MF",
    "MQ",
    "MS",
    "MX",
    "NI",
    "PA",
    "PM",
    "PR",
    "SV",
    "SX",
    "TC",
    "TT",
    "US",
    "VC",
    "VG",
    "VI"
  ],
  "005": [
    "005",
    "AR",
    "BO",
    "BR",
    "BV",
    "CL",
    "CO",
    "EC",
    "FK",
    "GF",
    "GS",
    "GY",
    "PE",
    "PY",
    "SR",
    "UY",
    "VE"
  ],
  "009": [
    "009",
    "053",
    "054",
    "057",
    "061",
    "AC",
    "AQ",
    "AS",
    "AU",
    "CC",
    "CK",
    "CP",
    "CX",
    "DG",
    "FJ",
    "FM",
    "GU",
    "HM",
    "KI",
    "MH",
    "MP",
    "NC",
    "NF",
    "NR",
    "NU",
    "NZ",
    "PF",
    "PG",
    "PN",
    "PW",
    "QO",
    "SB",
    "TA",
    "TK",
    "TO",
    "TV",
    "UM",
    "VU",
    "WF",
    "WS"
  ],
  "011": [
    "011",
    "BF",
    "BJ",
    "CI",
    "CV",
    "GH",
    "GM",
    "GN",
    "GW",
    "LR",
    "ML",
    "MR",
    "NE",
    "NG",
    "SH",
    "SL",
    "SN",
    "TG"
  ],
  "013": [
    "013",
    "BZ",
    "CR",
    "GT",
    "HN",
    "MX",
    "NI",
    "PA",
    "SV"
  ],
  "014": [
    "014",
    "BI",
    "DJ",
    "ER",
    "ET",
    "IO",
    "KE",
    "KM",
    "MG",
    "MU",
    "MW",
    "MZ",
    "RE",
    "RW",
    "SC",
    "SO",
    "SS",
    "TF",
    "TZ",
    "UG",
    "YT",
    "ZM",
    "ZW"
  ],
  "015": [
    "015",
    "DZ",
    "EA",
    "EG",
    "EH",
    "IC",
    "LY",
    "MA",
    "SD",
    "TN"
  ],
  "017": [
    "017",
    "AO",
    "CD",
    "CF",
    "CG",
    "CM",
    "GA",
    "GQ",
    "ST",
    "TD"
  ],
  "018": [
    "018",
    "BW",
    "LS",
    "NA",
    "SZ",
    "ZA"
  ],
  "019": [
    "003",
    "005",
    "013",
    "019",
    "019-status-grouping",
    "021",
    "029",
    "419",
    "AG",
    "AI",
    "AR",
    "AW",
    "BB",
    "BL",
    "BM",
    "BO",
    "BQ",
    "BR",
    "BS",
    "BV",
    "BZ",
    "CA",
    "CL",
    "CO",
    "CR",
    "CU",
    "CW",
    "DM",
    "DO",
    "EC",
    "FK",
    "GD",
    "GF",
    "GL",
    "GP",
    "GS",
    "GT",
    "GY",
    "HN",
    "HT",
    "JM",
    "KN",
    "KY",
    "LC",
    "MF",
    "MQ",
    "MS",
    "MX",
    "NI",
    "PA",
    "PE",
    "PM",
    "PR",
    "PY",
    "SR",
    "SV",
    "SX",
    "TC",
    "TT",
    "US",
    "UY",
    "VC",
    "VE",
    "VG",
    "VI"
  ],
  "021": [
    "021",
    "BM",
    "CA",
    "GL",
    "PM",
    "US"
  ],
  "029": [
    "029",
    "AG",
    "AI",
    "AW",
    "BB",
    "BL",
    "BQ",
    "BS",
    "CU",
    "CW",
    "DM",
    "DO",
    "GD",
    "GP",
    "HT",
    "JM",
    "KN",
    "KY",
    "LC",
    "MF",
    "MQ",
    "MS",
    "PR",
    "SX",
    "TC",
    "TT",
    "VC",
    "VG",
    "VI"
  ],
  "030": [
    "030",
    "CN",
    "HK",
    "JP",
    "KP",
    "KR",
    "MN",
    "MO",
    "TW"
  ],
  "034": [
    "034",
    "AF",
    "BD",
    "BT",
    "IN",
    "IR",
    "LK",
    "MV",
    "NP",
    "PK"
  ],
  "035": [
    "035",
    "BN",
    "ID",
    "KH",
    "LA",
    "MM",
    "MY",
    "PH",
    "SG",
    "TH",
    "TL",
    "VN"
  ],
  "039": [
    "039",
    "AD",
    "AL",
    "BA",
    "ES",
    "GI",
    "GR",
    "HR",
    "IT",
    "ME",
    "MK",
    "MT",
    "PT",
    "RS",
    "SI",
    "SM",
    "VA",
    "XK"
  ],
  "053": [
    "053",
    "AU",
    "CC",
    "CX",
    "HM",
    "NF",
    "NZ"
  ],
  "054": [
    "054",
    "FJ",
    "NC",
    "PG",
    "SB",
    "VU"
  ],
  "057": [
    "057",
    "FM",
    "GU",
    "KI",
    "MH",
    "MP",
    "NR",
    "PW",
    "UM"
  ],
  "061": [
    "061",
    "AS",
    "CK",
    "NU",
    "PF",
    "PN",
    "TK",
    "TO",
    "TV",
    "WF",
    "WS"
  ],
  "142": [
    "030",
    "034",
    "035",
    "142",
    "143",
    "145",
    "AE",
    "AF",
    "AM",
    "AZ",
    "BD",
    "BH",
    "BN",
    "BT",
    "CN",
    "CY",
    "GE",
    "HK",
    "ID",
    "IL",
    "IN",
    "IQ",
    "IR",
    "JO",
    "JP",
    "KG",
    "KH",
    "KP",
    "KR",
    "KW",
    "KZ",
    "LA",
    "LB",
    "LK",
    "MM",
    "MN",
    "MO",
    "MV",
    "MY",
    "NP",
    "OM",
    "PH",
    "PK",
    "PS",
    "QA",
    "SA",
    "SG",
    "SY",
    "TH",
    "TJ",
    "TL",
    "TM",
    "TR",
    "TW",
    "UZ",
    "VN",
    "YE"
  ],
  "143": [
    "143",
    "KG",
    "KZ",
    "TJ",
    "TM",
    "UZ"
  ],
  "145": [
    "145",
    "AE",
    "AM",
    "AZ",
    "BH",
    "CY",
    "GE",
    "IL",
    "IQ",
    "JO",
    "KW",
    "LB",
    "OM",
    "PS",
    "QA",
    "SA",
    "SY",
    "TR",
    "YE"
  ],
  "150": [
    "039",
    "150",
    "151",
    "154",
    "155",
    "AD",
    "AL",
    "AT",
    "AX",
    "BA",
    "BE",
    "BG",
    "BY",
    "CH",
    "CQ",
    "CZ",
    "DE",
    "DK",
    "EE",
    "ES",
    "FI",
    "FO",
    "FR",
    "GB",
    "GG",
    "GI",
    "GR",
    "HR",
    "HU",
    "IE",
    "IM",
    "IS",
    "IT",
    "JE",
    "LI",
    "LT",
    "LU",
    "LV",
    "MC",
    "MD",
    "ME",
    "MK",
    "MT",
    "NL",
    "NO",
    "PL",
    "PT",
    "RO",
    "RS",
    "RU",
    "SE",
    "SI",
    "SJ",
    "SK",
    "SM",
    "UA",
    "VA",
    "XK"
  ],
  "151": [
    "151",
    "BG",
    "BY",
    "CZ",
    "HU",
    "MD",
    "PL",
    "RO",
    "RU",
    "SK",
    "UA"
  ],
  "154": [
    "154",
    "AX",
    "CQ",
    "DK",
    "EE",
    "FI",
    "FO",
    "GB",
    "GG",
    "IE",
    "IM",
    "IS",
    "JE",
    "LT",
    "LV",
    "NO",
    "SE",
    "SJ"
  ],
  "155": [
    "155",
    "AT",
    "BE",
    "CH",
    "DE",
    "FR",
    "LI",
    "LU",
    "MC",
    "NL"
  ],
  "202": [
    "011",
    "014",
    "017",
    "018",
    "202",
    "AO",
    "BF",
    "BI",
    "BJ",
    "BW",
    "CD",
    "CF",
    "CG",
    "CI",
    "CM",
    "CV",
    "DJ",
    "ER",
    "ET",
    "GA",
    "GH",
    "GM",
    "GN",
    "GQ",
    "GW",
    "IO",
    "KE",
    "KM",
    "LR",
    "LS",
    "MG",
    "ML",
    "MR",
    "MU",
    "MW",
    "MZ",
    "NA",
    "NE",
    "NG",
    "RE",
    "RW",
    "SC",
    "SH",
    "SL",
    "SN",
    "SO",
    "SS",
    "ST",
    "SZ",
    "TD",
    "TF",
    "TG",
    "TZ",
    "UG",
    "YT",
    "ZA",
    "ZM",
    "ZW"
  ],
  "419": [
    "005",
    "013",
    "029",
    "419",
    "AG",
    "AI",
    "AR",
    "AW",
    "BB",
    "BL",
    "BO",
    "BQ",
    "BR",
    "BS",
    "BV",
    "BZ",
    "CL",
    "CO",
    "CR",
    "CU",
    "CW",
    "DM",
    "DO",
    "EC",
    "FK",
    "GD",
    "GF",
    "GP",
    "GS",
    "GT",
    "GY",
    "HN",
    "HT",
    "JM",
    "KN",
    "KY",
    "LC",
    "MF",
    "MQ",
    "MS",
    "MX",
    "NI",
    "PA",
    "PE",
    "PR",
    "PY",
    "SR",
    "SV",
    "SX",
    "TC",
    "TT",
    "UY",
    "VC",
    "VE",
    "VG",
    "VI"
  ],
  "EU": [
    "AT",
    "BE",
    "BG",
    "CY",
    "CZ",
    "DE",
    "DK",
    "EE",
    "ES",
    "EU",
    "FI",
    "FR",
    "GR",
    "HR",
    "HU",
    "IE",
    "IT",
    "LT",
    "LU",
    "LV",
    "MT",
    "NL",
    "PL",
    "PT",
    "RO",
    "SE",
    "SI",
    "SK"
  ],
  "EZ": [
    "AT",
    "BE",
    "CY",
    "DE",
    "EE",
    "ES",
    "EZ",
    "FI",
    "FR",
    "GR",
    "IE",
    "IT",
    "LT",
    "LU",
    "LV",
    "MT",
    "NL",
    "PT",
    "SI",
    "SK"
  ],
  "QO": [
    "AC",
    "AQ",
    "CP",
    "DG",
    "QO",
    "TA"
  ],
  "UN": [
    "AD",
    "AE",
    "AF",
    "AG",
    "AL",
    "AM",
    "AO",
    "AR",
    "AT",
    "AU",
    "AZ",
    "BA",
    "BB",
    "BD",
    "BE",
    "BF",
    "BG",
    "BH",
    "BI",
    "BJ",
    "BN",
    "BO",
    "BR",
    "BS",
    "BT",
    "BW",
    "BY",
    "BZ",
    "CA",
    "CD",
    "CF",
    "CG",
    "CH",
    "CI",
    "CL",
    "CM",
    "CN",
    "CO",
    "CR",
    "CU",
    "CV",
    "CY",
    "CZ",
    "DE",
    "DJ",
    "DK",
    "DM",
    "DO",
    "DZ",
    "EC",
    "EE",
    "EG",
    "ER",
    "ES",
    "ET",
    "FI",
    "FJ",
    "FM",
    "FR",
    "GA",
    "GB",
    "GD",
    "GE",
    "GH",
    "GM",
    "GN",
    "GQ",
    "GR",
    "GT",
    "GW",
    "GY",
    "HN",
    "HR",
    "HT",
    "HU",
    "ID",
    "IE",
    "IL",
    "IN",
    "IQ",
    "IR",
    "IS",
    "IT",
    "JM",
    "JO",
    "JP",
    "KE",
    "KG",
    "KH",
    "KI",
    "KM",
    "KN",
    "KP",
    "KR",
    "KW",
    "KZ",
    "LA",
    "LB",
    "LC",
    "LI",
    "LK",
    "LR",
    "LS",
    "LT",
    "LU",
    "LV",
    "LY",
    "MA",
    "MC",
    "MD",
    "ME",
    "MG",
    "MH",
    "MK",
    "ML",
    "MM",
    "MN",
    "MR",
    "MT",
    "MU",
    "MV",
    "MW",
    "MX",
    "MY",
    "MZ",
    "NA",
    "NE",
    "NG",
    "NI",
    "NL",
    "NO",
    "NP",
    "NR",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PG",
    "PH",
    "PK",
    "PL",
    "PT",
    "PW",
    "PY",
    "QA",
    "RO",
    "RS",
    "RU",
    "RW",
    "SA",
    "SB",
    "SC",
    "SD",
    "SE",
    "SG",
    "SI",
    "SK",
    "SL",
    "SM",
    "SN",
    "SO",
    "SR",
    "SS",
    "ST",
    "SV",
    "SY",
    "SZ",
    "TD",
    "TG",
    "TH",
    "TJ",
    "TL",
    "TM",
    "TN",
    "TO",
    "TR",
    "TT",
    "TV",
    "TZ",
    "UA",
    "UG",
    "UN",
    "US",
    "UY",
    "UZ",
    "VC",
    "VE",
    "VN",
    "VU",
    "WS",
    "YE",
    "ZA",
    "ZM",
    "ZW"
  ]
};
var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
function invariant(condition, message, Err) {
  if (Err === void 0) {
    Err = Error;
  }
  if (!condition) {
    throw new Err(message);
  }
}
var DEFAULT_MATCHING_THRESHOLD = 838;
var PROCESSED_DATA;
function processData() {
  var _a, _b;
  if (!PROCESSED_DATA) {
    var paradigmLocales = (_b = (_a = data.supplemental.languageMatching["written-new"][0]) === null || _a === void 0 ? void 0 : _a.paradigmLocales) === null || _b === void 0 ? void 0 : _b._locales.split(" ");
    var matchVariables = data.supplemental.languageMatching["written-new"].slice(1, 5);
    var data$1 = data.supplemental.languageMatching["written-new"].slice(5);
    var matches = data$1.map(function(d) {
      var key = Object.keys(d)[0];
      var value = d[key];
      return {
        supported: key,
        desired: value._desired,
        distance: +value._distance,
        oneway: value.oneway === "true" ? true : false
      };
    }, {});
    PROCESSED_DATA = {
      matches,
      matchVariables: matchVariables.reduce(function(all, d) {
        var key = Object.keys(d)[0];
        var value = d[key];
        all[key.slice(1)] = value._value.split("+");
        return all;
      }, {}),
      paradigmLocales: __spreadArray(__spreadArray([], paradigmLocales, true), paradigmLocales.map(function(l) {
        return new Intl.Locale(l.replace(/_/g, "-")).maximize().toString();
      }), true)
    };
  }
  return PROCESSED_DATA;
}
function isMatched(locale, languageMatchInfoLocale, matchVariables) {
  var _a = languageMatchInfoLocale.split("-"), language = _a[0], script = _a[1], region = _a[2];
  var matches = true;
  if (region && region[0] === "$") {
    var shouldInclude = region[1] !== "!";
    var matchRegions = shouldInclude ? matchVariables[region.slice(1)] : matchVariables[region.slice(2)];
    var expandedMatchedRegions = matchRegions.map(function(r) {
      return regions[r] || [r];
    }).reduce(function(all, list) {
      return __spreadArray(__spreadArray([], all, true), list, true);
    }, []);
    matches && (matches = !(expandedMatchedRegions.indexOf(locale.region || "") > -1 != shouldInclude));
  } else {
    matches && (matches = locale.region ? region === "*" || region === locale.region : true);
  }
  matches && (matches = locale.script ? script === "*" || script === locale.script : true);
  matches && (matches = locale.language ? language === "*" || language === locale.language : true);
  return matches;
}
function serializeLSR(lsr) {
  return [lsr.language, lsr.script, lsr.region].filter(Boolean).join("-");
}
function findMatchingDistanceForLSR(desired, supported, data2) {
  for (var _i = 0, _a = data2.matches; _i < _a.length; _i++) {
    var d = _a[_i];
    var matches = isMatched(desired, d.desired, data2.matchVariables) && isMatched(supported, d.supported, data2.matchVariables);
    if (!d.oneway && !matches) {
      matches = isMatched(desired, d.supported, data2.matchVariables) && isMatched(supported, d.desired, data2.matchVariables);
    }
    if (matches) {
      var distance = d.distance * 10;
      if (data2.paradigmLocales.indexOf(serializeLSR(desired)) > -1 != data2.paradigmLocales.indexOf(serializeLSR(supported)) > -1) {
        return distance - 1;
      }
      return distance;
    }
  }
  throw new Error("No matching distance found");
}
function findMatchingDistance(desired, supported) {
  var desiredLocale = new Intl.Locale(desired).maximize();
  var supportedLocale = new Intl.Locale(supported).maximize();
  var desiredLSR = {
    language: desiredLocale.language,
    script: desiredLocale.script || "",
    region: desiredLocale.region || ""
  };
  var supportedLSR = {
    language: supportedLocale.language,
    script: supportedLocale.script || "",
    region: supportedLocale.region || ""
  };
  var matchingDistance = 0;
  var data2 = processData();
  if (desiredLSR.language !== supportedLSR.language) {
    matchingDistance += findMatchingDistanceForLSR({
      language: desiredLocale.language,
      script: "",
      region: ""
    }, {
      language: supportedLocale.language,
      script: "",
      region: ""
    }, data2);
  }
  if (desiredLSR.script !== supportedLSR.script) {
    matchingDistance += findMatchingDistanceForLSR({
      language: desiredLocale.language,
      script: desiredLSR.script,
      region: ""
    }, {
      language: supportedLocale.language,
      script: supportedLSR.script,
      region: ""
    }, data2);
  }
  if (desiredLSR.region !== supportedLSR.region) {
    matchingDistance += findMatchingDistanceForLSR(desiredLSR, supportedLSR, data2);
  }
  return matchingDistance;
}
function findBestMatch(requestedLocales, supportedLocales, threshold) {
  if (threshold === void 0) {
    threshold = DEFAULT_MATCHING_THRESHOLD;
  }
  var lowestDistance = Infinity;
  var result = {
    matchedDesiredLocale: "",
    distances: {}
  };
  requestedLocales.forEach(function(desired, i) {
    if (!result.distances[desired]) {
      result.distances[desired] = {};
    }
    supportedLocales.forEach(function(supported) {
      var distance = findMatchingDistance(desired, supported) + 0 + i * 40;
      result.distances[desired][supported] = distance;
      if (distance < lowestDistance) {
        lowestDistance = distance;
        result.matchedDesiredLocale = desired;
        result.matchedSupportedLocale = supported;
      }
    });
  });
  if (lowestDistance >= threshold) {
    result.matchedDesiredLocale = void 0;
    result.matchedSupportedLocale = void 0;
  }
  return result;
}
function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
  var foundLocale;
  var extension;
  var noExtensionLocales = [];
  var noExtensionLocaleMap = requestedLocales.reduce(function(all, l) {
    var noExtensionLocale = l.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    noExtensionLocales.push(noExtensionLocale);
    all[noExtensionLocale] = l;
    return all;
  }, {});
  var result = findBestMatch(noExtensionLocales, availableLocales);
  if (result.matchedSupportedLocale && result.matchedDesiredLocale) {
    foundLocale = result.matchedSupportedLocale;
    extension = noExtensionLocaleMap[result.matchedDesiredLocale].slice(result.matchedDesiredLocale.length) || void 0;
  }
  if (!foundLocale) {
    return { locale: getDefaultLocale() };
  }
  return {
    locale: foundLocale,
    extension
  };
}
function CanonicalizeUValue(ukey, uvalue) {
  var lowerValue = uvalue.toLowerCase();
  invariant(ukey !== void 0, "ukey must be defined");
  var canonicalized = lowerValue;
  return canonicalized;
}
function CanonicalizeUnicodeLocaleId(locale) {
  return Intl.getCanonicalLocales(locale)[0];
}
function InsertUnicodeExtensionAndCanonicalize(locale, attributes, keywords) {
  invariant(locale.indexOf("-u-") === -1, "Expected locale to not have a Unicode locale extension");
  var extension = "-u";
  for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
    var attr2 = attributes_1[_i];
    extension += "-".concat(attr2);
  }
  for (var _a = 0, keywords_1 = keywords; _a < keywords_1.length; _a++) {
    var kw = keywords_1[_a];
    var key = kw.key, value = kw.value;
    extension += "-".concat(key);
    if (value !== "") {
      extension += "-".concat(value);
    }
  }
  if (extension === "-u") {
    return CanonicalizeUnicodeLocaleId(locale);
  }
  var privateIndex = locale.indexOf("-x-");
  var newLocale;
  if (privateIndex === -1) {
    newLocale = locale + extension;
  } else {
    var preExtension = locale.slice(0, privateIndex);
    var postExtension = locale.slice(privateIndex);
    newLocale = preExtension + extension + postExtension;
  }
  return CanonicalizeUnicodeLocaleId(newLocale);
}
function BestAvailableLocale(availableLocales, locale) {
  var candidate = locale;
  while (true) {
    if (availableLocales.indexOf(candidate) > -1) {
      return candidate;
    }
    var pos = candidate.lastIndexOf("-");
    if (!~pos) {
      return void 0;
    }
    if (pos >= 2 && candidate[pos - 2] === "-") {
      pos -= 2;
    }
    candidate = candidate.slice(0, pos);
  }
}
function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
  var result = { locale: "" };
  for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
    var locale = requestedLocales_1[_i];
    var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
    if (availableLocale) {
      result.locale = availableLocale;
      if (locale !== noExtensionLocale) {
        result.extension = locale.slice(noExtensionLocale.length, locale.length);
      }
      return result;
    }
  }
  result.locale = getDefaultLocale();
  return result;
}
function UnicodeExtensionComponents(extension) {
  invariant(extension === extension.toLowerCase(), "Expected extension to be lowercase");
  invariant(extension.slice(0, 3) === "-u-", "Expected extension to be a Unicode locale extension");
  var attributes = [];
  var keywords = [];
  var keyword;
  var size = extension.length;
  var k = 3;
  while (k < size) {
    var e = extension.indexOf("-", k);
    var len = void 0;
    if (e === -1) {
      len = size - k;
    } else {
      len = e - k;
    }
    var subtag = extension.slice(k, k + len);
    invariant(len >= 2, "Expected a subtag to have at least 2 characters");
    if (keyword === void 0 && len != 2) {
      if (attributes.indexOf(subtag) === -1) {
        attributes.push(subtag);
      }
    } else if (len === 2) {
      keyword = { key: subtag, value: "" };
      if (keywords.find(function(k2) {
        return k2.key === (keyword === null || keyword === void 0 ? void 0 : keyword.key);
      }) === void 0) {
        keywords.push(keyword);
      }
    } else if ((keyword === null || keyword === void 0 ? void 0 : keyword.value) === "") {
      keyword.value = subtag;
    } else {
      invariant(keyword !== void 0, "Expected keyword to be defined");
      keyword.value += "-" + subtag;
    }
    k += len + 1;
  }
  return { attributes, keywords };
}
function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
  var _a;
  var matcher = options.localeMatcher;
  var r;
  if (matcher === "lookup") {
    r = LookupMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale);
  } else {
    r = BestFitMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale);
  }
  if (r == null) {
    r = {
      locale: getDefaultLocale(),
      extension: ""
    };
  }
  var foundLocale = r.locale;
  var foundLocaleData = localeData[foundLocale];
  var result = { locale: "en", dataLocale: foundLocale };
  var components;
  var keywords;
  if (r.extension) {
    components = UnicodeExtensionComponents(r.extension);
    keywords = components.keywords;
  } else {
    keywords = [];
  }
  var supportedKeywords = [];
  var _loop_1 = function(key2) {
    var keyLocaleData = (_a = foundLocaleData === null || foundLocaleData === void 0 ? void 0 : foundLocaleData[key2]) !== null && _a !== void 0 ? _a : [];
    invariant(Array.isArray(keyLocaleData), "keyLocaleData for ".concat(key2, " must be an array"));
    var value = keyLocaleData[0];
    invariant(value === void 0 || typeof value === "string", "value must be a string or undefined");
    var supportedKeyword = void 0;
    var entry = keywords.find(function(k) {
      return k.key === key2;
    });
    if (entry) {
      var requestedValue = entry.value;
      if (requestedValue !== "") {
        if (keyLocaleData.indexOf(requestedValue) > -1) {
          value = requestedValue;
          supportedKeyword = {
            key: key2,
            value
          };
        }
      } else if (keyLocaleData.indexOf("true") > -1) {
        value = "true";
        supportedKeyword = {
          key: key2,
          value
        };
      }
    }
    var optionsValue = options[key2];
    invariant(optionsValue == null || typeof optionsValue === "string", "optionsValue must be a string or undefined");
    if (typeof optionsValue === "string") {
      var ukey = key2.toLowerCase();
      optionsValue = CanonicalizeUValue(ukey, optionsValue);
      if (optionsValue === "") {
        optionsValue = "true";
      }
    }
    if (optionsValue !== value && keyLocaleData.indexOf(optionsValue) > -1) {
      value = optionsValue;
      supportedKeyword = void 0;
    }
    if (supportedKeyword) {
      supportedKeywords.push(supportedKeyword);
    }
    result[key2] = value;
  };
  for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
    var key = relevantExtensionKeys_1[_i];
    _loop_1(key);
  }
  var supportedAttributes = [];
  if (supportedKeywords.length > 0) {
    supportedAttributes = [];
    foundLocale = InsertUnicodeExtensionAndCanonicalize(foundLocale, supportedAttributes, supportedKeywords);
  }
  result.locale = foundLocale;
  return result;
}
function LookupSupportedLocales(availableLocales, requestedLocales) {
  var subset = [];
  for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
    var locale = requestedLocales_1[_i];
    var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
    if (availableLocale) {
      subset.push(availableLocale);
    }
  }
  return subset;
}
function match(requestedLocales, availableLocales, defaultLocale, opts) {
  return ResolveLocale(availableLocales, CanonicalizeLocaleList(requestedLocales), {
    localeMatcher: (opts === null || opts === void 0 ? void 0 : opts.algorithm) || "best fit"
  }, [], {}, function() {
    return defaultLocale;
  }).locale;
}
const lib$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LookupSupportedLocales,
  ResolveLocale,
  match
}, Symbol.toStringTag, { value: "Module" }));
var VALID_ROUNDING_INCREMENTS = /* @__PURE__ */ new Set([
  1,
  2,
  5,
  10,
  20,
  25,
  50,
  100,
  200,
  250,
  500,
  1e3,
  2e3,
  2500,
  5e3
]);
function SetNumberFormatDigitOptions(internalSlots, opts, mnfdDefault, mxfdDefault, notation) {
  var mnid = GetNumberOption(opts, "minimumIntegerDigits", 1, 21, 1);
  var mnfd = opts.minimumFractionDigits;
  var mxfd = opts.maximumFractionDigits;
  var mnsd = opts.minimumSignificantDigits;
  var mxsd = opts.maximumSignificantDigits;
  internalSlots.minimumIntegerDigits = mnid;
  var roundingIncrement = GetNumberOption(opts, "roundingIncrement", 1, 5e3, 1);
  invariant$1(VALID_ROUNDING_INCREMENTS.has(roundingIncrement), "Invalid rounding increment value: ".concat(roundingIncrement, ".\nValid values are ").concat(Array.from(VALID_ROUNDING_INCREMENTS).join(", "), "."));
  var roundingMode = GetOption(opts, "roundingMode", "string", [
    "ceil",
    "floor",
    "expand",
    "trunc",
    "halfCeil",
    "halfFloor",
    "halfExpand",
    "halfTrunc",
    "halfEven"
  ], "halfExpand");
  var roundingPriority = GetOption(opts, "roundingPriority", "string", ["auto", "morePrecision", "lessPrecision"], "auto");
  var trailingZeroDisplay = GetOption(opts, "trailingZeroDisplay", "string", ["auto", "stripIfInteger"], "auto");
  if (roundingIncrement !== 1) {
    mxfdDefault = mnfdDefault;
  }
  internalSlots.roundingIncrement = roundingIncrement;
  internalSlots.roundingMode = roundingMode;
  internalSlots.trailingZeroDisplay = trailingZeroDisplay;
  var hasSd = mnsd !== void 0 || mxsd !== void 0;
  var hasFd = mnfd !== void 0 || mxfd !== void 0;
  var needSd = true;
  var needFd = true;
  if (roundingPriority === "auto") {
    needSd = hasSd;
    if (hasSd || !hasFd && notation === "compact") {
      needFd = false;
    }
  }
  if (needSd) {
    if (hasSd) {
      internalSlots.minimumSignificantDigits = DefaultNumberOption(mnsd, 1, 21, 1);
      internalSlots.maximumSignificantDigits = DefaultNumberOption(mxsd, internalSlots.minimumSignificantDigits, 21, 21);
    } else {
      internalSlots.minimumSignificantDigits = 1;
      internalSlots.maximumSignificantDigits = 21;
    }
  }
  if (needFd) {
    if (hasFd) {
      mnfd = DefaultNumberOption(mnfd, 0, 100, void 0);
      mxfd = DefaultNumberOption(mxfd, 0, 100, void 0);
      if (mnfd === void 0) {
        invariant$1(mxfd !== void 0, "maximumFractionDigits must be defined");
        mnfd = Math.min(mnfdDefault, mxfd);
      } else if (mxfd === void 0) {
        mxfd = Math.max(mxfdDefault, mnfd);
      } else if (mnfd > mxfd) {
        throw new RangeError("Invalid range, ".concat(mnfd, " > ").concat(mxfd));
      }
      internalSlots.minimumFractionDigits = mnfd;
      internalSlots.maximumFractionDigits = mxfd;
    } else {
      internalSlots.minimumFractionDigits = mnfdDefault;
      internalSlots.maximumFractionDigits = mxfdDefault;
    }
  }
  if (!needSd && !needFd) {
    internalSlots.minimumFractionDigits = 0;
    internalSlots.maximumFractionDigits = 0;
    internalSlots.minimumSignificantDigits = 1;
    internalSlots.maximumSignificantDigits = 2;
    internalSlots.roundingType = "morePrecision";
    internalSlots.roundingPriority = "morePrecision";
  } else if (roundingPriority === "morePrecision") {
    internalSlots.roundingType = "morePrecision";
    internalSlots.roundingPriority = "morePrecision";
  } else if (roundingPriority === "lessPrecision") {
    internalSlots.roundingType = "lessPrecision";
    internalSlots.roundingPriority = "lessPrecision";
  } else if (hasSd) {
    internalSlots.roundingType = "significantDigits";
    internalSlots.roundingPriority = "auto";
  } else {
    internalSlots.roundingType = "fractionDigits";
    internalSlots.roundingPriority = "auto";
  }
  if (roundingIncrement !== 1) {
    invariant$1(internalSlots.roundingType === "fractionDigits", "Invalid roundingType", TypeError);
    invariant$1(internalSlots.maximumFractionDigits === internalSlots.minimumFractionDigits, "With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.", RangeError);
  }
}
function SetNumberFormatUnitOptions(internalSlots, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  var style = GetOption(options, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
  internalSlots.style = style;
  var currency = GetOption(options, "currency", "string", void 0, void 0);
  invariant$1(currency === void 0 || IsWellFormedCurrencyCode(currency), "Malformed currency code", RangeError);
  invariant$1(style !== "currency" || currency !== void 0, "currency cannot be undefined", TypeError);
  var currencyDisplay = GetOption(options, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol");
  var currencySign = GetOption(options, "currencySign", "string", ["standard", "accounting"], "standard");
  var unit = GetOption(options, "unit", "string", void 0, void 0);
  invariant$1(unit === void 0 || IsWellFormedUnitIdentifier(unit), "Invalid unit argument for Intl.NumberFormat()", RangeError);
  invariant$1(style !== "unit" || unit !== void 0, "unit cannot be undefined", TypeError);
  var unitDisplay = GetOption(options, "unitDisplay", "string", ["short", "narrow", "long"], "short");
  if (style === "currency") {
    internalSlots.currency = currency.toUpperCase();
    internalSlots.currencyDisplay = currencyDisplay;
    internalSlots.currencySign = currencySign;
  }
  if (style === "unit") {
    internalSlots.unit = unit;
    internalSlots.unitDisplay = unitDisplay;
  }
}
function InitializeNumberFormat(nf, locales, opts, _a) {
  var getInternalSlots = _a.getInternalSlots, localeData = _a.localeData, availableLocales = _a.availableLocales, numberingSystemNames = _a.numberingSystemNames, getDefaultLocale = _a.getDefaultLocale, currencyDigitsData = _a.currencyDigitsData;
  var requestedLocales = CanonicalizeLocaleList$1(locales);
  var options = CoerceOptionsToObject(opts);
  var opt = /* @__PURE__ */ Object.create(null);
  var matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  opt.localeMatcher = matcher;
  var numberingSystem = GetOption(options, "numberingSystem", "string", void 0, void 0);
  if (numberingSystem !== void 0 && numberingSystemNames.indexOf(numberingSystem) < 0) {
    throw RangeError("Invalid numberingSystems: ".concat(numberingSystem));
  }
  opt.nu = numberingSystem;
  var r = ResolveLocale(
    Array.from(availableLocales),
    requestedLocales,
    opt,
    // [[RelevantExtensionKeys]] slot, which is a constant
    ["nu"],
    localeData,
    getDefaultLocale
  );
  var dataLocaleData = localeData[r.dataLocale];
  invariant$1(!!dataLocaleData, "Missing locale data for ".concat(r.dataLocale));
  var internalSlots = getInternalSlots(nf);
  internalSlots.locale = r.locale;
  internalSlots.dataLocale = r.dataLocale;
  internalSlots.numberingSystem = r.nu;
  internalSlots.dataLocaleData = dataLocaleData;
  SetNumberFormatUnitOptions(internalSlots, options);
  var style = internalSlots.style;
  var notation = GetOption(options, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
  internalSlots.notation = notation;
  var mnfdDefault;
  var mxfdDefault;
  if (style === "currency" && notation === "standard") {
    var currency = internalSlots.currency;
    var cDigits = CurrencyDigits(currency, { currencyDigitsData });
    mnfdDefault = cDigits;
    mxfdDefault = cDigits;
  } else {
    mnfdDefault = 0;
    mxfdDefault = style === "percent" ? 0 : 3;
  }
  SetNumberFormatDigitOptions(internalSlots, options, mnfdDefault, mxfdDefault, notation);
  var compactDisplay = GetOption(options, "compactDisplay", "string", ["short", "long"], "short");
  var defaultUseGrouping = "auto";
  if (notation === "compact") {
    internalSlots.compactDisplay = compactDisplay;
    defaultUseGrouping = "min2";
  }
  var useGrouping = GetStringOrBooleanOption(options, "useGrouping", ["min2", "auto", "always"], "always", false, defaultUseGrouping);
  internalSlots.useGrouping = useGrouping;
  var signDisplay = GetOption(options, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
  internalSlots.signDisplay = signDisplay;
  return nf;
}
function PartitionPattern(pattern) {
  var result = [];
  var beginIndex = pattern.indexOf("{");
  var endIndex = 0;
  var nextIndex = 0;
  var length = pattern.length;
  while (beginIndex < pattern.length && beginIndex > -1) {
    endIndex = pattern.indexOf("}", beginIndex);
    invariant$1(endIndex > beginIndex, "Invalid pattern ".concat(pattern));
    if (beginIndex > nextIndex) {
      result.push({
        type: "literal",
        value: pattern.substring(nextIndex, beginIndex)
      });
    }
    result.push({
      type: pattern.substring(beginIndex + 1, endIndex),
      value: void 0
    });
    nextIndex = endIndex + 1;
    beginIndex = pattern.indexOf("{", nextIndex);
  }
  if (nextIndex < length) {
    result.push({
      type: "literal",
      value: pattern.substring(nextIndex, length)
    });
  }
  return result;
}
function SupportedLocales(availableLocales, requestedLocales, options) {
  var matcher = "best fit";
  if (options !== void 0) {
    options = ToObject(options);
    matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if (matcher === "best fit") {
    return LookupSupportedLocales(Array.from(availableLocales), requestedLocales);
  }
  return LookupSupportedLocales(Array.from(availableLocales), requestedLocales);
}
(function(_super) {
  __extends(MissingLocaleDataError, _super);
  function MissingLocaleDataError() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = "MISSING_LOCALE_DATA";
    return _this;
  }
  return MissingLocaleDataError;
})(Error);
function isMissingLocaleDataError(e) {
  return e.type === "MISSING_LOCALE_DATA";
}
var RangePatternType;
(function(RangePatternType2) {
  RangePatternType2["startRange"] = "startRange";
  RangePatternType2["shared"] = "shared";
  RangePatternType2["endRange"] = "endRange";
})(RangePatternType || (RangePatternType = {}));
function ToIntlMathematicalValue(input) {
  var primValue = ToPrimitive(input, "number");
  if (typeof primValue === "bigint") {
    return new Decimal(primValue);
  }
  if (primValue === void 0) {
    return new Decimal(NaN);
  }
  if (primValue === true) {
    return new Decimal(1);
  }
  if (primValue === false) {
    return new Decimal(0);
  }
  if (primValue === null) {
    return new Decimal(0);
  }
  try {
    return new Decimal(primValue);
  } catch (e) {
    return new Decimal(NaN);
  }
}
const lib = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ApplyUnsignedRoundingMode,
  ArrayCreate,
  CanonicalizeLocaleList: CanonicalizeLocaleList$1,
  CanonicalizeTimeZoneName,
  CoerceOptionsToObject,
  CollapseNumberRange,
  ComputeExponent,
  ComputeExponentForMagnitude,
  CurrencyDigits,
  DateFromTime,
  Day,
  DayFromYear,
  DayWithinYear,
  DaysInYear,
  FormatApproximately,
  FormatNumeric,
  FormatNumericRange,
  FormatNumericRangeToParts,
  FormatNumericToParts,
  FormatNumericToString,
  GetNumberOption,
  GetOption,
  GetOptionsObject,
  GetStringOrBooleanOption,
  GetUnsignedRoundingMode,
  HasOwnProperty,
  HourFromTime,
  InLeapYear,
  InitializeNumberFormat,
  IsSanctionedSimpleUnitIdentifier,
  IsValidTimeZoneName,
  IsWellFormedCurrencyCode,
  IsWellFormedUnitIdentifier,
  MinFromTime,
  MonthFromTime,
  OrdinaryHasInstance,
  PartitionNumberPattern,
  PartitionNumberRangePattern,
  PartitionPattern,
  get RangePatternType() {
    return RangePatternType;
  },
  SANCTIONED_UNITS,
  SIMPLE_UNITS,
  SameValue,
  SecFromTime,
  SetNumberFormatDigitOptions,
  SetNumberFormatUnitOptions,
  SupportedLocales,
  TimeClip,
  TimeFromYear,
  ToIntlMathematicalValue,
  ToNumber,
  ToObject,
  ToPrimitive,
  ToRawFixed,
  ToRawPrecision,
  ToString,
  Type,
  WeekDay,
  YearFromTime,
  ZERO: ZERO$1,
  _formatToParts: formatToParts,
  createDataProperty,
  createMemoizedDateTimeFormat,
  createMemoizedListFormat,
  createMemoizedLocale,
  createMemoizedNumberFormat,
  createMemoizedPluralRules,
  defineProperty,
  getInternalSlot,
  getMultiInternalSlots,
  invariant: invariant$1,
  isLiteralPart,
  isMissingLocaleDataError,
  msFromTime,
  removeUnitNamespace,
  setInternalSlot,
  setMultiInternalSlots
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(lib);
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(lib$1);
var cldrSegmentationRules_generated = {};
Object.defineProperty(cldrSegmentationRules_generated, "__esModule", { value: true });
cldrSegmentationRules_generated.SegmentationRules = void 0;
cldrSegmentationRules_generated.SegmentationRules = {
  "de": {
    "sentence": {
      "segmentRules": {},
      "suppressions": [
        "Port.",
        "Alt.",
        "Di.",
        "Ges.",
        "frz.",
        "entspr.",
        "Gebr.",
        "erw.",
        "Frl.",
        "Inh.",
        "k.u.k.",
        "Ca.",
        "J.D.",
        "Ausg.",
        "evtl.",
        "So.",
        "i.B.",
        "s.a.",
        "kgl.",
        "Sept.",
        "o.B.",
        "Sa.",
        "ev.",
        "Dez.",
        "am.",
        "i.R.",
        "eigtl.",
        "i.J.",
        "u.U.",
        "G.",
        "z.Hd.",
        "u.A.w.g.",
        "Kl.",
        "Spezif.",
        "Obj.",
        "Ing.",
        "D. h.",
        "Folg.",
        "Akt.",
        "i.A.",
        "Msp.",
        "U.U.",
        "Chr.",
        "R.",
        "Einh.",
        "schwäb.",
        "Vgl.",
        "Aug.",
        "Dipl.-Ing.",
        "W.",
        "B.",
        "U. U.",
        "J.",
        "Fa.",
        "Mo.",
        "n.u.Z.",
        "Op.",
        "Mrd.",
        "e.h.",
        "Hr.",
        "Hrn.",
        "Ztr.",
        "k. u. k.",
        "Bibl.",
        "d.Ä.",
        "b.",
        "M.",
        "i.H.",
        "v.R.w.",
        "o.A.",
        "St.",
        "Dr.",
        "Fn.",
        "Abs.",
        "Rd.",
        "Dtzd.",
        "Jahrh.",
        "Z.",
        "Std.",
        "n. Chr.",
        "möbl.",
        "tägl.",
        "gest.",
        "gesch.",
        "z.B.",
        "Hbf.",
        "Abt.",
        "A.M.",
        "e.Wz.",
        "v.T.",
        "Nov.",
        "z.",
        "Prot.",
        "U.S.",
        "Wg.",
        "u.v.a.",
        "Adr.",
        "App.",
        "ggf.",
        "ggfs.",
        "Jan.",
        "O.",
        "Rel.",
        "od.",
        "Pfd.",
        "a.a.O.",
        "p.Adr.",
        "P.",
        "Gem.",
        "v. Chr.",
        "Art.",
        "z.Z.",
        "S.A.",
        "i.V.",
        "verh.",
        "Ausschl.",
        "m.W.",
        "Dir.",
        "Verf.",
        "Sek.",
        "r.",
        "Chin.",
        "Feb.",
        "Int.",
        "Sep.",
        "Gesch.",
        "schweiz.",
        "Bed.",
        "a.Rh.",
        "jew.",
        "vgl.",
        "a.M.",
        "Str.",
        "exkl.",
        "gek.",
        "Erf.",
        "u.Ä.",
        "ehem.",
        "näml.",
        "u. Z.",
        "v. u. Z.",
        "sog.",
        "C.",
        "Dipl.-Kfm.",
        "mtl.",
        "Hrsg.",
        "Qu.",
        "röm.",
        "u.",
        "U.",
        "Adj.",
        "Kap.",
        "hpts.",
        "a.D.",
        "gedr.",
        "Best.",
        "N.",
        "v.u.Z.",
        "Phys.",
        "Fr.",
        "d.J.",
        "Reg.-Bez.",
        "m.E.",
        "schles.",
        "Max.",
        "Ltd.",
        "südd.",
        "inkl.",
        "geb.",
        "Ggf.",
        "Inc.",
        "kath.",
        "kfm.",
        "Nr.",
        "Proz.",
        "Dim.",
        "verw.",
        "Reg.",
        "Dat.",
        "Evtl.",
        "led.",
        "F.",
        "Test.",
        "Schr.",
        "Do.",
        "PIN.",
        "Z. Zt.",
        "v.Chr.",
        "Tägl.",
        "s.",
        "amtl.",
        "Temp.",
        "Mind.",
        "e.V.",
        "Abw.",
        "P.M.",
        "F.f.",
        "a.a.S.",
        "Mod.",
        "Co.",
        "Min.",
        "Allg.",
        "Geograph.",
        "Jr.",
        "Urspr.",
        "Apr.",
        "Z. B.",
        "v.H.",
        "A.",
        "einschl.",
        "Trans.",
        "zzgl.",
        "StR.",
        "Fam.",
        "I.",
        "jhrl.",
        "u.a.",
        "Ben.",
        "o.g.",
        "Kfm.",
        "Konv.",
        "Mi.",
        "L.",
        "beil.",
        "T.",
        "Ursprüngl.",
        "röm.-kath.",
        "Okt.",
        "u.ä.",
        "Tel.",
        "D.",
        "Ber.",
        "Kop.",
        "Mio.",
        "Y.",
        "U.S.A.",
        "v. H.",
        "Forts. f.",
        "Rep.",
        "Hptst.",
        "österr."
      ],
      "variables": {}
    }
  },
  "el": {
    "sentence": {
      "segmentRules": {},
      "suppressions": [],
      "variables": {
        "$STerm": "((?:[!;\\?\\u037E\\u0589\\u061D-\\u061F\\u06D4\\u0700-\\u0702\\u07F9\\u0837\\u0839\\u083D\\u083E\\u0964\\u0965\\u104A\\u104B\\u1362\\u1367\\u1368\\u166E\\u1735\\u1736\\u17D4\\u17D5\\u1803\\u1809\\u1944\\u1945\\u1AA8-\\u1AAB\\u1B4E\\u1B4F\\u1B5A\\u1B5B\\u1B5E\\u1B5F\\u1B7D-\\u1B7F\\u1C3B\\u1C3C\\u1C7E\\u1C7F\\u203C\\u203D\\u2047-\\u2049\\u2CF9-\\u2CFB\\u2E2E\\u2E3C\\u2E53\\u2E54\\u3002\\uA4FF\\uA60E\\uA60F\\uA6F3\\uA6F7\\uA876\\uA877\\uA8CE\\uA8CF\\uA92F\\uA9C8\\uA9C9\\uAA5D-\\uAA5F\\uAAF0\\uAAF1\\uABEB\\uFE12\\uFE15\\uFE16\\uFE56\\uFE57\\uFF01\\uFF1F\\uFF61]|\\uD802[\\uDE56\\uDE57]|\\uD803[\\uDF55-\\uDF59\\uDF86-\\uDF89]|\\uD804[\\uDC47\\uDC48\\uDCBE-\\uDCC1\\uDD41-\\uDD43\\uDDC5\\uDDC6\\uDDCD\\uDDDE\\uDDDF\\uDE38\\uDE39\\uDE3B\\uDE3C\\uDEA9\\uDFD4\\uDFD5]|\\uD805[\\uDC4B\\uDC4C\\uDDC2\\uDDC3\\uDDC9-\\uDDD7\\uDE41\\uDE42\\uDF3C-\\uDF3E]|\\uD806[\\uDD44\\uDD46\\uDE42\\uDE43\\uDE9B\\uDE9C]|\\uD807[\\uDC41\\uDC42\\uDEF7\\uDEF8\\uDF43\\uDF44]|\\uD81A[\\uDE6E\\uDE6F\\uDEF5\\uDF37\\uDF38\\uDF44]|\\uD81B[\\uDD6E\\uDD6F\\uDE98]|\\uD82F\\uDC9F|\\uD836\\uDE88)(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)"
      }
    }
  },
  "en": {
    "sentence": {
      "segmentRules": {},
      "suppressions": [
        "L.P.",
        "Alt.",
        "Approx.",
        "E.G.",
        "O.",
        "Maj.",
        "Misc.",
        "P.O.",
        "J.D.",
        "Jam.",
        "Card.",
        "Dec.",
        "Sept.",
        "MR.",
        "Long.",
        "Hat.",
        "G.",
        "Link.",
        "DC.",
        "D.C.",
        "M.T.",
        "Hz.",
        "Mrs.",
        "By.",
        "Act.",
        "Var.",
        "N.V.",
        "Aug.",
        "B.",
        "S.A.",
        "Up.",
        "Job.",
        "Num.",
        "M.I.T.",
        "Ok.",
        "Org.",
        "Ex.",
        "Cont.",
        "U.",
        "Mart.",
        "Fn.",
        "Abs.",
        "Lt.",
        "OK.",
        "Z.",
        "E.",
        "Kb.",
        "Est.",
        "A.M.",
        "L.A.",
        "Prof.",
        "U.S.",
        "Nov.",
        "Ph.D.",
        "Mar.",
        "I.T.",
        "exec.",
        "Jan.",
        "N.Y.",
        "X.",
        "Md.",
        "Op.",
        "vs.",
        "D.A.",
        "A.D.",
        "R.L.",
        "P.M.",
        "Or.",
        "M.R.",
        "Cap.",
        "PC.",
        "Feb.",
        "Exec.",
        "I.e.",
        "Sep.",
        "Gb.",
        "K.",
        "U.S.C.",
        "Mt.",
        "S.",
        "A.S.",
        "C.O.D.",
        "Capt.",
        "Col.",
        "In.",
        "C.F.",
        "Adj.",
        "AD.",
        "I.D.",
        "Mgr.",
        "R.T.",
        "B.V.",
        "M.",
        "Conn.",
        "Yr.",
        "Rev.",
        "Phys.",
        "pp.",
        "Ms.",
        "To.",
        "Sgt.",
        "J.K.",
        "Nr.",
        "Jun.",
        "Fri.",
        "S.A.R.",
        "Lev.",
        "Lt.Cdr.",
        "Def.",
        "F.",
        "Do.",
        "Joe.",
        "Id.",
        "Mr.",
        "Dept.",
        "Is.",
        "Pvt.",
        "Diff.",
        "Hon.B.A.",
        "Q.",
        "Mb.",
        "On.",
        "Min.",
        "J.B.",
        "Ed.",
        "AB.",
        "A.",
        "S.p.A.",
        "I.",
        "a.m.",
        "Comm.",
        "Go.",
        "VS.",
        "L.",
        "All.",
        "PP.",
        "P.V.",
        "T.",
        "K.R.",
        "Etc.",
        "D.",
        "Adv.",
        "Lib.",
        "E.g.",
        "Pro.",
        "U.S.A.",
        "S.E.",
        "AA.",
        "Rep.",
        "Sq.",
        "As."
      ],
      "variables": {}
    }
  },
  "es": {
    "sentence": {
      "segmentRules": {},
      "suppressions": [
        "Rdos.",
        "JJ.OO.",
        "Sres.",
        "fig.",
        "may.",
        "RR.HH.",
        "oct.",
        "cap.",
        "mié.",
        "doc.",
        "Excmo.",
        "Trab.",
        "Excmos.",
        "Kit.",
        "Inc.",
        "FF.CC.",
        "DC.",
        "ago.",
        "trad.",
        "SA.",
        "Rvdos.",
        "ed.",
        "Exmo.",
        "jul.",
        "col.",
        "RAM.",
        "Srtas.",
        "ene.",
        "Rol.",
        "Fabric.",
        "Comm.",
        "vid.",
        "Da.",
        "dic.",
        "ss.",
        "abr.",
        "ntra.",
        "Sra.",
        "dtor.",
        "cf.",
        "dom.",
        "prov.",
        "Emm.",
        "Sr.",
        "licdo.",
        "p.ej.",
        "bol.",
        "figs.",
        "Vda.",
        "Dr.",
        "ntro.",
        "Desv.",
        "O.M.",
        "Ldo.",
        "Drs.",
        "sáb.",
        "feb.",
        "Ltda.",
        "Lcda.",
        "Exma.",
        "C.V.",
        "SS.MM.",
        "Lda.",
        "U.S.",
        "hnos.",
        "R.D.",
        "Korn.",
        "v.gr.",
        "vs.",
        "Ilmas.",
        "Rdo.",
        "ej.",
        "vie.",
        "jue.",
        "a. C.",
        "Ilmos.",
        "e. c.",
        "Excma.",
        "afma.",
        "licda.",
        "Em.",
        "K.",
        "sras.",
        "MM.",
        "fund.",
        "Mons.",
        "Lcdo.",
        "afmo.",
        "C.",
        "A.C.",
        "dptos.",
        "Col.",
        "Srta.",
        "Av.",
        "Ant.",
        "depto.",
        "Var.",
        "H.P.",
        "D.",
        "M.",
        "C.P.",
        "Rev.",
        "Rvdmos.",
        "Fr.",
        "Ilmo.",
        "afmos.",
        "Ltd.",
        "afmas.",
        "prof.",
        "lun.",
        "SS.AA.",
        "Sol.",
        "nov.",
        "mss.",
        "Dña.",
        "Seg.",
        "mar.",
        "Rvdmo.",
        "Reg.",
        "ms.",
        "Sras.",
        "sres.",
        "U.S.A.",
        "Sta.",
        "Sdad.",
        "Dra.",
        "srs.",
        "R.U.",
        "deptos.",
        "dpto.",
        "jun.",
        "bco.",
        "Cía.",
        "Id.",
        "Mr.",
        "e.g.",
        "C.S.",
        "Excmas.",
        "Dª.",
        "Rvdo.",
        "Lic.",
        "cfr.",
        "Corp.",
        "Dto.",
        "Ilma.",
        "L.",
        "All.",
        "PP.",
        "d. C.",
        "Ltdo.",
        "mtro.",
        "Mrs.",
        "Desc.",
        "Avda.",
        "Exmas.",
        "a. e. c.",
        "Bien.",
        "Exmos.",
        "AA.",
        "Sto.",
        "CA.",
        "sept.",
        "Exc.",
        "c/c."
      ],
      "variables": {}
    }
  },
  "fr": {
    "sentence": {
      "segmentRules": {},
      "suppressions": [
        "aux.",
        "config.",
        "collab.",
        "M.",
        "dim.",
        "imprim.",
        "oct.",
        "syst.",
        "bull.",
        "MM.",
        "doc.",
        "P.O.",
        "hôp.",
        "Mart.",
        "juil.",
        "broch.",
        "adr.",
        "symb.",
        "C.",
        "anc.",
        "voit.",
        "Jr.",
        "graph.",
        "dir.",
        "éd.",
        "fig.",
        "édit.",
        "niv.",
        "quart.",
        "cam.",
        "éval.",
        "anon.",
        "réf.",
        "Comm.",
        "Prof.",
        "févr.",
        "indus.",
        "DC.",
        "équiv.",
        "illustr.",
        "acoust.",
        "nov.",
        "L.",
        "All.",
        "U.S.",
        "S.M.A.R.T.",
        "sept.",
        "avr.",
        "jeu.",
        "dest.",
        "P.-D. G.",
        "ill.",
        "coll.",
        "encycl.",
        "mer.",
        "Desc.",
        "ven.",
        "P.",
        "lun.",
        "Inc.",
        "sam.",
        "D.",
        "append.",
        "Var.",
        "categ.",
        "janv.",
        "S.A.",
        "imm.",
        "U.S.A.",
        "mar.",
        "exempl.",
        "déc.",
        "ann.",
        "U.",
        "synth.",
        "dict.",
        "av. J.-C.",
        "W.",
        "Op.",
        "ap. J.-C.",
        "gouv.",
        "trav. publ."
      ],
      "variables": {}
    }
  },
  "it": {
    "sentence": {
      "segmentRules": {},
      "suppressions": [
        "N.B.",
        "div.",
        "a.C.",
        "fig.",
        "d.p.R.",
        "c.c.p.",
        "Cfr.",
        "vol.",
        "Geom.",
        "O.d.G.",
        "S.p.A.",
        "ver.",
        "N.d.A.",
        "dott.",
        "arch.",
        "d.C.",
        "N.d.T.",
        "rag.",
        "Sig.",
        "Mod.",
        "pag.",
        "dr.",
        "tav.",
        "N.d.E.",
        "DC.",
        "mitt.",
        "Ing.",
        "int.",
        "on.",
        "C.P.",
        "ag.",
        "L.",
        "U.S.",
        "S.M.A.R.T.",
        "p.i.",
        "tab.",
        "Ltd.",
        "Liv.",
        "D.",
        "U.S.A.",
        "sez.",
        "avv.",
        "S.A.R.",
        "all.",
        "p."
      ],
      "variables": {}
    }
  },
  "ja": {
    "word": {
      "segmentRules": {
        "13.3": {
          "after": "$Hiragana",
          "before": "$Hiragana",
          "breaks": false
        },
        "13.4": {
          "after": "$Ideographic",
          "before": "$Ideographic",
          "breaks": false
        }
      },
      "suppressions": [],
      "variables": {
        "$Hiragana": "((?:[\\u3041-\\u3096\\u309D-\\u309F]|\\uD82C[\\uDC01-\\uDD1F\\uDD32\\uDD50-\\uDD52]|\\uD83C\\uDE00)(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$Ideographic": "((?:[\\u3005-\\u3007\\u3021-\\u3029\\u3038-\\u303B\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFA6D\\uFA70-\\uFAD9]|\\uD81B\\uDFE4|[\\uD81C-\\uD820\\uD822\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879\\uD880-\\uD883\\uD885-\\uD887][\\uDC00-\\uDFFF]|\\uD821[\\uDC00-\\uDFF7]|\\uD823[\\uDC00-\\uDCD5\\uDCFF-\\uDD08]|\\uD82C[\\uDD70-\\uDEFB]|\\uD869[\\uDC00-\\uDEDF\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF39\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0\\uDFF0-\\uDFFF]|\\uD87B[\\uDC00-\\uDE5D]|\\uD87E[\\uDC00-\\uDE1D]|\\uD884[\\uDC00-\\uDF4A\\uDF50-\\uDFFF]|\\uD888[\\uDC00-\\uDFAF])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)"
      }
    }
  },
  "pt": {
    "sentence": {
      "segmentRules": {},
      "suppressions": [
        "psicol.",
        "fig.",
        "compl.",
        "rep.",
        "cap.",
        "doc.",
        "fisiol.",
        "dipl.",
        "astron.",
        "port.",
        "eletrôn.",
        "geom.",
        "mov.",
        "ago.",
        "trad.",
        "arquit.",
        "dez.",
        "ed.",
        "apt.",
        "Exmo.",
        "col.",
        "ff.",
        "univ.",
        "res.",
        "R.",
        "transp.",
        "D.C",
        "l.",
        "des.",
        "fev.",
        "abr.",
        "liter.",
        "lat.",
        "Dir.",
        "cf.",
        "adm.",
        "fot.",
        "p.m.",
        "P.M.",
        "créd.",
        "jur.",
        "com.",
        "anat.",
        "dir.",
        "end.",
        "fís.",
        "E.",
        "Est.",
        "cont.",
        "matem.",
        "Drs.",
        "gên.",
        "neol.",
        "pág.",
        "índ.",
        "Ltda.",
        "Exma.",
        "esp.",
        "ingl.",
        "tecnol.",
        "Mar.",
        "símb.",
        "Pe.",
        "pal.",
        "filos.",
        "V.T.",
        "fasc.",
        "vs.",
        "mai.",
        "S.A.",
        "profa.",
        "N.Sra.",
        "r.s.v.p.",
        "cel.",
        "mat.",
        "abrev.",
        "out.",
        "long.",
        "aux.",
        "arit.",
        "aer.",
        "jul.",
        "lin.",
        "S.",
        "méd.",
        "odontol.",
        "org.",
        "A.C.",
        "jun.",
        "déb.",
        "Av.",
        "álg.",
        "sup.",
        "fl.",
        "odont.",
        "caps.",
        "relat.",
        "organiz.",
        "hist.",
        "Fr.",
        "Ilmo.",
        "fem.",
        "ap.",
        "Ltd.",
        "pol.",
        "séc.",
        "prof.",
        "cx.",
        "nov.",
        "quím.",
        "mús.",
        "agric.",
        "mar.",
        "W.C.",
        "fr.",
        "cat.",
        "jan.",
        "pron.",
        "rel.",
        "autom.",
        "Sta.",
        "Dra.",
        "p.",
        "tel.",
        "div.",
        "p. ex.",
        "a.C.",
        "bras.",
        "Alm.",
        "Dr.",
        "comp.",
        "pq.",
        "arqueol.",
        "náut.",
        "biogr.",
        "f.",
        "círc.",
        "fac.",
        "d.C.",
        "apart.",
        "ex.",
        "Jr.",
        "set.",
        "tec.",
        "sociol.",
        "gram.",
        "ind.",
        "Ilma.",
        "vol.",
        "eng.",
        "rod.",
        "Ph.D.",
        "Dras.",
        "pp.",
        "elem.",
        "máq.",
        "cód.",
        "eletr.",
        "prod.",
        "ref.",
        "fil.",
        "a.m.",
        "A.M",
        "obs.",
        "N.T.",
        "contab.",
        "Sto.",
        "lit.",
        "educ.",
        "rementente",
        "desc.",
        "próx."
      ],
      "variables": {}
    }
  },
  "root": {
    "grapheme": {
      "segmentRules": {
        "11": {
          "after": "$ExtPict",
          "before": "$ExtPict$Extend*$ZWJ",
          "breaks": false
        },
        "12": {
          "after": "$RI",
          "before": "^($RI$RI)*$RI",
          "breaks": false
        },
        "13": {
          "after": "$RI",
          "before": "[^\\uDDE6-\\uDDFF]($RI$RI)*$RI",
          "breaks": false
        },
        "3": {
          "after": "$LF",
          "before": "$CR",
          "breaks": false
        },
        "4": {
          "before": "($Control|$CR|$LF)",
          "breaks": true
        },
        "5": {
          "after": "($Control|$CR|$LF)",
          "breaks": true
        },
        "6": {
          "after": "($L|$V|$LV|$LVT)",
          "before": "$L",
          "breaks": false
        },
        "7": {
          "after": "($V|$T)",
          "before": "($LV|$V)",
          "breaks": false
        },
        "8": {
          "after": "$T",
          "before": "($LVT|$T)",
          "breaks": false
        },
        "9": {
          "after": "($Extend|$ZWJ)",
          "breaks": false
        },
        "9.1": {
          "after": "$SpacingMark",
          "breaks": false
        },
        "9.2": {
          "before": "$Prepend",
          "breaks": false
        },
        "9.3": {
          "after": "$LinkingConsonant",
          "before": "$LinkingConsonant$ExtCccZwj*$ConjunctLinker$ExtCccZwj*",
          "breaks": false
        }
      },
      "suppressions": [],
      "variables": {
        "$CR": "\\r",
        "$ConjunctLinker": "[\\u094D\\u09CD\\u0ACD\\u0B4D\\u0C4D\\u0D4D]",
        "$ConjunctLinkingScripts": "(?:[\\u0900-\\u0950\\u0955-\\u0963\\u0966-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09FE\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AF1\\u0AF9-\\u0AFF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B77\\u0C00-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3C-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58-\\u0C5A\\u0C5D\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C77-\\u0C7F\\u0D00-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4F\\u0D54-\\u0D63\\u0D66-\\u0D7F\\uA8E0-\\uA8FF]|\\uD806[\\uDF00-\\uDF09])",
        "$Control": "(?:[\\0-\\t\\x0B\\f\\x0E-\\x1F\\x7F-\\x9F\\xAD\\u061C\\u180E\\u200B\\u200E\\u200F\\u2028-\\u202E\\u2060-\\u206F\\uFEFF\\uFFF0-\\uFFFB]|\\uD80D[\\uDC30-\\uDC3F]|\\uD82F[\\uDCA0-\\uDCA3]|\\uD834[\\uDD73-\\uDD7A]|\\uDB40[\\uDC00-\\uDC1F\\uDC80-\\uDCFF\\uDDF0-\\uDFFF]|[\\uDB41-\\uDB43][\\uDC00-\\uDFFF])",
        "$ExtCccZwj": "(?:[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0902\\u093A\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0957\\u0962\\u0963\\u0981\\u09BC\\u09BE\\u09C1-\\u09C4\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01\\u0B3C\\u0B3E\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE\\u0BC0\\u0BCD\\u0BD7\\u0C00\\u0C04\\u0C3C\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81\\u0CBC\\u0CBF\\u0CC0\\u0CC2\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0D00\\u0D01\\u0D3B\\u0D3C\\u0D3E\\u0D41-\\u0D44\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81\\u0DCA\\u0DCF\\u0DD2-\\u0DD4\\u0DD6\\u0DDF\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4\\u17B5\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A1B\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B03\\u1B34-\\u1B3D\\u1B42-\\u1B44\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BAD\\u1BE6\\u1BE8\\u1BE9\\u1BED\\u1BEF-\\u1BF3\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1CF4\\u1CF8\\u1CF9\\u1DC0-\\u1DFF\\u200D\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA82C\\uA8C4\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA951\\uA953\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uA9BD\\uA9C0\\uA9E5\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAA7C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEC\\uAAED\\uAAF6\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFF9E\\uFF9F]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC01\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC81\\uDCB3-\\uDCB6\\uDCB9\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD2B\\uDD2D-\\uDD34\\uDD73\\uDD80\\uDD81\\uDDB6-\\uDDBE\\uDDC0\\uDDC9-\\uDDCC\\uDDCF\\uDE2F-\\uDE31\\uDE34-\\uDE37\\uDE3E\\uDE41\\uDEDF\\uDEE3-\\uDEEA\\uDF00\\uDF01\\uDF3B\\uDF3C\\uDF3E\\uDF40\\uDF4D\\uDF57\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8\\uDFBB-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFC9\\uDFCE-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC38-\\uDC3F\\uDC42-\\uDC44\\uDC46\\uDC5E\\uDCB0\\uDCB3-\\uDCB8\\uDCBA\\uDCBD\\uDCBF\\uDCC0\\uDCC2\\uDCC3\\uDDAF\\uDDB2-\\uDDB5\\uDDBC\\uDDBD\\uDDBF\\uDDC0\\uDDDC\\uDDDD\\uDE33-\\uDE3A\\uDE3D\\uDE3F\\uDE40\\uDEAB\\uDEAD\\uDEB0-\\uDEB7\\uDF1D\\uDF1F\\uDF22-\\uDF25\\uDF27-\\uDF2B]|\\uD806[\\uDC2F-\\uDC37\\uDC39\\uDC3A\\uDD30\\uDD3B-\\uDD3E\\uDD43\\uDDD4-\\uDDD7\\uDDDA\\uDDDB\\uDDE0\\uDE01-\\uDE0A\\uDE33-\\uDE38\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE56\\uDE59-\\uDE5B\\uDE8A-\\uDE96\\uDE98\\uDE99]|\\uD807[\\uDC30-\\uDC36\\uDC38-\\uDC3D\\uDC3F\\uDC92-\\uDCA7\\uDCAA-\\uDCB0\\uDCB2\\uDCB3\\uDCB5\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD90\\uDD91\\uDD95\\uDD97\\uDEF3\\uDEF4\\uDF00\\uDF01\\uDF36-\\uDF3A\\uDF40-\\uDF42\\uDF5A]|\\uD80D[\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD29\\uDD2D-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
        "$ExtPict": "(?:[\\xA9\\xAE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21A9\\u21AA\\u231A\\u231B\\u2328\\u2388\\u23CF\\u23E9-\\u23F3\\u23F8-\\u23FA\\u24C2\\u25AA\\u25AB\\u25B6\\u25C0\\u25FB-\\u25FE\\u2600-\\u2605\\u2607-\\u2612\\u2614-\\u2685\\u2690-\\u2705\\u2708-\\u2712\\u2714\\u2716\\u271D\\u2721\\u2728\\u2733\\u2734\\u2744\\u2747\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2763-\\u2767\\u2795-\\u2797\\u27A1\\u27B0\\u27BF\\u2934\\u2935\\u2B05-\\u2B07\\u2B1B\\u2B1C\\u2B50\\u2B55\\u3030\\u303D\\u3297\\u3299]|\\uD83C[\\uDC00-\\uDCFF\\uDD0D-\\uDD0F\\uDD2F\\uDD6C-\\uDD71\\uDD7E\\uDD7F\\uDD8E\\uDD91-\\uDD9A\\uDDAD-\\uDDE5\\uDE01-\\uDE0F\\uDE1A\\uDE2F\\uDE32-\\uDE3A\\uDE3C-\\uDE3F\\uDE49-\\uDFFA]|\\uD83D[\\uDC00-\\uDD3D\\uDD46-\\uDE4F\\uDE80-\\uDEFF\\uDF74-\\uDF7F\\uDFD5-\\uDFFF]|\\uD83E[\\uDC0C-\\uDC0F\\uDC48-\\uDC4F\\uDC5A-\\uDC5F\\uDC88-\\uDC8F\\uDCAE-\\uDCFF\\uDD0C-\\uDD3A\\uDD3C-\\uDD45\\uDD47-\\uDEFF]|\\uD83F[\\uDC00-\\uDFFD])",
        "$Extend": "(?:[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0902\\u093A\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0957\\u0962\\u0963\\u0981\\u09BC\\u09BE\\u09C1-\\u09C4\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01\\u0B3C\\u0B3E\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE\\u0BC0\\u0BCD\\u0BD7\\u0C00\\u0C04\\u0C3C\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81\\u0CBC\\u0CBF\\u0CC0\\u0CC2\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0D00\\u0D01\\u0D3B\\u0D3C\\u0D3E\\u0D41-\\u0D44\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81\\u0DCA\\u0DCF\\u0DD2-\\u0DD4\\u0DD6\\u0DDF\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4\\u17B5\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A1B\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B03\\u1B34-\\u1B3D\\u1B42-\\u1B44\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BAD\\u1BE6\\u1BE8\\u1BE9\\u1BED\\u1BEF-\\u1BF3\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1CF4\\u1CF8\\u1CF9\\u1DC0-\\u1DFF\\u200C\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA82C\\uA8C4\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA951\\uA953\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uA9BD\\uA9C0\\uA9E5\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAA7C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEC\\uAAED\\uAAF6\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFF9E\\uFF9F]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC01\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC81\\uDCB3-\\uDCB6\\uDCB9\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD2B\\uDD2D-\\uDD34\\uDD73\\uDD80\\uDD81\\uDDB6-\\uDDBE\\uDDC0\\uDDC9-\\uDDCC\\uDDCF\\uDE2F-\\uDE31\\uDE34-\\uDE37\\uDE3E\\uDE41\\uDEDF\\uDEE3-\\uDEEA\\uDF00\\uDF01\\uDF3B\\uDF3C\\uDF3E\\uDF40\\uDF4D\\uDF57\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8\\uDFBB-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFC9\\uDFCE-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC38-\\uDC3F\\uDC42-\\uDC44\\uDC46\\uDC5E\\uDCB0\\uDCB3-\\uDCB8\\uDCBA\\uDCBD\\uDCBF\\uDCC0\\uDCC2\\uDCC3\\uDDAF\\uDDB2-\\uDDB5\\uDDBC\\uDDBD\\uDDBF\\uDDC0\\uDDDC\\uDDDD\\uDE33-\\uDE3A\\uDE3D\\uDE3F\\uDE40\\uDEAB\\uDEAD\\uDEB0-\\uDEB7\\uDF1D\\uDF1F\\uDF22-\\uDF25\\uDF27-\\uDF2B]|\\uD806[\\uDC2F-\\uDC37\\uDC39\\uDC3A\\uDD30\\uDD3B-\\uDD3E\\uDD43\\uDDD4-\\uDDD7\\uDDDA\\uDDDB\\uDDE0\\uDE01-\\uDE0A\\uDE33-\\uDE38\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE56\\uDE59-\\uDE5B\\uDE8A-\\uDE96\\uDE98\\uDE99]|\\uD807[\\uDC30-\\uDC36\\uDC38-\\uDC3D\\uDC3F\\uDC92-\\uDCA7\\uDCAA-\\uDCB0\\uDCB2\\uDCB3\\uDCB5\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD90\\uDD91\\uDD95\\uDD97\\uDEF3\\uDEF4\\uDF00\\uDF01\\uDF36-\\uDF3A\\uDF40-\\uDF42\\uDF5A]|\\uD80D[\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD29\\uDD2D-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
        "$L": "[\\u1100-\\u115F\\uA960-\\uA97C]",
        "$LF": "\\n",
        "$LV": "[\\uAC00\\uAC1C\\uAC38\\uAC54\\uAC70\\uAC8C\\uACA8\\uACC4\\uACE0\\uACFC\\uAD18\\uAD34\\uAD50\\uAD6C\\uAD88\\uADA4\\uADC0\\uADDC\\uADF8\\uAE14\\uAE30\\uAE4C\\uAE68\\uAE84\\uAEA0\\uAEBC\\uAED8\\uAEF4\\uAF10\\uAF2C\\uAF48\\uAF64\\uAF80\\uAF9C\\uAFB8\\uAFD4\\uAFF0\\uB00C\\uB028\\uB044\\uB060\\uB07C\\uB098\\uB0B4\\uB0D0\\uB0EC\\uB108\\uB124\\uB140\\uB15C\\uB178\\uB194\\uB1B0\\uB1CC\\uB1E8\\uB204\\uB220\\uB23C\\uB258\\uB274\\uB290\\uB2AC\\uB2C8\\uB2E4\\uB300\\uB31C\\uB338\\uB354\\uB370\\uB38C\\uB3A8\\uB3C4\\uB3E0\\uB3FC\\uB418\\uB434\\uB450\\uB46C\\uB488\\uB4A4\\uB4C0\\uB4DC\\uB4F8\\uB514\\uB530\\uB54C\\uB568\\uB584\\uB5A0\\uB5BC\\uB5D8\\uB5F4\\uB610\\uB62C\\uB648\\uB664\\uB680\\uB69C\\uB6B8\\uB6D4\\uB6F0\\uB70C\\uB728\\uB744\\uB760\\uB77C\\uB798\\uB7B4\\uB7D0\\uB7EC\\uB808\\uB824\\uB840\\uB85C\\uB878\\uB894\\uB8B0\\uB8CC\\uB8E8\\uB904\\uB920\\uB93C\\uB958\\uB974\\uB990\\uB9AC\\uB9C8\\uB9E4\\uBA00\\uBA1C\\uBA38\\uBA54\\uBA70\\uBA8C\\uBAA8\\uBAC4\\uBAE0\\uBAFC\\uBB18\\uBB34\\uBB50\\uBB6C\\uBB88\\uBBA4\\uBBC0\\uBBDC\\uBBF8\\uBC14\\uBC30\\uBC4C\\uBC68\\uBC84\\uBCA0\\uBCBC\\uBCD8\\uBCF4\\uBD10\\uBD2C\\uBD48\\uBD64\\uBD80\\uBD9C\\uBDB8\\uBDD4\\uBDF0\\uBE0C\\uBE28\\uBE44\\uBE60\\uBE7C\\uBE98\\uBEB4\\uBED0\\uBEEC\\uBF08\\uBF24\\uBF40\\uBF5C\\uBF78\\uBF94\\uBFB0\\uBFCC\\uBFE8\\uC004\\uC020\\uC03C\\uC058\\uC074\\uC090\\uC0AC\\uC0C8\\uC0E4\\uC100\\uC11C\\uC138\\uC154\\uC170\\uC18C\\uC1A8\\uC1C4\\uC1E0\\uC1FC\\uC218\\uC234\\uC250\\uC26C\\uC288\\uC2A4\\uC2C0\\uC2DC\\uC2F8\\uC314\\uC330\\uC34C\\uC368\\uC384\\uC3A0\\uC3BC\\uC3D8\\uC3F4\\uC410\\uC42C\\uC448\\uC464\\uC480\\uC49C\\uC4B8\\uC4D4\\uC4F0\\uC50C\\uC528\\uC544\\uC560\\uC57C\\uC598\\uC5B4\\uC5D0\\uC5EC\\uC608\\uC624\\uC640\\uC65C\\uC678\\uC694\\uC6B0\\uC6CC\\uC6E8\\uC704\\uC720\\uC73C\\uC758\\uC774\\uC790\\uC7AC\\uC7C8\\uC7E4\\uC800\\uC81C\\uC838\\uC854\\uC870\\uC88C\\uC8A8\\uC8C4\\uC8E0\\uC8FC\\uC918\\uC934\\uC950\\uC96C\\uC988\\uC9A4\\uC9C0\\uC9DC\\uC9F8\\uCA14\\uCA30\\uCA4C\\uCA68\\uCA84\\uCAA0\\uCABC\\uCAD8\\uCAF4\\uCB10\\uCB2C\\uCB48\\uCB64\\uCB80\\uCB9C\\uCBB8\\uCBD4\\uCBF0\\uCC0C\\uCC28\\uCC44\\uCC60\\uCC7C\\uCC98\\uCCB4\\uCCD0\\uCCEC\\uCD08\\uCD24\\uCD40\\uCD5C\\uCD78\\uCD94\\uCDB0\\uCDCC\\uCDE8\\uCE04\\uCE20\\uCE3C\\uCE58\\uCE74\\uCE90\\uCEAC\\uCEC8\\uCEE4\\uCF00\\uCF1C\\uCF38\\uCF54\\uCF70\\uCF8C\\uCFA8\\uCFC4\\uCFE0\\uCFFC\\uD018\\uD034\\uD050\\uD06C\\uD088\\uD0A4\\uD0C0\\uD0DC\\uD0F8\\uD114\\uD130\\uD14C\\uD168\\uD184\\uD1A0\\uD1BC\\uD1D8\\uD1F4\\uD210\\uD22C\\uD248\\uD264\\uD280\\uD29C\\uD2B8\\uD2D4\\uD2F0\\uD30C\\uD328\\uD344\\uD360\\uD37C\\uD398\\uD3B4\\uD3D0\\uD3EC\\uD408\\uD424\\uD440\\uD45C\\uD478\\uD494\\uD4B0\\uD4CC\\uD4E8\\uD504\\uD520\\uD53C\\uD558\\uD574\\uD590\\uD5AC\\uD5C8\\uD5E4\\uD600\\uD61C\\uD638\\uD654\\uD670\\uD68C\\uD6A8\\uD6C4\\uD6E0\\uD6FC\\uD718\\uD734\\uD750\\uD76C\\uD788]",
        "$LVT": "[\\uAC01-\\uAC1B\\uAC1D-\\uAC37\\uAC39-\\uAC53\\uAC55-\\uAC6F\\uAC71-\\uAC8B\\uAC8D-\\uACA7\\uACA9-\\uACC3\\uACC5-\\uACDF\\uACE1-\\uACFB\\uACFD-\\uAD17\\uAD19-\\uAD33\\uAD35-\\uAD4F\\uAD51-\\uAD6B\\uAD6D-\\uAD87\\uAD89-\\uADA3\\uADA5-\\uADBF\\uADC1-\\uADDB\\uADDD-\\uADF7\\uADF9-\\uAE13\\uAE15-\\uAE2F\\uAE31-\\uAE4B\\uAE4D-\\uAE67\\uAE69-\\uAE83\\uAE85-\\uAE9F\\uAEA1-\\uAEBB\\uAEBD-\\uAED7\\uAED9-\\uAEF3\\uAEF5-\\uAF0F\\uAF11-\\uAF2B\\uAF2D-\\uAF47\\uAF49-\\uAF63\\uAF65-\\uAF7F\\uAF81-\\uAF9B\\uAF9D-\\uAFB7\\uAFB9-\\uAFD3\\uAFD5-\\uAFEF\\uAFF1-\\uB00B\\uB00D-\\uB027\\uB029-\\uB043\\uB045-\\uB05F\\uB061-\\uB07B\\uB07D-\\uB097\\uB099-\\uB0B3\\uB0B5-\\uB0CF\\uB0D1-\\uB0EB\\uB0ED-\\uB107\\uB109-\\uB123\\uB125-\\uB13F\\uB141-\\uB15B\\uB15D-\\uB177\\uB179-\\uB193\\uB195-\\uB1AF\\uB1B1-\\uB1CB\\uB1CD-\\uB1E7\\uB1E9-\\uB203\\uB205-\\uB21F\\uB221-\\uB23B\\uB23D-\\uB257\\uB259-\\uB273\\uB275-\\uB28F\\uB291-\\uB2AB\\uB2AD-\\uB2C7\\uB2C9-\\uB2E3\\uB2E5-\\uB2FF\\uB301-\\uB31B\\uB31D-\\uB337\\uB339-\\uB353\\uB355-\\uB36F\\uB371-\\uB38B\\uB38D-\\uB3A7\\uB3A9-\\uB3C3\\uB3C5-\\uB3DF\\uB3E1-\\uB3FB\\uB3FD-\\uB417\\uB419-\\uB433\\uB435-\\uB44F\\uB451-\\uB46B\\uB46D-\\uB487\\uB489-\\uB4A3\\uB4A5-\\uB4BF\\uB4C1-\\uB4DB\\uB4DD-\\uB4F7\\uB4F9-\\uB513\\uB515-\\uB52F\\uB531-\\uB54B\\uB54D-\\uB567\\uB569-\\uB583\\uB585-\\uB59F\\uB5A1-\\uB5BB\\uB5BD-\\uB5D7\\uB5D9-\\uB5F3\\uB5F5-\\uB60F\\uB611-\\uB62B\\uB62D-\\uB647\\uB649-\\uB663\\uB665-\\uB67F\\uB681-\\uB69B\\uB69D-\\uB6B7\\uB6B9-\\uB6D3\\uB6D5-\\uB6EF\\uB6F1-\\uB70B\\uB70D-\\uB727\\uB729-\\uB743\\uB745-\\uB75F\\uB761-\\uB77B\\uB77D-\\uB797\\uB799-\\uB7B3\\uB7B5-\\uB7CF\\uB7D1-\\uB7EB\\uB7ED-\\uB807\\uB809-\\uB823\\uB825-\\uB83F\\uB841-\\uB85B\\uB85D-\\uB877\\uB879-\\uB893\\uB895-\\uB8AF\\uB8B1-\\uB8CB\\uB8CD-\\uB8E7\\uB8E9-\\uB903\\uB905-\\uB91F\\uB921-\\uB93B\\uB93D-\\uB957\\uB959-\\uB973\\uB975-\\uB98F\\uB991-\\uB9AB\\uB9AD-\\uB9C7\\uB9C9-\\uB9E3\\uB9E5-\\uB9FF\\uBA01-\\uBA1B\\uBA1D-\\uBA37\\uBA39-\\uBA53\\uBA55-\\uBA6F\\uBA71-\\uBA8B\\uBA8D-\\uBAA7\\uBAA9-\\uBAC3\\uBAC5-\\uBADF\\uBAE1-\\uBAFB\\uBAFD-\\uBB17\\uBB19-\\uBB33\\uBB35-\\uBB4F\\uBB51-\\uBB6B\\uBB6D-\\uBB87\\uBB89-\\uBBA3\\uBBA5-\\uBBBF\\uBBC1-\\uBBDB\\uBBDD-\\uBBF7\\uBBF9-\\uBC13\\uBC15-\\uBC2F\\uBC31-\\uBC4B\\uBC4D-\\uBC67\\uBC69-\\uBC83\\uBC85-\\uBC9F\\uBCA1-\\uBCBB\\uBCBD-\\uBCD7\\uBCD9-\\uBCF3\\uBCF5-\\uBD0F\\uBD11-\\uBD2B\\uBD2D-\\uBD47\\uBD49-\\uBD63\\uBD65-\\uBD7F\\uBD81-\\uBD9B\\uBD9D-\\uBDB7\\uBDB9-\\uBDD3\\uBDD5-\\uBDEF\\uBDF1-\\uBE0B\\uBE0D-\\uBE27\\uBE29-\\uBE43\\uBE45-\\uBE5F\\uBE61-\\uBE7B\\uBE7D-\\uBE97\\uBE99-\\uBEB3\\uBEB5-\\uBECF\\uBED1-\\uBEEB\\uBEED-\\uBF07\\uBF09-\\uBF23\\uBF25-\\uBF3F\\uBF41-\\uBF5B\\uBF5D-\\uBF77\\uBF79-\\uBF93\\uBF95-\\uBFAF\\uBFB1-\\uBFCB\\uBFCD-\\uBFE7\\uBFE9-\\uC003\\uC005-\\uC01F\\uC021-\\uC03B\\uC03D-\\uC057\\uC059-\\uC073\\uC075-\\uC08F\\uC091-\\uC0AB\\uC0AD-\\uC0C7\\uC0C9-\\uC0E3\\uC0E5-\\uC0FF\\uC101-\\uC11B\\uC11D-\\uC137\\uC139-\\uC153\\uC155-\\uC16F\\uC171-\\uC18B\\uC18D-\\uC1A7\\uC1A9-\\uC1C3\\uC1C5-\\uC1DF\\uC1E1-\\uC1FB\\uC1FD-\\uC217\\uC219-\\uC233\\uC235-\\uC24F\\uC251-\\uC26B\\uC26D-\\uC287\\uC289-\\uC2A3\\uC2A5-\\uC2BF\\uC2C1-\\uC2DB\\uC2DD-\\uC2F7\\uC2F9-\\uC313\\uC315-\\uC32F\\uC331-\\uC34B\\uC34D-\\uC367\\uC369-\\uC383\\uC385-\\uC39F\\uC3A1-\\uC3BB\\uC3BD-\\uC3D7\\uC3D9-\\uC3F3\\uC3F5-\\uC40F\\uC411-\\uC42B\\uC42D-\\uC447\\uC449-\\uC463\\uC465-\\uC47F\\uC481-\\uC49B\\uC49D-\\uC4B7\\uC4B9-\\uC4D3\\uC4D5-\\uC4EF\\uC4F1-\\uC50B\\uC50D-\\uC527\\uC529-\\uC543\\uC545-\\uC55F\\uC561-\\uC57B\\uC57D-\\uC597\\uC599-\\uC5B3\\uC5B5-\\uC5CF\\uC5D1-\\uC5EB\\uC5ED-\\uC607\\uC609-\\uC623\\uC625-\\uC63F\\uC641-\\uC65B\\uC65D-\\uC677\\uC679-\\uC693\\uC695-\\uC6AF\\uC6B1-\\uC6CB\\uC6CD-\\uC6E7\\uC6E9-\\uC703\\uC705-\\uC71F\\uC721-\\uC73B\\uC73D-\\uC757\\uC759-\\uC773\\uC775-\\uC78F\\uC791-\\uC7AB\\uC7AD-\\uC7C7\\uC7C9-\\uC7E3\\uC7E5-\\uC7FF\\uC801-\\uC81B\\uC81D-\\uC837\\uC839-\\uC853\\uC855-\\uC86F\\uC871-\\uC88B\\uC88D-\\uC8A7\\uC8A9-\\uC8C3\\uC8C5-\\uC8DF\\uC8E1-\\uC8FB\\uC8FD-\\uC917\\uC919-\\uC933\\uC935-\\uC94F\\uC951-\\uC96B\\uC96D-\\uC987\\uC989-\\uC9A3\\uC9A5-\\uC9BF\\uC9C1-\\uC9DB\\uC9DD-\\uC9F7\\uC9F9-\\uCA13\\uCA15-\\uCA2F\\uCA31-\\uCA4B\\uCA4D-\\uCA67\\uCA69-\\uCA83\\uCA85-\\uCA9F\\uCAA1-\\uCABB\\uCABD-\\uCAD7\\uCAD9-\\uCAF3\\uCAF5-\\uCB0F\\uCB11-\\uCB2B\\uCB2D-\\uCB47\\uCB49-\\uCB63\\uCB65-\\uCB7F\\uCB81-\\uCB9B\\uCB9D-\\uCBB7\\uCBB9-\\uCBD3\\uCBD5-\\uCBEF\\uCBF1-\\uCC0B\\uCC0D-\\uCC27\\uCC29-\\uCC43\\uCC45-\\uCC5F\\uCC61-\\uCC7B\\uCC7D-\\uCC97\\uCC99-\\uCCB3\\uCCB5-\\uCCCF\\uCCD1-\\uCCEB\\uCCED-\\uCD07\\uCD09-\\uCD23\\uCD25-\\uCD3F\\uCD41-\\uCD5B\\uCD5D-\\uCD77\\uCD79-\\uCD93\\uCD95-\\uCDAF\\uCDB1-\\uCDCB\\uCDCD-\\uCDE7\\uCDE9-\\uCE03\\uCE05-\\uCE1F\\uCE21-\\uCE3B\\uCE3D-\\uCE57\\uCE59-\\uCE73\\uCE75-\\uCE8F\\uCE91-\\uCEAB\\uCEAD-\\uCEC7\\uCEC9-\\uCEE3\\uCEE5-\\uCEFF\\uCF01-\\uCF1B\\uCF1D-\\uCF37\\uCF39-\\uCF53\\uCF55-\\uCF6F\\uCF71-\\uCF8B\\uCF8D-\\uCFA7\\uCFA9-\\uCFC3\\uCFC5-\\uCFDF\\uCFE1-\\uCFFB\\uCFFD-\\uD017\\uD019-\\uD033\\uD035-\\uD04F\\uD051-\\uD06B\\uD06D-\\uD087\\uD089-\\uD0A3\\uD0A5-\\uD0BF\\uD0C1-\\uD0DB\\uD0DD-\\uD0F7\\uD0F9-\\uD113\\uD115-\\uD12F\\uD131-\\uD14B\\uD14D-\\uD167\\uD169-\\uD183\\uD185-\\uD19F\\uD1A1-\\uD1BB\\uD1BD-\\uD1D7\\uD1D9-\\uD1F3\\uD1F5-\\uD20F\\uD211-\\uD22B\\uD22D-\\uD247\\uD249-\\uD263\\uD265-\\uD27F\\uD281-\\uD29B\\uD29D-\\uD2B7\\uD2B9-\\uD2D3\\uD2D5-\\uD2EF\\uD2F1-\\uD30B\\uD30D-\\uD327\\uD329-\\uD343\\uD345-\\uD35F\\uD361-\\uD37B\\uD37D-\\uD397\\uD399-\\uD3B3\\uD3B5-\\uD3CF\\uD3D1-\\uD3EB\\uD3ED-\\uD407\\uD409-\\uD423\\uD425-\\uD43F\\uD441-\\uD45B\\uD45D-\\uD477\\uD479-\\uD493\\uD495-\\uD4AF\\uD4B1-\\uD4CB\\uD4CD-\\uD4E7\\uD4E9-\\uD503\\uD505-\\uD51F\\uD521-\\uD53B\\uD53D-\\uD557\\uD559-\\uD573\\uD575-\\uD58F\\uD591-\\uD5AB\\uD5AD-\\uD5C7\\uD5C9-\\uD5E3\\uD5E5-\\uD5FF\\uD601-\\uD61B\\uD61D-\\uD637\\uD639-\\uD653\\uD655-\\uD66F\\uD671-\\uD68B\\uD68D-\\uD6A7\\uD6A9-\\uD6C3\\uD6C5-\\uD6DF\\uD6E1-\\uD6FB\\uD6FD-\\uD717\\uD719-\\uD733\\uD735-\\uD74F\\uD751-\\uD76B\\uD76D-\\uD787\\uD789-\\uD7A3]",
        "$LinkingConsonant": "[\\u0915-\\u0939\\u0958-\\u095F\\u0978-\\u097F\\u0995-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09DC\\u09DD\\u09DF\\u09F0\\u09F1\\u0A95-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0AF9\\u0B15-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B5C\\u0B5D\\u0B5F\\u0B71\\u0C15-\\u0C28\\u0C2A-\\u0C39\\u0C58-\\u0C5A\\u0D15-\\u0D3A]",
        "$Prepend": "(?:[\\u0600-\\u0605\\u06DD\\u070F\\u0890\\u0891\\u08E2\\u0D4E]|\\uD804[\\uDCBD\\uDCCD\\uDDC2\\uDDC3\\uDFD1]|\\uD806[\\uDD3F\\uDD41\\uDE3A\\uDE84-\\uDE89]|\\uD807[\\uDD46\\uDF02])",
        "$RI": "(?:\\uD83C[\\uDDE6-\\uDDFF])",
        "$SpacingMark": "(?:[\\u0903\\u093B\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u094F\\u0982\\u0983\\u09BF\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC1\\u0CC3\\u0CC4\\u0CF3\\u0D02\\u0D03\\u0D3F\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D82\\u0D83\\u0DD0\\u0DD1\\u0DD8-\\u0DDE\\u0DF2\\u0DF3\\u0E33\\u0EB3\\u0F3E\\u0F3F\\u0F7F\\u1031\\u103B\\u103C\\u1056\\u1057\\u1084\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u1A19\\u1A1A\\u1A55\\u1A57\\u1A6D-\\u1A72\\u1B04\\u1B3E-\\u1B41\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BE7\\u1BEA-\\u1BEC\\u1BEE\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF7\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BE\\uA9BF\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAAEB\\uAAEE\\uAAEF\\uAAF5\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]|\\uD804[\\uDC00\\uDC02\\uDC82\\uDCB0-\\uDCB2\\uDCB7\\uDCB8\\uDD2C\\uDD45\\uDD46\\uDD82\\uDDB3-\\uDDB5\\uDDBF\\uDDCE\\uDE2C-\\uDE2E\\uDE32\\uDE33\\uDEE0-\\uDEE2\\uDF02\\uDF03\\uDF3F\\uDF41-\\uDF44\\uDF47\\uDF48\\uDF4B\\uDF4C\\uDF62\\uDF63\\uDFB9\\uDFBA\\uDFCA\\uDFCC\\uDFCD]|\\uD805[\\uDC35-\\uDC37\\uDC40\\uDC41\\uDC45\\uDCB1\\uDCB2\\uDCB9\\uDCBB\\uDCBC\\uDCBE\\uDCC1\\uDDB0\\uDDB1\\uDDB8-\\uDDBB\\uDDBE\\uDE30-\\uDE32\\uDE3B\\uDE3C\\uDE3E\\uDEAC\\uDEAE\\uDEAF\\uDF1E\\uDF26]|\\uD806[\\uDC2C-\\uDC2E\\uDC38\\uDD31-\\uDD35\\uDD37\\uDD38\\uDD40\\uDD42\\uDDD1-\\uDDD3\\uDDDC-\\uDDDF\\uDDE4\\uDE39\\uDE57\\uDE58\\uDE97]|\\uD807[\\uDC2F\\uDC3E\\uDCA9\\uDCB1\\uDCB4\\uDD8A-\\uDD8E\\uDD93\\uDD94\\uDD96\\uDEF5\\uDEF6\\uDF03\\uDF34\\uDF35\\uDF3E\\uDF3F]|\\uD818[\\uDD2A-\\uDD2C]|\\uD81B[\\uDF51-\\uDF87])",
        "$T": "[\\u11A8-\\u11FF\\uD7CB-\\uD7FB]",
        "$V": "(?:[\\u1160-\\u11A7\\uD7B0-\\uD7C6]|\\uD81B[\\uDD63\\uDD67-\\uDD6A])",
        "$ZWJ": "\\u200D"
      }
    },
    "sentence": {
      "segmentRules": {
        "10": {
          "after": "($Sp|$ParaSep)",
          "before": "$SATerm$Close*$Sp*",
          "breaks": false
        },
        "11": {
          "before": "$SATerm$Close*$Sp*$ParaSep?",
          "breaks": true
        },
        "3": {
          "after": "$LF",
          "before": "$CR",
          "breaks": false
        },
        "4": {
          "before": "$ParaSep",
          "breaks": true
        },
        "5": {
          "after": "(?:$Format|$Extend)",
          "breaks": false
        },
        "6": {
          "after": "$Numeric",
          "before": "$ATerm",
          "breaks": false
        },
        "7": {
          "after": "$Upper",
          "before": "($Upper|$Lower)$ATerm",
          "breaks": false
        },
        "8": {
          "after": "$NotPreLower_*$Lower",
          "before": "$ATerm$Close*$Sp*",
          "breaks": false
        },
        "8.1": {
          "after": "($SContinue|$SATerm)",
          "before": "$SATerm$Close*$Sp*",
          "breaks": false
        },
        "9": {
          "after": "($Close|$Sp|$ParaSep)",
          "before": "$SATerm$Close*",
          "breaks": false
        },
        "998": {
          "after": "$Any",
          "breaks": false
        }
      },
      "suppressions": [],
      "variables": {
        "$ATerm": "([\\.\\u2024\\uFE52\\uFF0E](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$Any": "(?:[\\0-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])",
        "$CR": "\\r",
        "$Close": `((?:["'-\\)\\[\\]\\{\\}\\xAB\\xBB\\u0F3A-\\u0F3D\\u169B\\u169C\\u2018-\\u201F\\u2039\\u203A\\u2045\\u2046\\u207D\\u207E\\u208D\\u208E\\u2308-\\u230B\\u2329\\u232A\\u275B-\\u2760\\u2768-\\u2775\\u27C5\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD\\u2E00-\\u2E0D\\u2E1C\\u2E1D\\u2E20-\\u2E29\\u2E42\\u2E55-\\u2E5C\\u3008-\\u3011\\u3014-\\u301B\\u301D-\\u301F\\uFD3E\\uFD3F\\uFE17\\uFE18\\uFE35-\\uFE44\\uFE47\\uFE48\\uFE59-\\uFE5E\\uFF08\\uFF09\\uFF3B\\uFF3D\\uFF5B\\uFF5D\\uFF5F\\uFF60\\uFF62\\uFF63]|\\uD83D[\\uDE76-\\uDE78])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)`,
        "$Extend": "(?:[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C\\u200D\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFF9E\\uFF9F]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
        "$FE": "(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
        "$Format": "(?:[\\xAD\\u061C\\u070F\\u180E\\u200B\\u200E\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\uFEFF\\uFFF9-\\uFFFB]|\\uD80D[\\uDC30-\\uDC3F]|\\uD82F[\\uDCA0-\\uDCA3]|\\uD834[\\uDD73-\\uDD7A]|\\uDB40\\uDC01)",
        "$LF": "\\n",
        "$Lower": "((?:[a-z\\xAA\\xB5\\xBA\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02B8\\u02C0\\u02C1\\u02E0-\\u02E4\\u0371\\u0373\\u0377\\u037A-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0560-\\u0588\\u10FC\\u13F8-\\u13FD\\u1C80-\\u1C88\\u1C8A\\u1D00-\\u1DBF\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u2071\\u207F\\u2090-\\u209C\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2170-\\u217F\\u2184\\u24D0-\\u24E9\\u2C30-\\u2C5F\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7D\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B-\\uA69D\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7AF\\uA7B5\\uA7B7\\uA7B9\\uA7BB\\uA7BD\\uA7BF\\uA7C1\\uA7C3\\uA7C8\\uA7CA\\uA7CD\\uA7D1\\uA7D3\\uA7D5\\uA7D7\\uA7D9\\uA7DB\\uA7F2-\\uA7F4\\uA7F6\\uA7F8-\\uA7FA\\uAB30-\\uAB5A\\uAB5C-\\uAB69\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A]|\\uD801[\\uDC28-\\uDC4F\\uDCD8-\\uDCFB\\uDD97-\\uDDA1\\uDDA3-\\uDDB1\\uDDB3-\\uDDB9\\uDDBB\\uDDBC\\uDF80\\uDF83-\\uDF85\\uDF87-\\uDFB0\\uDFB2-\\uDFBA]|\\uD803[\\uDCC0-\\uDCF2\\uDD70-\\uDD85]|\\uD806[\\uDCC0-\\uDCDF]|\\uD81B[\\uDE60-\\uDE7F]|\\uD835[\\uDC1A-\\uDC33\\uDC4E-\\uDC54\\uDC56-\\uDC67\\uDC82-\\uDC9B\\uDCB6-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDCCF\\uDCEA-\\uDD03\\uDD1E-\\uDD37\\uDD52-\\uDD6B\\uDD86-\\uDD9F\\uDDBA-\\uDDD3\\uDDEE-\\uDE07\\uDE22-\\uDE3B\\uDE56-\\uDE6F\\uDE8A-\\uDEA5\\uDEC2-\\uDEDA\\uDEDC-\\uDEE1\\uDEFC-\\uDF14\\uDF16-\\uDF1B\\uDF36-\\uDF4E\\uDF50-\\uDF55\\uDF70-\\uDF88\\uDF8A-\\uDF8F\\uDFAA-\\uDFC2\\uDFC4-\\uDFC9\\uDFCB]|\\uD837[\\uDF00-\\uDF09\\uDF0B-\\uDF1E\\uDF25-\\uDF2A]|\\uD838[\\uDC30-\\uDC6D]|\\uD83A[\\uDD22-\\uDD43])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$NotPreLower_": '(?:[\\0-\\t\\x0B\\f\\x0E- "-\\x2D\\/->@\\[-`\\{-\\x84\\x86-\\xA9\\xAB-\\xB4\\xB6-\\xB9\\xBB-\\xBF\\xD7\\xF7\\u02C2-\\u02C5\\u02D2-\\u02DF\\u02E5-\\u02EB\\u02ED\\u02EF-\\u036F\\u0375\\u0378\\u0379\\u037E\\u0380-\\u0385\\u0387\\u038B\\u038D\\u03A2\\u03F6\\u0482-\\u0489\\u0530\\u0557\\u0558\\u055A-\\u055F\\u058A-\\u05CF\\u05EB-\\u05EE\\u05F4-\\u061C\\u064B-\\u066D\\u0670\\u06D6-\\u06E4\\u06E7-\\u06ED\\u06F0-\\u06F9\\u06FD\\u06FE\\u0703-\\u070F\\u0711\\u0730-\\u074C\\u07A6-\\u07B0\\u07B2-\\u07C9\\u07EB-\\u07F3\\u07F6-\\u07F8\\u07FB-\\u07FF\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u0836\\u0838\\u083A-\\u083C\\u083F\\u0859-\\u085F\\u086B-\\u086F\\u0888\\u088F-\\u089F\\u08CA-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0966-\\u0970\\u0981-\\u0984\\u098D\\u098E\\u0991\\u0992\\u09A9\\u09B1\\u09B3-\\u09B5\\u09BA-\\u09BC\\u09BE-\\u09CD\\u09CF-\\u09DB\\u09DE\\u09E2-\\u09EF\\u09F2-\\u09FB\\u09FD-\\u0A04\\u0A0B-\\u0A0E\\u0A11\\u0A12\\u0A29\\u0A31\\u0A34\\u0A37\\u0A3A-\\u0A58\\u0A5D\\u0A5F-\\u0A71\\u0A75-\\u0A84\\u0A8E\\u0A92\\u0AA9\\u0AB1\\u0AB4\\u0ABA-\\u0ABC\\u0ABE-\\u0ACF\\u0AD1-\\u0ADF\\u0AE2-\\u0AF8\\u0AFA-\\u0B04\\u0B0D\\u0B0E\\u0B11\\u0B12\\u0B29\\u0B31\\u0B34\\u0B3A-\\u0B3C\\u0B3E-\\u0B5B\\u0B5E\\u0B62-\\u0B70\\u0B72-\\u0B82\\u0B84\\u0B8B-\\u0B8D\\u0B91\\u0B96-\\u0B98\\u0B9B\\u0B9D\\u0BA0-\\u0BA2\\u0BA5-\\u0BA7\\u0BAB-\\u0BAD\\u0BBA-\\u0BCF\\u0BD1-\\u0C04\\u0C0D\\u0C11\\u0C29\\u0C3A-\\u0C3C\\u0C3E-\\u0C57\\u0C5B\\u0C5C\\u0C5E\\u0C5F\\u0C62-\\u0C7F\\u0C81-\\u0C84\\u0C8D\\u0C91\\u0CA9\\u0CB4\\u0CBA-\\u0CBC\\u0CBE-\\u0CDC\\u0CDF\\u0CE2-\\u0CF0\\u0CF3-\\u0D03\\u0D0D\\u0D11\\u0D3B\\u0D3C\\u0D3E-\\u0D4D\\u0D4F-\\u0D53\\u0D57-\\u0D5E\\u0D62-\\u0D79\\u0D80-\\u0D84\\u0D97-\\u0D99\\u0DB2\\u0DBC\\u0DBE\\u0DBF\\u0DC7-\\u0E00\\u0E31\\u0E34-\\u0E3F\\u0E47-\\u0E80\\u0E83\\u0E85\\u0E8B\\u0EA4\\u0EA6\\u0EB1\\u0EB4-\\u0EBC\\u0EBE\\u0EBF\\u0EC5\\u0EC7-\\u0EDB\\u0EE0-\\u0EFF\\u0F01-\\u0F3F\\u0F48\\u0F6D-\\u0F87\\u0F8D-\\u0FFF\\u102B-\\u103E\\u1040-\\u1049\\u104C-\\u104F\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F-\\u109F\\u10C6\\u10C8-\\u10CC\\u10CE\\u10CF\\u10FB\\u1249\\u124E\\u124F\\u1257\\u1259\\u125E\\u125F\\u1289\\u128E\\u128F\\u12B1\\u12B6\\u12B7\\u12BF\\u12C1\\u12C6\\u12C7\\u12D7\\u1311\\u1316\\u1317\\u135B-\\u1361\\u1363-\\u1366\\u1369-\\u137F\\u1390-\\u139F\\u13F6\\u13F7\\u13FE-\\u1400\\u166D\\u1680\\u169B-\\u169F\\u16EB-\\u16ED\\u16F9-\\u16FF\\u1712-\\u171E\\u1732-\\u1734\\u1737-\\u173F\\u1752-\\u175F\\u176D\\u1771-\\u177F\\u17B4-\\u17D3\\u17D6\\u17D8-\\u17DB\\u17DD-\\u1802\\u1804-\\u1808\\u180A-\\u181F\\u1879-\\u187F\\u1885\\u1886\\u18A9\\u18AB-\\u18AF\\u18F6-\\u18FF\\u191F-\\u1943\\u1946-\\u194F\\u196E\\u196F\\u1975-\\u197F\\u19AC-\\u19AF\\u19CA-\\u19FF\\u1A17-\\u1A1F\\u1A55-\\u1AA6\\u1AAC-\\u1B04\\u1B34-\\u1B44\\u1B4D\\u1B50-\\u1B59\\u1B5C\\u1B5D\\u1B60-\\u1B7C\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BB0-\\u1BB9\\u1BE6-\\u1BFF\\u1C24-\\u1C3A\\u1C3D-\\u1C4C\\u1C50-\\u1C59\\u1C8B-\\u1C8F\\u1CBB\\u1CBC\\u1CC0-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1CFB-\\u1CFF\\u1DC0-\\u1DFF\\u1F16\\u1F17\\u1F1E\\u1F1F\\u1F46\\u1F47\\u1F4E\\u1F4F\\u1F58\\u1F5A\\u1F5C\\u1F5E\\u1F7E\\u1F7F\\u1FB5\\u1FBD\\u1FBF-\\u1FC1\\u1FC5\\u1FCD-\\u1FCF\\u1FD4\\u1FD5\\u1FDC-\\u1FDF\\u1FED-\\u1FF1\\u1FF5\\u1FFD-\\u2023\\u2025-\\u2027\\u202A-\\u203B\\u203E-\\u2046\\u204A-\\u2070\\u2072-\\u207E\\u2080-\\u208F\\u209D-\\u2101\\u2103-\\u2106\\u2108\\u2109\\u2114\\u2116-\\u2118\\u211E-\\u2123\\u2125\\u2127\\u2129\\u212E\\u213A\\u213B\\u2140-\\u2144\\u214A-\\u214D\\u214F-\\u215F\\u2189-\\u24B5\\u24EA-\\u2BFF\\u2CE5-\\u2CEA\\u2CEF-\\u2CF1\\u2CF4-\\u2CF8\\u2CFC-\\u2CFF\\u2D26\\u2D28-\\u2D2C\\u2D2E\\u2D2F\\u2D68-\\u2D6E\\u2D70-\\u2D7F\\u2D97-\\u2D9F\\u2DA7\\u2DAF\\u2DB7\\u2DBF\\u2DC7\\u2DCF\\u2DD7\\u2DDF-\\u2E2D\\u2E30-\\u2E3B\\u2E3D-\\u2E52\\u2E55-\\u3001\\u3003\\u3004\\u3008-\\u3020\\u302A-\\u3030\\u3036\\u3037\\u303D-\\u3040\\u3097-\\u309C\\u30A0\\u30FB\\u3100-\\u3104\\u3130\\u318F-\\u319F\\u31C0-\\u31EF\\u3200-\\u33FF\\u4DC0-\\u4DFF\\uA48D-\\uA4CF\\uA4FE\\uA60D\\uA620-\\uA629\\uA62C-\\uA63F\\uA66F-\\uA67E\\uA69E\\uA69F\\uA6F0-\\uA6F2\\uA6F4-\\uA6F6\\uA6F8-\\uA716\\uA720\\uA721\\uA789\\uA78A\\uA7CE\\uA7CF\\uA7D2\\uA7D4\\uA7DD-\\uA7F1\\uA802\\uA806\\uA80B\\uA823-\\uA83F\\uA874\\uA875\\uA878-\\uA881\\uA8B4-\\uA8CD\\uA8D0-\\uA8F1\\uA8F8-\\uA8FA\\uA8FC\\uA8FF-\\uA909\\uA926-\\uA92E\\uA947-\\uA95F\\uA97D-\\uA983\\uA9B3-\\uA9C7\\uA9CA-\\uA9CE\\uA9D0-\\uA9DF\\uA9E5\\uA9F0-\\uA9F9\\uA9FF\\uAA29-\\uAA3F\\uAA43\\uAA4C-\\uAA5C\\uAA77-\\uAA79\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAC3-\\uAADA\\uAADE\\uAADF\\uAAEB-\\uAAEF\\uAAF5-\\uAB00\\uAB07\\uAB08\\uAB0F\\uAB10\\uAB17-\\uAB1F\\uAB27\\uAB2F\\uAB5B\\uAB6A-\\uAB6F\\uABE3-\\uABEA\\uABEC-\\uABFF\\uD7A4-\\uD7AF\\uD7C7-\\uD7CA\\uD7FC-\\uD7FF\\uE000-\\uF8FF\\uFA6E\\uFA6F\\uFADA-\\uFAFF\\uFB07-\\uFB12\\uFB18-\\uFB1C\\uFB1E\\uFB29\\uFB37\\uFB3D\\uFB3F\\uFB42\\uFB45\\uFBB2-\\uFBD2\\uFD3E-\\uFD4F\\uFD90\\uFD91\\uFDC8-\\uFDEF\\uFDFC-\\uFE11\\uFE13\\uFE14\\uFE17-\\uFE51\\uFE53-\\uFE55\\uFE58-\\uFE6F\\uFE75\\uFEFD-\\uFF00\\uFF02-\\uFF0D\\uFF0F-\\uFF1E\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF60\\uFF62-\\uFF65\\uFF9E\\uFF9F\\uFFBF-\\uFFC1\\uFFC8\\uFFC9\\uFFD0\\uFFD1\\uFFD8\\uFFD9\\uFFDD-\\uFFFF]|\\uD800[\\uDC0C\\uDC27\\uDC3B\\uDC3E\\uDC4E\\uDC4F\\uDC5E-\\uDC7F\\uDCFB-\\uDD3F\\uDD75-\\uDE7F\\uDE9D-\\uDE9F\\uDED1-\\uDEFF\\uDF20-\\uDF2C\\uDF4B-\\uDF4F\\uDF76-\\uDF7F\\uDF9E\\uDF9F\\uDFC4-\\uDFC7\\uDFD0\\uDFD6-\\uDFFF]|\\uD801[\\uDC9E-\\uDCAF\\uDCD4-\\uDCD7\\uDCFC-\\uDCFF\\uDD28-\\uDD2F\\uDD64-\\uDD6F\\uDD7B\\uDD8B\\uDD93\\uDD96\\uDDA2\\uDDB2\\uDDBA\\uDDBD-\\uDDBF\\uDDF4-\\uDDFF\\uDF37-\\uDF3F\\uDF56-\\uDF5F\\uDF68-\\uDF7F\\uDF86\\uDFB1\\uDFBB-\\uDFFF]|\\uD802[\\uDC06\\uDC07\\uDC09\\uDC36\\uDC39-\\uDC3B\\uDC3D\\uDC3E\\uDC56-\\uDC5F\\uDC77-\\uDC7F\\uDC9F-\\uDCDF\\uDCF3\\uDCF6-\\uDCFF\\uDD16-\\uDD1F\\uDD3A-\\uDD7F\\uDDB8-\\uDDBD\\uDDC0-\\uDDFF\\uDE01-\\uDE0F\\uDE14\\uDE18\\uDE36-\\uDE55\\uDE58-\\uDE5F\\uDE7D-\\uDE7F\\uDE9D-\\uDEBF\\uDEC8\\uDEE5-\\uDEFF\\uDF36-\\uDF3F\\uDF56-\\uDF5F\\uDF73-\\uDF7F\\uDF92-\\uDFFF]|\\uD803[\\uDC49-\\uDC7F\\uDCB3-\\uDCBF\\uDCF3-\\uDCFF\\uDD24-\\uDD49\\uDD66-\\uDD6E\\uDD86-\\uDE7F\\uDEAA-\\uDEAF\\uDEB2-\\uDEC1\\uDEC5-\\uDEFF\\uDF1D-\\uDF26\\uDF28-\\uDF2F\\uDF46-\\uDF54\\uDF5A-\\uDF6F\\uDF82-\\uDF85\\uDF8A-\\uDFAF\\uDFC5-\\uDFDF\\uDFF7-\\uDFFF]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC49-\\uDC70\\uDC73\\uDC74\\uDC76-\\uDC82\\uDCB0-\\uDCBD\\uDCC2-\\uDCCF\\uDCE9-\\uDD02\\uDD27-\\uDD40\\uDD45\\uDD46\\uDD48-\\uDD4F\\uDD73-\\uDD75\\uDD77-\\uDD82\\uDDB3-\\uDDC0\\uDDC7-\\uDDCC\\uDDCE-\\uDDD9\\uDDDB\\uDDDD\\uDDE0-\\uDDFF\\uDE12\\uDE2C-\\uDE37\\uDE3A\\uDE3D\\uDE3E\\uDE41-\\uDE7F\\uDE87\\uDE89\\uDE8E\\uDE9E\\uDEAA-\\uDEAF\\uDEDF-\\uDF04\\uDF0D\\uDF0E\\uDF11\\uDF12\\uDF29\\uDF31\\uDF34\\uDF3A-\\uDF3C\\uDF3E-\\uDF4F\\uDF51-\\uDF5C\\uDF62-\\uDF7F\\uDF8A\\uDF8C\\uDF8D\\uDF8F\\uDFB6\\uDFB8-\\uDFD0\\uDFD2\\uDFD6-\\uDFFF]|\\uD805[\\uDC35-\\uDC46\\uDC4D-\\uDC5E\\uDC62-\\uDC7F\\uDCB0-\\uDCC3\\uDCC6\\uDCC8-\\uDD7F\\uDDAF-\\uDDC1\\uDDC4-\\uDDC8\\uDDDC-\\uDDFF\\uDE30-\\uDE40\\uDE43\\uDE45-\\uDE7F\\uDEAB-\\uDEB7\\uDEB9-\\uDEFF\\uDF1B-\\uDF3B\\uDF3F\\uDF47-\\uDFFF]|\\uD806[\\uDC2C-\\uDC9F\\uDCE0-\\uDCFE\\uDD07\\uDD08\\uDD0A\\uDD0B\\uDD14\\uDD17\\uDD30-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDD45\\uDD47-\\uDD9F\\uDDA8\\uDDA9\\uDDD1-\\uDDE0\\uDDE2\\uDDE4-\\uDDFF\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE41\\uDE44-\\uDE4F\\uDE51-\\uDE5B\\uDE8A-\\uDE9A\\uDE9E-\\uDEAF\\uDEF9-\\uDFBF\\uDFE1-\\uDFFF]|\\uD807[\\uDC09\\uDC2F-\\uDC3F\\uDC43-\\uDC71\\uDC90-\\uDCFF\\uDD07\\uDD0A\\uDD31-\\uDD45\\uDD47-\\uDD5F\\uDD66\\uDD69\\uDD8A-\\uDD97\\uDD99-\\uDEDF\\uDEF3-\\uDEF6\\uDEF9-\\uDF01\\uDF03\\uDF11\\uDF34-\\uDF42\\uDF45-\\uDFAF\\uDFB1-\\uDFFF]|\\uD808[\\uDF9A-\\uDFFF]|\\uD809[\\uDC6F-\\uDC7F\\uDD44-\\uDFFF]|[\\uD80A\\uD812-\\uD817\\uD819\\uD824-\\uD82A\\uD82D\\uD82E\\uD830-\\uD834\\uD83D-\\uD83F\\uD87C\\uD87D\\uD87F\\uD889-\\uDBFF][\\uDC00-\\uDFFF]|\\uD80B[\\uDC00-\\uDF8F\\uDFF1-\\uDFFF]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC5F]|\\uD810[\\uDFFB-\\uDFFF]|\\uD811[\\uDE47-\\uDFFF]|\\uD818[\\uDC00-\\uDCFF\\uDD1E-\\uDFFF]|\\uD81A[\\uDE39-\\uDE3F\\uDE5F-\\uDE6D\\uDEBF-\\uDECF\\uDEEE-\\uDEF4\\uDEF6-\\uDEFF\\uDF30-\\uDF36\\uDF39-\\uDF3F\\uDF45-\\uDF62\\uDF78-\\uDF7C\\uDF90-\\uDFFF]|\\uD81B[\\uDC00-\\uDD3F\\uDD6D\\uDD70-\\uDE3F\\uDE80-\\uDE97\\uDE99-\\uDEFF\\uDF4B-\\uDF4F\\uDF51-\\uDF92\\uDFA0-\\uDFDF\\uDFE2\\uDFE4-\\uDFFF]|\\uD821[\\uDFF8-\\uDFFF]|\\uD823[\\uDCD6-\\uDCFE\\uDD09-\\uDFFF]|\\uD82B[\\uDC00-\\uDFEF\\uDFF4\\uDFFC\\uDFFF]|\\uD82C[\\uDD23-\\uDD31\\uDD33-\\uDD4F\\uDD53\\uDD54\\uDD56-\\uDD63\\uDD68-\\uDD6F\\uDEFC-\\uDFFF]|\\uD82F[\\uDC6B-\\uDC6F\\uDC7D-\\uDC7F\\uDC89-\\uDC8F\\uDC9A-\\uDC9E\\uDCA0-\\uDFFF]|\\uD835[\\uDC55\\uDC9D\\uDCA0\\uDCA1\\uDCA3\\uDCA4\\uDCA7\\uDCA8\\uDCAD\\uDCBA\\uDCBC\\uDCC4\\uDD06\\uDD0B\\uDD0C\\uDD15\\uDD1D\\uDD3A\\uDD3F\\uDD45\\uDD47-\\uDD49\\uDD51\\uDEA6\\uDEA7\\uDEC1\\uDEDB\\uDEFB\\uDF15\\uDF35\\uDF4F\\uDF6F\\uDF89\\uDFA9\\uDFC3\\uDFCC-\\uDFFF]|\\uD836[\\uDC00-\\uDE87\\uDE89-\\uDFFF]|\\uD837[\\uDC00-\\uDEFF\\uDF1F-\\uDF24\\uDF2B-\\uDFFF]|\\uD838[\\uDC00-\\uDC2F\\uDC6E-\\uDCFF\\uDD2D-\\uDD36\\uDD3E-\\uDD4D\\uDD4F-\\uDE8F\\uDEAE-\\uDEBF\\uDEEC-\\uDFFF]|\\uD839[\\uDC00-\\uDCCF\\uDCEC-\\uDDCF\\uDDEE\\uDDEF\\uDDF1-\\uDFDF\\uDFE7\\uDFEC\\uDFEF\\uDFFF]|\\uD83A[\\uDCC5-\\uDCFF\\uDD44-\\uDD4A\\uDD4C-\\uDFFF]|\\uD83B[\\uDC00-\\uDDFF\\uDE04\\uDE20\\uDE23\\uDE25\\uDE26\\uDE28\\uDE33\\uDE38\\uDE3A\\uDE3C-\\uDE41\\uDE43-\\uDE46\\uDE48\\uDE4A\\uDE4C\\uDE50\\uDE53\\uDE55\\uDE56\\uDE58\\uDE5A\\uDE5C\\uDE5E\\uDE60\\uDE63\\uDE65\\uDE66\\uDE6B\\uDE73\\uDE78\\uDE7D\\uDE7F\\uDE8A\\uDE9C-\\uDEA0\\uDEA4\\uDEAA\\uDEBC-\\uDFFF]|\\uD83C[\\uDC00-\\uDD2F\\uDD4A-\\uDD4F\\uDD6A-\\uDD6F\\uDD8A-\\uDFFF]|\\uD869[\\uDEE0-\\uDEFF]|\\uD86D[\\uDF3A-\\uDF3F]|\\uD86E[\\uDC1E\\uDC1F]|\\uD873[\\uDEA2-\\uDEAF]|\\uD87A[\\uDFE1-\\uDFEF]|\\uD87B[\\uDE5E-\\uDFFF]|\\uD87E[\\uDE1E-\\uDFFF]|\\uD884[\\uDF4B-\\uDF4F]|\\uD888[\\uDFB0-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])',
        "$Numeric": "((?:[0-9\\u0600-\\u0605\\u0660-\\u0669\\u066B\\u066C\\u06DD\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0890\\u0891\\u08E2\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19DA\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]|\\uD801[\\uDCA0-\\uDCA9]|[\\uD803\\uD818][\\uDD30-\\uDD39\\uDD40-\\uDD49]|\\uD804[\\uDC66-\\uDC6F\\uDCBD\\uDCCD\\uDCF0-\\uDCF9\\uDD36-\\uDD3F\\uDDD0-\\uDDD9\\uDEF0-\\uDEF9]|\\uD805[\\uDC50-\\uDC59\\uDCD0-\\uDCD9\\uDE50-\\uDE59\\uDEC0-\\uDEC9\\uDED0-\\uDEE3\\uDF30-\\uDF39]|\\uD806[\\uDCE0-\\uDCE9\\uDD50-\\uDD59\\uDFF0-\\uDFF9]|\\uD807[\\uDC50-\\uDC59\\uDD50-\\uDD59\\uDDA0-\\uDDA9\\uDF50-\\uDF59]|\\uD81A[\\uDE60-\\uDE69\\uDEC0-\\uDEC9\\uDF50-\\uDF59]|\\uD81B[\\uDD70-\\uDD79]|\\uD833[\\uDCF0-\\uDCF9]|\\uD835[\\uDFCE-\\uDFFF]|\\uD838[\\uDD40-\\uDD49\\uDEF0-\\uDEF9]|\\uD839[\\uDCF0-\\uDCF9\\uDDF1-\\uDDFA]|\\uD83A[\\uDD50-\\uDD59]|\\uD83E[\\uDFF0-\\uDFF9])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$OLetter": "((?:[\\u01BB\\u01C0-\\u01C3\\u0294\\u02B9-\\u02BF\\u02C6-\\u02D1\\u02EC\\u02EE\\u0374\\u0559\\u05D0-\\u05EA\\u05EF-\\u05F3\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u0860-\\u086A\\u0870-\\u0887\\u0889-\\u088E\\u08A0-\\u08C9\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09FC\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C5D\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D04-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E86-\\u0E8A\\u0E8C-\\u0EA3\\u0EA5\\u0EA7-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10D0-\\u10FA\\u10FD-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u1711\\u171F-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1878\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C90-\\u1CBA\\u1CBD-\\u1CBF\\u1CE9-\\u1CEC\\u1CEE-\\u1CF3\\u1CF5\\u1CF6\\u1CFA\\u2135-\\u2138\\u2180-\\u2182\\u2185-\\u2188\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312F\\u3131-\\u318E\\u31A0-\\u31BF\\u31F0-\\u31FF\\u3400-\\u4DBF\\u4E00-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA66E\\uA67F\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA788\\uA78F\\uA7F7\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA8FE\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF66-\\uFF9D\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1F\\uDF2D-\\uDF4A\\uDF50-\\uDF75\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC50-\\uDC9D\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDDC0-\\uDDF3\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67\\uDF81\\uDF82]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE35\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE4\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDD00-\\uDD23\\uDD4A-\\uDD4F\\uDD6F\\uDE80-\\uDEA9\\uDEB0\\uDEB1\\uDEC2-\\uDEC4\\uDF00-\\uDF1C\\uDF27\\uDF30-\\uDF45\\uDF70-\\uDF81\\uDFB0-\\uDFC4\\uDFE0-\\uDFF6]|\\uD804[\\uDC03-\\uDC37\\uDC71\\uDC72\\uDC75\\uDC83-\\uDCAF\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD44\\uDD47\\uDD50-\\uDD72\\uDD76\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE2B\\uDE3F\\uDE40\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEDE\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3D\\uDF50\\uDF5D-\\uDF61\\uDF80-\\uDF89\\uDF8B\\uDF8E\\uDF90-\\uDFB5\\uDFB7\\uDFD1\\uDFD3]|\\uD805[\\uDC00-\\uDC34\\uDC47-\\uDC4A\\uDC5F-\\uDC61\\uDC80-\\uDCAF\\uDCC4\\uDCC5\\uDCC7\\uDD80-\\uDDAE\\uDDD8-\\uDDDB\\uDE00-\\uDE2F\\uDE44\\uDE80-\\uDEAA\\uDEB8\\uDF00-\\uDF1A\\uDF40-\\uDF46]|\\uD806[\\uDC00-\\uDC2B\\uDCFF-\\uDD06\\uDD09\\uDD0C-\\uDD13\\uDD15\\uDD16\\uDD18-\\uDD2F\\uDD3F\\uDD41\\uDDA0-\\uDDA7\\uDDAA-\\uDDD0\\uDDE1\\uDDE3\\uDE00\\uDE0B-\\uDE32\\uDE3A\\uDE50\\uDE5C-\\uDE89\\uDE9D\\uDEB0-\\uDEF8\\uDFC0-\\uDFE0]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC2E\\uDC40\\uDC72-\\uDC8F\\uDD00-\\uDD06\\uDD08\\uDD09\\uDD0B-\\uDD30\\uDD46\\uDD60-\\uDD65\\uDD67\\uDD68\\uDD6A-\\uDD89\\uDD98\\uDEE0-\\uDEF2\\uDF02\\uDF04-\\uDF10\\uDF12-\\uDF33\\uDFB0]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|\\uD80B[\\uDF90-\\uDFF0]|[\\uD80C\\uD80E\\uD80F\\uD81C-\\uD820\\uD822\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879\\uD880-\\uD883\\uD885-\\uD887][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2F\\uDC41-\\uDC46\\uDC60-\\uDFFF]|\\uD810[\\uDC00-\\uDFFA]|\\uD811[\\uDC00-\\uDE46]|\\uD818[\\uDD00-\\uDD1D]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDE70-\\uDEBE\\uDED0-\\uDEED\\uDF00-\\uDF2F\\uDF40-\\uDF43\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDD40-\\uDD6C\\uDF00-\\uDF4A\\uDF50\\uDF93-\\uDF9F\\uDFE0\\uDFE1\\uDFE3]|\\uD821[\\uDC00-\\uDFF7]|\\uD823[\\uDC00-\\uDCD5\\uDCFF-\\uDD08]|\\uD82B[\\uDFF0-\\uDFF3\\uDFF5-\\uDFFB\\uDFFD\\uDFFE]|\\uD82C[\\uDC00-\\uDD22\\uDD32\\uDD50-\\uDD52\\uDD55\\uDD64-\\uDD67\\uDD70-\\uDEFB]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99]|\\uD837\\uDF0A|\\uD838[\\uDD00-\\uDD2C\\uDD37-\\uDD3D\\uDD4E\\uDE90-\\uDEAD\\uDEC0-\\uDEEB]|\\uD839[\\uDCD0-\\uDCEB\\uDDD0-\\uDDED\\uDDF0\\uDFE0-\\uDFE6\\uDFE8-\\uDFEB\\uDFED\\uDFEE\\uDFF0-\\uDFFE]|\\uD83A[\\uDC00-\\uDCC4\\uDD4B]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD869[\\uDC00-\\uDEDF\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF39\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0\\uDFF0-\\uDFFF]|\\uD87B[\\uDC00-\\uDE5D]|\\uD87E[\\uDC00-\\uDE1D]|\\uD884[\\uDC00-\\uDF4A\\uDF50-\\uDFFF]|\\uD888[\\uDC00-\\uDFAF])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$ParaSep": "([\\x85\\u2028\\u2029]|\\r|\\n)",
        "$SATerm": "(((?:[!\\?\\u0589\\u061D-\\u061F\\u06D4\\u0700-\\u0702\\u07F9\\u0837\\u0839\\u083D\\u083E\\u0964\\u0965\\u104A\\u104B\\u1362\\u1367\\u1368\\u166E\\u1735\\u1736\\u17D4\\u17D5\\u1803\\u1809\\u1944\\u1945\\u1AA8-\\u1AAB\\u1B4E\\u1B4F\\u1B5A\\u1B5B\\u1B5E\\u1B5F\\u1B7D-\\u1B7F\\u1C3B\\u1C3C\\u1C7E\\u1C7F\\u203C\\u203D\\u2047-\\u2049\\u2CF9-\\u2CFB\\u2E2E\\u2E3C\\u2E53\\u2E54\\u3002\\uA4FF\\uA60E\\uA60F\\uA6F3\\uA6F7\\uA876\\uA877\\uA8CE\\uA8CF\\uA92F\\uA9C8\\uA9C9\\uAA5D-\\uAA5F\\uAAF0\\uAAF1\\uABEB\\uFE12\\uFE15\\uFE16\\uFE56\\uFE57\\uFF01\\uFF1F\\uFF61]|\\uD802[\\uDE56\\uDE57]|\\uD803[\\uDF55-\\uDF59\\uDF86-\\uDF89]|\\uD804[\\uDC47\\uDC48\\uDCBE-\\uDCC1\\uDD41-\\uDD43\\uDDC5\\uDDC6\\uDDCD\\uDDDE\\uDDDF\\uDE38\\uDE39\\uDE3B\\uDE3C\\uDEA9\\uDFD4\\uDFD5]|\\uD805[\\uDC4B\\uDC4C\\uDDC2\\uDDC3\\uDDC9-\\uDDD7\\uDE41\\uDE42\\uDF3C-\\uDF3E]|\\uD806[\\uDD44\\uDD46\\uDE42\\uDE43\\uDE9B\\uDE9C]|\\uD807[\\uDC41\\uDC42\\uDEF7\\uDEF8\\uDF43\\uDF44]|\\uD81A[\\uDE6E\\uDE6F\\uDEF5\\uDF37\\uDF38\\uDF44]|\\uD81B[\\uDD6E\\uDD6F\\uDE98]|\\uD82F\\uDC9F|\\uD836\\uDE88)(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)|([\\.\\u2024\\uFE52\\uFF0E](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*))",
        "$SContinue": "([,\\x2D:;\\u037E\\u055D\\u060C\\u060D\\u07F8\\u1802\\u1808\\u2013\\u2014\\u3001\\uFE10\\uFE11\\uFE13\\uFE14\\uFE31\\uFE32\\uFE50\\uFE51\\uFE54\\uFE55\\uFE58\\uFE63\\uFF0C\\uFF0D\\uFF1A\\uFF1B\\uFF64](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$STerm": "((?:[!\\?\\u0589\\u061D-\\u061F\\u06D4\\u0700-\\u0702\\u07F9\\u0837\\u0839\\u083D\\u083E\\u0964\\u0965\\u104A\\u104B\\u1362\\u1367\\u1368\\u166E\\u1735\\u1736\\u17D4\\u17D5\\u1803\\u1809\\u1944\\u1945\\u1AA8-\\u1AAB\\u1B4E\\u1B4F\\u1B5A\\u1B5B\\u1B5E\\u1B5F\\u1B7D-\\u1B7F\\u1C3B\\u1C3C\\u1C7E\\u1C7F\\u203C\\u203D\\u2047-\\u2049\\u2CF9-\\u2CFB\\u2E2E\\u2E3C\\u2E53\\u2E54\\u3002\\uA4FF\\uA60E\\uA60F\\uA6F3\\uA6F7\\uA876\\uA877\\uA8CE\\uA8CF\\uA92F\\uA9C8\\uA9C9\\uAA5D-\\uAA5F\\uAAF0\\uAAF1\\uABEB\\uFE12\\uFE15\\uFE16\\uFE56\\uFE57\\uFF01\\uFF1F\\uFF61]|\\uD802[\\uDE56\\uDE57]|\\uD803[\\uDF55-\\uDF59\\uDF86-\\uDF89]|\\uD804[\\uDC47\\uDC48\\uDCBE-\\uDCC1\\uDD41-\\uDD43\\uDDC5\\uDDC6\\uDDCD\\uDDDE\\uDDDF\\uDE38\\uDE39\\uDE3B\\uDE3C\\uDEA9\\uDFD4\\uDFD5]|\\uD805[\\uDC4B\\uDC4C\\uDDC2\\uDDC3\\uDDC9-\\uDDD7\\uDE41\\uDE42\\uDF3C-\\uDF3E]|\\uD806[\\uDD44\\uDD46\\uDE42\\uDE43\\uDE9B\\uDE9C]|\\uD807[\\uDC41\\uDC42\\uDEF7\\uDEF8\\uDF43\\uDF44]|\\uD81A[\\uDE6E\\uDE6F\\uDEF5\\uDF37\\uDF38\\uDF44]|\\uD81B[\\uDD6E\\uDD6F\\uDE98]|\\uD82F\\uDC9F|\\uD836\\uDE88)(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$Sep": "[\\x85\\u2028\\u2029]",
        "$Sp": "([\\t\\x0B\\f \\xA0\\u1680\\u2000-\\u200A\\u202F\\u205F\\u3000](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$Upper": "((?:[A-Z\\xC0-\\xD6\\xD8-\\xDE\\u0100\\u0102\\u0104\\u0106\\u0108\\u010A\\u010C\\u010E\\u0110\\u0112\\u0114\\u0116\\u0118\\u011A\\u011C\\u011E\\u0120\\u0122\\u0124\\u0126\\u0128\\u012A\\u012C\\u012E\\u0130\\u0132\\u0134\\u0136\\u0139\\u013B\\u013D\\u013F\\u0141\\u0143\\u0145\\u0147\\u014A\\u014C\\u014E\\u0150\\u0152\\u0154\\u0156\\u0158\\u015A\\u015C\\u015E\\u0160\\u0162\\u0164\\u0166\\u0168\\u016A\\u016C\\u016E\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017B\\u017D\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018B\\u018E-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019C\\u019D\\u019F\\u01A0\\u01A2\\u01A4\\u01A6\\u01A7\\u01A9\\u01AC\\u01AE\\u01AF\\u01B1-\\u01B3\\u01B5\\u01B7\\u01B8\\u01BC\\u01C4\\u01C5\\u01C7\\u01C8\\u01CA\\u01CB\\u01CD\\u01CF\\u01D1\\u01D3\\u01D5\\u01D7\\u01D9\\u01DB\\u01DE\\u01E0\\u01E2\\u01E4\\u01E6\\u01E8\\u01EA\\u01EC\\u01EE\\u01F1\\u01F2\\u01F4\\u01F6-\\u01F8\\u01FA\\u01FC\\u01FE\\u0200\\u0202\\u0204\\u0206\\u0208\\u020A\\u020C\\u020E\\u0210\\u0212\\u0214\\u0216\\u0218\\u021A\\u021C\\u021E\\u0220\\u0222\\u0224\\u0226\\u0228\\u022A\\u022C\\u022E\\u0230\\u0232\\u023A\\u023B\\u023D\\u023E\\u0241\\u0243-\\u0246\\u0248\\u024A\\u024C\\u024E\\u0370\\u0372\\u0376\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E\\u038F\\u0391-\\u03A1\\u03A3-\\u03AB\\u03CF\\u03D2-\\u03D4\\u03D8\\u03DA\\u03DC\\u03DE\\u03E0\\u03E2\\u03E4\\u03E6\\u03E8\\u03EA\\u03EC\\u03EE\\u03F4\\u03F7\\u03F9\\u03FA\\u03FD-\\u042F\\u0460\\u0462\\u0464\\u0466\\u0468\\u046A\\u046C\\u046E\\u0470\\u0472\\u0474\\u0476\\u0478\\u047A\\u047C\\u047E\\u0480\\u048A\\u048C\\u048E\\u0490\\u0492\\u0494\\u0496\\u0498\\u049A\\u049C\\u049E\\u04A0\\u04A2\\u04A4\\u04A6\\u04A8\\u04AA\\u04AC\\u04AE\\u04B0\\u04B2\\u04B4\\u04B6\\u04B8\\u04BA\\u04BC\\u04BE\\u04C0\\u04C1\\u04C3\\u04C5\\u04C7\\u04C9\\u04CB\\u04CD\\u04D0\\u04D2\\u04D4\\u04D6\\u04D8\\u04DA\\u04DC\\u04DE\\u04E0\\u04E2\\u04E4\\u04E6\\u04E8\\u04EA\\u04EC\\u04EE\\u04F0\\u04F2\\u04F4\\u04F6\\u04F8\\u04FA\\u04FC\\u04FE\\u0500\\u0502\\u0504\\u0506\\u0508\\u050A\\u050C\\u050E\\u0510\\u0512\\u0514\\u0516\\u0518\\u051A\\u051C\\u051E\\u0520\\u0522\\u0524\\u0526\\u0528\\u052A\\u052C\\u052E\\u0531-\\u0556\\u10A0-\\u10C5\\u10C7\\u10CD\\u13A0-\\u13F5\\u1C89\\u1E00\\u1E02\\u1E04\\u1E06\\u1E08\\u1E0A\\u1E0C\\u1E0E\\u1E10\\u1E12\\u1E14\\u1E16\\u1E18\\u1E1A\\u1E1C\\u1E1E\\u1E20\\u1E22\\u1E24\\u1E26\\u1E28\\u1E2A\\u1E2C\\u1E2E\\u1E30\\u1E32\\u1E34\\u1E36\\u1E38\\u1E3A\\u1E3C\\u1E3E\\u1E40\\u1E42\\u1E44\\u1E46\\u1E48\\u1E4A\\u1E4C\\u1E4E\\u1E50\\u1E52\\u1E54\\u1E56\\u1E58\\u1E5A\\u1E5C\\u1E5E\\u1E60\\u1E62\\u1E64\\u1E66\\u1E68\\u1E6A\\u1E6C\\u1E6E\\u1E70\\u1E72\\u1E74\\u1E76\\u1E78\\u1E7A\\u1E7C\\u1E7E\\u1E80\\u1E82\\u1E84\\u1E86\\u1E88\\u1E8A\\u1E8C\\u1E8E\\u1E90\\u1E92\\u1E94\\u1E9E\\u1EA0\\u1EA2\\u1EA4\\u1EA6\\u1EA8\\u1EAA\\u1EAC\\u1EAE\\u1EB0\\u1EB2\\u1EB4\\u1EB6\\u1EB8\\u1EBA\\u1EBC\\u1EBE\\u1EC0\\u1EC2\\u1EC4\\u1EC6\\u1EC8\\u1ECA\\u1ECC\\u1ECE\\u1ED0\\u1ED2\\u1ED4\\u1ED6\\u1ED8\\u1EDA\\u1EDC\\u1EDE\\u1EE0\\u1EE2\\u1EE4\\u1EE6\\u1EE8\\u1EEA\\u1EEC\\u1EEE\\u1EF0\\u1EF2\\u1EF4\\u1EF6\\u1EF8\\u1EFA\\u1EFC\\u1EFE\\u1F08-\\u1F0F\\u1F18-\\u1F1D\\u1F28-\\u1F2F\\u1F38-\\u1F3F\\u1F48-\\u1F4D\\u1F59\\u1F5B\\u1F5D\\u1F5F\\u1F68-\\u1F6F\\u1F88-\\u1F8F\\u1F98-\\u1F9F\\u1FA8-\\u1FAF\\u1FB8-\\u1FBC\\u1FC8-\\u1FCC\\u1FD8-\\u1FDB\\u1FE8-\\u1FEC\\u1FF8-\\u1FFC\\u2102\\u2107\\u210B-\\u210D\\u2110-\\u2112\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u2130-\\u2133\\u213E\\u213F\\u2145\\u2160-\\u216F\\u2183\\u24B6-\\u24CF\\u2C00-\\u2C2F\\u2C60\\u2C62-\\u2C64\\u2C67\\u2C69\\u2C6B\\u2C6D-\\u2C70\\u2C72\\u2C75\\u2C7E-\\u2C80\\u2C82\\u2C84\\u2C86\\u2C88\\u2C8A\\u2C8C\\u2C8E\\u2C90\\u2C92\\u2C94\\u2C96\\u2C98\\u2C9A\\u2C9C\\u2C9E\\u2CA0\\u2CA2\\u2CA4\\u2CA6\\u2CA8\\u2CAA\\u2CAC\\u2CAE\\u2CB0\\u2CB2\\u2CB4\\u2CB6\\u2CB8\\u2CBA\\u2CBC\\u2CBE\\u2CC0\\u2CC2\\u2CC4\\u2CC6\\u2CC8\\u2CCA\\u2CCC\\u2CCE\\u2CD0\\u2CD2\\u2CD4\\u2CD6\\u2CD8\\u2CDA\\u2CDC\\u2CDE\\u2CE0\\u2CE2\\u2CEB\\u2CED\\u2CF2\\uA640\\uA642\\uA644\\uA646\\uA648\\uA64A\\uA64C\\uA64E\\uA650\\uA652\\uA654\\uA656\\uA658\\uA65A\\uA65C\\uA65E\\uA660\\uA662\\uA664\\uA666\\uA668\\uA66A\\uA66C\\uA680\\uA682\\uA684\\uA686\\uA688\\uA68A\\uA68C\\uA68E\\uA690\\uA692\\uA694\\uA696\\uA698\\uA69A\\uA722\\uA724\\uA726\\uA728\\uA72A\\uA72C\\uA72E\\uA732\\uA734\\uA736\\uA738\\uA73A\\uA73C\\uA73E\\uA740\\uA742\\uA744\\uA746\\uA748\\uA74A\\uA74C\\uA74E\\uA750\\uA752\\uA754\\uA756\\uA758\\uA75A\\uA75C\\uA75E\\uA760\\uA762\\uA764\\uA766\\uA768\\uA76A\\uA76C\\uA76E\\uA779\\uA77B\\uA77D\\uA77E\\uA780\\uA782\\uA784\\uA786\\uA78B\\uA78D\\uA790\\uA792\\uA796\\uA798\\uA79A\\uA79C\\uA79E\\uA7A0\\uA7A2\\uA7A4\\uA7A6\\uA7A8\\uA7AA-\\uA7AE\\uA7B0-\\uA7B4\\uA7B6\\uA7B8\\uA7BA\\uA7BC\\uA7BE\\uA7C0\\uA7C2\\uA7C4-\\uA7C7\\uA7C9\\uA7CB\\uA7CC\\uA7D0\\uA7D6\\uA7D8\\uA7DA\\uA7DC\\uA7F5\\uFF21-\\uFF3A]|\\uD801[\\uDC00-\\uDC27\\uDCB0-\\uDCD3\\uDD70-\\uDD7A\\uDD7C-\\uDD8A\\uDD8C-\\uDD92\\uDD94\\uDD95]|\\uD803[\\uDC80-\\uDCB2\\uDD50-\\uDD65]|\\uD806[\\uDCA0-\\uDCBF]|\\uD81B[\\uDE40-\\uDE5F]|\\uD835[\\uDC00-\\uDC19\\uDC34-\\uDC4D\\uDC68-\\uDC81\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB5\\uDCD0-\\uDCE9\\uDD04\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD38\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD6C-\\uDD85\\uDDA0-\\uDDB9\\uDDD4-\\uDDED\\uDE08-\\uDE21\\uDE3C-\\uDE55\\uDE70-\\uDE89\\uDEA8-\\uDEC0\\uDEE2-\\uDEFA\\uDF1C-\\uDF34\\uDF56-\\uDF6E\\uDF90-\\uDFA8\\uDFCA]|\\uD83A[\\uDD00-\\uDD21]|\\uD83C[\\uDD30-\\uDD49\\uDD50-\\uDD69\\uDD70-\\uDD89])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)"
      }
    },
    "word": {
      "segmentRules": {
        "10": {
          "after": "$AHLetter",
          "before": "$Numeric",
          "breaks": false
        },
        "11": {
          "after": "$Numeric",
          "before": "$Numeric($MidNum|$MidNumLetQ)",
          "breaks": false
        },
        "12": {
          "after": "($MidNum|$MidNumLetQ)$Numeric",
          "before": "$Numeric",
          "breaks": false
        },
        "13": {
          "after": "$Katakana",
          "before": "$Katakana",
          "breaks": false
        },
        "13.1": {
          "after": "$ExtendNumLet",
          "before": "($AHLetter|$Numeric|$Katakana|$ExtendNumLet)",
          "breaks": false
        },
        "13.2": {
          "after": "($AHLetter|$Numeric|$Katakana)",
          "before": "$ExtendNumLet",
          "breaks": false
        },
        "15": {
          "after": "$RI",
          "before": "^($RI$RI)*$RI",
          "breaks": false
        },
        "16": {
          "after": "$RI",
          "before": "[^\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0600-\\u0605\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DD\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0890\\u0891\\u0898-\\u089F\\u08CA-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB\\uDDFD\\uDEE0\\uDF76-\\uDF7A\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6\\uDD24-\\uDD27\\uDEAB\\uDEAC\\uDEFD-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCBD\\uDCC2\\uDCCD\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDC30-\\uDC40\\uDC47-\\uDC55\\uDEF0-\\uDEF4\\uDF30-\\uDF36\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1\\uDC9D\\uDC9E\\uDCA0-\\uDCA3\\uDF00-\\uDF2D\\uDF30-\\uDF46\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF\\uDCEC-\\uDCEF\\uDCD0-\\uDCD6\\uDD44-\\uDD4A\\uDDE6-\\uDDFF\\uDFFB-\\uDFFF\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF]($RI$RI)*$RI",
          "breaks": false
        },
        "3": {
          "after": "$LF",
          "before": "$CR",
          "breaks": false
        },
        "3.1": {
          "before": "($Newline|$CR|$LF)",
          "breaks": true
        },
        "3.2": {
          "after": "($Newline|$CR|$LF)",
          "breaks": true
        },
        "3.3": {
          "after": "$ExtPict",
          "before": "$ZWJ",
          "breaks": false
        },
        "3.4": {
          "after": "$WSegSpace",
          "before": "$WSegSpace",
          "breaks": false
        },
        "4": {
          "after": "(?:$Format|$Extend|$ZWJ)",
          "before": "$NotBreak_",
          "breaks": false
        },
        "5": {
          "after": "$AHLetter",
          "before": "$AHLetter",
          "breaks": false
        },
        "6": {
          "after": "($MidLetter|$MidNumLetQ)$AHLetter",
          "before": "$AHLetter",
          "breaks": false
        },
        "7": {
          "after": "$AHLetter",
          "before": "$AHLetter($MidLetter|$MidNumLetQ)",
          "breaks": false
        },
        "7.1": {
          "after": "$Single_Quote",
          "before": "$Hebrew_Letter",
          "breaks": false
        },
        "7.2": {
          "after": "$Double_Quote$Hebrew_Letter",
          "before": "$Hebrew_Letter",
          "breaks": false
        },
        "7.3": {
          "after": "$Hebrew_Letter",
          "before": "$Hebrew_Letter$Double_Quote",
          "breaks": false
        },
        "8": {
          "after": "$Numeric",
          "before": "$Numeric",
          "breaks": false
        },
        "9": {
          "after": "$Numeric",
          "before": "$AHLetter",
          "breaks": false
        }
      },
      "suppressions": [],
      "variables": {
        "$AHLetter": "(((?:[A-Za-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02D7\\u02DE-\\u02FF\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559-\\u055C\\u055E\\u0560-\\u0588\\u058A\\u05F3\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u070F\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u0860-\\u086A\\u0870-\\u0887\\u0889-\\u088E\\u08A0-\\u08C9\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09FC\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C5D\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D04-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u1711\\u171F-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1820-\\u1878\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1A00-\\u1A16\\u1B05-\\u1B33\\u1B45-\\u1B4C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C80-\\u1C8A\\u1C90-\\u1CBA\\u1CBD-\\u1CBF\\u1CE9-\\u1CEC\\u1CEE-\\u1CF3\\u1CF5\\u1CF6\\u1CFA\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u24B6-\\u24E9\\u2C00-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u303B\\u303C\\u3105-\\u312F\\u3131-\\u318E\\u31A0-\\u31BF\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA708-\\uA7CD\\uA7D0\\uA7D1\\uA7D3\\uA7D5-\\uA7DC\\uA7F2-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA8FE\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB69\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB50-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1F\\uDF2D-\\uDF4A\\uDF50-\\uDF75\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC00-\\uDC9D\\uDCB0-\\uDCD3\\uDCD8-\\uDCFB\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDD70-\\uDD7A\\uDD7C-\\uDD8A\\uDD8C-\\uDD92\\uDD94\\uDD95\\uDD97-\\uDDA1\\uDDA3-\\uDDB1\\uDDB3-\\uDDB9\\uDDBB\\uDDBC\\uDDC0-\\uDDF3\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67\\uDF80-\\uDF85\\uDF87-\\uDFB0\\uDFB2-\\uDFBA]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE35\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE4\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDC80-\\uDCB2\\uDCC0-\\uDCF2\\uDD00-\\uDD23\\uDD4A-\\uDD65\\uDD6F-\\uDD85\\uDE80-\\uDEA9\\uDEB0\\uDEB1\\uDEC2-\\uDEC4\\uDF00-\\uDF1C\\uDF27\\uDF30-\\uDF45\\uDF70-\\uDF81\\uDFB0-\\uDFC4\\uDFE0-\\uDFF6]|\\uD804[\\uDC03-\\uDC37\\uDC71\\uDC72\\uDC75\\uDC83-\\uDCAF\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD44\\uDD47\\uDD50-\\uDD72\\uDD76\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE2B\\uDE3F\\uDE40\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEDE\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3D\\uDF50\\uDF5D-\\uDF61\\uDF80-\\uDF89\\uDF8B\\uDF8E\\uDF90-\\uDFB5\\uDFB7\\uDFD1\\uDFD3]|\\uD805[\\uDC00-\\uDC34\\uDC47-\\uDC4A\\uDC5F-\\uDC61\\uDC80-\\uDCAF\\uDCC4\\uDCC5\\uDCC7\\uDD80-\\uDDAE\\uDDD8-\\uDDDB\\uDE00-\\uDE2F\\uDE44\\uDE80-\\uDEAA\\uDEB8]|\\uD806[\\uDC00-\\uDC2B\\uDCA0-\\uDCDF\\uDCFF-\\uDD06\\uDD09\\uDD0C-\\uDD13\\uDD15\\uDD16\\uDD18-\\uDD2F\\uDD3F\\uDD41\\uDDA0-\\uDDA7\\uDDAA-\\uDDD0\\uDDE1\\uDDE3\\uDE00\\uDE0B-\\uDE32\\uDE3A\\uDE50\\uDE5C-\\uDE89\\uDE9D\\uDEB0-\\uDEF8\\uDFC0-\\uDFE0]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC2E\\uDC40\\uDC72-\\uDC8F\\uDD00-\\uDD06\\uDD08\\uDD09\\uDD0B-\\uDD30\\uDD46\\uDD60-\\uDD65\\uDD67\\uDD68\\uDD6A-\\uDD89\\uDD98\\uDEE0-\\uDEF2\\uDF02\\uDF04-\\uDF10\\uDF12-\\uDF33\\uDFB0]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|\\uD80B[\\uDF90-\\uDFF0]|[\\uD80C\\uD80E\\uD80F][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2F\\uDC41-\\uDC46\\uDC60-\\uDFFF]|\\uD810[\\uDC00-\\uDFFA]|\\uD811[\\uDC00-\\uDE46]|\\uD818[\\uDD00-\\uDD1D]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDE70-\\uDEBE\\uDED0-\\uDEED\\uDF00-\\uDF2F\\uDF40-\\uDF43\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDD40-\\uDD6C\\uDE40-\\uDE7F\\uDF00-\\uDF4A\\uDF50\\uDF93-\\uDF9F\\uDFE0\\uDFE1\\uDFE3]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99]|\\uD835[\\uDC00-\\uDC54\\uDC56-\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD1E-\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD52-\\uDEA5\\uDEA8-\\uDEC0\\uDEC2-\\uDEDA\\uDEDC-\\uDEFA\\uDEFC-\\uDF14\\uDF16-\\uDF34\\uDF36-\\uDF4E\\uDF50-\\uDF6E\\uDF70-\\uDF88\\uDF8A-\\uDFA8\\uDFAA-\\uDFC2\\uDFC4-\\uDFCB]|\\uD837[\\uDF00-\\uDF1E\\uDF25-\\uDF2A]|\\uD838[\\uDC30-\\uDC6D\\uDD00-\\uDD2C\\uDD37-\\uDD3D\\uDD4E\\uDE90-\\uDEAD\\uDEC0-\\uDEEB]|\\uD839[\\uDCD0-\\uDCEB\\uDDD0-\\uDDED\\uDDF0\\uDFE0-\\uDFE6\\uDFE8-\\uDFEB\\uDFED\\uDFEE\\uDFF0-\\uDFFE]|\\uD83A[\\uDC00-\\uDCC4\\uDD00-\\uDD43\\uDD4B]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD83C[\\uDD30-\\uDD49\\uDD50-\\uDD69\\uDD70-\\uDD89])|[\\u05D0-\\u05EA\\u05EF-\\u05F2\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFB4F])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$ALetter": "((?:[A-Za-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02D7\\u02DE-\\u02FF\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559-\\u055C\\u055E\\u0560-\\u0588\\u058A\\u05F3\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u070F\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u0860-\\u086A\\u0870-\\u0887\\u0889-\\u088E\\u08A0-\\u08C9\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09FC\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C5D\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D04-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u1711\\u171F-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1820-\\u1878\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1A00-\\u1A16\\u1B05-\\u1B33\\u1B45-\\u1B4C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C80-\\u1C8A\\u1C90-\\u1CBA\\u1CBD-\\u1CBF\\u1CE9-\\u1CEC\\u1CEE-\\u1CF3\\u1CF5\\u1CF6\\u1CFA\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u24B6-\\u24E9\\u2C00-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u303B\\u303C\\u3105-\\u312F\\u3131-\\u318E\\u31A0-\\u31BF\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA708-\\uA7CD\\uA7D0\\uA7D1\\uA7D3\\uA7D5-\\uA7DC\\uA7F2-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA8FE\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB69\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB50-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1F\\uDF2D-\\uDF4A\\uDF50-\\uDF75\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC00-\\uDC9D\\uDCB0-\\uDCD3\\uDCD8-\\uDCFB\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDD70-\\uDD7A\\uDD7C-\\uDD8A\\uDD8C-\\uDD92\\uDD94\\uDD95\\uDD97-\\uDDA1\\uDDA3-\\uDDB1\\uDDB3-\\uDDB9\\uDDBB\\uDDBC\\uDDC0-\\uDDF3\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67\\uDF80-\\uDF85\\uDF87-\\uDFB0\\uDFB2-\\uDFBA]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE35\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE4\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDC80-\\uDCB2\\uDCC0-\\uDCF2\\uDD00-\\uDD23\\uDD4A-\\uDD65\\uDD6F-\\uDD85\\uDE80-\\uDEA9\\uDEB0\\uDEB1\\uDEC2-\\uDEC4\\uDF00-\\uDF1C\\uDF27\\uDF30-\\uDF45\\uDF70-\\uDF81\\uDFB0-\\uDFC4\\uDFE0-\\uDFF6]|\\uD804[\\uDC03-\\uDC37\\uDC71\\uDC72\\uDC75\\uDC83-\\uDCAF\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD44\\uDD47\\uDD50-\\uDD72\\uDD76\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE2B\\uDE3F\\uDE40\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEDE\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3D\\uDF50\\uDF5D-\\uDF61\\uDF80-\\uDF89\\uDF8B\\uDF8E\\uDF90-\\uDFB5\\uDFB7\\uDFD1\\uDFD3]|\\uD805[\\uDC00-\\uDC34\\uDC47-\\uDC4A\\uDC5F-\\uDC61\\uDC80-\\uDCAF\\uDCC4\\uDCC5\\uDCC7\\uDD80-\\uDDAE\\uDDD8-\\uDDDB\\uDE00-\\uDE2F\\uDE44\\uDE80-\\uDEAA\\uDEB8]|\\uD806[\\uDC00-\\uDC2B\\uDCA0-\\uDCDF\\uDCFF-\\uDD06\\uDD09\\uDD0C-\\uDD13\\uDD15\\uDD16\\uDD18-\\uDD2F\\uDD3F\\uDD41\\uDDA0-\\uDDA7\\uDDAA-\\uDDD0\\uDDE1\\uDDE3\\uDE00\\uDE0B-\\uDE32\\uDE3A\\uDE50\\uDE5C-\\uDE89\\uDE9D\\uDEB0-\\uDEF8\\uDFC0-\\uDFE0]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC2E\\uDC40\\uDC72-\\uDC8F\\uDD00-\\uDD06\\uDD08\\uDD09\\uDD0B-\\uDD30\\uDD46\\uDD60-\\uDD65\\uDD67\\uDD68\\uDD6A-\\uDD89\\uDD98\\uDEE0-\\uDEF2\\uDF02\\uDF04-\\uDF10\\uDF12-\\uDF33\\uDFB0]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|\\uD80B[\\uDF90-\\uDFF0]|[\\uD80C\\uD80E\\uD80F][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2F\\uDC41-\\uDC46\\uDC60-\\uDFFF]|\\uD810[\\uDC00-\\uDFFA]|\\uD811[\\uDC00-\\uDE46]|\\uD818[\\uDD00-\\uDD1D]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDE70-\\uDEBE\\uDED0-\\uDEED\\uDF00-\\uDF2F\\uDF40-\\uDF43\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDD40-\\uDD6C\\uDE40-\\uDE7F\\uDF00-\\uDF4A\\uDF50\\uDF93-\\uDF9F\\uDFE0\\uDFE1\\uDFE3]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99]|\\uD835[\\uDC00-\\uDC54\\uDC56-\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD1E-\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD52-\\uDEA5\\uDEA8-\\uDEC0\\uDEC2-\\uDEDA\\uDEDC-\\uDEFA\\uDEFC-\\uDF14\\uDF16-\\uDF34\\uDF36-\\uDF4E\\uDF50-\\uDF6E\\uDF70-\\uDF88\\uDF8A-\\uDFA8\\uDFAA-\\uDFC2\\uDFC4-\\uDFCB]|\\uD837[\\uDF00-\\uDF1E\\uDF25-\\uDF2A]|\\uD838[\\uDC30-\\uDC6D\\uDD00-\\uDD2C\\uDD37-\\uDD3D\\uDD4E\\uDE90-\\uDEAD\\uDEC0-\\uDEEB]|\\uD839[\\uDCD0-\\uDCEB\\uDDD0-\\uDDED\\uDDF0\\uDFE0-\\uDFE6\\uDFE8-\\uDFEB\\uDFED\\uDFEE\\uDFF0-\\uDFFE]|\\uD83A[\\uDC00-\\uDCC4\\uDD00-\\uDD43\\uDD4B]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD83C[\\uDD30-\\uDD49\\uDD50-\\uDD69\\uDD70-\\uDD89])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$CR": "\\r",
        "$Double_Quote": '("(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)',
        "$ExtPict": "(?:[\\xA9\\xAE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21A9\\u21AA\\u231A\\u231B\\u2328\\u2388\\u23CF\\u23E9-\\u23F3\\u23F8-\\u23FA\\u24C2\\u25AA\\u25AB\\u25B6\\u25C0\\u25FB-\\u25FE\\u2600-\\u2605\\u2607-\\u2612\\u2614-\\u2685\\u2690-\\u2705\\u2708-\\u2712\\u2714\\u2716\\u271D\\u2721\\u2728\\u2733\\u2734\\u2744\\u2747\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2763-\\u2767\\u2795-\\u2797\\u27A1\\u27B0\\u27BF\\u2934\\u2935\\u2B05-\\u2B07\\u2B1B\\u2B1C\\u2B50\\u2B55\\u3030\\u303D\\u3297\\u3299]|\\uD83C[\\uDC00-\\uDCFF\\uDD0D-\\uDD0F\\uDD2F\\uDD6C-\\uDD71\\uDD7E\\uDD7F\\uDD8E\\uDD91-\\uDD9A\\uDDAD-\\uDDE5\\uDE01-\\uDE0F\\uDE1A\\uDE2F\\uDE32-\\uDE3A\\uDE3C-\\uDE3F\\uDE49-\\uDFFA]|\\uD83D[\\uDC00-\\uDD3D\\uDD46-\\uDE4F\\uDE80-\\uDEFF\\uDF74-\\uDF7F\\uDFD5-\\uDFFF]|\\uD83E[\\uDC0C-\\uDC0F\\uDC48-\\uDC4F\\uDC5A-\\uDC5F\\uDC88-\\uDC8F\\uDCAE-\\uDCFF\\uDD0C-\\uDD3A\\uDD3C-\\uDD45\\uDD47-\\uDEFF]|\\uD83F[\\uDC00-\\uDFFD])",
        "$Extend": "(?:[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFF9E\\uFF9F]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
        "$ExtendNumLet": "([_\\u202F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$FE": "(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
        "$Format": "(?:[\\xAD\\u061C\\u180E\\u200E\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\uFEFF\\uFFF9-\\uFFFB]|\\uD80D[\\uDC30-\\uDC3F]|\\uD82F[\\uDCA0-\\uDCA3]|\\uD834[\\uDD73-\\uDD7A]|\\uDB40\\uDC01)",
        "$Hebrew_Letter": "([\\u05D0-\\u05EA\\u05EF-\\u05F2\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFB4F](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$Katakana": "((?:[\\u3031-\\u3035\\u309B\\u309C\\u30A0-\\u30FA\\u30FC-\\u30FF\\u31F0-\\u31FF\\u32D0-\\u32FE\\u3300-\\u3357\\uFF66-\\uFF9D]|\\uD82B[\\uDFF0-\\uDFF3\\uDFF5-\\uDFFB\\uDFFD\\uDFFE]|\\uD82C[\\uDC00\\uDD20-\\uDD22\\uDD55\\uDD64-\\uDD67])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$LF": "\\n",
        "$MidLetter": "([:\\xB7\\u0387\\u055F\\u05F4\\u2027\\uFE13\\uFE55\\uFF1A](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$MidNum": "([,;\\u037E\\u0589\\u060C\\u060D\\u066C\\u07F8\\u2044\\uFE50\\uFE54\\uFF0C\\uFF1B](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$MidNumLet": "([\\.\\u2018\\u2019\\u2024\\uFE52\\uFF07\\uFF0E](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$MidNumLetQ": "(([\\.\\u2018\\u2019\\u2024\\uFE52\\uFF07\\uFF0E]|')(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$Newline": "[\\x0B\\f\\x85\\u2028\\u2029]",
        "$NotBreak_": "(?:[\\0-\\t\\x0E-\\x84\\x86-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])",
        "$Numeric": "((?:[0-9\\u0600-\\u0605\\u0660-\\u0669\\u066B\\u06DD\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0890\\u0891\\u08E2\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19DA\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]|\\uD801[\\uDCA0-\\uDCA9]|[\\uD803\\uD818][\\uDD30-\\uDD39\\uDD40-\\uDD49]|\\uD804[\\uDC66-\\uDC6F\\uDCBD\\uDCCD\\uDCF0-\\uDCF9\\uDD36-\\uDD3F\\uDDD0-\\uDDD9\\uDEF0-\\uDEF9]|\\uD805[\\uDC50-\\uDC59\\uDCD0-\\uDCD9\\uDE50-\\uDE59\\uDEC0-\\uDEC9\\uDED0-\\uDEE3\\uDF30-\\uDF39]|\\uD806[\\uDCE0-\\uDCE9\\uDD50-\\uDD59\\uDFF0-\\uDFF9]|\\uD807[\\uDC50-\\uDC59\\uDD50-\\uDD59\\uDDA0-\\uDDA9\\uDF50-\\uDF59]|\\uD81A[\\uDE60-\\uDE69\\uDEC0-\\uDEC9\\uDF50-\\uDF59]|\\uD81B[\\uDD70-\\uDD79]|\\uD833[\\uDCF0-\\uDCF9]|\\uD835[\\uDFCE-\\uDFFF]|\\uD838[\\uDD40-\\uDD49\\uDEF0-\\uDEF9]|\\uD839[\\uDCF0-\\uDCF9\\uDDF1-\\uDDFA]|\\uD83A[\\uDD50-\\uDD59]|\\uD83E[\\uDFF0-\\uDFF9])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$RI": "((?:\\uD83C[\\uDDE6-\\uDDFF])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$Single_Quote": "('(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
        "$WSegSpace": "[ \\u1680\\u2000-\\u2006\\u2008-\\u200A\\u205F\\u3000]",
        "$ZWJ": "\\u200D"
      }
    }
  },
  "ru": {
    "sentence": {
      "segmentRules": {},
      "suppressions": [
        "руб.",
        "янв.",
        "до н. э.",
        "сент.",
        "тел.",
        "дек.",
        "февр.",
        "нояб.",
        "апр.",
        "н. э.",
        "окт.",
        "тыс.",
        "авг.",
        "проф.",
        "н.э.",
        "кв.",
        "ул.",
        "отд."
      ],
      "variables": {}
    }
  },
  "zh": {}
};
var segmentationUtils = {};
Object.defineProperty(segmentationUtils, "__esModule", { value: true });
segmentationUtils.isSurrogate = segmentationUtils.replaceVariables = void 0;
var replaceVariables = function(variables, input) {
  var findVarRegex = /\$[A-Za-z0-9_]+/gm;
  return input.replaceAll(findVarRegex, function(match2) {
    if (!(match2 in variables)) {
      throw new Error("No such variable ".concat(match2));
    }
    return variables[match2];
  });
};
segmentationUtils.replaceVariables = replaceVariables;
var isSurrogate = function(str, pos) {
  return 55296 <= str.charCodeAt(pos - 1) && str.charCodeAt(pos - 1) <= 56319 && 56320 <= str.charCodeAt(pos) && str.charCodeAt(pos) <= 57343;
};
segmentationUtils.isSurrogate = isSurrogate;
Object.defineProperty(segmenter, "__esModule", { value: true });
segmenter.Segmenter = void 0;
var tslib_1 = require$$0;
var ecma402_abstract_1 = require$$1;
var intl_localematcher_1 = require$$2;
var cldr_segmentation_rules_generated_1 = cldrSegmentationRules_generated;
var segmentation_utils_1 = segmentationUtils;
var generateRuleRegex = function(rule, variables, after) {
  return new RegExp("".concat(after ? "^" : "").concat((0, segmentation_utils_1.replaceVariables)(variables, rule)).concat(after ? "" : "$"));
};
var prepareLocaleSegmentationRules = function(segmentationTypeValue) {
  var preparedRules = {};
  for (var _i = 0, _a = Object.keys(segmentationTypeValue.segmentRules); _i < _a.length; _i++) {
    var ruleNr = _a[_i];
    var ruleValue = segmentationTypeValue.segmentRules[ruleNr];
    var preparedRule = {
      breaks: ruleValue.breaks
    };
    if ("before" in ruleValue && ruleValue.before) {
      preparedRule.before = generateRuleRegex(ruleValue.before, segmentationTypeValue.variables, false);
    }
    if ("after" in ruleValue && ruleValue.after) {
      preparedRule.after = generateRuleRegex(ruleValue.after, segmentationTypeValue.variables, true);
    }
    preparedRules[ruleNr] = preparedRule;
  }
  return preparedRules;
};
var breaksAtResult = function(breaks, matchingRule) {
  return {
    breaks,
    matchingRule
  };
};
var Segmenter = (
  /** @class */
  function() {
    function Segmenter2(locales, options) {
      var _newTarget = this.constructor;
      if (_newTarget === void 0) {
        throw TypeError("Constructor Intl.Segmenter requires 'new'");
      }
      var requestedLocales = (0, ecma402_abstract_1.CanonicalizeLocaleList)(locales);
      options = (0, ecma402_abstract_1.GetOptionsObject)(options);
      var opt = /* @__PURE__ */ Object.create(null);
      var matcher = (0, ecma402_abstract_1.GetOption)(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
      opt.localeMatcher = matcher;
      var granularity = (0, ecma402_abstract_1.GetOption)(options, "granularity", "string", ["word", "sentence", "grapheme"], "grapheme");
      setSlot(this, "granularity", granularity);
      var r = (0, intl_localematcher_1.ResolveLocale)(
        Segmenter2.availableLocales,
        //availible locales
        requestedLocales,
        opt,
        [],
        // there is no relevantExtensionKeys
        {},
        function() {
          return "";
        }
        //use only root rules
      );
      setSlot(this, "locale", r.locale);
      this.mergedSegmentationTypeValue = cldr_segmentation_rules_generated_1.SegmentationRules.root[granularity];
      if (r.locale.length) {
        var localeOverrides = cldr_segmentation_rules_generated_1.SegmentationRules[r.locale];
        if (granularity in localeOverrides) {
          var localeSegmentationTypeValue = localeOverrides[granularity];
          this.mergedSegmentationTypeValue.variables = tslib_1.__assign(tslib_1.__assign({}, this.mergedSegmentationTypeValue.variables), localeSegmentationTypeValue.variables);
          this.mergedSegmentationTypeValue.segmentRules = tslib_1.__assign(tslib_1.__assign({}, this.mergedSegmentationTypeValue.segmentRules), localeSegmentationTypeValue.segmentRules);
          this.mergedSegmentationTypeValue.suppressions = tslib_1.__spreadArray(tslib_1.__spreadArray([], this.mergedSegmentationTypeValue.suppressions, true), localeSegmentationTypeValue.suppressions, true);
        }
      }
      this.rules = prepareLocaleSegmentationRules(this.mergedSegmentationTypeValue);
      this.ruleSortedKeys = Object.keys(this.rules).sort(function(a, b) {
        return Number(a) - Number(b);
      });
    }
    Segmenter2.prototype.breaksAt = function(position, input) {
      var ruleSortedKeys = this.ruleSortedKeys;
      var rules = this.rules;
      var mergedSegmentationTypeValue = this.mergedSegmentationTypeValue;
      if (position === 0) {
        return breaksAtResult(true, "0.2");
      }
      if (position === input.length) {
        return breaksAtResult(true, "0.3");
      }
      if ((0, segmentation_utils_1.isSurrogate)(input, position)) {
        return breaksAtResult(false, "0.1");
      }
      var stringBeforeBreak = input.substring(0, position);
      var stringAfterBreak = input.substring(position);
      if ("suppressions" in mergedSegmentationTypeValue) {
        for (var _i = 0, _a = mergedSegmentationTypeValue.suppressions; _i < _a.length; _i++) {
          var suppressions = _a[_i];
          if (stringBeforeBreak.trim().endsWith(suppressions)) {
            return breaksAtResult(false, "0.4");
          }
        }
      }
      for (var _b = 0, ruleSortedKeys_1 = ruleSortedKeys; _b < ruleSortedKeys_1.length; _b++) {
        var ruleKey = ruleSortedKeys_1[_b];
        var _c = rules[ruleKey], before = _c.before, after = _c.after, breaks = _c.breaks;
        if (before) {
          if (!before.test(stringBeforeBreak)) {
            continue;
          }
        }
        if (after) {
          if (!after.test(stringAfterBreak)) {
            continue;
          }
        }
        return breaksAtResult(breaks, ruleKey);
      }
      return breaksAtResult(true, "999");
    };
    Segmenter2.prototype.segment = function(input) {
      checkReceiver(this, "segment");
      return new SegmentIterator(this, input);
    };
    Segmenter2.prototype.resolvedOptions = function() {
      checkReceiver(this, "resolvedOptions");
      return tslib_1.__assign({}, (0, ecma402_abstract_1.getMultiInternalSlots)(__INTERNAL_SLOT_MAP__, this, "locale", "granularity"));
    };
    Segmenter2.supportedLocalesOf = function(locales, options) {
      return (0, ecma402_abstract_1.SupportedLocales)(Segmenter2.availableLocales, (0, ecma402_abstract_1.CanonicalizeLocaleList)(locales), options);
    };
    Segmenter2.availableLocales = new Set(Object.keys(cldr_segmentation_rules_generated_1.SegmentationRules).filter(function(key) {
      return key !== "root";
    }));
    Segmenter2.polyfilled = true;
    return Segmenter2;
  }()
);
segmenter.Segmenter = Segmenter;
var createSegmentDataObject = function(segmenter2, segment, index, input, matchingRule) {
  var returnValue = {
    segment,
    index,
    input
  };
  if (getSlot(segmenter2, "granularity") === "word") {
    returnValue.isWordLike = matchingRule !== "3.1" && matchingRule !== "3.2";
  }
  return returnValue;
};
var SegmentIterator = (
  /** @class */
  function() {
    function SegmentIterator2(segmenter2, input) {
      this.segmenter = segmenter2;
      this.lastSegmentIndex = 0;
      if (typeof input == "symbol") {
        throw TypeError("Input must not be a symbol");
      }
      this.input = String(input);
    }
    SegmentIterator2.prototype[Symbol.iterator] = function() {
      return new SegmentIterator2(this.segmenter, this.input);
    };
    SegmentIterator2.prototype.next = function() {
      var checkString = this.input.substring(this.lastSegmentIndex);
      for (var position = 1; position <= checkString.length; position++) {
        var _a = this.segmenter.breaksAt(position, checkString), breaks = _a.breaks, matchingRule = _a.matchingRule;
        if (breaks) {
          var segment = checkString.substring(0, position);
          var index = this.lastSegmentIndex;
          this.lastSegmentIndex += position;
          return {
            done: false,
            value: createSegmentDataObject(this.segmenter, segment, index, this.input, matchingRule)
          };
        }
      }
      return { done: true, value: void 0 };
    };
    SegmentIterator2.prototype.containing = function(positionInput) {
      if (typeof positionInput === "bigint") {
        throw TypeError("Index must not be a BigInt");
      }
      var position = Number(positionInput);
      if (isNaN(position) || !position) {
        position = 0;
      }
      position = Math.floor(Math.abs(position)) * (position < 0 ? -1 : 1);
      if (position < 0 || position >= this.input.length) {
        return void 0;
      }
      var previousBreakPoint = 0;
      if (position === 0) {
        previousBreakPoint = 0;
      } else {
        var checkString_1 = this.input;
        for (var cursor = position; cursor >= 0; cursor--) {
          var breaks = this.segmenter.breaksAt(cursor, checkString_1).breaks;
          if (breaks) {
            previousBreakPoint = cursor;
            break;
          }
        }
      }
      var checkString = this.input.substring(previousBreakPoint);
      for (var cursor = 1; cursor <= checkString.length; cursor++) {
        var _a = this.segmenter.breaksAt(cursor, checkString), breaks = _a.breaks, matchingRule = _a.matchingRule;
        if (breaks) {
          var segment = checkString.substring(0, cursor);
          return createSegmentDataObject(this.segmenter, segment, previousBreakPoint, this.input, matchingRule);
        }
      }
    };
    return SegmentIterator2;
  }()
);
var __INTERNAL_SLOT_MAP__ = /* @__PURE__ */ new WeakMap();
function getSlot(instance2, key) {
  return (0, ecma402_abstract_1.getInternalSlot)(__INTERNAL_SLOT_MAP__, instance2, key);
}
function setSlot(instance2, key, value) {
  (0, ecma402_abstract_1.setInternalSlot)(__INTERNAL_SLOT_MAP__, instance2, key, value);
}
function checkReceiver(receiver, methodName) {
  if (!(receiver instanceof Segmenter)) {
    throw TypeError("Method Intl.Segmenter.prototype.".concat(methodName, " called on incompatible receiver"));
  }
}
try {
  if (typeof Symbol !== "undefined") {
    Object.defineProperty(Segmenter.prototype, Symbol.toStringTag, {
      value: "Intl.Segmenter",
      writable: false,
      enumerable: false,
      configurable: true
    });
  }
  https: Object.defineProperty(Segmenter.prototype.constructor, "length", {
    value: 0,
    writable: false,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Segmenter.supportedLocalesOf, "length", {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: true
  });
} catch (e) {
}
var shouldPolyfill$1 = {};
Object.defineProperty(shouldPolyfill$1, "__esModule", { value: true });
shouldPolyfill$1.shouldPolyfill = shouldPolyfill;
function shouldPolyfill() {
  return !Intl.Segmenter;
}
var segmenter_1 = segmenter;
var should_polyfill_1 = shouldPolyfill$1;
if ((0, should_polyfill_1.shouldPolyfill)()) {
  Object.defineProperty(Intl, "Segmenter", {
    value: segmenter_1.Segmenter,
    enumerable: false,
    writable: true,
    configurable: true
  });
}
const { abs: abs$1, cos: cos$1, sin: sin$1, acos: acos$1, atan2, sqrt: sqrt$1, pow } = Math;
function crt(v) {
  return v < 0 ? -pow(-v, 1 / 3) : pow(v, 1 / 3);
}
const pi$1 = Math.PI, tau = 2 * pi$1, quart = pi$1 / 2, epsilon = 1e-6, nMax = Number.MAX_SAFE_INTEGER || 9007199254740991, nMin = Number.MIN_SAFE_INTEGER || -9007199254740991, ZERO = { x: 0, y: 0, z: 0 };
const utils = {
  // Legendre-Gauss abscissae with n=24 (x_i values, defined at i=n as the roots of the nth order Legendre polynomial Pn(x))
  Tvalues: [
    -0.06405689286260563,
    0.06405689286260563,
    -0.1911188674736163,
    0.1911188674736163,
    -0.3150426796961634,
    0.3150426796961634,
    -0.4337935076260451,
    0.4337935076260451,
    -0.5454214713888396,
    0.5454214713888396,
    -0.6480936519369755,
    0.6480936519369755,
    -0.7401241915785544,
    0.7401241915785544,
    -0.820001985973903,
    0.820001985973903,
    -0.8864155270044011,
    0.8864155270044011,
    -0.9382745520027328,
    0.9382745520027328,
    -0.9747285559713095,
    0.9747285559713095,
    -0.9951872199970213,
    0.9951872199970213
  ],
  // Legendre-Gauss weights with n=24 (w_i values, defined by a function linked to in the Bezier primer article)
  Cvalues: [
    0.12793819534675216,
    0.12793819534675216,
    0.1258374563468283,
    0.1258374563468283,
    0.12167047292780339,
    0.12167047292780339,
    0.1155056680537256,
    0.1155056680537256,
    0.10744427011596563,
    0.10744427011596563,
    0.09761865210411388,
    0.09761865210411388,
    0.08619016153195327,
    0.08619016153195327,
    0.0733464814110803,
    0.0733464814110803,
    0.05929858491543678,
    0.05929858491543678,
    0.04427743881741981,
    0.04427743881741981,
    0.028531388628933663,
    0.028531388628933663,
    0.0123412297999872,
    0.0123412297999872
  ],
  arcfn: function(t2, derivativeFn) {
    const d = derivativeFn(t2);
    let l = d.x * d.x + d.y * d.y;
    if (typeof d.z !== "undefined") {
      l += d.z * d.z;
    }
    return sqrt$1(l);
  },
  compute: function(t2, points, _3d) {
    if (t2 === 0) {
      points[0].t = 0;
      return points[0];
    }
    const order = points.length - 1;
    if (t2 === 1) {
      points[order].t = 1;
      return points[order];
    }
    const mt = 1 - t2;
    let p = points;
    if (order === 0) {
      points[0].t = t2;
      return points[0];
    }
    if (order === 1) {
      const ret = {
        x: mt * p[0].x + t2 * p[1].x,
        y: mt * p[0].y + t2 * p[1].y,
        t: t2
      };
      if (_3d) {
        ret.z = mt * p[0].z + t2 * p[1].z;
      }
      return ret;
    }
    if (order < 4) {
      let mt2 = mt * mt, t22 = t2 * t2, a, b, c, d = 0;
      if (order === 2) {
        p = [p[0], p[1], p[2], ZERO];
        a = mt2;
        b = mt * t2 * 2;
        c = t22;
      } else if (order === 3) {
        a = mt2 * mt;
        b = mt2 * t2 * 3;
        c = mt * t22 * 3;
        d = t2 * t22;
      }
      const ret = {
        x: a * p[0].x + b * p[1].x + c * p[2].x + d * p[3].x,
        y: a * p[0].y + b * p[1].y + c * p[2].y + d * p[3].y,
        t: t2
      };
      if (_3d) {
        ret.z = a * p[0].z + b * p[1].z + c * p[2].z + d * p[3].z;
      }
      return ret;
    }
    const dCpts = JSON.parse(JSON.stringify(points));
    while (dCpts.length > 1) {
      for (let i = 0; i < dCpts.length - 1; i++) {
        dCpts[i] = {
          x: dCpts[i].x + (dCpts[i + 1].x - dCpts[i].x) * t2,
          y: dCpts[i].y + (dCpts[i + 1].y - dCpts[i].y) * t2
        };
        if (typeof dCpts[i].z !== "undefined") {
          dCpts[i].z = dCpts[i].z + (dCpts[i + 1].z - dCpts[i].z) * t2;
        }
      }
      dCpts.splice(dCpts.length - 1, 1);
    }
    dCpts[0].t = t2;
    return dCpts[0];
  },
  computeWithRatios: function(t2, points, ratios, _3d) {
    const mt = 1 - t2, r = ratios, p = points;
    let f1 = r[0], f2 = r[1], f3 = r[2], f4 = r[3], d;
    f1 *= mt;
    f2 *= t2;
    if (p.length === 2) {
      d = f1 + f2;
      return {
        x: (f1 * p[0].x + f2 * p[1].x) / d,
        y: (f1 * p[0].y + f2 * p[1].y) / d,
        z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z) / d,
        t: t2
      };
    }
    f1 *= mt;
    f2 *= 2 * mt;
    f3 *= t2 * t2;
    if (p.length === 3) {
      d = f1 + f2 + f3;
      return {
        x: (f1 * p[0].x + f2 * p[1].x + f3 * p[2].x) / d,
        y: (f1 * p[0].y + f2 * p[1].y + f3 * p[2].y) / d,
        z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z + f3 * p[2].z) / d,
        t: t2
      };
    }
    f1 *= mt;
    f2 *= 1.5 * mt;
    f3 *= 3 * mt;
    f4 *= t2 * t2 * t2;
    if (p.length === 4) {
      d = f1 + f2 + f3 + f4;
      return {
        x: (f1 * p[0].x + f2 * p[1].x + f3 * p[2].x + f4 * p[3].x) / d,
        y: (f1 * p[0].y + f2 * p[1].y + f3 * p[2].y + f4 * p[3].y) / d,
        z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z + f3 * p[2].z + f4 * p[3].z) / d,
        t: t2
      };
    }
  },
  derive: function(points, _3d) {
    const dpoints = [];
    for (let p = points, d = p.length, c = d - 1; d > 1; d--, c--) {
      const list = [];
      for (let j = 0, dpt; j < c; j++) {
        dpt = {
          x: c * (p[j + 1].x - p[j].x),
          y: c * (p[j + 1].y - p[j].y)
        };
        if (_3d) {
          dpt.z = c * (p[j + 1].z - p[j].z);
        }
        list.push(dpt);
      }
      dpoints.push(list);
      p = list;
    }
    return dpoints;
  },
  between: function(v, m, M) {
    return m <= v && v <= M || utils.approximately(v, m) || utils.approximately(v, M);
  },
  approximately: function(a, b, precision) {
    return abs$1(a - b) <= (precision || epsilon);
  },
  length: function(derivativeFn) {
    const z = 0.5, len = utils.Tvalues.length;
    let sum2 = 0;
    for (let i = 0, t2; i < len; i++) {
      t2 = z * utils.Tvalues[i] + z;
      sum2 += utils.Cvalues[i] * utils.arcfn(t2, derivativeFn);
    }
    return z * sum2;
  },
  map: function(v, ds, de, ts, te) {
    const d1 = de - ds, d2 = te - ts, v2 = v - ds, r = v2 / d1;
    return ts + d2 * r;
  },
  lerp: function(r, v1, v2) {
    const ret = {
      x: v1.x + r * (v2.x - v1.x),
      y: v1.y + r * (v2.y - v1.y)
    };
    if (v1.z !== void 0 && v2.z !== void 0) {
      ret.z = v1.z + r * (v2.z - v1.z);
    }
    return ret;
  },
  pointToString: function(p) {
    let s = p.x + "/" + p.y;
    if (typeof p.z !== "undefined") {
      s += "/" + p.z;
    }
    return s;
  },
  pointsToString: function(points) {
    return "[" + points.map(utils.pointToString).join(", ") + "]";
  },
  copy: function(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  angle: function(o, v1, v2) {
    const dx1 = v1.x - o.x, dy1 = v1.y - o.y, dx2 = v2.x - o.x, dy2 = v2.y - o.y, cross = dx1 * dy2 - dy1 * dx2, dot = dx1 * dx2 + dy1 * dy2;
    return atan2(cross, dot);
  },
  // round as string, to avoid rounding errors
  round: function(v, d) {
    const s = "" + v;
    const pos = s.indexOf(".");
    return parseFloat(s.substring(0, pos + 1 + d));
  },
  dist: function(p1, p2) {
    const dx = p1.x - p2.x, dy = p1.y - p2.y;
    return sqrt$1(dx * dx + dy * dy);
  },
  closest: function(LUT, point) {
    let mdist = pow(2, 63), mpos, d;
    LUT.forEach(function(p, idx) {
      d = utils.dist(point, p);
      if (d < mdist) {
        mdist = d;
        mpos = idx;
      }
    });
    return { mdist, mpos };
  },
  abcratio: function(t2, n) {
    if (n !== 2 && n !== 3) {
      return false;
    }
    if (typeof t2 === "undefined") {
      t2 = 0.5;
    } else if (t2 === 0 || t2 === 1) {
      return t2;
    }
    const bottom = pow(t2, n) + pow(1 - t2, n), top = bottom - 1;
    return abs$1(top / bottom);
  },
  projectionratio: function(t2, n) {
    if (n !== 2 && n !== 3) {
      return false;
    }
    if (typeof t2 === "undefined") {
      t2 = 0.5;
    } else if (t2 === 0 || t2 === 1) {
      return t2;
    }
    const top = pow(1 - t2, n), bottom = pow(t2, n) + top;
    return top / bottom;
  },
  lli8: function(x1, y1, x2, y2, x3, y3, x4, y4) {
    const nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4), ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4), d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (d == 0) {
      return false;
    }
    return { x: nx / d, y: ny / d };
  },
  lli4: function(p1, p2, p3, p4) {
    const x1 = p1.x, y1 = p1.y, x2 = p2.x, y2 = p2.y, x3 = p3.x, y3 = p3.y, x4 = p4.x, y4 = p4.y;
    return utils.lli8(x1, y1, x2, y2, x3, y3, x4, y4);
  },
  lli: function(v1, v2) {
    return utils.lli4(v1, v1.c, v2, v2.c);
  },
  makeline: function(p1, p2) {
    return new Bezier(
      p1.x,
      p1.y,
      (p1.x + p2.x) / 2,
      (p1.y + p2.y) / 2,
      p2.x,
      p2.y
    );
  },
  findbbox: function(sections) {
    let mx = nMax, my = nMax, MX = nMin, MY = nMin;
    sections.forEach(function(s) {
      const bbox = s.bbox();
      if (mx > bbox.x.min) mx = bbox.x.min;
      if (my > bbox.y.min) my = bbox.y.min;
      if (MX < bbox.x.max) MX = bbox.x.max;
      if (MY < bbox.y.max) MY = bbox.y.max;
    });
    return {
      x: { min: mx, mid: (mx + MX) / 2, max: MX, size: MX - mx },
      y: { min: my, mid: (my + MY) / 2, max: MY, size: MY - my }
    };
  },
  shapeintersections: function(s1, bbox1, s2, bbox2, curveIntersectionThreshold) {
    if (!utils.bboxoverlap(bbox1, bbox2)) return [];
    const intersections = [];
    const a1 = [s1.startcap, s1.forward, s1.back, s1.endcap];
    const a2 = [s2.startcap, s2.forward, s2.back, s2.endcap];
    a1.forEach(function(l1) {
      if (l1.virtual) return;
      a2.forEach(function(l2) {
        if (l2.virtual) return;
        const iss = l1.intersects(l2, curveIntersectionThreshold);
        if (iss.length > 0) {
          iss.c1 = l1;
          iss.c2 = l2;
          iss.s1 = s1;
          iss.s2 = s2;
          intersections.push(iss);
        }
      });
    });
    return intersections;
  },
  makeshape: function(forward, back, curveIntersectionThreshold) {
    const bpl = back.points.length;
    const fpl = forward.points.length;
    const start = utils.makeline(back.points[bpl - 1], forward.points[0]);
    const end = utils.makeline(forward.points[fpl - 1], back.points[0]);
    const shape = {
      startcap: start,
      forward,
      back,
      endcap: end,
      bbox: utils.findbbox([start, forward, back, end])
    };
    shape.intersections = function(s2) {
      return utils.shapeintersections(
        shape,
        shape.bbox,
        s2,
        s2.bbox,
        curveIntersectionThreshold
      );
    };
    return shape;
  },
  getminmax: function(curve, d, list) {
    if (!list) return { min: 0, max: 0 };
    let min2 = nMax, max2 = nMin, t2, c;
    if (list.indexOf(0) === -1) {
      list = [0].concat(list);
    }
    if (list.indexOf(1) === -1) {
      list.push(1);
    }
    for (let i = 0, len = list.length; i < len; i++) {
      t2 = list[i];
      c = curve.get(t2);
      if (c[d] < min2) {
        min2 = c[d];
      }
      if (c[d] > max2) {
        max2 = c[d];
      }
    }
    return { min: min2, mid: (min2 + max2) / 2, max: max2, size: max2 - min2 };
  },
  align: function(points, line) {
    const tx = line.p1.x, ty = line.p1.y, a = -atan2(line.p2.y - ty, line.p2.x - tx), d = function(v) {
      return {
        x: (v.x - tx) * cos$1(a) - (v.y - ty) * sin$1(a),
        y: (v.x - tx) * sin$1(a) + (v.y - ty) * cos$1(a)
      };
    };
    return points.map(d);
  },
  roots: function(points, line) {
    line = line || { p1: { x: 0, y: 0 }, p2: { x: 1, y: 0 } };
    const order = points.length - 1;
    const aligned = utils.align(points, line);
    const reduce = function(t2) {
      return 0 <= t2 && t2 <= 1;
    };
    if (order === 2) {
      const a2 = aligned[0].y, b2 = aligned[1].y, c2 = aligned[2].y, d2 = a2 - 2 * b2 + c2;
      if (d2 !== 0) {
        const m1 = -sqrt$1(b2 * b2 - a2 * c2), m2 = -a2 + b2, v12 = -(m1 + m2) / d2, v2 = -(-m1 + m2) / d2;
        return [v12, v2].filter(reduce);
      } else if (b2 !== c2 && d2 === 0) {
        return [(2 * b2 - c2) / (2 * b2 - 2 * c2)].filter(reduce);
      }
      return [];
    }
    const pa = aligned[0].y, pb = aligned[1].y, pc = aligned[2].y, pd = aligned[3].y;
    let d = -pa + 3 * pb - 3 * pc + pd, a = 3 * pa - 6 * pb + 3 * pc, b = -3 * pa + 3 * pb, c = pa;
    if (utils.approximately(d, 0)) {
      if (utils.approximately(a, 0)) {
        if (utils.approximately(b, 0)) {
          return [];
        }
        return [-c / b].filter(reduce);
      }
      const q3 = sqrt$1(b * b - 4 * a * c), a2 = 2 * a;
      return [(q3 - b) / a2, (-b - q3) / a2].filter(reduce);
    }
    a /= d;
    b /= d;
    c /= d;
    const p = (3 * b - a * a) / 3, p3 = p / 3, q = (2 * a * a * a - 9 * a * b + 27 * c) / 27, q2 = q / 2, discriminant = q2 * q2 + p3 * p3 * p3;
    let u1, v1, x1, x2, x3;
    if (discriminant < 0) {
      const mp3 = -p / 3, mp33 = mp3 * mp3 * mp3, r = sqrt$1(mp33), t2 = -q / (2 * r), cosphi = t2 < -1 ? -1 : t2 > 1 ? 1 : t2, phi = acos$1(cosphi), crtr = crt(r), t1 = 2 * crtr;
      x1 = t1 * cos$1(phi / 3) - a / 3;
      x2 = t1 * cos$1((phi + tau) / 3) - a / 3;
      x3 = t1 * cos$1((phi + 2 * tau) / 3) - a / 3;
      return [x1, x2, x3].filter(reduce);
    } else if (discriminant === 0) {
      u1 = q2 < 0 ? crt(-q2) : -crt(q2);
      x1 = 2 * u1 - a / 3;
      x2 = -u1 - a / 3;
      return [x1, x2].filter(reduce);
    } else {
      const sd = sqrt$1(discriminant);
      u1 = crt(-q2 + sd);
      v1 = crt(q2 + sd);
      return [u1 - v1 - a / 3].filter(reduce);
    }
  },
  droots: function(p) {
    if (p.length === 3) {
      const a = p[0], b = p[1], c = p[2], d = a - 2 * b + c;
      if (d !== 0) {
        const m1 = -sqrt$1(b * b - a * c), m2 = -a + b, v1 = -(m1 + m2) / d, v2 = -(-m1 + m2) / d;
        return [v1, v2];
      } else if (b !== c && d === 0) {
        return [(2 * b - c) / (2 * (b - c))];
      }
      return [];
    }
    if (p.length === 2) {
      const a = p[0], b = p[1];
      if (a !== b) {
        return [a / (a - b)];
      }
      return [];
    }
    return [];
  },
  curvature: function(t2, d1, d2, _3d, kOnly) {
    let num, dnm, adk, dk, k = 0, r = 0;
    const d = utils.compute(t2, d1);
    const dd = utils.compute(t2, d2);
    const qdsum = d.x * d.x + d.y * d.y;
    if (_3d) {
      num = sqrt$1(
        pow(d.y * dd.z - dd.y * d.z, 2) + pow(d.z * dd.x - dd.z * d.x, 2) + pow(d.x * dd.y - dd.x * d.y, 2)
      );
      dnm = pow(qdsum + d.z * d.z, 3 / 2);
    } else {
      num = d.x * dd.y - d.y * dd.x;
      dnm = pow(qdsum, 3 / 2);
    }
    if (num === 0 || dnm === 0) {
      return { k: 0, r: 0 };
    }
    k = num / dnm;
    r = dnm / num;
    if (!kOnly) {
      const pk = utils.curvature(t2 - 1e-3, d1, d2, _3d, true).k;
      const nk = utils.curvature(t2 + 1e-3, d1, d2, _3d, true).k;
      dk = (nk - k + (k - pk)) / 2;
      adk = (abs$1(nk - k) + abs$1(k - pk)) / 2;
    }
    return { k, r, dk, adk };
  },
  inflections: function(points) {
    if (points.length < 4) return [];
    const p = utils.align(points, { p1: points[0], p2: points.slice(-1)[0] }), a = p[2].x * p[1].y, b = p[3].x * p[1].y, c = p[1].x * p[2].y, d = p[3].x * p[2].y, v1 = 18 * (-3 * a + 2 * b + 3 * c - d), v2 = 18 * (3 * a - b - 3 * c), v3 = 18 * (c - a);
    if (utils.approximately(v1, 0)) {
      if (!utils.approximately(v2, 0)) {
        let t2 = -v3 / v2;
        if (0 <= t2 && t2 <= 1) return [t2];
      }
      return [];
    }
    const d2 = 2 * v1;
    if (utils.approximately(d2, 0)) return [];
    const trm = v2 * v2 - 4 * v1 * v3;
    if (trm < 0) return [];
    const sq = Math.sqrt(trm);
    return [(sq - v2) / d2, -(v2 + sq) / d2].filter(function(r) {
      return 0 <= r && r <= 1;
    });
  },
  bboxoverlap: function(b1, b2) {
    const dims = ["x", "y"], len = dims.length;
    for (let i = 0, dim, l, t2, d; i < len; i++) {
      dim = dims[i];
      l = b1[dim].mid;
      t2 = b2[dim].mid;
      d = (b1[dim].size + b2[dim].size) / 2;
      if (abs$1(l - t2) >= d) return false;
    }
    return true;
  },
  expandbox: function(bbox, _bbox) {
    if (_bbox.x.min < bbox.x.min) {
      bbox.x.min = _bbox.x.min;
    }
    if (_bbox.y.min < bbox.y.min) {
      bbox.y.min = _bbox.y.min;
    }
    if (_bbox.z && _bbox.z.min < bbox.z.min) {
      bbox.z.min = _bbox.z.min;
    }
    if (_bbox.x.max > bbox.x.max) {
      bbox.x.max = _bbox.x.max;
    }
    if (_bbox.y.max > bbox.y.max) {
      bbox.y.max = _bbox.y.max;
    }
    if (_bbox.z && _bbox.z.max > bbox.z.max) {
      bbox.z.max = _bbox.z.max;
    }
    bbox.x.mid = (bbox.x.min + bbox.x.max) / 2;
    bbox.y.mid = (bbox.y.min + bbox.y.max) / 2;
    if (bbox.z) {
      bbox.z.mid = (bbox.z.min + bbox.z.max) / 2;
    }
    bbox.x.size = bbox.x.max - bbox.x.min;
    bbox.y.size = bbox.y.max - bbox.y.min;
    if (bbox.z) {
      bbox.z.size = bbox.z.max - bbox.z.min;
    }
  },
  pairiteration: function(c1, c2, curveIntersectionThreshold) {
    const c1b = c1.bbox(), c2b = c2.bbox(), r = 1e5, threshold = curveIntersectionThreshold || 0.5;
    if (c1b.x.size + c1b.y.size < threshold && c2b.x.size + c2b.y.size < threshold) {
      return [
        (r * (c1._t1 + c1._t2) / 2 | 0) / r + "/" + (r * (c2._t1 + c2._t2) / 2 | 0) / r
      ];
    }
    let cc1 = c1.split(0.5), cc2 = c2.split(0.5), pairs = [
      { left: cc1.left, right: cc2.left },
      { left: cc1.left, right: cc2.right },
      { left: cc1.right, right: cc2.right },
      { left: cc1.right, right: cc2.left }
    ];
    pairs = pairs.filter(function(pair) {
      return utils.bboxoverlap(pair.left.bbox(), pair.right.bbox());
    });
    let results = [];
    if (pairs.length === 0) return results;
    pairs.forEach(function(pair) {
      results = results.concat(
        utils.pairiteration(pair.left, pair.right, threshold)
      );
    });
    results = results.filter(function(v, i) {
      return results.indexOf(v) === i;
    });
    return results;
  },
  getccenter: function(p1, p2, p3) {
    const dx1 = p2.x - p1.x, dy1 = p2.y - p1.y, dx2 = p3.x - p2.x, dy2 = p3.y - p2.y, dx1p = dx1 * cos$1(quart) - dy1 * sin$1(quart), dy1p = dx1 * sin$1(quart) + dy1 * cos$1(quart), dx2p = dx2 * cos$1(quart) - dy2 * sin$1(quart), dy2p = dx2 * sin$1(quart) + dy2 * cos$1(quart), mx1 = (p1.x + p2.x) / 2, my1 = (p1.y + p2.y) / 2, mx2 = (p2.x + p3.x) / 2, my2 = (p2.y + p3.y) / 2, mx1n = mx1 + dx1p, my1n = my1 + dy1p, mx2n = mx2 + dx2p, my2n = my2 + dy2p, arc = utils.lli8(mx1, my1, mx1n, my1n, mx2, my2, mx2n, my2n), r = utils.dist(arc, p1);
    let s = atan2(p1.y - arc.y, p1.x - arc.x), m = atan2(p2.y - arc.y, p2.x - arc.x), e = atan2(p3.y - arc.y, p3.x - arc.x), _;
    if (s < e) {
      if (s > m || m > e) {
        s += tau;
      }
      if (s > e) {
        _ = e;
        e = s;
        s = _;
      }
    } else {
      if (e < m && m < s) {
        _ = e;
        e = s;
        s = _;
      } else {
        e += tau;
      }
    }
    arc.s = s;
    arc.e = e;
    arc.r = r;
    return arc;
  },
  numberSort: function(a, b) {
    return a - b;
  }
};
class PolyBezier {
  constructor(curves) {
    this.curves = [];
    this._3d = false;
    if (!!curves) {
      this.curves = curves;
      this._3d = this.curves[0]._3d;
    }
  }
  valueOf() {
    return this.toString();
  }
  toString() {
    return "[" + this.curves.map(function(curve) {
      return utils.pointsToString(curve.points);
    }).join(", ") + "]";
  }
  addCurve(curve) {
    this.curves.push(curve);
    this._3d = this._3d || curve._3d;
  }
  length() {
    return this.curves.map(function(v) {
      return v.length();
    }).reduce(function(a, b) {
      return a + b;
    });
  }
  curve(idx) {
    return this.curves[idx];
  }
  bbox() {
    const c = this.curves;
    var bbox = c[0].bbox();
    for (var i = 1; i < c.length; i++) {
      utils.expandbox(bbox, c[i].bbox());
    }
    return bbox;
  }
  offset(d) {
    const offset = [];
    this.curves.forEach(function(v) {
      offset.push(...v.offset(d));
    });
    return new PolyBezier(offset);
  }
}
const { abs, min, max, cos, sin, acos, sqrt } = Math;
const pi = Math.PI;
class Bezier {
  constructor(coords) {
    let args = coords && coords.forEach ? coords : Array.from(arguments).slice();
    let coordlen = false;
    if (typeof args[0] === "object") {
      coordlen = args.length;
      const newargs = [];
      args.forEach(function(point2) {
        ["x", "y", "z"].forEach(function(d) {
          if (typeof point2[d] !== "undefined") {
            newargs.push(point2[d]);
          }
        });
      });
      args = newargs;
    }
    let higher = false;
    const len = args.length;
    if (coordlen) {
      if (coordlen > 4) {
        if (arguments.length !== 1) {
          throw new Error(
            "Only new Bezier(point[]) is accepted for 4th and higher order curves"
          );
        }
        higher = true;
      }
    } else {
      if (len !== 6 && len !== 8 && len !== 9 && len !== 12) {
        if (arguments.length !== 1) {
          throw new Error(
            "Only new Bezier(point[]) is accepted for 4th and higher order curves"
          );
        }
      }
    }
    const _3d = this._3d = !higher && (len === 9 || len === 12) || coords && coords[0] && typeof coords[0].z !== "undefined";
    const points = this.points = [];
    for (let idx = 0, step = _3d ? 3 : 2; idx < len; idx += step) {
      var point = {
        x: args[idx],
        y: args[idx + 1]
      };
      if (_3d) {
        point.z = args[idx + 2];
      }
      points.push(point);
    }
    const order = this.order = points.length - 1;
    const dims = this.dims = ["x", "y"];
    if (_3d) dims.push("z");
    this.dimlen = dims.length;
    const aligned = utils.align(points, { p1: points[0], p2: points[order] });
    const baselength = utils.dist(points[0], points[order]);
    this._linear = aligned.reduce((t2, p) => t2 + abs(p.y), 0) < baselength / 50;
    this._lut = [];
    this._t1 = 0;
    this._t2 = 1;
    this.update();
  }
  static quadraticFromPoints(p1, p2, p3, t2) {
    if (typeof t2 === "undefined") {
      t2 = 0.5;
    }
    if (t2 === 0) {
      return new Bezier(p2, p2, p3);
    }
    if (t2 === 1) {
      return new Bezier(p1, p2, p2);
    }
    const abc = Bezier.getABC(2, p1, p2, p3, t2);
    return new Bezier(p1, abc.A, p3);
  }
  static cubicFromPoints(S, B, E, t2, d1) {
    if (typeof t2 === "undefined") {
      t2 = 0.5;
    }
    const abc = Bezier.getABC(3, S, B, E, t2);
    if (typeof d1 === "undefined") {
      d1 = utils.dist(B, abc.C);
    }
    const d2 = d1 * (1 - t2) / t2;
    const selen = utils.dist(S, E), lx = (E.x - S.x) / selen, ly = (E.y - S.y) / selen, bx1 = d1 * lx, by1 = d1 * ly, bx2 = d2 * lx, by2 = d2 * ly;
    const e1 = { x: B.x - bx1, y: B.y - by1 }, e2 = { x: B.x + bx2, y: B.y + by2 }, A = abc.A, v1 = { x: A.x + (e1.x - A.x) / (1 - t2), y: A.y + (e1.y - A.y) / (1 - t2) }, v2 = { x: A.x + (e2.x - A.x) / t2, y: A.y + (e2.y - A.y) / t2 }, nc1 = { x: S.x + (v1.x - S.x) / t2, y: S.y + (v1.y - S.y) / t2 }, nc2 = {
      x: E.x + (v2.x - E.x) / (1 - t2),
      y: E.y + (v2.y - E.y) / (1 - t2)
    };
    return new Bezier(S, nc1, nc2, E);
  }
  static getUtils() {
    return utils;
  }
  getUtils() {
    return Bezier.getUtils();
  }
  static get PolyBezier() {
    return PolyBezier;
  }
  valueOf() {
    return this.toString();
  }
  toString() {
    return utils.pointsToString(this.points);
  }
  toSVG() {
    if (this._3d) return false;
    const p = this.points, x = p[0].x, y = p[0].y, s = ["M", x, y, this.order === 2 ? "Q" : "C"];
    for (let i = 1, last = p.length; i < last; i++) {
      s.push(p[i].x);
      s.push(p[i].y);
    }
    return s.join(" ");
  }
  setRatios(ratios) {
    if (ratios.length !== this.points.length) {
      throw new Error("incorrect number of ratio values");
    }
    this.ratios = ratios;
    this._lut = [];
  }
  verify() {
    const print = this.coordDigest();
    if (print !== this._print) {
      this._print = print;
      this.update();
    }
  }
  coordDigest() {
    return this.points.map(function(c, pos) {
      return "" + pos + c.x + c.y + (c.z ? c.z : 0);
    }).join("");
  }
  update() {
    this._lut = [];
    this.dpoints = utils.derive(this.points, this._3d);
    this.computedirection();
  }
  computedirection() {
    const points = this.points;
    const angle = utils.angle(points[0], points[this.order], points[1]);
    this.clockwise = angle > 0;
  }
  length() {
    return utils.length(this.derivative.bind(this));
  }
  static getABC(order = 2, S, B, E, t2 = 0.5) {
    const u = utils.projectionratio(t2, order), um = 1 - u, C = {
      x: u * S.x + um * E.x,
      y: u * S.y + um * E.y
    }, s = utils.abcratio(t2, order), A = {
      x: B.x + (B.x - C.x) / s,
      y: B.y + (B.y - C.y) / s
    };
    return { A, B, C, S, E };
  }
  getABC(t2, B) {
    B = B || this.get(t2);
    let S = this.points[0];
    let E = this.points[this.order];
    return Bezier.getABC(this.order, S, B, E, t2);
  }
  getLUT(steps) {
    this.verify();
    steps = steps || 100;
    if (this._lut.length === steps + 1) {
      return this._lut;
    }
    this._lut = [];
    steps++;
    this._lut = [];
    for (let i = 0, p, t2; i < steps; i++) {
      t2 = i / (steps - 1);
      p = this.compute(t2);
      p.t = t2;
      this._lut.push(p);
    }
    return this._lut;
  }
  on(point, error) {
    error = error || 5;
    const lut = this.getLUT(), hits = [];
    for (let i = 0, c, t2 = 0; i < lut.length; i++) {
      c = lut[i];
      if (utils.dist(c, point) < error) {
        hits.push(c);
        t2 += i / lut.length;
      }
    }
    if (!hits.length) return false;
    return t /= hits.length;
  }
  project(point) {
    const LUT = this.getLUT(), l = LUT.length - 1, closest = utils.closest(LUT, point), mpos = closest.mpos, t1 = (mpos - 1) / l, t2 = (mpos + 1) / l, step = 0.1 / l;
    let mdist = closest.mdist, t3 = t1, ft = t3, p;
    mdist += 1;
    for (let d; t3 < t2 + step; t3 += step) {
      p = this.compute(t3);
      d = utils.dist(point, p);
      if (d < mdist) {
        mdist = d;
        ft = t3;
      }
    }
    ft = ft < 0 ? 0 : ft > 1 ? 1 : ft;
    p = this.compute(ft);
    p.t = ft;
    p.d = mdist;
    return p;
  }
  get(t2) {
    return this.compute(t2);
  }
  point(idx) {
    return this.points[idx];
  }
  compute(t2) {
    if (this.ratios) {
      return utils.computeWithRatios(t2, this.points, this.ratios, this._3d);
    }
    return utils.compute(t2, this.points, this._3d, this.ratios);
  }
  raise() {
    const p = this.points, np = [p[0]], k = p.length;
    for (let i = 1, pi2, pim; i < k; i++) {
      pi2 = p[i];
      pim = p[i - 1];
      np[i] = {
        x: (k - i) / k * pi2.x + i / k * pim.x,
        y: (k - i) / k * pi2.y + i / k * pim.y
      };
    }
    np[k] = p[k - 1];
    return new Bezier(np);
  }
  derivative(t2) {
    return utils.compute(t2, this.dpoints[0], this._3d);
  }
  dderivative(t2) {
    return utils.compute(t2, this.dpoints[1], this._3d);
  }
  align() {
    let p = this.points;
    return new Bezier(utils.align(p, { p1: p[0], p2: p[p.length - 1] }));
  }
  curvature(t2) {
    return utils.curvature(t2, this.dpoints[0], this.dpoints[1], this._3d);
  }
  inflections() {
    return utils.inflections(this.points);
  }
  normal(t2) {
    return this._3d ? this.__normal3(t2) : this.__normal2(t2);
  }
  __normal2(t2) {
    const d = this.derivative(t2);
    const q = sqrt(d.x * d.x + d.y * d.y);
    return { t: t2, x: -d.y / q, y: d.x / q };
  }
  __normal3(t2) {
    const r1 = this.derivative(t2), r2 = this.derivative(t2 + 0.01), q1 = sqrt(r1.x * r1.x + r1.y * r1.y + r1.z * r1.z), q2 = sqrt(r2.x * r2.x + r2.y * r2.y + r2.z * r2.z);
    r1.x /= q1;
    r1.y /= q1;
    r1.z /= q1;
    r2.x /= q2;
    r2.y /= q2;
    r2.z /= q2;
    const c = {
      x: r2.y * r1.z - r2.z * r1.y,
      y: r2.z * r1.x - r2.x * r1.z,
      z: r2.x * r1.y - r2.y * r1.x
    };
    const m = sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
    c.x /= m;
    c.y /= m;
    c.z /= m;
    const R = [
      c.x * c.x,
      c.x * c.y - c.z,
      c.x * c.z + c.y,
      c.x * c.y + c.z,
      c.y * c.y,
      c.y * c.z - c.x,
      c.x * c.z - c.y,
      c.y * c.z + c.x,
      c.z * c.z
    ];
    const n = {
      t: t2,
      x: R[0] * r1.x + R[1] * r1.y + R[2] * r1.z,
      y: R[3] * r1.x + R[4] * r1.y + R[5] * r1.z,
      z: R[6] * r1.x + R[7] * r1.y + R[8] * r1.z
    };
    return n;
  }
  hull(t2) {
    let p = this.points, _p = [], q = [], idx = 0;
    q[idx++] = p[0];
    q[idx++] = p[1];
    q[idx++] = p[2];
    if (this.order === 3) {
      q[idx++] = p[3];
    }
    while (p.length > 1) {
      _p = [];
      for (let i = 0, pt, l = p.length - 1; i < l; i++) {
        pt = utils.lerp(t2, p[i], p[i + 1]);
        q[idx++] = pt;
        _p.push(pt);
      }
      p = _p;
    }
    return q;
  }
  split(t1, t2) {
    if (t1 === 0 && !!t2) {
      return this.split(t2).left;
    }
    if (t2 === 1) {
      return this.split(t1).right;
    }
    const q = this.hull(t1);
    const result = {
      left: this.order === 2 ? new Bezier([q[0], q[3], q[5]]) : new Bezier([q[0], q[4], q[7], q[9]]),
      right: this.order === 2 ? new Bezier([q[5], q[4], q[2]]) : new Bezier([q[9], q[8], q[6], q[3]]),
      span: q
    };
    result.left._t1 = utils.map(0, 0, 1, this._t1, this._t2);
    result.left._t2 = utils.map(t1, 0, 1, this._t1, this._t2);
    result.right._t1 = utils.map(t1, 0, 1, this._t1, this._t2);
    result.right._t2 = utils.map(1, 0, 1, this._t1, this._t2);
    if (!t2) {
      return result;
    }
    t2 = utils.map(t2, t1, 1, 0, 1);
    return result.right.split(t2).left;
  }
  extrema() {
    const result = {};
    let roots = [];
    this.dims.forEach(
      (function(dim) {
        let mfn = function(v) {
          return v[dim];
        };
        let p = this.dpoints[0].map(mfn);
        result[dim] = utils.droots(p);
        if (this.order === 3) {
          p = this.dpoints[1].map(mfn);
          result[dim] = result[dim].concat(utils.droots(p));
        }
        result[dim] = result[dim].filter(function(t2) {
          return t2 >= 0 && t2 <= 1;
        });
        roots = roots.concat(result[dim].sort(utils.numberSort));
      }).bind(this)
    );
    result.values = roots.sort(utils.numberSort).filter(function(v, idx) {
      return roots.indexOf(v) === idx;
    });
    return result;
  }
  bbox() {
    const extrema = this.extrema(), result = {};
    this.dims.forEach(
      (function(d) {
        result[d] = utils.getminmax(this, d, extrema[d]);
      }).bind(this)
    );
    return result;
  }
  overlaps(curve) {
    const lbbox = this.bbox(), tbbox = curve.bbox();
    return utils.bboxoverlap(lbbox, tbbox);
  }
  offset(t2, d) {
    if (typeof d !== "undefined") {
      const c = this.get(t2), n = this.normal(t2);
      const ret = {
        c,
        n,
        x: c.x + n.x * d,
        y: c.y + n.y * d
      };
      if (this._3d) {
        ret.z = c.z + n.z * d;
      }
      return ret;
    }
    if (this._linear) {
      const nv = this.normal(0), coords = this.points.map(function(p) {
        const ret = {
          x: p.x + t2 * nv.x,
          y: p.y + t2 * nv.y
        };
        if (p.z && nv.z) {
          ret.z = p.z + t2 * nv.z;
        }
        return ret;
      });
      return [new Bezier(coords)];
    }
    return this.reduce().map(function(s) {
      if (s._linear) {
        return s.offset(t2)[0];
      }
      return s.scale(t2);
    });
  }
  simple() {
    if (this.order === 3) {
      const a1 = utils.angle(this.points[0], this.points[3], this.points[1]);
      const a2 = utils.angle(this.points[0], this.points[3], this.points[2]);
      if (a1 > 0 && a2 < 0 || a1 < 0 && a2 > 0) return false;
    }
    const n1 = this.normal(0);
    const n2 = this.normal(1);
    let s = n1.x * n2.x + n1.y * n2.y;
    if (this._3d) {
      s += n1.z * n2.z;
    }
    return abs(acos(s)) < pi / 3;
  }
  reduce() {
    let i, t1 = 0, t2 = 0, step = 0.01, segment, pass1 = [], pass2 = [];
    let extrema = this.extrema().values;
    if (extrema.indexOf(0) === -1) {
      extrema = [0].concat(extrema);
    }
    if (extrema.indexOf(1) === -1) {
      extrema.push(1);
    }
    for (t1 = extrema[0], i = 1; i < extrema.length; i++) {
      t2 = extrema[i];
      segment = this.split(t1, t2);
      segment._t1 = t1;
      segment._t2 = t2;
      pass1.push(segment);
      t1 = t2;
    }
    pass1.forEach(function(p1) {
      t1 = 0;
      t2 = 0;
      while (t2 <= 1) {
        for (t2 = t1 + step; t2 <= 1 + step; t2 += step) {
          segment = p1.split(t1, t2);
          if (!segment.simple()) {
            t2 -= step;
            if (abs(t1 - t2) < step) {
              return [];
            }
            segment = p1.split(t1, t2);
            segment._t1 = utils.map(t1, 0, 1, p1._t1, p1._t2);
            segment._t2 = utils.map(t2, 0, 1, p1._t1, p1._t2);
            pass2.push(segment);
            t1 = t2;
            break;
          }
        }
      }
      if (t1 < 1) {
        segment = p1.split(t1, 1);
        segment._t1 = utils.map(t1, 0, 1, p1._t1, p1._t2);
        segment._t2 = p1._t2;
        pass2.push(segment);
      }
    });
    return pass2;
  }
  translate(v, d1, d2) {
    d2 = typeof d2 === "number" ? d2 : d1;
    const o = this.order;
    let d = this.points.map((_, i) => (1 - i / o) * d1 + i / o * d2);
    return new Bezier(
      this.points.map((p, i) => ({
        x: p.x + v.x * d[i],
        y: p.y + v.y * d[i]
      }))
    );
  }
  scale(d) {
    const order = this.order;
    let distanceFn = false;
    if (typeof d === "function") {
      distanceFn = d;
    }
    if (distanceFn && order === 2) {
      return this.raise().scale(distanceFn);
    }
    const clockwise = this.clockwise;
    const points = this.points;
    if (this._linear) {
      return this.translate(
        this.normal(0),
        distanceFn ? distanceFn(0) : d,
        distanceFn ? distanceFn(1) : d
      );
    }
    const r1 = distanceFn ? distanceFn(0) : d;
    const r2 = distanceFn ? distanceFn(1) : d;
    const v = [this.offset(0, 10), this.offset(1, 10)];
    const np = [];
    const o = utils.lli4(v[0], v[0].c, v[1], v[1].c);
    if (!o) {
      throw new Error("cannot scale this curve. Try reducing it first.");
    }
    [0, 1].forEach(function(t2) {
      const p = np[t2 * order] = utils.copy(points[t2 * order]);
      p.x += (t2 ? r2 : r1) * v[t2].n.x;
      p.y += (t2 ? r2 : r1) * v[t2].n.y;
    });
    if (!distanceFn) {
      [0, 1].forEach((t2) => {
        if (order === 2 && !!t2) return;
        const p = np[t2 * order];
        const d2 = this.derivative(t2);
        const p2 = { x: p.x + d2.x, y: p.y + d2.y };
        np[t2 + 1] = utils.lli4(p, p2, o, points[t2 + 1]);
      });
      return new Bezier(np);
    }
    [0, 1].forEach(function(t2) {
      if (order === 2 && !!t2) return;
      var p = points[t2 + 1];
      var ov = {
        x: p.x - o.x,
        y: p.y - o.y
      };
      var rc = distanceFn ? distanceFn((t2 + 1) / order) : d;
      if (distanceFn && !clockwise) rc = -rc;
      var m = sqrt(ov.x * ov.x + ov.y * ov.y);
      ov.x /= m;
      ov.y /= m;
      np[t2 + 1] = {
        x: p.x + rc * ov.x,
        y: p.y + rc * ov.y
      };
    });
    return new Bezier(np);
  }
  outline(d1, d2, d3, d4) {
    d2 = d2 === void 0 ? d1 : d2;
    if (this._linear) {
      const n = this.normal(0);
      const start = this.points[0];
      const end = this.points[this.points.length - 1];
      let s, mid, e;
      if (d3 === void 0) {
        d3 = d1;
        d4 = d2;
      }
      s = { x: start.x + n.x * d1, y: start.y + n.y * d1 };
      e = { x: end.x + n.x * d3, y: end.y + n.y * d3 };
      mid = { x: (s.x + e.x) / 2, y: (s.y + e.y) / 2 };
      const fline = [s, mid, e];
      s = { x: start.x - n.x * d2, y: start.y - n.y * d2 };
      e = { x: end.x - n.x * d4, y: end.y - n.y * d4 };
      mid = { x: (s.x + e.x) / 2, y: (s.y + e.y) / 2 };
      const bline = [e, mid, s];
      const ls2 = utils.makeline(bline[2], fline[0]);
      const le2 = utils.makeline(fline[2], bline[0]);
      const segments2 = [ls2, new Bezier(fline), le2, new Bezier(bline)];
      return new PolyBezier(segments2);
    }
    const reduced = this.reduce(), len = reduced.length, fcurves = [];
    let bcurves = [], p, alen = 0, tlen = this.length();
    const graduated = typeof d3 !== "undefined" && typeof d4 !== "undefined";
    function linearDistanceFunction(s, e, tlen2, alen2, slen) {
      return function(v) {
        const f1 = alen2 / tlen2, f2 = (alen2 + slen) / tlen2, d = e - s;
        return utils.map(v, 0, 1, s + f1 * d, s + f2 * d);
      };
    }
    reduced.forEach(function(segment) {
      const slen = segment.length();
      if (graduated) {
        fcurves.push(
          segment.scale(linearDistanceFunction(d1, d3, tlen, alen, slen))
        );
        bcurves.push(
          segment.scale(linearDistanceFunction(-d2, -d4, tlen, alen, slen))
        );
      } else {
        fcurves.push(segment.scale(d1));
        bcurves.push(segment.scale(-d2));
      }
      alen += slen;
    });
    bcurves = bcurves.map(function(s) {
      p = s.points;
      if (p[3]) {
        s.points = [p[3], p[2], p[1], p[0]];
      } else {
        s.points = [p[2], p[1], p[0]];
      }
      return s;
    }).reverse();
    const fs = fcurves[0].points[0], fe = fcurves[len - 1].points[fcurves[len - 1].points.length - 1], bs = bcurves[len - 1].points[bcurves[len - 1].points.length - 1], be = bcurves[0].points[0], ls = utils.makeline(bs, fs), le = utils.makeline(fe, be), segments = [ls].concat(fcurves).concat([le]).concat(bcurves);
    return new PolyBezier(segments);
  }
  outlineshapes(d1, d2, curveIntersectionThreshold) {
    d2 = d2 || d1;
    const outline = this.outline(d1, d2).curves;
    const shapes = [];
    for (let i = 1, len = outline.length; i < len / 2; i++) {
      const shape = utils.makeshape(
        outline[i],
        outline[len - i],
        curveIntersectionThreshold
      );
      shape.startcap.virtual = i > 1;
      shape.endcap.virtual = i < len / 2 - 1;
      shapes.push(shape);
    }
    return shapes;
  }
  intersects(curve, curveIntersectionThreshold) {
    if (!curve) return this.selfintersects(curveIntersectionThreshold);
    if (curve.p1 && curve.p2) {
      return this.lineIntersects(curve);
    }
    if (curve instanceof Bezier) {
      curve = curve.reduce();
    }
    return this.curveintersects(
      this.reduce(),
      curve,
      curveIntersectionThreshold
    );
  }
  lineIntersects(line) {
    const mx = min(line.p1.x, line.p2.x), my = min(line.p1.y, line.p2.y), MX = max(line.p1.x, line.p2.x), MY = max(line.p1.y, line.p2.y);
    return utils.roots(this.points, line).filter((t2) => {
      var p = this.get(t2);
      return utils.between(p.x, mx, MX) && utils.between(p.y, my, MY);
    });
  }
  selfintersects(curveIntersectionThreshold) {
    const reduced = this.reduce(), len = reduced.length - 2, results = [];
    for (let i = 0, result, left, right; i < len; i++) {
      left = reduced.slice(i, i + 1);
      right = reduced.slice(i + 2);
      result = this.curveintersects(left, right, curveIntersectionThreshold);
      results.push(...result);
    }
    return results;
  }
  curveintersects(c1, c2, curveIntersectionThreshold) {
    const pairs = [];
    c1.forEach(function(l) {
      c2.forEach(function(r) {
        if (l.overlaps(r)) {
          pairs.push({ left: l, right: r });
        }
      });
    });
    let intersections = [];
    pairs.forEach(function(pair) {
      const result = utils.pairiteration(
        pair.left,
        pair.right,
        curveIntersectionThreshold
      );
      if (result.length > 0) {
        intersections = intersections.concat(result);
      }
    });
    return intersections;
  }
  arcs(errorThreshold) {
    errorThreshold = errorThreshold || 0.5;
    return this._iterate(errorThreshold, []);
  }
  _error(pc, np1, s, e) {
    const q = (e - s) / 4, c1 = this.get(s + q), c2 = this.get(e - q), ref = utils.dist(pc, np1), d1 = utils.dist(pc, c1), d2 = utils.dist(pc, c2);
    return abs(d1 - ref) + abs(d2 - ref);
  }
  _iterate(errorThreshold, circles) {
    let t_s = 0, t_e = 1, safety;
    do {
      safety = 0;
      t_e = 1;
      let np1 = this.get(t_s), np2, np3, arc, prev_arc;
      let curr_good = false, prev_good = false, done;
      let t_m = t_e, prev_e = 1;
      do {
        prev_good = curr_good;
        prev_arc = arc;
        t_m = (t_s + t_e) / 2;
        np2 = this.get(t_m);
        np3 = this.get(t_e);
        arc = utils.getccenter(np1, np2, np3);
        arc.interval = {
          start: t_s,
          end: t_e
        };
        let error = this._error(arc, np1, t_s, t_e);
        curr_good = error <= errorThreshold;
        done = prev_good && !curr_good;
        if (!done) prev_e = t_e;
        if (curr_good) {
          if (t_e >= 1) {
            arc.interval.end = prev_e = 1;
            prev_arc = arc;
            if (t_e > 1) {
              let d = {
                x: arc.x + arc.r * cos(arc.e),
                y: arc.y + arc.r * sin(arc.e)
              };
              arc.e += utils.angle({ x: arc.x, y: arc.y }, d, this.get(1));
            }
            break;
          }
          t_e = t_e + (t_e - t_s) / 2;
        } else {
          t_e = t_m;
        }
      } while (!done && safety++ < 100);
      if (safety >= 100) {
        break;
      }
      prev_arc = prev_arc ? prev_arc : arc;
      circles.push(prev_arc);
      t_s = prev_e;
    } while (t_e < 1);
    return circles;
  }
}
async function loadCurves() {
  var response = await fetch(`${base}/splines.json`);
  if (response.ok) {
    const jsonCurves = await response.json();
    return jsonCurves;
  }
  return [];
}
function pointOnTimeline(timelineWidth, startYear2, date) {
  return timelineWidth * (date.year - startYear2) + timelineWidth * (date.month / 12);
}
function normalizeOffset(distance, transition) {
  let transitionOffset = transition.left;
  if (distance > 0) {
    transitionOffset = transition.right;
  }
  if (Math.abs(distance) > Math.abs(transitionOffset)) {
    return 0;
  }
  return 1 - Math.abs(distance / transitionOffset);
}
function normalizeSpan(cursorPosition, kdTreePoint, transition) {
  const left = kdTreePoint.x - transition.left;
  const right = kdTreePoint.x2 + transition.right;
  if (cursorPosition < right && cursorPosition > left) {
    const diff = right - left;
    return 1 - (cursorPosition - left) / diff;
  }
  return 0;
}
const EMPTY_STRING = "";
function bindTabs(container) {
  const tab = container.querySelector(".tabs");
  if (!tab) return;
  const group = tab.dataset.tabGroupTarget;
  const tabButtons = tab.querySelectorAll("button[data-target]");
  if (!group) return;
  const defaultTarget = tab.dataset.tabDefaultTarget;
  if (defaultTarget) {
    changeTab(defaultTarget, group);
  }
  tabButtons.forEach((t2) => {
    t2.addEventListener("click", (e) => {
      const button = e.currentTarget;
      const target = button.dataset.target;
      if (!target) return;
      changeTab(target, group);
    });
  });
  function changeTab(target, group2) {
    clearActiveTabPages(group2);
    clearActiveTabs();
    const buttons = tab.querySelectorAll(`button[data-target="${target}"]`);
    buttons.forEach((b) => {
      b.classList.add("active");
    });
    const targetPages = container.querySelectorAll(
      `[data-tab-group="${group2}"][data-tab="${target}"]`
    );
    targetPages.forEach((e) => {
      e.classList.remove("hidden");
    });
  }
  function clearActiveTabs() {
    tabButtons.forEach((t2) => {
      t2.classList.remove("active");
    });
  }
  function clearActiveTabPages(group2) {
    const pages = container.querySelectorAll(`[data-tab-group="${group2}"]`);
    pages.forEach((e) => {
      e.classList.add("hidden");
    });
  }
}
var TransitionType = /* @__PURE__ */ ((TransitionType2) => {
  TransitionType2[TransitionType2["Span"] = 1] = "Span";
  TransitionType2[TransitionType2["Offset"] = 2] = "Offset";
  return TransitionType2;
})(TransitionType || {});
function easeInOut(x) {
  return (Math.cos(Math.PI * x) + 1) / 2;
}
function compositePosition(movement, keyframe, viewport, beziers, elDimensions) {
  if (!movement || movement.disabled) return EMPTY_STRING;
  let movementIndex = -1;
  movement.positions.forEach((s, index) => {
    if (keyframe >= s.keyframe) {
      movementIndex = index;
    }
  });
  if (movementIndex === -1) return EMPTY_STRING;
  return composite$1(
    movement,
    movementIndex,
    keyframe,
    viewport,
    beziers,
    movement.positions[movementIndex],
    movementIndex < movement.positions.length - 1 ? movement.positions[movementIndex + 1] : void 0,
    elDimensions
  );
}
function composite$1(movement, movementIndex, keyframe, viewport, beziers, currentKeyframePosition, nextKeyframePosition, elDimensions) {
  let str = "";
  const bezier = beziers.get(movement.curveId);
  if (bezier) {
    const nextValue = nextKeyframePosition ? nextKeyframePosition.t : currentKeyframePosition.t;
    const currentValue = currentKeyframePosition.t;
    const diffValue = nextValue - currentValue;
    const value = nextKeyframePosition ? currentValue + diffValue * ((keyframe - movement.positions[movementIndex].keyframe) / (movement.positions[movementIndex + 1].keyframe - movement.positions[movementIndex].keyframe)) : currentValue;
    const position = bezier.get((easeInOut(value) - 1) * -1);
    const alignDimensions = alignment(elDimensions, movement.align);
    str += `transform: translate(${position.x * viewport.width - alignDimensions.width}px, ${position.y * viewport.height - alignDimensions.height}px);`;
  }
  return str;
}
function alignment(elDimensions, align) {
  const a = align ? align : "centerLeft";
  if (!elDimensions) return { height: 0, width: 0 };
  switch (a) {
    case "center":
      return {
        height: elDimensions.height / 2,
        width: elDimensions.width / 2
      };
    case "centerLeft":
      return { height: elDimensions.height / 2, width: 0 };
  }
}
function compositeStyle(styles, keyframe) {
  if (!styles) return EMPTY_STRING;
  let stylesIndex = -1;
  styles.forEach((s, index) => {
    if (keyframe >= s.keyframe) {
      stylesIndex = index;
    }
  });
  if (stylesIndex === -1)
    return composite(
      styles,
      stylesIndex,
      keyframe,
      styles[0].properties,
      void 0
    );
  return composite(
    styles,
    stylesIndex,
    keyframe,
    styles[stylesIndex].properties,
    stylesIndex < styles.length - 1 ? styles[stylesIndex + 1].properties : void 0
  );
}
function composite(styles, stylesIndex, keyframe, currentKeyframeProps, nextKeyframeProps) {
  let str = EMPTY_STRING;
  currentKeyframeProps.forEach((p) => {
    var _a;
    const nextValue = nextKeyframeProps ? ((_a = nextKeyframeProps.find((n) => n.name === p.name)) == null ? void 0 : _a.value) ?? 0 : p.value;
    const currentValue = p.value;
    if (Number.isInteger(currentValue)) {
      const diffValue = nextValue - currentValue;
      const value = nextKeyframeProps ? currentValue + diffValue * ((keyframe - styles[stylesIndex].keyframe) / (styles[stylesIndex + 1].keyframe - styles[stylesIndex].keyframe)) : currentValue;
      str += `${p.name}: ${value}${p.format ?? ""};`;
    } else {
      str += `${p.name}: ${currentValue}${p.format ?? ""};`;
    }
  });
  return str;
}
function computePostComponents(posts, timelineWidth, startYear2) {
  const tempPosts = posts.map((t2) => {
    const startPos = pointOnTimeline(
      timelineWidth,
      startYear2,
      t2.timeline.start
    );
    const endPos = t2.timeline.end ? pointOnTimeline(timelineWidth, startYear2, t2.timeline.end) : 0;
    return {
      ...t2,
      offset: startPos,
      width: endPos - startPos
    };
  });
  return tempPosts;
}
function createKdTree(kdTree, posts, timelineWidth, startYear2) {
  const points = posts.map((p, index) => {
    const startPos = pointOnTimeline(
      timelineWidth,
      startYear2,
      p.timeline.start
    );
    const endPos = p.timeline.end ? pointOnTimeline(timelineWidth, startYear2, p.timeline.end) : startPos;
    return {
      x: startPos,
      x2: endPos,
      id: index
    };
  });
  const tree = new kdTree.kdTree(
    points,
    (cursor, post) => {
      if (cursor.x <= post.x2 && cursor.x >= post.x) {
        return 0;
      } else if (cursor.x <= post.x) return post.x - cursor.x;
      else return cursor.x - post.x2;
    },
    ["x", "x2"]
  );
  return tree;
}
function setupChildAnimation(childIndex, parentAnimation, childCount) {
  const anim = structuredClone(parentAnimation);
  if (anim.movement) {
    let diff = 0;
    anim.movement.positions = anim.movement.positions.map((x, index, arr) => {
      if (index + 1 < arr.length) {
        const nextKeyframe = arr[index + 1].keyframe;
        diff = (nextKeyframe - x.keyframe) / childCount / 2.8;
      }
      return {
        keyframe: x.keyframe + (index === arr.length - 1 ? -diff * (childCount - (childIndex + 1)) : diff * childIndex),
        t: x.t
      };
    });
  }
  if (anim.styles) {
    anim.styles = anim.styles.map((x, index, arr) => {
      if (index + 1 >= arr.length) return x;
      const nextKeyframe = arr[index + 1].keyframe;
      const diff = (nextKeyframe - x.keyframe) / childCount;
      return {
        keyframe: x.keyframe + diff * childIndex,
        properties: x.properties
      };
    });
  }
  return anim;
}
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function create_if_block$1(ctx) {
  let div2;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 17
  };
  handle_promise(
    /*contentsPromise*/
    ctx[2],
    info
  );
  return {
    c() {
      div2 = element("div");
      info.block.c();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", {});
      var div_nodes = children(div2);
      info.block.l(div_nodes);
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      info.block.m(div2, info.anchor = null);
      info.mount = () => div2;
      info.anchor = null;
      ctx[13](div2);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
      info.block.d();
      info.token = null;
      info = null;
      ctx[13](null);
    }
  };
}
function create_catch_block(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    d: noop
  };
}
function create_then_block(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like(
    /*contents*/
    ctx[17]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*contentsPromise*/
      4) {
        each_value = ensure_array_like(
          /*contents*/
          ctx2[17]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block$2(ctx) {
  let div2;
  let html_tag;
  let raw_value = (
    /*content*/
    ctx[18] + ""
  );
  let t2;
  return {
    c() {
      div2 = element("div");
      html_tag = new HtmlTagHydration(false);
      t2 = space();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div2);
      html_tag = claim_html_tag(div_nodes, false);
      t2 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      html_tag.a = t2;
      attr(div2, "class", "post svelte-sagli0");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      html_tag.m(raw_value, div2);
      append_hydration(div2, t2);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
    }
  };
}
function create_pending_block(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    d: noop
  };
}
function create_fragment$5(ctx) {
  let if_block_anchor;
  let if_block = (
    /*post*/
    ctx[0].content && create_if_block$1(ctx)
  );
  return {
    c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (
        /*post*/
        ctx2[0].content
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if (if_block) if_block.d(detaching);
    }
  };
}
async function fetchContents(templates) {
  let loadedTemplates = [];
  for (let i = 0; i < templates.length; i++) {
    const url = `${"./"}${templates[i].replace(/^\//, "")}`;
    var response = await fetch(url);
    if (response.ok) {
      const text2 = await response.text();
      loadedTemplates.push(text2);
    }
  }
  return loadedTemplates;
}
function instance$5($$self, $$props, $$invalidate) {
  var _a;
  let { post } = $$props;
  let { distance } = $$props;
  let { beziers } = $$props;
  let { viewport } = $$props;
  let { cursorPosition } = $$props;
  let { kdTreePoint } = $$props;
  let parentDiv;
  let normalizedOffset = 0;
  let normalizedSpan = 0;
  let elements;
  let elementsRect;
  const postAnimations = post.animation;
  const contentsPromise = fetchContents(((_a = post.content) == null ? void 0 : _a.map((c) => c.html)) ?? []);
  function getPostStyle(styles, offset, movement, elDimensions) {
    const keyframe = offset * 100;
    return `${compositeStyle(styles, keyframe)}${compositePosition(movement, keyframe, viewport, beziers, elDimensions)}`;
  }
  function initializePost(container) {
    $$invalidate(10, elements = container.querySelectorAll("[data-tl-id]"));
    if (!postAnimations) return;
    elements.forEach((e) => {
      const tlId = e.dataset.tlId;
      if (!tlId) return;
      const key = postAnimations[tlId];
      if (!key || !key.loop) return;
      const parentAnimations = postAnimations[tlId];
      for (var i = 0; i < e.children.length; i++) {
        const child = e.children[i];
        const id = `${tlId}_${i}`;
        child.dataset.tlId = id;
        $$invalidate(12, postAnimations[id] = setupChildAnimation(i, parentAnimations, e.children.length), postAnimations);
      }
      if (parentAnimations.movement) {
        parentAnimations.movement.disabled = true;
      }
    });
  }
  function updatePostStyles(container) {
    $$invalidate(10, elements = container.querySelectorAll("[data-tl-id]"));
    $$invalidate(11, elementsRect = []);
    elements.forEach((e, index) => {
      const rect = e.getBoundingClientRect();
      elementsRect.push({ width: rect.width, height: rect.height });
      const childImgs = e.querySelectorAll("img");
      if (childImgs.length) {
        let resolved = 0;
        childImgs.forEach((element2) => {
          element2.onload = () => {
            resolved++;
            if (resolved === childImgs.length) {
              const newRect = e.getBoundingClientRect();
              $$invalidate(
                11,
                elementsRect[index] = {
                  width: newRect.width,
                  height: newRect.height
                },
                elementsRect
              );
            }
            element2.onload = null;
          };
        });
      }
    });
  }
  onMount(() => {
    contentsPromise.then(() => {
      if (!parentDiv) return;
      initializePost(parentDiv);
      updatePostStyles(parentDiv);
      bindTabs(parentDiv);
    });
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      parentDiv = $$value;
      $$invalidate(1, parentDiv);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("post" in $$props2) $$invalidate(0, post = $$props2.post);
    if ("distance" in $$props2) $$invalidate(3, distance = $$props2.distance);
    if ("beziers" in $$props2) $$invalidate(4, beziers = $$props2.beziers);
    if ("viewport" in $$props2) $$invalidate(5, viewport = $$props2.viewport);
    if ("cursorPosition" in $$props2) $$invalidate(6, cursorPosition = $$props2.cursorPosition);
    if ("kdTreePoint" in $$props2) $$invalidate(7, kdTreePoint = $$props2.kdTreePoint);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*distance, post, cursorPosition, kdTreePoint, elements, postAnimations, normalizedOffset, normalizedSpan, elementsRect*/
    8137) {
      {
        $$invalidate(8, normalizedOffset = normalizeOffset(distance, post.timeline.transition));
        $$invalidate(9, normalizedSpan = normalizeSpan(cursorPosition, kdTreePoint, post.timeline.transition));
        if (elements && postAnimations) {
          elements.forEach((e, index) => {
            const id = e.dataset.tlId;
            if (!id || !postAnimations[id]) return;
            const style = getPostStyle(
              postAnimations[id].styles,
              (postAnimations[id].transition ?? TransitionType.Offset) == TransitionType.Offset ? normalizedOffset : normalizedSpan,
              postAnimations[id].movement,
              elementsRect[index]
            );
            e.setAttribute("style", style);
          });
        }
      }
    }
  };
  return [
    post,
    parentDiv,
    contentsPromise,
    distance,
    beziers,
    viewport,
    cursorPosition,
    kdTreePoint,
    normalizedOffset,
    normalizedSpan,
    elements,
    elementsRect,
    postAnimations,
    div_binding
  ];
}
class TimelinePost extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      post: 0,
      distance: 3,
      beziers: 4,
      viewport: 5,
      cursorPosition: 6,
      kdTreePoint: 7
    });
  }
}
const luMonneAnimation = {
  textOverlay: {
    movement: {
      align: "center",
      curveId: "center",
      positions: [
        {
          keyframe: 0,
          t: 0
        },
        {
          keyframe: 100,
          t: 1
        }
      ]
    }
  },
  container: {
    styles: [
      {
        keyframe: 0,
        properties: [
          {
            name: "opacity",
            value: 0
          }
        ]
      },
      {
        keyframe: 20,
        properties: [
          {
            name: "opacity",
            value: 1
          }
        ]
      }
    ]
  },
  imgGrid: {
    transition: TransitionType.Span,
    movement: {
      curveId: "leftRight",
      positions: [
        {
          keyframe: 0,
          t: 1
        },
        {
          keyframe: 60,
          t: 0
        }
      ]
    },
    styles: [
      {
        keyframe: 40,
        properties: [
          {
            name: "opacity",
            value: 1
          }
        ]
      },
      {
        keyframe: 55,
        properties: [
          {
            name: "opacity",
            value: 0.3
          }
        ]
      }
    ]
  },
  item1: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 5,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "transform",
            value: "translateX(40px)"
          }
        ]
      },
      {
        keyframe: 5,
        properties: [
          {
            name: "opacity",
            value: 1
          },
          {
            name: "transform",
            value: "translateX(0px)"
          }
        ]
      }
    ]
  },
  item2: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 10,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "transform",
            value: "translateX(40px)"
          }
        ]
      },
      {
        keyframe: 10,
        properties: [
          {
            name: "opacity",
            value: 1
          },
          {
            name: "transform",
            value: "translateX(0px)"
          }
        ]
      }
    ]
  },
  item3: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 15,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "transform",
            value: "translateX(40px)"
          }
        ]
      },
      {
        keyframe: 15,
        properties: [
          {
            name: "opacity",
            value: 1
          },
          {
            name: "transform",
            value: "translateX(0px)"
          }
        ]
      }
    ]
  },
  item4: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 20,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "transform",
            value: "translateX(40px)"
          }
        ]
      },
      {
        keyframe: 20,
        properties: [
          {
            name: "opacity",
            value: 1
          },
          {
            name: "transform",
            value: "translateX(0px)"
          }
        ]
      }
    ]
  },
  item5: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 25,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "transform",
            value: "translateX(40px)"
          }
        ]
      },
      {
        keyframe: 25,
        properties: [
          {
            name: "opacity",
            value: 1
          },
          {
            name: "transform",
            value: "translateX(0px)"
          }
        ]
      }
    ]
  },
  item6: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 30,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "transform",
            value: "translateX(40px)"
          }
        ]
      },
      {
        keyframe: 30,
        properties: [
          {
            name: "opacity",
            value: 1
          },
          {
            name: "transform",
            value: "translateX(0px)"
          }
        ]
      }
    ]
  }
};
const luMonneContent = [
  {
    html: "/templates/lumonne/lumonne.html"
  }
];
const luMonnePost = {
  type: 1,
  timeline: {
    hidden: false,
    start: {
      year: 2023,
      month: 3,
      day: 1
    },
    end: {
      year: 2023,
      month: 5,
      day: 15
    },
    transition: {
      left: 100,
      right: 100
    }
  },
  content: luMonneContent,
  animation: luMonneAnimation
};
const me1animation = {
  me: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 4,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "border-radius",
            value: 10,
            format: "%"
          }
        ]
      },
      {
        keyframe: 4,
        properties: [
          {
            name: "opacity",
            value: 1
          },
          {
            name: "border-radius",
            value: 50,
            format: "%"
          }
        ]
      }
    ]
  },
  title: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 10,
        properties: [
          {
            name: "margin-top",
            value: 0,
            format: "em"
          },
          {
            name: "opacity",
            value: 0
          }
        ]
      },
      {
        keyframe: 10,
        properties: [
          {
            name: "margin-top",
            value: -0.9,
            format: "em"
          },
          {
            name: "opacity",
            value: 1
          }
        ]
      }
    ]
  },
  step1: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 15,
        properties: [
          {
            name: "padding-left",
            value: 1,
            format: "em"
          },
          {
            name: "opacity",
            value: 0
          }
        ]
      },
      {
        keyframe: 15,
        properties: [
          {
            name: "padding-left",
            value: 0,
            format: "em"
          },
          {
            name: "opacity",
            value: 1
          }
        ]
      },
      {
        keyframe: 25,
        properties: [
          {
            name: "opacity",
            value: 1
          }
        ]
      },
      {
        keyframe: 25,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "padding-right",
            value: 1,
            format: "em"
          }
        ]
      }
    ]
  },
  step2: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 25,
        properties: [
          {
            name: "padding-left",
            value: 1,
            format: "em"
          },
          {
            name: "opacity",
            value: 0
          }
        ]
      },
      {
        keyframe: 25,
        properties: [
          {
            name: "padding-left",
            value: 0,
            format: "em"
          },
          {
            name: "opacity",
            value: 1
          }
        ]
      },
      {
        keyframe: 40,
        properties: [
          {
            name: "opacity",
            value: 1
          }
        ]
      },
      {
        keyframe: 40,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "padding-right",
            value: 1,
            format: "em"
          }
        ]
      }
    ]
  },
  text2: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 32,
        properties: [
          {
            name: "opacity",
            value: 0
          }
        ]
      },
      {
        keyframe: 32,
        properties: [
          {
            name: "opacity",
            value: 1
          }
        ]
      }
    ]
  },
  step3: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 40,
        properties: [
          {
            name: "padding-left",
            value: 1,
            format: "em"
          },
          {
            name: "opacity",
            value: 0
          }
        ]
      },
      {
        keyframe: 40,
        properties: [
          {
            name: "padding-left",
            value: 0,
            format: "em"
          },
          {
            name: "opacity",
            value: 1
          }
        ]
      },
      {
        keyframe: 80,
        properties: [
          {
            name: "opacity",
            value: 1
          }
        ]
      },
      {
        keyframe: 80,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "padding-right",
            value: 1,
            format: "em"
          }
        ]
      }
    ]
  },
  step4: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 80,
        properties: [
          {
            name: "padding-left",
            value: 1,
            format: "em"
          },
          {
            name: "opacity",
            value: 0
          }
        ]
      },
      {
        keyframe: 80,
        properties: [
          {
            name: "padding-left",
            value: 0,
            format: "em"
          },
          {
            name: "opacity",
            value: 1
          }
        ]
      },
      {
        keyframe: 100,
        properties: [
          {
            name: "opacity",
            value: 1
          }
        ]
      },
      {
        keyframe: 100,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "padding-right",
            value: 1,
            format: "em"
          }
        ]
      }
    ]
  },
  container: {
    movement: {
      align: "center",
      curveId: "center",
      positions: [
        {
          keyframe: 0,
          t: 0
        },
        {
          keyframe: 100,
          t: 1
        }
      ]
    }
  },
  icons: {
    transition: TransitionType.Span,
    loop: {},
    movement: {
      align: "center",
      curveId: "leftTopRight",
      positions: [
        {
          keyframe: 40,
          t: 0
        },
        {
          keyframe: 80,
          t: 1
        }
      ]
    },
    styles: [
      {
        keyframe: 40,
        properties: [
          {
            name: "opacity",
            value: 0
          }
        ]
      },
      {
        keyframe: 60,
        properties: [
          {
            name: "opacity",
            value: 1
          }
        ]
      },
      {
        keyframe: 80,
        properties: [
          {
            name: "opacity",
            value: 0
          }
        ]
      }
    ]
  },
  frameworks: {
    transition: TransitionType.Span,
    loop: {},
    movement: {
      align: "center",
      curveId: "leftBottomRight",
      positions: [
        {
          keyframe: 40,
          t: 1
        },
        {
          keyframe: 80,
          t: 0
        }
      ]
    },
    styles: [
      {
        keyframe: 40,
        properties: [
          {
            name: "opacity",
            value: 0
          }
        ]
      },
      {
        keyframe: 60,
        properties: [
          {
            name: "opacity",
            value: 1
          }
        ]
      },
      {
        keyframe: 80,
        properties: [
          {
            name: "opacity",
            value: 0
          }
        ]
      }
    ]
  }
};
const me1content = [
  {
    html: "/templates/me/1.html"
  },
  {
    html: "/templates/me/1_languages.html"
  }
];
const me1 = {
  type: 2,
  timeline: {
    hidden: false,
    start: {
      year: 2023,
      month: 12,
      day: 1
    },
    end: {
      year: 2024,
      month: 5,
      day: 1
    },
    transition: {
      left: 100,
      right: 100
    }
  },
  content: me1content,
  animation: me1animation
};
const rudholmPost = {
  type: 2,
  timeline: {
    hidden: false,
    start: {
      year: 2022,
      month: 1,
      day: 1
    },
    transition: {
      left: 100,
      right: 100
    }
  },
  content: []
};
const smamAnimation = {
  desc: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 20,
        properties: [
          {
            name: "padding-top",
            value: 20,
            format: "px"
          },
          {
            name: "opacity",
            value: 0
          }
        ]
      },
      {
        keyframe: 25,
        properties: [
          {
            name: "padding-top",
            value: 0,
            format: "px"
          },
          {
            name: "opacity",
            value: 1
          }
        ]
      }
    ]
  },
  container: {
    movement: {
      curveId: "leftMiddleLeft",
      positions: [
        {
          keyframe: 0,
          t: 0
        },
        {
          keyframe: 40,
          t: 0.5
        }
      ]
    },
    styles: [
      {
        keyframe: 50,
        properties: [
          {
            name: "opacity",
            value: 0
          }
        ]
      },
      {
        keyframe: 70,
        properties: [
          {
            name: "opacity",
            value: 1
          }
        ]
      }
    ]
  },
  part2: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 40,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "margin-left",
            value: -40,
            format: "px"
          }
        ]
      },
      {
        keyframe: 45,
        properties: [
          {
            name: "opacity",
            value: 1
          },
          {
            name: "margin-left",
            value: 0,
            format: "px"
          }
        ]
      }
    ]
  },
  part3: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 50,
        properties: [
          {
            name: "opacity",
            value: 0
          },
          {
            name: "margin-left",
            value: -40,
            format: "px"
          }
        ]
      },
      {
        keyframe: 55,
        properties: [
          {
            name: "opacity",
            value: 1
          },
          {
            name: "margin-left",
            value: 0,
            format: "px"
          }
        ]
      }
    ]
  },
  tabs: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 50,
        properties: [
          {
            name: "max-height",
            value: 0,
            format: "px"
          }
        ]
      },
      {
        keyframe: 50,
        properties: [
          {
            name: "max-height",
            value: 32,
            format: "px"
          }
        ]
      }
    ]
  },
  js: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 45,
        properties: [
          {
            name: "max-width",
            value: 0,
            format: "%"
          }
        ]
      },
      {
        keyframe: 45,
        properties: [
          {
            name: "max-width",
            value: 11,
            format: "%"
          }
        ]
      }
    ]
  },
  html: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 45,
        properties: [
          {
            name: "max-width",
            value: 0,
            format: "%"
          }
        ]
      },
      {
        keyframe: 45,
        properties: [
          {
            name: "max-width",
            value: 54,
            format: "%"
          }
        ]
      }
    ]
  },
  css: {
    transition: TransitionType.Span,
    styles: [
      {
        keyframe: 45,
        properties: [
          {
            name: "max-width",
            value: 0,
            format: "%"
          }
        ]
      },
      {
        keyframe: 45,
        properties: [
          {
            name: "max-width",
            value: 35,
            format: "%"
          }
        ]
      }
    ]
  }
};
const smamContent = [
  {
    html: "/templates/smam/metadata.html"
  }
];
const smamPost = {
  type: 1,
  timeline: {
    hidden: false,
    start: {
      year: 2022,
      month: 3,
      day: 21
    },
    end: {
      year: 2022,
      month: 5,
      day: 1
    },
    transition: {
      left: 100,
      right: 100
    }
  },
  content: smamContent,
  animation: smamAnimation
};
const vayqerPost = {
  type: 1,
  timeline: {
    hidden: false,
    start: {
      year: 2020,
      month: 1,
      day: 1
    },
    end: {
      year: 2021,
      month: 5,
      day: 1
    },
    transition: {
      left: 100,
      right: 100
    }
  },
  content: []
};
const timelineData = [
  vayqerPost,
  luMonnePost,
  rudholmPost,
  smamPost,
  me1
];
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}
function create_each_block$1(ctx) {
  let timelinepost;
  let current;
  timelinepost = new TimelinePost({
    props: {
      beziers: (
        /*beziers*/
        ctx[4]
      ),
      viewport: (
        /*postsViewportRect*/
        ctx[3] ?? new DOMRect()
      ),
      distance: (
        /*point*/
        ctx[8][1]
      ),
      post: timelineData[
        /*point*/
        ctx[8][0].id
      ],
      cursorPosition: (
        /*cursorPosition*/
        ctx[0]
      ),
      kdTreePoint: (
        /*point*/
        ctx[8][0]
      )
    }
  });
  return {
    c() {
      create_component(timelinepost.$$.fragment);
    },
    l(nodes) {
      claim_component(timelinepost.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(timelinepost, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const timelinepost_changes = {};
      if (dirty & /*postsViewportRect*/
      8) timelinepost_changes.viewport = /*postsViewportRect*/
      ctx2[3] ?? new DOMRect();
      if (dirty & /*np*/
      4) timelinepost_changes.distance = /*point*/
      ctx2[8][1];
      if (dirty & /*np*/
      4) timelinepost_changes.post = timelineData[
        /*point*/
        ctx2[8][0].id
      ];
      if (dirty & /*cursorPosition*/
      1) timelinepost_changes.cursorPosition = /*cursorPosition*/
      ctx2[0];
      if (dirty & /*np*/
      4) timelinepost_changes.kdTreePoint = /*point*/
      ctx2[8][0];
      timelinepost.$set(timelinepost_changes);
    },
    i(local) {
      if (current) return;
      transition_in(timelinepost.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(timelinepost.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(timelinepost, detaching);
    }
  };
}
function create_fragment$4(ctx) {
  let div1;
  let div0;
  let current;
  let each_value = ensure_array_like(
    /*np*/
    ctx[2]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "posts svelte-uh6w98");
      attr(div1, "class", "posts-container svelte-uh6w98");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
      ctx[6](div0);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*beziers, postsViewportRect, DOMRect, np, cursorPosition*/
      29) {
        each_value = ensure_array_like(
          /*np*/
          ctx2[2]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      destroy_each(each_blocks, detaching);
      ctx[6](null);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let postsViewportRect;
  let { nearestPoints } = $$props;
  let { cursorPosition } = $$props;
  let loadCurvesPromise;
  let postsViewport;
  let beziers = /* @__PURE__ */ new Map();
  let np = [];
  onMount(() => {
    loadCurvesPromise = loadCurves();
    loadCurvesPromise.then((curves) => {
      curves.forEach((curve) => {
        const b = new Bezier(curve.coordinates[0], curve.coordinates[1], curve.coordinates[2], curve.coordinates[3]);
        beziers.set(curve.name, b);
      });
    });
  });
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      postsViewport = $$value;
      $$invalidate(1, postsViewport);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("nearestPoints" in $$props2) $$invalidate(5, nearestPoints = $$props2.nearestPoints);
    if ("cursorPosition" in $$props2) $$invalidate(0, cursorPosition = $$props2.cursorPosition);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*postsViewport*/
    2) {
      $$invalidate(3, postsViewportRect = postsViewport ? postsViewport.getBoundingClientRect() : void 0);
    }
    if ($$self.$$.dirty & /*nearestPoints, np*/
    36) {
      if (nearestPoints) {
        nearestPoints.forEach((n) => {
          const npIndex = np.findIndex((n2) => n2[0].id === n[0].id);
          if (npIndex !== -1) {
            $$invalidate(2, np[npIndex][1] = n[1], np);
            return;
          }
          np.push(n);
        });
      }
    }
  };
  return [
    cursorPosition,
    postsViewport,
    np,
    postsViewportRect,
    beziers,
    nearestPoints,
    div0_binding
  ];
}
class Posts extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { nearestPoints: 5, cursorPosition: 0 });
  }
}
function resolveConfig(param = {}) {
  const { cursor = true, enabled = true, axis = "x", event = "pointer" } = param;
  return {
    enabled,
    axes: {
      x: axis === "x" || axis === "both",
      y: axis === "y" || axis === "both"
    },
    events: event === "pointer" ? (
      /** @type {const} */
      {
        down: "pointerdown",
        up: "pointerup",
        move: "pointermove",
        leave: "pointerleave"
      }
    ) : (
      /** @type {const} */
      {
        down: "mousedown",
        up: "mouseup",
        move: "mousemove",
        leave: "mouseleave"
      }
    ),
    cursor
  };
}
function dragscroll(node, param = {}) {
  let isDown = false;
  let startX;
  let startY;
  let scrollLeft;
  let scrollTop;
  let { enabled, axes, events, cursor } = resolveConfig(param);
  function handlePointerDown(e) {
    changeCursor(true);
    isDown = true;
    startX = e.pageX - node.offsetLeft;
    scrollLeft = node.scrollLeft;
    startY = e.pageY - node.offsetTop;
    scrollTop = node.scrollTop;
  }
  function handlePointerUpAndLeave() {
    changeCursor();
    isDown = false;
  }
  function handlePointerMove(e) {
    if (!isDown) return;
    e.preventDefault();
    if (axes.x) {
      const x = e.pageX - node.offsetLeft;
      const walkX = x - startX;
      node.scrollLeft = scrollLeft - walkX;
    }
    if (axes.y) {
      const y = e.pageY - node.offsetTop;
      const walkY = y - startY;
      node.scrollTop = scrollTop - walkY;
    }
  }
  function addEvents() {
    if (!node) return;
    node.addEventListener(events.down, handlePointerDown);
    node.addEventListener(events.leave, handlePointerUpAndLeave);
    node.addEventListener(events.up, handlePointerUpAndLeave);
    node.addEventListener(events.move, handlePointerMove);
  }
  function removeEvents() {
    if (!node) return;
    node.removeEventListener(events.down, handlePointerDown);
    node.removeEventListener(events.leave, handlePointerUpAndLeave);
    node.removeEventListener(events.up, handlePointerUpAndLeave);
    node.removeEventListener(events.move, handlePointerMove);
  }
  function changeCursor(active = false) {
    if (!node) return;
    if (cursor) {
      node.style.cursor = active ? "grabbing" : "grab";
    } else {
      node.style.removeProperty("cursor");
    }
  }
  if (enabled) {
    changeCursor();
    addEvents();
  }
  return {
    update(update = {}) {
      removeEvents();
      ({ enabled, axes, events, cursor } = resolveConfig(update));
      changeCursor();
      addEvents();
    },
    destroy() {
      removeEvents();
    }
  };
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list[i];
  child_ctx[23] = list;
  child_ctx[24] = i;
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[25] = list[i];
  child_ctx[27] = i;
  return child_ctx;
}
function create_else_block_1(ctx) {
  let div2;
  return {
    c() {
      div2 = element("div");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      children(div2).forEach(detach);
      this.h();
    },
    h() {
      attr(div2, "class", "svelte-nt6ic0");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
    }
  };
}
function create_if_block_1(ctx) {
  let div2;
  let t_value = startYear + /*i*/
  ctx[27] + "";
  let t2;
  return {
    c() {
      div2 = element("div");
      t2 = text(t_value);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div2);
      t2 = claim_text(div_nodes, t_value);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div2, "class", "svelte-nt6ic0");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, t2);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
    }
  };
}
function create_each_block_1(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (startYear + /*i*/
    ctx2[27] <= /*date*/
    ctx2[8].getUTCFullYear()) return create_if_block_1;
    return create_else_block_1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if_block.p(ctx2, dirty);
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if_block.d(detaching);
    }
  };
}
function create_else_block(ctx) {
  let button;
  let button_data_post_type_value;
  let index = (
    /*index*/
    ctx[24]
  );
  const assign_button = () => (
    /*button_binding_1*/
    ctx[16](button, index)
  );
  const unassign_button = () => (
    /*button_binding_1*/
    ctx[16](null, index)
  );
  return {
    c() {
      button = element("button");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        "data-post-type": true,
        "data-post-index": true,
        class: true
      });
      children(button).forEach(detach);
      this.h();
    },
    h() {
      attr(button, "data-post-type", button_data_post_type_value = /*post*/
      ctx[22].type);
      attr(
        button,
        "data-post-index",
        /*index*/
        ctx[24]
      );
      attr(button, "class", "post svelte-nt6ic0");
      set_style(button, "left", `${/*post*/
      ctx[22].offset}px`);
      set_style(
        button,
        "display",
        /*post*/
        ctx[22].timeline.hidden ? "none" : "block"
      );
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      assign_button();
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*postComponents*/
      32 && button_data_post_type_value !== (button_data_post_type_value = /*post*/
      ctx[22].type)) {
        attr(button, "data-post-type", button_data_post_type_value);
      }
      if (index !== /*index*/
      ctx[24]) {
        unassign_button();
        index = /*index*/
        ctx[24];
        assign_button();
      }
      if (dirty & /*postComponents*/
      32) {
        set_style(button, "left", `${/*post*/
        ctx[22].offset}px`);
      }
      if (dirty & /*postComponents*/
      32) {
        set_style(
          button,
          "display",
          /*post*/
          ctx[22].timeline.hidden ? "none" : "block"
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      unassign_button();
    }
  };
}
function create_if_block(ctx) {
  let button;
  let button_data_post_type_value;
  let index = (
    /*index*/
    ctx[24]
  );
  const assign_button = () => (
    /*button_binding*/
    ctx[15](button, index)
  );
  const unassign_button = () => (
    /*button_binding*/
    ctx[15](null, index)
  );
  return {
    c() {
      button = element("button");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        "data-post-type": true,
        "data-post-index": true,
        class: true
      });
      children(button).forEach(detach);
      this.h();
    },
    h() {
      attr(button, "data-post-type", button_data_post_type_value = /*post*/
      ctx[22].type);
      attr(
        button,
        "data-post-index",
        /*index*/
        ctx[24]
      );
      attr(button, "class", "post long svelte-nt6ic0");
      set_style(button, "left", `${/*post*/
      ctx[22].offset}px`);
      set_style(button, "width", `${/*post*/
      ctx[22].width}px`);
      set_style(
        button,
        "display",
        /*post*/
        ctx[22].timeline.hidden ? "none" : "block"
      );
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      assign_button();
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*postComponents*/
      32 && button_data_post_type_value !== (button_data_post_type_value = /*post*/
      ctx[22].type)) {
        attr(button, "data-post-type", button_data_post_type_value);
      }
      if (index !== /*index*/
      ctx[24]) {
        unassign_button();
        index = /*index*/
        ctx[24];
        assign_button();
      }
      if (dirty & /*postComponents*/
      32) {
        set_style(button, "left", `${/*post*/
        ctx[22].offset}px`);
      }
      if (dirty & /*postComponents*/
      32) {
        set_style(button, "width", `${/*post*/
        ctx[22].width}px`);
      }
      if (dirty & /*postComponents*/
      32) {
        set_style(
          button,
          "display",
          /*post*/
          ctx[22].timeline.hidden ? "none" : "block"
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      unassign_button();
    }
  };
}
function create_each_block(ctx) {
  let if_block_anchor;
  function select_block_type_1(ctx2, dirty) {
    if (
      /*post*/
      ctx2[22].timeline.end
    ) return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if_block.d(detaching);
    }
  };
}
function create_fragment$3(ctx) {
  let div4;
  let div3;
  let div0;
  let h5;
  let textContent = "Drag me";
  let t1;
  let div1;
  let t2;
  let div2;
  let mounted;
  let dispose;
  let each_value_1 = ensure_array_like({
    length: (
      /*extractedDate*/
      ctx[9].year - startYear + 1
    )
  });
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = ensure_array_like(
    /*postComponents*/
    ctx[5]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div4 = element("div");
      div3 = element("div");
      div0 = element("div");
      h5 = element("h5");
      h5.textContent = textContent;
      t1 = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t2 = space();
      div2 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h5 = claim_element(div0_nodes, "H5", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h5) !== "svelte-wnz6qy") h5.textContent = textContent;
      div0_nodes.forEach(detach);
      t1 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(div1_nodes);
      }
      div1_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div2_nodes);
      }
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h5, "class", "cursor-content svelte-nt6ic0");
      set_style(h5, "opacity", 1 - /*rightOffsetDelta*/
      ctx[6]);
      attr(div0, "class", "cursor svelte-nt6ic0");
      set_style(
        div0,
        "--iteration-count",
        /*pulseIterationCount*/
        ctx[7]
      );
      attr(div1, "class", "years svelte-nt6ic0");
      attr(div2, "class", "line svelte-nt6ic0");
      set_style(
        div2,
        "opacity",
        /*rightOffsetDelta*/
        ctx[6]
      );
      attr(div3, "class", "timeline svelte-nt6ic0");
      attr(div4, "class", "timeline-container svelte-nt6ic0");
      set_style(div4, "--top-offset", `${/*timelineDomTopOffset*/
      ctx[4]}%`);
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div3);
      append_hydration(div3, div0);
      append_hydration(div0, h5);
      ctx[13](div0);
      append_hydration(div3, t1);
      append_hydration(div3, div1);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        if (each_blocks_1[i]) {
          each_blocks_1[i].m(div1, null);
        }
      }
      ctx[14](div1);
      append_hydration(div3, t2);
      append_hydration(div3, div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div2, null);
        }
      }
      ctx[17](div4);
      if (!mounted) {
        dispose = [
          action_destroyer(dragscroll.call(null, div4)),
          listen(
            div4,
            "scroll",
            /*onScroll*/
            ctx[10]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*rightOffsetDelta*/
      64) {
        set_style(h5, "opacity", 1 - /*rightOffsetDelta*/
        ctx2[6]);
      }
      if (dirty & /*pulseIterationCount*/
      128) {
        set_style(
          div0,
          "--iteration-count",
          /*pulseIterationCount*/
          ctx2[7]
        );
      }
      if (dirty & /*startYear, date*/
      256) {
        each_value_1 = ensure_array_like({
          length: (
            /*extractedDate*/
            ctx2[9].year - startYear + 1
          )
        });
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(div1, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & /*postComponents, postsDom*/
      40) {
        each_value = ensure_array_like(
          /*postComponents*/
          ctx2[5]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div2, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*rightOffsetDelta*/
      64) {
        set_style(
          div2,
          "opacity",
          /*rightOffsetDelta*/
          ctx2[6]
        );
      }
      if (dirty & /*timelineDomTopOffset*/
      16) {
        set_style(div4, "--top-offset", `${/*timelineDomTopOffset*/
        ctx2[4]}%`);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div4);
      }
      ctx[13](null);
      destroy_each(each_blocks_1, detaching);
      ctx[14](null);
      destroy_each(each_blocks, detaching);
      ctx[17](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
const topOffestDistanceThreshold = 300;
const startYear = 1994;
function instance$3($$self, $$props, $$invalidate) {
  let kdTree;
  const dispatch = createEventDispatcher();
  const date = /* @__PURE__ */ new Date();
  const extractedDate = {
    year: date.getUTCFullYear() + 3,
    month: date.getUTCMonth()
  };
  let { nearestPoints = [] } = $$props;
  let { cursorPosition = 0 } = $$props;
  let timelineWidth;
  let yearsDom;
  let timelineDom;
  let cursorDom;
  let postsDom = [];
  let timelineDomTopOffset = 0;
  let postComponents = [];
  let rightOffsetDelta = 1;
  let pulseIterationCount = "infinite";
  const onScroll = (e) => {
    const el = e.target;
    const scrolledElement = el.querySelector("div");
    if (!scrolledElement) return;
    const rect = scrolledElement.getBoundingClientRect();
    const containerRect = el.getBoundingClientRect();
    const tempRightOffsetDelta = (rect.right - containerRect.width) / topOffestDistanceThreshold;
    $$invalidate(6, rightOffsetDelta = tempRightOffsetDelta <= 1 ? tempRightOffsetDelta : 1);
    $$invalidate(4, timelineDomTopOffset = (easeInOut(rightOffsetDelta) - 1) * -1 * 82);
    if (kdTree) {
      $$invalidate(12, cursorPosition = Math.abs(rect.x));
      $$invalidate(11, nearestPoints = kdTree.nearest({ x: cursorPosition, x2: 0 }, 10, 200));
    }
    dispatch("notify", { delta: rightOffsetDelta });
    $$invalidate(7, pulseIterationCount = rightOffsetDelta > 0.1 ? "1" : "infinite");
  };
  onMount(() => {
    timelineWidth = yearsDom.getBoundingClientRect().width / (extractedDate.year - startYear + 1);
    $$invalidate(1, timelineDom.scrollLeft = timelineDom.scrollWidth, timelineDom);
    load();
  });
  async function load() {
    $$invalidate(5, postComponents = computePostComponents(timelineData, timelineWidth, startYear));
    await __vitePreload(() => import("../chunks/ZwL-VWJa.js").then((n) => n.k), true ? [] : void 0, import.meta.url).then((m) => {
      kdTree = createKdTree(m, postComponents, timelineWidth, startYear);
    });
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      cursorDom = $$value;
      $$invalidate(2, cursorDom);
    });
  }
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      yearsDom = $$value;
      $$invalidate(0, yearsDom);
    });
  }
  function button_binding($$value, index) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      postsDom[index] = $$value;
      $$invalidate(3, postsDom);
    });
  }
  function button_binding_1($$value, index) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      postsDom[index] = $$value;
      $$invalidate(3, postsDom);
    });
  }
  function div4_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      timelineDom = $$value;
      $$invalidate(1, timelineDom);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("nearestPoints" in $$props2) $$invalidate(11, nearestPoints = $$props2.nearestPoints);
    if ("cursorPosition" in $$props2) $$invalidate(12, cursorPosition = $$props2.cursorPosition);
  };
  return [
    yearsDom,
    timelineDom,
    cursorDom,
    postsDom,
    timelineDomTopOffset,
    postComponents,
    rightOffsetDelta,
    pulseIterationCount,
    date,
    extractedDate,
    onScroll,
    nearestPoints,
    cursorPosition,
    div0_binding,
    div1_binding,
    button_binding,
    button_binding_1,
    div4_binding
  ];
}
class Timeline extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { nearestPoints: 11, cursorPosition: 12 });
  }
}
function create_fragment$2(ctx) {
  let posts;
  let t2;
  let timeline;
  let updating_cursorPosition;
  let updating_nearestPoints;
  let current;
  posts = new Posts({
    props: {
      nearestPoints: (
        /*nearestPoints*/
        ctx[0]
      ),
      cursorPosition: (
        /*cursorPosition*/
        ctx[1]
      )
    }
  });
  function timeline_cursorPosition_binding(value) {
    ctx[2](value);
  }
  function timeline_nearestPoints_binding(value) {
    ctx[3](value);
  }
  let timeline_props = {};
  if (
    /*cursorPosition*/
    ctx[1] !== void 0
  ) {
    timeline_props.cursorPosition = /*cursorPosition*/
    ctx[1];
  }
  if (
    /*nearestPoints*/
    ctx[0] !== void 0
  ) {
    timeline_props.nearestPoints = /*nearestPoints*/
    ctx[0];
  }
  timeline = new Timeline({ props: timeline_props });
  binding_callbacks.push(() => bind(timeline, "cursorPosition", timeline_cursorPosition_binding));
  binding_callbacks.push(() => bind(timeline, "nearestPoints", timeline_nearestPoints_binding));
  timeline.$on(
    "notify",
    /*notify_handler*/
    ctx[4]
  );
  return {
    c() {
      create_component(posts.$$.fragment);
      t2 = space();
      create_component(timeline.$$.fragment);
    },
    l(nodes) {
      claim_component(posts.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(timeline.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(posts, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(timeline, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const posts_changes = {};
      if (dirty & /*nearestPoints*/
      1) posts_changes.nearestPoints = /*nearestPoints*/
      ctx2[0];
      if (dirty & /*cursorPosition*/
      2) posts_changes.cursorPosition = /*cursorPosition*/
      ctx2[1];
      posts.$set(posts_changes);
      const timeline_changes = {};
      if (!updating_cursorPosition && dirty & /*cursorPosition*/
      2) {
        updating_cursorPosition = true;
        timeline_changes.cursorPosition = /*cursorPosition*/
        ctx2[1];
        add_flush_callback(() => updating_cursorPosition = false);
      }
      if (!updating_nearestPoints && dirty & /*nearestPoints*/
      1) {
        updating_nearestPoints = true;
        timeline_changes.nearestPoints = /*nearestPoints*/
        ctx2[0];
        add_flush_callback(() => updating_nearestPoints = false);
      }
      timeline.$set(timeline_changes);
    },
    i(local) {
      if (current) return;
      transition_in(posts.$$.fragment, local);
      transition_in(timeline.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(posts.$$.fragment, local);
      transition_out(timeline.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
      destroy_component(posts, detaching);
      destroy_component(timeline, detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let nearestPoints;
  let cursorPosition;
  function timeline_cursorPosition_binding(value) {
    cursorPosition = value;
    $$invalidate(1, cursorPosition);
  }
  function timeline_nearestPoints_binding(value) {
    nearestPoints = value;
    $$invalidate(0, nearestPoints);
  }
  function notify_handler(event) {
    bubble.call(this, $$self, event);
  }
  return [
    nearestPoints,
    cursorPosition,
    timeline_cursorPosition_binding,
    timeline_nearestPoints_binding,
    notify_handler
  ];
}
class TimelineContainer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
  }
}
function create_fragment$1(ctx) {
  let div2;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      div2 = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div2);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div2, "class", "bg svelte-1lm6olw");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      if (default_slot) {
        default_slot.m(div2, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2) $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Background extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
function create_default_slot(ctx) {
  let div0;
  let t2;
  let div1;
  let timelinecontainer;
  let current;
  timelinecontainer = new TimelineContainer({});
  timelinecontainer.$on(
    "notify",
    /*callbackFunction*/
    ctx[3]
  );
  return {
    c() {
      div0 = element("div");
      t2 = space();
      div1 = element("div");
      create_component(timelinecontainer.$$.fragment);
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      t2 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(timelinecontainer.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "titles-container container svelte-n0stc2");
      set_style(
        div0,
        "--hero-opacity",
        /*opacity*/
        ctx[0]
      );
      set_style(div0, "--min-height", `${/*minHeight*/
      ctx[1]}vh`);
      set_style(div0, "--padding-bottom", `${/*paddingBottom*/
      ctx[2]}em`);
      attr(div1, "class", "animation-3 h-100 svelte-n0stc2");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div1, anchor);
      mount_component(timelinecontainer, div1, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*opacity*/
      1) {
        set_style(
          div0,
          "--hero-opacity",
          /*opacity*/
          ctx2[0]
        );
      }
      if (dirty & /*minHeight*/
      2) {
        set_style(div0, "--min-height", `${/*minHeight*/
        ctx2[1]}vh`);
      }
      if (dirty & /*paddingBottom*/
      4) {
        set_style(div0, "--padding-bottom", `${/*paddingBottom*/
        ctx2[2]}em`);
      }
    },
    i(local) {
      if (current) return;
      transition_in(timelinecontainer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(timelinecontainer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div0);
        detach(t2);
        detach(div1);
      }
      destroy_component(timelinecontainer);
    }
  };
}
function create_fragment(ctx) {
  let background;
  let current;
  background = new Background({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(background.$$.fragment);
    },
    l(nodes) {
      claim_component(background.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(background, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const background_changes = {};
      if (dirty & /*$$scope, opacity, minHeight, paddingBottom*/
      23) {
        background_changes.$$scope = { dirty, ctx: ctx2 };
      }
      background.$set(background_changes);
    },
    i(local) {
      if (current) return;
      transition_in(background.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(background.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(background, detaching);
    }
  };
}
const minHeightThreshold = 30;
const paddingBottomThreshold = 4;
function instance($$self, $$props, $$invalidate) {
  let opacity = 1;
  let minHeight = minHeightThreshold;
  let paddingBottom = paddingBottomThreshold;
  const callbackFunction = (event) => {
    $$invalidate(0, opacity = 1 - event.detail.delta * 1.2);
    $$invalidate(1, minHeight = minHeightThreshold * (1 - event.detail.delta));
    $$invalidate(2, paddingBottom = paddingBottomThreshold * (1 - event.detail.delta));
  };
  return [opacity, minHeight, paddingBottom, callbackFunction];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};
