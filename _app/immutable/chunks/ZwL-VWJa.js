function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var kdTreeMin$2 = {};
/**
 * k-d Tree JavaScript - V 1.01
 *
 * https://github.com/ubilabs/kd-tree-javascript
 *
 * @author Mircea Pricop <pricop@ubilabs.net>, 2012
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2012
 * @author Ubilabs http://ubilabs.net, 2012
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
(function(exports) {
  !function(t, n) {
    n(exports);
  }(commonjsGlobal, function(t) {
    function n(t2, n2, o2) {
      this.obj = t2, this.left = null, this.right = null, this.parent = o2, this.dimension = n2;
    }
    function o(t2) {
      this.content = [], this.scoreFunction = t2;
    }
    o.prototype = { push: function(t2) {
      this.content.push(t2), this.bubbleUp(this.content.length - 1);
    }, pop: function() {
      var t2 = this.content[0], n2 = this.content.pop();
      return this.content.length > 0 && (this.content[0] = n2, this.sinkDown(0)), t2;
    }, peek: function() {
      return this.content[0];
    }, remove: function(t2) {
      for (var n2 = this.content.length, o2 = 0; o2 < n2; o2++) if (this.content[o2] == t2) {
        var i = this.content.pop();
        return void (o2 != n2 - 1 && (this.content[o2] = i, this.scoreFunction(i) < this.scoreFunction(t2) ? this.bubbleUp(o2) : this.sinkDown(o2)));
      }
      throw new Error("Node not found.");
    }, size: function() {
      return this.content.length;
    }, bubbleUp: function(t2) {
      for (var n2 = this.content[t2]; t2 > 0; ) {
        var o2 = Math.floor((t2 + 1) / 2) - 1, i = this.content[o2];
        if (!(this.scoreFunction(n2) < this.scoreFunction(i))) break;
        this.content[o2] = n2, this.content[t2] = i, t2 = o2;
      }
    }, sinkDown: function(t2) {
      for (var n2 = this.content.length, o2 = this.content[t2], i = this.scoreFunction(o2); ; ) {
        var e = 2 * (t2 + 1), r = e - 1, l = null;
        if (r < n2) {
          var u = this.content[r], h = this.scoreFunction(u);
          h < i && (l = r);
        }
        if (e < n2) {
          var s = this.content[e];
          this.scoreFunction(s) < (null == l ? i : h) && (l = e);
        }
        if (null == l) break;
        this.content[t2] = this.content[l], this.content[l] = o2, t2 = l;
      }
    } }, t.kdTree = function(t2, i, e) {
      function r(t3, o2, i2) {
        var l2, u, h = o2 % e.length;
        return 0 === t3.length ? null : 1 === t3.length ? new n(t3[0], h, i2) : (t3.sort(function(t4, n2) {
          return t4[e[h]] - n2[e[h]];
        }), l2 = Math.floor(t3.length / 2), u = new n(t3[l2], h, i2), u.left = r(t3.slice(0, l2), o2 + 1, u), u.right = r(t3.slice(l2 + 1), o2 + 1, u), u);
      }
      var l = this;
      Array.isArray(t2) ? this.root = r(t2, 0, null) : function(t3) {
        function n2(t4) {
          t4.left && (t4.left.parent = t4, n2(t4.left)), t4.right && (t4.right.parent = t4, n2(t4.right));
        }
        l.root = t3, n2(l.root);
      }(t2), this.toJSON = function(t3) {
        t3 || (t3 = this.root);
        var o2 = new n(t3.obj, t3.dimension, null);
        return t3.left && (o2.left = l.toJSON(t3.left)), t3.right && (o2.right = l.toJSON(t3.right)), o2;
      }, this.insert = function(t3) {
        function o2(n2, i3) {
          if (null === n2) return i3;
          var r3 = e[n2.dimension];
          return t3[r3] < n2.obj[r3] ? o2(n2.left, n2) : o2(n2.right, n2);
        }
        var i2, r2, l2 = o2(this.root, null);
        null !== l2 ? (i2 = new n(t3, (l2.dimension + 1) % e.length, l2), r2 = e[l2.dimension], t3[r2] < l2.obj[r2] ? l2.left = i2 : l2.right = i2) : this.root = new n(t3, 0, null);
      }, this.remove = function(t3) {
        function n2(o3) {
          if (null === o3) return null;
          if (o3.obj === t3) return o3;
          var i3 = e[o3.dimension];
          return t3[i3] < o3.obj[i3] ? n2(o3.left) : n2(o3.right);
        }
        function o2(t4) {
          function n3(t5, o3) {
            var i4, r3, l2, u2, h;
            return null === t5 ? null : (i4 = e[o3], t5.dimension === o3 ? null !== t5.left ? n3(t5.left, o3) : t5 : (r3 = t5.obj[i4], l2 = n3(t5.left, o3), u2 = n3(t5.right, o3), h = t5, null !== l2 && l2.obj[i4] < r3 && (h = l2), null !== u2 && u2.obj[i4] < h.obj[i4] && (h = u2), h));
          }
          var i3, r2, u;
          if (null === t4.left && null === t4.right) return null === t4.parent ? void (l.root = null) : (u = e[t4.parent.dimension], void (t4.obj[u] < t4.parent.obj[u] ? t4.parent.left = null : t4.parent.right = null));
          null !== t4.right ? (r2 = (i3 = n3(t4.right, t4.dimension)).obj, o2(i3), t4.obj = r2) : (r2 = (i3 = n3(t4.left, t4.dimension)).obj, o2(i3), t4.right = t4.left, t4.left = null, t4.obj = r2);
        }
        var i2;
        null !== (i2 = n2(l.root)) && o2(i2);
      }, this.nearest = function(t3, n2, r2) {
        function u(o2) {
          function r3(t4, o3) {
            f.push([t4, o3]), f.size() > n2 && f.pop();
          }
          var l2, h2, s2, c, a = e[o2.dimension], g = i(t3, o2.obj), p = {};
          for (c = 0; c < e.length; c += 1) c === o2.dimension ? p[e[c]] = t3[e[c]] : p[e[c]] = o2.obj[e[c]];
          h2 = i(p, o2.obj), null !== o2.right || null !== o2.left ? (u(l2 = null === o2.right ? o2.left : null === o2.left ? o2.right : t3[a] < o2.obj[a] ? o2.left : o2.right), (f.size() < n2 || g < f.peek()[1]) && r3(o2, g), (f.size() < n2 || Math.abs(h2) < f.peek()[1]) && null !== (s2 = l2 === o2.left ? o2.right : o2.left) && u(s2)) : (f.size() < n2 || g < f.peek()[1]) && r3(o2, g);
        }
        var h, s, f;
        if (f = new o(function(t4) {
          return -t4[1];
        }), r2) for (h = 0; h < n2; h += 1) f.push([null, r2]);
        for (l.root && u(l.root), s = [], h = 0; h < Math.min(n2, f.content.length); h += 1) f.content[h][0] && s.push([f.content[h][0].obj, f.content[h][1]]);
        return s;
      }, this.balanceFactor = function() {
        function t3(n3) {
          return null === n3 ? 0 : Math.max(t3(n3.left), t3(n3.right)) + 1;
        }
        function n2(t4) {
          return null === t4 ? 0 : n2(t4.left) + n2(t4.right) + 1;
        }
        return t3(l.root) / (Math.log(n2(l.root)) / Math.log(2));
      };
    }, t.BinaryHeap = o;
  });
})(kdTreeMin$2);
const kdTreeMin = /* @__PURE__ */ getDefaultExportFromCjs(kdTreeMin$2);
const kdTreeMin$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: kdTreeMin
}, [kdTreeMin$2]);
export {
  getAugmentedNamespace as g,
  kdTreeMin$1 as k
};
