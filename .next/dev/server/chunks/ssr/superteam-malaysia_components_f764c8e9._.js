module.exports = [
"[project]/superteam-malaysia/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
;
const logo = '/logo.png';
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return ()=>window.removeEventListener('scroll', onScroll);
    }, []);
    const links = [
        {
            href: '/#mission',
            label: 'Mission'
        },
        {
            href: '/#events',
            label: 'Events'
        },
        {
            href: '/members',
            label: 'Members'
        },
        {
            href: '/#ecosystem',
            label: 'Ecosystem'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        style: {
            background: scrolled ? 'linear-gradient(180deg, rgba(10,18,35,0.98) 0%, rgba(5,12,25,0.95) 100%)' : 'linear-gradient(180deg, rgba(10,18,35,0.85) 0%, rgba(5,12,25,0.6) 100%)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 4px 40px rgba(85,34,223,0.08), 0 1px 0 rgba(255,255,255,0.04)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1440px] mx-auto px-5 md:px-20 h-[70px] md:h-[95px] flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: logo,
                            alt: "Superteam Malaysia",
                            className: "h-[52px] w-[52px] md:h-[80px] md:w-[80px] object-cover rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-6",
                        children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: l.href,
                                className: "text-[#F7EACA] font-medium text-base leading-[1.5] hover:text-[#8FE8C0] transition-colors",
                                style: {
                                    fontFamily: 'Inter, sans-serif'
                                },
                                children: l.label
                            }, l.href, false, {
                                fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "https://discord.gg/superteam",
                            target: "_blank",
                            className: "border border-[#E2D9EE]/80 text-[#FFFBEC] px-6 py-3 rounded-[26px] text-sm font-semibold hover:bg-[#E2D9EE] hover:text-[#00532E] transition-all",
                            style: {
                                fontFamily: 'Archivo, sans-serif'
                            },
                            children: "Join Superteam"
                        }, void 0, false, {
                            fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden text-[#FFF6D9]",
                        onClick: ()=>setMenuOpen(!menuOpen),
                        children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                            lineNumber: 63,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                            lineNumber: 63,
                            columnNumber: 41
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden border-t border-white/5 px-5 py-6 flex flex-col gap-4",
                style: {
                    background: 'linear-gradient(180deg, rgba(10,18,35,0.98) 0%, rgba(5,12,25,0.98) 100%)',
                    backdropFilter: 'blur(16px)'
                },
                children: [
                    links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: l.href,
                            onClick: ()=>setMenuOpen(false),
                            className: "text-[#F7EACA] font-medium text-base py-2 border-b border-white/5",
                            children: l.label
                        }, l.href, false, {
                            fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "https://discord.gg/superteam",
                        target: "_blank",
                        className: "mt-2 border border-[#E2D9EE]/50 text-[#FFFBEC] px-6 py-3 rounded-[26px] text-sm font-semibold text-center",
                        children: "Join Superteam"
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/superteam-malaysia/components/Navbar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/superteam-malaysia/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function RippleCanvas() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let width = canvas.offsetWidth;
        let height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        const CELL = 8;
        const COLS = Math.floor(width / CELL) + 2;
        const ROWS = Math.floor(height / CELL) + 2;
        let cur = new Float32Array(COLS * ROWS);
        let prev = new Float32Array(COLS * ROWS);
        const idx = (x, y)=>y * COLS + x;
        let animId;
        const disturb = (mx, my)=>{
            const cx = Math.floor(mx / CELL);
            const cy = Math.floor(my / CELL);
            if (cx > 0 && cx < COLS - 1 && cy > 0 && cy < ROWS - 1) {
                cur[idx(cx, cy)] += 18;
                cur[idx(cx + 1, cy)] += 9;
                cur[idx(cx - 1, cy)] += 9;
                cur[idx(cx, cy + 1)] += 9;
                cur[idx(cx, cy - 1)] += 9;
            }
        };
        const loop = ()=>{
            // propagate
            for(let y = 1; y < ROWS - 1; y++){
                for(let x = 1; x < COLS - 1; x++){
                    const i = idx(x, y);
                    cur[i] = (prev[idx(x - 1, y)] + prev[idx(x + 1, y)] + prev[idx(x, y - 1)] + prev[idx(x, y + 1)]) / 2 - cur[i];
                    cur[i] *= 0.96;
                }
            }
            ;
            [cur, prev] = [
                prev,
                cur
            ];
            // draw — only edges (gradient of wave = light refraction)
            ctx.clearRect(0, 0, width, height);
            for(let y = 1; y < ROWS - 1; y++){
                for(let x = 1; x < COLS - 1; x++){
                    const gx = prev[idx(x + 1, y)] - prev[idx(x - 1, y)];
                    const gy = prev[idx(x, y + 1)] - prev[idx(x, y - 1)];
                    const mag = Math.min(Math.abs(gx + gy) * 0.15, 1);
                    if (mag < 0.04) continue;
                    ctx.fillStyle = `rgba(143,232,192,${mag * 0.07})`;
                    ctx.fillRect(x * CELL, y * CELL, CELL, CELL);
                }
            }
            animId = requestAnimationFrame(loop);
        };
        animId = requestAnimationFrame(loop);
        const onMove = (e)=>{
            const r = canvas.getBoundingClientRect();
            disturb(e.clientX - r.left, e.clientY - r.top);
        };
        const onTouch = (e)=>{
            const r = canvas.getBoundingClientRect();
            for (const t of Array.from(e.touches))disturb(t.clientX - r.left, t.clientY - r.top);
        };
        const onResize = ()=>{
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            canvas.width = width;
            canvas.height = height;
            cur = new Float32Array(COLS * ROWS);
            prev = new Float32Array(COLS * ROWS);
        };
        canvas.addEventListener('mousemove', onMove);
        canvas.addEventListener('touchmove', onTouch, {
            passive: true
        });
        window.addEventListener('resize', onResize);
        return ()=>{
            cancelAnimationFrame(animId);
            canvas.removeEventListener('mousemove', onMove);
            canvas.removeEventListener('touchmove', onTouch);
            window.removeEventListener('resize', onResize);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 w-full h-full z-10 pointer-events-auto",
        style: {
            mixBlendMode: 'screen'
        }
    }, void 0, false, {
        fileName: "[project]/superteam-malaysia/components/Hero.tsx",
        lineNumber: 94,
        columnNumber: 10
    }, this);
}
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000E08]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none rounded-full",
                style: {
                    top: '-150px',
                    left: '-200px',
                    width: '900px',
                    height: '900px',
                    background: 'radial-gradient(ellipse, rgba(85,34,223,0.45) 0%, transparent 60%)',
                    filter: 'blur(100px)'
                }
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none rounded-full",
                style: {
                    top: '0%',
                    right: '-150px',
                    width: '700px',
                    height: '700px',
                    background: 'radial-gradient(ellipse, rgba(72,185,134,0.35) 0%, transparent 60%)',
                    filter: 'blur(100px)'
                }
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none rounded-full",
                style: {
                    bottom: '-100px',
                    left: '25%',
                    width: '900px',
                    height: '500px',
                    background: 'radial-gradient(ellipse, rgba(72,185,134,0.2) 0%, transparent 65%)',
                    filter: 'blur(80px)'
                }
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RippleCanvas, {}, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 text-center max-w-[727px] mx-auto px-5 pt-20 md:pt-24 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 bg-[#002917]/80 border border-[#48B986]/30 text-[#8FE8C0] px-4 py-1.5 rounded-full text-sm font-semibold font-archivo mb-6 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full bg-[#48B986] animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            "Solana Ecosystem · Malaysia"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-archivo font-semibold text-[32px] md:text-[60px] leading-[1.3] tracking-[-0.64px] md:tracking-[-1.2px] text-[#FFF6D9] mb-4",
                        children: [
                            "Building the Future of",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "gradient-text",
                                children: "Solana"
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "in Malaysia."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#E2D9EE] text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-[623px] mx-auto",
                        children: "A thriving community for developers, creators, and founders building the next generation of Web3 on Solana."
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "https://discord.gg/superteam",
                                target: "_blank",
                                className: "bg-[#E2D9EE] text-[#00532E] px-6 py-3 rounded-full text-sm font-semibold font-archivo hover:bg-white transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center",
                                children: "Join the Community"
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#events",
                                className: "border border-white/50 text-[#FFFBEC] px-6 py-3 rounded-full text-sm font-semibold font-archivo hover:bg-white/10 transition-all hover:-translate-y-0.5 backdrop-blur-sm w-full sm:w-auto text-center",
                                children: "Explore Bounties"
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-8 text-center",
                        children: [
                            [
                                '1000+',
                                'Members'
                            ],
                            [
                                '50+',
                                'Events'
                            ],
                            [
                                '500+',
                                'Projects'
                            ],
                            [
                                '$10M+',
                                'Value Created'
                            ]
                        ].map(([num, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-archivo text-xl md:text-2xl font-semibold text-[#FFF6D9]",
                                        children: num
                                    }, void 0, false, {
                                        fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#807C6F] text-xs md:text-sm mt-0.5",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Hero.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/superteam-malaysia/components/Hero.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
"[project]/superteam-malaysia/components/Stats.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const stats = [
    {
        value: 1000,
        suffix: '+',
        label: 'Community Members'
    },
    {
        value: 50,
        suffix: '+',
        label: 'Events Hosted'
    },
    {
        value: 500,
        suffix: '+',
        label: 'Projects Submitted'
    },
    {
        value: 10,
        prefix: '$',
        suffix: 'M+',
        label: 'Ecosystem Value Created'
    }
];
function useCounter(target, duration = 2000, active) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(()=>{
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else setCount(Math.floor(start));
        }, 16);
        return ()=>clearInterval(timer);
    }, [
        target,
        duration,
        active
    ]);
    return count;
}
function StatItem({ value, suffix, prefix, label }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const count = useCounter(value, 2000, active);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const obs = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) setActive(true);
        }, {
            threshold: 0.5
        });
        if (ref.current) obs.observe(ref.current);
        return ()=>obs.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "text-center flex flex-col gap-1.5 items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-archivo text-[56px] md:text-[80px] font-normal text-[#FFF6D9] tracking-[-1.6px] leading-[1.3]",
                style: {
                    fontVariationSettings: "'wdth' 100"
                },
                children: [
                    prefix,
                    count,
                    suffix
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white/80 text-lg leading-[1.5]",
                style: {
                    fontFamily: 'Inter, sans-serif'
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/superteam-malaysia/components/Stats.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
function Stats() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-20 border-y border-white/5 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none",
                style: {
                    left: '-167px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '993px',
                    height: '354px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full",
                        style: {
                            left: 0,
                            top: 0,
                            width: '425px',
                            height: '352px',
                            background: 'radial-gradient(ellipse, rgba(85,34,223,0.45) 0%, transparent 70%)',
                            filter: 'blur(40px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full",
                        style: {
                            left: '253px',
                            top: 0,
                            width: '427px',
                            height: '354px',
                            background: 'radial-gradient(ellipse, rgba(72,185,134,0.25) 0%, transparent 70%)',
                            filter: 'blur(40px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full",
                        style: {
                            left: '566px',
                            top: 0,
                            width: '426px',
                            height: '352px',
                            background: 'radial-gradient(ellipse, rgba(85,34,223,0.3) 0%, transparent 70%)',
                            filter: 'blur(40px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-[1280px] mx-auto px-5 md:px-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-10 items-center text-center md:text-left md:flex-row md:items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:w-[416px] shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-archivo font-semibold text-[24px] md:text-[32px] text-[#F7EACB] tracking-[-0.64px] mb-4",
                                    children: "Our Growing Ecosystem"
                                }, void 0, false, {
                                    fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#CCCBC5] text-base md:text-lg",
                                    style: {
                                        fontFamily: 'Inter, sans-serif'
                                    },
                                    children: "A vibrant community of builders working together to grow the Solana ecosystem in Malaysia."
                                }, void 0, false, {
                                    fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block w-px self-stretch bg-white/10 mx-4"
                        }, void 0, false, {
                            fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 grid grid-cols-2 gap-x-10 gap-y-10 md:gap-x-16 md:gap-y-[117px] w-full",
                            children: stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                    ...s
                                }, s.label, false, {
                                    fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                                    lineNumber: 83,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Stats.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/superteam-malaysia/components/Stats.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/superteam-malaysia/components/Events.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Events
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// Inline SVG components replacing localhost assets
const DotIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "w-[3px] h-[3px] rounded-full bg-[#9E9E9E] inline-block shrink-0"
    }, void 0, false, {
        fileName: "[project]/superteam-malaysia/components/Events.tsx",
        lineNumber: 6,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
const LocationIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10 2C7.24 2 5 4.24 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 10 5a1.5 1.5 0 0 1 0 3.5z",
            fill: "#B3B0A9"
        }, void 0, false, {
            fileName: "[project]/superteam-malaysia/components/Events.tsx",
            lineNumber: 9,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/superteam-malaysia/components/Events.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const DotNavIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "w-3 h-3 rounded-full border border-[#48B986] inline-block shrink-0"
    }, void 0, false, {
        fileName: "[project]/superteam-malaysia/components/Events.tsx",
        lineNumber: 12,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0));
const lumaEventImg1 = '/events/A6BZf-Zq.jpeg';
const lumaEventImg2 = '/events/HBkTgHMbUAAr_L1.jpeg';
const lumaEventUrl = 'https://luma.com/30ihvi8b';
const events = [
    {
        img: lumaEventImg1,
        timeStart: '11:00 AM',
        timeEnd: '12:00 PM',
        timezone: 'GMT+8',
        title: 'Superteam Malaysia',
        organizer: 'Superteam Malaysia',
        location: 'Malaysia',
        date: 'Mar 14',
        day: 'Saturday',
        lumaUrl: lumaEventUrl
    },
    {
        img: lumaEventImg2,
        timeStart: '11:00 AM',
        timeEnd: '12:00 PM',
        timezone: 'GMT+8',
        title: 'Superteam Malaysia',
        organizer: 'Superteam Malaysia',
        location: 'Malaysia',
        date: 'Mar 14',
        day: 'Saturday',
        lumaUrl: lumaEventUrl
    },
    {
        img: lumaEventImg1,
        timeStart: '11:00 AM',
        timeEnd: '12:00 PM',
        timezone: 'GMT+8',
        title: 'Superteam Malaysia',
        organizer: 'Superteam Malaysia',
        location: 'Malaysia',
        date: 'Mar 14',
        day: 'Saturday',
        lumaUrl: lumaEventUrl
    },
    {
        img: lumaEventImg2,
        timeStart: '11:00 AM',
        timeEnd: '12:00 PM',
        timezone: 'GMT+8',
        title: 'Superteam Malaysia',
        organizer: 'Superteam Malaysia',
        location: 'Malaysia',
        date: 'Mar 14',
        day: 'Saturday',
        lumaUrl: lumaEventUrl
    }
];
function EventCard({ event }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: event.lumaUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex flex-col gap-4 shrink-0 w-[320px] md:w-[530px] group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "backdrop-blur-[12px] border-[0.5px] border-[rgba(128,123,111,0.2)] flex gap-5 h-[190px] items-center pl-3 pr-5 py-3 rounded-xl w-full group-hover:-translate-y-1 transition-transform",
                style: {
                    background: 'linear-gradient(158.523deg, rgba(128,123,111,0.18) 0%, rgba(128,123,111,0.1) 100%)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[166px] rounded-[6px] shrink-0 w-[206px] overflow-hidden relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: event.img,
                            alt: event.title,
                            className: "absolute inset-0 w-full h-full object-cover rounded-[6px]"
                        }, void 0, false, {
                            fileName: "[project]/superteam-malaysia/components/Events.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Events.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col gap-4 items-start justify-center min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 items-start w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-[#9E9E9E] text-sm leading-[1.3] whitespace-nowrap",
                                                style: {
                                                    fontFamily: 'Inter, sans-serif'
                                                },
                                                children: event.timeStart
                                            }, void 0, false, {
                                                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                                                lineNumber: 37,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotIcon, {}, void 0, false, {
                                                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                                                lineNumber: 38,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-[#48B986] text-sm leading-[1.3] whitespace-nowrap",
                                                style: {
                                                    fontFamily: 'Inter, sans-serif'
                                                },
                                                children: [
                                                    event.timeEnd,
                                                    " ",
                                                    event.timezone
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                                                lineNumber: 39,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/superteam-malaysia/components/Events.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-lg text-white leading-[1.5] overflow-hidden text-ellipsis w-full whitespace-nowrap",
                                        style: {
                                            fontFamily: 'Inter, sans-serif'
                                        },
                                        children: event.title
                                    }, void 0, false, {
                                        fileName: "[project]/superteam-malaysia/components/Events.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-[#B3B0A9] text-sm leading-[1.5] whitespace-nowrap",
                                        style: {
                                            fontFamily: 'Inter, sans-serif'
                                        },
                                        children: [
                                            "By ",
                                            event.organizer
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/superteam-malaysia/components/Events.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1.5 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LocationIcon, {}, void 0, false, {
                                                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-[#B3B0A9] text-sm leading-[1.5] whitespace-nowrap",
                                                style: {
                                                    fontFamily: 'Inter, sans-serif'
                                                },
                                                children: event.location
                                            }, void 0, false, {
                                                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/superteam-malaysia/components/Events.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/superteam-malaysia/components/Events.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-medium text-sm text-[#FFF6D9] leading-[1.5]",
                style: {
                    fontFamily: 'Inter, sans-serif'
                },
                children: [
                    event.date,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#99968C]",
                        children: event.day
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Events.tsx",
                        lineNumber: 53,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotNavIcon, {}, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/superteam-malaysia/components/Events.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function Events() {
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = scrollRef.current;
        if (!el) return;
        let paused = false;
        let animId;
        const step = ()=>{
            if (!paused) {
                el.scrollLeft += 0.6;
                // seamless loop: when we've scrolled through the first copy, reset to start
                if (el.scrollLeft >= el.scrollWidth / 2) {
                    el.scrollLeft = 0;
                }
            }
            animId = requestAnimationFrame(step);
        };
        animId = requestAnimationFrame(step);
        el.addEventListener('mouseenter', ()=>{
            paused = true;
        });
        el.addEventListener('mouseleave', ()=>{
            paused = false;
        });
        return ()=>cancelAnimationFrame(animId);
    }, []);
    // Duplicate events for seamless infinite loop
    const looped = [
        ...events,
        ...events
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "events",
        className: "py-20 max-w-[1440px] mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-10 px-5 md:px-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-[24px] md:text-[32px] text-[#FFF6D9] tracking-[-0.24px] md:tracking-[-0.64px] leading-[1.3] mb-4",
                        style: {
                            fontFamily: 'Archivo, sans-serif'
                        },
                        children: "Events & Meetups"
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Events.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#CCCBC5] text-base md:text-lg leading-[1.5] max-w-[668px] mx-auto",
                        style: {
                            fontFamily: 'Inter, sans-serif'
                        },
                        children: "From developer workshops to networking events, we host experiences that bring the Malaysian Web3 community together."
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Events.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex gap-8 overflow-x-hidden pl-5 md:pl-20 pb-4",
                style: {
                    scrollbarWidth: 'none'
                },
                children: looped.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EventCard, {
                        event: e
                    }, i, false, {
                        fileName: "[project]/superteam-malaysia/components/Events.tsx",
                        lineNumber: 105,
                        columnNumber: 31
                    }, this))
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mt-6 px-5 md:px-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: lumaEventUrl,
                    target: "_blank",
                    className: "bg-[#E2D9EE] text-[#00532E] px-6 py-3 rounded-[26px] text-sm font-semibold hover:bg-white transition-all w-full md:w-auto text-center",
                    style: {
                        fontFamily: 'Archivo, sans-serif'
                    },
                    children: "View all Events"
                }, void 0, false, {
                    fileName: "[project]/superteam-malaysia/components/Events.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Events.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/superteam-malaysia/components/Events.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
}),
"[project]/superteam-malaysia/components/Gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
// Community photos from public/community
const photos = [
    {
        src: '/community/HANf8JnakAAhk8Q.jpeg',
        w: 298,
        h: 427
    },
    {
        src: '/community/HC8voTAbwAAFlpN.jpeg',
        w: 437,
        h: 338
    },
    {
        src: '/community/HCoXHsoawAMH-wK.jpeg',
        w: 376,
        h: 427
    },
    {
        src: '/community/HCoXtTUawAEwJSS.jpeg',
        w: 376,
        h: 381
    },
    {
        src: '/community/HANf8JnakAAhk8Q.jpeg',
        w: 437,
        h: 338
    },
    {
        src: '/community/HC8voTAbwAAFlpN.jpeg',
        w: 376,
        h: 381
    }
];
function Gallery() {
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = scrollRef.current;
        if (!el) return;
        let paused = false;
        let animId;
        const step = ()=>{
            if (!paused) {
                el.scrollLeft += 0.6;
                if (el.scrollLeft >= el.scrollWidth / 2) {
                    el.scrollLeft = 0;
                }
            }
            animId = requestAnimationFrame(step);
        };
        animId = requestAnimationFrame(step);
        el.addEventListener('mouseenter', ()=>{
            paused = true;
        });
        el.addEventListener('mouseleave', ()=>{
            paused = false;
        });
        return ()=>cancelAnimationFrame(animId);
    }, []);
    // Duplicate for seamless loop
    const looped = [
        ...photos,
        ...photos
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 max-w-[1440px] mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-10 px-5 md:px-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-[24px] md:text-[32px] text-[#FFF6D9] tracking-[-0.24px] md:tracking-[-0.64px] leading-[1.3] mb-4",
                        style: {
                            fontFamily: 'Archivo, sans-serif'
                        },
                        children: "Moments from Our Community"
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Gallery.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#CCCBC5] text-base md:text-lg leading-[1.5] max-w-[567px] mx-auto",
                        style: {
                            fontFamily: 'Inter, sans-serif'
                        },
                        children: "A glimpse into the builders, events, and collaborations shaping the Solana ecosystem in Malaysia."
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Gallery.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Gallery.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex gap-5 items-end overflow-x-hidden pl-5 md:pl-20 pb-2",
                style: {
                    scrollbarWidth: 'none'
                },
                children: looped.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-[6px] overflow-hidden shrink-0",
                        style: {
                            width: p.w,
                            height: p.h
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: p.src,
                            alt: `Community moment ${i % photos.length + 1}`,
                            className: "absolute inset-0 w-full h-full object-cover rounded-[6px]"
                        }, void 0, false, {
                            fileName: "[project]/superteam-malaysia/components/Gallery.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/superteam-malaysia/components/Gallery.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Gallery.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/superteam-malaysia/components/Gallery.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/superteam-malaysia/components/Testimonials.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const avatars = {
    thiago: '/tweet_images/4ae33aca9a4a0705463227e1612e4fe357fb527d.jpg',
    leticia: '/tweet_images/52e5ce1506bf9220029a42199463b6b9205d66c9.jpg',
    vinicius: '/tweet_images/6f6c2912603fc45ccc5a41dfb12f11f21d357918.jpg',
    gabriel: '/tweet_images/93316f46a53acaf442f2004bc0fc508e369154fa.jpg',
    carol: '/tweet_images/9e9d6808527bc88742d2fa94b57a42f8d010f8e9.jpg',
    leticia2: '/tweet_images/a49c5340fed98584e31a2e3f5e8ecb998627ccab.jpg',
    david: '/tweet_images/e7e0f4b547b5431801af4fb3a246459e18aaa42f.jpg',
    henrique: '/tweet_images/f3d1ba0e4a46c421bd45f021de4aa03c34f345b2.jpg',
    leticia3: '/tweet_images/4ae33aca9a4a0705463227e1612e4fe357fb527d.jpg',
    carol2: '/tweet_images/52e5ce1506bf9220029a42199463b6b9205d66c9.jpg'
};
const col1 = [
    {
        avatar: avatars.thiago,
        name: 'Thiago George',
        handle: '@thiago_sol',
        text: 'Just won my first global bounty with Superteam Brazil! 🥳 The mentorship here is the real deal. From zero to shipping on Solana in 3 months.'
    },
    {
        avatar: avatars.leticia,
        name: 'Letícia Greg',
        handle: '@letscode_br',
        text: "I used to think Rust was intimidating until I joined the Superteam study circles. Fast forward 2 months, and I'm contributing to open-source protocols. 🦀 The peer-to-peer learning model here actually works."
    }
];
const col2 = [
    {
        avatar: avatars.vinicius,
        name: 'Vinícius Santos',
        handle: '@thiago_sol',
        text: 'Superteam Malaysia helped me connect with talented developers and discover real opportunities in the Solana ecosystem.'
    },
    {
        avatar: avatars.gabriel,
        name: 'Gabriel Gabs',
        handle: '@gabs_sol',
        text: 'Joining Superteam Malaysia introduced me to an amazing community of builders and opened doors to real Web3 projects'
    }
];
const col3 = [
    {
        avatar: avatars.carol,
        name: 'Carol David',
        handle: '@carol_web3',
        text: 'Through Superteam Malaysia events and bounties, I gained practical experience building on Solana.'
    },
    {
        avatar: avatars.leticia2,
        name: 'Letícia Greg',
        handle: '@letscode_br',
        text: 'The community is incredibly supportive. Superteam Malaysia made it easy to learn, collaborate, and start building.'
    }
];
const col4 = [
    {
        avatar: avatars.david,
        name: 'David Bradley',
        handle: '@daveey',
        text: 'Thanks to Superteam Malaysia, I met founders and developers who inspired me to launch my first Web3 project.'
    },
    {
        avatar: avatars.henrique,
        name: 'Henrique M.',
        handle: '@henrique_hq',
        text: 'The meetups and workshops helped me understand Solana development and connect with like-minded builders.'
    }
];
const col5 = [
    {
        avatar: avatars.leticia3,
        name: 'Thiago George',
        handle: '@thiago_sol',
        text: 'Superteam Malaysia is the perfect place for anyone interested in Web3 to learn, network, and grow.'
    },
    {
        avatar: avatars.carol2,
        name: 'Letícia Greg',
        handle: '@letscode_br',
        text: 'I discovered new opportunities and amazing collaborators through the Superteam Malaysia community.'
    }
];
function TweetCard({ t, style }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[308px] shrink-0 flex flex-col gap-5 p-5 rounded-xl border border-[rgba(128,123,111,0.2)] backdrop-blur-md",
        style: {
            background: 'linear-gradient(144.932deg, rgba(128,123,111,0.18) 0%, rgba(128,123,111,0.1) 100%)',
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: t.avatar,
                        alt: t.name,
                        className: "w-[53px] h-[53px] rounded-full object-cover shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-base text-[#FFF6D9] leading-[1.3] whitespace-nowrap",
                                style: {
                                    fontFamily: 'Archivo, sans-serif'
                                },
                                children: t.name
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#B3B0A9] text-base leading-[1.5]",
                                style: {
                                    fontFamily: 'Inter, sans-serif'
                                },
                                children: t.handle
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[#E6E5E2] leading-[1.5]",
                style: {
                    fontFamily: 'Inter, sans-serif'
                },
                children: t.text
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function TweetColumn({ tweets }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 h-full",
        children: tweets.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TweetCard, {
                t: t
            }, i, false, {
                fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                lineNumber: 60,
                columnNumber: 29
            }, this))
    }, void 0, false, {
        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function Testimonials() {
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = scrollRef.current;
        if (!el) return;
        let paused = false;
        const step = ()=>{
            if (!paused) {
                el.scrollLeft += 0.5;
                if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
            }
            requestAnimationFrame(step);
        };
        const id = requestAnimationFrame(step);
        el.addEventListener('mouseenter', ()=>{
            paused = true;
        });
        el.addEventListener('mouseleave', ()=>{
            paused = false;
        });
        return ()=>cancelAnimationFrame(id);
    }, []);
    const allCols = [
        col1,
        col2,
        col3,
        col4,
        col5
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none",
                style: {
                    right: '-120px',
                    bottom: '-60px',
                    width: '1013px',
                    height: '682px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full",
                        style: {
                            right: 0,
                            bottom: 0,
                            width: '746px',
                            height: '504px',
                            background: 'radial-gradient(ellipse, rgba(85,34,223,0.35) 0%, transparent 65%)',
                            filter: 'blur(60px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full",
                        style: {
                            right: '30px',
                            bottom: '20px',
                            width: '718px',
                            height: '474px',
                            background: 'radial-gradient(ellipse, rgba(72,185,134,0.15) 0%, transparent 65%)',
                            filter: 'blur(50px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full",
                        style: {
                            right: '-60px',
                            bottom: '120px',
                            width: '972px',
                            height: '659px',
                            background: 'radial-gradient(ellipse, rgba(85,34,223,0.2) 0%, transparent 60%)',
                            filter: 'blur(80px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none",
                style: {
                    right: '-100px',
                    top: '-40px',
                    width: '993px',
                    height: '354px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full",
                        style: {
                            left: 0,
                            top: 0,
                            width: '425px',
                            height: '352px',
                            background: 'radial-gradient(ellipse, rgba(85,34,223,0.3) 0%, transparent 70%)',
                            filter: 'blur(40px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full",
                        style: {
                            left: '253px',
                            top: 0,
                            width: '427px',
                            height: '354px',
                            background: 'radial-gradient(ellipse, rgba(100,50,230,0.25) 0%, transparent 70%)',
                            filter: 'blur(40px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full",
                        style: {
                            left: '566px',
                            top: 0,
                            width: '426px',
                            height: '352px',
                            background: 'radial-gradient(ellipse, rgba(85,34,223,0.2) 0%, transparent 70%)',
                            filter: 'blur(40px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-[1280px] mx-auto px-5 md:px-20 mb-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-[24px] md:text-[32px] text-[#FFF6D9] tracking-[-0.64px] leading-[1.3] mb-4",
                        style: {
                            fontFamily: 'Archivo, sans-serif'
                        },
                        children: "What the Community Says"
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#CCCBC5] text-base md:text-lg leading-[1.5] max-w-[636px] mx-auto",
                        style: {
                            fontFamily: 'Inter, sans-serif'
                        },
                        children: "Builders, founders, and developers share their experiences with the Solana Malaysia community."
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "relative z-10 flex gap-4 overflow-x-hidden px-5 md:px-20 h-[320px] md:h-[452px] items-center",
                style: {
                    scrollbarWidth: 'none'
                },
                children: [
                    ...allCols,
                    ...allCols
                ].map((col, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TweetColumn, {
                        tweets: col
                    }, i, false, {
                        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/superteam-malaysia/components/Testimonials.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
"[project]/superteam-malaysia/components/FAQ.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
'use client';
;
;
;
const faqs = [
    {
        id: '1',
        question: 'What is Superteam Malaysia?',
        answer: 'Superteam Malaysia is the local chapter of the global Superteam network, dedicated to empowering builders, creators, founders, and talent in the Solana ecosystem. We connect talent with opportunities and grow the Web3 ecosystem through events, education, and collaboration.'
    },
    {
        id: '2',
        question: 'How do I join?',
        answer: 'Join our Discord or Telegram community, attend our events, and start participating in bounties and discussions. You can also apply to become a verified member through our website.'
    },
    {
        id: '3',
        question: 'What opportunities are available?',
        answer: 'We offer bounties, hackathons, grants, mentorship programs, job referrals, and networking opportunities with leading Solana projects globally.'
    },
    {
        id: '4',
        question: 'How can projects collaborate with us?',
        answer: 'Projects can partner with us to run bounties, sponsor events, access our talent pool, and co-create educational content. Reach out via our contact form or Discord.'
    },
    {
        id: '5',
        question: 'Do I need to be a developer to join?',
        answer: 'Not at all! We welcome designers, content creators, marketers, business developers, and anyone passionate about Web3 and the Solana ecosystem.'
    }
];
function FAQRow({ item }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setOpen(!open),
        className: "w-full text-left p-6 md:p-8 rounded-xl border border-[rgba(128,123,111,0.2)] backdrop-blur-md transition-all",
        style: {
            background: open ? 'linear-gradient(169.147deg, rgba(128,123,111,0.18) 0%, rgba(128,123,111,0.1) 100%)' : 'linear-gradient(175.079deg, rgba(128,123,111,0.18) 0%, rgba(128,123,111,0.1) 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-lg text-[#F7EACB]",
                        children: item.question
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        size: 24,
                        className: "text-[#F7EACB] shrink-0 mt-0.5"
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 24,
                        className: "text-[#F7EACB] shrink-0 mt-0.5"
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
                        lineNumber: 20,
                        columnNumber: 86
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-5 text-base text-[#B3AFA9] leading-relaxed",
                children: item.answer
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function FAQ() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-5 md:px-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1064px] mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-archivo font-semibold text-[32px] text-[#FFF6D9] tracking-[-0.64px] mb-4",
                            children: "FAQ"
                        }, void 0, false, {
                            fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#CCCBC5] text-lg max-w-[636px] mx-auto",
                            children: "New to the ecosystem? Here is how we help the best talent in Malaysia transition into the world of Solana."
                        }, void 0, false, {
                            fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: faqs.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQRow, {
                            item: f
                        }, f.id, false, {
                            fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
                            lineNumber: 40,
                            columnNumber: 26
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/superteam-malaysia/components/FAQ.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/superteam-malaysia/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/superteam-malaysia/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
const imgLogo = '/logo.png';
// Inline social icons
const InstagramIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "5",
                stroke: "#B3B0A9",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4",
                stroke: "#B3B0A9",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                lineNumber: 10,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.5",
                cy: "6.5",
                r: "1",
                fill: "#B3B0A9"
            }, void 0, false, {
                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const TwitterXIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15.27 2h2.6l-5.68 6.49L19 18h-5.23l-4.1-5.37L4.9 18H2.3l6.08-6.95L1 2h5.36l3.71 4.86L15.27 2zm-.91 14.38h1.44L5.7 3.47H4.15l10.21 12.91z",
            fill: "#B3B0A9"
        }, void 0, false, {
            fileName: "[project]/superteam-malaysia/components/Footer.tsx",
            lineNumber: 16,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const LinkedinIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4.5 7h-3v10h3V7zM3 5.5A1.5 1.5 0 1 0 3 2.5 1.5 1.5 0 0 0 3 5.5zM19.5 17h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V17h-3V7h3v1.5c.8-1.2 2.1-1.5 3-1.5 2.2 0 4 1.8 4 4V17z",
            fill: "#B3B0A9"
        }, void 0, false, {
            fileName: "[project]/superteam-malaysia/components/Footer.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const DiscordIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
            fill: "#B3B0A9"
        }, void 0, false, {
            fileName: "[project]/superteam-malaysia/components/Footer.tsx",
            lineNumber: 26,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const TelegramIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.12.56-.46.7-.93.43l-2.57-1.89-1.24 1.19c-.14.14-.25.25-.51.25l.18-2.6 4.72-4.26c.2-.18-.05-.28-.32-.1L7.4 14.53l-2.52-.79c-.55-.17-.56-.55.12-.81l9.85-3.8c.46-.17.86.11.79.67z",
            fill: "#B3B0A9"
        }, void 0, false, {
            fileName: "[project]/superteam-malaysia/components/Footer.tsx",
            lineNumber: 31,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const socials = [
    {
        href: 'https://instagram.com/superteammy',
        Icon: InstagramIcon,
        label: 'Instagram'
    },
    {
        href: 'https://twitter.com/SuperteamMY',
        Icon: TwitterXIcon,
        label: 'Twitter'
    },
    {
        href: 'https://linkedin.com/company/superteam-malaysia',
        Icon: LinkedinIcon,
        label: 'LinkedIn'
    },
    {
        href: 'https://discord.gg/superteam',
        Icon: DiscordIcon,
        label: 'Discord'
    },
    {
        href: 'https://t.me/superteammalaysia',
        Icon: TelegramIcon,
        label: 'Telegram'
    }
];
const navLinks = [
    {
        href: '/#members',
        label: 'Members'
    },
    {
        href: '/#events',
        label: 'Earn'
    },
    {
        href: '/#mission',
        label: 'Grants'
    }
];
const externalLinks = [
    {
        href: '/#events',
        label: 'Events'
    },
    {
        href: 'mailto:hello@superteam.my',
        label: 'Contact Us'
    },
    {
        href: 'https://superteam.fun',
        label: 'Global Superteam'
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-[rgba(128,123,111,0.2)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden px-5 py-8 flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: imgLogo,
                            alt: "Superteam Malaysia",
                            className: "h-14 w-auto"
                        }, void 0, false, {
                            fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-[rgba(128,123,111,0.2)]"
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            ...navLinks,
                            ...externalLinks
                        ].map(({ href, label })=>href.startsWith('http') || href.startsWith('mailto') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: href,
                                target: href.startsWith('http') ? '_blank' : undefined,
                                rel: "noopener noreferrer",
                                className: "font-medium text-base text-[#FFF6D9] leading-[1.5] hover:text-[#48B986] transition-colors",
                                style: {
                                    fontFamily: 'Inter, sans-serif'
                                },
                                children: label
                            }, label, false, {
                                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                className: "font-medium text-base text-[#FFF6D9] leading-[1.5] hover:text-[#48B986] transition-colors",
                                style: {
                                    fontFamily: 'Inter, sans-serif'
                                },
                                children: label
                            }, label, false, {
                                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-[rgba(128,123,111,0.2)]"
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-sm text-[#FFF6D9] leading-[1.5]",
                                style: {
                                    fontFamily: 'Archivo, sans-serif'
                                },
                                children: "Subscribe to our Newsletter"
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: (e)=>e.preventDefault(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#001C0F] border-[0.5px] border-[#00371E] h-[38px] rounded-[9px] w-full flex items-center px-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        placeholder: "Enter your email",
                                        className: "bg-transparent w-full text-sm text-[#E6E5E2] placeholder-[#99968C] outline-none",
                                        style: {
                                            fontFamily: 'Inter, sans-serif'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6 items-center",
                        children: socials.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: s.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": s.label,
                                className: "hover:opacity-80 transition-opacity shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(s.Icon, {}, void 0, false, {
                                    fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            }, s.label, false, {
                                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium text-sm text-[#807C6F] leading-[1.5]",
                        style: {
                            fontFamily: 'Inter, sans-serif'
                        },
                        children: "@Superteam Malaysia 2026"
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:grid max-w-[1440px] mx-auto px-20 py-8 grid-cols-[auto_1fr_auto] gap-[72px] items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imgLogo,
                                    alt: "Superteam Malaysia",
                                    className: "h-14 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#807C6F] text-sm leading-relaxed max-w-[220px]",
                                style: {
                                    fontFamily: 'Inter, sans-serif'
                                },
                                children: "The home for Solana builders in Malaysia. Learn, earn, build, and connect."
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-[72px] items-start pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-5",
                                children: navLinks.map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: href,
                                        className: "font-medium text-base text-[#FFF6D9] leading-[1.5] hover:text-[#48B986] transition-colors whitespace-nowrap",
                                        style: {
                                            fontFamily: 'Inter, sans-serif'
                                        },
                                        children: label
                                    }, label, false, {
                                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-5 w-40",
                                children: externalLinks.map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: href,
                                        target: href.startsWith('http') ? '_blank' : undefined,
                                        rel: "noopener noreferrer",
                                        className: "font-medium text-base text-[#FFF6D9] leading-[1.5] hover:text-[#48B986] transition-colors whitespace-nowrap",
                                        style: {
                                            fontFamily: 'Inter, sans-serif'
                                        },
                                        children: label
                                    }, label, false, {
                                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-5 w-[296px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-sm text-[#FFF6D9] leading-[1.5]",
                                        style: {
                                            fontFamily: 'Archivo, sans-serif'
                                        },
                                        children: "Subscribe to our Newsletter"
                                    }, void 0, false, {
                                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: (e)=>e.preventDefault(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#001C0F] border-[0.5px] border-[#00371E] h-[38px] rounded-[9px] w-full flex items-center px-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                placeholder: "Enter your email",
                                                className: "bg-transparent w-full text-sm text-[#E6E5E2] placeholder-[#99968C] outline-none",
                                                style: {
                                                    fontFamily: 'Inter, sans-serif'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6 items-center",
                                children: socials.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: s.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": s.label,
                                        className: "hover:opacity-80 transition-opacity shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(s.Icon, {}, void 0, false, {
                                            fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this)
                                    }, s.label, false, {
                                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex border-t border-[rgba(128,123,111,0.2)] px-20 py-5 justify-between items-center max-w-[1440px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium text-base text-[#807C6F] leading-[1.5]",
                        style: {
                            fontFamily: 'Inter, sans-serif'
                        },
                        children: "@Superteam Malaysia 2026"
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$superteam$2d$malaysia$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://superteam.fun",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-[#807C6F] text-sm hover:text-[#8FE8C0] transition-colors",
                        children: "Part of the Global Superteam Network →"
                    }, void 0, false, {
                        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/superteam-malaysia/components/Footer.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/superteam-malaysia/components/Footer.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=superteam-malaysia_components_f764c8e9._.js.map