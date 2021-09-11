"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, exports) {
  document.addEventListener('DOMContentLoaded', function () {
    ibg();
    chapterNumber();
    positionsToggle();
    initCustomSelect();
    initFileUpload();
    sideBarToggle();
    enrollToggle();
    formMultiSteps();
    partnersSlider();
    projectsSlider();
    reasonsSlider();
    certificateAdd();
    filter();
  }); // Background-image

  function ibg() {
    var ibg = document.querySelectorAll(".ibg");

    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
        ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  } //BildSlider


  var sliders = document.querySelectorAll('._swiper');

  if (sliders) {
    for (var index = 0; index < sliders.length; index++) {
      var slider = sliders[index];

      if (!slider.classList.contains('swiper-bild')) {
        var slider_items = slider.children;

        if (slider_items) {
          for (var _index = 0; _index < slider_items.length; _index++) {
            var el = slider_items[_index];
            el.classList.add('swiper-slide');
          }
        }

        var slider_content = slider.innerHTML;
        var slider_wrapper = document.createElement('ul');
        slider_wrapper.classList.add('swiper-wrapper');
        slider_wrapper.innerHTML = slider_content;
        slider.innerHTML = '';
        slider.appendChild(slider_wrapper);
        slider.classList.add('swiper-bild');
      }

      if (slider.classList.contains('_gallery')) {//slider.data('lightGallery').destroy(true);
      }
    }

    sliders_bild_callback();
  }

  function sliders_bild_callback(params) {}

  if (document.querySelector('.home-slider__body')) {
    var homeSliderThumbs = document.querySelector('.home-slider__thumbs');
    var homeSliderThumbsItems = document.querySelectorAll('.home-slider__thumb');
    var homeSliderThumbsIndex = Object.keys(homeSliderThumbs);
    var homeSlider = new Swiper('.home-slider__body', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      mousewheel: {
        invert: false,
        forceToAxis: true
      },
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,
      // Dotts
      pagination: {
        el: '.home-slider__dots',
        clickable: true
      },
      on: {
        slideChange: function slideChange() {
          homeSliderThumbsIndex.forEach(function (index) {
            homeSliderThumbs[index].classList.remove('active');

            if (parseInt(index) === homeSliderThumbs.activeIndex) {
              homeSliderThumbs[index].classList.add('active');
            }
          });
        }
      }
    });
    var homeThumbImgs = document.querySelectorAll('.home-slider__thumb-img');
    homeSliderThumbs.addEventListener('click', function (e) {
      homeThumbImgs.forEach(function (homeThumbImg) {
        if (homeThumbImg !== e.target) {
          homeThumbImg.classList.add('fade-img');
        } else {
          homeThumbImg.classList.remove('fade-img');
        }
      });
    });
    homeSliderThumbsItems.forEach(function (homeSliderThumb) {
      homeSliderThumb.addEventListener('click', function (e) {
        homeThumbImgs.forEach(function (homeThumbImg) {
          if (homeThumbImg !== e.target.parentElement) {
            homeThumbImg.classList.add('fade-img');
          } else {
            homeThumbImg.classList.remove('fade-img');
          }
        });
        var dataSlide = homeSliderThumb.getAttribute('data-slide');
        homeSlider.slideTo(parseInt(dataSlide));
      });
    });
  }

  ;

  if (document.querySelector('.values__slider-body')) {
    var valuesSlider = new Swiper('.values__slider-body', {
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      // Dotts
      pagination: {
        el: '.values__slider-dots',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  }

  ;

  if (document.querySelector('.resource-related__slider-body')) {
    var resourceSlider = new Swiper('.resource-related__slider-body', {
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
      // Dotts
      pagination: {
        el: '.resource-related__dots',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  }

  ;

  if (document.querySelector('.partners-more__slider-body')) {
    var _resourceSlider = new Swiper('.partners-more__slider-body', {
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,
      loop: false,
      // Dotts
      pagination: {
        el: '.partners-more__dots',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });
  }

  ;

  if (document.querySelector('.vertical-slider__slider-body')) {
    var verticalSlider = new Swiper('.vertical-slider__slider-body', {
      direction: "vertical",
      mousewheelControl: true,
      slidesPerView: 4,
      slidesPerGroup: 4,
      speed: 800,
      mousewheel: {
        invert: false
      },
      // Dotts
      pagination: {
        el: '.vertical-slider__dots',
        clickable: true
      }
    });
  }

  ; // get chapter number

  var chapterNumber = function chapterNumber() {
    var slideItems = document.querySelectorAll('.slide-vertical__item');

    for (var i = 0; i < slideItems.length; i++) {
      var text = slideItems[i].querySelector('.slide-vertical__item-label > span');
      text.innerText = [i + 1];
    }
  }; // resource-center cards


  function resizeGridItem(item) {
    var grid = document.getElementsByClassName("grid")[0];
    var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    var rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
  }

  function resizeAllGridItems() {
    var allItems = document.getElementsByClassName("item");

    for (var x = 0; x < allItems.length; x++) {
      resizeGridItem(allItems[x]);
    }
  }

  function resizeInstance(instance) {
    var item = instance.elements[0];
    resizeGridItem(item);
  }

  window.onload = resizeAllGridItems();
  window.addEventListener("resize", resizeAllGridItems);
  var allItems = document.getElementsByClassName("item");

  for (var x = 0; x < allItems.length; x++) {
    imagesLoaded(allItems[x], resizeInstance);
  } // animation function 


  var animItems = document.querySelectorAll('._anim-items');

  if (animItems.length > 0) {
    var animOnScroll = function animOnScroll() {
      for (var _index2 = 0; _index2 < animItems.length; _index2++) {
        var animItem = animItems[_index2];
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    };

    var offset = function offset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    window.addEventListener('scroll', animOnScroll);
    setTimeout(function () {
      animOnScroll();
    }, 300);
  } // map


  $(function () {
    $(".partners-map__map").mapael({
      map: {
        name: "world_countries",
        // zoom: {
        // 	enabled: true
        // },
        defaultArea: {
          attrs: {
            fill: "#e0e0e0",
            stroke: "#bdbdbd"
          }
        },
        defaultLink: {
          factor: 0.4,
          attrsHover: {
            stroke: "#a4e100"
          }
        },
        defaultPlot: {
          attrs: {
            fill: "#757575"
          },
          attrsHover: {
            opacity: 1
          },
          text: {
            attrs: {
              fill: "#424242"
            },
            attrsHover: {
              fill: "#000"
            }
          },
          eventHandlers: {
            click: function click() {
              $('.sidebar-partners').css({
                display: 'block'
              }).fadeIn('slow');
            }
          }
        }
      },
      plots: {
        'Canada': {
          type: "circle",
          size: 8,
          latitude: 57.5596,
          longitude: -103.0923,
          text: {
            content: "Canada",
            attrs: {
              "font-size": 12
            }
          },
          link: "https://goo.gl/maps/HoTP8mk9fojamoEF6"
        },
        'Unated States': {
          type: "circle",
          size: 8,
          latitude: 40.4401,
          longitude: -99.4266,
          text: {
            content: "Unated States",
            attrs: {
              "font-size": 12
            }
          }
        },
        'Venezuela': {
          type: "circle",
          size: 8,
          latitude: 7.5714,
          longitude: -67.1268,
          text: {
            content: "Venezuela",
            attrs: {
              "font-size": 12
            }
          }
        },
        'Sweeden': {
          type: "circle",
          size: 8,
          latitude: 64.1641,
          longitude: 16.1934,
          text: {
            content: "Sweeden",
            attrs: {
              "font-size": 12
            }
          }
        },
        'Norway': {
          type: "circle",
          size: 8,
          latitude: 59.8844,
          longitude: 9.6016,
          text: {
            content: "Norway",
            attrs: {
              "font-size": 12
            }
          }
        },
        'Libya': {
          type: "circle",
          size: 8,
          latitude: 26.2112,
          longitude: 17.1769,
          text: {
            content: "Libya",
            attrs: {
              "font-size": 12
            }
          }
        }
      }
    });
  }); // $(".partners-map__map").mapael({
  // 	// map: {
  // 	// 	name: "world_countries",
  // 	// 	defaultArea: {
  // 	// 		tooltip: {
  // 	// 			content: function () {
  // 	// 				return '<strong>' + state + '</strong>';
  // 	// 			}
  // 	// 		},
  // 	// 	},
  // 	// },
  // });
  // positions toggle

  var positionsToggle = function positionsToggle() {
    if (document.querySelector('.positions__item')) {
      var positionsItems = document.querySelectorAll('.positions__item');
      positionsItems.forEach(function (positionsItem) {
        var positionsTop = positionsItem.querySelector('.positions__item-top');
        var positionsBody = positionsItem.querySelector('.positions__item-body');

        var slideToggleItem = function slideToggleItem() {
          if (!positionsTop.classList.contains('active') && !positionsBody.classList.contains('active')) {
            positionsTop.classList.add('active');
            positionsBody.classList.add('active');
            $(positionsBody).slideDown("slow");
          } else {
            positionsTop.classList.remove('active');
            positionsBody.classList.remove('active');
            $(positionsBody).slideUp("slow");
          }
        };

        positionsTop.addEventListener('click', slideToggleItem);
      });
    }
  }; // Custom select


  var initCustomSelect = function initCustomSelect() {
    var selectContainers = document.querySelectorAll(".custom-select-container");
    selectContainers.forEach(function (selectContainer) {
      var label = selectContainer.querySelector('.label-select');
      var options = selectContainer.querySelectorAll('.custom-option');
      selectContainer.addEventListener('click', function () {
        this.querySelector('.custom-select').classList.toggle('open');
      });

      var _iterator = _createForOfIteratorHelper(options),
          _step;

      try {
        var _loop = function _loop() {
          var option = _step.value;
          option.addEventListener('click', function () {
            if (!option.classList.contains('selected')) {
              option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
              option.classList.add('selected');
              label.classList.add('selected');
              option.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
              option.closest('.custom-select').querySelector('.custom-select__input').value = option.dataset.value;
              option.closest('.custom-select').querySelector('.custom-select__input').setAttribute('value', option.dataset.value);
            }
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    window.addEventListener('click', function (e) {
      var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll('.custom-select')),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var select = _step2.value;

          if (!select.contains(e.target)) {
            select.classList.remove('open');
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
  };

  var initFileUpload = function initFileUpload() {
    var inputs = document.querySelectorAll('.input-file');
    inputs.forEach(function (input) {
      var label = input.nextElementSibling;
      var labelText = label.querySelector('span').innerHTML;
      var iconDelete = label.querySelector('.icon-delete');
      var totalSize = 0; // Change input content when file uploaded

      input.addEventListener('change', function (e) {
        this.classList.add('attached');
        var fileName = '';
        if (this.files && this.files.length > 1) fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);else fileName = e.target.value.split('\\').pop(); // Check size of uploaded files

        for (var i = 0; i < this.files.length; i++) {
          totalSize += this.files[i].size;
        }

        if (totalSize > 5242880) {
          var input_error_text_file = this.getAttribute('data-error-file');

          if (input_error_text_file && input_error_text_file != '') {
            this.parentElement.insertAdjacentHTML('beforeend', '<p class="form-error">' + input_error_text_file + '</p>');
            this.classList.add('_error');
          }

          this.value = "";
        }

        if (fileName) {
          label.querySelector('span').innerHTML = fileName;
          iconDelete.classList.add('visible');
          input.disabled = true;
        } else {
          label.querySelector('span').innerHTML = labelText;
          iconDelete.classList.remove('visible');
          input.disabled = false;
        }
      });

      var removeError = function removeError() {
        var formError = document.querySelector('.form-error');

        if (formError && formError.parentNode) {
          formError.parentNode.removeChild(formError);
        }
      }; // Remove uploaded file


      if (iconDelete) {
        iconDelete.addEventListener('click', function (e) {
          e.preventDefault();
          label.querySelector('span').innerHTML = labelText;
          input.classList.remove('attached');
          input.classList.remove('_error');
          iconDelete.classList.remove('visible');
          input.disabled = false;
          totalSize = 0;
          removeError();
        });
      }
    });
  };

  var sideBarToggle = function sideBarToggle() {
    var sidebar = document.querySelector('.sidebar-partners');
    var modalJoin = document.querySelector('.modal--join');

    if (sidebar && !modalJoin) {
      var sidebarBtn = document.querySelector('.sidebar-partners__btn');
      var body = document.querySelector('body');

      if (sidebar.classList.contains('open') && window.innerWidth < 991) {
        body.style.paddingRight = '17px';
      } else {
        body.style.paddingRight = '0px';
      }

      sidebarBtn.addEventListener('click', function () {
        sidebar.style.display = "none";
      });
    }
  }; // enroll toggle


  var enrollToggle = function enrollToggle() {
    var enrollBtns = document.querySelectorAll('.enroll__btn');
    var sidebar = document.querySelector('.sidebar-partners');
    var sidebarBtn = document.querySelector('.sidebar-partners__btn');
    var body = document.querySelector('body');
    enrollBtns.forEach(function (enrollBtn) {
      enrollBtn.addEventListener('click', function () {
        if (sidebar) {
          sidebar.classList.add('open');
          body.style.paddingRight = '0px';
        }

        sidebarBtn.addEventListener('click', function () {
          sidebar.classList.remove('open');
        });
      });
    });
  }; // join form


  var formMultiSteps = function formMultiSteps() {
    var progressBar = document.querySelector('.join-form__progressbar');
    var joinStep = document.querySelectorAll('.join-form__step');
    var joinStepSubmit = document.querySelector('.join-form__step-submit');
    var nextBtnFirst = document.querySelector(".firstNext");
    var prevBtnFirst = document.querySelector(".prev-1");
    var nextBtnSec = document.querySelector(".next-1");
    var prevBtnSec = document.querySelector(".prev-2");
    var submitBtn = document.querySelector(".submit");
    var current = 1;

    if (progressBar && joinStep) {
      var bullet = progressBar.querySelectorAll(".bullet");
      var row = progressBar.querySelectorAll(".row");
      nextBtnFirst.addEventListener("click", function () {
        joinStep[current - 1].classList.remove('active');
        joinStep[current].classList.add('active');
        bullet[current].classList.add("active");
        row[current - 1].classList.add("active");
        current += 1;
      });
      nextBtnSec.addEventListener("click", function () {
        joinStep[current - 1].classList.remove('active');
        joinStep[current].classList.add('active');
        bullet[current].classList.add("active");
        row[current - 1].classList.add("active");
        current += 1;
      });
      submitBtn.addEventListener("click", function () {
        joinStep.forEach(function (item) {
          item.classList.remove('active');
        });
        joinStepSubmit.classList.add('active');
      });

      if (prevBtnFirst) {
        prevBtnFirst.addEventListener("click", function () {
          joinStep[current - 1].classList.remove('active');
          joinStep[current - 2].classList.add('active');
          bullet[current - 1].classList.remove("active");
          row[current - 2].classList.remove("active");
          current -= 1;
        });
      }

      prevBtnSec.addEventListener("click", function () {
        joinStep[current - 1].classList.remove('active');
        joinStep[current - 2].classList.add('active');
        bullet[current - 1].classList.remove("active");
        row[current - 2].classList.remove("active");
        current -= 1;
      });
    }
  };

  var partnersSlider = function partnersSlider() {
    if (document.querySelector('.partners__list') && window.innerWidth < 991) {
      var partners = new Swiper('.partners__list', {
        mousewheel: {
          invert: false,
          forceToAxis: true
        },
        speed: 1000,
        breakpoints: {
          320: {
            slidesPerView: 1.8,
            spaceBetween: 0
          }
        }
      });
    }
  };

  var projectsSlider = function projectsSlider() {
    if (document.querySelector('.project__item-logos')) {
      var projects = new Swiper('.project__item-logos', {
        mousewheel: {
          invert: false,
          forceToAxis: true
        },
        speed: 1000,
        breakpoints: {
          320: {
            slidesPerView: 'auto',
            spaceBetween: 0
          }
        }
      });
    }
  };

  var reasonsSlider = function reasonsSlider() {
    if (document.querySelector('.reasons__list')) {
      var reasons = new Swiper('.reasons__list', {
        mousewheel: {
          invert: false,
          forceToAxis: true
        },
        speed: 1000,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 0
          }
        }
      });
    }
  };

  var certificateAdd = function certificateAdd() {
    var courses = document.querySelector('.courses');

    if (courses) {
      var addClassNameListener = function addClassNameListener(elemId, callback) {
        var elem = document.getElementById(elemId);
        var lastClassName = elem.className;
        window.setInterval(function () {
          var className = elem.className;

          if (className !== lastClassName) {
            callback();
            lastClassName = className;
          }
        }, 10);
      };

      var btnAdded = courses.querySelector('.btn-added');
      var btnEnroll = courses.querySelector('.enroll__btn');
      addClassNameListener("custom-select__trigger", function () {
        btnEnroll.style.display = "none";
        btnAdded.style.display = "block";
      });
    }
  };

  var resourceFilter = function resourceFilter() {
    var resourceFilter = document.querySelector('.resource-center__filter');

    if (resourceFilter) {
      var filterItems = document.querySelectorAll('.filter__item');
      var filterItemAll = document.querySelector('.filter__item-all');
      filterItems.forEach(function (item) {
        var input = item.querySelector('input');
      });
    }
  };

  var filter = function filter() {
    var resourceFilter = document.querySelector('.resource-center__filter');

    if (resourceFilter) {
      var filterItems = document.querySelectorAll('.filter__item');
      var filterItemAll = document.querySelector('.filter__item-all');
      filterItems.forEach(function (item) {
        var input = item.querySelector('input');
        input.addEventListener('click', function () {
          if (input.checked) {
            filterItemAll.querySelector('input').checked = false;
          }
        });
      });
    }
  }; // Circle slider


  var type = 1,
      radius = '380px',
      start = -90,
      $elements = $('.home-slider__thumb'),
      numberOfElements = type === 1 ? $elements.length : $elements.length - 1,
      slice = 360 * type / numberOfElements;
  $elements.each(function (i) {
    var $self = $(this),
        rotate = slice * i + start,
        rotateReverse = rotate * -1;
    $self.css({
      'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
    });
  });
  /***/
}
/******/
]);