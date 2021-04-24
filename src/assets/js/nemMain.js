var $ = jQuery.noConflict();
$.extend($.easing, {
    def: "easeOutQuad",
    swing: function (e, t, i, o, n) {
        return $.easing[$.easing.def](e, t, i, o, n);
    },
    easeOutQuad: function (e, t, i, o, n) {
        return -o * (t /= n) * (t - 2) + i;
    },
    easeOutQuint: function (e, t, i, o, n) {
        return o * ((t = t / n - 1) * t * t * t * t + 1) + i;
    },
});

var $window = $(window);
var $body = $(document.body);
var status = "";
var minDesktopWidth = 992
var isIE = navigator.userAgent.indexOf("Trident") >= 0;
var isEdge = navigator.userAgent.indexOf("Edge") >= 0;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var defaults = {
  animation: { name: "fadeIn", duration: "1.2s", delay: ".2s" },
  isotope: {
    itemsSelector: ".grid-item",
    layoutMode: "masonry",
    percentPosition: !0,
    masonry: { columnWidth: ".grid-space" },
  },
  minipopup: {
    message: "",
    productClass: "",
    imageSrc: "",
    imageLink: "#",
    name: "",
    nameLink: "#",
    price: "",
    count: null,
    rating: null,
    actionTemplate: "",
    isPurchased: !1,
    delay: 4e3,
    space: 20,
    priceTemplate: '<span class="product-price">{{price}}</span>',
    ratingTemplate:
      '<div class="ratings-container"><div class="ratings-full"><span class="ratings" style="width:{{rating}}"></span><span class="tooltiptext tooltip-top"></span></div></div>',
    priceQuantityTemplate:
      '<div class="price-box"><span class="product-quantity">{{count}}</span><span class="product-price">{{price}}</span></div>',
    purchasedTemplate: '<span class="purchased-time">12 MINUTES AGO</span>',
    template:
      '<div class="minipopup-box"><p class="minipopup-title">{{message}}</p><div class="product product-purchased {{productClass}} mb-0"><figure class="product-media"><a href="{{imageLink}}"><img src="{{imageSrc}}" alt="product" width="90" height="90"></a></figure><div class="product-detail"><a href="{{nameLink}}" class="product-name">{{name}}</a>{{detailTemplate}}</div></div>{{actionTemplate}}</div>',
  },
  popup: {
    removalDelay: 350,
    callbacks: {
      open: function () {
        $("html").css("overflow-y", "hidden"),
          $("body").css("overflow-x", "visible"),
          $(".mfp-wrap").css("overflow", "hidden auto"),
          $(".sticky-header.fixed").css(
            "padding-right",
            window.innerWidth - document.body.clientWidth
          );
      },
      close: function () {
        $("html").css("overflow-y", ""),
          $("body").css("overflow-x", "hidden"),
          $(".mfp-wrap").css("overflow", ""),
          $(".sticky-header.fixed").css("padding-right", "");
      },
    },
  },
  popupPresets: {
    login: {
      type: "ajax",
      mainClass: "mfp-login mfp-fade",
      tLoading: "",
      preloader: !1,
    },
    video: {
      type: "iframe",
      mainClass: "mfp-fade",
      preloader: !1,
      closeBtnInside: !1,
    },
    quickview: {
      type: "ajax",
      mainClass: "mfp-product mfp-fade",
      tLoading: "",
      preloader: !1,
    },
  },
  slider: {
    responsiveClass: !0,
    navText: [
      '<i class="d-icon-angle-left">',
      '<i class="d-icon-angle-right">',
    ],
    checkVisible: !1,
    items: 1,
    smartSpeed: isEdge ? 200 : 500,
    autoplaySpeed: isEdge ? 200 : 1e3,
    autoplayTimeout: 1e4,
  },
  sliderPresets: {
    "intro-slider": { animateIn: "fadeIn", animateOut: "fadeOut" },
    "product-single-carousel": { dots: !1, nav: !0 },
    "product-gallery-carousel": {
      dots: !1,
      nav: !0,
      margin: 20,
      items: 1,
      responsive: { 576: { items: 2 }, 768: { items: 3 } },
    },
    "rotate-slider": {
      dots: !1,
      nav: !0,
      margin: 0,
      items: 1,
      animateIn: "",
      animateOut: "",
    },
  },
  sliderThumbs: {
    margin: 0,
    items: 4,
    dots: !1,
    nav: !0,
    navText: [
      '<i class="fas fa-chevron-left">',
      '<i class="fas fa-chevron-right">',
    ],
  },
  stickyContent: {
    minWidth: minDesktopWidth,
    maxWidth: 2e4,
    top: 300,
    hide: !1,
    max_index: 1060,
    scrollMode: !1,
  },
  stickyHeader: { activeScreenWidth: 768 },
  stickyFooter: {
    minWidth: 0,
    maxWidth: 767,
    top: 150,
    hide: !0,
    scrollMode: !0,
  },
  stickyToolbox: { minWidth: 0, maxWidth: 767, top: !1, scrollMode: !0 },
  stickySidebar: {
    autoInit: !0,
    minWidth: 991,
    containerSelector: ".sticky-sidebar-wrapper",
    autoFit: !0,
    activeClass: "sticky-sidebar-fixed",
    paddingOffsetTop: 93,
    paddingOffsetBottom: 0,
  },
  templateCartAddedAlert:
    '<div class="alert alert-simple alert-btn cart-added-alert"><a href="cart.html" class="btn btn-success btn-md">View Cart</a><span>"{{name}}" has been added to your cart.</span><button type="button" class="btn btn-link btn-close"><i class="d-icon-times"></i></button></div>',
  zoomImage: {
    responsive: !0,
    zoomWindowFadeIn: 750,
    zoomWindowFadeOut: 500,
    borderSize: 0,
    zoomType: "inner",
    cursor: "crosshair",
  },
};

function _$(e) {
    return e instanceof jQuery ? e : $(e);
}
function call(e, t) {
    setTimeout(e, t);
}

function byId(e) {
    return document.getElementById(e);
}

function byTag(e, t) {
    return t ? t.getElementsByTagName(e) : document.getElementsByTagName(e);
}
function byClass(e, t) {
    return t ? t.getElementsByClassName(e) : document.getElementsByClassName(e);
}
function setCookie(e, t, i) {
  var o = new Date();
  o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3),
    (document.cookie = e + "=" + t + ";expires=" + o.toUTCString() + ";path=/");
}

function getCookie(e) {
  for (
    var t = e + "=", i = document.cookie.split(";"), o = 0;
    o < i.length;
    ++o
  ) {
    for (var n = i[o]; " " == n.charAt(0); ) n = n.substring(1);
    if (0 == n.indexOf(t)) return n.substring(t.length, n.length);
  }
  return "";
}

function parseOptions(e) {
    return "string" == typeof e ? JSON.parse(e.replace(/'/g, '"').replace(";", "")) : {};
}

function parseTemplate(e, t) {
    return e.replace(/\{\{(\w+)\}\}/g, function () {
        return t[arguments[1]];
    });
}

function isOnScreen(e, t, i) {
    var o = window.pageXOffset,
        n = window.pageYOffset,
        a = e.getBoundingClientRect(),
        s = a.left + o,
        d = a.top + n,
        r = void 0 === t ? 0 : t,
        l = void 0 === i ? 0 : i;
    return d + a.height + l >= n && d <= n + window.innerHeight + l && s + a.width + r >= o && s <= o + window.innerWidth + r;
}

function appear() {
    var e,
        t = [],
        i = !1,
        o = function () {
            for (var i = t.length; i--; )
                (e = t[i]),
                    isOnScreen(e.el, e.options.accX, e.options.accY) && ("function" == typeof $(e.el).data("appear-callback") && $(e.el).data("appear-callback").call(e.el, e.data), e.fn && e.fn.call(e.el, e.data), t.splice(i, 1));
        };
    return (
        window.addEventListener("scroll", o, { passive: !0 }),
        window.addEventListener("resize", o, { passive: !0 }),
        $(window).on("appear.check", o),
        function (e, n, a) {
            var s = { data: void 0, accX: 0, accY: 0 };
            a && (a.data && (s.data = a.data), a.accX && (s.accX = a.accX), a.accY && (s.accY = a.accY)), t.push({ el: e, fn: n, options: s }), i || (i = requestTimeout(o, 100));
        }
    );
}

var zoomImageObjects = [];

function zoomImage(e) {
  $.fn.elevateZoom &&
    e &&
    _$(e)
      .find("img")
      .each(function () {
        var e = $(this);
        (defaults.zoomImage.zoomContainer = e.parent()),
          e.elevateZoom(defaults.zoomImage),
          zoomImageObjects.push(e);
      });
}

function initZoom() {
  window.addEventListener(
    "resize",
    function () {
      zoomImageObjects.forEach(function (e) {
        e.each(function () {
          var e = $(this).data("elevateZoom");
          e && e.refresh();
        });
      });
    },
    { passive: !0 }
  );
}

function countTo(e) {
    $.fn.countTo &&
        _$(e).each(function () {
            appear(this, function () {
                var e = $(this);
                setTimeout(function () {
                    e.countTo({
                        onComplete: function () {
                            e.addClass("complete");
                        },
                    });
                }, 300);
            });
        });
}

function countdown(e) {
    $.fn.countdown &&
        _$(e).each(function () {
            var e = $(this),
                t = e.data("until"),
                i = e.data("compact"),
                o = e.data("format") ? e.data("format") : "DHMS",
                n = e.data("labels-short") ? ["Years", "Months", "Weeks", "Days", "Hours", "Mins", "Secs"] : ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                a = e.data("labels-short") ? ["Year", "Month", "Week", "Day", "Hour", "Min", "Sec"] : ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"];
            if (e.data("relative")) d = t;
            else
                var s = t.split(", "),
                    d = new Date(s[0], s[1] - 1, s[2]);
            e.countdown({ until: d, format: o, padZeroes: !0, compact: i, compactLabels: [" y", " m", " w", " days, "], timeSeparator: " : ", labels: n, labels1: a });
        });
}
function priceSlider(e, t) {
    "object" == typeof noUiSlider &&
        _$(e).each(function () {
            var e = this;
            noUiSlider.create(e, $.extend(!0, { start: [18, 35], connect: !0, step: 1, range: { min: 18, max: 35 } }, t)),
                e.noUiSlider.on("update", function (t, i) {
                    t = t.map(function (e) {
                        return "$" + parseInt(e);
                    });
                    $(e).parent().find(".filter-price-range").text(t.join(" - "));
                });
        });
}

function lazyload(e, t) {
    function i() {
        this.setAttribute("src", this.getAttribute("data-src")),
            this.addEventListener("load", function () {
                (this.style["padding-top"] = ""), this.classList.remove("lazy-img");
            });
    }
    _$(e)
        .find(".lazy-img")
        .each(function () {
            void 0 !== t && t ? i.call(this) : appear(this, i);
        });
}

function isotopes(e, t) {
    if ("function" == typeof imagesLoaded && $.fn.isotope) {
        _$(e).each(function () {
            var e = $(this),
                i = $.extend(!0, {}, defaults.isotope, parseOptions(e.attr("data-grid-options")), t || {});
            lazyload(e),
                e.imagesLoaded(function () {
                    i.customInitHeight && e.height(e.height()),
                        i.customDelay &&
                            call(function () {
                                e.isotope(i);
                            }, parseInt(i.customDelay)),
                        e.isotope(i);
                });
        });
    }
}


function initNavFilter(e) {
  $.fn.isotope &&
    _$(e).on("click", function (e) {
      var t = $(this),
        i = t.attr("data-filter"),
        o = t.parent().parent().attr("data-target");
      $(o ? o : ".grid")
        .isotope({ filter: i })
        .isotope("on", "arrangeComplete", function () {
          $window.trigger("appear.check");
        }),
        t.parent().siblings().children().removeClass("active"),
        t.addClass("active"),
        e.preventDefault();
    });
}

function initShowVendorSearch(e) {
  $body.on("click", e, function (e) {
    var t = $(this).closest(".toolbox").next(".form-wrapper");
    t.hasClass("open")
      ? t.slideUp().removeClass("open")
      : t.slideDown().addClass("open"),
      e.preventDefault();
  });
};

function parallax(e, t) {
  $.fn.themePluginParallax &&
    _$(e).each(function () {
      var e = $(this);
      e.themePluginParallax(
        $.extend(!0, parseOptions(e.attr("data-parallax-options")), t)
      );
    });
};

function headerToggleSearch(e) {
  var t = _$(e);
  t
    .find(".form-control")
    .on("focusin", function (e) {
      t.addClass("show");
    })
    .on("focusout", function (e) {
      t.removeClass("show");
    }),
    $body.on("click", ".sticky-footer .search-toggle", function (e) {
      $(this).parent().toggleClass("show"), e.preventDefault();
    });
};

function closeTopNotice(e) {
  var t = _$(e);
  t.on("click", function (e) {
    e.preventDefault(), t.closest(".top-notice").css("display", "none");
  });
};

function stickyHeader(e) {
  var t = _$(e);
  if (0 != t.length) {
    var i,
      o,
      n = !1,
      a = function () {
        if (
          ((i = t[0].offsetHeight),
          (o = t.offset().top + i),
          t.hasClass("has-dropdown"))
        ) {
          t.find(".category-dropdown .dropdown-box").length &&
            (o += t.find(".category-dropdown .dropdown-box")[0].offsetHeight);
        }
        !n &&
          window.innerWidth >= defaults.stickyHeader.activeScreenWidth &&
          ((n = !0),
          t.wrap(
            '<div class="sticky-wrapper" style="height:' + i + 'px"></div>'
          )),
          $window.off("resize", a);
      },
      s = function () {
        window.innerWidth >= defaults.stickyHeader.activeScreenWidth &&
        window.pageYOffset >= o
          ? (t[0].classList.add("fixed"),
            document.body.classList.add("sticky-header-active"))
          : (t[0].classList.remove("fixed"),
            document.body.classList.remove("sticky-header-active"));
      };
    window.addEventListener("scroll", s, { passive: !0 }),
      $window.on("resize", a),
      $window.on("resize", s),
      call(a, 500),
      call(s, 500);
  }
}

function stickyContent(e, t) {
  var i = _$(e),
    o = $.extend({}, defaults.stickyContent, t),
    n = window.pageYOffset;
  if (0 != i.length) {
    var a = function () {
        i.each(function (e) {
          var t = $(this);
          if (t.data("is-wrap"))
            (window.innerWidth < o.minWidth ||
              window.innerWidth >= o.maxWidth) &&
              (t.unwrap(".sticky-content-wrapper"), t.data("is-wrap", !1));
          else {
            var i,
              n = t.removeClass("fixed").outerHeight(!0);
            if (((i = t.offset().top + n), t.hasClass("has-dropdown"))) {
              var a = t.find(".category-dropdown .dropdown-box");
              a.length && (i += a[0].offsetHeight);
            }
            t.data("top", i),
              (function (e, t) {
                window.innerWidth >= o.minWidth &&
                  window.innerWidth <= o.maxWidth &&
                  (e.wrap('<div class="sticky-content-wrapper"></div>'),
                  e.parent().css("height", t + "px"),
                  e.data("is-wrap", !0));
              })(t, n);
          }
        });
      },
      s = function (e) {
        (e && !e.isTrusted) ||
          i.each(function (e) {
            var t = $(this),
              i = !0;
            o.scrollMode &&
              ((i = n > window.pageYOffset), (n = window.pageYOffset)),
              window.pageYOffset > (0 == o.top ? t.data("top") : o.top) &&
              window.innerWidth >= o.minWidth &&
              window.innerWidth <= o.maxWidth
                ? (t.hasClass("fix-top")
                    ? (void 0 === t.data("offset-top") &&
                        (function (e) {
                          var t = 0,
                            i = 0;
                          $(".sticky-content.fixed.fix-top").each(function () {
                            (t += $(this)[0].offsetHeight), i++;
                          }),
                            e.data("offset-top", t),
                            e.data("z-index", o.max_index - i);
                        })(t),
                      t.css("margin-top", t.data("offset-top") + "px"))
                    : t.hasClass("fix-bottom") &&
                      (void 0 === t.data("offset-bottom") &&
                        (function (e) {
                          var t = 0,
                            i = 0;
                          $(".sticky-content.fixed.fix-bottom").each(
                            function () {
                              (t += $(this)[0].offsetHeight), i++;
                            }
                          ),
                            e.data("offset-bottom", t),
                            e.data("z-index", o.max_index - i);
                        })(t),
                      t.css("margin-bottom", t.data("offset-bottom") + "px")),
                  t.css("z-index", t.data("z-index")),
                  o.scrollMode
                    ? (i && t.hasClass("fix-top")) ||
                      (!i && t.hasClass("fix-bottom"))
                      ? t.addClass("fixed")
                      : (t.removeClass("fixed"), t.css("margin", ""))
                    : t.addClass("fixed"),
                  o.hide &&
                    t.parent(".sticky-content-wrapper").css("display", ""))
                : (t.removeClass("fixed"),
                  t.css("margin-top", ""),
                  t.css("margin-bottom", ""),
                  o.hide &&
                    t.parent(".sticky-content-wrapper").css("display", "none"));
          });
      },
      d = function (e) {
        i
          .removeData("offset-top")
          .removeData("offset-bottom")
          .removeClass("fixed")
          .css("margin", "")
          .css("z-index", ""),
          call(function () {
            a(), s();
          });
      };
    setTimeout(a, 550),
      setTimeout(s, 600),
      call(function () {
        window.addEventListener("scroll", s, { passive: !0 }),
          $window.on("resize", d);
      }, 700);
  }
}

function initAlert(e) {
  $body.on("click", e + " .btn-close", function (t) {
    $(this)
      .closest(e)
      .fadeOut(function () {
        $(this).remove();
      });
  });
};

function initAccordion(e) {
  $body.on("click", e, function (e) {
    var i = $(this),
      o = i.closest(".card").find(i.attr("href")),
      n = i.closest(".accordion");
    e.preventDefault(),
      0 === n.find(".collapsing").length &&
        0 === n.find(".expanding").length &&
        (o.hasClass("expanded")
          ? n.hasClass("radio-type") || t(o)
          : o.hasClass("collapsed") &&
            (n.find(".expanded").length > 0
              ? isIE
                ? t(n.find(".expanded"), function () {
                    t(o);
                  })
                : (t(n.find(".expanded")), t(o))
              : t(o)));
  });
  var t = function (t, i) {
    var o = t.closest(".card").find(e);
    t.hasClass("expanded")
      ? (o.removeClass("collapse").addClass("expand"),
        t.addClass("collapsing").slideUp(300, function () {
          t.removeClass("expanded collapsing").addClass("collapsed"), i && i();
        }))
      : t.hasClass("collapsed") &&
        (o.removeClass("expand").addClass("collapse"),
        t.addClass("expanding").slideDown(300, function () {
          t.removeClass("collapsed expanding").addClass("expanded"), i && i();
        }));
  };
};

function initTab(e) {
    $body
        .on("click", ".tab .nav-link", function (e) {
            var t = $(this);
            if ((e.preventDefault(), !t.hasClass("active"))) {
                var i = $(t.attr("href"));
                i.siblings().removeClass("in active"), i.addClass("active in"), slider(i.find(".owl-carousel")), t.parent().parent().find(".active").removeClass("active"), t.addClass("active");
            }
        })
        .on("click", ".link-to-tab", function (e) {
            var t = $(e.currentTarget).attr("href"),
                i = $(t),
                o = i.parent().siblings(".nav");
            e.preventDefault(),
                i.siblings().removeClass("active in"),
                i.addClass("active in"),
                o.find(".nav-link").removeClass("active"),
                o.find('[href="' + t + '"]').addClass("active"),
                $("html").animate({ scrollTop: i.offset().top - 150 });
        });
}

function playableVideo(e) {
    $(e + " .video-play").on("click", function (t) {
        var i = $(this).closest(e);
        i.hasClass("playing") ? i.removeClass("playing").addClass("paused").find("video")[0].pause() : i.removeClass("paused").addClass("playing").find("video")[0].play(), t.preventDefault();
    }),
        $(e + " video").on("ended", function () {
            $(this).closest(e).removeClass("playing");
        });
}

function appearAnimate(e) {
    _$(e).each(function () {
        var e = this;
        appear(e, function () {
            if (e.classList.contains("appear-animate")) {
                var t = $.extend({}, defaults.animation, parseOptions(e.getAttribute("data-animation-options")));
                call(function () {
                    setTimeout(
                        function () {
                            (e.style["animation-duration"] = t.duration), e.classList.add(t.name), e.classList.add("appear-animation-visible");
                        },
                        t.delay ? 1e3 * Number(t.delay.slice(0, -1)) : 0
                    );
                });
            }
        });
    });
}

function stickySidebar(e) {
    $.fn.themeSticky &&
        _$(e).each(function () {
            var e = $(this);
            e.themeSticky($.extend(defaults.stickySidebar, parseOptions(e.attr("data-sticky-options")))), e.trigger("recalc.pin");
        });
}

function refreshSidebar(e) {
    $.fn.themeSticky &&
        _$(e).each(function () {
            $(this).trigger("recalc.pin");
        });
}

function ratingTooltip(e) {
    for (
        var t = byClass("ratings-full", e || document.body),
            i = t.length,
            o = function () {
                var e = parseInt(this.firstElementChild.style.width.slice(0, -1)) / 20;
                this.lastElementChild.innerText = e ? e.toFixed(2) : e;
            },
            n = 0;
        n < i;
        ++n
    )
        t[n].addEventListener("mouseover", o), t[n].addEventListener("touchstart", o);
}

function popup(e, t) {
    var i = $.magnificPopup.instance,
        o = $.extend(!0, {}, defaults.popup, void 0 !== t ? defaults.popupPresets[t] : {}, e);
    i.isOpen && i.content
        ? (i.close(),
          setTimeout(function () {
              $.magnificPopup.open(o);
          }, 500))
        : $.magnificPopup.open(o);
}

function initPopups() {
    $body
        .on("click", "a.login, .login-link", function (e) {
            e.preventDefault(), popup({ items: { src: $(e.currentTarget).attr("href") } }, "login");
        })
        .on("click", ".register-link", function (e) {
            e.preventDefault(),
                popup(
                    {
                        items: { src: $(e.currentTarget).attr("href") },
                        callbacks: {
                            ajaxContentAdded: function () {
                                this.wrap.find('[href="#register"]').click();
                            },
                        },
                    },
                    "login"
                );
        })
        .on("click", ".btn-iframe", function (e) {
            e.preventDefault(), popup({ items: { src: '<video src="' + $(e.currentTarget).attr("href") + '" autoplay loop controls>', type: "inline" }, mainClass: "mfp-video-popup" }, "video");
        }),
        $("#newsletter-popup").length > 0 &&
            "true" !== getCookie("hideNewsletterPopup") &&
            setTimeout(function () {
                popup({
                    items: { src: "#newsletter-popup" },
                    type: "inline",
                    tLoading: "",
                    mainClass: "mfp-newsletter mfp-flip-popup",
                    callbacks: {
                        beforeClose: function () {
                            $("#hide-newsletter-popup")[0].checked && setCookie("hideNewsletterPopup", !0, 7);
                        },
                    },
                });
            }, 7500);
}

function initPurchasedMinipopup() {
    setInterval(function () {
        Minipopup.open({ message: "Someone Purchased", productClass: "product-cart", name: "Daisy Shoes Sonia by Sonia-Blue", nameLink: "product.html", imageSrc: "images/cart/product-1.jpg", isPurchased: !0 }, function (e) {
            ratingTooltip(e[0]);
        });
    }, 6e4);
}

function initScrollTopButton() {
    var e = byId("scroll-top");
    if (e) {
        e.addEventListener("click", function (e) {
            $("html, body").animate({ scrollTop: 0 }, 600), e.preventDefault();
        });
        var t = function () {
            window.pageYOffset > 400 ? e.classList.add("show") : e.classList.remove("show");
        };
        call(t, 500), window.addEventListener("scroll", t, { passive: !0 });
    }
}

function requestTimeout(e, t) {
    function i(s) {
        n || (n = s);
        s - n >= t ? e() : (a.val = o(i));
    }
    var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
    if (!o) return setTimeout(e, t);
    var n,
        a = new Object();
    return (a.val = o(i)), a;
}

function requestInterval(e, t, i) {
    function o(r) {
        a || (a = s = r);
        !i || r - a < i ? (r - s > t ? ((d.val = n(o)), e(), (s = r)) : (d.val = n(o))) : e();
    }
    var n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
    if (!n) return i ? setInterval(e, t) : setTimeout(e, i);
    var a,
        s,
        d = new Object();
    return (d.val = n(o)), d;
}

function deleteTimeout(e) {
    if (e) {
        var t = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
        return t ? (e.val ? t(e.val) : void 0) : clearTimeout(e);
    }
}

var sidebar = (function () {
    function e(e) {
        return this.init(e);
    }
    var t = window.innerWidth < minDesktopWidth,
        i = function () {
            window.innerWidth < minDesktopWidth && !t
                ? (this.$sidebar.find(".sidebar-content, .filter-clean").removeAttr("style"),
                  this.$sidebar.find(".sidebar-content").attr("style", ""),
                  this.$sidebar.siblings(".toolbox").children(":not(:first-child)").removeAttr("style"))
                : window.innerWidth >= minDesktopWidth && !this.$sidebar.hasClass("closed") && t && (this.$sidebar.addClass("closed"), this.$sidebar.find(".sidebar-content").css("display", "none")),
                (t = window.innerWidth < minDesktopWidth);
        };
    return (
        (e.prototype.init = function (e) {
            var t = this;
            return (
                (t.name = e),
                (t.$sidebar = $("." + e)),
                (t.isNavigation = !1),
                t.$sidebar.length &&
                    ((t.isNavigation = t.$sidebar.hasClass("sidebar-fixed") && t.$sidebar.parent().hasClass("toolbox-wrap")),
                    t.isNavigation && ((i = i.bind(this)), $window.on("resize", i)),
                    $window.on("resize", function () {
                        $body.removeClass(e + "-active");
                    }),
                    t.$sidebar
                        .find(".sidebar-toggle, .sidebar-toggle-btn")
                        .add("sidebar" === e ? ".left-sidebar-toggle" : "." + e + "-toggle")
                        .on("click", function (e) {
                            t.toggle(), $(this).blur(), $(".sticky-sidebar").trigger("recalc.pin.left", [400]), e.preventDefault();
                        }),
                    t.$sidebar.find(".sidebar-overlay, .sidebar-close").on("click", function (t) {
                        $body.removeClass(e + "-active"), $(".sticky-sidebar").trigger("recalc.pin.left", [400]), t.preventDefault();
                    }),
                    setTimeout(function () {
                        $(".sticky-sidebar").trigger("recalc.pin", [400]);
                    })),
                !1
            );
        }),
        (e.prototype.toggle = function () {
            var e = this;
            if (window.innerWidth >= minDesktopWidth && e.$sidebar.hasClass("sidebar-fixed")) {
                var t = e.$sidebar.hasClass("closed");
                if (
                    (e.isNavigation &&
                        (t || e.$sidebar.find(".filter-clean").hide(),
                        e.$sidebar.siblings(".toolbox").children(":not(:first-child)").fadeToggle("fast"),
                        e.$sidebar
                            .find(".sidebar-content")
                            .stop()
                            .animate({ height: "toggle", "margin-bottom": t ? "toggle" : -6 }, function () {
                                $(this).css("margin-bottom", ""), t && e.$sidebar.find(".filter-clean").fadeIn("fast");
                            })),
                    e.$sidebar.hasClass("shop-sidebar"))
                ) {
                    var i = $(".main-content .product-wrapper");
                    if (i.length)
                        if (i.hasClass("product-lists")) i.toggleClass("row cols-xl-2", !t);
                        else {
                            var o = i.data("toggle-cols"),
                                n = i.attr("class").match(/cols-\w*-*\d/g),
                                a = n
                                    ? Math.max.apply(
                                          null,
                                          n.map(function (e) {
                                              return e.match(/\d/)[0];
                                          })
                                      )
                                    : 0;
                            t ? 4 === a && 3 == o && i.removeClass("cols-md-4") : 3 === a && (i.addClass("cols-md-4"), o || i.data("toggle-cols", 3));
                        }
                }
                e.$sidebar.toggleClass("closed");
            } else
                e.$sidebar.find(".sidebar-overlay .sidebar-close").css("margin-left", -(window.innerWidth - document.body.clientWidth)),
                    $body.toggleClass(e.name + "-active").removeClass("closed"),
                    window.innerWidth >= 1200 && $body.hasClass("with-flex-container") && $(".owl-carousel").trigger("refresh.owl.carousel");
        }),
        function (t) {
            return new e(t);
        }
    );
});

var initProductSingle = (function () {
    function e(e) {
        return this.init(e);
    }
    var t = function (e) {
            var t = e.$thumbsWrap.offset().top + e.$thumbsWrap[0].offsetHeight,
                i = e.$thumbs.offset().top + e.thumbsHeight;
            i >= t + e.$productThumb[0].offsetHeight
                ? (e.$thumbs.css("top", parseInt(e.$thumbs.css("top")) - e.$productThumb[0].offsetHeight), e.$thumbUp.removeClass("disabled"))
                : i > t
                ? (e.$thumbs.css("top", parseInt(e.$thumbs.css("top")) - Math.ceil(i - t)), e.$thumbUp.removeClass("disabled"), e.$thumbDown.addClass("disabled"))
                : e.$thumbDown.addClass("disabled");
        },
        i = function (e) {
            var t = e.$thumbsWrap.offset().top,
                i = e.$thumbs.offset().top;
            i <= t - e.$productThumb[0].offsetHeight
                ? (e.$thumbs.css("top", parseInt(e.$thumbs.css("top")) + e.$productThumb[0].offsetHeight), e.$thumbDown.removeClass("disabled"))
                : i < t
                ? (e.$thumbs.css("top", parseInt(e.$thumbs.css("top")) - Math.ceil(i - t)), e.$thumbDown.removeClass("disabled"), e.$thumbUp.addClass("disabled"))
                : e.$thumbUp.addClass("disabled");
        },
        o = function (e) {
            if (void 0 !== e.$thumbs) {
                var t = void 0 !== e.thumbsIsVertical && e.thumbsIsVertical;
                (e.thumbsIsVertical = e._isPgvertical && window.innerWidth >= minDesktopWidth),
                    e.thumbsIsVertical
                        ? (e.$thumbs.hasClass("owl-carousel") && e.$thumbs.trigger("destroy.owl.carousel").removeClass("owl-carousel"),
                          (e.thumbsHeight = e.$productThumb[0].offsetHeight * e.thumbsCount + parseInt(e.$productThumb.css("margin-bottom")) * (e.thumbsCount - 1)),
                          e.$thumbUp.addClass("disabled"),
                          e.$thumbDown.toggleClass("disabled", e.thumbsHeight <= e.$thumbsWrap[0].offsetHeight),
                          e.isQuickview && n())
                        : (t && e.$thumbs.css("top", ""),
                          e.$thumbs.hasClass("owl-carousel") || e.$thumbs.addClass("owl-carousel").owlCarousel($.extend(!0, e.isQuickview ? { onInitialized: n, onResized: n } : {}, defaults.sliderThumbs)));
            }
        },
        n = function () {
            this.$wrapper.find(".product-details").css("height", window.innerWidth > 767 ? this.$wrapper.find(".product-gallery")[0].clientHeight : "");
        };
    return (
        (e.prototype.init = function (e) {
            var a = this,
                s = e.find(".product-single-carousel");
            (a.$wrapper = e),
                (a.isQuickview = !!e.closest(".mfp-content").length),
                (a._isPgvertical = !1),
                a.isQuickview && ((n = n.bind(this)), ratingTooltip()),
                s
                    .on("initialized.owl.carousel", function (e) {
                        a.isQuickview || s.append('<a href="#" class="product-image-full"><i class="d-icon-zoom"></i></a>'),
                            (function (e) {
                                (e.$thumbs = e.$wrapper.find(".product-thumbs")),
                                    (e.$thumbsWrap = e.$thumbs.parent()),
                                    (e.$thumbUp = e.$thumbsWrap.find(".thumb-up")),
                                    (e.$thumbDown = e.$thumbsWrap.find(".thumb-down")),
                                    (e.$thumbsDots = e.$thumbs.children()),
                                    (e.thumbsCount = e.$thumbsDots.length),
                                    (e.$productThumb = e.$thumbsDots.eq(0)),
                                    (e._isPgvertical = e.$thumbsWrap.parent().hasClass("pg-vertical")),
                                    (e.thumbsIsVertical = e._isPgvertical && window.innerWidth >= minDesktopWidth),
                                    e.$thumbDown.on("click", function (i) {
                                        e.thumbsIsVertical && t(e);
                                    }),
                                    e.$thumbUp.on("click", function (t) {
                                        e.thumbsIsVertical && i(e);
                                    }),
                                    e.$thumbsDots.on("click", function () {
                                        var t = $(this),
                                            i = (t.parent().filter(e.$thumbs).length ? t : t.parent()).index();
                                        e.$wrapper.find(".product-single-carousel").trigger("to.owl.carousel", i);
                                    }),
                                    o(e),
                                    $window.on("resize", function () {
                                        o(e);
                                    });
                            })(a);
                    })
                    .on("translate.owl.carousel", function (e) {
                        var t = (e.item.index - $(e.currentTarget).find(".cloned").length / 2 + e.item.count) % e.item.count;
                        a.thumbsSetActive(t);
                    }),
                "complete" === status && (slider(s), quantityInput(e.find(".quantity"))),
                (function (e) {
                    (e.$selects = e.$wrapper.find(".product-variations select")),
                        (e.$items = e.$wrapper.find(".product-variations")),
                        (e.$priceWrap = e.$wrapper.find(".product-variation-price")),
                        (e.$clean = e.$wrapper.find(".product-variation-clean")),
                        (e.$btnCart = e.$wrapper.find(".btn-cart")),
                        e.variationCheck(),
                        e.$selects.on("change", function (t) {
                            e.variationCheck();
                        }),
                        e.$items.children("a").on("click", function (t) {
                            $(this).toggleClass("active").siblings().removeClass("active"), t.preventDefault(), e.variationCheck();
                        }),
                        e.$clean.on("click", function (t) {
                            t.preventDefault(), e.variationClean(!0);
                        });
                })(this),
                (function (e) {
                    e.$wrapper.on("click", ".btn-cart", function (t) {
                        t.preventDefault();
                        var i = e.$wrapper,
                            o = i.find(".product-name").text();
                        (i.closest(".product-popup").length || document.body.classList.contains("home")) &&
                            Minipopup.open({
                                message: "Successfully Added",
                                productClass: " product-cart",
                                name: o,
                                nameLink: i.find(".product-name > a").attr("href"),
                                imageSrc: i.find(".product-image img").eq(0).attr("src"),
                                imageLink: i.find(".product-name > a").attr("href"),
                                price: i.find(".product-variation-price").length > 0 ? i.find(".product-variation-price").children("span").html() : i.find(".product-price .price").html(),
                                count: i.find(".quantity").val(),
                                actionTemplate:
                                    '<div class="action-group d-flex mt-3"><a href="cart.html" class="btn btn-sm btn-outline btn-primary btn-rounded mr-2">View Cart</a><a href="checkout.html" class="btn btn-sm btn-primary btn-rounded">Check Out</a></div>',
                            });
                    });
                })(this);
        }),
        (e.prototype.thumbsSetActive = function (e) {
            var t = this.$thumbsDots.eq(e);
            if ((this.$thumbsDots.filter(".active").removeClass("active"), t.addClass("active"), this.thumbsIsVertical)) {
                var i = parseInt(this.$thumbs.css("top")) + e * this.thumbsHeight;
                i < 0
                    ? this.$thumbs.css("top", parseInt(this.$thumbs.css("top")) - i)
                    : (i = this.$thumbs.offset().top + this.$thumbs[0].offsetHeight - t.offset().top - t[0].offsetHeight) < 0 && this.$thumbs.css("top", parseInt(this.$thumbs.css("top")) + i);
            } else this.$thumbs.trigger("to.owl.carousel", e, 100);
        }),
        (e.prototype.variationCheck = function () {
            var e = !0;
            this.$selects.each(function () {
                return this.value || (e = !1);
            }),
                this.$items.each(function () {
                    var t = $(this);
                    if (t.children("a:not(.size-guide)").length) return t.children(".active").length || (e = !1);
                }),
                e ? this.variationMatch() : this.variationClean();
        }),
        (e.prototype.variationMatch = function () {
            /*this.$priceWrap.find("span").text("$"+(Math.round(50*Math.random())+200)+".00"),*/ this.$priceWrap.slideDown(), this.$clean.slideDown(), this.$btnCart.removeAttr("disabled");
        }),
        (e.prototype.variationClean = function (e) {
            e && this.$selects.val(""), e && this.$items.children(".active").removeClass("active"), this.$priceWrap.slideUp(), this.$clean.css("display", "none"), this.$btnCart.attr("disabled", "disabled");
        }),
        function (t, i) {
            return t ? new e(t.eq(0), i) : null;
        }
    );
});

var initProductSinglePage = (function () {
    function e(e) {
        var t = $(e.currentTarget).closest(".product-single");
        $(".cart-added-alert").remove(),
            $(parseTemplate(defaults.templateCartAddedAlert, { name: t.find("h1.product-name").text() }))
                .insertBefore(t)
                .fadeIn(),
            $(".sticky-sidebar").trigger("recalc.pin");
    }
    function t(e) {
        e.preventDefault();
        var t,
            i = $(e.currentTarget).closest(".product-single");
        if (
            (t = i.find(".product-single-carousel").length
                ? i.find(".product-single-carousel .owl-item:not(.cloned) img")
                : i.find(".product-gallery-carousel").length
                ? i.find(".product-gallery-carousel .owl-item:not(.cloned) img")
                : i.find(".product-gallery img")).length
        ) {
            var o = t
                    .map(function () {
                        var e = $(this);
                        return { src: e.attr("data-zoom-image"), w: 800, h: 899, title: e.attr("alt") };
                    })
                    .get(),
                n = i.find(".product-single-carousel, .product-gallery-carousel").data("owl.carousel"),
                a = n ? (n.current() - n.clones().length / 2 + o.length) % o.length : i.find(".product-gallery > *").index();
            if ("undefined" != typeof PhotoSwipe) {
                var s = $(".pswp")[0],
                    d = new PhotoSwipe(s, PhotoSwipeUI_Default, o, { index: a, closeOnScroll: !1 });
                d.init(), (photoswipe = d);
            }
        }
    }
    function i(e) {
        var t = $(e.currentTarget);
        t.hasClass("added") ||
            (e.preventDefault(),
            t.addClass("load-more-overlay loading"),
            setTimeout(function () {
                t.removeClass("load-more-overlay loading").html('<i class="d-icon-heart-full"></i> Browse wishlist').addClass("added").attr("title", "Browse wishlist").attr("href", "wishlist.html");
            }, 500));
    }
    return function () {
        var o = $(".product-single");
        return (
            $body.on("click", ".product-single .btn-wishlist", i),
            o.length
                ? document.body.classList.contains("home")
                    ? (o.each(function () {
                          initProductSingle($(this));
                      }),
                      null)
                    : null === initProductSingle(o)
                    ? null
                    : ($body.on("click", ".product-single .product-image-full", t),
                      $body.on("click", ".single-product .btn-cart:not(.disabled)", e),
                      zoomImage(".product-gallery.row"),
                      void $body.on("click", ".rating-form .rating-stars > a", function (e) {
                          var t = $(this);
                          t.addClass("active").siblings().removeClass("active"), t.parent().addClass("selected"), t.closest(".rating-form").find("select").val(t.text()), e.preventDefault();
                      }))
                : null
        );
    };
});

var slider = (function () {
    function e(e, t) {
        return this.init(e, t);
    }
    var t = function (e) {
            var t,
                i = ["", "-xs", "-sm", "-md", "-lg", "-xl"];
            for (this.classList.remove("row"), a = 0; a < 6; ++a) for (t = 1; t <= 12; ++t) this.classList.remove("cols" + i[a] + "-" + t);
            if ((this.classList.remove("gutter-no"), this.classList.remove("gutter-sm"), this.classList.remove("gutter-lg"), this.classList.contains("animation-slider")))
                for (var o = this.children, n = o.length, a = 0; a < n; ++a) o[a].setAttribute("data-index", a + 1);
        },
        i = function (e) {
            var t,
                i = this.firstElementChild.firstElementChild.children,
                o = i.length;
            for (t = 0; t < o; ++t)
                if (!i[t].classList.contains("active")) {
                    var n,
                        a = byClass("appear-animate", i[t]);
                    for (n = a.length - 1; n >= 0; --n) a[n].classList.remove("appear-animate");
                }
            var s = $(e.currentTarget);
            s.find("video").on("ended", function () {
                $(this).closest(".owl-item").hasClass("active") &&
                    (!0 === s.data("owl.carousel").options.autoplay
                        ? (!1 === s.data("owl.carousel").options.loop && s.data().children - 1 === s.find(".owl-item.active").index() && ((this.loop = !0), this.play()), s.trigger("next.owl.carousel"), s.trigger("play.owl.autoplay"))
                        : ((this.loop = !0), this.play()));
            });
        },
        o = function (e) {
            $(window).trigger("appear.check");
            var t = $(e.currentTarget),
                i = t.find(".owl-item.active video");
            t.find(".owl-item:not(.active) video").each(function () {
                this.paused || t.trigger("play.owl.autoplay"), this.pause(), (this.currentTime = 0);
            }),
                i.length &&
                    (!0 === t.data("owl.carousel").options.autoplay && t.trigger("stop.owl.autoplay"),
                    i.each(function () {
                        this.paused && this.play();
                    }));
        },
        n = function (e) {
            var t = this;
            $(e.currentTarget)
                .find(".owl-item.active .slide-animate")
                .each(function () {
                    var e = $(this),
                        i = $.extend(!0, {}, defaults.animation, parseOptions(e.data("animation-options"))),
                        o = i.duration,
                        n = i.delay,
                        a = i.name;
                    e.css("animation-duration", o);
                    var s = requestTimeout(
                        function () {
                            e.addClass(a), e.addClass("show-content");
                        },
                        n ? 1e3 * Number(n.slice(0, -1)) : 0
                    );
                    t.timers.push(s);
                });
        },
        a = function (e) {
            $(e.currentTarget)
                .find(".owl-item.active .slide-animate")
                .each(function () {
                    var e = $(this);
                    e.addClass("show-content"), e.attr("style", "");
                });
        },
        s = function (e) {
            var t = $(e.currentTarget);
            (this.translateFlag = 1),
                (this.prev = this.next),
                t.find(".owl-item .slide-animate").each(function () {
                    var e = $(this),
                        t = $.extend(!0, {}, defaults.animation, parseOptions(e.data("animation-options")));
                    e.removeClass(t.name);
                });
        },
        d = function (e) {
            var t = this,
                i = $(e.currentTarget);
            if (1 == t.translateFlag) {
                if (((t.next = i.find(".owl-item").eq(e.item.index).children().attr("data-index")), i.find(".show-content").removeClass("show-content"), t.prev != t.next)) {
                    if ((i.find(".show-content").removeClass("show-content"), i.hasClass("animation-slider"))) {
                        for (var o = 0; o < t.timers.length; o++) deleteTimeout(t.timers[o]);
                        t.timers = [];
                    }
                    i.find(".owl-item.active .slide-animate").each(function () {
                        var e = $(this),
                            i = $.extend(!0, {}, defaults.animation, parseOptions(e.data("animation-options"))),
                            o = i.duration,
                            n = i.delay,
                            a = i.name;
                        e.css("animation-duration", o),
                            e.css("animation-delay", n),
                            e.css("transition-property", "visibility, opacity"),
                            e.css("transition-delay", n),
                            e.css("transition-duration", o),
                            e.addClass(a),
                            (o = o || "0.75s"),
                            e.addClass("show-content");
                        var s = requestTimeout(
                            function () {
                                e.css("transition-property", ""), e.css("transition-delay", ""), e.css("transition-duration", ""), t.timers.splice(t.timers.indexOf(s), 1);
                            },
                            n ? 1e3 * Number(n.slice(0, -1)) + 500 * Number(o.slice(0, -1)) : 500 * Number(o.slice(0, -1))
                        );
                        t.timers.push(s);
                    });
                } else i.find(".owl-item").eq(e.item.index).find(".slide-animate").addClass("show-content");
                t.translateFlag = 0;
            }
        };
    return (
        (e.zoomImage = function () {
            zoomImage(this.$element);
        }),
        (e.zoomImageRefresh = function () {
            this.$element.find("img").each(function () {
                var e = $(this);
                if ($.fn.elevateZoom) {
                    var t = e.data("elevateZoom");
                    void 0 !== t ? t.refresh() : ((defaults.zoomImage.zoomContainer = e.parent()), e.elevateZoom(defaults.zoomImage));
                }
            });
        }),
        (defaults.sliderPresets["product-single-carousel"].onInitialized = defaults.sliderPresets["product-gallery-carousel"].onInitialized = e.zoomImage),
        (defaults.sliderPresets["product-single-carousel"].onRefreshed = defaults.sliderPresets["product-gallery-carousel"].onRefreshed = e.zoomImageRefresh),
        (e.prototype.init = function (e, r) {
            (this.timers = []), (this.translateFlag = 0), (this.prev = 1), (this.next = 1), lazyload(e, !0);
            var l = e.attr("class").split(" "),
                c = $.extend(!0, {}, defaults.slider);
            l.forEach(function (e) {
                var t = defaults.sliderPresets[e];
                t && $.extend(!0, c, t);
            });
            e.find("video").each(function () {
                this.loop = !1;
            }),
                $.extend(!0, c, parseOptions(e.attr("data-owl-options")), r),
                (n = n.bind(this)),
                (s = s.bind(this)),
                (d = d.bind(this)),
                e.on("initialize.owl.carousel", t).on("initialized.owl.carousel", i).on("translated.owl.carousel", o),
                e.hasClass("animation-slider") && e.on("initialized.owl.carousel", n).on("resized.owl.carousel", a).on("translate.owl.carousel", s).on("translated.owl.carousel", d),
                e.owlCarousel(c);
        }),
        function (t, i) {
            $(t).each(function () {
                var t = $(this);
                call(function () {
                    new e(t, i);
                });
            });
        }
    );
});

var quantityInput = (function () {
    function e(e) {
        return this.init(e);
    }
    return (
        (e.min = 1),
        (e.max = 1e6),
        (e.value = 1),
        (e.prototype.init = function (t) {
            var i = this;
            (i.$minus = !1),
                (i.$plus = !1),
                (i.$value = !1),
                (i.value = !1),
                (i.startIncrease = i.startIncrease.bind(i)),
                (i.startDecrease = i.startDecrease.bind(i)),
                (i.stop = i.stop.bind(i)),
                (i.min = parseInt(t.attr("min"))),
                (i.max = parseInt(t.attr("max"))),
                i.min || t.attr("min", (i.min = e.min)),
                i.max || t.attr("max", (i.max = e.max)),
                (i.$value = t.val((i.value = e.value))),
                (i.$minus = t
                    .prev()
                    .on("mousedown", function (e) {
                        e.preventDefault(), i.startDecrease();
                    })
                    .on("touchstart", function (e) {
                        e.cancelable && e.preventDefault(), i.startDecrease();
                    })
                    .on("mouseup", i.stop)),
                (i.$plus = t
                    .next()
                    .on("mousedown", function (e) {
                        e.preventDefault(), i.startIncrease();
                    })
                    .on("touchstart", function (e) {
                        e.cancelable && e.preventDefault(), i.startIncrease();
                    })
                    .on("mouseup", i.stop)),
                $body.on("mouseup", i.stop).on("touchend", i.stop).on("touchcancel", i.stop);
        }),
        (e.prototype.startIncrease = function (e) {
            e && e.preventDefault();
            var t = this;
            (t.value = t.$value.val()),
                t.value < t.max && t.$value.val(++t.value),
                (t.increaseTimer = requestTimeout(function () {
                    (t.speed = 1),
                        (t.increaseTimer = requestInterval(function () {
                            t.$value.val((t.value = Math.min(t.value + Math.floor((t.speed *= 1.05)), t.max)));
                        }, 50));
                }, 400));
        }),
        (e.prototype.stop = function (e) {
            deleteTimeout(this.increaseTimer), deleteTimeout(this.decreaseTimer);
        }),
        (e.prototype.startDecrease = function () {
            var e = this;
            (e.value = e.$value.val()),
                e.value > e.min && e.$value.val(--e.value),
                (e.decreaseTimer = requestTimeout(function () {
                    (e.speed = 1),
                        (e.decreaseTimer = requestInterval(function () {
                            e.$value.val((e.value = Math.max(e.value - Math.floor((e.speed *= 1.05)), e.min)));
                        }, 50));
                }, 400));
        }),
        function (t) {
            $(t).each(function () {
                var t = $(this);
                t.data("quantityInput") || t.data("quantityInput", new e(t));
            });
        }
    );
});

var Menu = {
    init: function () {
        this.initMenu(), this.initMobileMenu(), this.initFilterMenu(), this.initCategoryMenu(), this.initCollapsibleWidget();
    },
    initMenu: function () {
        $(".menu li").each(function () {
            this.lastElementChild && ("UL" === this.lastElementChild.tagName || this.lastElementChild.classList.contains("megamenu")) && this.classList.add("submenu");
        }),
            $(".main-nav .megamenu, .main-nav .submenu > ul").each(function () {
                var e = $(this),
                    t = e.offset().left,
                    i = t + e.outerWidth() - (window.innerWidth - 20);
                i >= 0 && t > 20 && e.css("margin-left", "-=" + i);
            }),
            $window.on("resize", function () {
                $(".main-nav .megamenu, .main-nav .submenu > ul").each(function () {
                    var e = $(this),
                        t = e.offset().left,
                        i = t + e.outerWidth() - (window.innerWidth - 20);
                    i >= 0 && t > 20 && e.css("margin-left", "-=" + i);
                });
            });
    },
    initMobileMenu: function () {
        function e() {
            $body.removeClass("mmenu-active");
        }
        $(".mobile-menu li, .toggle-menu li").each(function () {
            if (this.lastElementChild && ("UL" === this.lastElementChild.tagName || this.lastElementChild.classList.contains("megamenu"))) {
                var e = document.createElement("span");
                (e.className = "toggle-btn"), this.firstElementChild.appendChild(e);
            }
        }),
            $(".mobile-menu-toggle").on("click", function () {
                $body.addClass("mmenu-active");
            }),
            $(".mobile-menu-overlay").on("click", e),
            $(".mobile-menu-close").on("click", e),
            $window.on("resize", e);
    },
    initFilterMenu: function () {
        $(".search-ul li").each(function () {
            if (this.lastElementChild && "UL" === this.lastElementChild.tagName) {
                var e = document.createElement("i");
                (e.className = "fas fa-chevron-down"), this.classList.add("with-ul"), this.firstElementChild.appendChild(e);
            }
        }),
            $(".with-ul > a i, .toggle-btn").on("click", function (e) {
                $(this).parent().next().slideToggle(300).parent().toggleClass("show"),
                    setTimeout(function () {
                        $(".sticky-sidebar").trigger("recalc.pin");
                    }, 320),
                    e.preventDefault();
            });
    },
    initCategoryMenu: function () {
        var e = $(".category-dropdown");
        if (e.length) {
            var t = e.find(".dropdown-box");
            if (t.length) {
                var i = $(".main").offset().top + t[0].offsetHeight;
                (window.pageYOffset > i || window.innerWidth < minDesktopWidth) && e.removeClass("show"),
                    window.addEventListener(
                        "scroll",
                        function () {
                            window.pageYOffset <= i && window.innerWidth >= minDesktopWidth && e.removeClass("show");
                        },
                        { passive: !0 }
                    ),
                    $(".category-toggle").on("click", function (e) {
                        e.preventDefault();
                    }),
                    e.on("mouseover", function (t) {
                        window.pageYOffset > i && window.innerWidth >= minDesktopWidth && e.addClass("show");
                    }),
                    e.on("mouseleave", function (t) {
                        window.pageYOffset > i && window.innerWidth >= minDesktopWidth && e.removeClass("show");
                    });
            }
            if (e.hasClass("with-sidebar")) {
                var o = byClass("sidebar");
                o.length &&
                    (e.find(".dropdown-box").css("width", o[0].offsetWidth - 20),
                    $window.on("resize", function () {
                        e.find(".dropdown-box").css("width", o[0].offsetWidth - 20);
                    }));
            }
        }
    },
    initCollapsibleWidget: function () {
        $(".widget-collapsible .widget-title").each(function () {
            var e = document.createElement("span");
            (e.className = "toggle-btn"), this.appendChild(e);
        }),
            $(".widget-collapsible .widget-title").on("click", function (e) {
                var t = $(this);
                if (!t.hasClass("sliding")) {
                    var i = t.siblings(".widget-body");
                    t.hasClass("collapsed") || i.css("display", "block"),
                        t.addClass("sliding"),
                        i.slideToggle(300, function () {
                            t.removeClass("sliding");
                        }),
                        t.toggleClass("collapsed"),
                        setTimeout(function () {
                            $(".sticky-sidebar").trigger("recalc.pin");
                        }, 320);
                }
            });
    },
}

Minipopup = (function () {
    var e,
        t = 0,
        i = [],
        o = !1,
        n = [],
        a = !1,
        s = function () {
            if (!o) for (var e = 0; e < n.length; ++e) (n[e] -= 200) <= 0 && this.close(e--);
        };
    return {
        init: function () {
            var t = document.createElement("div");
            (t.className = "minipopup-area"),
                byClass("page-wrapper")[0].appendChild(t),
                (e = $(t)).on("click", ".btn-close", function (e) {
                    self.close($(this).closest(".minipopup-box").index());
                }),
                (this.close = this.close.bind(this)),
                (s = s.bind(this));
        },
        open: function (o, d) {
            var r,
                l = this,
                c = $.extend(!0, {}, defaults.minipopup, o);
            c.isPurchased ? (c.detailTemplate = parseTemplate(c.purchasedTemplate, c)) : (c.detailTemplate = parseTemplate(null != c.count ? c.priceQuantityTemplate : c.priceTemplate, c)),
                null != c.rating && (c.detailTemplate += parseTemplate(c.ratingTemplate, c)),
                (r = $(parseTemplate(c.template, c))),
                (l.space = c.space),
                (r.appendTo(e).css("top", -t).find("img")[0].onload = function () {
                    (t += r[0].offsetHeight + l.space),
                        r.addClass("show"),
                        r.offset().top - window.pageYOffset < 0 && (l.close(), r.css("top", -t + r[0].offsetHeight + l.space)),
                        r
                            .on("mouseenter", function () {
                                l.pause();
                            })
                            .on("mouseleave", function () {
                                l.resume();
                            })
                            .on("touchstart", function (e) {
                                l.pause(), e.stopPropagation();
                            })
                            .on("mousedown", function () {
                                $(this).addClass("focus");
                            })
                            .on("mouseup", function () {
                                l.close($(this).index());
                            }),
                        $body.on("touchstart", function () {
                            l.resume();
                        }),
                        i.push(r),
                        n.push(c.delay),
                        n.length > 1 || (a = setInterval(s, 200)),
                        d && d(r);
                });
        },
        close: function (e) {
            var o = void 0 === e ? 0 : e,
                s = i.splice(o, 1)[0];
            n.splice(o, 1)[0],
                (t -= s[0].offsetHeight + this.space),
                s.removeClass("show"),
                setTimeout(function () {
                    s.remove();
                }, 300),
                i.forEach(function (e, t) {
                    t >= o && e.hasClass("show") && e.stop(!0, !0).animate({ top: parseInt(e.css("top")) + e[0].offsetHeight + 20 }, 600, "easeOutQuint");
                }),
                i.length || clearTimeout(a);
        },
        pause: function () {
            o = !0;
        },
        resume: function () {
            o = !1;
        },
    };
});

function minipopup_init(){

}

function minipopup_open(){

}

var floatSVG = (function () {
    function e(e, t) {
        (this.$el = $(e)), this.set(t), this.start();
    }
    return (
        (e.prototype.set = function (e) {
            this.options = $.extend({ delta: 15, speed: 10, size: 1 }, "string" == typeof e ? parseOptions(e) : e);
        }),
        (e.prototype.getDeltaY = function (e) {
            return Math.sin(((2 * Math.PI * e) / this.width) * this.options.size) * this.options.delta;
        }),
        (e.prototype.start = function () {
            (this.update = this.update.bind(this)),
                (this.timeStart = Date.now() - parseInt(100 * Math.random())),
                this.$el.find("path").each(function () {
                    $(this).data("original", this.getAttribute("d").replace(/([\d])\s*\-/g, "$1,-"));
                }),
                window.addEventListener("resize", this.update, { passive: !0 }),
                window.addEventListener("scroll", this.update, { passive: !0 }),
                $window.on("check_float_svg", this.update),
                this.update();
        }),
        (e.prototype.update = function () {
            var e = this;
            this.$el.length &&
                isOnScreen(this.$el[0]) &&
                requestTimeout(function () {
                    e.draw();
                }, 16);
        }),
        (e.prototype.draw = function () {
            var e = this,
                t = ((Date.now() - this.timeStart) * this.options.speed) / 200;
            (this.width = this.$el.width()),
                this.width &&
                    (this.$el.find("path").each(function () {
                        var i = t,
                            o = 0;
                        this.setAttribute(
                            "d",
                            $(this)
                                .data("original")
                                .replace(/M([\d|\.]*),([\d|\.]*)/, function (t, n, a) {
                                    return n && a ? "M" + n + "," + (parseFloat(a) + (o = e.getDeltaY((i += parseFloat(n))))).toFixed(3) : t;
                                })
                                .replace(/([c|C])[^A-Za-z]*/g, function (n, a) {
                                    if (a) {
                                        var s = n.slice(1).split(",").map(parseFloat);
                                        if (6 == s.length)
                                            return (
                                                "C" == a
                                                    ? ((s[1] += e.getDeltaY(t + s[0])), (s[3] += e.getDeltaY(t + s[2])), (s[5] += e.getDeltaY((i = t + s[4]))))
                                                    : ((s[1] += e.getDeltaY(i + s[0]) - o), (s[3] += e.getDeltaY(i + s[2]) - o), (s[5] += e.getDeltaY((i += s[4])) - o)),
                                                (o = e.getDeltaY(i)),
                                                a +
                                                    s
                                                        .map(function (e) {
                                                            return e.toFixed(3);
                                                        })
                                                        .join(",")
                                            );
                                    }
                                    return n;
                                })
                        );
                    }),
                    this.update());
        }),
        function (t) {
            $(t).each(function () {
                var t,
                    i = $(this);
                "svg" == this.tagName && ((t = i.data("float-svg")) ? t.set(i.attr("data-float-options")) : i.data("float-svg", new e(this, i.attr("data-float-options"))));
            });
        }
    );
});

var Shop = {
    init: function () {
        this.initProductsQuickview(),
            this.initProductsCartAction(),
            this.initProductsLoad(),
            this.initProductsScrollLoad(".scroll-load"),
            this.initProductType("slideup"),
            this.initVariation(),
            this.initWishlistButton(".product:not(.product-single) .btn-wishlist"),
            call(ratingTooltip, 500),
            this.initSelectMenu(".select-menu"),
            priceSlider(".filter-price-slider");
    },
    initVariation: function (e) {
        $(".product:not(.product-single) .product-variations > a").on("click", function (e) {
            var t = $(this),
                i = t.closest(".product").find(".product-media img");
            i.data("image-src") || i.data("image-src", i.attr("src")),
                t.toggleClass("active").siblings().removeClass("active"),
                t.hasClass("active") ? i.attr("src", t.data("src")) : (i.attr("src", i.data("image-src")), t.blur()),
                e.preventDefault();
        });
    },
    initProductType: function (e) {
        "slideup" === e &&
            ($(".product-slideup-content .product-details").each(function (e) {
                var t = $(this),
                    i = t.find(".product-hide-details").outerHeight(!0);
                t.height(t.height() - i);
            }),
            $(byClass("product-slideup-content"))
                .on("mouseenter touchstart", function (e) {
                    var t = $(this),
                        i = t.find(".product-hide-details").outerHeight(!0);
                    t.find(".product-details").css("transform", "translateY(" + -i + "px)"), t.find(".product-hide-details").css("transform", "translateY(" + -i + "px)");
                })
                .on("mouseleave touchleave", function (e) {
                    var t = $(this);
                    t.find(".product-hide-details").outerHeight(!0);
                    t.find(".product-details").css("transform", "translateY(0)"), t.find(".product-hide-details").css("transform", "translateY(0)");
                }));
    },
    initSelectMenu: function () {
        $body
            .on("mousedown", ".select-menu", function (e) {
                var t = $(e.currentTarget),
                    i = $(e.target),
                    o = t.hasClass("opened");
                t.hasClass("fixed") ? e.stopPropagation() : $(".select-menu").removeClass("opened"),
                    t.is(i.parent())
                        ? (o || t.addClass("opened"), e.stopPropagation())
                        : (i.parent().toggleClass("active"),
                          i.parent().hasClass("active")
                              ? ($(".select-items").show(),
                                $('<a href="#" class="select-item">' + i.text() + '<i class="d-icon-times"></i></a>')
                                    .insertBefore(".select-items .filter-clean")
                                    .hide()
                                    .fadeIn()
                                    .data("link", i.parent()))
                              : $(".select-items > .select-item")
                                    .filter(function (e, t) {
                                        return t.innerText == i.text();
                                    })
                                    .fadeOut(function () {
                                        $(this).remove(), $(".select-items").children().length < 2 && $(".select-items").hide();
                                    }));
            })
            .on("mousedown", function (e) {
                $(".select-menu").removeClass("opened");
            })
            .on("click", ".select-menu a", function (e) {
                e.preventDefault();
            })
            .on("click", ".select-items .filter-clean", function (e) {
                var t = $(this);
                t.siblings().each(function () {
                    var e = $(this).data("link");
                    e && e.removeClass("active");
                }),
                    t.parent().fadeOut(function () {
                        t.siblings().remove();
                    }),
                    e.preventDefault();
            })
            .on("click", ".select-item i", function (e) {
                $(e.currentTarget)
                    .parent()
                    .fadeOut(function () {
                        var e = $(this),
                            t = e.data("link");
                        t && t.toggleClass("active"), e.remove(), $(".select-items").children().length < 2 && $(".select-items").hide();
                    }),
                    e.preventDefault();
            })
            .on("click", ".filter-clean", function (e) {
                $(".shop-sidebar .filter-items .active").removeClass("active"), e.preventDefault();
            })
            .on("click", ".filter-items a", function (e) {
                var t = $(this).closest(".filter-items");
                t.hasClass("search-ul") ||
                    t.parent().hasClass("select-menu") ||
                    (t.hasClass("filter-price") ? ($(this).parent().siblings().removeClass("active"), $(this).parent().toggleClass("active"), e.preventDefault()) : ($(this).parent().toggleClass("active"), e.preventDefault()));
            });
    },
    initProductsQuickview: function () {
        $body.on("click", ".btn-quickview", function (e) {
            e.preventDefault(),
                popup(
                    {
                        items: { src: "assets/ajax/quickview.html" },
                        callbacks: {
                            ajaxContentAdded: function () {
                                this.wrap.imagesLoaded(function () {
                                    initProductSingle($(".mfp-product .product-single"));
                                });
                            },
                        },
                    },
                    "quickview"
                );
        });
    },
    initProductsCartAction: function () {
        $body
            .on("click", ".cart-offcanvas .cart-toggle", function (e) {
                $(".cart-dropdown").addClass("opened"), e.preventDefault();
            })
            .on("click", ".cart-offcanvas .cart-header .btn-close", function (e) {
                $(".cart-dropdown").removeClass("opened"), e.preventDefault();
            })
            .on("click", ".cart-offcanvas .cart-overlay", function (e) {
                $(".cart-dropdown").removeClass("opened"), e.preventDefault();
            })
            .on("click", ".product:not(.product-variable) .btn-product-icon.btn-cart, .product:not(.product-variable) .btn-product.btn-cart", function (e) {
                e.preventDefault();
                var t = $(this).closest(".product");
                t.hasClass("product-single") ||
                    Minipopup.open({
                        message: "Successfully Added",
                        productClass: " product-cart",
                        name: t.find(".product-name").text(),
                        nameLink: t.find(".product-name > a").attr("href"),
                        imageSrc: t.find(".product-media img").attr("src"),
                        imageLink: t.find(".product-name > a").attr("href"),
                        price: t.find(".product-price .new-price, .product-price .price").html(),
                        count: t.find(".quantity").length > 0 ? t.find(".quantity").val() : 1,
                        actionTemplate:
                            '<div class="action-group d-flex"><a href="cart.html" class="btn btn-sm btn-outline btn-primary btn-rounded">View Cart</a><a href="checkout.html" class="btn btn-sm btn-primary btn-rounded">Check Out</a></div>',
                    });
            });
    },
    initProductsLoad: function () {
        $(".btn-load").on("click", function (e) {
            var t = $(this),
                i = $(t.data("load-to")),
                o = t.html();
            t.text("Loading ..."),
                t.addClass("btn-loading"),
                $(".d-loading").css("display", "block"),
                e.preventDefault(),
                $.ajax({
                    url: t.attr("href"),
                    success: function (e) {
                        var n = $(e);
                        setTimeout(function () {
                            i.isotope("insert", n), t.html(o);
                            var e = parseInt(t.data("load-count") ? t.data("load-count") : 0);
                            t.data("load-count", ++e), t.removeClass("btn-loading"), $(".d-loading").css("display", "none"), e >= 2 && t.hide();
                        }, 350);
                    },
                    failure: function () {
                        t.text("Sorry something went wrong.");
                    },
                });
        });
    },
    initProductsScrollLoad: function (e) {
        var t,
            i = _$(e),
            o = $(e).data("url");
        o || (o = "ajax/ajax-products.html");
        var n = function (e) {
            window.pageYOffset > t + i.outerHeight() - window.innerHeight - 150 &&
                "loading" != i.data("load-state") &&
                $.ajax({
                    url: o,
                    success: function (e) {
                        var t = $(e);
                        i.data("load-state", "loading"),
                            i.next().hasClass("load-more-overlay") ? i.next().addClass("loading") : $('<div class="mt-4 mb-4 load-more-overlay loading"></div>').insertAfter(i),
                            setTimeout(function () {
                                i.next().removeClass("loading"),
                                    i.append(t),
                                    setTimeout(function () {
                                        i.find(".product-wrap.fade:not(.in)").addClass("in");
                                    }, 200),
                                    i.data("load-state", "loaded");
                            }, 500);
                        var o = parseInt(i.data("load-count") ? i.data("load-count") : 0);
                        i.data("load-count", ++o), o > 2 && window.removeEventListener("scroll", n, { passive: !0 });
                    },
                    failure: function () {
                        $this.text("Sorry something went wrong.");
                    },
                });
        };
        i.length > 0 && ((t = i.offset().top), window.addEventListener("scroll", n, { passive: !0 }));
    },
    initWishlistButton: function (e) {
        $body.on("click", e, function (e) {
            var t = $(this);
            t.toggleClass("added").addClass("load-more-overlay loading"),
                setTimeout(function () {
                    t.removeClass("load-more-overlay loading").find("i").toggleClass("d-icon-heart").toggleClass("d-icon-heart-full"), t.hasClass("added") ? t.attr("title", "Remove from wishlist") : t.attr("title", "Add to wishlist");
                }, 500),
                e.preventDefault();
        });
    },
}

function prepare() {
    $body.hasClass("with-flex-container") && window.innerWidth >= 1200 && $body.addClass("sidebar-active");
}
function initLayout() {
    isotopes(".grid:not(.grid-float)"), stickySidebar(".sticky-sidebar");
}
function init() {
    appearAnimate(".appear-animate");
        Minipopup.init;
        Shop.init();
        initProductSinglePage();
        slider(".owl-carousel");
        headerToggleSearch(".hs-toggle");
        closeTopNotice(".btn-notice-close");
        stickyContent(".product-sticky-content, .sticky-header", { top: !1 });
        stickyContent(".sticky-footer", defaults.stickyFooter);
        stickyContent(".sticky-toolbox", defaults.stickyToolbox);
        sidebar("sidebar");
        sidebar("right-sidebar");
        sidebar("top-sidebar");
        quantityInput(".quantity");
        playableVideo(".post-video");
        initAccordion(".card-header > a");
        initTab(".nav-tabs");
        initAlert(".alert");
        parallax(".parallax");
        countTo(".count-to");
        countdown(".product-countdown, .countdown");
        Menu.init();
        initZoom();
        initNavFilter(".nav-filters .nav-filter");
        initPopups();
        initPurchasedMinipopup();
        initScrollTopButton();
        floatSVG(".float-svg");
        initShowVendorSearch(".toolbox .form-toggle-btn");
        status = "complete";
        prepare();

        $body.addClass("loaded");
        $window.trigger("riode_load");
        call(initLayout);
        call(init);
        $window.trigger("riode_complete");
        refreshSidebar();
}

init();

