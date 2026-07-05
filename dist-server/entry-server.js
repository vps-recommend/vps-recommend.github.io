import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { renderToString } from "react-dom/server";
import { Link, Outlet, Routes, Route, StaticRouter } from "react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Layout() {
  return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "bg-white border-b border-gray-200 sticky top-0 z-50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-8", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-xl font-bold text-blue-600", children: "VPS推荐" }, void 0, false, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { className: "hidden md:flex gap-6", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-gray-600 hover:text-blue-600 font-medium", children: "首页" }, void 0, false, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 14,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-1", children: /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "footer",
      {
        className: "relative overflow-hidden text-white py-14 mt-auto text-sm",
        style: {
          background: "radial-gradient(circle at 18% 15%, rgba(0, 163, 255, .55), transparent 28%), radial-gradient(circle at 85% 12%, rgba(0, 87, 255, .45), transparent 30%), linear-gradient(135deg, #06133d 0%, #07195d 46%, #03236f 100%)"
        },
        children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "absolute inset-0 pointer-events-none opacity-45",
              style: {
                backgroundImage: "linear-gradient(115deg, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(25deg, rgba(0,163,255,.18) 1px, transparent 1px)",
                backgroundSize: "90px 90px, 140px 140px"
              }
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 33,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold mb-4 text-white", children: "本站介绍" }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 45,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-blue-100/80 leading-relaxed", children: "VPS推荐致力于为您提供最新、最真实的 VPS 选购指南。无论是新手建站、外贸独立站还是免备案内容站，我们都能帮您找到最适合的服务器方案。" }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 46,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 44,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold mb-4 text-white", children: "快速链接" }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 53,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-blue-100/80 hover:text-white transition-colors", children: "关于我们" }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 55,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-blue-100/80 hover:text-white transition-colors", children: "联系我们" }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 56,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 54,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 52,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold mb-4 text-white", children: "地区导航" }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 62,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-blue-100/80 hover:text-white transition-colors", children: "香港 VPS" }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 64,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-blue-100/80 hover:text-white transition-colors", children: "美国 VPS" }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 65,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-blue-100/80 hover:text-white transition-colors", children: "韩国 VPS" }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 66,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 63,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 61,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold mb-4 text-white", children: "产品推荐" }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 72,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-blue-100/80 hover:text-white transition-colors", children: "搬瓦工 (Bandwagon)" }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 74,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-blue-100/80 hover:text-white transition-colors", children: "丽莎主机" }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 75,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 73,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 71,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "pt-8 border-t border-white/10 text-center text-blue-100/60", children: /* @__PURE__ */ jsxDEV("p", { children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " VPS推荐. All rights reserved."
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 26,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/Layout.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
function VpsRecommend() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "VPS推荐：新手建站、外贸网站主机怎么选？" }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "新手买 VPS 怎么选？本文按学习测试、个人建站、外贸网站、国内访问、免备案中文站等场景，讲清 VPS 配置、预算、便宜 VPS 使用边界，以及搬瓦工主机适合哪些用户。" }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "VPS推荐, 便宜VPS, 搬瓦工, 外贸建站, WordPress主机, 香港VPS, 美国VPS, 丽莎主机" }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://yourdomain.com/" }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://yourdomain.com/"
        },
        "headline": "VPS推荐：新手建站、外贸网站主机怎么选？",
        "description": "新手买 VPS 怎么选？本文按学习测试、个人建站、外贸网站、国内访问、免备案中文站等场景，讲清 VPS 配置、预算、便宜 VPS 使用边界，以及搬瓦工主机适合哪些用户。",
        "author": {
          "@type": "Person",
          "name": "VPS推荐"
        },
        "publisher": {
          "@type": "Organization",
          "name": "VPS推荐",
          "logo": {
            "@type": "ImageObject",
            "url": "https://yourdomain.com/logo.png"
          }
        },
        "datePublished": "2024-03-01T08:00:00+08:00",
        "dateModified": "2024-03-01T08:00:00+08:00"
      }) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-wrap", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "vpsrec-hero", id: "top", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-container vpsrec-hero-grid", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-kicker", children: "VPS 选购决策指南" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { children: "VPS推荐：新手建站、外贸网站和低价 VPS 怎么选？" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "买 VPS，先看用途，再看配置和线路。学习测试可以买低价年付，个人 WordPress 建议 1核2G 起步，正式业务站更适合 2核2G，国内访问和免备案中文站可以重点看搬瓦工、DMIT 这类优化线路 VPS。" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-hero-actions", children: [
            /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-btn vpsrec-btn-primary", href: "#recommend", children: "查看推荐表" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 51,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-btn vpsrec-btn-ghost", href: "#bandwagon", children: "搬瓦工适合谁？" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 52,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-hero-card", children: [
          /* @__PURE__ */ jsxDEV("h3", { children: "新手先看这 4 句话" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "vpsrec-answer-list", children: [
            /* @__PURE__ */ jsxDEV("li", { children: [
              /* @__PURE__ */ jsxDEV("span", { children: "1" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 59,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "学习测试：" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 59,
                  columnNumber: 40
                }, this),
                "选低价年付 VPS，1核1G / 1核2G 就够。"
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 59,
                columnNumber: 35
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 59,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: [
              /* @__PURE__ */ jsxDEV("span", { children: "2" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 60,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "个人 WordPress：" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 60,
                  columnNumber: 40
                }, this),
                "建议 1核2G 起步，后台和插件会更舒服。"
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 60,
                columnNumber: 35
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 60,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: [
              /* @__PURE__ */ jsxDEV("span", { children: "3" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 61,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "企业官网 / 外贸站：" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 61,
                  columnNumber: 40
                }, this),
                "建议 2核2G 起步，重点看稳定和备份。"
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 61,
                columnNumber: 35
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 61,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: [
              /* @__PURE__ */ jsxDEV("span", { children: "4" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 62,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "国内访问 / 免备案中文站：" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 62,
                  columnNumber: 40
                }, this),
                "重点看优化线路，搬瓦工可以优先考虑。"
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 62,
                columnNumber: 35
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 62,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 58,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { className: "vpsrec-nav", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-container", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-nav-inner", children: [
        /* @__PURE__ */ jsxDEV("a", { href: "#recommend", children: "快速推荐" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#check", children: "购买判断" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#config", children: "配置推荐" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#usecase", children: "用途选择" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#bandwagon", children: "搬瓦工" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#budget", children: "预算" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#cheap", children: "便宜 VPS" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#manage", children: "不会运维" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#faq", children: "FAQ" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "vpsrec-section", id: "recommend", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-container", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-section-title", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-label", children: "Quick Answer" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { children: "一、先给答案：新手买 VPS 按用途这样选" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "这张表先解决方向问题。它不是商家排行榜，而是帮你判断自己该买哪一类 VPS。" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-table-wrap", children: /* @__PURE__ */ jsxDEV("table", { className: "vpsrec-table", children: [
          /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDEV("th", { children: "你的需求" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 96,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { children: "直接建议" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 97,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { children: "推荐配置" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 98,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { children: "代表方向" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 99,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 95,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("tbody", { children: [
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "学习 Linux / 测试项目" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 104,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "低价年付 VPS，便宜、可重装、可折腾" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 105,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "1核1G / 1核2G" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 106,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: [
                "RackNerd、CloudCone 类",
                /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-table-actions", children: [
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/go/racknerd/", children: "查看 RackNerd" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 110,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/go/cloudcone/", children: "查看 CloudCone" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 111,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 109,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 107,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 103,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "个人博客 / 小型 WordPress" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 116,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "稳定型 VPS，后台体验更舒服" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 117,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "1核2G 起步" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 118,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: [
                "Vultr、Linode、DigitalOcean 类",
                /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-table-actions", children: [
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/go/vultr/", children: "查看 Vultr" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 122,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/go/linode/", children: "查看 Linode" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 123,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 121,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 119,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 115,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "企业官网 / 内容站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 128,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "稳定云服务器，先看备份和续费" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 129,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "2核2G 起步" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 130,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: [
                "DigitalOcean、Vultr、阿里云、腾讯云类",
                /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-table-actions", children: [
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/go/digitalocean/", children: "查看 DigitalOcean" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 134,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/go/aliyun/", children: "查看阿里云" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 135,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 133,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 131,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "外贸独立站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 140,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "按客户所在地选机房" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 141,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "2核2G 起步" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 142,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: [
                "美国 / 欧洲 / 新加坡节点，Cloudways 类",
                /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-table-actions", children: [
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/go/cloudways/", children: "查看 Cloudways" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 146,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/foreign-trade-vps/", children: "外贸 VPS 方案" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 147,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 145,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 143,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 139,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "国内用户访问" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 152,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "国内云、香港 VPS 或优化线路 VPS" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 153,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "1核2G 起步" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 154,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: [
                "阿里云、腾讯云、搬瓦工、DMIT 类",
                /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-table-actions", children: [
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/go/bandwagonhost/", children: "查看搬瓦工" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 158,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/go/dmit/", children: "查看 DMIT" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 159,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 157,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 155,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 151,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "免备案中文站 / WordPress 站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 164,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "海外优化线路 VPS" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 165,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "1核2G / 2核2G" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 166,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: [
                "搬瓦工 CN2 GIA-E、DMIT 类",
                /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-table-actions", children: [
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/go/bandwagonhost/", children: "查看搬瓦工" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 170,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/bandwagonhost-vps/", children: "搬瓦工怎么选" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 171,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 169,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 167,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 163,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "不会运维" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 176,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "托管型 VPS 或带面板方案" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 177,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "2G 起步" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 178,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: [
                "Cloudways、宝塔、aaPanel、1Panel",
                /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-table-actions", children: [
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/go/cloudways/", children: "查看 Cloudways" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 182,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/vps-control-panel/", children: "面板方案" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 183,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 181,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 179,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 175,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-callout", children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "直接判断：" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 192,
            columnNumber: 15
          }, this),
          "只是学习、练手、测试环境，低价 VPS 很合适。准备做 WordPress 博客、小型内容站，1核2G 是比较舒服的起步线。企业官网、外贸询盘站、客户项目，直接看 2核2G 起步。面向中国大陆用户，又想走海外免备案路线，搬瓦工主机可以放进重点候选。"
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "vpsrec-section vpsrec-section-light", id: "check", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-container", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-section-title", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-label", children: "Before Buying" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 200,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { children: "二、买 VPS 前，先确认这 5 个关键点" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 201,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "买 VPS 前先把这 5 个问题想清楚，后面选商家、配置、机房都会容易很多。" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 202,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 199,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-grid-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card vpsrec-step", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-step-num", children: "1" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 207,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { children: "先确定用途" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 209,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { children: "学习测试看低价，个人建站看稳定，正式业务看恢复能力，外贸站看客户体验，中文站看线路。" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 210,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 208,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card vpsrec-step", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-step-num", children: "2" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 215,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { children: "再确定访客地区" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 217,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { children: "客户在哪里，机房就往哪里靠。美国客户优先美国机房，欧洲客户优先欧洲节点，国内用户重点看备案和线路。" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 218,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 216,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 214,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card vpsrec-step", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-step-num", children: "3" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 223,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { children: "配置要够用" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 225,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { children: "1核1G 适合练手，WordPress 建议 1核2G 起步，企业站和外贸站更适合 2核2G。" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 226,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 224,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 222,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card vpsrec-step", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-step-num", children: "4" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 231,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { children: "预算看长期" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 233,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { children: "低价年付适合测试，正式网站要看续费、退款、快照、备份和迁移成本。" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 234,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 232,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 230,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card vpsrec-step", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-step-num", children: "5" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 239,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { children: "备份放在上线前" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 241,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { children: "客户网站、外贸询盘站、长期内容站，上线前先准备快照、自动备份或异地备份。" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 242,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 240,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 238,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "搬瓦工的判断点" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 247,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "搬瓦工更适合国内访问优化需求。它和 RackNerd、CloudCone 这类低价年付 VPS 是两种买法。后者适合学习和测试，搬瓦工更适合长期建站、在意国内打开速度、愿意为线路质量多付预算的用户。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 248,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 246,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 198,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "vpsrec-section", id: "config", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-container", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-section-title", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-label", children: "Configuration" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 257,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { children: "三、VPS 配置推荐：多大配置适合多少访问量？" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 258,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "配置不要只看数字。1核1G、1核2G、2核2G 的差别，体现在后台流畅度、数据库响应、插件运行和后期扩展上。" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 259,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-callout", children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "默认建议：" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 263,
            columnNumber: 15
          }, this),
          "个人 WordPress 从 1核2G 起步；企业官网、外贸站、长期内容站更适合 2核2G；多站点和插件较多的网站看 2核4G；学习测试用 1核1G / 1核2G 就够。"
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 262,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-table-wrap", children: /* @__PURE__ */ jsxDEV("table", { className: "vpsrec-table", children: [
          /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDEV("th", { children: "用途" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 270,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { children: "推荐配置" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 271,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { children: "粗略流量参考" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 272,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { children: "说明" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 273,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 269,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 268,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("tbody", { children: [
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "学习测试" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 278,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "1核1G / 1核2G" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 279,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "不按访问量判断" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 280,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "主要用于练手、测试环境" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 281,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 277,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "个人博客" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 284,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "1核2G" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 285,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "日均几百到一两千访问" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 286,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "前提是缓存、图片优化做好" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 287,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 283,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "小型内容站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 290,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "1核2G / 2核2G" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 291,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "日均一两千到数千访问" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 292,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "插件多、数据库大时提前升级" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 293,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 289,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "企业官网" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 296,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "2核2G 起步" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 297,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "低到中等访问量" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 298,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "更看重稳定和后台流畅" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 299,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 295,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "外贸询盘站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 302,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "2核2G / 2核4G" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 303,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "访问量未必大，但要求稳定" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 304,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "表单、邮件、SSL、询盘链路要稳" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 305,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 301,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "免备案中文站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 308,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "1核2G / 2核2G" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 309,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "看内容量和访问地区" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 310,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "重点看线路、缓存和晚高峰" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 311,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 307,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("td", { children: "多站点" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 314,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "2核4G 起步" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 315,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "看站点数量和插件负载" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 316,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("td", { children: "需要预留扩展空间" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 317,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 313,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 276,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 267,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 266,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-grid-2", style: { marginTop: "24px" }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "1核1G：适合练手和轻量测试" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 325,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "1核1G 的价值在于低成本练手。你可以拿它装系统、测试面板、跑脚本、试 WordPress。刚接触 VPS 的新手，用它熟悉 SSH、系统重装、面板安装、网站部署，很合适。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 326,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "WordPress 一旦开了面板、数据库、PHP，再加几个插件，后台变慢很常见。所以 1核1G 更适合测试。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 327,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 324,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "1核2G：新手建站更舒服" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 331,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "1核2G 是新手建站比较舒服的起步线。普通博客、小型 WordPress、个人内容站，只要缓存做好、图片别太重，通常能跑得比较稳。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 332,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "做个人博客、内容站、轻量 WordPress，1核2G 会让后台操作、插件更新、缓存生成都更顺。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 333,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 330,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "2核2G：正式网站更稳" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 337,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "2核2G 更适合企业官网、外贸询盘站、小型内容站。后台操作、缓存生成、数据库响应都会更舒服。网站有商业价值时，我更倾向从 2核2G 开始。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 338,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 336,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "2核4G：长期项目更舒服" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 342,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "2核4G 适合多站点、插件较多、图片较多、访问增长明显的网站。很多人前期为了省配置，后期频繁迁移，其实不如一开始留一点空间。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 343,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 341,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 323,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 255,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "vpsrec-section vpsrec-section-dark", id: "usecase", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-container", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-section-title", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-label", children: "Use Cases" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 352,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { children: "四、按用途推荐 VPS：6 类用户分别怎么选？" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 353,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "这里按真实购买场景来分流。你属于哪一类，就按那一类去看 VPS。" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 354,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 351,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-grid-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "1. 学习测试型 VPS" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 359,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-badge", children: "适合" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 360,
                columnNumber: 20
              }, this),
              "学习 Linux、安装面板、测试 WordPress、跑小工具。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 360,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "推荐方向：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 361,
                columnNumber: 20
              }, this),
              "低价年付 VPS，RackNerd、CloudCone 类。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 361,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { children: [
              /* @__PURE__ */ jsxDEV("li", { children: "核心是低成本试错" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 363,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "适合重装、折腾、练手" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 364,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "重要数据先做备份" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 365,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 362,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card-actions", children: [
              /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/cheap-vps-recommendation/", children: "查看低价 VPS" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 368,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/go/racknerd/", children: "RackNerd" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 369,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 367,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 358,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "2. 个人建站型 VPS" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 374,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-badge", children: "适合" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 375,
                columnNumber: 20
              }, this),
              "个人博客、小型 WordPress、作品集、轻量内容站。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 375,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "推荐配置：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 376,
                columnNumber: 20
              }, this),
              "1核2G 起步。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 376,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { children: [
              /* @__PURE__ */ jsxDEV("li", { children: "后台体验比最低价更重要" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 378,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "内容多了以后要看数据库和缓存" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 379,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "国内访问可看搬瓦工" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 380,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 377,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card-actions", children: [
              /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/go/vultr/", children: "查看 Vultr" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 383,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/go/bandwagonhost/", children: "国内访问看搬瓦工" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 384,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 382,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 373,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "3. 正式业务型 VPS" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 389,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-badge", children: "适合" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 390,
                columnNumber: 20
              }, this),
              "企业官网、客户网站、长期内容站、小型业务系统。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 390,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "优先级：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 391,
                columnNumber: 20
              }, this),
              "稳定性 ",
              ">",
              " 备份 ",
              ">",
              " 续费成本 ",
              ">",
              " 配置 ",
              ">",
              " 首购价格。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 391,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { children: [
              /* @__PURE__ */ jsxDEV("li", { children: "先考虑能否恢复" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 393,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "再看续费和迁移成本" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 394,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "国内访问可纳入搬瓦工、DMIT" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 395,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 392,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card-actions", children: [
              /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/go/digitalocean/", children: "查看 DigitalOcean" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 398,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/go/aliyun/", children: "国内业务看阿里云" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 399,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 397,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 388,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "4. 外贸建站型 VPS" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 404,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-badge", children: "适合" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 405,
                columnNumber: 20
              }, this),
              "外贸官网、英文站、B2B 询盘站、跨境业务网站。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 405,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "判断：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 406,
                columnNumber: 20
              }, this),
              "客户在哪里，机房就靠哪里。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 406,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { children: [
              /* @__PURE__ */ jsxDEV("li", { children: "美国客户优先美国节点" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 408,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "欧洲客户优先欧洲节点" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 409,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "全球访问可以配合 CDN" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 410,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 407,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card-actions", children: [
              /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/go/cloudways/", children: "查看 Cloudways" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 413,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/foreign-trade-vps/", children: "外贸 VPS 方案" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 414,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 412,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 403,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "5. 国内访问型 VPS" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 419,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-badge", children: "适合" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 420,
                columnNumber: 20
              }, this),
              "中文博客、WordPress 内容站、免备案网站、面向大陆用户的网站。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 420,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "推荐方向：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 421,
                columnNumber: 20
              }, this),
              "能备案看国内云；免备案看香港 VPS、搬瓦工、DMIT。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 421,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { children: [
              /* @__PURE__ */ jsxDEV("li", { children: "重点看线路质量" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 423,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "晚高峰测试很关键" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 424,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "搬瓦工是重点候选" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 425,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 422,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card-actions", children: [
              /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/go/bandwagonhost/", children: "查看搬瓦工" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 428,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/go/dmit/", children: "查看 DMIT" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 429,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 427,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 418,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "6. 省心托管型 VPS" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 434,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-badge", children: "适合" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 435,
                columnNumber: 20
              }, this),
              "不会 Linux、不想配置环境、只想快速建站的人。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 435,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "推荐方向：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 436,
                columnNumber: 20
              }, this),
              "Cloudways、托管型 WordPress 主机、带自动备份的云主机方案。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 436,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { children: [
              /* @__PURE__ */ jsxDEV("li", { children: "价格更高，但省维护时间" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 438,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "适合小团队和外贸站长" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 439,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "正式网站仍然要看备份" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 440,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 437,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card-actions", children: [
              /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn vpsrec-linkbtn-solid", href: "/go/cloudways/", children: "查看 Cloudways" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 443,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-linkbtn", href: "/vps-control-panel/", children: "面板方案" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 444,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 442,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 433,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 357,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 350,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 349,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "vpsrec-section", id: "bandwagon", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-container", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-highlight", children: [
        /* @__PURE__ */ jsxDEV("h3", { children: "搬瓦工适合什么人？" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 454,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "搬瓦工主机最适合放在“国内访问优化型 VPS”里评估。它的核心价值不是最低价，而是优化线路、机房选择和中国大陆访问体验。" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 455,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-grid-3", style: { marginTop: "22px" }, children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "适合" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 459,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { children: [
              /* @__PURE__ */ jsxDEV("li", { children: "中文 WordPress 站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 461,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "个人博客 / 内容站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 462,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "免备案网站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 463,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "希望国内打开更稳" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 464,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "有长期建站需求" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 465,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 460,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 458,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "先小额测试" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 470,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { children: [
              /* @__PURE__ */ jsxDEV("li", { children: "第一次使用 VPS" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 472,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "不确定访问地区" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 473,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "不确定是否长期使用" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 474,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "准备先跑一个轻量站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 475,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 471,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 469,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "更适合选低价 VPS" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 480,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { children: [
              /* @__PURE__ */ jsxDEV("li", { children: "只是学习 Linux" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 482,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "只是测试面板" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 483,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "只是跑临时脚本" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 484,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "预算主要看最低成本" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 485,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 481,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 479,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 457,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-hero-actions", style: { marginTop: "26px" }, children: [
          /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-btn vpsrec-btn-primary", href: "/go/bandwagonhost/", children: "查看搬瓦工方案" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 491,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-btn vpsrec-btn-ghost", href: "#config", children: "先看配置怎么选" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 492,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 490,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 453,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 452,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 451,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "vpsrec-section vpsrec-section-light", id: "budget", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-container", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-section-title", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-label", children: "Budget" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 501,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { children: "五、不同预算怎么选 VPS？" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 502,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "预算和用途匹配，才是好选择。学习机看低价，正式项目看长期成本，国内访问优化看线路价值。" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 503,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 500,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-price-ladder", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-price-item items-start", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-price mt-1", children: "$10/年以内" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 508,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "mb-4 text-gray-600", children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "适合：" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 510,
                  columnNumber: 55
                }, this),
                "学习、临时测试。重点是能重装、能试错。"
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 510,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-2 border-t border-gray-100 pt-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-800", children: "HostDare ASSD0 AMD VPS" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 513,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 sm:ml-auto", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-red-600 font-bold text-lg whitespace-nowrap", children: [
                    "$9.80/年 ",
                    /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-normal text-gray-500", children: "活动价" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 515,
                      columnNumber: 100
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 515,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("a", { href: "/go/hostdare/", className: "vpsrec-btn vpsrec-btn-primary shrink-0", style: { padding: "0.4rem 1rem", fontSize: "0.875rem" }, children: "直达官网" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 516,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 514,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 512,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 511,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 509,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 507,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-price-item items-start", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-price mt-1", children: "$10–30/年" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 524,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "mb-4 text-gray-600", children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "适合：" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 526,
                  columnNumber: 55
                }, this),
                "备用机、小工具、轻量测试。重要数据先做备份。"
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 526,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4 border-t border-gray-100 pt-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-800", children: "RackNerd 1GB KVM VPS" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 529,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 sm:ml-auto", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-red-600 font-bold text-lg whitespace-nowrap", children: "$21.99/年" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 531,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("a", { href: "/go/racknerd/", className: "vpsrec-btn vpsrec-btn-primary shrink-0", style: { padding: "0.4rem 1rem", fontSize: "0.875rem" }, children: "直达官网" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 532,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 530,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 528,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "border-t border-gray-100/50" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 535,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-800", children: "HostDare ASSD1 AMD VPS" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 537,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 sm:ml-auto", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-red-600 font-bold text-lg whitespace-nowrap", children: [
                      "$14.70/年 ",
                      /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-normal text-gray-500", children: "活动价" }, void 0, false, {
                        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                        lineNumber: 539,
                        columnNumber: 101
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 539,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("a", { href: "/go/hostdare/", className: "vpsrec-btn vpsrec-btn-primary shrink-0", style: { padding: "0.4rem 1rem", fontSize: "0.875rem" }, children: "直达官网" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 540,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 538,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 536,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "border-t border-gray-100/50" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 543,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-800", children: "HostDare ASSD2 AMD VPS" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 545,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 sm:ml-auto", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-red-600 font-bold text-lg whitespace-nowrap", children: [
                      "$26.25/年 ",
                      /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-normal text-gray-500", children: "活动价" }, void 0, false, {
                        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                        lineNumber: 547,
                        columnNumber: 101
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 547,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("a", { href: "/go/hostdare/", className: "vpsrec-btn vpsrec-btn-primary shrink-0", style: { padding: "0.4rem 1rem", fontSize: "0.875rem" }, children: "直达官网" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 548,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 546,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 544,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 527,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 525,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 523,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-price-item items-start", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-price mt-1", children: "$5–10/月" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 556,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "mb-4 text-gray-600", children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "适合：" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 558,
                  columnNumber: 55
                }, this),
                "个人博客、WordPress 起步。1核2G 会更舒服。"
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 558,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4 border-t border-gray-100 pt-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-800", children: "DigitalOcean Droplets" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 561,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 sm:ml-auto", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-blue-600 font-bold text-lg whitespace-nowrap", children: "$4/月起" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 563,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("a", { href: "/go/digitalocean/", className: "vpsrec-btn vpsrec-btn-primary shrink-0", style: { padding: "0.4rem 1rem", fontSize: "0.875rem" }, children: "直达官网" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 564,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 562,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 560,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "border-t border-gray-100/50" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 567,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-800", children: "Vultr Cloud Compute" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 569,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 sm:ml-auto", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-blue-600 font-bold text-lg whitespace-nowrap", children: "$5/月起" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 571,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("a", { href: "/go/vultr/", className: "vpsrec-btn vpsrec-btn-primary shrink-0", style: { padding: "0.4rem 1rem", fontSize: "0.875rem" }, children: "直达官网" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 572,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 570,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 568,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "border-t border-gray-100/50" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 575,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-800", children: "Linode / Akamai Nanode 1GB" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 577,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 sm:ml-auto", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-blue-600 font-bold text-lg whitespace-nowrap", children: "$5/月" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 579,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("a", { href: "/go/linode/", className: "vpsrec-btn vpsrec-btn-primary shrink-0", style: { padding: "0.4rem 1rem", fontSize: "0.875rem" }, children: "直达官网" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 580,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 578,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 576,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 559,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 557,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 555,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-price-item items-start", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-price mt-1", children: "$10–30/月" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 588,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "mb-4 text-gray-600", children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "适合：" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 590,
                  columnNumber: 55
                }, this),
                "企业站、外贸站、中文内容站。重点看稳定、备份、续费和线路。"
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 590,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4 border-t border-gray-100 pt-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-800", children: "Cloudways 托管云主机" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 593,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 sm:ml-auto", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-blue-600 font-bold text-lg whitespace-nowrap", children: "$11/月起" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 595,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("a", { href: "/go/cloudways/", className: "vpsrec-btn vpsrec-btn-primary shrink-0", style: { padding: "0.4rem 1rem", fontSize: "0.875rem" }, children: "直达官网" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 596,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 594,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 592,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "border-t border-gray-100/50" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 599,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-800", children: "DMIT LAX.AN5.T1 GENERAL" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 601,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 sm:ml-auto", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-blue-600 font-bold text-lg whitespace-nowrap", children: "$16.90/月起" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 603,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("a", { href: "/go/dmit/", className: "vpsrec-btn vpsrec-btn-primary shrink-0", style: { padding: "0.4rem 1rem", fontSize: "0.875rem" }, children: "直达官网" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 604,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 602,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 600,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 591,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 589,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 587,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-price-item items-start", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-price mt-1", children: "$30/月以上" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 612,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "mb-4 text-gray-600", children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "适合：" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 614,
                  columnNumber: 55
                }, this),
                "优化线路、高稳定项目、托管方案。搬瓦工、DMIT、香港 VPS 可以放在这里比较。"
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 614,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4 border-t border-gray-100 pt-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-800", children: "搬瓦工 CN2 GIA-E 20G" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 617,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 sm:ml-auto", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-blue-600 font-bold text-lg whitespace-nowrap", children: [
                      "$49.99/季 ",
                      /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-normal text-gray-500", children: "$169.99/年" }, void 0, false, {
                        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                        lineNumber: 619,
                        columnNumber: 102
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 619,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("a", { href: "/go/bandwagonhost/", className: "vpsrec-btn vpsrec-btn-primary shrink-0", style: { padding: "0.4rem 1rem", fontSize: "0.875rem" }, children: "直达官网" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 620,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 618,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 616,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "border-t border-gray-100/50" }, void 0, false, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 623,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-800", children: "搬瓦工高配 / 香港 / 日本 CN2 GIA 方案" }, void 0, false, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 625,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 sm:ml-auto", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-blue-600 font-bold text-lg whitespace-nowrap", children: "通常 $30/月以上" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 627,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("a", { href: "/go/bandwagonhost/", className: "vpsrec-btn vpsrec-btn-primary shrink-0", style: { padding: "0.4rem 1rem", fontSize: "0.875rem" }, children: "直达官网" }, void 0, false, {
                      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                      lineNumber: 628,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                    lineNumber: 626,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                  lineNumber: 624,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 615,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 613,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 611,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 506,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 499,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 498,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "vpsrec-section", id: "cheap", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-container", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-section-title", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-label", children: "Cheap VPS" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 641,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { children: "六、便宜 VPS 能不能买？适合哪些场景？" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 642,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "便宜 VPS 可以买，关键是用途放对。学习测试看低价，正式项目看恢复能力。" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 643,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 640,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-compare", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card vpsrec-good", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "适合用便宜 VPS" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 648,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { children: [
              /* @__PURE__ */ jsxDEV("li", { children: "学习 Linux" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 650,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "测试 WordPress" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 651,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "跑轻量脚本" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 652,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "临时项目" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 653,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "备用服务器" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 654,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "低流量个人站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 655,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "测试面板环境" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 656,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 649,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 647,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card vpsrec-caution", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "适合提高预算" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 661,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { children: [
              /* @__PURE__ */ jsxDEV("li", { children: "企业官网" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 663,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "外贸询盘站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 664,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "付费广告落地页" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 665,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "客户项目" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 666,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "数据库重要项目" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 667,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "长期内容站" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 668,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "会员系统或订单系统" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 669,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 662,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 660,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 646,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-callout", children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "低价 VPS 下单前看 7 件事：" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 675,
            columnNumber: 15
          }, this),
          "服务商运营时间、续费价格、退款规则、是否支持重装、是否有快照 / 备份、工单响应、用户反馈是否足够。便宜可以接受，规则清楚更重要。"
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 674,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
          /* @__PURE__ */ jsxDEV("h3", { children: "搬瓦工和低价 VPS 的购买逻辑不同" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 680,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "搬瓦工属于优化线路 VPS，适合已经确定要长期建站、在意国内访问速度、愿意为线路质量多付预算的用户。用它做学习机有点浪费；用它做中文 WordPress 站、免备案内容站、国内访问优化项目，逻辑更顺。" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 681,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 679,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 639,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 638,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "vpsrec-section vpsrec-section-light", id: "manage", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-container", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-section-title", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-label", children: "Management" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 689,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { children: "七、不会运维怎么办？面板、托管型 VPS 和普通 VPS 怎么选？" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 690,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "买 VPS 前，先诚实判断自己的运维能力。会维护可以买裸 VPS，想省事可以选面板或托管方案。" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 691,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 688,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-grid-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "方案一：裸 VPS" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 696,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "适合：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 697,
                columnNumber: 20
              }, this),
              "会 Linux、会排错、有维护能力的人。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 697,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "优点：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 698,
                columnNumber: 20
              }, this),
              "便宜、自由度高、环境可控。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 698,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "重点：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 699,
                columnNumber: 20
              }, this),
              "自己负责安全、备份、环境配置和系统更新。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 699,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 695,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "方案二：面板 VPS" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 703,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "适合：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 704,
                columnNumber: 20
              }, this),
              "新手站长、WordPress 用户。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 704,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "常见工具：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 705,
                columnNumber: 20
              }, this),
              "宝塔面板、aaPanel、CyberPanel、1Panel。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 705,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "重点：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 706,
                columnNumber: 20
              }, this),
              "降低部署难度，但仍然要做安全和备份。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 706,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 702,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-card", children: [
            /* @__PURE__ */ jsxDEV("h3", { children: "方案三：托管型 VPS" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 710,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "适合：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 711,
                columnNumber: 20
              }, this),
              "不想维护服务器的人。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 711,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "优点：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 712,
                columnNumber: 20
              }, this),
              "省心，适合商业站、小团队和外贸站。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 712,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "重点：" }, void 0, false, {
                fileName: "/app/applet/src/pages/VpsRecommend.tsx",
                lineNumber: 713,
                columnNumber: 20
              }, this),
              "价格更高，但节省维护时间。"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 713,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 709,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 694,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-callout", children: "搬瓦工这类 VPS 可以搭配面板使用。新手建中文 WordPress 站，可以选择搬瓦工优化线路 VPS，再用宝塔或 1Panel 部署网站环境。这样比纯命令行更容易上手，但服务器安全、备份、系统更新仍然要自己负责。" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 717,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 687,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 686,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "vpsrec-section vpsrec-section-dark", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-container", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-cta", children: [
        /* @__PURE__ */ jsxDEV("h2", { children: "最终怎么选？按用途下单最稳" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 726,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "学习测试选低价年付；个人 WordPress 从 1核2G 起步；企业站和外贸站看 2核2G；国内访问和免备案中文站，把搬瓦工、DMIT、香港 VPS 放进重点比较。" }, void 0, false, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 727,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-hero-actions", style: { justifyContent: "center" }, children: [
          /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-btn vpsrec-btn-primary", href: "/vps-recommendation/", children: "查看推荐 VPS" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 729,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("a", { className: "vpsrec-btn vpsrec-btn-ghost", href: "#faq", children: "继续看常见问题" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 730,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 728,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 725,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 724,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 723,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "vpsrec-section vpsrec-section-light", id: "faq", children: /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-container", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-section-title", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "vpsrec-label", children: "FAQ" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 739,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { children: "八、VPS 推荐常见问题" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 740,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "这些问题最接近下单前的疑问，建议新手快速看一遍。" }, void 0, false, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 741,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 738,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "vpsrec-faq", children: [
          /* @__PURE__ */ jsxDEV("details", { open: true, children: [
            /* @__PURE__ */ jsxDEV("summary", { children: "建 WordPress 需要多大 VPS？" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 746,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "轻量个人站可以从 1核2G 起步。企业官网、外贸站、长期内容站，更适合 2核2G 或 2核4G。插件多、图片多、访问增长快，就提前留余量。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 747,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 745,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("details", { children: [
            /* @__PURE__ */ jsxDEV("summary", { children: "搬瓦工主机适合新手吗？" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 751,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "适合有明确国内访问需求的新手。比如中文博客、WordPress 内容站、免备案网站，希望国内打开速度更稳，可以重点看搬瓦工。只是学习 Linux、临时测试，用低价年付 VPS 更划算。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 752,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 750,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("details", { children: [
            /* @__PURE__ */ jsxDEV("summary", { children: "搬瓦工和普通低价 VPS 有什么区别？" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 756,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "普通低价 VPS 主要优势是便宜，适合学习和测试。搬瓦工更偏优化线路 VPS，适合重视中国大陆访问体验的用户。它的购买逻辑是线路、机房和长期建站体验。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 757,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 755,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("details", { children: [
            /* @__PURE__ */ jsxDEV("summary", { children: "便宜 VPS 推荐买吗？" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 761,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "学习、测试、备用可以买。低价 VPS 的价值是低成本试错。正式网站、客户项目、外贸询盘站，优先选择更稳定的 VPS，并提前做好备份。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 762,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 760,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("details", { children: [
            /* @__PURE__ */ jsxDEV("summary", { children: "新手买 VPS 选 Linux 还是 Windows？" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 766,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "建站、WordPress、博客、外贸站，默认选 Linux。Ubuntu、Debian、AlmaLinux 都常见。只有必须运行 Windows 软件、远程桌面程序或特定 Windows 环境时，再选 Windows VPS。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 767,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 765,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("details", { children: [
            /* @__PURE__ */ jsxDEV("summary", { children: "香港 VPS 一定比美国 VPS 快吗？" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 771,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "香港 VPS 延迟低，但价格和带宽压力也高。美国优化线路 VPS 在部分国内访问场景下也有不错表现。重点看线路质量、晚高峰速度和丢包情况。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 772,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 770,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("details", { children: [
            /* @__PURE__ */ jsxDEV("summary", { children: "VPS 和虚拟主机哪个更适合建站？" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 776,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "只想省心建一个简单网站，可以选虚拟主机或托管方案。想控制环境、部署多个项目、自己配置服务器，VPS 更合适。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 777,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 775,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("details", { children: [
            /* @__PURE__ */ jsxDEV("summary", { children: "买 VPS 最容易忽略什么？" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 781,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "最容易忽略续费价格、备份方案、退款政策、晚高峰速度、IP 可用性和维护成本。买 VPS 的钱只是明面成本，后面能不能稳定维护，才是长期成本。" }, void 0, false, {
              fileName: "/app/applet/src/pages/VpsRecommend.tsx",
              lineNumber: 782,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/VpsRecommend.tsx",
            lineNumber: 780,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/VpsRecommend.tsx",
          lineNumber: 744,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 737,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/VpsRecommend.tsx",
        lineNumber: 736,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/VpsRecommend.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/VpsRecommend.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function AppRoutes() {
  return /* @__PURE__ */ jsxDEV(Routes, { children: /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Layout, {}, void 0, false, {
    fileName: "/app/applet/src/Router.tsx",
    lineNumber: 8,
    columnNumber: 32
  }, this), children: /* @__PURE__ */ jsxDEV(Route, { index: true, element: /* @__PURE__ */ jsxDEV(VpsRecommend, {}, void 0, false, {
    fileName: "/app/applet/src/Router.tsx",
    lineNumber: 9,
    columnNumber: 31
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/Router.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/Router.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/Router.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function render(url) {
  const helmetContext = {};
  const appHtml = renderToString(
    /* @__PURE__ */ jsxDEV(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsxDEV(StaticRouter, { location: url, children: /* @__PURE__ */ jsxDEV(AppRoutes, {}, void 0, false, {
      fileName: "/app/applet/src/entry-server.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/entry-server.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/entry-server.tsx",
      lineNumber: 9,
      columnNumber: 5
    }, this)
  );
  const { helmet } = helmetContext;
  return { appHtml, helmet };
}
export {
  render
};
