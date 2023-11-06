// подписываемся на события скрола колесиком
$(window).on('mousewheel', function(e) {
    // тут мы определяем в какую сторону скрольнули и в зависимости от этого будем показывать соответсвующий блок
    if (e.originalEvent.wheelDelta / 120 > 0) {
      scroller.showPrev();
    } else {
      scroller.showNext();
    }
  });
  
  var scroller = {};
  // показывает следующий блок после текущего
  // принцип: хватаем текущий блок,
  // берем следующий через .next(), если он существует - скроллим к нему
  // предварительно смотрим чтобы мы уже не скроллились
  scroller.showNext = function() {
    if (this.isScrolling) {
      return;
    }
    let current = scroller.getDisplayingBlock();
    let next = $(current).next();
    if (next) {
      scroller.scrollToElement(next);
    }
  }
  // показывает предыдущий блок
  // принцип: хватаем текущий блок,
  // берем предыдущий через .prev(), если он существует - скроллим к нему
  // предварительно смотрим чтобы мы уже не скроллились
  scroller.showPrev = function() {
    if (this.isScrolling) {
      return;
    }
    let current = scroller.getDisplayingBlock();
    let prev = $(current).prev();
    if (prev) {
      scroller.scrollToElement(prev);
    }
  }
  // возвращает текущий блок
  // принцип: смотрим текущую позицию скролла
  // по коллекции элементов .block ищем первую,
  // которая находится на позиции текущего скролла +-10
  scroller.getDisplayingBlock = function() {
    let scrollPosition = $(window).scrollTop();
    let item = Array.from($('.block')).find(function(el) {
      return Math.abs(el.offsetTop - scrollPosition) < 10;
    });
    return item;
  }
  // скроллит к блоку
  // сетает флаг isScrolling=true
  // с помощью .animate анимирует скролл
  // после завершения скролла сетаем обратно isScrolling=false
  scroller.scrollToElement = function(el) {
    this.isScrolling = true;
    let thisScroller = this;
    let elTopOffset = el.offset().top;
    $("html, body").animate({ scrollTop: elTopOffset },
      600, function() { thisScroller.isScrolling = false; });
  }