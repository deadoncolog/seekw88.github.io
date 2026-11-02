(function(){
 'use strict';
 let busy=false;
 const style=document.createElement('style');
 style.textContent='.seekwp-buy-spinner{display:inline-block;width:17px;height:17px;box-sizing:border-box;border:2px solid rgba(255,255,255,.45);border-top-color:#fff;border-radius:50%;animation:seekwp-buy-spin .7s linear infinite;vertical-align:-3px;margin-right:8px}@keyframes seekwp-buy-spin{to{transform:rotate(360deg)}}.seekwp-order-status{position:fixed;inset:0;z-index:10050;background:rgba(15,23,42,.3);display:flex;align-items:center;justify-content:center;padding:24px}.seekwp-order-status-card{background:#fff;color:#1c1c1c;border-radius:20px;padding:28px 38px;box-shadow:0 18px 60px rgba(0,0,0,.16);text-align:center;min-width:230px;font-family:inherit}.seekwp-order-status-card svg{display:block;width:42px;height:42px;margin:0 auto 14px;color:#e95c75}.seekwp-order-status-card strong{font-size:19px;line-height:1.5}.seekwp-order-status[hidden]{display:none}';
 document.head.appendChild(style);
 window.siteCheckoutSequence=function(openPayment){
  if(busy)return;busy=true;document.getElementById('buyBtn').dataset.checkoutBusy='1';
  const button=document.getElementById('buyBtn');
  const previous=button?{html:button.innerHTML,disabled:button.disabled}:null;
  const controls=Array.from(document.querySelectorAll('#email,#quantity,input[name="payment"],.quantity-btn')).map(el=>({el,disabled:el.disabled}));
  controls.forEach(({el})=>{el.disabled=true;});
  if(button){button.disabled=true;button.setAttribute('aria-busy','true');button.innerHTML='<span class="seekwp-buy-spinner" aria-hidden="true"></span>正在生成订单…';}
  const restore=function(){controls.forEach(({el,disabled})=>{el.disabled=disabled;});if(button){button.innerHTML=previous.html;button.disabled=previous.disabled;button.removeAttribute('aria-busy');}busy=false;delete document.getElementById('buyBtn').dataset.checkoutBusy;};
  window.setTimeout(function(){
   const overlay=document.createElement('div');overlay.className='seekwp-order-status';overlay.setAttribute('role','status');overlay.setAttribute('aria-live','polite');
   overlay.innerHTML='<div class="seekwp-order-status-card"><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="24" r="21" stroke="currentColor" stroke-width="2.5"/><path d="m14 24 7 7 14-15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>订单已生成</strong></div>';
   document.body.appendChild(overlay);
   window.setTimeout(function(){overlay.remove();try{openPayment();}finally{restore();}},1000);
  },600);
 };
})();
