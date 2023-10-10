"use strict";
window.addEventListener("DOMContentLoaded", function (e) {
  let t = document.getElementById("input-left"),
    n = document.getElementById("input-right"),
    r = document.getElementById("min-value"),
    i = document.getElementById("max-value"),
    c = document.querySelector(".slider > .thumb.left"),
    o = document.querySelector(".slider > .thumb.right"),
    a = document.querySelector(".slider > .range");
  (r.value = t.value), (i.value = n.value);
  t.addEventListener("input", function () {
    r.value = t.value;
    let e = t,
      i = [parseInt(e.min), parseInt(e.max)],
      o = i[0],
      d = i[1];
    e.value = Math.min(parseInt(e.value), parseInt(n.value) - 1);
    let l = ((e.value - o) / (d - o)) * 100;
    (c.style.left = l + "%"), (a.style.left = l + "%");
  }),
    n.addEventListener("input", function () {
      i.value = n.value;
      let e = n,
        r = [parseInt(e.min), parseInt(e.max)],
        c = r[0],
        d = r[1];
      e.value = Math.max(parseInt(e.value), parseInt(t.value) + 1);
      let l = ((e.value - c) / (d - c)) * 100;
      (o.style.right = 100 - l + "%"), (a.style.right = 100 - l + "%");
    });
  let d = document.querySelectorAll(".pagination__item"),
    l = document.querySelectorAll(".pagination__link"),
    s = document.querySelectorAll(".rating__item");
  d.forEach(function (e) {
    l.forEach(function (e) {
      e.addEventListener("click", function (e) {
        e.preventDefault();
        let t = e.currentTarget.dataset.number;
        d.forEach(function (e) {
          e.classList.remove("pagination__item--active");
        }),
          e.currentTarget.parentNode.classList.add("pagination__item--active"),
          s.forEach(function (e) {
            e.classList.remove("rating__item--active");
          }),
          document
            .querySelectorAll('[data-page="'.concat(t, '"]'))
            .forEach(function (e) {
              e.classList.add("rating__item--active");
            });
      });
    });
  });
  let u = window.matchMedia("(max-width:992px)");
  function m(e) {
    e.matches &&
      d.forEach(function (e) {
        l.forEach(function (e) {
          window.innerWidth <= 992 &&
            (s.forEach(function (e) {
              e.classList.remove("rating__item--active");
            }),
            document
              .querySelectorAll('[data-target="1"]')
              .forEach(function (e) {
                e.classList.add("rating__item--active");
              }),
            e.addEventListener("click", function (e) {
              e.preventDefault();
              let t = e.currentTarget.dataset.number;
              d.forEach(function (e) {
                e.classList.remove("pagination__item--active");
              }),
                e.currentTarget.parentNode.classList.add(
                  "pagination__item--active"
                ),
                s.forEach(function (e) {
                  e.classList.remove("rating__item--active");
                }),
                document
                  .querySelectorAll('[data-target="'.concat(t, '"]'))
                  .forEach(function (e) {
                    e.classList.add("rating__item--active");
                  });
            }));
        });
      });
  }
  u.addEventListener("change", m), m(u);
  for (
    let p = document.querySelectorAll(".dropdown__btn"),
      h = document.querySelectorAll(".dropdown__menu"),
      v = function (e) {
        p[e].addEventListener("click", function (t) {
          t.preventDefault(),
            p[e].classList.toggle("dropdown__btn--active"),
            document
              .querySelectorAll(".dropdown__menu--active")
              .forEach(function (t) {
                t !== h[e] && t.classList.remove("dropdown__menu--active");
              }),
            document
              .querySelectorAll(".dropdown__btn--active")
              .forEach(function (t) {
                t !== p[e] && t.classList.remove("dropdown__btn--active");
              }),
            h[e].classList.toggle("dropdown__menu--active");
        });
      },
      w = 0;
    p.length;
    w++
  )
    v(w);
}),
  window.addEventListener("DOMContentLoaded", function (e) {
    let t = document.querySelector(".geo"),
      n =
        (new Choices(t, {
          allowHTML: !0,
          searchEnabled: !1,
          itemSelectText: "",
        }),
        document.querySelector(".category")),
      r =
        (new Choices(n, {
          allowHTML: !0,
          searchEnabled: !1,
          itemSelectText: "",
        }),
        window.matchMedia("(max-width:1200px)")),
      i = window.matchMedia("(max-width:992px)");
    function c(e) {
      if (e.matches) {
        document
          .querySelector(".header__container")
          .classList.remove("container"),
          document.querySelector(".info").classList.add("container"),
          document.querySelector(".list").classList.add("container");
        let t = document.querySelector(".header__account"),
          n = document.querySelector(".header__cart");
        document.querySelector(".list").appendChild(t),
          document.querySelector(".list").appendChild(n);
      } else {
        document.querySelector(".header__container").classList.add("container"),
          document.querySelector(".info").classList.remove("container"),
          document.querySelector(".list").classList.remove("container");
        let r = document.querySelector(".header__account"),
          i = document.querySelector(".header__cart");
        document.querySelector(".header__profile").appendChild(r),
          document.querySelector(".header__profile").appendChild(i);
      }
    }
    function o(e) {
      if (e.matches) {
        document
          .querySelector(".header__container")
          .classList.remove("container"),
          document.querySelector(".info").classList.add("container"),
          document.querySelector(".list").classList.add("container");
        let t = document.querySelector(".header__account"),
          n = document.querySelector(".header__cart");
        document.querySelector(".header__navigation").appendChild(t),
          document.querySelector(".header__navigation").appendChild(n);
      }
      if (window.innerWidth > 992 && window.innerWidth < 1200) {
        document
          .querySelector(".header__container")
          .classList.remove("container"),
          document.querySelector(".info").classList.add("container"),
          document.querySelector(".list").classList.add("container");
        let r = document.querySelector(".header__account"),
          i = document.querySelector(".header__cart");
        document.querySelector(".list").appendChild(r),
          document.querySelector(".list").appendChild(i);
      }
    }
    if (
      (r.addEventListener("change", c),
      c(r),
      i.addEventListener("change", o),
      o(i),
      window.innerWidth > 1200)
    ) {
      document.querySelector(".header__container").classList.add("container"),
        document.querySelector(".info").classList.remove("container"),
        document.querySelector(".list").classList.remove("container");
      let a = document.querySelector(".header__account"),
        d = document.querySelector(".header__cart");
      document.querySelector(".header__profile").appendChild(a),
        document.querySelector(".header__profile").appendChild(d);
    }
    if (window.innerWidth <= 1200) {
      document
        .querySelector(".header__container")
        .classList.remove("container"),
        document.querySelector(".info").classList.add("container"),
        document.querySelector(".list").classList.add("container");
      let l = document.querySelector(".header__account"),
        s = document.querySelector(".header__cart");
      document.querySelector(".list").appendChild(l),
        document.querySelector(".list").appendChild(s);
    }
    if (window.innerWidth <= 992) {
      document
        .querySelector(".header__container")
        .classList.remove("container"),
        document.querySelector(".info").classList.add("container"),
        document.querySelector(".list").classList.add("container");
      let u = document.querySelector(".header__account"),
        m = document.querySelector(".header__cart");
      document.querySelector(".header__navigation").appendChild(u),
        document.querySelector(".header__navigation").appendChild(m);
    }
    let p = document.querySelector(".burger");
    p.addEventListener("click", function (e) {
      e.preventDefault(),
        p.classList.toggle("is-open"),
        document
          .querySelector(".burger-menu")
          .classList.toggle("burger-menu--active");
    });
  }),
  window.addEventListener("DOMContentLoaded", function (e) {
    new window.JustValidate(".feedback__form", {
      errorLabelStyle: { color: "#FF6972" },
    })
      .addField("#name-home", [
        { rule: "required", errorMessage: "Введите имя" },
      ])
      .addField("#tel-home", [
        { rule: "required", errorMessage: "Введите телефон" },
        { rule: "number", errorMessage: "Недопустимый формат" },
      ])
      .addField("#email-home", [
        { rule: "required", errorMessage: "Введите e-mail" },
        { rule: "email", errorMessage: "Недопустимый формат" },
      ])
      .addField(".feedback__checkbox", [
        { rule: "required", errorMessage: "Пожалуйста, примите соглашение!" },
      ]);
    new Swiper("#swiper-hero", {
      loop: !0,
      pagination: { el: "#pagination-hero", clickable: !0 },
    });
    new Swiper("#swiper-special", {
      navigation: { nextEl: "#next-special", prevEl: "#prev-special" },
      spaceBetween: 32,
      slidesPerView: "auto",
      breakpoints: {
        320: { spaceBetween: 16, slidesPerView: 1 },
        700: { slidesPerGroup: 1 },
        768: { spaceBetween: 32, slidesPerGroup: 2 },
        1200: { spaceBetween: 32, slidesPerGroup: 3 },
      },
    }).initialSlide = 2;
    new Swiper("#swiper-useful", {
      navigation: { nextEl: "#next-useful", prevEl: "#prev-useful" },
      spaceBetween: 32,
      slidesPerView: 2,
      breakpoints: {
        320: { spaceBetween: 16, slidesPerView: 1 },
        381: { slidesPerView: 2, spaceBetween: 16 },
        700: { slidesPerView: 2, spaceBetween: 32 },
        769: { spaceBetween: 32, slidesPerView: 3 },
        1025: { slidesPerView: 2 },
      },
    });
    window.addEventListener("resize", function () {
      window.innerWidth > 320 &&
        document.querySelectorAll(".category__link ").forEach(function (e) {
          e.innerHTML =
            '\n              В каталог\n                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <g clip-path="url(#clip0_54091_2350)">\n                  <circle cx="11" cy="11" r="10" stroke-width="2"></circle>\n                   <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>\n                   </g>\n                   <defs>\n                   <clipPath id="clip0_54091_2350">\n                    <rect width="22" height="22" fill="white"></rect>\n                   </clipPath>\n                     </defs>\n                    </svg>';
        });
    });
    let t = window.matchMedia("(max-width:320px)");
    function n(e) {
      e.matches &&
        ((document.querySelector(".sofas").innerHTML =
          '\n    Диваны\n    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                    <g clip-path="url(#clip0_54091_2350)">\n                                        <circle cx="11" cy="11" r="10" stroke-width="2"></circle>\n                                        <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>\n                                    </g>\n                                    <defs>\n                                        <clipPath id="clip0_54091_2350">\n                                            <rect width="22" height="22" fill="white"></rect>\n                                        </clipPath>\n                                    </defs>\n                                </svg>'),
        (document.querySelector(".beds").innerHTML =
          '\n                                Кровати\n                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                                                <g clip-path="url(#clip0_54091_2350)">\n                                                                    <circle cx="11" cy="11" r="10" stroke-width="2"></circle>\n                                                                    <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>\n                                                                </g>\n                                                                <defs>\n                                                                    <clipPath id="clip0_54091_2350">\n                                                                        <rect width="22" height="22" fill="white"></rect>\n                                                                    </clipPath>\n                                                                </defs>\n                                                            </svg>'),
        (document.querySelector(".armchair").innerHTML =
          '\n             Кресла\n              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <g clip-path="url(#clip0_54091_2350)">\n                <circle cx="11" cy="11" r="10" stroke-width="2"></circle>\n                <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>\n                </g>\n                <defs>\n                <clipPath id="clip0_54091_2350">\n                 <rect width="22" height="22" fill="white"></rect>\n                  </clipPath>\n                  </defs>\n                  </svg>'),
        (document.querySelector(".curbstones-dressers").innerHTML =
          '\n          Тумбы и&nbsp;комоды\n            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n             <g clip-path="url(#clip0_54091_2350)">\n             <circle cx="11" cy="11" r="10" stroke-width="2"></circle>\n              <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>\n              </g>\n              <defs>\n              <clipPath id="clip0_54091_2350">\n               <rect width="22" height="22" fill="white"></rect>\n              </clipPath>\n                </defs>\n               </svg>'),
        (document.querySelector(".chairs").innerHTML =
          '\n               Стулья\n                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <g clip-path="url(#clip0_54091_2350)">\n                  <circle cx="11" cy="11" r="10" stroke-width="2"></circle>\n                   <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>\n                   </g>\n                   <defs>\n                   <clipPath id="clip0_54091_2350">\n                    <rect width="22" height="22" fill="white"></rect>\n                   </clipPath>\n                     </defs>\n                    </svg>'));
    }
    t.addEventListener("change", n), n(t);
    let r = window.matchMedia("(max-width:480px)");
    function i(e) {
      if (e.matches) {
        let t = document.querySelector(".special-btns");
        document.querySelector(".special__container").appendChild(t);
        let n = document.querySelector(".useful-btns");
        document.querySelector(".useful__container").appendChild(n);
      }
      if (window.innerWidth > 480) {
        let r = document.querySelector(".special-btns");
        document.querySelector(".special__block").appendChild(r);
        let i = document.querySelector(".useful-btns");
        document.querySelector(".useful__block").appendChild(i);
      }
    }
    r.addEventListener("change", i), i(r);
    let c = document.querySelector(".rating__link"),
      o = document.querySelectorAll(".rating__item");
    c.addEventListener("click", function (e) {
      e.preventDefault(),
        o.forEach(function (e) {
          e.classList.add("rating__item--active"), (c.style.display = "none");
        });
    });
  }),
  window.addEventListener("DOMContentLoaded", function (e) {
    let t, n, r, i, c;
    new Swiper("#swiper-similar", {
      navigation: { nextEl: "#next-similar", prevEl: "#prev-similar" },
      slidesPerView: 4,
      spaceBetween: 32,
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 16 },
        481: { slidesPerView: 2, spaceBetween: 32 },
        769: { slidesPerView: 3 },
        1025: { slidesPerView: 4 },
      },
    });
    !(function () {
      let e = document.createElement("div"),
        t = document.createElement("div"),
        n = document.createElement("div"),
        r = document.createElement("button"),
        i = document.createElement("p"),
        c = document.createElement("p"),
        o = document.createElement("form"),
        a = document.createElement("label"),
        d = document.createElement("label"),
        l = document.createElement("input"),
        s = document.createElement("input"),
        u = document.createElement("button"),
        m = document.createElement("label"),
        p = document.createElement("input"),
        h = document.createElement("span");
      e.classList.add("modal", "modal-buy"),
        t.classList.add("modal-overlay"),
        n.classList.add("modal-window"),
        r.classList.add("modal__exit"),
        i.classList.add("modal__title"),
        c.classList.add("modal__descr"),
        o.classList.add("modal__form"),
        a.classList.add("label"),
        d.classList.add("label"),
        l.classList.add("modal__input"),
        s.classList.add("modal__input"),
        (l.id = "name"),
        (l.placeholder = "Как вас зовут?"),
        (s.id = "tel"),
        (s.placeholder = "Ваш телефон"),
        u.classList.add("modal__btn"),
        m.classList.add("modal__label"),
        p.classList.add("modal__checkbox"),
        h.classList.add("checkbox"),
        (p.type = "checkbox"),
        (i.textContent = "Купить в один клик"),
        (c.innerHTML =
          "Чтобы оформить заказ&nbsp;&mdash; заполните формы ниже и&nbsp;наш\n        менеджер свяжется с&nbsp;вами в&nbsp;течении часа."),
        (u.textContent = "Отправить"),
        (m.innerHTML =
          'Принимаю <a href="" class="modal__policy">пользовательское соглашение</a>'),
        (r.innerHTML =
          '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3812 0.397739L11.2581 9.03977C11.8029 9.57009 11.8029 10.4299 11.2581 10.9602L2.3812 19.6023C1.83647 20.1326 0.953281 20.1326 0.408549 19.6023C-0.136183 19.0719 -0.136183 18.2121 0.408549 17.6818L8.29915 10L0.40855 2.31819C-0.136182 1.78787 -0.136181 0.928057 0.408551 0.397739C0.953283 -0.13258 1.83647 -0.13258 2.3812 0.397739Z"/>\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6188 0.397739L8.74188 9.03977C8.19715 9.57009 8.19715 10.4299 8.74188 10.9602L17.6188 19.6023C18.1635 20.1326 19.0467 20.1326 19.5915 19.6023C20.1362 19.0719 20.1362 18.2121 19.5915 17.6818L11.7009 10L19.5914 2.31819C20.1362 1.78787 20.1362 0.928057 19.5914 0.397739C19.0467 -0.13258 18.1635 -0.13258 17.6188 0.397739Z"/>\n        </svg>'),
        e.append(t),
        t.append(n),
        n.append(r, i, c, o),
        o.append(a, d, u, m),
        a.append(l),
        d.append(s),
        m.append(p, h),
        document.querySelector(".main").append(e);
      let v = new window.JustValidate(o, {
        errorLabelStyle: { color: "#FF6972" },
      });
      v
        .addField("#name", [{ rule: "required", errorMessage: "Введите имя" }])
        .addField("#tel", [
          { rule: "required", errorMessage: "Введите телефон" },
          { rule: "number", errorMessage: "Недопустимый формат" },
        ])
        .addField(".modal__checkbox", [
          { rule: "required", errorMessage: "Пожалуйста, примите соглашение!" },
        ]),
        o.addEventListener("submit", function (e) {
          e.preventDefault(),
            v.onSuccess(function () {
              e.target.reset(),
                v.refresh(),
                document
                  .querySelector(".modal-buy >.modal-overlay")
                  .classList.remove("is-open"),
                document
                  .querySelector(".modal-buy .modal-window")
                  .classList.remove("is-open"),
                document
                  .querySelector(".modal-success >.modal-overlay")
                  .classList.add("is-open"),
                document
                  .querySelector(".modal-success .modal-window")
                  .classList.add("is-open");
            });
        }),
        r.addEventListener("click", function (e) {
          v.refresh(), o.reset();
        }),
        n.addEventListener("click", function (e) {
          e._isClickWhithinModal = !0;
        }),
        e.addEventListener("click", function (e) {
          e._isClickWhithinModal ||
            (document
              .querySelector(".modal-success >.modal-overlay")
              .classList.remove("is-open"),
            document
              .querySelector(".modal-success .modal-window")
              .classList.remove("is-open"));
        });
    })(),
      (t = document.createElement("div")),
      (n = document.createElement("div")),
      (r = document.createElement("div")),
      (i = document.createElement("button")),
      (c = document.createElement("p")),
      t.classList.add("modal", "modal-success"),
      n.classList.add("modal-overlay"),
      r.classList.add("modal-window"),
      i.classList.add("modal__exit"),
      c.classList.add("modal__title"),
      (c.textContent = "Спасибо, мы вам перезвоним!"),
      (i.innerHTML =
        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3812 0.397739L11.2581 9.03977C11.8029 9.57009 11.8029 10.4299 11.2581 10.9602L2.3812 19.6023C1.83647 20.1326 0.953281 20.1326 0.408549 19.6023C-0.136183 19.0719 -0.136183 18.2121 0.408549 17.6818L8.29915 10L0.40855 2.31819C-0.136182 1.78787 -0.136181 0.928057 0.408551 0.397739C0.953283 -0.13258 1.83647 -0.13258 2.3812 0.397739Z"/>\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6188 0.397739L8.74188 9.03977C8.19715 9.57009 8.19715 10.4299 8.74188 10.9602L17.6188 19.6023C18.1635 20.1326 19.0467 20.1326 19.5915 19.6023C20.1362 19.0719 20.1362 18.2121 19.5915 17.6818L11.7009 10L19.5914 2.31819C20.1362 1.78787 20.1362 0.928057 19.5914 0.397739C19.0467 -0.13258 18.1635 -0.13258 17.6188 0.397739Z"/>\n        </svg>'),
      t.append(n),
      n.append(r),
      r.append(i, c),
      document.querySelector(".main").append(t),
      r.addEventListener("click", function (e) {
        e._isClickWhithinModal = !0;
      }),
      t.addEventListener("click", function (e) {
        e._isClickWhithinModal ||
          (document
            .querySelector(".modal-success >.modal-overlay")
            .classList.remove("is-open"),
          document
            .querySelector(".modal-success .modal-window")
            .classList.remove("is-open"));
      }),
      document
        .querySelector(".product-button")
        .addEventListener("click", function (e) {
          e.preventDefault(),
            document
              .querySelector(".modal-buy >.modal-overlay")
              .classList.add("is-open"),
            document
              .querySelector(".modal-buy .modal-window")
              .classList.add("is-open");
        }),
      document.querySelectorAll(".modal__exit").forEach(function (e) {
        e.addEventListener("click", function () {
          document.querySelectorAll(".modal-overlay").forEach(function (e) {
            e.classList.remove("is-open");
          }),
            document.querySelectorAll(".modal-window").forEach(function (e) {
              e.classList.remove("is-open");
            });
        });
      }),
      document.querySelectorAll(".modal__window").forEach(function (e) {
        e.addEventListener("click", function (e) {
          e._isClickWhithinModal = !0;
        });
      }),
      document.querySelectorAll(".modal").forEach(function (e) {
        e.addEventListener("click", function (e) {
          e._isClickWhithinModal ||
            (document.querySelectorAll(".modal-overlay").forEach(function (e) {
              e.classList.remove("is-open");
            }),
            document.querySelectorAll(".modal-window").forEach(function (e) {
              e.classList.remove("is-open");
            }));
        });
      });
    let o = window.matchMedia("(max-width:480px)");
    function a(e) {
      if (e.matches) {
        let t = document.querySelector(".similar-btns");
        document.querySelector(".similar__container").appendChild(t);
      }
      if (window.innerWidth > 480) {
        let n = document.querySelector(".similar-btns");
        document.querySelector(".similar__block ").appendChild(n);
      }
    }
    o.addEventListener("change", a),
      a(o),
      document
        .querySelector(".image-1")
        .addEventListener("click", function (e) {
          e.preventDefault(),
            document
              .querySelector(".modal-slider .modal-window")
              .classList.add("is-open"),
            document
              .querySelector(".modal-slider > .modal-overlay")
              .classList.add("is-open");
        });
    let d = new Swiper(".mySwiper", {
      spaceBetween: 78,
      slidesPerView: 4,
      freeMode: !0,
      watchSlidesProgress: !0,
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1401: { slidesPerView: 4 },
      },
    });
    new Swiper(".mySwiper2", {
      spaceBetween: 78,
      navigation: { nextEl: "#next-slider", prevEl: "#prev-slider" },
      thumbs: { swiper: d },
    });
    document
      .querySelector(".modal__exit")
      .addEventListener("click", function (e) {
        e.preventDefault(),
          document
            .querySelector(".modal-slider")
            .classList.remove("modal-slider--active");
      }),
      document
        .querySelector(".modal-window")
        .addEventListener("click", function (e) {
          e._isClickWhithinModal = !0;
        }),
      document.querySelector(".modal").addEventListener("click", function (e) {
        e._isClickWhithinModal ||
          document
            .querySelector(".modal-slider")
            .classList.remove("modal-slider--active");
      });
  });
let imageBlock = document.querySelector(".images-block");
imageBlock.childNodes.forEach(function (e) {
  e.addEventListener("click", function (t) {
    document.querySelector(".image-1").src = e.src;
  });
});
