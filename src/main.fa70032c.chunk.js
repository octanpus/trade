(this["webpackJsonpcommodity-hauler"] = this["webpackJsonpcommodity-hauler"] || []).push([
    [0], {
        29: function(e, t, n) {},
        30: function(e, t, n) {},
        49: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(1),
                i = n.n(r),
                c = n(13),
                a = n.n(c),
                s = (n(29), n.p, n(30), n(8)),
                o = n.n(s),
                l = n(12),
                u = n(7),
                d = n(10),
                j = n(20),
                h = (n(34), n(50)),
                p = n(51),
                m = n(52),
                b = n(53),
                f = n(54),
                x = n(55),
                O = n(56),
                y = n(57),
                g = n(58),
                v = n(59),
                _ = n(65),
                w = n(66),
                k = n(60),
                C = n(61),
                N = n(62),
                P = n(63),
                S = n(64),
                I = n(5),
                E = n.n(I),
                D = n(14),
                A = n.p + "static/media/latest_thumbnail.03dd2a84.png",
                F = n(2),
                T = {
                    Jita: {
                        region: 10000002,
                        location: 60003760,
                        name: "Jita"
                    },
                    Amarr: {
                        region: 10000043,
                        location: 60008494,
                        name: "Amarr"
                    },
                    Dodixie: {
                        region: 10000032,
                        location: 60011866,
                        name: "Dodixie"
                    },
                    Hek: {
                        region: 10000042,
                        location: 60005686,
                        name: "Hek"
                    },
                    Oursulaert: {
                        region: 10000064,
                        location: 60011740,
                        name: "Oursulaert"
                    },
                    Alentene: {
                        region: 10000068,
                        location: 60010300,
                        name: "Alentene"
                    },
                    Stacmon: {
                        region: 10000048,
                        location: 60011893,
                        name: "Stacmon"
                    },
                    Villore: {
                        region: 10000064,
                        location: 60009928,
                        name: "Villore"
                    },
		    Frarn: {
                        region: 10000030,
                        location: 1031084757448,
                        name: "Frarn"
                    },
		     Orvolle: {
                        region: 10000048,
                        location: 1033196707294,
                        name: "Orvolle"
                    },
 		     Amamake: {
                        region: 10000030,
                        location: 1022167642188,
                        name: "Amamake"
                    },
		      Litiura: {
                        region: 10000016,
                        location: 60006844,
                        name: "Litiura"
                    },
		      Vlillirier: {
                        region: 10000048,
                        location: 60001393,
                        name: "Vlillirier"
                    }
                },
                M = {
                    60003760: T.Jita,
                    60008494: T.Amarr,
                    60004588: T.Rens,
                    60011866: T.Dodixie,
                    60005686: T.Hek,
                    60011740: T.Oursulaert,
                    60010300: T.Alentene,
                    60011893: T.Stacmon,
                    60009928: T.Villore,
		    1031084757448: T.Frarn,
                    1033196707294: T.orvolle,
                    1022167642188: T.amamake,
		    60006844: T.litiura,
                    60001393: T.Vlillirier
                },
                q = "https://esi-cache.pterippi.fi/";

            function R(e, t) {
                return fetch(e).then((function(e) {
                    return t(e.json(), e.statusText, e.headers)
                }))
            }

            function z(e, t) {
                return Array.from(Array(t + 1).keys()).filter((function(t) {
                    return t >= e
                }))
            }
            var J = {};

            function V(e) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = Object(d.a)(o.a.mark((function e(t) {
                    var n, r, i;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = 5e3, r = 3, !J[t]) {
                                    e.next = 5;
                                    break
                                }
                                if (!(new Date - J[t].timestamp < 3e5)) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", J[t].d);
                            case 5:
                                return e.prev = 6, e.next = 9, R(t + "&page=1", (function(e, n, r) {
                                    var i = r["x-pages"];
                                    return i > 1 ? Promise.all(z(2, i).map((function(e) {
                                        return R(t + "&page=" + e, (function(e) {
                                            return e
                                        }))
                                    }))).then((function(t) {
                                        return t.reduce((function(e, t) {
                                            return e.concat(t)
                                        }), e)
                                    })) : e
                                }));
                            case 9:
                                return (i = e.sent).filter || console.log(i), J[t] = {
                                    timestamp: new Date,
                                    d: i
                                }, e.abrupt("return", i);
                            case 15:
                                return e.prev = 15, e.t0 = e.catch(6), console.error(e.t0), e.next = 20, new Promise((function(e) {
                                    return setTimeout(e, n)
                                }));
                            case 20:
                                n *= r, r += 1;
                            case 22:
                                e.next = 5;
                                break;
                            case 24:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [6, 15]
                    ])
                })))).apply(this, arguments)
            }

            function B(e, t, n, r) {
                return V(q + "latest/markets/" + t + "/orders/?datasource=tranquility&type_id=" + e).then((function(e) {
                    return e.filter((function(e) {
                        return !e.is_buy_order && e.location_id === n
                    })).sort((function(e, t) {
                        return e.price - t.price
                    })).reduce((function(e, t) {
                        return e.total_cost < r ? {
                            total_cost: r < e.total_cost + t.price * t.volume_remain ? r : e.total_cost + t.price * t.volume_remain,
                            total_cnt: r < e.total_cost + t.price * t.volume_remain ? e.total_cnt + (r - e.total_cost) / t.price : e.total_cnt + t.volume_remain,
                            on_sale_volume: e.on_sale_volume + t.volume_remain
                        } : e
                    }), {
                        total_cost: 0,
                        total_cnt: 0,
                        on_sale_volume: 0
                    })
                })).then((function(t) {
                    return {
                        id: e,
                        price: t.total_cnt > 0 ? t.total_cost / t.total_cnt : 0,
                        on_sale_volume: t.on_sale_volume
                    }
                }))
            }

            function L(e, t, n) {
                try {
                    return V(q + "latest/markets/" + t + "/orders/?datasource=tranquility&type_id=" + e).then((function(e) {
                        return e.filter((function(e) {
                            return !e.is_buy_order && e.location_id === n
                        })).map((function(e) {
                            return e.price
                        })).reduce((function(e, t) {
                            return Math.min(e, t)
                        }), 1 / 0)
                    })).then((function(t) {
                        return {
                            id: e,
                            price: t
                        }
                    }))
                } catch (r) {
                    return []
                }
            }

            function W(e, t, n) {
                try {
                    return V(q + "latest/markets/" + t + "/orders/?datasource=tranquility&type_id=" + e).then((function(e) {
                        return e.filter((function(e) {
                            return !e.is_buy_order && e.location_id === n
                        })).sort((function(e, t) {
                            return e.price - t.price
                        }))[0]
                    }))
                } catch (r) {
                    return []
                }
            }

            function G(e, t, n, r) {
                try {
                    return V(q + "latest/markets/" + n + "/orders/?datasource=tranquility&type_id=" + e).then((function(e) {
                        return e.filter((function(e) {
                            return !e.is_buy_order && e.location_id === r
                        })).filter((function(e) {
                            return e.price < t
                        })).reduce((function(e, t) {
                            return e + t.volume_remain
                        }), 0)
                    }))
                } catch (i) {
                    return []
                }
            }

            function K(e, t, n) {
                try {
                    return V(q + "latest/markets/" + t + "/history/?datasource=tranquility&type_id=" + e).then((function(e) {
                        return e.slice(-n).reduce((function(e, t) {
                            return {
                                total_cost: e.total_cost + t.average * t.volume,
                                total_cnt: e.total_cnt + t.volume
                            }
                        }), {
                            total_cost: 0,
                            total_cnt: 0
                        })
                    })).then((function(t) {
                        return {
                            id: e,
                            avg_price: t.total_cnt > 0 ? t.total_cost / t.total_cnt : 0,
                            daily_volume: t.total_cnt / n
                        }
                    }))
                } catch (r) {
                    return []
                }
            }

            function U(e, t, n, r, i, c, a, s) {
                return Q.apply(this, arguments)
            }

            function Q() {
                return (Q = Object(d.a)(o.a.mark((function e(t, n, r, i, c, a, s, l) {
                    var u, j, h, p, m;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return u = T[n], j = T[r], h = [], e.next = 5, Promise.all(t.map(function() {
                                    var e = Object(d.a)(o.a.mark((function e(t) {
                                        return o.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.t0 = t.id, e.next = 3, B(t.id, u.region, u.location, 1e8);
                                                case 3:
                                                    return e.t1 = e.sent, e.next = 6, B(t.id, j.region, j.location, 1e8);
                                                case 6:
                                                    return e.t2 = e.sent, e.next = 9, K(t.id, j.region, 14);
                                                case 9:
                                                    return e.t3 = e.sent, e.t4 = t, e.abrupt("return", {
                                                        id: e.t0,
                                                        buy: e.t1,
                                                        sell: e.t2,
                                                        history: e.t3,
                                                        info: e.t4
                                                    });
                                                case 12:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                            case 5:
                                p = e.sent, console.log(p), m = a.filter((function(e) {
                                    return e[1] === j.location
                                })).map((function(e) {
                                    return e[0]
                                })), h = p.filter((function(e) {
                                    return !m.includes(e.id)
                                })).map((function(e) {
                                    return {
                                        id: e.id,
                                        price_delta: (e.sell.price > 0 ? e.sell.price : 1.5 * e.history.avg_price) - e.buy.price,
                                        price_margin: 100 * ((e.sell.price > 0 ? e.sell.price : 1.5 * e.history.avg_price) - e.buy.price) / (e.sell.price > 0 ? e.sell.price : 1.5 * e.history.avg_price),
                                        history: e.history,
                                        sell: e.sell,
                                        buy: e.buy,
                                        info: e.info
                                    }
                                })).filter((function(e) {
                                    return e.buy.on_sale_volume > 0
                                })).filter((function(e) {
                                    return e.buy.price < 1e6 * i
                                })).filter((function(e) {
                                    return e.info.volume < c
                                })).filter((function(e) {
                                    return e.sell.on_sale_volume / e.history.daily_volume < 1
                                })).filter((function(e) {
                                    return e.price_margin > 0
                                })).sort((function(e, t) {
                                    return t.price_margin - e.price_margin
                                })), s(h), l(!1);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function X() {
                return (X = Object(d.a)(o.a.mark((function e(t, n, r, i, c) {
                    var a, s, l, u;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = T[r], e.next = 3, Promise.all(t.filter((function(e) {
                                    return n.includes(e.id)
                                })).map(function() {
                                    var e = Object(d.a)(o.a.mark((function e(t) {
                                        return o.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.t0 = t.id, e.next = 3, L(t.id, a.region, a.location);
                                                case 3:
                                                    return e.t1 = e.sent, e.next = 6, K(t.id, a.region, 14);
                                                case 6:
                                                    return e.t2 = e.sent, e.t3 = t, e.abrupt("return", {
                                                        id: e.t0,
                                                        sell: e.t1,
                                                        history: e.t2,
                                                        info: e.t3
                                                    });
                                                case 9:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                            case 3:
                                s = e.sent, console.log(s), l = s.map((function(e) {
                                    return {
                                        id: e.id,
                                        history: e.history,
                                        sell: {
                                            price: Number((e.sell.price < 1 / 0 ? .995 * e.sell.price : 1.99 * e.history.avg_price).toPrecision(4))
                                        },
                                        info: e.info
                                    }
                                })), u = n.map((function(e) {
                                    return l.filter((function(t) {
                                        return t.id === e
                                    }))[0]
                                })), i(u), c(!1);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var Y = function() {
                var e = Object(r.useState)("1"),
                    t = Object(u.a)(e, 2),
                    n = t[0],
                    i = t[1],
                    c = Object(r.useState)("Jita"),
                    a = Object(u.a)(c, 2),
                    s = a[0],
                    I = a[1],
                    R = Object(r.useState)("Amarr"),
                    z = Object(u.a)(R, 2),
                    J = z[0],
                    V = z[1],
                    H = Object(r.useState)(60),
                    B = Object(u.a)(H, 2),
                    L = B[0],
                    Q = B[1],
                    Y = Object(r.useState)(30),
                    Z = Object(u.a)(Y, 2),
                    $ = Z[0],
                    ee = Z[1],
                    te = Object(r.useState)(500),
                    ne = Object(u.a)(te, 2),
                    re = ne[0],
                    ie = ne[1],
                    ce = Object(r.useState)([]),
                    ae = Object(u.a)(ce, 2),
                    se = ae[0],
                    oe = ae[1],
                    le = Object(r.useState)([]),
                    ue = Object(u.a)(le, 2),
                    de = ue[0],
                    je = ue[1],
                    he = Object(r.useState)([]),
                    pe = Object(u.a)(he, 2),
                    me = pe[0],
                    be = pe[1],
                    fe = Object(r.useState)([]),
                    xe = Object(u.a)(fe, 2),
                    Oe = xe[0],
                    ye = xe[1],
                    ge = Object(r.useState)([]),
                    ve = Object(u.a)(ge, 2),
                    _e = ve[0],
                    we = ve[1],
                    ke = Object(r.useState)(0),
                    Ce = Object(u.a)(ke, 2),
                    Ne = (Ce[0], Ce[1]),
                    Pe = Object(r.useState)(!1),
                    Se = Object(u.a)(Pe, 2),
                    Ie = Se[0],
                    Ee = Se[1],
                    De = Object(r.useState)(!1),
                    Ae = Object(u.a)(De, 2),
                    Fe = Ae[0],
                    Te = Ae[1],
                    Me = Object(r.useState)([]),
                    qe = Object(u.a)(Me, 2),
                    Re = qe[0],
                    ze = qe[1],
                    Je = Object(r.useState)(""),
                    Ve = Object(u.a)(Je, 2),
                    He = Ve[0],
                    Be = Ve[1],
                    Le = Object(r.useState)([]),
                    We = Object(u.a)(Le, 2),
                    Ge = We[0],
                    Ke = We[1],
                    Ue = Object(r.useState)([]),
                    Qe = Object(u.a)(Ue, 2),
                    Xe = Qe[0],
                    Ye = Qe[1],
                    Ze = Object(r.useState)({
                        label: "Equal",
                        value: "equal"
                    }),
                    $e = Object(u.a)(Ze, 2),
                    et = $e[0],
                    tt = $e[1],
                    nt = window.location.hostname.includes("localhost");
                nt && (q = "https://esi.evetech.net/");
                var rt = 1e6 * L;
                Object(r.useEffect)((function() {
                    fetch("tradable_types.json", {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }
                    }).then((function(e) {
                        return e.json()
                    })).then((function(e) {
                        return je(e)
                    })), fetch("all_market_items.json", {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }
                    }).then((function(e) {
                        return e.json()
                    })).then((function(e) {
                        return be(e)
                    }))
                }), []);
                var it = _e.map((function(e) {
                        return e.sell.price * e.history.daily_volume
                    })).reduce((function(e, t) {
                        return e + t
                    }), 0),
                    ct = _e.map((function(e) {
                        return e.sell.price * (e.history.daily_volume > e.sell.on_sale_volume ? e.history.daily_volume - e.sell.on_sale_volume : 0)
                    })).reduce((function(e, t) {
                        return e + t
                    }), 0),
                    at = function(e) {
                        n !== e && i(e)
                    },
                    st = 0;
                return Object(F.jsx)(h.a, {
                    style: {
                        minHeight: "100vh",
                        padding: "2rem"
                    },
                    children: Object(F.jsxs)(p.a, {
                        sm: "12",
                        lg: {
                            size: 8,
                            offset: 2
                        },
                        xl: {
                            size: 6,
                            offset: 3
                        },
                        style: {
                            background: "#406AB2",
                            borderRadius: "1rem",
                            opacity: "80%"
                        },
                        children: [Object(F.jsxs)(m.a, {
                            tabs: !0,
                            children: [Object(F.jsx)(b.a, {
                                children: Object(F.jsx)(f.a, {
                                    className: E()({
                                        active: "1" === n
                                    }),
                                    onClick: function() {
                                        at("1")
                                    },
                                    style: {
                                        color: "#E3D370",
                                        fontSize: "1.2rem"
                                    },
                                    children: Object(F.jsx)("b", {
                                        children: "Buy order generator"
                                    })
                                })
                            }), Object(F.jsx)(b.a, {
                                children: Object(F.jsx)(f.a, {
                                    className: E()({
                                        active: "2" === n
                                    }),
                                    onClick: function() {
                                        at("2")
                                    },
                                    style: {
                                        color: "#E3D370",
                                        fontSize: "1.2rem"
                                    },
                                    children: Object(F.jsx)("b", {
                                        children: "Sell apprisal"
                                    })
                                })
                            }), Object(F.jsx)(b.a, {
                                children: Object(F.jsx)(f.a, {
                                    className: E()({
                                        active: "3" === n
                                    }),
                                    onClick: function() {
                                        at("3")
                                    },
                                    style: {
                                        color: "#E3D370",
                                        fontSize: "1.2rem"
                                    },
                                    children: Object(F.jsx)("b", {
                                        children: "Undercut checker"
                                    })
                                })
                            })]
                        }), Object(F.jsx)(x.a, {
                            activeTab: n,
                            children: Object(F.jsx)(O.a, {
                                tabId: "1",
                                style: {
                                    paddind: "0.3rem",
                                    color: "#E3D370"
                                },
                                children: Object(F.jsx)("div", {
                                    children: Object(F.jsxs)(p.a, {
                                        children: [Object(F.jsxs)(y.a, {
                                            className: "d-flex justify-content-between align-items-center",
                                            style: {
                                                margin: "0.6rem"
                                            },
                                            children: ["From hub:", Object(F.jsx)(p.a, {
                                                style: {
                                                    color: "black",
                                                    maxWidth: "50%"
                                                },
                                                children: Object(F.jsx)(D.a, {
                                                    isMulti: !1,
                                                    value: {
                                                        label: s,
                                                        name: T[s].name
                                                    },
                                                    onChange: function(e) {
                                                        return I(e.value)
                                                    },
                                                    options: Object.keys(T).map((function(e) {
                                                        return {
                                                            value: e,
                                                            label: T[e].name
                                                        }
                                                    }))
                                                })
                                            })]
                                        }), Object(F.jsxs)(y.a, {
                                            className: "d-flex justify-content-between align-items-center",
                                            style: {
                                                margin: "0.6rem"
                                            },
                                            children: ["To hub:", Object(F.jsx)(p.a, {
                                                style: {
                                                    color: "black",
                                                    maxWidth: "50%"
                                                },
                                                children: Object(F.jsx)(D.a, {
                                                    isMulti: !1,
                                                    value: {
                                                        label: J,
                                                        name: T[J].name
                                                    },
                                                    onChange: function(e) {
                                                        return V(e.value)
                                                    },
                                                    options: Object.keys(T).map((function(e) {
                                                        return {
                                                            value: e,
                                                            label: T[e].name
                                                        }
                                                    }))
                                                })
                                            })]
                                        }), Object(F.jsxs)(y.a, {
                                            className: "d-flex justify-content-between align-items-center",
                                            style: {
                                                margin: "0.6rem"
                                            },
                                            children: ["Max cargo value, MISK: ", Object(F.jsx)(g.a, {
                                                style: {
                                                    width: "50%"
                                                },
                                                type: "number",
                                                min: 0,
                                                max: 2e3,
                                                step: .01,
                                                value: L,
                                                onChange: function(e) {
                                                    return Q(e.target.value)
                                                }
                                            })]
                                        }), Object(F.jsxs)(y.a, {
                                            className: "d-flex justify-content-between align-items-center",
                                            style: {
                                                margin: "0.6rem"
                                            },
                                            children: ["Max unit price, MISK: ", Object(F.jsx)(g.a, {
                                                style: {
                                                    width: "50%"
                                                },
                                                type: "number",
                                                min: 0,
                                                max: 2e3,
                                                step: .01,
                                                value: $,
                                                onChange: function(e) {
                                                    return ee(e.target.value)
                                                }
                                            })]
                                        }), Object(F.jsxs)(y.a, {
                                            className: "d-flex justify-content-between align-items-center",
                                            style: {
                                                margin: "0.6rem"
                                            },
                                            children: ["Max unit volume, m3: ", Object(F.jsx)(g.a, {
                                                style: {
                                                    width: "50%"
                                                },
                                                type: "number",
                                                min: 0,
                                                max: 2e5,
                                                step: 1,
                                                value: re,
                                                onChange: function(e) {
                                                    return ie(e.target.value)
                                                }
                                            })]
                                        }), nt ? Object(F.jsxs)(y.a, {
                                            className: "d-flex justify-content-between align-items-center",
                                            style: {
                                                margin: "0.6rem"
                                            },
                                            children: ["Buy order split:", Object(F.jsx)(p.a, {
                                                style: {
                                                    color: "black",
                                                    maxWidth: "50%"
                                                },
                                                children: Object(F.jsx)(D.a, {
                                                    isMulti: !1,
                                                    value: et,
                                                    onChange: function(e) {
                                                        return tt(e)
                                                    },
                                                    options: [{
                                                        label: "Equal",
                                                        value: "equal"
                                                    }, {
                                                        label: "Proportional to expected turnover",
                                                        value: "proportional"
                                                    }, {
                                                        label: "Proportional to conservative expected turnover",
                                                        value: "proportional_conservative"
                                                    }]
                                                })
                                            })]
                                        }) : null, Object(F.jsx)(y.a, {
                                            className: "d-flex justify-content-between align-items-center",
                                            style: {
                                                margin: "0.6rem"
                                            },
                                            children: Object(F.jsx)(v.a, {
                                                color: "primary",
                                                onClick: function() {
                                                    return Te(!Fe)
                                                },
                                                active: Fe,
                                                children: "Ignore existing orders"
                                            })
                                        }), Fe ? Object(F.jsx)(y.a, {
                                            className: "d-flex justify-content-between align-items-center",
                                            style: {
                                                margin: "0.6rem"
                                            },
                                            children: Object(F.jsx)(j.a, {
                                                onDrop: function(e) {
                                                    e.forEach((function(e) {
                                                        var t = new FileReader;
                                                        t.onabort = function() {
                                                            return alert("Cannot read the file. Please try again.")
                                                        }, t.onerror = function() {
                                                            return alert("Cannot read the file. Please try again.")
                                                        }, t.onload = function() {
                                                            var e = t.result.split("\n");
                                                            console.log(e[0].split(","));
                                                            var n = e[0].split(","),
                                                                r = n.indexOf("stationID"),
                                                                i = n.indexOf("typeID"),
                                                                c = e.slice(1).map((function(e) {
                                                                    return [parseInt(e.split(",")[i]), parseInt(e.split(",")[r])]
                                                                }));
                                                            console.log("setIgnoredTypeIds", c), ze(c)
                                                        }, t.readAsText(e)
                                                    }))
                                                },
                                                children: function(e) {
                                                    var t = e.getRootProps,
                                                        n = e.getInputProps;
                                                    return Object(F.jsx)("section", {
                                                        children: Object(F.jsxs)("div", Object(l.a)(Object(l.a)({}, t()), {}, {
                                                            children: [Object(F.jsx)("input", Object(l.a)({}, n())), Object(F.jsx)("p", {
                                                                children: "Drag 'n' drop latest market order export here"
                                                            }), Re.length > 0 ? Object(F.jsxs)("p", {
                                                                children: ["Currently ignoring ", Re.filter((function(e) {
                                                                    return e[1] === T[J].location
                                                                })).length, " types."]
                                                            }) : Object(F.jsx)("p", {})]
                                                        }))
                                                    })
                                                }
                                            })
                                        }) : Object(F.jsx)(y.a, {}), Object(F.jsx)(y.a, {
                                            className: "p-5",
                                            children: Object(F.jsx)(v.a, {
                                                className: "padded",
                                                color: "info",
                                                disabled: Ie,
                                                onClick: function() {
                                                    return [Ee(!0), we([]), ye([]), U(de, s, J, $, re, Fe ? Re : [], oe, Ee, Ne)]
                                                },
                                                children: Ie ? "Loading and calculating. Please wait." : "Query best deals"
                                            })
                                        }), _e.length > 0 ? Object(F.jsx)(y.a, {
                                            className: "d-flex justify-content-between align-items-center",
                                            style: {
                                                margin: "0.6rem"
                                            },
                                            children: Object(F.jsxs)(p.a, {
                                                children: [Object(F.jsx)("h3", {
                                                    children: "Generated buy order"
                                                }), Object(F.jsx)(y.a, {
                                                    className: "d-flex justify-content-center align-items-center",
                                                    style: {
                                                        margin: "0.6rem"
                                                    },
                                                    children: Object(F.jsx)("table", {
                                                        style: {
                                                            margin: "0.6rem"
                                                        },
                                                        children: _e.map((function(e) {
                                                            return Object(F.jsxs)("tr", {
                                                                children: [Object(F.jsx)("td", {
                                                                    children: e.info.name
                                                                }), Object(F.jsx)("td", {
                                                                    children: function() {
                                                                        var t = 0;
                                                                        return "equal" === et.value ? t = (rt / _e.length / e.buy.price).toFixed(0) : "proportional" === et.value ? t = (e.buy.price * e.history.daily_volume / it * rt / e.buy.price).toFixed(0) : "proportional_conservative" === et.value && (t = (e.buy.price * (e.history.daily_volume > e.sell.on_sale_volume ? e.history.daily_volume - e.sell.on_sale_volume : 0) / ct * rt / e.buy.price).toFixed(0)), st += t * e.info.volume, t
                                                                    }()
                                                                })]
                                                            }, JSON.stringify(e) + new Date)
                                                        }))
                                                    })
                                                }), Object(F.jsxs)(y.a, {
                                                    className: "d-flex justify-content-center align-items-center",
                                                    style: {
                                                        margin: "0.6rem"
                                                    },
                                                    children: ["Estimated buy order volume is: ", st.toFixed(2), " m3"]
                                                })]
                                            })
                                        }) : Object(F.jsx)(y.a, {}), Object(F.jsx)(y.a, {
                                            children: se.length > 0 ? Object(F.jsxs)(p.a, {
                                                children: [Object(F.jsx)(y.a, {
                                                    children: Object(F.jsx)("h3", {
                                                        children: "Best items to haul"
                                                    })
                                                }), Object(F.jsx)(y.a, {
                                                    style: {
                                                        margin: "0.6rem"
                                                    },
                                                    children: Object(F.jsxs)(k.a, {
                                                        dark: !0,
                                                        striped: !0,
                                                        children: [Object(F.jsx)("thead", {
                                                            children: Object(F.jsxs)("tr", {
                                                                children: [Object(F.jsx)("th", {}), Object(F.jsx)("th", {
                                                                    children: "Item"
                                                                }), Object(F.jsx)("th", {
                                                                    children: "Competition, h"
                                                                }), Object(F.jsx)("th", {
                                                                    children: "Margin, %"
                                                                }), Object(F.jsx)("th", {
                                                                    children: "ISK/m3"
                                                                })]
                                                            })
                                                        }), Object(F.jsx)("tbody", {
                                                            children: se.slice(0, 60).map((function(e) {
                                                                return Object(F.jsxs)("tr", {
                                                                    children: [Object(F.jsx)("td", {
                                                                        children: Object(F.jsx)(g.a, {
                                                                            type: "checkbox",
                                                                            checked: Oe.includes(e.id),
                                                                            onChange: function(t) {
                                                                                if (console.log(Oe), t.target.checked) Oe.includes(e.id) || (Oe.push(e.id), ye(Oe.slice()), we(se.filter((function(e) {
                                                                                    return Oe.includes(e.id)
                                                                                }))));
                                                                                else if (Oe.includes(e.id)) {
                                                                                    var n = Oe.filter((function(t) {
                                                                                        return t !== e.id
                                                                                    }));
                                                                                    ye(n), we(se.filter((function(e) {
                                                                                        return n.includes(e.id)
                                                                                    })))
                                                                                }
                                                                            }
                                                                        })
                                                                    }), Object(F.jsx)("td", {
                                                                        className: "text-left",
                                                                        children: e.info.name
                                                                    }), Object(F.jsx)("td", {
                                                                        children: (e.sell.on_sale_volume / e.history.daily_volume * 24).toFixed(1)
                                                                    }), Object(F.jsx)("td", {
                                                                        children: e.price_margin.toFixed(1)
                                                                    }), Object(F.jsx)("td", {
                                                                        children: (e.buy.price / e.info.volume).toFixed(.1)
                                                                    })]
                                                                }, JSON.stringify(e) + new Date)
                                                            }))
                                                        })]
                                                    })
                                                })]
                                            }) : Object(F.jsx)("div", {})
                                        })]
                                    })
                                })
                            })
                        }), Object(F.jsx)(x.a, {
                            activeTab: n,
                            children: Object(F.jsxs)(O.a, {
                                tabId: "2",
                                style: {
                                    paddind: "0.3rem",
                                    color: "#E3D370"
                                },
                                children: [Object(F.jsxs)(y.a, {
                                    className: "d-flex justify-content-between align-items-center",
                                    style: {
                                        margin: "0.6rem"
                                    },
                                    children: ["In hub:", Object(F.jsx)(p.a, {
                                        style: {
                                            color: "black",
                                            maxWidth: "50%"
                                        },
                                        children: Object(F.jsx)(D.a, {
                                            isMulti: !1,
                                            value: {
                                                label: J,
                                                name: T[J].name
                                            },
                                            onChange: function(e) {
                                                return V(e.value)
                                            },
                                            options: Object.keys(T).map((function(e) {
                                                return {
                                                    value: e,
                                                    label: T[e].name
                                                }
                                            }))
                                        })
                                    })]
                                }), Object(F.jsx)(y.a, {
                                    className: "d-flex justify-content-between align-items-center",
                                    style: {
                                        margin: "0.6rem"
                                    },
                                    children: Object(F.jsx)("textarea", {
                                        className: "w-100",
                                        onChange: function(e) {
                                            return Be(e.target.value)
                                        },
                                        placeholder: "Paste your inventory here and get suggested sell prices based on the latest competition info",
                                        value: He
                                    })
                                }), Object(F.jsx)(y.a, {
                                    className: "d-flex justify-content-between align-items-center",
                                    style: {
                                        margin: "0.6rem"
                                    },
                                    children: Object(F.jsx)(v.a, {
                                        color: "info",
                                        onClick: function() {
                                            var e = He.split("\n").map((function(e) {
                                                    return e.split("\t")[0]
                                                })).filter((function(e) {
                                                    return e.length > 0
                                                })),
                                                t = e.map((function(e) {
                                                    var t = me.filter((function(t) {
                                                        return t.name === e
                                                    }));
                                                    return 0 === t.length ? [] : t[0].id
                                                })).reverse();
                                            console.log(e), t.length > 0 ? function(e, t, n, r, i) {
                                                X.apply(this, arguments)
                                            }(me, t, J, Ke, Ee) : Ke([])
                                        },
                                        children: Ie ? "Loading and calculating. Please wait." : "Get suggested sell prices"
                                    })
                                }), Object(F.jsx)(y.a, {
                                    className: "d-flex justify-content-between align-items-center",
                                    style: {
                                        margin: "0.6rem"
                                    },
                                    children: Object(F.jsxs)(k.a, {
                                        dark: !0,
                                        striped: !0,
                                        children: [Object(F.jsx)("thead", {
                                            children: Object(F.jsxs)("tr", {
                                                children: [Object(F.jsx)("th", {
                                                    children: "Item"
                                                }), Object(F.jsx)("th", {
                                                    children: "Suggested sell price"
                                                })]
                                            })
                                        }), Object(F.jsx)("tbody", {
                                            children: Ge.map((function(e) {
                                                return e ? Object(F.jsxs)("tr", {
                                                    children: [Object(F.jsx)("th", {
                                                        children: e.info.name
                                                    }), Object(F.jsx)("th", {
                                                        children: e.sell.price.toFixed(2)
                                                    })]
                                                }) : null
                                            }))
                                        })]
                                    })
                                })]
                            })
                        }), Object(F.jsx)(x.a, {
                            activeTab: n,
                            children: Object(F.jsxs)(O.a, {
                                tabId: "3",
                                style: {
                                    paddind: "0.3rem",
                                    color: "#E3D370"
                                },
                                children: [Object(F.jsx)("p", {
                                    style: {
                                        margin: "1rem",
                                        color: "white"
                                    },
                                    children: "Select recent export of corporation or personal orders to check if you need to update the price"
                                }), Object(F.jsx)(y.a, {
                                    className: "d-flex justify-content-between align-items-center",
                                    style: {
                                        margin: "0.6rem"
                                    },
                                    children: Object(F.jsx)(j.a, {
                                        onDrop: function(e) {
                                            e.forEach((function(e) {
                                                var t = new FileReader;
                                                t.onabort = function() {
                                                    return alert("Cannot read the file. Please try again.")
                                                }, t.onerror = function() {
                                                    return alert("Cannot read the file. Please try again.")
                                                }, t.onload = Object(d.a)(o.a.mark((function e() {
                                                    var n, r, i, c, a, s, l, u, j, h, p, m;
                                                    return o.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return n = t.result, r = n.split("\n"), console.log(r[0].split(",")), i = r[0].split(","), c = i.indexOf("orderID"), a = i.indexOf("stationID"), s = i.indexOf("regionID"), l = i.indexOf("typeID"), u = i.indexOf("charName"), j = i.indexOf("price"), h = r.slice(1).map((function(e) {
                                                                    return {
                                                                        type: parseInt(e.split(",")[l]),
                                                                        location: parseInt(e.split(",")[a]),
                                                                        name: e.split(",")[u],
                                                                        order: parseInt(e.split(",")[c]),
                                                                        region: parseInt(e.split(",")[s]),
                                                                        price: parseFloat(e.split(",")[j])
                                                                    }
                                                                })).filter((function(e) {
                                                                    return M[e.location]
                                                                })).filter((function(e) {
                                                                    return me.filter((function(t) {
                                                                        return t.id === e.type
                                                                    })).length
                                                                })).map((function(e) {
                                                                    return {
                                                                        type_name: me.filter((function(t) {
                                                                            return t.id === e.type
                                                                        }))[0].name,
                                                                        location_name: M[e.location].name,
                                                                        trader_name: e.name,
                                                                        order_id: e.order,
                                                                        type_id: e.type,
                                                                        region: e.region,
                                                                        location: e.location,
                                                                        price: e.price
                                                                    }
                                                                })).sort((function(e, t) {
                                                                    return e.type_name > t.type_name ? 1 : -1
                                                                })).sort((function(e, t) {
                                                                    return e.location_name > t.location_name ? 1 : -1
                                                                })).sort((function(e, t) {
                                                                    return e.trader_name > t.trader_name ? 1 : -1
                                                                })), p = h.map((function(e) {
                                                                    return e.order_id
                                                                })), e.next = 14, Promise.all(h.map(function() {
                                                                    var e = Object(d.a)(o.a.mark((function e(t) {
                                                                        return o.a.wrap((function(e) {
                                                                            for (;;) switch (e.prev = e.next) {
                                                                                case 0:
                                                                                    return e.t0 = t, e.next = 3, W(t.type_id, t.region, t.location);
                                                                                case 3:
                                                                                    return e.t1 = e.sent, e.next = 6, G(t.type_id, t.price, t.region, t.location);
                                                                                case 6:
                                                                                    return e.t2 = e.sent, e.next = 9, K(t.type_id, t.region, 30);
                                                                                case 9:
                                                                                    return e.t3 = e.sent, e.abrupt("return", {
                                                                                        my: e.t0,
                                                                                        cheapest: e.t1,
                                                                                        undercut: e.t2,
                                                                                        history: e.t3
                                                                                    });
                                                                                case 11:
                                                                                case "end":
                                                                                    return e.stop()
                                                                            }
                                                                        }), e)
                                                                    })));
                                                                    return function(t) {
                                                                        return e.apply(this, arguments)
                                                                    }
                                                                }()));
                                                            case 14:
                                                                m = e.sent.filter((function(e) {
                                                                    return !p.includes(e.cheapest.order_id)
                                                                })).map((function(e) {
                                                                    return [e.my.trader_name, e.my.location_name, e.my.type_name, Number((.995 * e.cheapest.price).toPrecision(4)), ((e.my.price - Number((.995 * e.cheapest.price).toPrecision(4))) / e.my.price * 100).toFixed(1), (e.undercut / e.history.daily_volume * 24).toFixed(1)]
                                                                })), console.log(m), console.log(h), Ye(m);
                                                            case 18:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                }))), t.readAsText(e)
                                            }))
                                        },
                                        children: function(e) {
                                            var t = e.getRootProps,
                                                n = e.getInputProps;
                                            return Object(F.jsx)("section", {
                                                children: Object(F.jsxs)("div", Object(l.a)(Object(l.a)({}, t()), {}, {
                                                    children: [Object(F.jsx)("input", Object(l.a)({}, n())), Object(F.jsx)("p", {
                                                        children: "Drag 'n' drop latest market order export here"
                                                    })]
                                                }))
                                            })
                                        }
                                    })
                                }), Object(F.jsx)(y.a, {
                                    className: "d-flex justify-content-between align-items-center",
                                    style: {
                                        margin: "0.6rem"
                                    },
                                    children: Xe.length > 0 ? Object(F.jsxs)(k.a, {
                                        dark: !0,
                                        striped: !0,
                                        children: [Object(F.jsx)("thead", {
                                            children: Object(F.jsxs)("tr", {
                                                children: [Object(F.jsx)("th", {
                                                    children: "Trader"
                                                }), Object(F.jsx)("th", {
                                                    children: "Hub"
                                                }), Object(F.jsx)("th", {
                                                    children: "Item"
                                                }), Object(F.jsx)("th", {
                                                    children: "Suggested price"
                                                }), Object(F.jsx)("th", {
                                                    children: "Discount, %"
                                                }), Object(F.jsx)("th", {
                                                    children: "Undercutting volume, h"
                                                })]
                                            })
                                        }), Object(F.jsx)("tbody", {
                                            children: Xe.map((function(e) {
                                                return Object(F.jsxs)("tr", {
                                                    children: [Object(F.jsx)("td", {
                                                        children: e[0]
                                                    }), Object(F.jsx)("td", {
                                                        children: e[1]
                                                    }), Object(F.jsx)("td", {
                                                        children: e[2]
                                                    }), Object(F.jsx)("td", {
                                                        children: e[3]
                                                    }), Object(F.jsx)("td", {
                                                        children: e[4]
                                                    }), Object(F.jsx)("td", {
                                                        children: e[5]
                                                    })]
                                                })
                                            }))
                                        })]
                                    }) : Object(F.jsx)("table", {})
                                })]
                            })
                        }), Object(F.jsx)("center", {
                            className: "m-2",
                            style: {
                                zIndex: -100,
                                position: "relative"
                            },
                            children: Object(F.jsxs)(C.a, {
                                style: {
                                    maxWidth: "80%"
                                },
                                children: [Object(F.jsx)(N.a, {
                                    src: A
                                }), Object(F.jsxs)(P.a, {
                                    children: [Object(F.jsx)(S.a, {
                                        children: "Level up your hauling game in EVE online with market analysis tools. Part 1"
                                    }), Object(F.jsx)(v.a, {
                                        color: "success",
                                        onClick: function() {
                                            return window.open("https://www.youtube.com/watch?v=lIxXnVrRH7U", "_blank")
                                        },
                                        children: "Watch on YouTube"
                                    })]
                                })]
                            })
                        }), Object(F.jsx)("div", {
                            className: "footerSpacer"
                        }), Object(F.jsx)("div", {
                            className: "fixed-bottom responsiveFooter",
                            children: Object(F.jsx)(_.a, {
                                color: "dark",
                                dark: !0,
                                children: Object(F.jsxs)(h.a, {
                                    children: [Object(F.jsx)(w.a, {
                                        className: "w-100",
                                        children: Object(F.jsx)(f.a, {
                                            style: {
                                                color: "white"
                                            },
                                            className: "w-100",
                                            href: "https://pterippi.fi",
                                            children: Object(F.jsxs)(y.a, {
                                                className: "d-flex w-100 flex-row justify-content-around align-items-center",
                                                children: [Object(F.jsx)(p.a, {
                                                    sm: 12,
                                                    lg: 6,
                                                    children: Object(F.jsx)("img", {
                                                        alt: "Logo of Pterippi Oy",
                                                        style: {
                                                            maxHeight: "5vh",
                                                            filter: "brightness(0) invert(1)"
                                                        },
                                                        src: "https://pterippi.fi/static/media/pterippi-logo.80fae1c3.png"
                                                    })
                                                }), Object(F.jsxs)(p.a, {
                                                    sm: 12,
                                                    lg: 6,
                                                    className: "text-wrap",
                                                    children: ["This tools was developed by Pterippi Oy.", Object(F.jsx)("br", {}), "Contact us if you need custom digital tools for your business."]
                                                })]
                                            })
                                        })
                                    }), Object(F.jsxs)(w.a, {
                                        className: "w-100 text-wrap text-muted",
                                        style: {
                                            fontSize: "0.6rem"
                                        },
                                        children: ["2021 (c) Pterippi Oy. All rights reserved. Data is provided by ESI API courtesy of CCP Games. ", Object(F.jsx)("br", {}), "EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide. All other trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf. CCP hf. has granted permission to eveonlineships.com to use EVE Online and all associated logos and designs for promotional and information purposes on its website but does not endorse, and is not in any way affiliated with, eveonlineships.com. CCP is in no way responsible for the content on or functioning of this website, nor can it be liable for any damage arising from the use of this website."]
                                    })]
                                })
                            })
                        })]
                    })
                })
            };
            var Z = function() {
                    return Object(F.jsx)("div", {
                        className: "App",
                        children: Object(F.jsx)(Y, {})
                    })
                },
                $ = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 67)).then((function(t) {
                        var n = t.getCLS,
                            r = t.getFID,
                            i = t.getFCP,
                            c = t.getLCP,
                            a = t.getTTFB;
                        n(e), r(e), i(e), c(e), a(e)
                    }))
                };
            n(48);
            a.a.render(Object(F.jsx)(i.a.StrictMode, {
                children: Object(F.jsx)(Z, {})
            }), document.getElementById("root")), $()
        }
    },
    [
        [49, 1, 2]
    ]
]);
//# sourceMappingURL=main.fa70032c.chunk.js.map
