(function () {
  'use strict';
  var P = 'xwp';
  var NETS = [{"key": "trc20", "label": "USDT-TRC20", "svg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 36 36\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"15.5\" cy=\"15.5\" r=\"13.5\" fill=\"#26A17B\"/><path d=\"M17.35 16.42v-.01c-.1.01-.63.04-1.82.04-1.02 0-1.63-.03-1.86-.04v.01c-3.55-.16-6.2-.78-6.2-1.52 0-.74 2.65-1.36 6.2-1.52v2.43c.24.02.86.05 1.88.05 1.15 0 1.71-.04 1.8-.05v-2.43c3.54.16 6.19.78 6.19 1.52 0 .74-2.65 1.36-6.19 1.52zm0-3.29v-2.17h5.05V7.95H8.62v3.01h5.05v2.17c-4.02.18-7.04.98-7.04 1.94 0 .96 3.02 1.76 7.04 1.94v6.95h3.68v-6.95c4.01-.18 7.03-.98 7.03-1.94 0-.96-3.02-1.76-7.03-1.94z\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"8.2\" fill=\"#F8FAFC\"/><circle cx=\"27\" cy=\"27\" r=\"7\" fill=\"#EF0027\"/><path d=\"M23.1 23.3l8.1 1.4-4.7 6.9-3.4-8.3zm1.3 1.1l2.1 5.1 1.1-4.1-3.2-1zm4.1 1.2l-.9 3.4 2.4-3.1-1.5-.3z\" fill=\"#FFFFFF\"/></svg>"}, {"key": "erc20", "label": "USDT-ERC20", "svg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 36 36\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"15.5\" cy=\"15.5\" r=\"13.5\" fill=\"#26A17B\"/><path d=\"M17.35 16.42v-.01c-.1.01-.63.04-1.82.04-1.02 0-1.63-.03-1.86-.04v.01c-3.55-.16-6.2-.78-6.2-1.52 0-.74 2.65-1.36 6.2-1.52v2.43c.24.02.86.05 1.88.05 1.15 0 1.71-.04 1.8-.05v-2.43c3.54.16 6.19.78 6.19 1.52 0 .74-2.65 1.36-6.19 1.52zm0-3.29v-2.17h5.05V7.95H8.62v3.01h5.05v2.17c-4.02.18-7.04.98-7.04 1.94 0 .96 3.02 1.76 7.04 1.94v6.95h3.68v-6.95c4.01-.18 7.03-.98 7.03-1.94 0-.96-3.02-1.76-7.03-1.94z\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"8.2\" fill=\"#F8FAFC\"/><circle cx=\"27\" cy=\"27\" r=\"7\" fill=\"#627EEA\"/><path d=\"M27 21.8v3.85l3.25 1.45L27 21.8z\" fill=\"#FFFFFF\" fill-opacity=\"0.72\"/><path d=\"M27 21.8l-3.25 5.3 3.25-1.45V21.8z\" fill=\"#FFFFFF\"/><path d=\"M27 29.55v2.65l3.25-4.5L27 29.55z\" fill=\"#FFFFFF\" fill-opacity=\"0.72\"/><path d=\"M27 32.2v-2.65l-3.25-1.85L27 32.2z\" fill=\"#FFFFFF\"/><path d=\"M27 28.95l3.25-1.85L27 25.65v3.3z\" fill=\"#FFFFFF\" fill-opacity=\"0.45\"/><path d=\"M23.75 27.1L27 28.95v-3.3l-3.25 1.45z\" fill=\"#FFFFFF\" fill-opacity=\"0.82\"/></svg>"}, {"key": "bep20", "label": "USDT-BEP20", "svg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 36 36\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"15.5\" cy=\"15.5\" r=\"13.5\" fill=\"#26A17B\"/><path d=\"M17.35 16.42v-.01c-.1.01-.63.04-1.82.04-1.02 0-1.63-.03-1.86-.04v.01c-3.55-.16-6.2-.78-6.2-1.52 0-.74 2.65-1.36 6.2-1.52v2.43c.24.02.86.05 1.88.05 1.15 0 1.71-.04 1.8-.05v-2.43c3.54.16 6.19.78 6.19 1.52 0 .74-2.65 1.36-6.19 1.52zm0-3.29v-2.17h5.05V7.95H8.62v3.01h5.05v2.17c-4.02.18-7.04.98-7.04 1.94 0 .96 3.02 1.76 7.04 1.94v6.95h3.68v-6.95c4.01-.18 7.03-.98 7.03-1.94 0-.96-3.02-1.76-7.03-1.94z\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"8.2\" fill=\"#F8FAFC\"/><circle cx=\"27\" cy=\"27\" r=\"7\" fill=\"#F3BA2F\"/><path d=\"M27 22.7l1.85 1.85-1.85 1.85-1.85-1.85L27 22.7zm-4.3 4.3l1.45-1.45 1.45 1.45-1.45 1.45L22.7 27zm8.6 0l-1.45 1.45-1.45-1.45 1.45-1.45L31.3 27zM27 31.3l-1.85-1.85L27 27.6l1.85 1.85L27 31.3zm0-5.45l1.15 1.15L27 28.15 25.85 27 27 25.85z\" fill=\"#FFFFFF\"/></svg>"}, {"key": "solana", "label": "USDT-Solana", "svg": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 36 36\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"solGrad_41d2a8\" x1=\"20\" y1=\"20\" x2=\"34\" y2=\"34\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0%\" stop-color=\"#00FFA3\"/><stop offset=\"100%\" stop-color=\"#DC1FFF\"/></linearGradient></defs><circle cx=\"15.5\" cy=\"15.5\" r=\"13.5\" fill=\"#26A17B\"/><path d=\"M17.35 16.42v-.01c-.1.01-.63.04-1.82.04-1.02 0-1.63-.03-1.86-.04v.01c-3.55-.16-6.2-.78-6.2-1.52 0-.74 2.65-1.36 6.2-1.52v2.43c.24.02.86.05 1.88.05 1.15 0 1.71-.04 1.8-.05v-2.43c3.54.16 6.19.78 6.19 1.52 0 .74-2.65 1.36-6.19 1.52zm0-3.29v-2.17h5.05V7.95H8.62v3.01h5.05v2.17c-4.02.18-7.04.98-7.04 1.94 0 .96 3.02 1.76 7.04 1.94v6.95h3.68v-6.95c4.01-.18 7.03-.98 7.03-1.94 0-.96-3.02-1.76-7.03-1.94z\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"8.2\" fill=\"#F8FAFC\"/><circle cx=\"27\" cy=\"27\" r=\"7\" fill=\"#111827\"/><path d=\"M23.5 29.2c.1-.1.25-.15.4-.15h6.8c.25 0 .38.3.2.48l-1.3 1.32c-.1.1-.25.15-.4.15h-6.8c-.25 0-.38-.3-.2-.48l1.3-1.32zm0-5.4c.1-.1.25-.15.4-.15h6.8c.25 0 .38.3.2.48l-1.3 1.32c-.1.1-.25.15-.4.15h-6.8c-.25 0-.38-.3-.2-.48l1.3-1.32zm6.1 2.7c-.1-.1-.25-.15-.4-.15h-6.8c-.25 0-.38.3-.2.48l1.3 1.32c.1.1.25.15.4.15h6.8c.25 0 .38-.3.2-.48l-1.3-1.32z\" fill=\"url(#solGrad_41d2a8)\"/></svg>"}];
  var CD_SEC = 12 * 60;
  var STORAGE_KEY = 'xwp_orders_v1';
  var toastTimer = null;
  var payCountdown = null;

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function showToast(msg) {
    var el = $('#' + P + '-toast');
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.hidden = true; }, 2400);
  }

  function readOrders() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function saveOrder(rec) {
    try {
      var list = readOrders();
      list.unshift(rec);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 50)));
    } catch (e) {}
  }

  // Mobile Menu Drawer + Outside Click + Escape
  var menuBtn = $('#' + P + '-menu-toggle');
  var mobDrawer = $('#' + P + '-mob-drawer');
  function closeMenu() {
    if (!mobDrawer || !menuBtn) return;
    mobDrawer.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
  }
  if (menuBtn && mobDrawer) {
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = mobDrawer.hidden;
      mobDrawer.hidden = !open;
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $$('a, button', mobDrawer).forEach(function (el) {
      el.addEventListener('click', closeMenu);
    });
  }

  // Category Filter Panel (Homepage)
  var catBtns = $$('.' + P + '-cat-btn');
  var skuCards = $$('.' + P + '-sku-card');
  if (catBtns.length && skuCards.length) {
    catBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = btn.getAttribute('data-cat');
        catBtns.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        skuCards.forEach(function (card) {
          var match = (cat === 'all' || card.getAttribute('data-cat') === cat);
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  // Shared Modals (Lookup & Ticket)
  function closeAllModals() {
    $$('.' + P + '-modal-mask').forEach(function (m) { m.hidden = true; });
    if (payCountdown) { clearInterval(payCountdown); payCountdown = null; }
  }
  $$('[data-open-modal]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      closeMenu();
      var target = btn.getAttribute('data-open-modal');
      var m = $('#' + P + '-' + target + '-modal');
      if (m) m.hidden = false;
    });
  });
  $$('[data-close-modal]').forEach(function (btn) {
    btn.addEventListener('click', closeAllModals);
  });
  document.addEventListener('click', function (e) {
    if (mobDrawer && !mobDrawer.hidden && !mobDrawer.contains(e.target) && menuBtn && !menuBtn.contains(e.target)) {
      closeMenu();
    }
    if (e.target && e.target.classList && e.target.classList.contains(P + '-modal-mask')) {
      closeAllModals();
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMenu();
      closeAllModals();
    }
  });

  // Real localStorage Order Lookup
  var lkForm = $('#' + P + '-lookup-form');
  if (lkForm) {
    lkForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = ($('#' + P + '-lk-email').value || '').trim().toLowerCase();
      var oid = ($('#' + P + '-lk-order').value || '').trim().toUpperCase();
      var resBox = $('#' + P + '-lookup-result');
      var orders = readOrders();
      var hit = null;
      for (var i = 0; i < orders.length; i++) {
        if (orders[i].orderId === oid && orders[i].email.toLowerCase() === email) {
          hit = orders[i];
          break;
        }
      }
      resBox.hidden = false;
      if (hit) {
        resBox.innerHTML =
          '<strong>已查到订单记录</strong><br>' +
          '订单号：' + hit.orderId + '<br>' +
          '商品名称：' + hit.productName + ' × ' + hit.qty + '<br>' +
          '收件邮箱：' + hit.email + '<br>' +
          '应付总额：$' + hit.total + ' USD（' + hit.networkLabel + '）<br>' +
          '当前状态：待核对入账后自动发卡至收件邮箱';
      } else {
        resBox.innerHTML =
          '<strong>未检索到匹配记录</strong><br>' +
          '请核对收件邮箱与订单号是否与当前浏览器下单信息一致；如已在其他设备完成支付，请在收件箱或垃圾箱查看自动发卡邮件，或通过工单支持核查。';
      }
    });
  }

  // After-sales Ticket Form
  var tkForm = $('#' + P + '-ticket-form');
  if (tkForm) {
    tkForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var oid = ($('#' + P + '-tk-order').value || '').trim();
      var mail = ($('#' + P + '-tk-email').value || '').trim();
      var resBox = $('#' + P + '-ticket-result');
      var tkId = 'TK' + String(Date.now()).slice(-7);
      resBox.hidden = false;
      resBox.innerHTML =
        '<strong>工单已登记（编号：' + tkId + '）</strong><br>' +
        '关联订单：' + oid + ' · 联系邮箱：' + mail + '<br>' +
        '核验完成后处理结果与补换卡密将直接发送至您的登记邮箱。';
      showToast('售后工单已提交');
    });
  }

  // Detail Page Checkout Logic
  var coForm = $('#' + P + '-checkout-form');
  if (coForm) {
    var unitPrice = parseFloat(coForm.getAttribute('data-price') || '0');
    var productName = coForm.getAttribute('data-title') || '';
    var qtyInput = $('#' + P + '-qty');
    var totalEl = $('#' + P + '-total');
    var netWrap = $('#' + P + '-net-grid');
    var selectedNet = NETS[0];

    function updateTotal() {
      var q = parseInt(qtyInput.value, 10);
      if (isNaN(q) || q < 1) q = 1;
      if (q > 99) q = 99;
      qtyInput.value = String(q);
      totalEl.textContent = '$' + (unitPrice * q).toFixed(2) + ' USD';
    }

    if (netWrap) {
      netWrap.innerHTML = '';
      NETS.forEach(function (net, idx) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = P + '-net-card' + (idx === 0 ? ' is-selected' : '');
        btn.setAttribute('data-net', net.key);
        btn.innerHTML = net.svg + '<span class="' + P + '-net-label">' + net.label + '</span>';
        btn.addEventListener('click', function () {
          selectedNet = net;
          $$('.' + P + '-net-card', netWrap).forEach(function (c) { c.classList.remove('is-selected'); });
          btn.classList.add('is-selected');
        });
        netWrap.appendChild(btn);
      });
    }

    var minusBtn = $('#' + P + '-qty-minus');
    var plusBtn = $('#' + P + '-qty-plus');
    if (minusBtn) minusBtn.addEventListener('click', function () { qtyInput.value = String(Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1)); updateTotal(); });
    if (plusBtn) plusBtn.addEventListener('click', function () { qtyInput.value = String(Math.min(99, (parseInt(qtyInput.value, 10) || 1) + 1)); updateTotal(); });
    if (qtyInput) qtyInput.addEventListener('change', updateTotal);
    updateTotal();

    coForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailInput = $('#' + P + '-co-email');
      var email = (emailInput.value || '').trim();
      if (!email || email.indexOf('@') < 1) {
        showToast('请填写正确的收货电子邮箱');
        emailInput.focus();
        return;
      }
      var submitBtn = $('#' + P + '-co-submit');
      var qty = parseInt(qtyInput.value, 10) || 1;
      var totalStr = (unitPrice * qty).toFixed(2);
      var wallets = window.__XWP_WALLETS__ || {};
      var addr = wallets[selectedNet.key] || '';

      submitBtn.disabled = true;
      submitBtn.textContent = '正在生成订单...';

      setTimeout(function () {
        submitBtn.textContent = '订单已生成，正在调起支付';
        var orderId = 'XHS' + String(Date.now()).slice(-8);
        var rec = {
          orderId: orderId,
          productName: productName,
          qty: qty,
          email: email,
          total: totalStr,
          networkKey: selectedNet.key,
          networkLabel: selectedNet.label
        };
        saveOrder(rec);

        setTimeout(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = '立即购买';
          openPaymentModal(rec, addr);
        }, 350);
      }, 500);
    });
  }

  function openPaymentModal(rec, addr) {
    var mask = $('#' + P + '-pay-modal');
    if (!mask) {
      mask = document.createElement('div');
      mask.id = P + '-pay-modal';
      mask.className = P + '-modal-mask';
      document.body.appendChild(mask);
    }
    mask.innerHTML =
      '<div class="' + P + '-modal-card ' + P + '-pay-card" role="dialog" aria-modal="true">' +
        '<div class="' + P + '-modal-hd">' +
          '<div class="' + P + '-modal-title">订单核对与结算 <span class="' + P + '-timer-pill" id="' + P + '-cd-txt">请在规定时间内完成支付 12:00</span></div>' +
          '<button type="button" class="' + P + '-modal-close" id="' + P + '-pay-x" aria-label="关闭">&times;</button>' +
        '</div>' +
        '<div class="' + P + '-pay-grid">' +
          '<div class="' + P + '-pay-summary">' +
            '<div class="' + P + '-pay-row"><span>订单编号</span><span>' + rec.orderId + '</span></div>' +
            '<div class="' + P + '-pay-row"><span>商品名称</span><span>' + rec.productName + '</span></div>' +
            '<div class="' + P + '-pay-row"><span>采购数量</span><span>' + rec.qty + ' 个</span></div>' +
            '<div class="' + P + '-pay-row"><span>收件邮箱</span><span>' + rec.email + '</span></div>' +
            '<div class="' + P + '-pay-row"><span>结算网络</span><span>' + rec.networkLabel + '</span></div>' +
            '<div class="' + P + '-pay-row"><span>应付金额</span><span class="' + P + '-pay-amt">$' + rec.total + ' USD</span></div>' +
            '<p style="margin:6px 0 0;font-size:12.5px;color:#64748B;">倒计时结束后自动取消，请务必核对金额与网络一致后转账，付款后系统将24H自动发卡至上方收件邮箱。</p>' +
          '</div>' +
          '<div class="' + P + '-pay-right">' +
            '<div class="' + P + '-addr-box">' +
              '<span class="' + P + '-addr-txt" id="' + P + '-addr-val">' + addr + '</span>' +
              '<button type="button" class="' + P + '-copy-btn" id="' + P + '-copy-addr">复制地址</button>' +
            '</div>' +
            '<div class="' + P + '-qr-frame"><canvas id="' + P + '-qr-cv"></canvas></div>' +
            '<p class="' + P + '-pay-tip">请使用支持 <strong>' + rec.networkLabel + '</strong> 的钱包扫码或复制上方地址完成转账，切勿跨网络转入。</p>' +
          '</div>' +
        '</div>' +
      '</div>';

    mask.hidden = false;
    var xBtn = $('#' + P + '-pay-x');
    if (xBtn) xBtn.addEventListener('click', closeAllModals);

    var cpBtn = $('#' + P + '-copy-addr');
    if (cpBtn) {
      cpBtn.addEventListener('click', function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(addr).then(function () { showToast('收款地址已复制'); }).catch(function () { showToast('请手动长按复制地址'); });
        } else {
          showToast('请手动选中复制地址');
        }
      });
    }

    try {
      var cv = $('#' + P + '-qr-cv');
      if (cv && typeof window['renderSettleQr'] === 'function') {
        window['renderSettleQr'](cv, addr, rec.networkLabel, '#EF4444');
      }
    } catch (err) {}

    var left = CD_SEC;
    var cdEl = $('#' + P + '-cd-txt');
    if (payCountdown) clearInterval(payCountdown);
    payCountdown = setInterval(function () {
      left--;
      if (left <= 0) {
        clearInterval(payCountdown);
        if (cdEl) cdEl.textContent = '订单已超时，请重新下单';
        return;
      }
      var mm = String(Math.floor(left / 60)).padStart(2, '0');
      var ss = String(left % 60).padStart(2, '0');
      if (cdEl) cdEl.textContent = '请在规定时间内完成支付 ' + mm + ':' + ss;
    }, 1000);
  }
})();
