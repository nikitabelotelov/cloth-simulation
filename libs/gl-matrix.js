/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/gl-matrix@3.4.3/esm/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t = 1e-6,
  n = "undefined" != typeof Float32Array ? Float32Array : Array,
  a = Math.random;
var r = Math.PI / 180;
Math.hypot ||
  (Math.hypot = function () {
    for (var t = 0, n = arguments.length; n--; )
      t += arguments[n] * arguments[n];
    return Math.sqrt(t);
  });
var u = Object.freeze({
  __proto__: null,
  EPSILON: t,
  get ARRAY_TYPE() {
    return n;
  },
  RANDOM: a,
  setMatrixArrayType: function (t) {
    n = t;
  },
  toRadian: function (t) {
    return t * r;
  },
  equals: function (n, a) {
    return Math.abs(n - a) <= t * Math.max(1, Math.abs(n), Math.abs(a));
  },
});
function e(t, n, a) {
  var r = n[0],
    u = n[1],
    e = n[2],
    o = n[3],
    i = a[0],
    h = a[1],
    c = a[2],
    s = a[3];
  return (
    (t[0] = r * i + e * h),
    (t[1] = u * i + o * h),
    (t[2] = r * c + e * s),
    (t[3] = u * c + o * s),
    t
  );
}
function o(t, n, a) {
  return (
    (t[0] = n[0] - a[0]),
    (t[1] = n[1] - a[1]),
    (t[2] = n[2] - a[2]),
    (t[3] = n[3] - a[3]),
    t
  );
}
var i = e,
  h = o,
  c = Object.freeze({
    __proto__: null,
    create: function () {
      var t = new n(4);
      return (
        n != Float32Array && ((t[1] = 0), (t[2] = 0)), (t[0] = 1), (t[3] = 1), t
      );
    },
    clone: function (t) {
      var a = new n(4);
      return (a[0] = t[0]), (a[1] = t[1]), (a[2] = t[2]), (a[3] = t[3]), a;
    },
    copy: function (t, n) {
      return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t;
    },
    identity: function (t) {
      return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
    },
    fromValues: function (t, a, r, u) {
      var e = new n(4);
      return (e[0] = t), (e[1] = a), (e[2] = r), (e[3] = u), e;
    },
    set: function (t, n, a, r, u) {
      return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), t;
    },
    transpose: function (t, n) {
      if (t === n) {
        var a = n[1];
        (t[1] = n[2]), (t[2] = a);
      } else (t[0] = n[0]), (t[1] = n[2]), (t[2] = n[1]), (t[3] = n[3]);
      return t;
    },
    invert: function (t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = a * e - u * r;
      return o
        ? ((o = 1 / o),
          (t[0] = e * o),
          (t[1] = -r * o),
          (t[2] = -u * o),
          (t[3] = a * o),
          t)
        : null;
    },
    adjoint: function (t, n) {
      var a = n[0];
      return (t[0] = n[3]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = a), t;
    },
    determinant: function (t) {
      return t[0] * t[3] - t[2] * t[1];
    },
    multiply: e,
    rotate: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = Math.sin(a),
        h = Math.cos(a);
      return (
        (t[0] = r * h + e * i),
        (t[1] = u * h + o * i),
        (t[2] = r * -i + e * h),
        (t[3] = u * -i + o * h),
        t
      );
    },
    scale: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = a[0],
        h = a[1];
      return (t[0] = r * i), (t[1] = u * i), (t[2] = e * h), (t[3] = o * h), t;
    },
    fromRotation: function (t, n) {
      var a = Math.sin(n),
        r = Math.cos(n);
      return (t[0] = r), (t[1] = a), (t[2] = -a), (t[3] = r), t;
    },
    fromScaling: function (t, n) {
      return (t[0] = n[0]), (t[1] = 0), (t[2] = 0), (t[3] = n[1]), t;
    },
    str: function (t) {
      return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
    },
    frob: function (t) {
      return Math.hypot(t[0], t[1], t[2], t[3]);
    },
    LDU: function (t, n, a, r) {
      return (
        (t[2] = r[2] / r[0]),
        (a[0] = r[0]),
        (a[1] = r[1]),
        (a[3] = r[3] - t[2] * a[1]),
        [t, n, a]
      );
    },
    add: function (t, n, a) {
      return (
        (t[0] = n[0] + a[0]),
        (t[1] = n[1] + a[1]),
        (t[2] = n[2] + a[2]),
        (t[3] = n[3] + a[3]),
        t
      );
    },
    subtract: o,
    exactEquals: function (t, n) {
      return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
    },
    equals: function (n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = a[0],
        h = a[1],
        c = a[2],
        s = a[3];
      return (
        Math.abs(r - i) <= t * Math.max(1, Math.abs(r), Math.abs(i)) &&
        Math.abs(u - h) <= t * Math.max(1, Math.abs(u), Math.abs(h)) &&
        Math.abs(e - c) <= t * Math.max(1, Math.abs(e), Math.abs(c)) &&
        Math.abs(o - s) <= t * Math.max(1, Math.abs(o), Math.abs(s))
      );
    },
    multiplyScalar: function (t, n, a) {
      return (
        (t[0] = n[0] * a),
        (t[1] = n[1] * a),
        (t[2] = n[2] * a),
        (t[3] = n[3] * a),
        t
      );
    },
    multiplyScalarAndAdd: function (t, n, a, r) {
      return (
        (t[0] = n[0] + a[0] * r),
        (t[1] = n[1] + a[1] * r),
        (t[2] = n[2] + a[2] * r),
        (t[3] = n[3] + a[3] * r),
        t
      );
    },
    mul: i,
    sub: h,
  });
function s(t, n, a) {
  var r = n[0],
    u = n[1],
    e = n[2],
    o = n[3],
    i = n[4],
    h = n[5],
    c = a[0],
    s = a[1],
    M = a[2],
    f = a[3],
    l = a[4],
    v = a[5];
  return (
    (t[0] = r * c + e * s),
    (t[1] = u * c + o * s),
    (t[2] = r * M + e * f),
    (t[3] = u * M + o * f),
    (t[4] = r * l + e * v + i),
    (t[5] = u * l + o * v + h),
    t
  );
}
function M(t, n, a) {
  return (
    (t[0] = n[0] - a[0]),
    (t[1] = n[1] - a[1]),
    (t[2] = n[2] - a[2]),
    (t[3] = n[3] - a[3]),
    (t[4] = n[4] - a[4]),
    (t[5] = n[5] - a[5]),
    t
  );
}
var f = s,
  l = M,
  v = Object.freeze({
    __proto__: null,
    create: function () {
      var t = new n(6);
      return (
        n != Float32Array && ((t[1] = 0), (t[2] = 0), (t[4] = 0), (t[5] = 0)),
        (t[0] = 1),
        (t[3] = 1),
        t
      );
    },
    clone: function (t) {
      var a = new n(6);
      return (
        (a[0] = t[0]),
        (a[1] = t[1]),
        (a[2] = t[2]),
        (a[3] = t[3]),
        (a[4] = t[4]),
        (a[5] = t[5]),
        a
      );
    },
    copy: function (t, n) {
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        t
      );
    },
    identity: function (t) {
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 1),
        (t[4] = 0),
        (t[5] = 0),
        t
      );
    },
    fromValues: function (t, a, r, u, e, o) {
      var i = new n(6);
      return (
        (i[0] = t),
        (i[1] = a),
        (i[2] = r),
        (i[3] = u),
        (i[4] = e),
        (i[5] = o),
        i
      );
    },
    set: function (t, n, a, r, u, e, o) {
      return (
        (t[0] = n),
        (t[1] = a),
        (t[2] = r),
        (t[3] = u),
        (t[4] = e),
        (t[5] = o),
        t
      );
    },
    invert: function (t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = n[4],
        i = n[5],
        h = a * e - r * u;
      return h
        ? ((h = 1 / h),
          (t[0] = e * h),
          (t[1] = -r * h),
          (t[2] = -u * h),
          (t[3] = a * h),
          (t[4] = (u * i - e * o) * h),
          (t[5] = (r * o - a * i) * h),
          t)
        : null;
    },
    determinant: function (t) {
      return t[0] * t[3] - t[1] * t[2];
    },
    multiply: s,
    rotate: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        h = n[5],
        c = Math.sin(a),
        s = Math.cos(a);
      return (
        (t[0] = r * s + e * c),
        (t[1] = u * s + o * c),
        (t[2] = r * -c + e * s),
        (t[3] = u * -c + o * s),
        (t[4] = i),
        (t[5] = h),
        t
      );
    },
    scale: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        h = n[5],
        c = a[0],
        s = a[1];
      return (
        (t[0] = r * c),
        (t[1] = u * c),
        (t[2] = e * s),
        (t[3] = o * s),
        (t[4] = i),
        (t[5] = h),
        t
      );
    },
    translate: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        h = n[5],
        c = a[0],
        s = a[1];
      return (
        (t[0] = r),
        (t[1] = u),
        (t[2] = e),
        (t[3] = o),
        (t[4] = r * c + e * s + i),
        (t[5] = u * c + o * s + h),
        t
      );
    },
    fromRotation: function (t, n) {
      var a = Math.sin(n),
        r = Math.cos(n);
      return (
        (t[0] = r),
        (t[1] = a),
        (t[2] = -a),
        (t[3] = r),
        (t[4] = 0),
        (t[5] = 0),
        t
      );
    },
    fromScaling: function (t, n) {
      return (
        (t[0] = n[0]),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = n[1]),
        (t[4] = 0),
        (t[5] = 0),
        t
      );
    },
    fromTranslation: function (t, n) {
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 1),
        (t[4] = n[0]),
        (t[5] = n[1]),
        t
      );
    },
    str: function (t) {
      return (
        "mat2d(" +
        t[0] +
        ", " +
        t[1] +
        ", " +
        t[2] +
        ", " +
        t[3] +
        ", " +
        t[4] +
        ", " +
        t[5] +
        ")"
      );
    },
    frob: function (t) {
      return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1);
    },
    add: function (t, n, a) {
      return (
        (t[0] = n[0] + a[0]),
        (t[1] = n[1] + a[1]),
        (t[2] = n[2] + a[2]),
        (t[3] = n[3] + a[3]),
        (t[4] = n[4] + a[4]),
        (t[5] = n[5] + a[5]),
        t
      );
    },
    subtract: M,
    multiplyScalar: function (t, n, a) {
      return (
        (t[0] = n[0] * a),
        (t[1] = n[1] * a),
        (t[2] = n[2] * a),
        (t[3] = n[3] * a),
        (t[4] = n[4] * a),
        (t[5] = n[5] * a),
        t
      );
    },
    multiplyScalarAndAdd: function (t, n, a, r) {
      return (
        (t[0] = n[0] + a[0] * r),
        (t[1] = n[1] + a[1] * r),
        (t[2] = n[2] + a[2] * r),
        (t[3] = n[3] + a[3] * r),
        (t[4] = n[4] + a[4] * r),
        (t[5] = n[5] + a[5] * r),
        t
      );
    },
    exactEquals: function (t, n) {
      return (
        t[0] === n[0] &&
        t[1] === n[1] &&
        t[2] === n[2] &&
        t[3] === n[3] &&
        t[4] === n[4] &&
        t[5] === n[5]
      );
    },
    equals: function (n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        h = n[5],
        c = a[0],
        s = a[1],
        M = a[2],
        f = a[3],
        l = a[4],
        v = a[5];
      return (
        Math.abs(r - c) <= t * Math.max(1, Math.abs(r), Math.abs(c)) &&
        Math.abs(u - s) <= t * Math.max(1, Math.abs(u), Math.abs(s)) &&
        Math.abs(e - M) <= t * Math.max(1, Math.abs(e), Math.abs(M)) &&
        Math.abs(o - f) <= t * Math.max(1, Math.abs(o), Math.abs(f)) &&
        Math.abs(i - l) <= t * Math.max(1, Math.abs(i), Math.abs(l)) &&
        Math.abs(h - v) <= t * Math.max(1, Math.abs(h), Math.abs(v))
      );
    },
    mul: f,
    sub: l,
  });
function b() {
  var t = new n(9);
  return (
    n != Float32Array &&
      ((t[1] = 0), (t[2] = 0), (t[3] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)),
    (t[0] = 1),
    (t[4] = 1),
    (t[8] = 1),
    t
  );
}
function m(t, n, a) {
  var r = n[0],
    u = n[1],
    e = n[2],
    o = n[3],
    i = n[4],
    h = n[5],
    c = n[6],
    s = n[7],
    M = n[8],
    f = a[0],
    l = a[1],
    v = a[2],
    b = a[3],
    m = a[4],
    d = a[5],
    p = a[6],
    x = a[7],
    y = a[8];
  return (
    (t[0] = f * r + l * o + v * c),
    (t[1] = f * u + l * i + v * s),
    (t[2] = f * e + l * h + v * M),
    (t[3] = b * r + m * o + d * c),
    (t[4] = b * u + m * i + d * s),
    (t[5] = b * e + m * h + d * M),
    (t[6] = p * r + x * o + y * c),
    (t[7] = p * u + x * i + y * s),
    (t[8] = p * e + x * h + y * M),
    t
  );
}
function d(t, n, a) {
  return (
    (t[0] = n[0] - a[0]),
    (t[1] = n[1] - a[1]),
    (t[2] = n[2] - a[2]),
    (t[3] = n[3] - a[3]),
    (t[4] = n[4] - a[4]),
    (t[5] = n[5] - a[5]),
    (t[6] = n[6] - a[6]),
    (t[7] = n[7] - a[7]),
    (t[8] = n[8] - a[8]),
    t
  );
}
var p = m,
  x = d,
  y = Object.freeze({
    __proto__: null,
    create: b,
    fromMat4: function (t, n) {
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[4]),
        (t[4] = n[5]),
        (t[5] = n[6]),
        (t[6] = n[8]),
        (t[7] = n[9]),
        (t[8] = n[10]),
        t
      );
    },
    clone: function (t) {
      var a = new n(9);
      return (
        (a[0] = t[0]),
        (a[1] = t[1]),
        (a[2] = t[2]),
        (a[3] = t[3]),
        (a[4] = t[4]),
        (a[5] = t[5]),
        (a[6] = t[6]),
        (a[7] = t[7]),
        (a[8] = t[8]),
        a
      );
    },
    copy: function (t, n) {
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        t
      );
    },
    fromValues: function (t, a, r, u, e, o, i, h, c) {
      var s = new n(9);
      return (
        (s[0] = t),
        (s[1] = a),
        (s[2] = r),
        (s[3] = u),
        (s[4] = e),
        (s[5] = o),
        (s[6] = i),
        (s[7] = h),
        (s[8] = c),
        s
      );
    },
    set: function (t, n, a, r, u, e, o, i, h, c) {
      return (
        (t[0] = n),
        (t[1] = a),
        (t[2] = r),
        (t[3] = u),
        (t[4] = e),
        (t[5] = o),
        (t[6] = i),
        (t[7] = h),
        (t[8] = c),
        t
      );
    },
    identity: function (t) {
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 1),
        (t[5] = 0),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 1),
        t
      );
    },
    transpose: function (t, n) {
      if (t === n) {
        var a = n[1],
          r = n[2],
          u = n[5];
        (t[1] = n[3]),
          (t[2] = n[6]),
          (t[3] = a),
          (t[5] = n[7]),
          (t[6] = r),
          (t[7] = u);
      } else
        (t[0] = n[0]),
          (t[1] = n[3]),
          (t[2] = n[6]),
          (t[3] = n[1]),
          (t[4] = n[4]),
          (t[5] = n[7]),
          (t[6] = n[2]),
          (t[7] = n[5]),
          (t[8] = n[8]);
      return t;
    },
    invert: function (t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = n[4],
        i = n[5],
        h = n[6],
        c = n[7],
        s = n[8],
        M = s * o - i * c,
        f = -s * e + i * h,
        l = c * e - o * h,
        v = a * M + r * f + u * l;
      return v
        ? ((v = 1 / v),
          (t[0] = M * v),
          (t[1] = (-s * r + u * c) * v),
          (t[2] = (i * r - u * o) * v),
          (t[3] = f * v),
          (t[4] = (s * a - u * h) * v),
          (t[5] = (-i * a + u * e) * v),
          (t[6] = l * v),
          (t[7] = (-c * a + r * h) * v),
          (t[8] = (o * a - r * e) * v),
          t)
        : null;
    },
    adjoint: function (t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = n[4],
        i = n[5],
        h = n[6],
        c = n[7],
        s = n[8];
      return (
        (t[0] = o * s - i * c),
        (t[1] = u * c - r * s),
        (t[2] = r * i - u * o),
        (t[3] = i * h - e * s),
        (t[4] = a * s - u * h),
        (t[5] = u * e - a * i),
        (t[6] = e * c - o * h),
        (t[7] = r * h - a * c),
        (t[8] = a * o - r * e),
        t
      );
    },
    determinant: function (t) {
      var n = t[0],
        a = t[1],
        r = t[2],
        u = t[3],
        e = t[4],
        o = t[5],
        i = t[6],
        h = t[7],
        c = t[8];
      return n * (c * e - o * h) + a * (-c * u + o * i) + r * (h * u - e * i);
    },
    multiply: m,
    translate: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        h = n[5],
        c = n[6],
        s = n[7],
        M = n[8],
        f = a[0],
        l = a[1];
      return (
        (t[0] = r),
        (t[1] = u),
        (t[2] = e),
        (t[3] = o),
        (t[4] = i),
        (t[5] = h),
        (t[6] = f * r + l * o + c),
        (t[7] = f * u + l * i + s),
        (t[8] = f * e + l * h + M),
        t
      );
    },
    rotate: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        h = n[5],
        c = n[6],
        s = n[7],
        M = n[8],
        f = Math.sin(a),
        l = Math.cos(a);
      return (
        (t[0] = l * r + f * o),
        (t[1] = l * u + f * i),
        (t[2] = l * e + f * h),
        (t[3] = l * o - f * r),
        (t[4] = l * i - f * u),
        (t[5] = l * h - f * e),
        (t[6] = c),
        (t[7] = s),
        (t[8] = M),
        t
      );
    },
    scale: function (t, n, a) {
      var r = a[0],
        u = a[1];
      return (
        (t[0] = r * n[0]),
        (t[1] = r * n[1]),
        (t[2] = r * n[2]),
        (t[3] = u * n[3]),
        (t[4] = u * n[4]),
        (t[5] = u * n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        t
      );
    },
    fromTranslation: function (t, n) {
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 1),
        (t[5] = 0),
        (t[6] = n[0]),
        (t[7] = n[1]),
        (t[8] = 1),
        t
      );
    },
    fromRotation: function (t, n) {
      var a = Math.sin(n),
        r = Math.cos(n);
      return (
        (t[0] = r),
        (t[1] = a),
        (t[2] = 0),
        (t[3] = -a),
        (t[4] = r),
        (t[5] = 0),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 1),
        t
      );
    },
    fromScaling: function (t, n) {
      return (
        (t[0] = n[0]),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = n[1]),
        (t[5] = 0),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 1),
        t
      );
    },
    fromMat2d: function (t, n) {
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = 0),
        (t[3] = n[2]),
        (t[4] = n[3]),
        (t[5] = 0),
        (t[6] = n[4]),
        (t[7] = n[5]),
        (t[8] = 1),
        t
      );
    },
    fromQuat: function (t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = a + a,
        i = r + r,
        h = u + u,
        c = a * o,
        s = r * o,
        M = r * i,
        f = u * o,
        l = u * i,
        v = u * h,
        b = e * o,
        m = e * i,
        d = e * h;
      return (
        (t[0] = 1 - M - v),
        (t[3] = s - d),
        (t[6] = f + m),
        (t[1] = s + d),
        (t[4] = 1 - c - v),
        (t[7] = l - b),
        (t[2] = f - m),
        (t[5] = l + b),
        (t[8] = 1 - c - M),
        t
      );
    },
    normalFromMat4: function (t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = n[4],
        i = n[5],
        h = n[6],
        c = n[7],
        s = n[8],
        M = n[9],
        f = n[10],
        l = n[11],
        v = n[12],
        b = n[13],
        m = n[14],
        d = n[15],
        p = a * i - r * o,
        x = a * h - u * o,
        y = a * c - e * o,
        q = r * h - u * i,
        g = r * c - e * i,
        _ = u * c - e * h,
        A = s * b - M * v,
        w = s * m - f * v,
        R = s * d - l * v,
        z = M * m - f * b,
        O = M * d - l * b,
        j = f * d - l * m,
        P = p * j - x * O + y * z + q * R - g * w + _ * A;
      return P
        ? ((P = 1 / P),
          (t[0] = (i * j - h * O + c * z) * P),
          (t[1] = (h * R - o * j - c * w) * P),
          (t[2] = (o * O - i * R + c * A) * P),
          (t[3] = (u * O - r * j - e * z) * P),
          (t[4] = (a * j - u * R + e * w) * P),
          (t[5] = (r * R - a * O - e * A) * P),
          (t[6] = (b * _ - m * g + d * q) * P),
          (t[7] = (m * y - v * _ - d * x) * P),
          (t[8] = (v * g - b * y + d * p) * P),
          t)
        : null;
    },
    projection: function (t, n, a) {
      return (
        (t[0] = 2 / n),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = -2 / a),
        (t[5] = 0),
        (t[6] = -1),
        (t[7] = 1),
        (t[8] = 1),
        t
      );
    },
    str: function (t) {
      return (
        "mat3(" +
        t[0] +
        ", " +
        t[1] +
        ", " +
        t[2] +
        ", " +
        t[3] +
        ", " +
        t[4] +
        ", " +
        t[5] +
        ", " +
        t[6] +
        ", " +
        t[7] +
        ", " +
        t[8] +
        ")"
      );
    },
    frob: function (t) {
      return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
    },
    add: function (t, n, a) {
      return (
        (t[0] = n[0] + a[0]),
        (t[1] = n[1] + a[1]),
        (t[2] = n[2] + a[2]),
        (t[3] = n[3] + a[3]),
        (t[4] = n[4] + a[4]),
        (t[5] = n[5] + a[5]),
        (t[6] = n[6] + a[6]),
        (t[7] = n[7] + a[7]),
        (t[8] = n[8] + a[8]),
        t
      );
    },
    subtract: d,
    multiplyScalar: function (t, n, a) {
      return (
        (t[0] = n[0] * a),
        (t[1] = n[1] * a),
        (t[2] = n[2] * a),
        (t[3] = n[3] * a),
        (t[4] = n[4] * a),
        (t[5] = n[5] * a),
        (t[6] = n[6] * a),
        (t[7] = n[7] * a),
        (t[8] = n[8] * a),
        t
      );
    },
    multiplyScalarAndAdd: function (t, n, a, r) {
      return (
        (t[0] = n[0] + a[0] * r),
        (t[1] = n[1] + a[1] * r),
        (t[2] = n[2] + a[2] * r),
        (t[3] = n[3] + a[3] * r),
        (t[4] = n[4] + a[4] * r),
        (t[5] = n[5] + a[5] * r),
        (t[6] = n[6] + a[6] * r),
        (t[7] = n[7] + a[7] * r),
        (t[8] = n[8] + a[8] * r),
        t
      );
    },
    exactEquals: function (t, n) {
      return (
        t[0] === n[0] &&
        t[1] === n[1] &&
        t[2] === n[2] &&
        t[3] === n[3] &&
        t[4] === n[4] &&
        t[5] === n[5] &&
        t[6] === n[6] &&
        t[7] === n[7] &&
        t[8] === n[8]
      );
    },
    equals: function (n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        h = n[5],
        c = n[6],
        s = n[7],
        M = n[8],
        f = a[0],
        l = a[1],
        v = a[2],
        b = a[3],
        m = a[4],
        d = a[5],
        p = a[6],
        x = a[7],
        y = a[8];
      return (
        Math.abs(r - f) <= t * Math.max(1, Math.abs(r), Math.abs(f)) &&
        Math.abs(u - l) <= t * Math.max(1, Math.abs(u), Math.abs(l)) &&
        Math.abs(e - v) <= t * Math.max(1, Math.abs(e), Math.abs(v)) &&
        Math.abs(o - b) <= t * Math.max(1, Math.abs(o), Math.abs(b)) &&
        Math.abs(i - m) <= t * Math.max(1, Math.abs(i), Math.abs(m)) &&
        Math.abs(h - d) <= t * Math.max(1, Math.abs(h), Math.abs(d)) &&
        Math.abs(c - p) <= t * Math.max(1, Math.abs(c), Math.abs(p)) &&
        Math.abs(s - x) <= t * Math.max(1, Math.abs(s), Math.abs(x)) &&
        Math.abs(M - y) <= t * Math.max(1, Math.abs(M), Math.abs(y))
      );
    },
    mul: p,
    sub: x,
  });
function q(t) {
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = 1),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 1),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function g(t, n, a) {
  var r = n[0],
    u = n[1],
    e = n[2],
    o = n[3],
    i = n[4],
    h = n[5],
    c = n[6],
    s = n[7],
    M = n[8],
    f = n[9],
    l = n[10],
    v = n[11],
    b = n[12],
    m = n[13],
    d = n[14],
    p = n[15],
    x = a[0],
    y = a[1],
    q = a[2],
    g = a[3];
  return (
    (t[0] = x * r + y * i + q * M + g * b),
    (t[1] = x * u + y * h + q * f + g * m),
    (t[2] = x * e + y * c + q * l + g * d),
    (t[3] = x * o + y * s + q * v + g * p),
    (x = a[4]),
    (y = a[5]),
    (q = a[6]),
    (g = a[7]),
    (t[4] = x * r + y * i + q * M + g * b),
    (t[5] = x * u + y * h + q * f + g * m),
    (t[6] = x * e + y * c + q * l + g * d),
    (t[7] = x * o + y * s + q * v + g * p),
    (x = a[8]),
    (y = a[9]),
    (q = a[10]),
    (g = a[11]),
    (t[8] = x * r + y * i + q * M + g * b),
    (t[9] = x * u + y * h + q * f + g * m),
    (t[10] = x * e + y * c + q * l + g * d),
    (t[11] = x * o + y * s + q * v + g * p),
    (x = a[12]),
    (y = a[13]),
    (q = a[14]),
    (g = a[15]),
    (t[12] = x * r + y * i + q * M + g * b),
    (t[13] = x * u + y * h + q * f + g * m),
    (t[14] = x * e + y * c + q * l + g * d),
    (t[15] = x * o + y * s + q * v + g * p),
    t
  );
}
function _(t, n, a) {
  var r = n[0],
    u = n[1],
    e = n[2],
    o = n[3],
    i = r + r,
    h = u + u,
    c = e + e,
    s = r * i,
    M = r * h,
    f = r * c,
    l = u * h,
    v = u * c,
    b = e * c,
    m = o * i,
    d = o * h,
    p = o * c;
  return (
    (t[0] = 1 - (l + b)),
    (t[1] = M + p),
    (t[2] = f - d),
    (t[3] = 0),
    (t[4] = M - p),
    (t[5] = 1 - (s + b)),
    (t[6] = v + m),
    (t[7] = 0),
    (t[8] = f + d),
    (t[9] = v - m),
    (t[10] = 1 - (s + l)),
    (t[11] = 0),
    (t[12] = a[0]),
    (t[13] = a[1]),
    (t[14] = a[2]),
    (t[15] = 1),
    t
  );
}
function A(t, n) {
  return (t[0] = n[12]), (t[1] = n[13]), (t[2] = n[14]), t;
}
function w(t, n) {
  var a = n[0],
    r = n[1],
    u = n[2],
    e = n[4],
    o = n[5],
    i = n[6],
    h = n[8],
    c = n[9],
    s = n[10];
  return (
    (t[0] = Math.hypot(a, r, u)),
    (t[1] = Math.hypot(e, o, i)),
    (t[2] = Math.hypot(h, c, s)),
    t
  );
}
function R(t, a) {
  var r = new n(3);
  w(r, a);
  var u = 1 / r[0],
    e = 1 / r[1],
    o = 1 / r[2],
    i = a[0] * u,
    h = a[1] * e,
    c = a[2] * o,
    s = a[4] * u,
    M = a[5] * e,
    f = a[6] * o,
    l = a[8] * u,
    v = a[9] * e,
    b = a[10] * o,
    m = i + M + b,
    d = 0;
  return (
    m > 0
      ? ((d = 2 * Math.sqrt(m + 1)),
        (t[3] = 0.25 * d),
        (t[0] = (f - v) / d),
        (t[1] = (l - c) / d),
        (t[2] = (h - s) / d))
      : i > M && i > b
      ? ((d = 2 * Math.sqrt(1 + i - M - b)),
        (t[3] = (f - v) / d),
        (t[0] = 0.25 * d),
        (t[1] = (h + s) / d),
        (t[2] = (l + c) / d))
      : M > b
      ? ((d = 2 * Math.sqrt(1 + M - i - b)),
        (t[3] = (l - c) / d),
        (t[0] = (h + s) / d),
        (t[1] = 0.25 * d),
        (t[2] = (f + v) / d))
      : ((d = 2 * Math.sqrt(1 + b - i - M)),
        (t[3] = (h - s) / d),
        (t[0] = (l + c) / d),
        (t[1] = (f + v) / d),
        (t[2] = 0.25 * d)),
    t
  );
}
function z(t, n, a, r, u) {
  var e,
    o = 1 / Math.tan(n / 2);
  return (
    (t[0] = o / a),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = o),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[11] = -1),
    (t[12] = 0),
    (t[13] = 0),
    (t[15] = 0),
    null != u && u !== 1 / 0
      ? ((e = 1 / (r - u)), (t[10] = (u + r) * e), (t[14] = 2 * u * r * e))
      : ((t[10] = -1), (t[14] = -2 * r)),
    t
  );
}
var O = z;
function j(t, n, a, r, u, e, o) {
  var i = 1 / (n - a),
    h = 1 / (r - u),
    c = 1 / (e - o);
  return (
    (t[0] = -2 * i),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = -2 * h),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 2 * c),
    (t[11] = 0),
    (t[12] = (n + a) * i),
    (t[13] = (u + r) * h),
    (t[14] = (o + e) * c),
    (t[15] = 1),
    t
  );
}
var P = j;
function S(t, n, a) {
  return (
    (t[0] = n[0] - a[0]),
    (t[1] = n[1] - a[1]),
    (t[2] = n[2] - a[2]),
    (t[3] = n[3] - a[3]),
    (t[4] = n[4] - a[4]),
    (t[5] = n[5] - a[5]),
    (t[6] = n[6] - a[6]),
    (t[7] = n[7] - a[7]),
    (t[8] = n[8] - a[8]),
    (t[9] = n[9] - a[9]),
    (t[10] = n[10] - a[10]),
    (t[11] = n[11] - a[11]),
    (t[12] = n[12] - a[12]),
    (t[13] = n[13] - a[13]),
    (t[14] = n[14] - a[14]),
    (t[15] = n[15] - a[15]),
    t
  );
}
var E = g,
  T = S,
  D = Object.freeze({
    __proto__: null,
    create: function () {
      var t = new n(16);
      return (
        n != Float32Array &&
          ((t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = 0),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0)),
        (t[0] = 1),
        (t[5] = 1),
        (t[10] = 1),
        (t[15] = 1),
        t
      );
    },
    clone: function (t) {
      var a = new n(16);
      return (
        (a[0] = t[0]),
        (a[1] = t[1]),
        (a[2] = t[2]),
        (a[3] = t[3]),
        (a[4] = t[4]),
        (a[5] = t[5]),
        (a[6] = t[6]),
        (a[7] = t[7]),
        (a[8] = t[8]),
        (a[9] = t[9]),
        (a[10] = t[10]),
        (a[11] = t[11]),
        (a[12] = t[12]),
        (a[13] = t[13]),
        (a[14] = t[14]),
        (a[15] = t[15]),
        a
      );
    },
    copy: function (t, n) {
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        (t[9] = n[9]),
        (t[10] = n[10]),
        (t[11] = n[11]),
        (t[12] = n[12]),
        (t[13] = n[13]),
        (t[14] = n[14]),
        (t[15] = n[15]),
        t
      );
    },
    fromValues: function (t, a, r, u, e, o, i, h, c, s, M, f, l, v, b, m) {
      var d = new n(16);
      return (
        (d[0] = t),
        (d[1] = a),
        (d[2] = r),
        (d[3] = u),
        (d[4] = e),
        (d[5] = o),
        (d[6] = i),
        (d[7] = h),
        (d[8] = c),
        (d[9] = s),
        (d[10] = M),
        (d[11] = f),
        (d[12] = l),
        (d[13] = v),
        (d[14] = b),
        (d[15] = m),
        d
      );
    },
    set: function (t, n, a, r, u, e, o, i, h, c, s, M, f, l, v, b, m) {
      return (
        (t[0] = n),
        (t[1] = a),
        (t[2] = r),
        (t[3] = u),
        (t[4] = e),
        (t[5] = o),
        (t[6] = i),
        (t[7] = h),
        (t[8] = c),
        (t[9] = s),
        (t[10] = M),
        (t[11] = f),
        (t[12] = l),
        (t[13] = v),
        (t[14] = b),
        (t[15] = m),
        t
      );
    },
    identity: q,
    transpose: function (t, n) {
      if (t === n) {
        var a = n[1],
          r = n[2],
          u = n[3],
          e = n[6],
          o = n[7],
          i = n[11];
        (t[1] = n[4]),
          (t[2] = n[8]),
          (t[3] = n[12]),
          (t[4] = a),
          (t[6] = n[9]),
          (t[7] = n[13]),
          (t[8] = r),
          (t[9] = e),
          (t[11] = n[14]),
          (t[12] = u),
          (t[13] = o),
          (t[14] = i);
      } else
        (t[0] = n[0]),
          (t[1] = n[4]),
          (t[2] = n[8]),
          (t[3] = n[12]),
          (t[4] = n[1]),
          (t[5] = n[5]),
          (t[6] = n[9]),
          (t[7] = n[13]),
          (t[8] = n[2]),
          (t[9] = n[6]),
          (t[10] = n[10]),
          (t[11] = n[14]),
          (t[12] = n[3]),
          (t[13] = n[7]),
          (t[14] = n[11]),
          (t[15] = n[15]);
      return t;
    },
    invert: function (t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = n[4],
        i = n[5],
        h = n[6],
        c = n[7],
        s = n[8],
        M = n[9],
        f = n[10],
        l = n[11],
        v = n[12],
        b = n[13],
        m = n[14],
        d = n[15],
        p = a * i - r * o,
        x = a * h - u * o,
        y = a * c - e * o,
        q = r * h - u * i,
        g = r * c - e * i,
        _ = u * c - e * h,
        A = s * b - M * v,
        w = s * m - f * v,
        R = s * d - l * v,
        z = M * m - f * b,
        O = M * d - l * b,
        j = f * d - l * m,
        P = p * j - x * O + y * z + q * R - g * w + _ * A;
      return P
        ? ((P = 1 / P),
          (t[0] = (i * j - h * O + c * z) * P),
          (t[1] = (u * O - r * j - e * z) * P),
          (t[2] = (b * _ - m * g + d * q) * P),
          (t[3] = (f * g - M * _ - l * q) * P),
          (t[4] = (h * R - o * j - c * w) * P),
          (t[5] = (a * j - u * R + e * w) * P),
          (t[6] = (m * y - v * _ - d * x) * P),
          (t[7] = (s * _ - f * y + l * x) * P),
          (t[8] = (o * O - i * R + c * A) * P),
          (t[9] = (r * R - a * O - e * A) * P),
          (t[10] = (v * g - b * y + d * p) * P),
          (t[11] = (M * y - s * g - l * p) * P),
          (t[12] = (i * w - o * z - h * A) * P),
          (t[13] = (a * z - r * w + u * A) * P),
          (t[14] = (b * x - v * q - m * p) * P),
          (t[15] = (s * q - M * x + f * p) * P),
          t)
        : null;
    },
    adjoint: function (t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = n[4],
        i = n[5],
        h = n[6],
        c = n[7],
        s = n[8],
        M = n[9],
        f = n[10],
        l = n[11],
        v = n[12],
        b = n[13],
        m = n[14],
        d = n[15];
      return (
        (t[0] =
          i * (f * d - l * m) - M * (h * d - c * m) + b * (h * l - c * f)),
        (t[1] = -(
          r * (f * d - l * m) -
          M * (u * d - e * m) +
          b * (u * l - e * f)
        )),
        (t[2] =
          r * (h * d - c * m) - i * (u * d - e * m) + b * (u * c - e * h)),
        (t[3] = -(
          r * (h * l - c * f) -
          i * (u * l - e * f) +
          M * (u * c - e * h)
        )),
        (t[4] = -(
          o * (f * d - l * m) -
          s * (h * d - c * m) +
          v * (h * l - c * f)
        )),
        (t[5] =
          a * (f * d - l * m) - s * (u * d - e * m) + v * (u * l - e * f)),
        (t[6] = -(
          a * (h * d - c * m) -
          o * (u * d - e * m) +
          v * (u * c - e * h)
        )),
        (t[7] =
          a * (h * l - c * f) - o * (u * l - e * f) + s * (u * c - e * h)),
        (t[8] =
          o * (M * d - l * b) - s * (i * d - c * b) + v * (i * l - c * M)),
        (t[9] = -(
          a * (M * d - l * b) -
          s * (r * d - e * b) +
          v * (r * l - e * M)
        )),
        (t[10] =
          a * (i * d - c * b) - o * (r * d - e * b) + v * (r * c - e * i)),
        (t[11] = -(
          a * (i * l - c * M) -
          o * (r * l - e * M) +
          s * (r * c - e * i)
        )),
        (t[12] = -(
          o * (M * m - f * b) -
          s * (i * m - h * b) +
          v * (i * f - h * M)
        )),
        (t[13] =
          a * (M * m - f * b) - s * (r * m - u * b) + v * (r * f - u * M)),
        (t[14] = -(
          a * (i * m - h * b) -
          o * (r * m - u * b) +
          v * (r * h - u * i)
        )),
        (t[15] =
          a * (i * f - h * M) - o * (r * f - u * M) + s * (r * h - u * i)),
        t
      );
    },
    determinant: function (t) {
      var n = t[0],
        a = t[1],
        r = t[2],
        u = t[3],
        e = t[4],
        o = t[5],
        i = t[6],
        h = t[7],
        c = t[8],
        s = t[9],
        M = t[10],
        f = t[11],
        l = t[12],
        v = t[13],
        b = t[14],
        m = t[15];
      return (
        (n * o - a * e) * (M * m - f * b) -
        (n * i - r * e) * (s * m - f * v) +
        (n * h - u * e) * (s * b - M * v) +
        (a * i - r * o) * (c * m - f * l) -
        (a * h - u * o) * (c * b - M * l) +
        (r * h - u * i) * (c * v - s * l)
      );
    },
    multiply: g,
    translate: function (t, n, a) {
      var r,
        u,
        e,
        o,
        i,
        h,
        c,
        s,
        M,
        f,
        l,
        v,
        b = a[0],
        m = a[1],
        d = a[2];
      return (
        n === t
          ? ((t[12] = n[0] * b + n[4] * m + n[8] * d + n[12]),
            (t[13] = n[1] * b + n[5] * m + n[9] * d + n[13]),
            (t[14] = n[2] * b + n[6] * m + n[10] * d + n[14]),
            (t[15] = n[3] * b + n[7] * m + n[11] * d + n[15]))
          : ((r = n[0]),
            (u = n[1]),
            (e = n[2]),
            (o = n[3]),
            (i = n[4]),
            (h = n[5]),
            (c = n[6]),
            (s = n[7]),
            (M = n[8]),
            (f = n[9]),
            (l = n[10]),
            (v = n[11]),
            (t[0] = r),
            (t[1] = u),
            (t[2] = e),
            (t[3] = o),
            (t[4] = i),
            (t[5] = h),
            (t[6] = c),
            (t[7] = s),
            (t[8] = M),
            (t[9] = f),
            (t[10] = l),
            (t[11] = v),
            (t[12] = r * b + i * m + M * d + n[12]),
            (t[13] = u * b + h * m + f * d + n[13]),
            (t[14] = e * b + c * m + l * d + n[14]),
            (t[15] = o * b + s * m + v * d + n[15])),
        t
      );
    },
    scale: function (t, n, a) {
      var r = a[0],
        u = a[1],
        e = a[2];
      return (
        (t[0] = n[0] * r),
        (t[1] = n[1] * r),
        (t[2] = n[2] * r),
        (t[3] = n[3] * r),
        (t[4] = n[4] * u),
        (t[5] = n[5] * u),
        (t[6] = n[6] * u),
        (t[7] = n[7] * u),
        (t[8] = n[8] * e),
        (t[9] = n[9] * e),
        (t[10] = n[10] * e),
        (t[11] = n[11] * e),
        (t[12] = n[12]),
        (t[13] = n[13]),
        (t[14] = n[14]),
        (t[15] = n[15]),
        t
      );
    },
    rotate: function (n, a, r, u) {
      var e,
        o,
        i,
        h,
        c,
        s,
        M,
        f,
        l,
        v,
        b,
        m,
        d,
        p,
        x,
        y,
        q,
        g,
        _,
        A,
        w,
        R,
        z,
        O,
        j = u[0],
        P = u[1],
        S = u[2],
        E = Math.hypot(j, P, S);
      return E < t
        ? null
        : ((j *= E = 1 / E),
          (P *= E),
          (S *= E),
          (e = Math.sin(r)),
          (i = 1 - (o = Math.cos(r))),
          (h = a[0]),
          (c = a[1]),
          (s = a[2]),
          (M = a[3]),
          (f = a[4]),
          (l = a[5]),
          (v = a[6]),
          (b = a[7]),
          (m = a[8]),
          (d = a[9]),
          (p = a[10]),
          (x = a[11]),
          (y = j * j * i + o),
          (q = P * j * i + S * e),
          (g = S * j * i - P * e),
          (_ = j * P * i - S * e),
          (A = P * P * i + o),
          (w = S * P * i + j * e),
          (R = j * S * i + P * e),
          (z = P * S * i - j * e),
          (O = S * S * i + o),
          (n[0] = h * y + f * q + m * g),
          (n[1] = c * y + l * q + d * g),
          (n[2] = s * y + v * q + p * g),
          (n[3] = M * y + b * q + x * g),
          (n[4] = h * _ + f * A + m * w),
          (n[5] = c * _ + l * A + d * w),
          (n[6] = s * _ + v * A + p * w),
          (n[7] = M * _ + b * A + x * w),
          (n[8] = h * R + f * z + m * O),
          (n[9] = c * R + l * z + d * O),
          (n[10] = s * R + v * z + p * O),
          (n[11] = M * R + b * z + x * O),
          a !== n &&
            ((n[12] = a[12]),
            (n[13] = a[13]),
            (n[14] = a[14]),
            (n[15] = a[15])),
          n);
    },
    rotateX: function (t, n, a) {
      var r = Math.sin(a),
        u = Math.cos(a),
        e = n[4],
        o = n[5],
        i = n[6],
        h = n[7],
        c = n[8],
        s = n[9],
        M = n[10],
        f = n[11];
      return (
        n !== t &&
          ((t[0] = n[0]),
          (t[1] = n[1]),
          (t[2] = n[2]),
          (t[3] = n[3]),
          (t[12] = n[12]),
          (t[13] = n[13]),
          (t[14] = n[14]),
          (t[15] = n[15])),
        (t[4] = e * u + c * r),
        (t[5] = o * u + s * r),
        (t[6] = i * u + M * r),
        (t[7] = h * u + f * r),
        (t[8] = c * u - e * r),
        (t[9] = s * u - o * r),
        (t[10] = M * u - i * r),
        (t[11] = f * u - h * r),
        t
      );
    },
    rotateY: function (t, n, a) {
      var r = Math.sin(a),
        u = Math.cos(a),
        e = n[0],
        o = n[1],
        i = n[2],
        h = n[3],
        c = n[8],
        s = n[9],
        M = n[10],
        f = n[11];
      return (
        n !== t &&
          ((t[4] = n[4]),
          (t[5] = n[5]),
          (t[6] = n[6]),
          (t[7] = n[7]),
          (t[12] = n[12]),
          (t[13] = n[13]),
          (t[14] = n[14]),
          (t[15] = n[15])),
        (t[0] = e * u - c * r),
        (t[1] = o * u - s * r),
        (t[2] = i * u - M * r),
        (t[3] = h * u - f * r),
        (t[8] = e * r + c * u),
        (t[9] = o * r + s * u),
        (t[10] = i * r + M * u),
        (t[11] = h * r + f * u),
        t
      );
    },
    rotateZ: function (t, n, a) {
      var r = Math.sin(a),
        u = Math.cos(a),
        e = n[0],
        o = n[1],
        i = n[2],
        h = n[3],
        c = n[4],
        s = n[5],
        M = n[6],
        f = n[7];
      return (
        n !== t &&
          ((t[8] = n[8]),
          (t[9] = n[9]),
          (t[10] = n[10]),
          (t[11] = n[11]),
          (t[12] = n[12]),
          (t[13] = n[13]),
          (t[14] = n[14]),
          (t[15] = n[15])),
        (t[0] = e * u + c * r),
        (t[1] = o * u + s * r),
        (t[2] = i * u + M * r),
        (t[3] = h * u + f * r),
        (t[4] = c * u - e * r),
        (t[5] = s * u - o * r),
        (t[6] = M * u - i * r),
        (t[7] = f * u - h * r),
        t
      );
    },
    fromTranslation: function (t, n) {
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = 1),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = 1),
        (t[11] = 0),
        (t[12] = n[0]),
        (t[13] = n[1]),
        (t[14] = n[2]),
        (t[15] = 1),
        t
      );
    },
    fromScaling: function (t, n) {
      return (
        (t[0] = n[0]),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = n[1]),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = n[2]),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    },
    fromRotation: function (n, a, r) {
      var u,
        e,
        o,
        i = r[0],
        h = r[1],
        c = r[2],
        s = Math.hypot(i, h, c);
      return s < t
        ? null
        : ((i *= s = 1 / s),
          (h *= s),
          (c *= s),
          (u = Math.sin(a)),
          (o = 1 - (e = Math.cos(a))),
          (n[0] = i * i * o + e),
          (n[1] = h * i * o + c * u),
          (n[2] = c * i * o - h * u),
          (n[3] = 0),
          (n[4] = i * h * o - c * u),
          (n[5] = h * h * o + e),
          (n[6] = c * h * o + i * u),
          (n[7] = 0),
          (n[8] = i * c * o + h * u),
          (n[9] = h * c * o - i * u),
          (n[10] = c * c * o + e),
          (n[11] = 0),
          (n[12] = 0),
          (n[13] = 0),
          (n[14] = 0),
          (n[15] = 1),
          n);
    },
    fromXRotation: function (t, n) {
      var a = Math.sin(n),
        r = Math.cos(n);
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = r),
        (t[6] = a),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = -a),
        (t[10] = r),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    },
    fromYRotation: function (t, n) {
      var a = Math.sin(n),
        r = Math.cos(n);
      return (
        (t[0] = r),
        (t[1] = 0),
        (t[2] = -a),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = 1),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = a),
        (t[9] = 0),
        (t[10] = r),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    },
    fromZRotation: function (t, n) {
      var a = Math.sin(n),
        r = Math.cos(n);
      return (
        (t[0] = r),
        (t[1] = a),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = -a),
        (t[5] = r),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = 1),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    },
    fromRotationTranslation: _,
    fromQuat2: function (t, a) {
      var r = new n(3),
        u = -a[0],
        e = -a[1],
        o = -a[2],
        i = a[3],
        h = a[4],
        c = a[5],
        s = a[6],
        M = a[7],
        f = u * u + e * e + o * o + i * i;
      return (
        f > 0
          ? ((r[0] = (2 * (h * i + M * u + c * o - s * e)) / f),
            (r[1] = (2 * (c * i + M * e + s * u - h * o)) / f),
            (r[2] = (2 * (s * i + M * o + h * e - c * u)) / f))
          : ((r[0] = 2 * (h * i + M * u + c * o - s * e)),
            (r[1] = 2 * (c * i + M * e + s * u - h * o)),
            (r[2] = 2 * (s * i + M * o + h * e - c * u))),
        _(t, a, r),
        t
      );
    },
    getTranslation: A,
    getScaling: w,
    getRotation: R,
    fromRotationTranslationScale: function (t, n, a, r) {
      var u = n[0],
        e = n[1],
        o = n[2],
        i = n[3],
        h = u + u,
        c = e + e,
        s = o + o,
        M = u * h,
        f = u * c,
        l = u * s,
        v = e * c,
        b = e * s,
        m = o * s,
        d = i * h,
        p = i * c,
        x = i * s,
        y = r[0],
        q = r[1],
        g = r[2];
      return (
        (t[0] = (1 - (v + m)) * y),
        (t[1] = (f + x) * y),
        (t[2] = (l - p) * y),
        (t[3] = 0),
        (t[4] = (f - x) * q),
        (t[5] = (1 - (M + m)) * q),
        (t[6] = (b + d) * q),
        (t[7] = 0),
        (t[8] = (l + p) * g),
        (t[9] = (b - d) * g),
        (t[10] = (1 - (M + v)) * g),
        (t[11] = 0),
        (t[12] = a[0]),
        (t[13] = a[1]),
        (t[14] = a[2]),
        (t[15] = 1),
        t
      );
    },
    fromRotationTranslationScaleOrigin: function (t, n, a, r, u) {
      var e = n[0],
        o = n[1],
        i = n[2],
        h = n[3],
        c = e + e,
        s = o + o,
        M = i + i,
        f = e * c,
        l = e * s,
        v = e * M,
        b = o * s,
        m = o * M,
        d = i * M,
        p = h * c,
        x = h * s,
        y = h * M,
        q = r[0],
        g = r[1],
        _ = r[2],
        A = u[0],
        w = u[1],
        R = u[2],
        z = (1 - (b + d)) * q,
        O = (l + y) * q,
        j = (v - x) * q,
        P = (l - y) * g,
        S = (1 - (f + d)) * g,
        E = (m + p) * g,
        T = (v + x) * _,
        D = (m - p) * _,
        F = (1 - (f + b)) * _;
      return (
        (t[0] = z),
        (t[1] = O),
        (t[2] = j),
        (t[3] = 0),
        (t[4] = P),
        (t[5] = S),
        (t[6] = E),
        (t[7] = 0),
        (t[8] = T),
        (t[9] = D),
        (t[10] = F),
        (t[11] = 0),
        (t[12] = a[0] + A - (z * A + P * w + T * R)),
        (t[13] = a[1] + w - (O * A + S * w + D * R)),
        (t[14] = a[2] + R - (j * A + E * w + F * R)),
        (t[15] = 1),
        t
      );
    },
    fromQuat: function (t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = a + a,
        i = r + r,
        h = u + u,
        c = a * o,
        s = r * o,
        M = r * i,
        f = u * o,
        l = u * i,
        v = u * h,
        b = e * o,
        m = e * i,
        d = e * h;
      return (
        (t[0] = 1 - M - v),
        (t[1] = s + d),
        (t[2] = f - m),
        (t[3] = 0),
        (t[4] = s - d),
        (t[5] = 1 - c - v),
        (t[6] = l + b),
        (t[7] = 0),
        (t[8] = f + m),
        (t[9] = l - b),
        (t[10] = 1 - c - M),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    },
    frustum: function (t, n, a, r, u, e, o) {
      var i = 1 / (a - n),
        h = 1 / (u - r),
        c = 1 / (e - o);
      return (
        (t[0] = 2 * e * i),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = 2 * e * h),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = (a + n) * i),
        (t[9] = (u + r) * h),
        (t[10] = (o + e) * c),
        (t[11] = -1),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = o * e * 2 * c),
        (t[15] = 0),
        t
      );
    },
    perspectiveNO: z,
    perspective: O,
    perspectiveZO: function (t, n, a, r, u) {
      var e,
        o = 1 / Math.tan(n / 2);
      return (
        (t[0] = o / a),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = o),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[11] = -1),
        (t[12] = 0),
        (t[13] = 0),
        (t[15] = 0),
        null != u && u !== 1 / 0
          ? ((e = 1 / (r - u)), (t[10] = u * e), (t[14] = u * r * e))
          : ((t[10] = -1), (t[14] = -r)),
        t
      );
    },
    perspectiveFromFieldOfView: function (t, n, a, r) {
      var u = Math.tan((n.upDegrees * Math.PI) / 180),
        e = Math.tan((n.downDegrees * Math.PI) / 180),
        o = Math.tan((n.leftDegrees * Math.PI) / 180),
        i = Math.tan((n.rightDegrees * Math.PI) / 180),
        h = 2 / (o + i),
        c = 2 / (u + e);
      return (
        (t[0] = h),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = c),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = -(o - i) * h * 0.5),
        (t[9] = (u - e) * c * 0.5),
        (t[10] = r / (a - r)),
        (t[11] = -1),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = (r * a) / (a - r)),
        (t[15] = 0),
        t
      );
    },
    orthoNO: j,
    ortho: P,
    orthoZO: function (t, n, a, r, u, e, o) {
      var i = 1 / (n - a),
        h = 1 / (r - u),
        c = 1 / (e - o);
      return (
        (t[0] = -2 * i),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = -2 * h),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = c),
        (t[11] = 0),
        (t[12] = (n + a) * i),
        (t[13] = (u + r) * h),
        (t[14] = e * c),
        (t[15] = 1),
        t
      );
    },
    lookAt: function (n, a, r, u) {
      var e,
        o,
        i,
        h,
        c,
        s,
        M,
        f,
        l,
        v,
        b = a[0],
        m = a[1],
        d = a[2],
        p = u[0],
        x = u[1],
        y = u[2],
        g = r[0],
        _ = r[1],
        A = r[2];
      return Math.abs(b - g) < t && Math.abs(m - _) < t && Math.abs(d - A) < t
        ? q(n)
        : ((M = b - g),
          (f = m - _),
          (l = d - A),
          (e = x * (l *= v = 1 / Math.hypot(M, f, l)) - y * (f *= v)),
          (o = y * (M *= v) - p * l),
          (i = p * f - x * M),
          (v = Math.hypot(e, o, i))
            ? ((e *= v = 1 / v), (o *= v), (i *= v))
            : ((e = 0), (o = 0), (i = 0)),
          (h = f * i - l * o),
          (c = l * e - M * i),
          (s = M * o - f * e),
          (v = Math.hypot(h, c, s))
            ? ((h *= v = 1 / v), (c *= v), (s *= v))
            : ((h = 0), (c = 0), (s = 0)),
          (n[0] = e),
          (n[1] = h),
          (n[2] = M),
          (n[3] = 0),
          (n[4] = o),
          (n[5] = c),
          (n[6] = f),
          (n[7] = 0),
          (n[8] = i),
          (n[9] = s),
          (n[10] = l),
          (n[11] = 0),
          (n[12] = -(e * b + o * m + i * d)),
          (n[13] = -(h * b + c * m + s * d)),
          (n[14] = -(M * b + f * m + l * d)),
          (n[15] = 1),
          n);
    },
    targetTo: function (t, n, a, r) {
      var u = n[0],
        e = n[1],
        o = n[2],
        i = r[0],
        h = r[1],
        c = r[2],
        s = u - a[0],
        M = e - a[1],
        f = o - a[2],
        l = s * s + M * M + f * f;
      l > 0 && ((s *= l = 1 / Math.sqrt(l)), (M *= l), (f *= l));
      var v = h * f - c * M,
        b = c * s - i * f,
        m = i * M - h * s;
      return (
        (l = v * v + b * b + m * m) > 0 &&
          ((v *= l = 1 / Math.sqrt(l)), (b *= l), (m *= l)),
        (t[0] = v),
        (t[1] = b),
        (t[2] = m),
        (t[3] = 0),
        (t[4] = M * m - f * b),
        (t[5] = f * v - s * m),
        (t[6] = s * b - M * v),
        (t[7] = 0),
        (t[8] = s),
        (t[9] = M),
        (t[10] = f),
        (t[11] = 0),
        (t[12] = u),
        (t[13] = e),
        (t[14] = o),
        (t[15] = 1),
        t
      );
    },
    str: function (t) {
      return (
        "mat4(" +
        t[0] +
        ", " +
        t[1] +
        ", " +
        t[2] +
        ", " +
        t[3] +
        ", " +
        t[4] +
        ", " +
        t[5] +
        ", " +
        t[6] +
        ", " +
        t[7] +
        ", " +
        t[8] +
        ", " +
        t[9] +
        ", " +
        t[10] +
        ", " +
        t[11] +
        ", " +
        t[12] +
        ", " +
        t[13] +
        ", " +
        t[14] +
        ", " +
        t[15] +
        ")"
      );
    },
    frob: function (t) {
      return Math.hypot(
        t[0],
        t[1],
        t[2],
        t[3],
        t[4],
        t[5],
        t[6],
        t[7],
        t[8],
        t[9],
        t[10],
        t[11],
        t[12],
        t[13],
        t[14],
        t[15]
      );
    },
    add: function (t, n, a) {
      return (
        (t[0] = n[0] + a[0]),
        (t[1] = n[1] + a[1]),
        (t[2] = n[2] + a[2]),
        (t[3] = n[3] + a[3]),
        (t[4] = n[4] + a[4]),
        (t[5] = n[5] + a[5]),
        (t[6] = n[6] + a[6]),
        (t[7] = n[7] + a[7]),
        (t[8] = n[8] + a[8]),
        (t[9] = n[9] + a[9]),
        (t[10] = n[10] + a[10]),
        (t[11] = n[11] + a[11]),
        (t[12] = n[12] + a[12]),
        (t[13] = n[13] + a[13]),
        (t[14] = n[14] + a[14]),
        (t[15] = n[15] + a[15]),
        t
      );
    },
    subtract: S,
    multiplyScalar: function (t, n, a) {
      return (
        (t[0] = n[0] * a),
        (t[1] = n[1] * a),
        (t[2] = n[2] * a),
        (t[3] = n[3] * a),
        (t[4] = n[4] * a),
        (t[5] = n[5] * a),
        (t[6] = n[6] * a),
        (t[7] = n[7] * a),
        (t[8] = n[8] * a),
        (t[9] = n[9] * a),
        (t[10] = n[10] * a),
        (t[11] = n[11] * a),
        (t[12] = n[12] * a),
        (t[13] = n[13] * a),
        (t[14] = n[14] * a),
        (t[15] = n[15] * a),
        t
      );
    },
    multiplyScalarAndAdd: function (t, n, a, r) {
      return (
        (t[0] = n[0] + a[0] * r),
        (t[1] = n[1] + a[1] * r),
        (t[2] = n[2] + a[2] * r),
        (t[3] = n[3] + a[3] * r),
        (t[4] = n[4] + a[4] * r),
        (t[5] = n[5] + a[5] * r),
        (t[6] = n[6] + a[6] * r),
        (t[7] = n[7] + a[7] * r),
        (t[8] = n[8] + a[8] * r),
        (t[9] = n[9] + a[9] * r),
        (t[10] = n[10] + a[10] * r),
        (t[11] = n[11] + a[11] * r),
        (t[12] = n[12] + a[12] * r),
        (t[13] = n[13] + a[13] * r),
        (t[14] = n[14] + a[14] * r),
        (t[15] = n[15] + a[15] * r),
        t
      );
    },
    exactEquals: function (t, n) {
      return (
        t[0] === n[0] &&
        t[1] === n[1] &&
        t[2] === n[2] &&
        t[3] === n[3] &&
        t[4] === n[4] &&
        t[5] === n[5] &&
        t[6] === n[6] &&
        t[7] === n[7] &&
        t[8] === n[8] &&
        t[9] === n[9] &&
        t[10] === n[10] &&
        t[11] === n[11] &&
        t[12] === n[12] &&
        t[13] === n[13] &&
        t[14] === n[14] &&
        t[15] === n[15]
      );
    },
    equals: function (n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        h = n[5],
        c = n[6],
        s = n[7],
        M = n[8],
        f = n[9],
        l = n[10],
        v = n[11],
        b = n[12],
        m = n[13],
        d = n[14],
        p = n[15],
        x = a[0],
        y = a[1],
        q = a[2],
        g = a[3],
        _ = a[4],
        A = a[5],
        w = a[6],
        R = a[7],
        z = a[8],
        O = a[9],
        j = a[10],
        P = a[11],
        S = a[12],
        E = a[13],
        T = a[14],
        D = a[15];
      return (
        Math.abs(r - x) <= t * Math.max(1, Math.abs(r), Math.abs(x)) &&
        Math.abs(u - y) <= t * Math.max(1, Math.abs(u), Math.abs(y)) &&
        Math.abs(e - q) <= t * Math.max(1, Math.abs(e), Math.abs(q)) &&
        Math.abs(o - g) <= t * Math.max(1, Math.abs(o), Math.abs(g)) &&
        Math.abs(i - _) <= t * Math.max(1, Math.abs(i), Math.abs(_)) &&
        Math.abs(h - A) <= t * Math.max(1, Math.abs(h), Math.abs(A)) &&
        Math.abs(c - w) <= t * Math.max(1, Math.abs(c), Math.abs(w)) &&
        Math.abs(s - R) <= t * Math.max(1, Math.abs(s), Math.abs(R)) &&
        Math.abs(M - z) <= t * Math.max(1, Math.abs(M), Math.abs(z)) &&
        Math.abs(f - O) <= t * Math.max(1, Math.abs(f), Math.abs(O)) &&
        Math.abs(l - j) <= t * Math.max(1, Math.abs(l), Math.abs(j)) &&
        Math.abs(v - P) <= t * Math.max(1, Math.abs(v), Math.abs(P)) &&
        Math.abs(b - S) <= t * Math.max(1, Math.abs(b), Math.abs(S)) &&
        Math.abs(m - E) <= t * Math.max(1, Math.abs(m), Math.abs(E)) &&
        Math.abs(d - T) <= t * Math.max(1, Math.abs(d), Math.abs(T)) &&
        Math.abs(p - D) <= t * Math.max(1, Math.abs(p), Math.abs(D))
      );
    },
    mul: E,
    sub: T,
  });
function F() {
  var t = new n(3);
  return n != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
}
function I(t) {
  var n = t[0],
    a = t[1],
    r = t[2];
  return Math.hypot(n, a, r);
}
function L(t, a, r) {
  var u = new n(3);
  return (u[0] = t), (u[1] = a), (u[2] = r), u;
}
function V(t, n, a) {
  return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), (t[2] = n[2] - a[2]), t;
}
function Q(t, n, a) {
  return (t[0] = n[0] * a[0]), (t[1] = n[1] * a[1]), (t[2] = n[2] * a[2]), t;
}
function Y(t, n, a) {
  return (t[0] = n[0] / a[0]), (t[1] = n[1] / a[1]), (t[2] = n[2] / a[2]), t;
}
function Z(t, n) {
  var a = n[0] - t[0],
    r = n[1] - t[1],
    u = n[2] - t[2];
  return Math.hypot(a, r, u);
}
function X(t, n) {
  var a = n[0] - t[0],
    r = n[1] - t[1],
    u = n[2] - t[2];
  return a * a + r * r + u * u;
}
function N(t) {
  var n = t[0],
    a = t[1],
    r = t[2];
  return n * n + a * a + r * r;
}
function B(t, n) {
  var a = n[0],
    r = n[1],
    u = n[2],
    e = a * a + r * r + u * u;
  return (
    e > 0 && (e = 1 / Math.sqrt(e)),
    (t[0] = n[0] * e),
    (t[1] = n[1] * e),
    (t[2] = n[2] * e),
    t
  );
}
function k(t, n) {
  return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
}
function U(t, n, a) {
  var r = n[0],
    u = n[1],
    e = n[2],
    o = a[0],
    i = a[1],
    h = a[2];
  return (
    (t[0] = u * h - e * i), (t[1] = e * o - r * h), (t[2] = r * i - u * o), t
  );
}
var W,
  C = V,
  G = Q,
  H = Y,
  J = Z,
  K = X,
  $ = I,
  tt = N,
  nt =
    ((W = F()),
    function (t, n, a, r, u, e) {
      var o, i;
      for (
        n || (n = 3),
          a || (a = 0),
          i = r ? Math.min(r * n + a, t.length) : t.length,
          o = a;
        o < i;
        o += n
      )
        (W[0] = t[o]),
          (W[1] = t[o + 1]),
          (W[2] = t[o + 2]),
          u(W, W, e),
          (t[o] = W[0]),
          (t[o + 1] = W[1]),
          (t[o + 2] = W[2]);
      return t;
    }),
  at = Object.freeze({
    __proto__: null,
    create: F,
    clone: function (t) {
      var a = new n(3);
      return (a[0] = t[0]), (a[1] = t[1]), (a[2] = t[2]), a;
    },
    length: I,
    fromValues: L,
    copy: function (t, n) {
      return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), t;
    },
    set: function (t, n, a, r) {
      return (t[0] = n), (t[1] = a), (t[2] = r), t;
    },
    add: function (t, n, a) {
      return (
        (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), (t[2] = n[2] + a[2]), t
      );
    },
    subtract: V,
    multiply: Q,
    divide: Y,
    ceil: function (t, n) {
      return (
        (t[0] = Math.ceil(n[0])),
        (t[1] = Math.ceil(n[1])),
        (t[2] = Math.ceil(n[2])),
        t
      );
    },
    floor: function (t, n) {
      return (
        (t[0] = Math.floor(n[0])),
        (t[1] = Math.floor(n[1])),
        (t[2] = Math.floor(n[2])),
        t
      );
    },
    min: function (t, n, a) {
      return (
        (t[0] = Math.min(n[0], a[0])),
        (t[1] = Math.min(n[1], a[1])),
        (t[2] = Math.min(n[2], a[2])),
        t
      );
    },
    max: function (t, n, a) {
      return (
        (t[0] = Math.max(n[0], a[0])),
        (t[1] = Math.max(n[1], a[1])),
        (t[2] = Math.max(n[2], a[2])),
        t
      );
    },
    round: function (t, n) {
      return (
        (t[0] = Math.round(n[0])),
        (t[1] = Math.round(n[1])),
        (t[2] = Math.round(n[2])),
        t
      );
    },
    scale: function (t, n, a) {
      return (t[0] = n[0] * a), (t[1] = n[1] * a), (t[2] = n[2] * a), t;
    },
    scaleAndAdd: function (t, n, a, r) {
      return (
        (t[0] = n[0] + a[0] * r),
        (t[1] = n[1] + a[1] * r),
        (t[2] = n[2] + a[2] * r),
        t
      );
    },
    distance: Z,
    squaredDistance: X,
    squaredLength: N,
    negate: function (t, n) {
      return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), t;
    },
    inverse: function (t, n) {
      return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), (t[2] = 1 / n[2]), t;
    },
    normalize: B,
    dot: k,
    cross: U,
    lerp: function (t, n, a, r) {
      var u = n[0],
        e = n[1],
        o = n[2];
      return (
        (t[0] = u + r * (a[0] - u)),
        (t[1] = e + r * (a[1] - e)),
        (t[2] = o + r * (a[2] - o)),
        t
      );
    },
    hermite: function (t, n, a, r, u, e) {
      var o = e * e,
        i = o * (2 * e - 3) + 1,
        h = o * (e - 2) + e,
        c = o * (e - 1),
        s = o * (3 - 2 * e);
      return (
        (t[0] = n[0] * i + a[0] * h + r[0] * c + u[0] * s),
        (t[1] = n[1] * i + a[1] * h + r[1] * c + u[1] * s),
        (t[2] = n[2] * i + a[2] * h + r[2] * c + u[2] * s),
        t
      );
    },
    bezier: function (t, n, a, r, u, e) {
      var o = 1 - e,
        i = o * o,
        h = e * e,
        c = i * o,
        s = 3 * e * i,
        M = 3 * h * o,
        f = h * e;
      return (
        (t[0] = n[0] * c + a[0] * s + r[0] * M + u[0] * f),
        (t[1] = n[1] * c + a[1] * s + r[1] * M + u[1] * f),
        (t[2] = n[2] * c + a[2] * s + r[2] * M + u[2] * f),
        t
      );
    },
    random: function (t, n) {
      n = n || 1;
      var r = 2 * a() * Math.PI,
        u = 2 * a() - 1,
        e = Math.sqrt(1 - u * u) * n;
      return (
        (t[0] = Math.cos(r) * e), (t[1] = Math.sin(r) * e), (t[2] = u * n), t
      );
    },
    transformMat4: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = a[3] * r + a[7] * u + a[11] * e + a[15];
      return (
        (o = o || 1),
        (t[0] = (a[0] * r + a[4] * u + a[8] * e + a[12]) / o),
        (t[1] = (a[1] * r + a[5] * u + a[9] * e + a[13]) / o),
        (t[2] = (a[2] * r + a[6] * u + a[10] * e + a[14]) / o),
        t
      );
    },
    transformMat3: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2];
      return (
        (t[0] = r * a[0] + u * a[3] + e * a[6]),
        (t[1] = r * a[1] + u * a[4] + e * a[7]),
        (t[2] = r * a[2] + u * a[5] + e * a[8]),
        t
      );
    },
    transformQuat: function (t, n, a) {
      var r = a[0],
        u = a[1],
        e = a[2],
        o = a[3],
        i = n[0],
        h = n[1],
        c = n[2],
        s = u * c - e * h,
        M = e * i - r * c,
        f = r * h - u * i,
        l = u * f - e * M,
        v = e * s - r * f,
        b = r * M - u * s,
        m = 2 * o;
      return (
        (s *= m),
        (M *= m),
        (f *= m),
        (l *= 2),
        (v *= 2),
        (b *= 2),
        (t[0] = i + s + l),
        (t[1] = h + M + v),
        (t[2] = c + f + b),
        t
      );
    },
    rotateX: function (t, n, a, r) {
      var u = [],
        e = [];
      return (
        (u[0] = n[0] - a[0]),
        (u[1] = n[1] - a[1]),
        (u[2] = n[2] - a[2]),
        (e[0] = u[0]),
        (e[1] = u[1] * Math.cos(r) - u[2] * Math.sin(r)),
        (e[2] = u[1] * Math.sin(r) + u[2] * Math.cos(r)),
        (t[0] = e[0] + a[0]),
        (t[1] = e[1] + a[1]),
        (t[2] = e[2] + a[2]),
        t
      );
    },
    rotateY: function (t, n, a, r) {
      var u = [],
        e = [];
      return (
        (u[0] = n[0] - a[0]),
        (u[1] = n[1] - a[1]),
        (u[2] = n[2] - a[2]),
        (e[0] = u[2] * Math.sin(r) + u[0] * Math.cos(r)),
        (e[1] = u[1]),
        (e[2] = u[2] * Math.cos(r) - u[0] * Math.sin(r)),
        (t[0] = e[0] + a[0]),
        (t[1] = e[1] + a[1]),
        (t[2] = e[2] + a[2]),
        t
      );
    },
    rotateZ: function (t, n, a, r) {
      var u = [],
        e = [];
      return (
        (u[0] = n[0] - a[0]),
        (u[1] = n[1] - a[1]),
        (u[2] = n[2] - a[2]),
        (e[0] = u[0] * Math.cos(r) - u[1] * Math.sin(r)),
        (e[1] = u[0] * Math.sin(r) + u[1] * Math.cos(r)),
        (e[2] = u[2]),
        (t[0] = e[0] + a[0]),
        (t[1] = e[1] + a[1]),
        (t[2] = e[2] + a[2]),
        t
      );
    },
    angle: function (t, n) {
      var a = t[0],
        r = t[1],
        u = t[2],
        e = n[0],
        o = n[1],
        i = n[2],
        h = Math.sqrt(a * a + r * r + u * u) * Math.sqrt(e * e + o * o + i * i),
        c = h && k(t, n) / h;
      return Math.acos(Math.min(Math.max(c, -1), 1));
    },
    zero: function (t) {
      return (t[0] = 0), (t[1] = 0), (t[2] = 0), t;
    },
    str: function (t) {
      return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
    },
    exactEquals: function (t, n) {
      return t[0] === n[0] && t[1] === n[1] && t[2] === n[2];
    },
    equals: function (n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = a[0],
        i = a[1],
        h = a[2];
      return (
        Math.abs(r - o) <= t * Math.max(1, Math.abs(r), Math.abs(o)) &&
        Math.abs(u - i) <= t * Math.max(1, Math.abs(u), Math.abs(i)) &&
        Math.abs(e - h) <= t * Math.max(1, Math.abs(e), Math.abs(h))
      );
    },
    sub: C,
    mul: G,
    div: H,
    dist: J,
    sqrDist: K,
    len: $,
    sqrLen: tt,
    forEach: nt,
  });
function rt() {
  var t = new n(4);
  return (
    n != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)), t
  );
}
function ut(t) {
  var a = new n(4);
  return (a[0] = t[0]), (a[1] = t[1]), (a[2] = t[2]), (a[3] = t[3]), a;
}
function et(t, a, r, u) {
  var e = new n(4);
  return (e[0] = t), (e[1] = a), (e[2] = r), (e[3] = u), e;
}
function ot(t, n) {
  return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t;
}
function it(t, n, a, r, u) {
  return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), t;
}
function ht(t, n, a) {
  return (
    (t[0] = n[0] + a[0]),
    (t[1] = n[1] + a[1]),
    (t[2] = n[2] + a[2]),
    (t[3] = n[3] + a[3]),
    t
  );
}
function ct(t, n, a) {
  return (
    (t[0] = n[0] - a[0]),
    (t[1] = n[1] - a[1]),
    (t[2] = n[2] - a[2]),
    (t[3] = n[3] - a[3]),
    t
  );
}
function st(t, n, a) {
  return (
    (t[0] = n[0] * a[0]),
    (t[1] = n[1] * a[1]),
    (t[2] = n[2] * a[2]),
    (t[3] = n[3] * a[3]),
    t
  );
}
function Mt(t, n, a) {
  return (
    (t[0] = n[0] / a[0]),
    (t[1] = n[1] / a[1]),
    (t[2] = n[2] / a[2]),
    (t[3] = n[3] / a[3]),
    t
  );
}
function ft(t, n, a) {
  return (
    (t[0] = n[0] * a),
    (t[1] = n[1] * a),
    (t[2] = n[2] * a),
    (t[3] = n[3] * a),
    t
  );
}
function lt(t, n) {
  var a = n[0] - t[0],
    r = n[1] - t[1],
    u = n[2] - t[2],
    e = n[3] - t[3];
  return Math.hypot(a, r, u, e);
}
function vt(t, n) {
  var a = n[0] - t[0],
    r = n[1] - t[1],
    u = n[2] - t[2],
    e = n[3] - t[3];
  return a * a + r * r + u * u + e * e;
}
function bt(t) {
  var n = t[0],
    a = t[1],
    r = t[2],
    u = t[3];
  return Math.hypot(n, a, r, u);
}
function mt(t) {
  var n = t[0],
    a = t[1],
    r = t[2],
    u = t[3];
  return n * n + a * a + r * r + u * u;
}
function dt(t, n) {
  var a = n[0],
    r = n[1],
    u = n[2],
    e = n[3],
    o = a * a + r * r + u * u + e * e;
  return (
    o > 0 && (o = 1 / Math.sqrt(o)),
    (t[0] = a * o),
    (t[1] = r * o),
    (t[2] = u * o),
    (t[3] = e * o),
    t
  );
}
function pt(t, n) {
  return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
}
function xt(t, n, a, r) {
  var u = n[0],
    e = n[1],
    o = n[2],
    i = n[3];
  return (
    (t[0] = u + r * (a[0] - u)),
    (t[1] = e + r * (a[1] - e)),
    (t[2] = o + r * (a[2] - o)),
    (t[3] = i + r * (a[3] - i)),
    t
  );
}
function yt(t, n) {
  return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
}
function qt(n, a) {
  var r = n[0],
    u = n[1],
    e = n[2],
    o = n[3],
    i = a[0],
    h = a[1],
    c = a[2],
    s = a[3];
  return (
    Math.abs(r - i) <= t * Math.max(1, Math.abs(r), Math.abs(i)) &&
    Math.abs(u - h) <= t * Math.max(1, Math.abs(u), Math.abs(h)) &&
    Math.abs(e - c) <= t * Math.max(1, Math.abs(e), Math.abs(c)) &&
    Math.abs(o - s) <= t * Math.max(1, Math.abs(o), Math.abs(s))
  );
}
var gt = ct,
  _t = st,
  At = Mt,
  wt = lt,
  Rt = vt,
  zt = bt,
  Ot = mt,
  jt = (function () {
    var t = rt();
    return function (n, a, r, u, e, o) {
      var i, h;
      for (
        a || (a = 4),
          r || (r = 0),
          h = u ? Math.min(u * a + r, n.length) : n.length,
          i = r;
        i < h;
        i += a
      )
        (t[0] = n[i]),
          (t[1] = n[i + 1]),
          (t[2] = n[i + 2]),
          (t[3] = n[i + 3]),
          e(t, t, o),
          (n[i] = t[0]),
          (n[i + 1] = t[1]),
          (n[i + 2] = t[2]),
          (n[i + 3] = t[3]);
      return n;
    };
  })(),
  Pt = Object.freeze({
    __proto__: null,
    create: rt,
    clone: ut,
    fromValues: et,
    copy: ot,
    set: it,
    add: ht,
    subtract: ct,
    multiply: st,
    divide: Mt,
    ceil: function (t, n) {
      return (
        (t[0] = Math.ceil(n[0])),
        (t[1] = Math.ceil(n[1])),
        (t[2] = Math.ceil(n[2])),
        (t[3] = Math.ceil(n[3])),
        t
      );
    },
    floor: function (t, n) {
      return (
        (t[0] = Math.floor(n[0])),
        (t[1] = Math.floor(n[1])),
        (t[2] = Math.floor(n[2])),
        (t[3] = Math.floor(n[3])),
        t
      );
    },
    min: function (t, n, a) {
      return (
        (t[0] = Math.min(n[0], a[0])),
        (t[1] = Math.min(n[1], a[1])),
        (t[2] = Math.min(n[2], a[2])),
        (t[3] = Math.min(n[3], a[3])),
        t
      );
    },
    max: function (t, n, a) {
      return (
        (t[0] = Math.max(n[0], a[0])),
        (t[1] = Math.max(n[1], a[1])),
        (t[2] = Math.max(n[2], a[2])),
        (t[3] = Math.max(n[3], a[3])),
        t
      );
    },
    round: function (t, n) {
      return (
        (t[0] = Math.round(n[0])),
        (t[1] = Math.round(n[1])),
        (t[2] = Math.round(n[2])),
        (t[3] = Math.round(n[3])),
        t
      );
    },
    scale: ft,
    scaleAndAdd: function (t, n, a, r) {
      return (
        (t[0] = n[0] + a[0] * r),
        (t[1] = n[1] + a[1] * r),
        (t[2] = n[2] + a[2] * r),
        (t[3] = n[3] + a[3] * r),
        t
      );
    },
    distance: lt,
    squaredDistance: vt,
    length: bt,
    squaredLength: mt,
    negate: function (t, n) {
      return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = -n[3]), t;
    },
    inverse: function (t, n) {
      return (
        (t[0] = 1 / n[0]),
        (t[1] = 1 / n[1]),
        (t[2] = 1 / n[2]),
        (t[3] = 1 / n[3]),
        t
      );
    },
    normalize: dt,
    dot: pt,
    cross: function (t, n, a, r) {
      var u = a[0] * r[1] - a[1] * r[0],
        e = a[0] * r[2] - a[2] * r[0],
        o = a[0] * r[3] - a[3] * r[0],
        i = a[1] * r[2] - a[2] * r[1],
        h = a[1] * r[3] - a[3] * r[1],
        c = a[2] * r[3] - a[3] * r[2],
        s = n[0],
        M = n[1],
        f = n[2],
        l = n[3];
      return (
        (t[0] = M * c - f * h + l * i),
        (t[1] = -s * c + f * o - l * e),
        (t[2] = s * h - M * o + l * u),
        (t[3] = -s * i + M * e - f * u),
        t
      );
    },
    lerp: xt,
    random: function (t, n) {
      var r, u, e, o, i, h;
      n = n || 1;
      do {
        i = (r = 2 * a() - 1) * r + (u = 2 * a() - 1) * u;
      } while (i >= 1);
      do {
        h = (e = 2 * a() - 1) * e + (o = 2 * a() - 1) * o;
      } while (h >= 1);
      var c = Math.sqrt((1 - i) / h);
      return (
        (t[0] = n * r),
        (t[1] = n * u),
        (t[2] = n * e * c),
        (t[3] = n * o * c),
        t
      );
    },
    transformMat4: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3];
      return (
        (t[0] = a[0] * r + a[4] * u + a[8] * e + a[12] * o),
        (t[1] = a[1] * r + a[5] * u + a[9] * e + a[13] * o),
        (t[2] = a[2] * r + a[6] * u + a[10] * e + a[14] * o),
        (t[3] = a[3] * r + a[7] * u + a[11] * e + a[15] * o),
        t
      );
    },
    transformQuat: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = a[0],
        i = a[1],
        h = a[2],
        c = a[3],
        s = c * r + i * e - h * u,
        M = c * u + h * r - o * e,
        f = c * e + o * u - i * r,
        l = -o * r - i * u - h * e;
      return (
        (t[0] = s * c + l * -o + M * -h - f * -i),
        (t[1] = M * c + l * -i + f * -o - s * -h),
        (t[2] = f * c + l * -h + s * -i - M * -o),
        (t[3] = n[3]),
        t
      );
    },
    zero: function (t) {
      return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), t;
    },
    str: function (t) {
      return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
    },
    exactEquals: yt,
    equals: qt,
    sub: gt,
    mul: _t,
    div: At,
    dist: wt,
    sqrDist: Rt,
    len: zt,
    sqrLen: Ot,
    forEach: jt,
  });
function St() {
  var t = new n(4);
  return (
    n != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), (t[3] = 1), t
  );
}
function Et(t, n, a) {
  a *= 0.5;
  var r = Math.sin(a);
  return (
    (t[0] = r * n[0]),
    (t[1] = r * n[1]),
    (t[2] = r * n[2]),
    (t[3] = Math.cos(a)),
    t
  );
}
function Tt(t, n, a) {
  var r = n[0],
    u = n[1],
    e = n[2],
    o = n[3],
    i = a[0],
    h = a[1],
    c = a[2],
    s = a[3];
  return (
    (t[0] = r * s + o * i + u * c - e * h),
    (t[1] = u * s + o * h + e * i - r * c),
    (t[2] = e * s + o * c + r * h - u * i),
    (t[3] = o * s - r * i - u * h - e * c),
    t
  );
}
function Dt(t, n, a) {
  a *= 0.5;
  var r = n[0],
    u = n[1],
    e = n[2],
    o = n[3],
    i = Math.sin(a),
    h = Math.cos(a);
  return (
    (t[0] = r * h + o * i),
    (t[1] = u * h + e * i),
    (t[2] = e * h - u * i),
    (t[3] = o * h - r * i),
    t
  );
}
function Ft(t, n, a) {
  a *= 0.5;
  var r = n[0],
    u = n[1],
    e = n[2],
    o = n[3],
    i = Math.sin(a),
    h = Math.cos(a);
  return (
    (t[0] = r * h - e * i),
    (t[1] = u * h + o * i),
    (t[2] = e * h + r * i),
    (t[3] = o * h - u * i),
    t
  );
}
function It(t, n, a) {
  a *= 0.5;
  var r = n[0],
    u = n[1],
    e = n[2],
    o = n[3],
    i = Math.sin(a),
    h = Math.cos(a);
  return (
    (t[0] = r * h + u * i),
    (t[1] = u * h - r * i),
    (t[2] = e * h + o * i),
    (t[3] = o * h - e * i),
    t
  );
}
function Lt(t, n) {
  var a = n[0],
    r = n[1],
    u = n[2],
    e = n[3],
    o = Math.sqrt(a * a + r * r + u * u),
    i = Math.exp(e),
    h = o > 0 ? (i * Math.sin(o)) / o : 0;
  return (
    (t[0] = a * h), (t[1] = r * h), (t[2] = u * h), (t[3] = i * Math.cos(o)), t
  );
}
function Vt(t, n) {
  var a = n[0],
    r = n[1],
    u = n[2],
    e = n[3],
    o = Math.sqrt(a * a + r * r + u * u),
    i = o > 0 ? Math.atan2(o, e) / o : 0;
  return (
    (t[0] = a * i),
    (t[1] = r * i),
    (t[2] = u * i),
    (t[3] = 0.5 * Math.log(a * a + r * r + u * u + e * e)),
    t
  );
}
function Qt(n, a, r, u) {
  var e,
    o,
    i,
    h,
    c,
    s = a[0],
    M = a[1],
    f = a[2],
    l = a[3],
    v = r[0],
    b = r[1],
    m = r[2],
    d = r[3];
  return (
    (o = s * v + M * b + f * m + l * d) < 0 &&
      ((o = -o), (v = -v), (b = -b), (m = -m), (d = -d)),
    1 - o > t
      ? ((e = Math.acos(o)),
        (i = Math.sin(e)),
        (h = Math.sin((1 - u) * e) / i),
        (c = Math.sin(u * e) / i))
      : ((h = 1 - u), (c = u)),
    (n[0] = h * s + c * v),
    (n[1] = h * M + c * b),
    (n[2] = h * f + c * m),
    (n[3] = h * l + c * d),
    n
  );
}
function Yt(t, n) {
  var a,
    r = n[0] + n[4] + n[8];
  if (r > 0)
    (a = Math.sqrt(r + 1)),
      (t[3] = 0.5 * a),
      (a = 0.5 / a),
      (t[0] = (n[5] - n[7]) * a),
      (t[1] = (n[6] - n[2]) * a),
      (t[2] = (n[1] - n[3]) * a);
  else {
    var u = 0;
    n[4] > n[0] && (u = 1), n[8] > n[3 * u + u] && (u = 2);
    var e = (u + 1) % 3,
      o = (u + 2) % 3;
    (a = Math.sqrt(n[3 * u + u] - n[3 * e + e] - n[3 * o + o] + 1)),
      (t[u] = 0.5 * a),
      (a = 0.5 / a),
      (t[3] = (n[3 * e + o] - n[3 * o + e]) * a),
      (t[e] = (n[3 * e + u] + n[3 * u + e]) * a),
      (t[o] = (n[3 * o + u] + n[3 * u + o]) * a);
  }
  return t;
}
var Zt,
  Xt,
  Nt,
  Bt,
  kt,
  Ut,
  Wt = ut,
  Ct = et,
  Gt = ot,
  Ht = it,
  Jt = ht,
  Kt = Tt,
  $t = ft,
  tn = pt,
  nn = xt,
  an = bt,
  rn = an,
  un = mt,
  en = un,
  on = dt,
  hn = yt,
  cn = qt,
  sn =
    ((Zt = F()),
    (Xt = L(1, 0, 0)),
    (Nt = L(0, 1, 0)),
    function (t, n, a) {
      var r = k(n, a);
      return r < -0.999999
        ? (U(Zt, Xt, n),
          $(Zt) < 1e-6 && U(Zt, Nt, n),
          B(Zt, Zt),
          Et(t, Zt, Math.PI),
          t)
        : r > 0.999999
        ? ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t)
        : (U(Zt, n, a),
          (t[0] = Zt[0]),
          (t[1] = Zt[1]),
          (t[2] = Zt[2]),
          (t[3] = 1 + r),
          on(t, t));
    }),
  Mn =
    ((Bt = St()),
    (kt = St()),
    function (t, n, a, r, u, e) {
      return (
        Qt(Bt, n, u, e), Qt(kt, a, r, e), Qt(t, Bt, kt, 2 * e * (1 - e)), t
      );
    }),
  fn =
    ((Ut = b()),
    function (t, n, a, r) {
      return (
        (Ut[0] = a[0]),
        (Ut[3] = a[1]),
        (Ut[6] = a[2]),
        (Ut[1] = r[0]),
        (Ut[4] = r[1]),
        (Ut[7] = r[2]),
        (Ut[2] = -n[0]),
        (Ut[5] = -n[1]),
        (Ut[8] = -n[2]),
        on(t, Yt(t, Ut))
      );
    }),
  ln = Object.freeze({
    __proto__: null,
    create: St,
    identity: function (t) {
      return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
    },
    setAxisAngle: Et,
    getAxisAngle: function (n, a) {
      var r = 2 * Math.acos(a[3]),
        u = Math.sin(r / 2);
      return (
        u > t
          ? ((n[0] = a[0] / u), (n[1] = a[1] / u), (n[2] = a[2] / u))
          : ((n[0] = 1), (n[1] = 0), (n[2] = 0)),
        r
      );
    },
    getAngle: function (t, n) {
      var a = tn(t, n);
      return Math.acos(2 * a * a - 1);
    },
    multiply: Tt,
    rotateX: Dt,
    rotateY: Ft,
    rotateZ: It,
    calculateW: function (t, n) {
      var a = n[0],
        r = n[1],
        u = n[2];
      return (
        (t[0] = a),
        (t[1] = r),
        (t[2] = u),
        (t[3] = Math.sqrt(Math.abs(1 - a * a - r * r - u * u))),
        t
      );
    },
    exp: Lt,
    ln: Vt,
    pow: function (t, n, a) {
      return Vt(t, n), $t(t, t, a), Lt(t, t), t;
    },
    slerp: Qt,
    random: function (t) {
      var n = a(),
        r = a(),
        u = a(),
        e = Math.sqrt(1 - n),
        o = Math.sqrt(n);
      return (
        (t[0] = e * Math.sin(2 * Math.PI * r)),
        (t[1] = e * Math.cos(2 * Math.PI * r)),
        (t[2] = o * Math.sin(2 * Math.PI * u)),
        (t[3] = o * Math.cos(2 * Math.PI * u)),
        t
      );
    },
    invert: function (t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = a * a + r * r + u * u + e * e,
        i = o ? 1 / o : 0;
      return (
        (t[0] = -a * i), (t[1] = -r * i), (t[2] = -u * i), (t[3] = e * i), t
      );
    },
    conjugate: function (t, n) {
      return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = n[3]), t;
    },
    fromMat3: Yt,
    fromEuler: function (t, n, a, r) {
      var u = (0.5 * Math.PI) / 180;
      (n *= u), (a *= u), (r *= u);
      var e = Math.sin(n),
        o = Math.cos(n),
        i = Math.sin(a),
        h = Math.cos(a),
        c = Math.sin(r),
        s = Math.cos(r);
      return (
        (t[0] = e * h * s - o * i * c),
        (t[1] = o * i * s + e * h * c),
        (t[2] = o * h * c - e * i * s),
        (t[3] = o * h * s + e * i * c),
        t
      );
    },
    str: function (t) {
      return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
    },
    clone: Wt,
    fromValues: Ct,
    copy: Gt,
    set: Ht,
    add: Jt,
    mul: Kt,
    scale: $t,
    dot: tn,
    lerp: nn,
    length: an,
    len: rn,
    squaredLength: un,
    sqrLen: en,
    normalize: on,
    exactEquals: hn,
    equals: cn,
    rotationTo: sn,
    sqlerp: Mn,
    setAxes: fn,
  });
function vn(t, n, a) {
  var r = 0.5 * a[0],
    u = 0.5 * a[1],
    e = 0.5 * a[2],
    o = n[0],
    i = n[1],
    h = n[2],
    c = n[3];
  return (
    (t[0] = o),
    (t[1] = i),
    (t[2] = h),
    (t[3] = c),
    (t[4] = r * c + u * h - e * i),
    (t[5] = u * c + e * o - r * h),
    (t[6] = e * c + r * i - u * o),
    (t[7] = -r * o - u * i - e * h),
    t
  );
}
function bn(t, n) {
  return (
    (t[0] = n[0]),
    (t[1] = n[1]),
    (t[2] = n[2]),
    (t[3] = n[3]),
    (t[4] = n[4]),
    (t[5] = n[5]),
    (t[6] = n[6]),
    (t[7] = n[7]),
    t
  );
}
var mn = Gt;
var dn = Gt;
function pn(t, n, a) {
  var r = n[0],
    u = n[1],
    e = n[2],
    o = n[3],
    i = a[4],
    h = a[5],
    c = a[6],
    s = a[7],
    M = n[4],
    f = n[5],
    l = n[6],
    v = n[7],
    b = a[0],
    m = a[1],
    d = a[2],
    p = a[3];
  return (
    (t[0] = r * p + o * b + u * d - e * m),
    (t[1] = u * p + o * m + e * b - r * d),
    (t[2] = e * p + o * d + r * m - u * b),
    (t[3] = o * p - r * b - u * m - e * d),
    (t[4] = r * s + o * i + u * c - e * h + M * p + v * b + f * d - l * m),
    (t[5] = u * s + o * h + e * i - r * c + f * p + v * m + l * b - M * d),
    (t[6] = e * s + o * c + r * h - u * i + l * p + v * d + M * m - f * b),
    (t[7] = o * s - r * i - u * h - e * c + v * p - M * b - f * m - l * d),
    t
  );
}
var xn = pn;
var yn = tn;
var qn = an,
  gn = qn,
  _n = un,
  An = _n;
var wn = Object.freeze({
  __proto__: null,
  create: function () {
    var t = new n(8);
    return (
      n != Float32Array &&
        ((t[0] = 0),
        (t[1] = 0),
        (t[2] = 0),
        (t[4] = 0),
        (t[5] = 0),
        (t[6] = 0),
        (t[7] = 0)),
      (t[3] = 1),
      t
    );
  },
  clone: function (t) {
    var a = new n(8);
    return (
      (a[0] = t[0]),
      (a[1] = t[1]),
      (a[2] = t[2]),
      (a[3] = t[3]),
      (a[4] = t[4]),
      (a[5] = t[5]),
      (a[6] = t[6]),
      (a[7] = t[7]),
      a
    );
  },
  fromValues: function (t, a, r, u, e, o, i, h) {
    var c = new n(8);
    return (
      (c[0] = t),
      (c[1] = a),
      (c[2] = r),
      (c[3] = u),
      (c[4] = e),
      (c[5] = o),
      (c[6] = i),
      (c[7] = h),
      c
    );
  },
  fromRotationTranslationValues: function (t, a, r, u, e, o, i) {
    var h = new n(8);
    (h[0] = t), (h[1] = a), (h[2] = r), (h[3] = u);
    var c = 0.5 * e,
      s = 0.5 * o,
      M = 0.5 * i;
    return (
      (h[4] = c * u + s * r - M * a),
      (h[5] = s * u + M * t - c * r),
      (h[6] = M * u + c * a - s * t),
      (h[7] = -c * t - s * a - M * r),
      h
    );
  },
  fromRotationTranslation: vn,
  fromTranslation: function (t, n) {
    return (
      (t[0] = 0),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 1),
      (t[4] = 0.5 * n[0]),
      (t[5] = 0.5 * n[1]),
      (t[6] = 0.5 * n[2]),
      (t[7] = 0),
      t
    );
  },
  fromRotation: function (t, n) {
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = 0),
      (t[5] = 0),
      (t[6] = 0),
      (t[7] = 0),
      t
    );
  },
  fromMat4: function (t, a) {
    var r = St();
    R(r, a);
    var u = new n(3);
    return A(u, a), vn(t, r, u), t;
  },
  copy: bn,
  identity: function (t) {
    return (
      (t[0] = 0),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 1),
      (t[4] = 0),
      (t[5] = 0),
      (t[6] = 0),
      (t[7] = 0),
      t
    );
  },
  set: function (t, n, a, r, u, e, o, i, h) {
    return (
      (t[0] = n),
      (t[1] = a),
      (t[2] = r),
      (t[3] = u),
      (t[4] = e),
      (t[5] = o),
      (t[6] = i),
      (t[7] = h),
      t
    );
  },
  getReal: mn,
  getDual: function (t, n) {
    return (t[0] = n[4]), (t[1] = n[5]), (t[2] = n[6]), (t[3] = n[7]), t;
  },
  setReal: dn,
  setDual: function (t, n) {
    return (t[4] = n[0]), (t[5] = n[1]), (t[6] = n[2]), (t[7] = n[3]), t;
  },
  getTranslation: function (t, n) {
    var a = n[4],
      r = n[5],
      u = n[6],
      e = n[7],
      o = -n[0],
      i = -n[1],
      h = -n[2],
      c = n[3];
    return (
      (t[0] = 2 * (a * c + e * o + r * h - u * i)),
      (t[1] = 2 * (r * c + e * i + u * o - a * h)),
      (t[2] = 2 * (u * c + e * h + a * i - r * o)),
      t
    );
  },
  translate: function (t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = 0.5 * a[0],
      h = 0.5 * a[1],
      c = 0.5 * a[2],
      s = n[4],
      M = n[5],
      f = n[6],
      l = n[7];
    return (
      (t[0] = r),
      (t[1] = u),
      (t[2] = e),
      (t[3] = o),
      (t[4] = o * i + u * c - e * h + s),
      (t[5] = o * h + e * i - r * c + M),
      (t[6] = o * c + r * h - u * i + f),
      (t[7] = -r * i - u * h - e * c + l),
      t
    );
  },
  rotateX: function (t, n, a) {
    var r = -n[0],
      u = -n[1],
      e = -n[2],
      o = n[3],
      i = n[4],
      h = n[5],
      c = n[6],
      s = n[7],
      M = i * o + s * r + h * e - c * u,
      f = h * o + s * u + c * r - i * e,
      l = c * o + s * e + i * u - h * r,
      v = s * o - i * r - h * u - c * e;
    return (
      Dt(t, n, a),
      (r = t[0]),
      (u = t[1]),
      (e = t[2]),
      (o = t[3]),
      (t[4] = M * o + v * r + f * e - l * u),
      (t[5] = f * o + v * u + l * r - M * e),
      (t[6] = l * o + v * e + M * u - f * r),
      (t[7] = v * o - M * r - f * u - l * e),
      t
    );
  },
  rotateY: function (t, n, a) {
    var r = -n[0],
      u = -n[1],
      e = -n[2],
      o = n[3],
      i = n[4],
      h = n[5],
      c = n[6],
      s = n[7],
      M = i * o + s * r + h * e - c * u,
      f = h * o + s * u + c * r - i * e,
      l = c * o + s * e + i * u - h * r,
      v = s * o - i * r - h * u - c * e;
    return (
      Ft(t, n, a),
      (r = t[0]),
      (u = t[1]),
      (e = t[2]),
      (o = t[3]),
      (t[4] = M * o + v * r + f * e - l * u),
      (t[5] = f * o + v * u + l * r - M * e),
      (t[6] = l * o + v * e + M * u - f * r),
      (t[7] = v * o - M * r - f * u - l * e),
      t
    );
  },
  rotateZ: function (t, n, a) {
    var r = -n[0],
      u = -n[1],
      e = -n[2],
      o = n[3],
      i = n[4],
      h = n[5],
      c = n[6],
      s = n[7],
      M = i * o + s * r + h * e - c * u,
      f = h * o + s * u + c * r - i * e,
      l = c * o + s * e + i * u - h * r,
      v = s * o - i * r - h * u - c * e;
    return (
      It(t, n, a),
      (r = t[0]),
      (u = t[1]),
      (e = t[2]),
      (o = t[3]),
      (t[4] = M * o + v * r + f * e - l * u),
      (t[5] = f * o + v * u + l * r - M * e),
      (t[6] = l * o + v * e + M * u - f * r),
      (t[7] = v * o - M * r - f * u - l * e),
      t
    );
  },
  rotateByQuatAppend: function (t, n, a) {
    var r = a[0],
      u = a[1],
      e = a[2],
      o = a[3],
      i = n[0],
      h = n[1],
      c = n[2],
      s = n[3];
    return (
      (t[0] = i * o + s * r + h * e - c * u),
      (t[1] = h * o + s * u + c * r - i * e),
      (t[2] = c * o + s * e + i * u - h * r),
      (t[3] = s * o - i * r - h * u - c * e),
      (i = n[4]),
      (h = n[5]),
      (c = n[6]),
      (s = n[7]),
      (t[4] = i * o + s * r + h * e - c * u),
      (t[5] = h * o + s * u + c * r - i * e),
      (t[6] = c * o + s * e + i * u - h * r),
      (t[7] = s * o - i * r - h * u - c * e),
      t
    );
  },
  rotateByQuatPrepend: function (t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = a[0],
      h = a[1],
      c = a[2],
      s = a[3];
    return (
      (t[0] = r * s + o * i + u * c - e * h),
      (t[1] = u * s + o * h + e * i - r * c),
      (t[2] = e * s + o * c + r * h - u * i),
      (t[3] = o * s - r * i - u * h - e * c),
      (i = a[4]),
      (h = a[5]),
      (c = a[6]),
      (s = a[7]),
      (t[4] = r * s + o * i + u * c - e * h),
      (t[5] = u * s + o * h + e * i - r * c),
      (t[6] = e * s + o * c + r * h - u * i),
      (t[7] = o * s - r * i - u * h - e * c),
      t
    );
  },
  rotateAroundAxis: function (n, a, r, u) {
    if (Math.abs(u) < t) return bn(n, a);
    var e = Math.hypot(r[0], r[1], r[2]);
    u *= 0.5;
    var o = Math.sin(u),
      i = (o * r[0]) / e,
      h = (o * r[1]) / e,
      c = (o * r[2]) / e,
      s = Math.cos(u),
      M = a[0],
      f = a[1],
      l = a[2],
      v = a[3];
    (n[0] = M * s + v * i + f * c - l * h),
      (n[1] = f * s + v * h + l * i - M * c),
      (n[2] = l * s + v * c + M * h - f * i),
      (n[3] = v * s - M * i - f * h - l * c);
    var b = a[4],
      m = a[5],
      d = a[6],
      p = a[7];
    return (
      (n[4] = b * s + p * i + m * c - d * h),
      (n[5] = m * s + p * h + d * i - b * c),
      (n[6] = d * s + p * c + b * h - m * i),
      (n[7] = p * s - b * i - m * h - d * c),
      n
    );
  },
  add: function (t, n, a) {
    return (
      (t[0] = n[0] + a[0]),
      (t[1] = n[1] + a[1]),
      (t[2] = n[2] + a[2]),
      (t[3] = n[3] + a[3]),
      (t[4] = n[4] + a[4]),
      (t[5] = n[5] + a[5]),
      (t[6] = n[6] + a[6]),
      (t[7] = n[7] + a[7]),
      t
    );
  },
  multiply: pn,
  mul: xn,
  scale: function (t, n, a) {
    return (
      (t[0] = n[0] * a),
      (t[1] = n[1] * a),
      (t[2] = n[2] * a),
      (t[3] = n[3] * a),
      (t[4] = n[4] * a),
      (t[5] = n[5] * a),
      (t[6] = n[6] * a),
      (t[7] = n[7] * a),
      t
    );
  },
  dot: yn,
  lerp: function (t, n, a, r) {
    var u = 1 - r;
    return (
      yn(n, a) < 0 && (r = -r),
      (t[0] = n[0] * u + a[0] * r),
      (t[1] = n[1] * u + a[1] * r),
      (t[2] = n[2] * u + a[2] * r),
      (t[3] = n[3] * u + a[3] * r),
      (t[4] = n[4] * u + a[4] * r),
      (t[5] = n[5] * u + a[5] * r),
      (t[6] = n[6] * u + a[6] * r),
      (t[7] = n[7] * u + a[7] * r),
      t
    );
  },
  invert: function (t, n) {
    var a = _n(n);
    return (
      (t[0] = -n[0] / a),
      (t[1] = -n[1] / a),
      (t[2] = -n[2] / a),
      (t[3] = n[3] / a),
      (t[4] = -n[4] / a),
      (t[5] = -n[5] / a),
      (t[6] = -n[6] / a),
      (t[7] = n[7] / a),
      t
    );
  },
  conjugate: function (t, n) {
    return (
      (t[0] = -n[0]),
      (t[1] = -n[1]),
      (t[2] = -n[2]),
      (t[3] = n[3]),
      (t[4] = -n[4]),
      (t[5] = -n[5]),
      (t[6] = -n[6]),
      (t[7] = n[7]),
      t
    );
  },
  length: qn,
  len: gn,
  squaredLength: _n,
  sqrLen: An,
  normalize: function (t, n) {
    var a = _n(n);
    if (a > 0) {
      a = Math.sqrt(a);
      var r = n[0] / a,
        u = n[1] / a,
        e = n[2] / a,
        o = n[3] / a,
        i = n[4],
        h = n[5],
        c = n[6],
        s = n[7],
        M = r * i + u * h + e * c + o * s;
      (t[0] = r),
        (t[1] = u),
        (t[2] = e),
        (t[3] = o),
        (t[4] = (i - r * M) / a),
        (t[5] = (h - u * M) / a),
        (t[6] = (c - e * M) / a),
        (t[7] = (s - o * M) / a);
    }
    return t;
  },
  str: function (t) {
    return (
      "quat2(" +
      t[0] +
      ", " +
      t[1] +
      ", " +
      t[2] +
      ", " +
      t[3] +
      ", " +
      t[4] +
      ", " +
      t[5] +
      ", " +
      t[6] +
      ", " +
      t[7] +
      ")"
    );
  },
  exactEquals: function (t, n) {
    return (
      t[0] === n[0] &&
      t[1] === n[1] &&
      t[2] === n[2] &&
      t[3] === n[3] &&
      t[4] === n[4] &&
      t[5] === n[5] &&
      t[6] === n[6] &&
      t[7] === n[7]
    );
  },
  equals: function (n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = n[4],
      h = n[5],
      c = n[6],
      s = n[7],
      M = a[0],
      f = a[1],
      l = a[2],
      v = a[3],
      b = a[4],
      m = a[5],
      d = a[6],
      p = a[7];
    return (
      Math.abs(r - M) <= t * Math.max(1, Math.abs(r), Math.abs(M)) &&
      Math.abs(u - f) <= t * Math.max(1, Math.abs(u), Math.abs(f)) &&
      Math.abs(e - l) <= t * Math.max(1, Math.abs(e), Math.abs(l)) &&
      Math.abs(o - v) <= t * Math.max(1, Math.abs(o), Math.abs(v)) &&
      Math.abs(i - b) <= t * Math.max(1, Math.abs(i), Math.abs(b)) &&
      Math.abs(h - m) <= t * Math.max(1, Math.abs(h), Math.abs(m)) &&
      Math.abs(c - d) <= t * Math.max(1, Math.abs(c), Math.abs(d)) &&
      Math.abs(s - p) <= t * Math.max(1, Math.abs(s), Math.abs(p))
    );
  },
});
function Rn() {
  var t = new n(2);
  return n != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
}
function zn(t, n, a) {
  return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), t;
}
function On(t, n, a) {
  return (t[0] = n[0] * a[0]), (t[1] = n[1] * a[1]), t;
}
function jn(t, n, a) {
  return (t[0] = n[0] / a[0]), (t[1] = n[1] / a[1]), t;
}
function Pn(t, n) {
  var a = n[0] - t[0],
    r = n[1] - t[1];
  return Math.hypot(a, r);
}
function Sn(t, n) {
  var a = n[0] - t[0],
    r = n[1] - t[1];
  return a * a + r * r;
}
function En(t) {
  var n = t[0],
    a = t[1];
  return Math.hypot(n, a);
}
function Tn(t) {
  var n = t[0],
    a = t[1];
  return n * n + a * a;
}
var Dn = En,
  Fn = zn,
  In = On,
  Ln = jn,
  Vn = Pn,
  Qn = Sn,
  Yn = Tn,
  Zn = (function () {
    var t = Rn();
    return function (n, a, r, u, e, o) {
      var i, h;
      for (
        a || (a = 2),
          r || (r = 0),
          h = u ? Math.min(u * a + r, n.length) : n.length,
          i = r;
        i < h;
        i += a
      )
        (t[0] = n[i]),
          (t[1] = n[i + 1]),
          e(t, t, o),
          (n[i] = t[0]),
          (n[i + 1] = t[1]);
      return n;
    };
  })(),
  Xn = Object.freeze({
    __proto__: null,
    create: Rn,
    clone: function (t) {
      var a = new n(2);
      return (a[0] = t[0]), (a[1] = t[1]), a;
    },
    fromValues: function (t, a) {
      var r = new n(2);
      return (r[0] = t), (r[1] = a), r;
    },
    copy: function (t, n) {
      return (t[0] = n[0]), (t[1] = n[1]), t;
    },
    set: function (t, n, a) {
      return (t[0] = n), (t[1] = a), t;
    },
    add: function (t, n, a) {
      return (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), t;
    },
    subtract: zn,
    multiply: On,
    divide: jn,
    ceil: function (t, n) {
      return (t[0] = Math.ceil(n[0])), (t[1] = Math.ceil(n[1])), t;
    },
    floor: function (t, n) {
      return (t[0] = Math.floor(n[0])), (t[1] = Math.floor(n[1])), t;
    },
    min: function (t, n, a) {
      return (t[0] = Math.min(n[0], a[0])), (t[1] = Math.min(n[1], a[1])), t;
    },
    max: function (t, n, a) {
      return (t[0] = Math.max(n[0], a[0])), (t[1] = Math.max(n[1], a[1])), t;
    },
    round: function (t, n) {
      return (t[0] = Math.round(n[0])), (t[1] = Math.round(n[1])), t;
    },
    scale: function (t, n, a) {
      return (t[0] = n[0] * a), (t[1] = n[1] * a), t;
    },
    scaleAndAdd: function (t, n, a, r) {
      return (t[0] = n[0] + a[0] * r), (t[1] = n[1] + a[1] * r), t;
    },
    distance: Pn,
    squaredDistance: Sn,
    length: En,
    squaredLength: Tn,
    negate: function (t, n) {
      return (t[0] = -n[0]), (t[1] = -n[1]), t;
    },
    inverse: function (t, n) {
      return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), t;
    },
    normalize: function (t, n) {
      var a = n[0],
        r = n[1],
        u = a * a + r * r;
      return (
        u > 0 && (u = 1 / Math.sqrt(u)), (t[0] = n[0] * u), (t[1] = n[1] * u), t
      );
    },
    dot: function (t, n) {
      return t[0] * n[0] + t[1] * n[1];
    },
    cross: function (t, n, a) {
      var r = n[0] * a[1] - n[1] * a[0];
      return (t[0] = t[1] = 0), (t[2] = r), t;
    },
    lerp: function (t, n, a, r) {
      var u = n[0],
        e = n[1];
      return (t[0] = u + r * (a[0] - u)), (t[1] = e + r * (a[1] - e)), t;
    },
    random: function (t, n) {
      n = n || 1;
      var r = 2 * a() * Math.PI;
      return (t[0] = Math.cos(r) * n), (t[1] = Math.sin(r) * n), t;
    },
    transformMat2: function (t, n, a) {
      var r = n[0],
        u = n[1];
      return (t[0] = a[0] * r + a[2] * u), (t[1] = a[1] * r + a[3] * u), t;
    },
    transformMat2d: function (t, n, a) {
      var r = n[0],
        u = n[1];
      return (
        (t[0] = a[0] * r + a[2] * u + a[4]),
        (t[1] = a[1] * r + a[3] * u + a[5]),
        t
      );
    },
    transformMat3: function (t, n, a) {
      var r = n[0],
        u = n[1];
      return (
        (t[0] = a[0] * r + a[3] * u + a[6]),
        (t[1] = a[1] * r + a[4] * u + a[7]),
        t
      );
    },
    transformMat4: function (t, n, a) {
      var r = n[0],
        u = n[1];
      return (
        (t[0] = a[0] * r + a[4] * u + a[12]),
        (t[1] = a[1] * r + a[5] * u + a[13]),
        t
      );
    },
    rotate: function (t, n, a, r) {
      var u = n[0] - a[0],
        e = n[1] - a[1],
        o = Math.sin(r),
        i = Math.cos(r);
      return (t[0] = u * i - e * o + a[0]), (t[1] = u * o + e * i + a[1]), t;
    },
    angle: function (t, n) {
      var a = t[0],
        r = t[1],
        u = n[0],
        e = n[1],
        o = Math.sqrt(a * a + r * r) * Math.sqrt(u * u + e * e),
        i = o && (a * u + r * e) / o;
      return Math.acos(Math.min(Math.max(i, -1), 1));
    },
    zero: function (t) {
      return (t[0] = 0), (t[1] = 0), t;
    },
    str: function (t) {
      return "vec2(" + t[0] + ", " + t[1] + ")";
    },
    exactEquals: function (t, n) {
      return t[0] === n[0] && t[1] === n[1];
    },
    equals: function (n, a) {
      var r = n[0],
        u = n[1],
        e = a[0],
        o = a[1];
      return (
        Math.abs(r - e) <= t * Math.max(1, Math.abs(r), Math.abs(e)) &&
        Math.abs(u - o) <= t * Math.max(1, Math.abs(u), Math.abs(o))
      );
    },
    len: Dn,
    sub: Fn,
    mul: In,
    div: Ln,
    dist: Vn,
    sqrDist: Qn,
    sqrLen: Yn,
    forEach: Zn,
  });
export {
  u as glMatrix,
  c as mat2,
  v as mat2d,
  y as mat3,
  D as mat4,
  ln as quat,
  wn as quat2,
  Xn as vec2,
  at as vec3,
  Pt as vec4,
};
export default null;
//# sourceMappingURL=/sm/d10acca26582a571c009abf5100c934aece5d46fb7686da37a6daefea3135c0e.map
