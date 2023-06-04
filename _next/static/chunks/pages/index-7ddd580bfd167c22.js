(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        48312: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return n(48383)
            }])
        },
        48383: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function () {
                    return ye
                }
            });
            var r = n(85893),
                o = n(67294);

            function l(e, t, ...n) {
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(r, l), r
            }
            var a, u, i = ((u = i || {})[u.None = 0] = "None", u[u.RenderStrategy = 1] = "RenderStrategy", u[u.Static = 2] = "Static", u),
                s = ((a = s || {})[a.Unmount = 0] = "Unmount", a[a.Hidden = 1] = "Hidden", a);

            function c({
                ourProps: e,
                theirProps: t,
                slot: n,
                defaultTag: r,
                features: o,
                visible: a = !0,
                name: u
            }) {
                let i = f(t, e);
                if (a) return d(i, n, r, u);
                let s = null != o ? o : 0;
                if (2 & s) {
                    let {
                        static: e = !1,
                        ...t
                    } = i;
                    if (e) return d(t, n, r, u)
                }
                if (1 & s) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = i;
                    return l(e ? 0 : 1, {
                        0: () => null,
                        1: () => d({
                            ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, n, r, u)
                    })
                }
                return d(i, n, r, u)
            }

            function d(e, t = {}, n, r) {
                let {
                    as: l = n,
                    children: a,
                    refName: u = "ref",
                    ...i
                } = m(e, ["unmount", "static"]), s = void 0 !== e.ref ? {
                    [u]: e.ref
                } : {}, c = "function" == typeof a ? a(t) : a;
                i.className && "function" == typeof i.className && (i.className = i.className(t));
                let d = {};
                if (l === o.Fragment && Object.keys(v(i)).length > 0) {
                    if (!(0, o.isValidElement)(c) || Array.isArray(c) && c.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(i).map((e => `  - ${e}`)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((e => `  - ${e}`)).join("\n")].join("\n"));
                    return (0, o.cloneElement)(c, Object.assign({}, f(c.props, v(m(i, ["ref"]))), d, s))
                }
                return (0, o.createElement)(l, Object.assign({}, m(i, ["ref"]), l !== o.Fragment && s, l !== o.Fragment && d), c)
            }

            function f(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    n = {};
                for (let r of e)
                    for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((e => [e, void 0]))));
                for (let r in n) Object.assign(t, {
                    [r](e, ...t) {
                        let o = n[r];
                        for (let n of o) {
                            if (e.defaultPrevented) return;
                            n(e, ...t)
                        }
                    }
                });
                return t
            }

            function p(e) {
                var t;
                return Object.assign((0, o.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function v(e) {
                let t = Object.assign({}, e);
                for (let n in t) void 0 === t[n] && delete t[n];
                return t
            }

            function m(e, t = []) {
                let n = Object.assign({}, e);
                for (let r of t) r in n && delete n[r];
                return n
            }
            let h = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;

            function b(e) {
                let t = (0, o.useRef)(e);
                return h((() => {
                    t.current = e
                }), [e]), t
            }
            let w = function (e) {
                    let t = b(e);
                    return o.useCallback(((...e) => t.current(...e)), [t])
                },
                g = Symbol();

            function y(e, t = !0) {
                return Object.assign(e, {
                    [g]: t
                })
            }

            function x(...e) {
                let t = (0, o.useRef)(e);
                (0, o.useEffect)((() => {
                    t.current = e
                }), [e]);
                let n = w((e => {
                    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
                }));
                return e.every((e => null == e || (null == e ? void 0 : e[g]))) ? void 0 : n
            }
            let P = {
                serverHandoffComplete: !1
            };
            var E;
            let S = 0;

            function N() {
                return ++S
            }
            let k = null != (E = o.useId) ? E : function () {
                let e = function () {
                        let [e, t] = (0, o.useState)(P.serverHandoffComplete);
                        return (0, o.useEffect)((() => {
                            !0 !== e && t(!0)
                        }), [e]), (0, o.useEffect)((() => {
                            !1 === P.serverHandoffComplete && (P.serverHandoffComplete = !0)
                        }), []), e
                    }(),
                    [t, n] = o.useState(e ? N : null);
                return h((() => {
                    null === t && n(N())
                }), [t]), null != t ? "" + t : void 0
            };
            var O = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(O || {});

            function j(e) {
                let t = e.parentElement,
                    n = null;
                for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
                let r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
                return (!r || ! function (e) {
                    if (!e) return !1;
                    let t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(n)) && r
            }

            function I(e) {
                return "undefined" == typeof window ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }
            let F = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e => `${e}:not([tabindex='-1'])`)).join(",");
            var C = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(C || {}),
                T = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(T || {}),
                D = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(D || {});

            function A(e = document.body) {
                return null == e ? [] : Array.from(e.querySelectorAll(F))
            }
            var L = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(L || {});
            let M = ["textarea", "input"].join(",");

            function H(e, t, n = !0) {
                let r, o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                    l = Array.isArray(e) ? n ? function (e, t = (e => e)) {
                        return e.slice().sort(((e, n) => {
                            let r = t(e),
                                o = t(n);
                            if (null === r || null === o) return 0;
                            let l = r.compareDocumentPosition(o);
                            return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                        }))
                    }(e) : e : A(e),
                    a = o.activeElement,
                    u = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    i = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, l.indexOf(a)) - 1;
                        if (4 & t) return Math.max(0, l.indexOf(a)) + 1;
                        if (8 & t) return l.length - 1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    s = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    c = 0,
                    d = l.length;
                do {
                    if (c >= d || c + d <= 0) return 0;
                    let e = i + c;
                    if (16 & t) e = (e + d) % d;
                    else {
                        if (e < 0) return 3;
                        if (e >= d) return 1
                    }
                    r = l[e], null == r || r.focus(s), c += u
                } while (r !== o.activeElement);
                return 6 & t && function (e) {
                    var t, n;
                    return null != (n = null == (t = null == e ? void 0 : e.matches) ? void 0 : t.call(e, M)) && n
                }(r) && r.select(), r.hasAttribute("tabindex") || r.setAttribute("tabindex", "0"), 2
            }
            let R = (0, o.createContext)(null);
            R.displayName = "OpenClosedContext";
            var B = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(B || {});

            function $() {
                return (0, o.useContext)(R)
            }

            function _({
                value: e,
                children: t
            }) {
                return o.createElement(R.Provider, {
                    value: e
                }, t)
            }

            function U(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                return "string" == typeof n && "button" === n.toLowerCase() ? "button" : void 0
            }

            function W(e, t, n) {
                let r = b(t);
                (0, o.useEffect)((() => {
                    function t(e) {
                        r.current(e)
                    }
                    return window.addEventListener(e, t, n), () => window.removeEventListener(e, t, n)
                }), [e, n])
            }
            var G = (e => (e[e.None = 1] = "None", e[e.IgnoreScrollbars = 2] = "IgnoreScrollbars", e))(G || {});

            function K(e, t, n = 1) {
                let r = (0, o.useRef)(!1),
                    l = w((o => {
                        if (r.current) return;
                        r.current = !0,
                            function (e) {
                                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch((e => setTimeout((() => {
                                    throw e
                                }))))
                            }((() => {
                                r.current = !1
                            }));
                        let l = function e(t) {
                                return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                            }(e),
                            a = o.target;
                        if (a.ownerDocument.documentElement.contains(a)) {
                            if (2 === (2 & n)) {
                                let e = 20,
                                    t = a.ownerDocument.documentElement;
                                if (o.clientX > t.clientWidth - e || o.clientX < e || o.clientY > t.clientHeight - e || o.clientY < e) return
                            }
                            for (let e of l) {
                                if (null === e) continue;
                                let t = e instanceof HTMLElement ? e : e.current;
                                if (null != t && t.contains(a)) return
                            }
                            return t(o, a)
                        }
                    }));
                W("pointerdown", l), W("mousedown", l)
            }

            function q(...e) {
                return (0, o.useMemo)((() => I(...e)), [...e])
            }

            function X(e, t, n, r) {
                let l = b(n);
                (0, o.useEffect)((() => {
                    function n(e) {
                        l.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
                }), [e, t, r])
            }
            var Y = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Y || {});
            let V = p((function (e, t) {
                let {
                    features: n = 1,
                    ...r
                } = e;
                return c({
                    ourProps: {
                        ref: t,
                        "aria-hidden": 2 === (2 & n) || void 0,
                        style: {
                            position: "absolute",
                            width: 1,
                            height: 1,
                            padding: 0,
                            margin: -1,
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: "0",
                            ...4 === (4 & n) && 2 !== (2 & n) && {
                                display: "none"
                            }
                        }
                    },
                    theirProps: r,
                    slot: {},
                    defaultTag: "div",
                    name: "Hidden"
                })
            }));
            var z = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(z || {});

            function J() {
                let e = (0, o.useRef)(0);
                return W("keydown", (t => {
                    "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0)
                }), !0), e
            }
            var Q, Z = ((Q = Z || {})[Q.Open = 0] = "Open", Q[Q.Closed = 1] = "Closed", Q),
                ee = (e => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(ee || {});
            let te = {
                    0: e => ({
                        ...e,
                        popoverState: l(e.popoverState, {
                            0: 1,
                            1: 0
                        })
                    }),
                    1: e => 1 === e.popoverState ? e : {
                        ...e,
                        popoverState: 1
                    },
                    2: (e, t) => e.button === t.button ? e : {
                        ...e,
                        button: t.button
                    },
                    3: (e, t) => e.buttonId === t.buttonId ? e : {
                        ...e,
                        buttonId: t.buttonId
                    },
                    4: (e, t) => e.panel === t.panel ? e : {
                        ...e,
                        panel: t.panel
                    },
                    5: (e, t) => e.panelId === t.panelId ? e : {
                        ...e,
                        panelId: t.panelId
                    }
                },
                ne = (0, o.createContext)(null);

            function re(e) {
                let t = (0, o.useContext)(ne);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Popover /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, re), t
                }
                return t
            }
            ne.displayName = "PopoverContext";
            let oe = (0, o.createContext)(null);

            function le(e) {
                let t = (0, o.useContext)(oe);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Popover /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, le), t
                }
                return t
            }
            oe.displayName = "PopoverAPIContext";
            let ae = (0, o.createContext)(null);

            function ue() {
                return (0, o.useContext)(ae)
            }
            ae.displayName = "PopoverGroupContext";
            let ie = (0, o.createContext)(null);

            function se(e, t) {
                return l(t.type, te, e, t)
            }
            ie.displayName = "PopoverPanelContext";
            let ce = p((function (e, t) {
                    var n;
                    let r = `headlessui-popover-button-${k()}`,
                        a = `headlessui-popover-panel-${k()}`,
                        u = (0, o.useRef)(null),
                        i = x(t, y((e => {
                            u.current = e
                        }))),
                        s = (0, o.useReducer)(se, {
                            popoverState: 1,
                            button: null,
                            buttonId: r,
                            panel: null,
                            panelId: a,
                            beforePanelSentinel: (0, o.createRef)(),
                            afterPanelSentinel: (0, o.createRef)()
                        }),
                        [{
                            popoverState: d,
                            button: f,
                            panel: p,
                            beforePanelSentinel: v,
                            afterPanelSentinel: m
                        }, h] = s,
                        b = q(null != (n = u.current) ? n : f);
                    (0, o.useEffect)((() => h({
                        type: 3,
                        buttonId: r
                    })), [r, h]), (0, o.useEffect)((() => h({
                        type: 5,
                        panelId: a
                    })), [a, h]);
                    let g = (0, o.useMemo)((() => {
                            if (!f || !p) return !1;
                            for (let e of document.querySelectorAll("body > *"))
                                if (Number(null == e ? void 0 : e.contains(f)) ^ Number(null == e ? void 0 : e.contains(p))) return !0;
                            return !1
                        }), [f, p]),
                        P = (0, o.useMemo)((() => ({
                            buttonId: r,
                            panelId: a,
                            close: () => h({
                                type: 1
                            })
                        })), [r, a, h]),
                        E = ue(),
                        S = null == E ? void 0 : E.registerPopover,
                        N = w((() => {
                            var e;
                            return null != (e = null == E ? void 0 : E.isFocusWithinPopoverGroup()) ? e : (null == b ? void 0 : b.activeElement) && ((null == f ? void 0 : f.contains(b.activeElement)) || (null == p ? void 0 : p.contains(b.activeElement)))
                        }));
                    (0, o.useEffect)((() => null == S ? void 0 : S(P)), [S, P]), X(null == b ? void 0 : b.defaultView, "focus", (e => {
                        var t, n, r, o;
                        0 === d && (N() || !f || !p || null != (n = null == (t = v.current) ? void 0 : t.contains) && n.call(t, e.target) || null != (o = null == (r = m.current) ? void 0 : r.contains) && o.call(r, e.target) || h({
                            type: 1
                        }))
                    }), !0), K([f, p], ((e, t) => {
                        0 === d && (h({
                            type: 1
                        }), function (e, t = 0) {
                            var n;
                            return e !== (null == (n = I(e)) ? void 0 : n.body) && l(t, {
                                0: () => e.matches(F),
                                1() {
                                    let t = e;
                                    for (; null !== t;) {
                                        if (t.matches(F)) return !0;
                                        t = t.parentElement
                                    }
                                    return !1
                                }
                            })
                        }(t, L.Loose) || (e.preventDefault(), null == f || f.focus()))
                    }));
                    let O = w((e => {
                            h({
                                type: 1
                            });
                            let t = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : f : f;
                            null == t || t.focus()
                        })),
                        j = (0, o.useMemo)((() => ({
                            close: O,
                            isPortalled: g
                        })), [O, g]),
                        C = (0, o.useMemo)((() => ({
                            open: 0 === d,
                            close: O
                        })), [d, O]),
                        T = e,
                        D = {
                            ref: i
                        };
                    return o.createElement(ne.Provider, {
                        value: s
                    }, o.createElement(oe.Provider, {
                        value: j
                    }, o.createElement(_, {
                        value: l(d, {
                            0: B.Open,
                            1: B.Closed
                        })
                    }, c({
                        ourProps: D,
                        theirProps: T,
                        slot: C,
                        defaultTag: "div",
                        name: "Popover"
                    }))))
                })),
                de = p((function (e, t) {
                    let [n, r] = re("Popover.Button"), {
                        isPortalled: a
                    } = le("Popover.Button"), u = (0, o.useRef)(null), i = `headlessui-focus-sentinel-${k()}`, s = ue(), d = null == s ? void 0 : s.closeOthers, f = (0, o.useContext)(ie), p = null !== f && f === n.panelId, v = x(u, t, p ? null : e => r({
                        type: 2,
                        button: e
                    })), m = x(u, t), b = q(u), g = w((e => {
                        var t, o, l;
                        if (p) {
                            if (1 === n.popoverState) return;
                            switch (e.key) {
                                case O.Space:
                                case O.Enter:
                                    e.preventDefault(), null == (o = (t = e.target).click) || o.call(t), r({
                                        type: 1
                                    }), null == (l = n.button) || l.focus()
                            }
                        } else switch (e.key) {
                            case O.Space:
                            case O.Enter:
                                e.preventDefault(), e.stopPropagation(), 1 === n.popoverState && (null == d || d(n.buttonId)), r({
                                    type: 0
                                });
                                break;
                            case O.Escape:
                                if (0 !== n.popoverState) return null == d ? void 0 : d(n.buttonId);
                                if (!u.current || (null == b ? void 0 : b.activeElement) && !u.current.contains(b.activeElement)) return;
                                e.preventDefault(), e.stopPropagation(), r({
                                    type: 1
                                })
                        }
                    })), y = w((e => {
                        p || e.key === O.Space && e.preventDefault()
                    })), P = w((t => {
                        var o, l;
                        j(t.currentTarget) || e.disabled || (p ? (r({
                            type: 1
                        }), null == (o = n.button) || o.focus()) : (t.preventDefault(), t.stopPropagation(), 1 === n.popoverState && (null == d || d(n.buttonId)), r({
                            type: 0
                        }), null == (l = n.button) || l.focus()))
                    })), E = w((e => {
                        e.preventDefault(), e.stopPropagation()
                    })), S = 0 === n.popoverState, N = (0, o.useMemo)((() => ({
                        open: S
                    })), [S]), I = function (e, t) {
                        let [n, r] = (0, o.useState)((() => U(e)));
                        return h((() => {
                            r(U(e))
                        }), [e.type, e.as]), h((() => {
                            n || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
                        }), [n, t]), n
                    }(e, u), F = e, T = p ? {
                        ref: m,
                        type: I,
                        onKeyDown: g,
                        onClick: P
                    } : {
                        ref: v,
                        id: n.buttonId,
                        type: I,
                        "aria-expanded": e.disabled ? void 0 : 0 === n.popoverState,
                        "aria-controls": n.panel ? n.panelId : void 0,
                        onKeyDown: g,
                        onKeyUp: y,
                        onClick: P,
                        onMouseDown: E
                    }, D = J(), A = w((() => {
                        let e = n.panel;
                        e && l(D.current, {
                            [z.Forwards]: () => H(e, C.First),
                            [z.Backwards]: () => H(e, C.Last)
                        })
                    }));
                    return o.createElement(o.Fragment, null, c({
                        ourProps: T,
                        theirProps: F,
                        slot: N,
                        defaultTag: "button",
                        name: "Popover.Button"
                    }), S && !p && a && o.createElement(V, {
                        id: i,
                        features: Y.Focusable,
                        as: "button",
                        type: "button",
                        onFocus: A
                    }))
                })),
                fe = i.RenderStrategy | i.Static,
                pe = p((function (e, t) {
                    let [{
                        popoverState: n
                    }, r] = re("Popover.Overlay"), l = x(t), a = `headlessui-popover-overlay-${k()}`, u = $(), i = null !== u ? u === B.Open : 0 === n, s = w((e => {
                        if (j(e.currentTarget)) return e.preventDefault();
                        r({
                            type: 1
                        })
                    }));
                    return c({
                        ourProps: {
                            ref: l,
                            id: a,
                            "aria-hidden": !0,
                            onClick: s
                        },
                        theirProps: e,
                        slot: (0, o.useMemo)((() => ({
                            open: 0 === n
                        })), [n]),
                        defaultTag: "div",
                        features: fe,
                        visible: i,
                        name: "Popover.Overlay"
                    })
                })),
                ve = i.RenderStrategy | i.Static,
                me = p((function (e, t) {
                    let {
                        focus: n = !1,
                        ...r
                    } = e, [a, u] = re("Popover.Panel"), {
                        close: i,
                        isPortalled: s
                    } = le("Popover.Panel"), d = `headlessui-focus-sentinel-before-${k()}`, f = `headlessui-focus-sentinel-after-${k()}`, p = (0, o.useRef)(null), v = x(p, t, (e => {
                        u({
                            type: 4,
                            panel: e
                        })
                    })), m = q(p), h = $(), b = null !== h ? h === B.Open : 0 === a.popoverState, g = w((e => {
                        var t;
                        if (e.key === O.Escape) {
                            if (0 !== a.popoverState || !p.current || (null == m ? void 0 : m.activeElement) && !p.current.contains(m.activeElement)) return;
                            e.preventDefault(), e.stopPropagation(), u({
                                type: 1
                            }), null == (t = a.button) || t.focus()
                        }
                    }));
                    (0, o.useEffect)((() => {
                        var t;
                        e.static || 1 === a.popoverState && (null == (t = e.unmount) || t) && u({
                            type: 4,
                            panel: null
                        })
                    }), [a.popoverState, e.unmount, e.static, u]), (0, o.useEffect)((() => {
                        if (!n || 0 !== a.popoverState || !p.current) return;
                        let e = null == m ? void 0 : m.activeElement;
                        p.current.contains(e) || H(p.current, C.First)
                    }), [n, p, a.popoverState]);
                    let y = (0, o.useMemo)((() => ({
                            open: 0 === a.popoverState,
                            close: i
                        })), [a, i]),
                        P = {
                            ref: v,
                            id: a.panelId,
                            onKeyDown: g,
                            onBlur: n && 0 === a.popoverState ? e => {
                                var t, n, r, o, l;
                                let i = e.relatedTarget;
                                !i || !p.current || null != (t = p.current) && t.contains(i) || (u({
                                    type: 1
                                }), ((null == (r = null == (n = a.beforePanelSentinel.current) ? void 0 : n.contains) ? void 0 : r.call(n, i)) || (null == (l = null == (o = a.afterPanelSentinel.current) ? void 0 : o.contains) ? void 0 : l.call(o, i))) && i.focus({
                                    preventScroll: !0
                                }))
                            } : void 0,
                            tabIndex: -1
                        },
                        E = J(),
                        S = w((() => {
                            let e = p.current;
                            e && l(E.current, {
                                [z.Forwards]: () => {
                                    H(e, C.First)
                                },
                                [z.Backwards]: () => {
                                    var e;
                                    null == (e = a.button) || e.focus({
                                        preventScroll: !0
                                    })
                                }
                            })
                        })),
                        N = w((() => {
                            let e = p.current;
                            e && l(E.current, {
                                [z.Forwards]: () => {
                                    var e, t, n;
                                    if (!a.button) return;
                                    let r = A(),
                                        o = r.indexOf(a.button),
                                        l = r.slice(0, o + 1),
                                        u = [...r.slice(o + 1), ...l];
                                    for (let i of u.slice())
                                        if ((null == (t = null == (e = null == i ? void 0 : i.id) ? void 0 : e.startsWith) ? void 0 : t.call(e, "headlessui-focus-sentinel-")) || (null == (n = a.panel) ? void 0 : n.contains(i))) {
                                            let e = u.indexOf(i); - 1 !== e && u.splice(e, 1)
                                        } H(u, C.First, !1)
                                },
                                [z.Backwards]: () => H(e, C.Last)
                            })
                        }));
                    return o.createElement(ie.Provider, {
                        value: a.panelId
                    }, b && s && o.createElement(V, {
                        id: d,
                        ref: a.beforePanelSentinel,
                        features: Y.Focusable,
                        as: "button",
                        type: "button",
                        onFocus: S
                    }), c({
                        ourProps: P,
                        theirProps: r,
                        slot: y,
                        defaultTag: "div",
                        features: ve,
                        visible: b,
                        name: "Popover.Panel"
                    }), b && s && o.createElement(V, {
                        id: f,
                        ref: a.afterPanelSentinel,
                        features: Y.Focusable,
                        as: "button",
                        type: "button",
                        onFocus: N
                    }))
                })),
                he = p((function (e, t) {
                    let n = (0, o.useRef)(null),
                        r = x(n, t),
                        [l, a] = (0, o.useState)([]),
                        u = w((e => {
                            a((t => {
                                let n = t.indexOf(e);
                                if (-1 !== n) {
                                    let e = t.slice();
                                    return e.splice(n, 1), e
                                }
                                return t
                            }))
                        })),
                        i = w((e => (a((t => [...t, e])), () => u(e)))),
                        s = w((() => {
                            var e;
                            let t = I(n);
                            if (!t) return !1;
                            let r = t.activeElement;
                            return !(null == (e = n.current) || !e.contains(r)) || l.some((e => {
                                var n, o;
                                return (null == (n = t.getElementById(e.buttonId)) ? void 0 : n.contains(r)) || (null == (o = t.getElementById(e.panelId)) ? void 0 : o.contains(r))
                            }))
                        })),
                        d = w((e => {
                            for (let t of l) t.buttonId !== e && t.close()
                        })),
                        f = (0, o.useMemo)((() => ({
                            registerPopover: i,
                            unregisterPopover: u,
                            isFocusWithinPopoverGroup: s,
                            closeOthers: d
                        })), [i, u, s, d]),
                        p = (0, o.useMemo)((() => ({})), []),
                        v = e,
                        m = {
                            ref: r
                        };
                    return o.createElement(ae.Provider, {
                        value: f
                    }, c({
                        ourProps: m,
                        theirProps: v,
                        slot: p,
                        defaultTag: "div",
                        name: "Popover.Group"
                    }))
                })),
                be = Object.assign(ce, {
                    Button: de,
                    Overlay: pe,
                    Panel: me,
                    Group: he
                });

            function we(e) {
                e.mintPage, e.socials, e.address;
                return (0, r.jsx)(be, {
                    as: "header",
                    className: "relative",
                    children: (0, r.jsx)("div", {
                        className: "py-4",
                        style: {
                            background: "transparent"
                        },
                        children: (0, r.jsx)("nav", {
                            className: "fixed max-w-9xl mx-auto px-8 md:px-0 flex items-center justify-between",
                            "aria-label": "Global",
                            children: (0, r.jsx)("a", {
                                href: "https://twitter.com/idkcoinerc",
                                className: "w-1/3 md:w-1/2 text-ptsd-white text-xs md:text-base font-bold rounded-md",
                                children: (0, r.jsx)("img", {
                                    src: "twitter.png",
                                    className: "rounded-full w-66"
                                })
                            })
                        })
                    })
                })
            }

            function ge() {
                var e = ["wen launch? $idk. %0a%0aapplied: https://www.idkcoinerc.com/%0a%0atoken holders = free mint + airdrop"];
                return (0, r.jsx)("div", {
                    className: "",
                    children: (0, r.jsxs)("div", {
                        className: "mx-auto max-w-4xl lg:px-8 text-center",
                        children: [(0, r.jsx)(we, {}), (0, r.jsxs)("div", {
                            className: "sm:text-center lg:text-center flex flex-col items-center justify-center",
                            style: {
                                height: "100vh"
                            },
                            children: [(0, r.jsx)("img", {
                                src: "body.png",
                                className: "rounded-xl"
                            }), (0, r.jsxs)("div", {
                                className: "mt-10",
                                children: [(0, r.jsx)("h1", {
                                    className: "text-4xl tracking-tight font-extrabold text-ptsd-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-5xl",
                                    children: (0, r.jsx)("span", {
                                        className: "block",
                                        children: "what's this? $IDK"
                                    })
                                }), (0, r.jsx)("p", {
                                    className: "mt-10 text-sm text-ptsd-white sm:mt-5 sm:text-sm lg:text-sm xl:text-sm",
                                    children: "wen is launch? wen airdrop? "
                                }), (0, r.jsx)("div", {
                                    className: "mt-8",
                                    children: (0, r.jsx)("a", {
                                        href: "#",
                                        onClick: function () {
                                            return function () {
                                                var t = Math.floor(Math.random() * e.length),
                                                    n = "https://twitter.com/intent/tweet?text=" + e[t] + "@idkcoinerc";
                                                window.open(n, "_blank")
                                            }()
                                        },
                                        className: "w-40 text-center text-ptsd-dark items-center bg-ptsd-white py-3 px-6 text-base font-medium",
                                        children: "Apply now!"
                                    })
                                }),                                 (0, r.jsx)("p", {
                                    className: "mt-10 text-sm text-ptsd-white sm:mt-5 sm:text-sm lg:text-sm xl:text-sm",
                                    children: "token holders = free mint + airdrop"
                                })]
                            })]
                        })]
                    })
                })
            }

            function ye() {
                return (0, r.jsx)("div", {
                    className: "relative overflow-hidden",
                    children: (0, r.jsx)(ge, {})
                })
            }
        }
    },
    function (e) {
        e.O(0, [774, 888, 179], (function () {
            return t = 48312, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);