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
});

// Background-image
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}


//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('ul');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }


if (document.querySelector('.home-slider__body')) {
	const homeSliderThumbs = document.querySelector('.home-slider__thumbs');
	const homeSliderThumbsItems = document.querySelectorAll('.home-slider__thumb');
	const homeSliderThumbsIndex = Object.keys(homeSliderThumbs);

	let homeSlider = new Swiper('.home-slider__body', {
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
			slideChange: function () {
				homeSliderThumbsIndex.forEach(index => {
					homeSliderThumbs[index].classList.remove('active');
					if (parseInt(index) === homeSliderThumbs.activeIndex) {
						homeSliderThumbs[index].classList.add('active');
					}
				})
			}
		},

	});

	let homeThumbImgs = document.querySelectorAll('.home-slider__thumb-img');

	homeSliderThumbs.addEventListener('click', function (e) {
		homeThumbImgs.forEach(homeThumbImg => {
			if (homeThumbImg !== e.target) {
				homeThumbImg.classList.add('fade-img');
			} else {
				homeThumbImg.classList.remove('fade-img');
			}
		})



	})

	homeSliderThumbsItems.forEach(homeSliderThumb => {
		homeSliderThumb.addEventListener('click', function (e) {
			homeThumbImgs.forEach(homeThumbImg => {
				if (homeThumbImg !== e.target.parentElement) {
					homeThumbImg.classList.add('fade-img');
				} else {
					homeThumbImg.classList.remove('fade-img');
				}
			})

			const dataSlide = homeSliderThumb.getAttribute('data-slide');
			homeSlider.slideTo(parseInt(dataSlide));
		})
	})


};

if (document.querySelector('.values__slider-body')) {
	let valuesSlider = new Swiper('.values__slider-body', {
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
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});


};

if (document.querySelector('.resource-related__slider-body')) {
	let resourceSlider = new Swiper('.resource-related__slider-body', {
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
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});


};

if (document.querySelector('.partners-more__slider-body')) {
	let resourceSlider = new Swiper('.partners-more__slider-body', {
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
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
	});


};

if (document.querySelector('.vertical-slider__slider-body')) {
	let verticalSlider = new Swiper('.vertical-slider__slider-body', {
		direction: "vertical",
		mousewheelControl: true,
		slidesPerView: 4,
		slidesPerGroup: 4,
		speed: 800,
		mousewheel: {
			invert: false,
		},
		// Dotts
		pagination: {
			el: '.vertical-slider__dots',
			clickable: true
		},
	});


};

// get chapter number
const chapterNumber = () => {
	let slideItems = document.querySelectorAll('.slide-vertical__item');
	for (let i = 0; i < slideItems.length; i++) {
		let text = slideItems[i].querySelector('.slide-vertical__item-label > span');
		text.innerText = [i + 1]
	}
}

// resource-center cards
function resizeGridItem(item) {
	let grid = document.getElementsByClassName("grid")[0];
	let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
	let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
	let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
	item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
	let allItems = document.getElementsByClassName("item");
	for (let x = 0; x < allItems.length; x++) {
		resizeGridItem(allItems[x]);
	}
}

function resizeInstance(instance) {
	let item = instance.elements[0];
	resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

let allItems = document.getElementsByClassName("item");
for (let x = 0; x < allItems.length; x++) {
	imagesLoaded(allItems[x], resizeInstance);
}

// animation function 
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

// map

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
				factor: 0.4
				, attrsHover: {
					stroke: "#a4e100"
				}
			},
			defaultPlot: {
				attrs: {
					fill: "#757575",
				},
				attrsHover: {
					opacity: 1
				},
				text: {
					attrs: {
						fill: "#424242"
					}
					,
					attrsHover: {
						fill: "#000"
					}
				},
				eventHandlers: {
					click: function () {
						$('.sidebar-partners').css({ display: 'block' }).fadeIn('slow');
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
						"font-size": 12,
					},
				},
				link: "https://goo.gl/maps/HoTP8mk9fojamoEF6",
			},
			'Unated States': {
				type: "circle",
				size: 8,
				latitude: 40.4401,
				longitude: -99.4266,
				text: {
					content: "Unated States",
					attrs: {
						"font-size": 12,
					},
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
						"font-size": 12,
					},
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
						"font-size": 12,
					},
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
						"font-size": 12,
					},
				},

			},
			'Libya': {
				type: "circle",
				size: 8,
				latitude: 26.2112,
				longitude: 17.1769,
				text: {
					content: "Libya",
					attrs: {
						"font-size": 12,
					},
				}
			},
		}
	});
});

// $(".partners-map__map").mapael({
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
const positionsToggle = function () {
	if (document.querySelector('.positions__item')) {

		let positionsItems = document.querySelectorAll('.positions__item');
		positionsItems.forEach(positionsItem => {
			const positionsTop = positionsItem.querySelector('.positions__item-top');
			const positionsBody = positionsItem.querySelector('.positions__item-body');

			const slideToggleItem = function () {
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
		})
	}
}

// Custom select
const initCustomSelect = function () {
	let selectContainers = document.querySelectorAll(".custom-select-container");

	selectContainers.forEach(selectContainer => {
		let label = selectContainer.querySelector('.label-select');
		let options = selectContainer.querySelectorAll('.custom-option');

		selectContainer.addEventListener('click', function () {
			this.querySelector('.custom-select').classList.toggle('open');
		})

		for (let option of options) {
			option.addEventListener('click', function () {
				if (!option.classList.contains('selected')) {
					option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
					option.classList.add('selected');
					label.classList.add('selected');
					option.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
					option.closest('.custom-select').querySelector('.custom-select__input').value = option.dataset.value;
					option.closest('.custom-select').querySelector('.custom-select__input').setAttribute('value', option.dataset.value);
				}
			})
		}
	})


	window.addEventListener('click', function (e) {
		for (const select of document.querySelectorAll('.custom-select')) {
			if (!select.contains(e.target)) {
				select.classList.remove('open');
			}
		}
	});

};


const initFileUpload = function () {
	const inputs = document.querySelectorAll('.input-file');

	inputs.forEach((input) => {
		const label = input.nextElementSibling;
		const labelText = label.querySelector('span').innerHTML;
		const iconDelete = label.querySelector('.icon-delete');

		let totalSize = 0;

		// Change input content when file uploaded
		input.addEventListener('change', function (e) {
			this.classList.add('attached');
			let fileName = '';
			if (this.files && this.files.length > 1)
				fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
			else
				fileName = e.target.value.split('\\').pop();

			// Check size of uploaded files
			for (let i = 0; i < this.files.length; i++) {
				totalSize += this.files[i].size;
			}

			if (totalSize > 5242880) {
				let input_error_text_file = this.getAttribute('data-error-file');
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

		const removeError = function () {
			let formError = document.querySelector('.form-error');
			if (formError && formError.parentNode) {
				formError.parentNode.removeChild(formError);
			}
		}

		// Remove uploaded file
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
			})
		}

	});
};

const sideBarToggle = () => {
	let sidebar = document.querySelector('.sidebar-partners');
	let modalJoin = document.querySelector('.modal--join');

	if (sidebar && !modalJoin) {
		let sidebarBtn = document.querySelector('.sidebar-partners__btn');
		let body = document.querySelector('body');
		if (sidebar.classList.contains('open') && window.innerWidth < 991) {
			body.style.paddingRight = '17px';
		} else {
			body.style.paddingRight = '0px';
		}
		sidebarBtn.addEventListener('click', () => {
			sidebar.style.display = "none";
		})
	}
}


// enroll toggle
const enrollToggle = () => {

	let enrollBtns = document.querySelectorAll('.enroll__btn');
	let sidebar = document.querySelector('.sidebar-partners');
	let sidebarBtn = document.querySelector('.sidebar-partners__btn');
	let body = document.querySelector('body');

	enrollBtns.forEach(enrollBtn => {
		enrollBtn.addEventListener('click', () => {
			if (sidebar) {
				sidebar.classList.add('open');
				body.style.paddingRight = '0px';
			}
			sidebarBtn.addEventListener('click', () => {
				sidebar.classList.remove('open');
			})
		})


	})

}

// join form
const formMultiSteps = () => {
	const progressBar = document.querySelector('.join-form__progressbar');
	const joinStep = document.querySelectorAll('.join-form__step');
	const joinStepSubmit = document.querySelector('.join-form__step-submit');
	const nextBtnFirst = document.querySelector(".firstNext");
	const prevBtnFirst = document.querySelector(".prev-1");
	const nextBtnSec = document.querySelector(".next-1");
	const prevBtnSec = document.querySelector(".prev-2");
	const submitBtn = document.querySelector(".submit");
	let current = 1;

	if (progressBar && joinStep) {
		const bullet = progressBar.querySelectorAll(".bullet");
		const row = progressBar.querySelectorAll(".row");

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
			joinStep.forEach(item => {
				item.classList.remove('active');
			})
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
}

const partnersSlider = function () {
	if (document.querySelector('.partners__list') && window.innerWidth < 991) {
		let partners = new Swiper('.partners__list', {
			mousewheel: {
				invert: false,
				forceToAxis: true
			},
			speed: 1000,
			breakpoints: {
				320: {
					slidesPerView: 1.8,
					spaceBetween: 0
				},
			},
		});
	}
};
const projectsSlider = function () {
	if (document.querySelector('.project__item-logos')) {
		let projects = new Swiper('.project__item-logos', {
			mousewheel: {
				invert: false,
				forceToAxis: true
			},
			speed: 1000,
			breakpoints: {
				320: {
					slidesPerView: 'auto',
					spaceBetween: 0
				},
			},
		});
	}
};

const reasonsSlider = function () {
	if (document.querySelector('.reasons__list')) {
		let reasons = new Swiper('.reasons__list', {
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
				},
			},
		});
	}
};

const certificateAdd = () => {
	let courses = document.querySelector('.courses');

	if (courses) {
		let btnAdded = courses.querySelector('.btn-added');
		let btnEnroll = courses.querySelector('.enroll__btn');

		function addClassNameListener(elemId, callback) {
			var elem = document.getElementById(elemId);
			var lastClassName = elem.className;
			window.setInterval(function () {
				var className = elem.className;
				if (className !== lastClassName) {
					callback();
					lastClassName = className;
				}
			}, 10);
		}

		addClassNameListener("custom-select__trigger", function () {
			btnEnroll.style.display = "none";
			btnAdded.style.display = "block";
		});
	}
}


const resourceFilter = () => {
	let resourceFilter = document.querySelector('.resource-center__filter');
	if (resourceFilter) {
		let filterItems = document.querySelectorAll('.filter__item');
		let filterItemAll = document.querySelector('.filter__item-all');
		filterItems.forEach(item => {
			let input = item.querySelector('input');


		})
	}
}

const filter = () => {
	let resourceFilter = document.querySelector('.resource-center__filter');
	if (resourceFilter) {
		let filterItems = document.querySelectorAll('.filter__item');
		let filterItemAll = document.querySelector('.filter__item-all');
		filterItems.forEach(item => {
			let input = item.querySelector('input');
			input.addEventListener('click', () => {
				if (input.checked) {
					filterItemAll.querySelector('input').checked = false;
				}
			})
		})
	}

}


// Circle slider
var type = 1,
	radius = '380px',
	start = -90,
	$elements = $('.home-slider__thumb'),
	numberOfElements = (type === 1) ? $elements.length : $elements.length - 1,
	slice = 360 * type / numberOfElements;

$elements.each(function (i) {
	var $self = $(this),
		rotate = slice * i + start,
		rotateReverse = rotate * -1;

	$self.css({
		'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
	});
});
