'use strict';

// -------------------- Hamburger Menu --------------------
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  // スクロールを禁止にする関数
  function disableScroll(e) {
    e.preventDefault();
  }

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');

    // スマホスクロール操作とPCスクロール操作を禁止
    document.addEventListener('touchmove', disableScroll, {passive: false});
    document.addEventListener('mousewheel', disableScroll, {passive: false});
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');

    // スマホスクロール操作とPCスクロール操作の禁止を解除
    document.removeEventListener('touchmove', disableScroll, {passive: false});
    document.removeEventListener('mousewheel', disableScroll, {passive: false});
  });

  const as = document.querySelectorAll('.overlay a');
  as.forEach(a => {
    a.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');

      // スマホスクロール操作とPCスクロール操作の禁止を解除
      document.removeEventListener('touchmove', disableScroll, {passive: false});
      document.removeEventListener('mousewheel', disableScroll, {passive: false});
    });
  });
}

// -------------------- hero --------------------
{
  // const myname = document.getElementById('myname');
  const h1 = document.querySelector('h1');

  window.onload = function() {
    // myname.classList.add('show');
    h1.classList.add('show');
  }
}

// -------------------- Chart.js --------------------
{
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Bash", "Command Prompt", "Windows Power Shell", "Excel VBA", "Python", "Perl", "HTML", "CSS", "Java Script", "jQuery"],
        datasets: [{
          xAxesID: 'yAxes_1',
          label: '自己評価',
          data: [3, 3, 3, 3, 1, 2, 3, 3, 2, 2],
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgb(255, 99, 132)',
            // 'rgba(54, 162, 235, 0.2)',
            // 'rgba(255, 206, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        // 横向きを指定
        indexAxis: 'y',
        scales: {
          "xAxes_1": {
            beginAtZero: true,
            max: 4,
          }
        }
      }
  });
}

// -------------------- IntersectionObserver --------------------
{
  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }

  const header = document.querySelector('header');
  const toTop = document.getElementById('to_top');

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// -------------------- jQuery --------------------
{
  $(() => {
    // ページネーション 「paginathing.js」で実装
    {
      $('.pagenation_block').paginathing({
        perPage: 3,
        prevText: '<i class="fas fa-angle-left"><span class="material-icons">navigate_before</span></i>',
        nextText: '<i class="fas fa-angle-right"><span class="material-icons">navigate_next</span></i>',
        activeClass: 'navi-active',
        firstText: '<i class="fa-angle-double-left"></i>',
        lastText: '<i class="fa-angle-double-right"></i>',
      });
    }
  });
}